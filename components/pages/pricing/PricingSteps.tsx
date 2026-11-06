'use client'

import { Section, SectionHeader } from '@/components/Section'

const steps = [
  { title: 'Tell us your corridors', body: 'Which destinations, which services, and roughly how much traffic you expect.' },
  { title: 'Receive a rate deck', body: 'Rates for the corridors you asked about, quoted by destination and volume.' },
  { title: 'Connect and test', body: 'Integrate the services you take and test before sending live traffic.' },
]

export default function PricingSteps() {
  return (
    <Section>
      <SectionHeader title="From request to rate deck." />
      <ol className="divide-y divide-navy-100 border-y border-navy-100">
        {steps.map((s) => (
          <li key={s.title} className="grid gap-2 py-6 md:grid-cols-[18rem_1fr] md:gap-10">
            <h3 className="text-xl font-semibold text-navy-DEFAULT">{s.title}</h3>
            <p className="leading-relaxed text-navy-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
