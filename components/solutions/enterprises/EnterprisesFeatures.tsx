'use client';

import { m as motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Phone, PhoneTransfer, Hash } from '@phosphor-icons/react';

const features = [
  {
    icon: Phone,
    title: 'Business voice',
    description:
      'Voice for sales teams, contact centres and offices, delivered over direct carrier routes into Latin America, Africa, South Asia and the Middle East.',
  },
  {
    icon: PhoneTransfer,
    title: 'Standard SIP',
    description: 'Connect the PBX or UCaaS platform you already run over standard SIP trunking.',
  },
  {
    icon: Hash,
    title: 'Virtual numbers',
    description: 'Numbers by country and type, ordered by API or portal, alongside your voice.',
  },
];

export default function EnterprisesFeatures() {
  return (
    <Section>
      <SectionHeader title="Why buy voice direct from a carrier." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-navy-50/40 p-6"
            >
              <Icon size={32} weight="duotone" className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-lg font-semibold text-navy-DEFAULT">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
