'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SMSCTABand() {
  return (
    <section className="bg-white py-16 border-t border-navy-100">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-navy-DEFAULT font-semibold text-4xl">Tell us your messaging corridors.</h2>
          <p className="text-navy-600 text-lg">
            Talk to a messaging specialist about routes, rates and integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-navy-DEFAULT text-white hover:bg-navy-700">
            Talk to a specialist
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
