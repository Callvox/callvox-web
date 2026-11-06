'use client'

import { motion } from 'framer-motion'
import {
  ArrowFatDown,
  Clock,
  Stack,
  Headset,
} from '@phosphor-icons/react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  {
    icon: ArrowFatDown,
    title: 'Route quality degradation',
    description: 'Aggregated routes pass through intermediaries, and every extra hop is another place for quality to slip. Direct interconnects take those hops out.',
  },
  {
    icon: Clock,
    title: 'Slow onboarding',
    description: 'Long procurement cycles hold up new routes. We keep it simple: tell us your corridors and we send interconnect details and a rate deck.',
  },
  {
    icon: Stack,
    title: 'Too many suppliers',
    description: 'A separate supplier for every region means separate contracts, invoices and support lines. One partner replaces that with one integration, one invoice and one team.',
  },
  {
    icon: Headset,
    title: 'Poor support from wholesale providers',
    description: 'Most wholesale providers send you to a ticket queue. You get one support contact who knows your account and understands carrier infrastructure.',
  },
]

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-navy-DEFAULT mb-16 text-balance"
        >
          We solve the problems carriers actually have.
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6 py-8 border-b border-navy-50 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <Icon
                    size={32}
                    weight="duotone"
                    className="text-cyan-DEFAULT"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-navy-DEFAULT mb-2">
                    {point.title}
                  </h3>
                  <p className="text-navy-200 leading-relaxed">
                    {point.description}
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
