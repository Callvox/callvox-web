'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function PricingDIDs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const pricing = [
    {
      name: 'By country',
      desc: 'Number pricing is set per country and number type.',
    },
    {
      name: 'By volume',
      desc: 'Volume terms are agreed with you and shown in your rate deck.',
    },
    {
      name: 'On request',
      desc: 'Tell us the countries and number types you need and we will send pricing.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-navy-DEFAULT text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Pricing built around your numbers.
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pricing.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-navy-100"
            >
              <h3 className="font-bold text-navy-DEFAULT text-xl mb-4">{tier.name}</h3>
              <p className="text-gray-600 text-sm">{tier.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto bg-navy-50 rounded-lg p-6 border border-navy-200 text-center text-sm text-gray-700"
        >
          <p className="mb-4">Tell us your countries, number types and volumes.</p>
          <Link href="/get-started?type=carrier" className="font-semibold text-cyan-DEFAULT hover:underline">
            Request wholesale rates →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
