'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const tiers = [
  {
    name: 'Rates',
    features: ['Rates quoted by corridor', 'Volume pricing agreed up front', 'Custom terms: talk to us'],
  },
  {
    name: 'Platform',
    features: ['One integration across products', 'One invoice', 'White-label options on request'],
  },
  {
    name: 'Support',
    features: ['One support contact', 'Direct routes, not aggregated', 'Onboarding help'],
  },
];

export default function PartnerProgram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-white text-4xl mb-16"
        >
          Partner terms, set with you.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={1 + i}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="bg-navy-800 p-8 rounded-lg border border-navy-600"
            >
              <h3 className="font-semibold text-white text-xl mb-6">{tier.name}</h3>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-navy-100 text-sm flex items-start">
                    <span className="text-cyan-DEFAULT mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
