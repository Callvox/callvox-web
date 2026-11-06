'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EnterprisesCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Talk to our team.
          </h2>

          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            Tell us about your current voice setup and we&apos;ll come back with what moving to Callvox would look like.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started?type=enterprise"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:bg-signal"
            >
              Talk to us
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-7 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              View pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
