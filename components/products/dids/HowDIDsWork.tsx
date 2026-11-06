'use client'

import { motion } from 'framer-motion'
import { MagnifyingGlass, ShoppingCartSimple, ArrowsSplit } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'

const steps = [
  { icon: MagnifyingGlass, title: 'Choose country and type', description: 'Search inventory by country and number type. Availability varies by country.' },
  { icon: ShoppingCartSimple, title: 'Order numbers', description: 'Order through the API or the portal.' },
  { icon: ArrowsSplit, title: 'Route to your trunk', description: 'Point the numbers at your trunk for voice and SMS.' },
]

export default function HowDIDsWork() {
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
          From search to live number.
        </motion.h2>
        <FlowSteps steps={steps} />
      </div>
    </section>
  )
}
