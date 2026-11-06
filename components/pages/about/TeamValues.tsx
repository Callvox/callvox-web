'use client';

import { m as motion } from 'framer-motion';
import { Handshake, Globe, Code } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const values = [
  {
    icon: Handshake,
    title: 'Accountability',
    description: 'One team to call when it matters. We would rather have a direct conversation about a problem than hide it.',
  },
  {
    icon: Globe,
    title: 'Emerging-market depth',
    description: "Coverage isn't just routes. It's relationships built over time, corridor by corridor.",
  },
  {
    icon: Code,
    title: 'Built to integrate',
    description: 'We design products around APIs and automation, so your team can connect once and scale.',
  },
];

export default function TeamValues() {
  return (
    <Section tone="tint">
      <SectionHeader title="How we operate." />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map((value, idx) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-navy-100 bg-white p-8"
            >
              <Icon size={40} weight="duotone" className="mb-6 text-cyan-DEFAULT" />
              <h3 className="mb-4 text-xl font-semibold text-navy-DEFAULT">{value.title}</h3>
              <p className="leading-relaxed text-navy-600">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
