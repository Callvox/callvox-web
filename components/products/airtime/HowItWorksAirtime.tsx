'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Lightning, CheckCircle } from '@phosphor-icons/react'

export default function HowItWorksAirtime() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: Phone,
      title: 'MSISDN Validation',
      description: 'Send the destination number. We identify the operator, country, and available denomination ranges automatically.',
    },
    {
      icon: Lightning,
      title: 'Top-Up Execution',
      description: 'API call dispatches the recharge to the operator\'s system.',
    },
    {
      icon: CheckCircle,
      title: 'Webhook Confirmation',
      description: 'Delivery confirmed via webhook, with a transaction record and operator reference number.',
    },
  ]

  return (
    <section ref={ref} className="bg-navy-50/40 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-navy-DEFAULT text-balance mb-12 text-center"
        >
          One API call. Confirmed by webhook.
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: (i + 1) * 0.15 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyan-DEFAULT/10 rounded-full">
                    <Icon size={28} weight="bold" className="text-cyan-DEFAULT" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-navy-DEFAULT mb-2">{step.title}</h3>
                <p className="text-sm text-navy-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900 rounded-lg p-6 overflow-x-auto"
        >
          <pre className="text-sm text-gray-300 font-mono">
{`POST /v1/airtime/topup
{
  "msisdn": "+2348012345678",
  "amount": 500,
  "currency": "NGN",
  "reference": "txn_abc123"
}

Response:
{
  "status": "delivered",
  "operator": "MTN Nigeria",
  "reference": "txn_abc123",
  "delivered_at": "2026-04-01T10:23:41Z"
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
