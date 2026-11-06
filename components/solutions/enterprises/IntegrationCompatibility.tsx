'use client';

import { motion } from 'framer-motion';

const integrations = [
  'Microsoft Teams Direct Routing',
  'Zoom Phone',
  'Cisco CUCM',
  'Avaya',
  'Asterisk',
  'FreeSWITCH',
  '3CX',
  'Genesys',
  'Five9',
  'Amazon Connect'
];

export default function IntegrationCompatibility() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT font-bold">
            Built on standard SIP.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-navy-100 text-navy-DEFAULT text-sm font-medium rounded-full"
            >
              {integration}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-navy-600">Platforms commonly connected over SIP.</span>
        </motion.p>
      </div>
    </section>
  );
}
