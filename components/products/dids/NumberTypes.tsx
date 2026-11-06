'use client';

import { m as motion } from 'framer-motion';
import { Phone, Building, PhoneX, DeviceMobile, Globe } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const types = [
  {
    icon: Phone,
    name: 'Local DIDs',
    description: 'City or region-specific numbers. Local presence for global businesses.',
    format: '+1 (212) xxx-xxxx',
  },
  {
    icon: Building,
    name: 'National',
    description: 'Country-wide numbers with no geographic restriction.',
    format: '+44 800 xxx xxxx',
  },
  {
    icon: PhoneX,
    name: 'Toll-Free',
    description: '0800/800 numbers for customer-facing lines. Inbound, or inbound and outbound, where available.',
    format: '+1 (800) xxx-xxxx',
  },
  {
    icon: DeviceMobile,
    name: 'Mobile',
    description: 'Mobile-range DIDs for SMS + voice. Available in select markets.',
    format: '+44 7xxx xxxxxx',
  },
  {
    icon: Globe,
    name: 'UIFN',
    description: 'Universal International Freephone Numbers: one number, worldwide reach.',
    format: '+800 xxxx xxxx',
  },
];

export default function NumberTypes() {
  return (
    <Section>
      <SectionHeader title="Every number type your clients need." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {types.map((type, idx) => {
          const Icon = type.icon;
          return (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="card-lift flex flex-col rounded-xl border border-navy-100 bg-navy-50 p-6"
            >
              <Icon size={32} className="mb-4 text-cyan-DEFAULT" weight="duotone" />
              <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">{type.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-navy-600">{type.description}</p>
              <div className="mt-auto">
                <p className="label mb-1 text-navy-500">Example format</p>
                <div className="rounded bg-white px-3 py-2 font-mono text-xs text-navy-600">{type.format}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
