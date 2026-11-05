'use client'

import { useState } from 'react'

const TYPES = [
  ['carrier', 'Carrier'],
  ['mvno', 'MVNO'],
  ['reseller', 'Reseller'],
  ['enterprise', 'Enterprise'],
  ['other', 'Other'],
] as const

const SERVICES = [
  ['voice', 'Voice'],
  ['sms', 'SMS'],
  ['airtime', 'Airtime'],
  ['esim', 'eSIM'],
  ['dids', 'DIDs / Numbers'],
] as const

const field =
  'mt-2 w-full rounded-sm border border-navy-100 bg-white px-4 py-3 text-[15px] text-navy-DEFAULT placeholder:text-navy-300 focus:border-cyan-DEFAULT focus:outline-none focus:ring-2 focus:ring-cyan-DEFAULT/30'

export function GetStartedForm({ defaultType = 'carrier' }: { defaultType?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrors({})
    const f = new FormData(e.currentTarget)
    const corridors = String(f.get('corridors') || '')
      .split(/[,\n]/)
      .map((c) => c.trim())
      .filter(Boolean)
    const body = {
      source: 'get-started',
      companyName: f.get('companyName'),
      contactName: f.get('contactName'),
      email: f.get('email'),
      phone: f.get('phone') || undefined,
      companyType: f.get('companyType') || undefined,
      services: f.getAll('services'),
      corridors,
      monthlyVolume: f.get('monthlyVolume') || undefined,
      message: f.get('message') || undefined,
      website: f.get('website') || undefined,
    }
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) return setStatus('done')
      if (res.status === 422) {
        const data = await res.json()
        setErrors(data.issues ?? {})
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div role="status" className="rounded-md border border-navy-100 bg-white p-10">
        <p className="label text-cyan-DEFAULT">Request received</p>
        <h2 className="mt-4 text-4xl text-navy-DEFAULT">Thank you.</h2>
        <p className="mt-4 text-navy-600">
          We&apos;ll review your corridors and follow up by email.
        </p>
      </div>
    )
  }

  const err = (k: string) =>
    errors[k]?.[0] ? (
      <span className="mt-1 block text-sm text-red-600" role="alert">
        {errors[k][0]}
      </span>
    ) : null

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7 rounded-md border border-navy-100 bg-white p-6 sm:p-10">
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Your name
          <input name="contactName" required autoComplete="name" className={field} />
          {err('contactName')}
        </label>
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Work email
          <input name="email" type="email" required autoComplete="email" className={field} />
          {err('email')}
        </label>
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Company
          <input name="companyName" required autoComplete="organization" className={field} />
          {err('companyName')}
        </label>
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Phone <span className="font-normal text-navy-400">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-navy-DEFAULT">I am a…</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPES.map(([v, l]) => (
            <label key={v} className="cursor-pointer">
              <input type="radio" name="companyType" value={v} defaultChecked={v === defaultType} className="peer sr-only" />
              <span className="label inline-block rounded-sm border border-navy-100 px-4 py-2.5 text-navy-600 transition-colors peer-checked:border-navy-DEFAULT peer-checked:bg-navy-DEFAULT peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-DEFAULT">
                {l}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-navy-DEFAULT">Services you need</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map(([v, l]) => (
            <label key={v} className="cursor-pointer">
              <input type="checkbox" name="services" value={v} className="peer sr-only" />
              <span className="label inline-block rounded-sm border border-navy-100 px-4 py-2.5 text-navy-600 transition-colors peer-checked:border-cyan-DEFAULT peer-checked:bg-cyan-DEFAULT peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-DEFAULT">
                {l}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-navy-DEFAULT">
        Destinations / corridors
        <textarea
          name="corridors"
          rows={3}
          placeholder="e.g. Nigeria, India, Colombia (comma or line separated)"
          className={field}
        />
      </label>

      <label className="block text-sm font-medium text-navy-DEFAULT">
        Estimated monthly volume <span className="font-normal text-navy-400">(optional)</span>
        <input name="monthlyVolume" placeholder="e.g. minutes, messages or spend per month" className={field} />
      </label>

      <label className="block text-sm font-medium text-navy-DEFAULT">
        Anything else? <span className="font-normal text-navy-400">(optional)</span>
        <textarea name="message" rows={3} className={field} />
      </label>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please check the highlighted fields and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Request interconnect details'}
      </button>
      <p className="text-xs text-navy-400">We use your details only to respond to this request.</p>
    </form>
  )
}
