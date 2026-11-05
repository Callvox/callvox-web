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

const Code = ({ children }: { children: string }) => (
  <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-6 text-navy-200">{children}</pre>
)

const Flow = ({ steps }: { steps: [string, string, string][] }) => (
  <ol className="font-data divide-y divide-white/10 text-sm text-navy-200">
    {steps.map(([n, a, b]) => (
      <li key={n} className="flex items-baseline gap-4 px-5 py-3.5">
        <span className="text-signal">{n}</span>
        <span className="flex-1 text-white">{a}</span>
        <span className="text-right text-navy-300">{b}</span>
      </li>
    ))}
  </ol>
)

// Panels show how each product works. They deliberately contain no performance figures.
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
          ['01', 'Your traffic', 'SIP trunk or IP peering'],
          ['02', 'Callvox network', 'Route optimisation'],
          ['03', 'Termination', 'Direct interconnect'],
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
    title: 'POST /v1/messages · example',
    panel: (
      <Code>{`{
  "to": "+2348012345678",
  "from": "CALLVOX",
  "body": "Your code is 482 913",
  "dlr": true
}

→ 202 Accepted
{ "id": "msg_8f2c1a", "status": "queued" }`}</Code>
    ),
  },
  {
    id: 'airtime',
    name: 'Airtime Top-Ups',
    pitch: 'International mobile recharge',
    stat: `${STATS.operators.value} operators`,
    href: '/products/airtime',
    title: 'POST /v1/topups · example',
    panel: (
      <Code>{`{
  "msisdn": "+919812345678",
  "operator": "auto",
  "amount": 10.00,
  "currency": "USD"
}

→ 200 OK
{ "id": "tpu_41d9e0", "status": "delivered" }`}</Code>
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
          ['01', 'Create profile order', 'POST /v1/esim/orders'],
          ['02', 'Receive activation code', 'LPA string'],
          ['03', 'Device downloads profile', 'SM-DP+'],
          ['04', 'Profile active', 'Webhook'],
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
          ['01', 'Choose country & type', 'Search inventory'],
          ['02', 'Order numbers', 'API or portal'],
          ['03', 'Route to your trunk', 'Voice & SMS'],
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
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-cyan-DEFAULT">01 — Platform</p>
            <h2 className="mt-5 text-5xl leading-[1.02] text-navy-DEFAULT lg:text-6xl">
              Voice first. <em>Now the full stack.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-navy-600">
              Carrier-grade voice is the foundation. Add messaging, airtime, eSIM and numbers
              through the same integration, on the same invoice, with the same support team.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 lg:grid-cols-12">
          {/* Tabs */}
          <div role="tablist" aria-label="Products" className="bg-paper lg:col-span-5">
            {products.map((p, i) => {
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
                  <span className="font-data pt-1 text-xs text-navy-400">0{i + 1}</span>
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
              <div className="label border-t border-white/10 px-5 py-3 text-navy-300">Illustrative example</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
