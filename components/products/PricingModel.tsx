'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PricingModel() {
  const pricingTiers = [
    {
      title: 'By destination',
      description: 'Per-minute rates are set per destination and route type.',
    },
    {
      title: 'By volume',
      description: 'Volume tiers are agreed with you and shown in your rate deck.',
    },
    {
      title: 'On request',
      description: 'Tell us your corridors and we will send destination-level pricing.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-navy-DEFAULT mb-4">Pricing built around your corridors.</h2>
          <p className="text-lg text-navy-600">
            Per-minute rates vary by destination, route type and volume. Request a rate deck for the corridors you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-50/50 rounded-xl p-8 border border-navy-100"
            >
              <h3 className="text-lg font-semibold text-navy-DEFAULT mb-3">{tier.title}</h3>
              <p className="text-navy-600">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-navy-100"
        >
          <Link href="/get-started?type=carrier" className="inline-block bg-navy-DEFAULT hover:bg-navy-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Request a rate deck
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
