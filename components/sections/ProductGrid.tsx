'use client'

import Link from 'next/link'
import { useState } from 'react'
import { STATS } from '@/lib/stats'

type Product = {
  id: string
  name: string
  pitch: string
  stat: string
  href: string
  title: string
  panel: React.ReactNode
}

const Flow = ({ steps }: { steps: [string, string][] }) => (
  <ol className="px-6 py-8 lg:px-10">
    {steps.map(([title, detail], i) => (
      <li key={title} className="relative flex gap-5 pb-9 last:pb-0">
        {i < steps.length - 1 && (
          <span aria-hidden className="absolute left-[15px] top-8 h-full w-px bg-gradient-to-b from-signal/50 to-white/10" />
        )}
        <span
          aria-hidden
          className="font-data relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/50 bg-navy-900 text-xs text-signal"
        >
          {i + 1}
        </span>
        <div className="pt-0.5">
          <p className="text-xl font-medium leading-tight text-white">{title}</p>
          <p className="font-data mt-1.5 text-sm text-navy-300">{detail}</p>
        </div>
      </li>
    ))}
  </ol>
)

// Panels describe how each product is delivered. No performance figures, no example payloads.
const products: Product[] = [
  {
    id: 'voice',
    name: 'Voice',
    pitch: 'Wholesale termination & origination',
    stat: `${STATS.routes.value} direct routes`,
    href: '/products/voice',
    title: 'How your traffic flows',
    panel: (
      <Flow
        steps={[
          ['Your traffic', 'SIP trunk or IP peering'],
          ['Callvox network', 'Route optimisation'],
          ['Termination', 'Direct interconnect'],
        ]}
      />
    ),
  },
  {
    id: 'sms',
    name: 'SMS / Messaging',
    pitch: 'A2P SMS & bulk messaging API',
    stat: 'SMPP & REST',
    href: '/products/sms',
    title: 'How messages are delivered',
    panel: (
      <Flow
        steps={[
          ['Your platform', 'SMPP or REST'],
          ['Callvox messaging routes', 'Direct operator routes'],
          ['Handset', 'Delivery receipts back to you'],
        ]}
      />
    ),
  },
  {
    id: 'airtime',
    name: 'Airtime Top-Ups',
    pitch: 'International mobile recharge',
    stat: `${STATS.operators.value} operators`,
    href: '/products/airtime',
    title: 'How a top-up is delivered',
    panel: (
      <Flow
        steps={[
          ['Your system', 'Top-up request by API'],
          ['Callvox', 'Routes to the destination operator'],
          ['Subscriber', 'Balance credited, status returned'],
        ]}
      />
    ),
  },
  {
    id: 'esim',
    name: 'eSIMs',
    pitch: 'Wholesale eSIM provisioning',
    stat: 'Profiles by API',
    href: '/products/esim',
    title: 'Provisioning flow',
    panel: (
      <Flow
        steps={[
          ['Order a profile', 'By API'],
          ['Receive activation code', 'LPA string'],
          ['Device downloads profile', 'SM-DP+'],
          ['Profile active', 'Status returned to you'],
        ]}
      />
    ),
  },
  {
    id: 'dids',
    name: 'DIDs / Numbers',
    pitch: 'Virtual phone numbers worldwide',
    stat: 'Provisioned on demand',
    href: '/products/dids',
    title: 'Number provisioning',
    panel: (
      <Flow
        steps={[
          ['Choose country & type', 'Search inventory'],
          ['Order numbers', 'API or portal'],
          ['Route to your trunk', 'Voice & SMS'],
        ]}
      />
    ),
  },
]

export function ProductGrid() {
  const [active, setActive] = useState(products[0].id)
  const current = products.find((p) => p.id === active) ?? products[0]

  return (
    <section className="bg-paper py-28 lg:py-40">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h2 className="display-h2 text-navy-DEFAULT">
              Voice first. <em>Now the full stack.</em>
            </h2>
            <p className="mt-6 text-lg text-navy-600">
              Carrier-grade voice is the foundation. Add messaging, airtime, eSIM and numbers
              through the same integration, invoice and support team.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 lg:grid-cols-12">
          {/* Tabs */}
          <div role="tablist" aria-label="Products" className="bg-paper lg:col-span-5">
            {products.map((p) => {
              const on = p.id === active
              return (
                <button
                  key={p.id}
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setActive(p.id)}
                  onMouseEnter={() => setActive(p.id)}
                  className={`group relative flex w-full items-start gap-5 border-b border-navy-100 px-6 py-6 text-left transition-colors last:border-b-0 ${
                    on ? 'bg-white' : 'hover:bg-white/60'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 left-0 w-0.5 transition-colors ${on ? 'bg-cyan-DEFAULT' : 'bg-transparent'}`}
                  />
                  <span className="flex-1">
                    <span className="block font-display text-3xl leading-none text-navy-DEFAULT">{p.name}</span>
                    <span className="mt-2 block text-[15px] text-navy-600">{p.pitch}</span>
                    <span className={`label mt-3 block ${on ? 'text-cyan-DEFAULT' : 'text-navy-400'}`}>{p.stat}</span>
                  </span>
                  <span
                    aria-hidden
                    className={`pt-1 text-xl transition-transform ${on ? 'translate-x-1 text-cyan-DEFAULT' : 'text-navy-300'}`}
                  >
                    →
                  </span>
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="surface-ink bg-navy-DEFAULT lg:col-span-7"
          >
            <div className="bg-grid-ink flex h-full min-h-[22rem] flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-10">
                <span className="label text-navy-200">{current.title}</span>
                <span className="label text-navy-400">
                  {String(products.indexOf(current) + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 items-center">{current.panel}</div>
              <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                <p className="text-[15px] text-navy-200">{current.pitch}</p>
                <Link
                  href={current.href}
                  className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-md border border-signal/50 px-5 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-navy-DEFAULT sm:self-auto"
                >
                  Explore {current.name} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
