'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-6">
            Since 2007. One platform.
          </h2>

          <p className="text-navy-200 text-lg mb-12 leading-relaxed">
            Talk to the team that's been routing traffic to these markets since before it was a growth story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:bg-signal"
            >
              Get in touch
            </Link>
            <Link
              href="/products/voice"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-7 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              View the platform
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
