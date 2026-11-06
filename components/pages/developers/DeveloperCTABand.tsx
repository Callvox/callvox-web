'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DeveloperCTABand() {
  return (
    <section className="bg-white border-t border-navy-100 py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-6">
            Ready to build?
          </h2>

          <p className="text-navy-600 text-lg mb-12">
            Request API access and our team will follow up on sandbox and production activation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started?type=other"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
            >
              Request API access
            </Link>
            <Link
              href="/products/airtime/apply"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-navy-DEFAULT/30 px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:border-navy-DEFAULT hover:bg-navy-DEFAULT/[0.04]"
            >
              Airtime API access
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
