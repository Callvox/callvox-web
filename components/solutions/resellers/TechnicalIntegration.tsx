'use client';

import { m as motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';

const specs = [
  { label: 'Voice API', value: 'SIP trunk, CDR API' },
  { label: 'SMS', value: 'REST + SMPP v3.4/5.0' },
  { label: 'Airtime', value: 'REST API, webhook delivery' },
  { label: 'DIDs', value: 'REST API' },
  { label: 'Billing API', value: 'Usage data, invoice generation, balance queries' },
  { label: 'CDRs', value: 'Per-tenant, exportable JSON/CSV' },
  { label: 'Webhooks', value: 'Delivery receipts, usage alerts, balance warnings' },
  { label: 'Auth', value: 'API keys per sub-account, IP whitelisting' },
];

export default function TechnicalIntegration() {
  return (
    <Section>
      <SectionHeader title="Technical specifications." />

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 border-t border-navy-100 md:grid-cols-2 md:gap-x-12"
      >
        {specs.map((spec) => (
          <div key={spec.label} className="border-b border-navy-100 py-5">
            <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{spec.label}</dt>
            <dd className="text-navy-600">{spec.value}</dd>
          </div>
        ))}
      </motion.dl>
    </Section>
  );
}
