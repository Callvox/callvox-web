'use client'

import { m as motion } from 'framer-motion'
import { House, Storefront, ChartLineUp } from '@phosphor-icons/react'
import { Section, SectionHeader } from '@/components/Section'

const useCases = [
  {
    icon: House,
    title: 'Diaspora remittance platforms',
    description:
      "Your users send airtime from the UK to Nigeria, the US to Mexico, Germany to India. Callvox delivers airtime to their family's phone through the destination operator.",
  },
  {
    icon: Storefront,
    title: 'Mobile money operators',
    description:
      'Integrate airtime top-up as a core transaction type alongside cash transfers and bill payments. REST API with webhook delivery confirmation.',
  },
  {
    icon: ChartLineUp,
    title: 'Retail & reseller networks',
    description:
      'Distribute airtime to your own customers and agents through one API, with every transaction traceable.',
  },
]

export default function UseCasesAirtime() {
  return (
    <Section>
      <SectionHeader
        title="Airtime for remittance corridors."
        intro="Diaspora communities send airtime, not just cash. It's one of the most direct forms of mobile support."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {useCases.map((useCase, i) => {
          const Icon = useCase.icon
          return (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-lift rounded-xl border border-navy-100 p-6"
            >
              <Icon size={32} weight="duotone" className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-lg font-semibold text-navy-DEFAULT">{useCase.title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{useCase.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
