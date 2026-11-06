'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTABand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-navy-DEFAULT rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to evaluate our voice routes?
          </h2>
          <p className="text-lg text-navy-200 mb-12 max-w-2xl mx-auto">
            Request a rate deck and we'll follow up with destination-level pricing for your corridors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started?type=carrier" className="bg-white text-navy-DEFAULT px-8 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors">
              Get Voice Rates
            </Link>
            <Link href="/get-started?type=carrier" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Talk to a carrier specialist
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
