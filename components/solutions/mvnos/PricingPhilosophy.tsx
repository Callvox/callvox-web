'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from '@phosphor-icons/react';

const philosophies = [
  {
    title: 'Rates by corridor',
    desc: 'Pricing depends on the destinations you send traffic to.',
  },
  {
    title: 'Volume-aware',
    desc: 'Tell us your expected volumes and we will quote accordingly.',
  },
  {
    title: 'Terms agreed up front',
    desc: 'Commercial terms are set with you before you send traffic.',
  },
];

export default function PricingPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-navy-DEFAULT font-bold" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Pricing built around your traffic.
          </h2>
        </motion.div>

        {/* 3-col grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophies.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-navy-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-DEFAULT flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-white" weight="bold" />
                </div>
                <div>
                  <h3 className="text-navy-DEFAULT font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-navy-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
