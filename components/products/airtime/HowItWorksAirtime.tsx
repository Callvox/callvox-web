'use client'

import { motion } from 'framer-motion'
import { Phone, Lightning, CheckCircle } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'

const steps = [
  {
    icon: Phone,
    title: 'MSISDN validation',
    description: 'Send the destination number. We identify the operator, country, and available denomination ranges automatically.',
  },
  {
    icon: Lightning,
    title: 'Top-up execution',
    description: "API call dispatches the recharge to the operator's system.",
  },
  {
    icon: CheckCircle,
    title: 'Webhook confirmation',
    description: 'Delivery confirmed via webhook, with a transaction record and operator reference number.',
  },
]

export default function HowItWorksAirtime() {
  return (
    <section className="bg-navy-50/40 py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="display-h2 mb-14 font-semibold text-navy-DEFAULT"
        >
          A top-up request, confirmed by webhook.
        </motion.h2>
        <FlowSteps steps={steps} />
      </div>
    </section>
  )
}
