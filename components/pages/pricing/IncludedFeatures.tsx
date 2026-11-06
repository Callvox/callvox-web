'use client';

import { m as motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

const features = [
  'One integration for every service',
  'One invoice',
  'One support contact',
  'API access',
];

export default function IncludedFeatures() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24 surface-ink">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="display-h2 text-white font-bold mb-12 md:mb-16"
        >
          One platform. One account.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-4 items-center"
            >
              <CheckCircle size={24} weight="fill" className="text-cyan-DEFAULT flex-shrink-0" />
              <span className="text-white font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
