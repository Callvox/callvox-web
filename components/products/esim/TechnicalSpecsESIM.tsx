'use client';

import { m as motion } from 'framer-motion';
import { FileText } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const specs = [
  { label: 'Profile delivery', value: 'Over-the-air (OTA), no physical shipping' },
  { label: 'Profile types', value: 'Consumer and IoT eSIM profiles' },
  { label: 'API', value: 'REST API for profile orders and webhooks' },
  { label: 'Connectivity', value: 'Data connectivity available with your profiles' },
  { label: 'Platform options', value: 'Discuss white-label requirements with our team' },
  { label: 'Rates', value: 'Quoted by use case and volume, on request' },
];

export function TechnicalSpecsESIM() {
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
        <FileText size={28} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
        <div>
          <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">Integration details</h3>
          <p className="text-sm leading-relaxed text-navy-600">
            Technical details are shared for your use case and integration.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
