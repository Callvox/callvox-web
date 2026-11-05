import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// LEAD CAPTURE — INTERIM WIRING
// ------------------------------------------------------------------
// This route validates and accepts submissions from lead-capture forms
// (rate deck download, "talk to a specialist", generic quote requests).
//
// It does NOT currently connect to a real CRM or send real email — that
// integration point is `deliverLead()` below. Wire it to your CRM's API
// (e.g. HubSpot, Salesforce, Close) and/or a transactional email provider
// before relying on this in production. Right now it only logs the lead
// server-side and returns a success response, so nothing submitted here
// is actually reaching sales/compliance yet.
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

async function deliverLead(lead: z.infer<typeof leadSchema>) {
  // TODO: replace with a real CRM call and/or email notification.
  // e.g. await hubspotClient.crm.contacts.basicApi.create({...})
  console.log('[lead-capture] new lead received (not yet wired to a CRM):', {
    ...lead,
    receivedAt: new Date().toISOString(),
  })
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

  await deliverLead(parsed.data)

  return NextResponse.json({
    ok: true,
    message: 'Received — a specialist will follow up by email.',
  })
}
