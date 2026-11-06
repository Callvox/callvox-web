'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function EnterprisesHero() {
  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-24 lg:py-28 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="text-sm font-semibold text-navy-400">
              Solutions → For Enterprises
            </span>
          </div>

          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-sm bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
              For Enterprise Businesses
            </span>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 10.0vw, 68px)' }}>
            Business voice and numbers, direct from a wholesale carrier.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            SIP trunking, virtual numbers and voice for businesses running on legacy PSTN or fragmented UCaaS providers. One provider, one invoice, one support contact.
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
