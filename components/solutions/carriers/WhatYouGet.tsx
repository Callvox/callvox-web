'use client'

import { m as motion } from 'framer-motion'
import {
  PhoneCall,
  Plugs,
  Handshake,
  Headset,
  ChartBar,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { Section, SectionHeader } from '@/components/Section'

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
    title: 'CDR delivery agreed per account',
  },
  {
    icon: CurrencyDollar,
    title: 'Blended & per-destination rate options',
  },
]

export default function WhatYouGet() {
  return (
    <Section tone="tint">
      <SectionHeader title="The full interconnect package." />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="flex gap-4"
            >
              <Icon size={24} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
              <p className="text-lg font-semibold text-navy-DEFAULT">{feature.title}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
