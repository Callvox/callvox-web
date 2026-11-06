import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// LEAD CAPTURE
// ------------------------------------------------------------------
// Validates submissions from lead-capture forms and emails them to the
// sales inbox through Resend (https://resend.com/docs/api-reference/emails/send-email).
//
// Required environment variables (set in Vercel, never commit):
//   RESEND_API_KEY     Resend API key
//   LEADS_TO_EMAIL     Where leads are delivered (comma-separated for several)
//   LEADS_FROM_EMAIL   Sender on a domain verified in Resend, e.g. "Callvox <leads@callvox.net>"
// ------------------------------------------------------------------

const leadSchema = z.object({
  source: z.enum(['rate-deck', 'talk-to-specialist', 'quote-request', 'get-started']),
  companyType: z.enum(['carrier', 'mvno', 'reseller', 'enterprise', 'other']).optional(),
  services: z.array(z.enum(['voice', 'sms', 'airtime', 'esim', 'dids'])).optional(),
  // Honeypot: real users never fill this in
  website: z.string().max(200).optional(),
  companyName: z.string().min(1, 'Company name is required').max(200),
  contactName: z.string().min(1, 'Contact name is required').max(200),
  email: z.string().email('Enter a valid email address').max(254),
  phone: z.string().max(50).optional(),
  corridors: z.array(z.string().max(100)).max(30).optional(),
  monthlyVolume: z.string().max(100).optional(),
  message: z.string().max(5000).optional(),
})

type Lead = z.infer<typeof leadSchema>

// RATE LIMITING
// ------------------------------------------------------------------
// Best-effort, in-memory sliding window. State lives per server instance, so it
// blunts casual abuse and form-spam bursts but is not a hard global guarantee.
// For stricter control, add a Vercel Firewall rate-limit rule on POST /api/leads.
// ------------------------------------------------------------------
const PER_IP_LIMIT = 5 // submissions
const PER_IP_WINDOW_MS = 10 * 60 * 1000 // per 10 minutes
const GLOBAL_LIMIT = 100 // submissions
const GLOBAL_WINDOW_MS = 60 * 60 * 1000 // per hour, caps total email volume

const hits = new Map<string, number[]>()
let globalHits: number[] = []

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  )
}

/** Returns seconds to wait if limited, otherwise 0 (and records the hit). */
function checkRateLimit(ip: string, now = Date.now()): number {
  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS)
  if (globalHits.length >= GLOBAL_LIMIT) {
    return Math.ceil((GLOBAL_WINDOW_MS - (now - globalHits[0])) / 1000)
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < PER_IP_WINDOW_MS)
  if (recent.length >= PER_IP_LIMIT) {
    hits.set(ip, recent)
    return Math.ceil((PER_IP_WINDOW_MS - (now - recent[0])) / 1000)
  }

  recent.push(now)
  hits.set(ip, recent)
  globalHits.push(now)

  // Keep the map from growing without bound
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= PER_IP_WINDOW_MS)) hits.delete(k)
  }
  return 0
}

const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim()

async function deliverLead(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_TO_EMAIL
  const from = process.env.LEADS_FROM_EMAIL

  if (!apiKey || !to || !from) {
    console.error('[lead-capture] Email not configured (RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL). Lead not delivered.')
    return false
  }

  const rows: [string, string | undefined][] = [
    ['Source', lead.source],
    ['Company', lead.companyName],
    ['Name', lead.contactName],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Type', lead.companyType],
    ['Services', lead.services?.join(', ')],
    ['Corridors', lead.corridors?.join(', ')],
    ['Monthly volume', lead.monthlyVolume],
    ['Message', lead.message],
  ]
  const present = rows.filter(([, v]) => v && v.length > 0) as [string, string][]

  const text = present.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html =
    '<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">' +
    present
      .map(([k, v]) => `<tr><td style="color:#555;vertical-align:top"><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
      .join('') +
    '</table>'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((t) => t.trim()).filter(Boolean),
      reply_to: lead.email,
      subject: oneLine(`New lead: ${lead.companyName}${lead.companyType ? ` (${lead.companyType})` : ''}`),
      text,
      html,
    }),
  })

  if (!res.ok) {
    console.error('[lead-capture] Resend error', res.status, await res.text().catch(() => ''))
    return false
  }
  return true
}

export async function POST(req: NextRequest) {
  const retryAfter = checkRateLimit(clientIp(req))
  if (retryAfter > 0) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  // Bots fill the hidden honeypot field. Pretend success, deliver nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: 'Received.' })
  }

  const delivered = await deliverLead(parsed.data)
  if (!delivered) {
    return NextResponse.json(
      { error: 'We could not send your request right now. Please try again shortly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Received — a specialist will follow up by email.',
  })
}
