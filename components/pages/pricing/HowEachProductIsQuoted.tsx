'use client'

import { Section, SectionHeader } from '@/components/Section'

const products = [
  { product: 'Voice', quotedBy: 'Destination' },
  { product: 'SMS', quotedBy: 'Destination' },
  { product: 'Airtime', quotedBy: 'Operator and volume' },
  { product: 'eSIM', quotedBy: 'Project (platform and profile pricing)' },
  { product: 'Numbers', quotedBy: 'Country and number type' },
]

export default function HowEachProductIsQuoted() {
  return (
    <Section tone="tint">
      <SectionHeader title="How each product is quoted." />
      <dl className="border-t border-navy-100">
        {products.map((p) => (
          <div key={p.product} className="grid gap-1 border-b border-navy-100 py-5 sm:grid-cols-[12rem_1fr] sm:gap-10">
            <dt className="font-semibold text-navy-DEFAULT">{p.product}</dt>
            <dd className="text-navy-600">{p.quotedBy}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
