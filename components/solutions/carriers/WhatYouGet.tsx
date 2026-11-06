'use client'

import { motion } from 'framer-motion'
import {
  PhoneCall,
  Plugs,
  Handshake,
  Headset,
  ChartBar,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: PhoneCall,
    title: '500+ direct routes across 190+ countries',
  },
  {
    icon: Plugs,
    title: 'Direct interconnects, not aggregated routes',
  },
  {
    icon: Handshake,
    title: 'One integration and one invoice',
  },
  {
    icon: Headset,
    title: 'One support contact who understands carrier infrastructure',
  },
  {
    icon: ChartBar,
    title: 'Real-time CDRs via API + portal',
  },
  {
    icon: CurrencyDollar,
    title: 'Blended & per-destination rate options',
  },
]

export default function WhatYouGet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="bg-navy-50/40 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-navy-DEFAULT mb-16 text-balance"
        >
          The full interconnect package.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon
                    size={24}
                    weight="duotone"
                    className="text-cyan-DEFAULT mt-1"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-DEFAULT text-lg">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
