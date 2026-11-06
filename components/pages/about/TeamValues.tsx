'use client';

import { motion } from 'framer-motion';
import { Handshake, Globe, Code, Stack } from '@phosphor-icons/react';

const values = [
  {
    icon: Handshake,
    title: 'Accountability',
    description: 'One team to call when it matters. We would rather have a direct conversation about a problem than hide it behind a ticket queue.'
  },
  {
    icon: Globe,
    title: 'Emerging-market depth',
    description: 'We have been building in these corridors since 2007. Coverage isn\'t just routes. It\'s relationships built over time.'
  },
  {
    icon: Code,
    title: 'Built to integrate',
    description: 'We design products around APIs and automation, so your team can connect once and scale.'
  },
  {
    icon: Stack,
    title: 'One platform',
    description: 'Voice, SMS, airtime, eSIM and numbers through one integration, on one invoice, with one support contact.'
  }
];

export default function TeamValues() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16"
        >
          How we operate.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-navy-100"
              >
                <Icon size={40} weight="duotone" className="text-cyan-DEFAULT mb-6" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-4">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
