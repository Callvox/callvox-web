'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';

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
    <Section>
        <SectionHeader title="Built on standard SIP." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-6"
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
        >
          <span className="text-navy-600">Platforms commonly connected over SIP.</span>
        </motion.p>
    </Section>
  );
}
