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
  <ul className="divide-y divide-white/10 text-base text-navy-200">
    {steps.map(([a, b]) => (
      <li key={a} className="flex items-baseline gap-4 px-6 py-6">
        <span aria-hidden className="text-signal">→</span>
        <span className="flex-1 text-white">{a}</span>
        <span className="text-right text-navy-300">{b}</span>
      </li>
    ))}
  </ul>
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
                  className={`group flex w-full items-start gap-5 border-b border-navy-100 px-6 py-6 text-left transition-colors last:border-b-0 ${
                    on ? 'bg-white' : 'hover:bg-white/60'
                  }`}
                >
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
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="label text-navy-200">{current.title}</span>
                <Link href={current.href} className="label text-signal hover:text-white">
                  Explore {current.name} →
                </Link>
              </div>
              <div className="font-data flex-1 py-2 text-sm">{current.panel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
