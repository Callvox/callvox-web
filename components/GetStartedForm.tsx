'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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

// Order used to find the first invalid field to focus
const FIELD_ORDER = ['contactName', 'email', 'companyName']

const field =
  'mt-2 w-full rounded-control border border-navy-100 bg-white px-4 py-2.5 text-[15px] text-navy-DEFAULT placeholder:text-navy-300 focus:border-cyan-DEFAULT focus:outline-none focus:ring-2 focus:ring-cyan-DEFAULT/30 aria-[invalid=true]:border-red-600'

// 44px touch targets on phones, compact from sm up
const chip =
  'label inline-flex min-h-[44px] items-center rounded-control border border-navy-100 px-4 text-navy-600 transition-colors sm:min-h-0 sm:py-2 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-DEFAULT'

export function GetStartedForm({ defaultType = '' }: { defaultType?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [formError, setFormError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  // Move the visitor to the confirmation once it replaces the form
  useEffect(() => {
    if (status === 'done') {
      doneRef.current?.focus()
      doneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [status])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrors({})
    setFormError('')
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
        const issues: Record<string, string[]> = data.issues ?? {}
        setErrors(issues)
        setFormError('Please fix the highlighted fields.')
        const first = FIELD_ORDER.find((k) => issues[k]?.length)
        if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      } else if (res.status === 429) {
        setFormError('Too many requests. Please try again in a few minutes.')
      } else {
        setFormError("We couldn't send your request. Please try again shortly.")
      }
      setStatus('error')
    } catch {
      setFormError("We couldn't send your request. Please check your connection and try again.")
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="rounded-md border border-navy-100 bg-white p-10 outline-none">
        <h2 className="display-h2 text-navy-DEFAULT">Thank you.</h2>
        <p className="mt-4 text-navy-600">We&apos;ll follow up by email.</p>
      </div>
    )
  }

  // Wires an input to its error message for screen readers
  const a11y = (k: string) => ({
    'aria-invalid': errors[k]?.[0] ? true : undefined,
    'aria-describedby': errors[k]?.[0] ? `err-${k}` : undefined,
  })
  const err = (k: string) =>
    errors[k]?.[0] ? (
      <span id={`err-${k}`} className="mt-1 block text-sm text-red-600">
        {errors[k][0]}
      </span>
    ) : null
  const req = <span aria-hidden className="text-red-600"> *</span>

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-7 rounded-md border border-navy-100 bg-white p-6 sm:p-10">
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-xs text-navy-500">
        <span aria-hidden className="text-red-600">*</span> Required
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Your name{req}
          <input name="contactName" required aria-required="true" autoComplete="name" className={field} {...a11y('contactName')} />
          {err('contactName')}
        </label>
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Work email{req}
          <input name="email" type="email" required aria-required="true" autoComplete="email" className={field} {...a11y('email')} />
          {err('email')}
        </label>
        <label className="block text-sm font-medium text-navy-DEFAULT">
          Company{req}
          <input name="companyName" required aria-required="true" autoComplete="organization" className={field} {...a11y('companyName')} />
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
              <span className={`${chip} peer-checked:border-navy-DEFAULT peer-checked:bg-navy-DEFAULT peer-checked:text-white`}>{l}</span>
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
              <span className={`${chip} peer-checked:border-cyan-DEFAULT peer-checked:bg-cyan-DEFAULT peer-checked:text-white`}>{l}</span>
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

      {formError && (
        <p role="alert" className="text-sm text-red-600">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex h-11 w-full items-center justify-center rounded-control bg-navy-DEFAULT px-6 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60 sm:h-10 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send request'}
      </button>
      <p className="text-xs text-navy-500">
        We use your details only to respond to this request. See our{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-navy-DEFAULT">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
