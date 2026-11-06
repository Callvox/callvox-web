'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingCTABand() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-navy-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-6">
            Tell us your corridors.
          </h2>

          <p className="text-navy-600 text-lg mb-12 leading-relaxed">
            Rate decks for specific destinations, volume-based pricing and contract structures, quoted for the traffic you actually send.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
            >
              Request a rate deck
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
