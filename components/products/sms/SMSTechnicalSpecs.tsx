'use client';

import { motion } from 'framer-motion';

const specs = [
  { label: 'Protocols', value: 'REST API and SMPP' },
  { label: 'Sender IDs', value: 'Availability and registration confirmed per destination' },
  { label: 'Unicode', value: 'Full UCS-2 / UTF-16 support' },
  { label: 'Encoding', value: 'GSM-7 (160 chars), UCS-2 (70 chars)' },
  { label: 'DLR support', value: 'Delivered, undelivered, buffered, expired, rejected' },
];

export default function SMSTechnicalSpecs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-navy-DEFAULT font-semibold text-4xl mb-12">Technical specifications</h2>

          <div className="max-w-2xl">
            <div className="space-y-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-navy-100 pb-4 last:border-b-0"
                >
                  <p className="text-navy-600 text-sm font-medium mb-1">{spec.label}</p>
                  <p className="text-navy-DEFAULT font-semibold">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
