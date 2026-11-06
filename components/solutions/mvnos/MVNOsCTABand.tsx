'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function MVNOsCTABand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Talk to our MVNO team.
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are planning a launch or running an established operator, tell us what you need and we&apos;ll come back with a plan and rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-started?type=mvno"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
            >
              Talk to our MVNO team
            </Link>
            <Link
              href="/products/esim"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-navy-DEFAULT/30 px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:border-navy-DEFAULT hover:bg-navy-DEFAULT/[0.04]"
            >
              Explore eSIM
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
