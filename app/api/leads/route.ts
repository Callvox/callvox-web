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
  website: z.string().optional(),
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  corridors: z.array(z.string()).optional(),
  monthlyVolume: z.string().optional(),
  message: z.string().optional(),
})

type Lead = z.infer<typeof leadSchema>

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
