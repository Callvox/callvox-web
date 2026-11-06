'use client';

import { m as motion } from 'framer-motion';
import { FileText } from '@phosphor-icons/react';

const specs = [
  { label: 'Codecs', value: 'G.711 (a-law / μ-law), G.729, G.722 HD' },
  { label: 'Signalling', value: 'SIP (RFC 3261), TLS + SRTP' },
  { label: 'Transport', value: 'UDP, TCP, TLS' },
  { label: 'DTMF', value: 'RFC 2833, SIP INFO, In-band' },
  { label: 'Caller ID', value: 'CLI delivery' },
  { label: 'Billing', value: 'Billing increments and CDR delivery agreed per account' },
  { label: 'Rates', value: 'Rate decks by corridor, on request' },
  { label: 'Capacity', value: 'Agreed per account' },
  { label: 'Quality reporting', value: 'Agreed per account' },
];

export function TechnicalSpecs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT">Everything a carrier needs to evaluate.</h2>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 border-t border-navy-100 md:grid-cols-2 md:gap-x-12"
        >
          {specs.map((spec) => (
            <div key={spec.label} className="border-b border-navy-100 py-5">
              <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{spec.label}</dt>
              <dd className="text-navy-600">{spec.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex gap-4 rounded-lg border border-navy-100 bg-navy-50/50 p-6"
        >
          <FileText size={28} weight="duotone" className="mt-1 flex-shrink-0 text-cyan-DEFAULT" />
          <div>
            <h3 className="mb-2 text-lg font-semibold text-navy-DEFAULT">Interconnect details</h3>
            <p className="text-sm leading-relaxed text-navy-600">
              Technical interconnect details are shared for your traffic profile and corridors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
