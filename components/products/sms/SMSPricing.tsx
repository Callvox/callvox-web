'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const pricingCards = [
  {
    region: 'By destination',
    rate: 'Per-message rates',
    features: ['Set per destination and route type'],
  },
  {
    region: 'By volume',
    rate: 'Volume tiers',
    features: ['Agreed with you and shown in your rate deck'],
  },
  {
    region: 'On request',
    rate: 'Rate deck',
    features: ['Tell us your corridors and we will send pricing'],
  },
];

export default function SMSPricing() {
  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-semibold text-4xl mb-4">Pricing built around your traffic.</h2>
          <p className="text-navy-200 text-lg">
            Wholesale per-message rates by destination and volume. Request a rate deck for your corridors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg p-8 space-y-4"
            >
              <h3 className="text-white font-semibold text-lg">{card.region}</h3>
              <div className="space-y-3">
                <p className="text-cyan-DEFAULT font-semibold">{card.rate}</p>
                <ul className="space-y-2">
                  {card.features.map((f, j) => (
                    <li key={j} className="text-navy-200 text-sm flex items-start gap-2">
                      <span className="text-cyan-DEFAULT mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-white text-navy-DEFAULT hover:bg-signal">
            Request a rate deck
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
