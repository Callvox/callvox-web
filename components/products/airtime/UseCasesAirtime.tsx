'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { House, Storefront, ChartLineUp } from '@phosphor-icons/react'

export default function UseCasesAirtime() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const useCases = [
    {
      icon: House,
      title: 'Diaspora remittance platforms',
      description: 'Your users send airtime from the UK to Nigeria, the US to Mexico, Germany to India. Callvox delivers airtime to their family\'s phone through the destination operator.',
    },
    {
      icon: Storefront,
      title: 'Mobile money operators',
      description: 'Integrate airtime top-up as a core transaction type alongside cash transfers and bill payments. REST API with webhook delivery confirmation.',
    },
    {
      icon: ChartLineUp,
      title: 'Retail & reseller networks',
      description: 'Airtime distribution for retail and reseller networks, with transaction tracking through the API.',
    },
  ]

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="display-h2 font-bold text-navy-DEFAULT mb-4">
            The infrastructure behind the world's remittance corridors.
          </h2>
          <p className="text-lg text-navy-600">
            Diaspora communities send airtime, not just cash. It's one of the most direct forms of mobile support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="p-6 border border-navy-100 rounded-2xl hover:border-cyan-DEFAULT/30 transition-colors"
              >
                <Icon size={32} weight="duotone" className="text-cyan-DEFAULT mb-4" />
                <h3 className="text-lg font-semibold text-navy-DEFAULT mb-3">{useCase.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{useCase.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
