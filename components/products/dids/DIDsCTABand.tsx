'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DIDsCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Tell us which numbers you need.
          </h2>
          <p className="text-navy-200 text-lg mb-10 leading-relaxed">
            Talk to us about countries, number types and volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-white text-navy-DEFAULT hover:bg-signal">
              Check Number Availability
            </Link>
            <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm border border-white/30 text-white hover:border-white hover:bg-white/5">
              Get wholesale rates
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
