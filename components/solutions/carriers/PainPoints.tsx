'use client'

import { motion } from 'framer-motion'
import { ArrowFatDown, Clock, Stack, Headset } from '@phosphor-icons/react'
import { Section, SectionHeader } from '@/components/Section'

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
  return (
    <Section>
      <SectionHeader title="We solve the problems carriers actually have." />

      <div>
        {painPoints.map((point, idx) => {
          const Icon = point.icon
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex gap-6 border-b border-navy-100 py-8 last:border-b-0"
            >
              <Icon size={32} weight="duotone" className="flex-shrink-0 text-cyan-DEFAULT" />
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-navy-DEFAULT">{point.title}</h3>
                <p className="leading-relaxed text-navy-600">{point.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
