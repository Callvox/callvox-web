'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RateFinderCTA() {
  return (
    <section className="bg-navy-DEFAULT py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-12 border border-cyan-DEFAULT/20"
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Get destination-level rates.
          </h2>

          <p className="text-navy-200 text-lg mb-8">
            Tell us your target destinations and we&apos;ll send a custom rate deck.
          </p>

          <Link
            href="/get-started?type=carrier"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-signal px-7 text-[15px] font-semibold text-navy-DEFAULT transition-colors hover:bg-white"
          >
            Send my rate deck request
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
