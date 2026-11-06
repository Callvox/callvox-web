'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FileText } from '@phosphor-icons/react'

export default function TechnicalSpecsAirtime() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const specs = [
    { label: 'Protocol', value: 'REST API (JSON)' },
    { label: 'Validation', value: 'MSISDN lookup + operator identification' },
    { label: 'Webhook', value: 'Delivery confirmation, failure codes, operator ref' },
    { label: 'CDRs', value: 'Transaction log, exportable' },
  ]

  const complianceCards = [
    {
      icon: FileText,
      title: 'Integration details',
      description: 'Apply for API access and we will share integration documentation and sandbox details.',
      href: '/products/airtime/apply',
      cta: 'Get API access →',
    },
  ]

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Spec table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-navy-DEFAULT mb-6">Technical Specifications</h3>
            <div className="space-y-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-sm font-medium text-navy-600 w-32 flex-shrink-0">{spec.label}</div>
                  <div className="text-sm text-navy-700">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compliance cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {complianceCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className="p-6 border border-navy-100 rounded-lg">
                  <div className="flex gap-3 mb-3">
                    <Icon size={24} weight="bold" className="text-cyan-DEFAULT flex-shrink-0" />
                    <h4 className="font-semibold text-navy-DEFAULT">{card.title}</h4>
                  </div>
                  <p className="text-sm text-navy-600 mb-3">{card.description}</p>
                  <Link href={card.href} className="text-sm font-semibold text-cyan-DEFAULT hover:underline">{card.cta}</Link>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
