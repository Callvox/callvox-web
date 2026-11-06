'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { STATS } from '@/lib/stats';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function SMSHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy-DEFAULT overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="relative z-10 hero-inner py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-4">
                <div className="px-3 py-1.5 bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/30 rounded-sm">
                  <span className="text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
                    A2P SMS & MESSAGING
                  </span>
                </div>
              </div>

              <h1 className="text-white font-semibold text-balance" style={{ fontSize: 'clamp(41px, 8.8vw, 73px)' }}>
                Direct routes for A2P messaging.
              </h1>
            </div>

            <p className="text-navy-200 text-lg max-w-2xl">
              Wholesale A2P messaging for carriers, aggregators and platforms, delivered over SMPP and a REST API.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-white text-navy-DEFAULT hover:bg-signal">
                Talk to a specialist
              </Link>
              <Link href="/developers" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm border border-white text-white hover:bg-white/10">
                View API Docs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="text-8xl font-bold text-cyan-DEFAULT">
                {STATS.countries.value}
              </div>
              <div className="space-y-2">
                <p className="text-navy-200 text-sm">countries reached through one platform</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
