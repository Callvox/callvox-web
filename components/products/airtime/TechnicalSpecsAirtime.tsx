'use client'

import { m as motion } from 'framer-motion'
import { FileText } from '@phosphor-icons/react'
import { Section, SectionHeader } from '@/components/Section'

const specs = [
  { label: 'Protocol', value: 'REST API (JSON)' },
  { label: 'Validation', value: 'MSISDN lookup + operator identification' },
  { label: 'Webhook', value: 'Delivery confirmation, failure codes, operator ref' },
  { label: 'Transaction log', value: 'Exportable' },
  { label: 'Rates', value: 'Quoted by corridor and volume, on request' },
]

export default function TechnicalSpecsAirtime() {
  return (
    <Section>
      <SectionHeader title="Technical specifications." />

      <dl className="grid grid-cols-1 border-t border-navy-100 md:grid-cols-2 md:gap-x-12">
        {specs.map((spec) => (
          <div key={spec.label} className="border-b border-navy-100 py-5">
            <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{spec.label}</dt>
            <dd className="text-navy-600">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex gap-4 rounded-lg border border-navy-100 bg-navy-50/50 p-6"
      >
        <FileText size={28} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
        <div>
          <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">Integration details</h3>
          <p className="text-sm leading-relaxed text-navy-600">
            Integration documentation and sandbox details are shared once your account is set up.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
