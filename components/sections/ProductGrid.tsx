'use client'

import Link from 'next/link'
import { useState } from 'react'

type Product = {
  id: string
  name: string
  pitch: string
  stat: string
  href: string
  title: string
  panel: React.ReactNode
}

const Row = ({ cells, head }: { cells: string[]; head?: boolean }) => (
  <div
    className={`grid grid-cols-4 gap-2 px-4 py-2.5 ${head ? 'label text-navy-300' : 'border-t border-white/10 text-navy-200'}`}
  >
    {cells.map((c, i) => (
      <span key={i} className={i === 0 ? (head ? '' : 'text-white') : 'text-right'}>
        {c}
      </span>
    ))}
  </div>
)

const Code = ({ children }: { children: string }) => (
  <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-6 text-navy-200">{children}</pre>
)

// All figures in the panels are illustrative samples.
const products: Product[] = [
  {
    id: 'voice',
    name: 'Voice',
    pitch: 'Wholesale termination & origination',
    stat: '500+ premium CLI routes',
    href: '/products/voice',
    title: 'Route table · sample',
    panel: (
      <>
        <Row head cells={['Destination', 'ASR %', 'ACD', 'Tier']} />
        <Row cells={['Nigeria · Mobile', '61.4', '3:42', 'Premium']} />
        <Row cells={['India · Mobile', '58.9', '4:05', 'Premium']} />
        <Row cells={['Pakistan · Mobile', '63.2', '3:18', 'Premium']} />
        <Row cells={['Colombia · Mobile', '66.7', '5:11', 'Premium']} />
        <Row cells={['Philippines · Mobile', '57.8', '4:27', 'Standard']} />
      </>
    ),
  },
  {
    id: 'sms',
    name: 'SMS / Messaging',
    pitch: 'A2P SMS & bulk messaging API',
    stat: '200+ countries · SMPP & REST',
    href: '/products/sms',
    title: 'POST /v1/messages',
    panel: (
      <Code>{`{
  "to": "+2348012345678",
  "from": "CALLVOX",
  "body": "Your code is 482 913",
  "dlr": true
}

→ 202 Accepted
{ "id": "msg_8f2c1a", "status": "queued" }
→ DLR  delivered  · 1.8s`}</Code>
    ),
  },
  {
    id: 'airtime',
    name: 'Airtime Top-Ups',
    pitch: 'International mobile recharge',
    stat: '800+ operators · <3s delivery',
    href: '/products/airtime',
    title: 'POST /v1/topups',
    panel: (
      <Code>{`{
  "msisdn": "+919812345678",
  "operator": "auto",
  "amount": 10.00,
  "currency": "USD"
}

→ 200 OK
{ "id": "tpu_41d9e0", "status": "delivered",
  "operator": "detected", "elapsed_ms": 2140 }`}</Code>
    ),
  },
  {
    id: 'esim',
    name: 'eSIMs',
    pitch: 'Wholesale eSIM provisioning',
    stat: 'GSMA SGP.22 / SGP.32 · IoT-ready',
    href: '/products/esim',
    title: 'Provisioning flow',
    panel: (
      <ol className="font-data divide-y divide-white/10 text-sm text-navy-200">
        {[
          ['01', 'Create profile order', 'POST /v1/esim/orders'],
          ['02', 'Receive activation code', 'LPA:1$…$…'],
          ['03', 'Device downloads profile', 'SM-DP+ handshake'],
          ['04', 'Profile active', 'webhook: esim.enabled'],
        ].map(([n, a, b]) => (
          <li key={n} className="flex items-baseline gap-4 px-5 py-3.5">
            <span className="text-signal">{n}</span>
            <span className="flex-1 text-white">{a}</span>
            <span className="text-navy-300">{b}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: 'dids',
    name: 'DIDs / Numbers',
    pitch: 'Virtual phone numbers worldwide',
    stat: '90+ countries · instant provisioning',
    href: '/products/dids',
    title: 'Number inventory · sample',
    panel: (
      <>
        <Row head cells={['Number', 'Country', 'Type', 'Status']} />
        <Row cells={['+1 305 555 01xx', 'US', 'Local', 'Available']} />
        <Row cells={['+44 20 7946 0xxx', 'GB', 'Local', 'Available']} />
        <Row cells={['+57 1 555 01xx', 'CO', 'Local', 'Available']} />
        <Row cells={['+234 1 555 01xx', 'NG', 'Local', 'Available']} />
        <Row cells={['+971 4 555 01xx', 'AE', 'Local', 'Available']} />
      </>
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
              Five services. <em>One</em> integration.
            </h2>
            <p className="mt-6 max-w-md text-lg text-navy-600">
              Stop stitching together vendors. Run voice, messaging, airtime, eSIM and numbers
              from a single API, a single invoice and a single support desk.
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
              <div className="border-t border-white/10 px-5 py-3 label text-navy-300">Illustrative sample</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
