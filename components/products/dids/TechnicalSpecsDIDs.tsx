'use client';

import { m as motion } from 'framer-motion';
import { MapPin } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const specs = [
  { label: 'Signalling and encryption', value: 'SIP (RFC 3261), TLS transport, SRTP' },
  { label: 'Portability', value: 'Number porting, with terms confirmed per country' },
  { label: 'Call detail records', value: 'Exportable' },
  { label: 'Rates', value: 'Quoted by country and number type, on request' },
];

const capabilities = ['Search inventory by country and type', 'Provision numbers', 'Port numbers'];

export default function TechnicalSpecsDIDs() {
  return (
    <Section>
      <SectionHeader title="Technical specifications." />

      <div className="grid gap-12 lg:grid-cols-2">
        <dl className="border-t border-navy-100">
          {specs.map((spec) => (
            <div key={spec.label} className="border-b border-navy-100 py-5">
              <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{spec.label}</dt>
              <dd className="text-navy-600">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-ink self-start rounded-lg bg-navy-DEFAULT p-8"
        >
          <p className="label text-signal">Through the API or portal</p>
          <ul className="mt-5 space-y-3">
            {capabilities.map((c) => (
              <li key={c} className="flex items-center gap-3 text-navy-100">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-DEFAULT" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex gap-4 rounded-lg border border-navy-100 bg-navy-50/50 p-6"
      >
        <MapPin size={28} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
        <div>
          <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">Requirements vary by country</h3>
          <p className="text-sm leading-relaxed text-navy-600">
            We confirm availability and requirements for each country before you order.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
