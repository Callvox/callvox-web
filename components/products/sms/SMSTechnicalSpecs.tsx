'use client';

import { m as motion } from 'framer-motion';
import { MapPin } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const specs = [
  { label: 'Protocols', value: 'REST API and SMPP' },
  { label: 'Sender IDs', value: 'Availability and registration confirmed per destination' },
  { label: 'Encoding', value: 'GSM-7 (160 chars), UCS-2 / UTF-16 (70 chars)' },
  { label: 'Delivery receipts', value: 'Delivered, undelivered, buffered, expired, rejected' },
  { label: 'Rates', value: 'Quoted by corridor and volume, on request' },
];

export default function SMSTechnicalSpecs() {
  return (
    <Section>
      <SectionHeader title="Technical specifications." />

      <dl className="grid grid-cols-1 border-t border-navy-100 md:grid-cols-2 md:gap-x-12">
        {specs.map((spec) => (
          <div key={spec.label} className="border-b border-navy-100 py-5">
            <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{spec.label}</dt>
            <dd className="text-navy-600">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex gap-4 rounded-lg border border-navy-100 bg-navy-50/50 p-6"
      >
        <MapPin size={28} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
        <div>
          <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">Destination rules vary</h3>
          <p className="text-sm leading-relaxed text-navy-600">
            Sender ID rules and registration requirements differ from country to country. We confirm the requirements
            for your destinations before you send.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
