'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { STATS } from '@/lib/stats';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function CoverageHero() {
  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-24 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 7.5vw, 73px)', lineHeight: 1.1 }}>
            Global coverage. Emerging-market depth.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            {STATS.routes.value} voice routes, {STATS.operators.value} airtime operators and {STATS.countries.value} countries. Built for the corridors that matter most.
          </p>

          <Link
            href="/get-started?type=carrier"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-signal px-7 text-[15px] font-semibold text-navy-DEFAULT transition-colors hover:bg-white"
          >
            Tell us your corridors
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
