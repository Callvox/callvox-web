'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function DIDsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-[60vh] bg-navy-DEFAULT pt-32 pb-20 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-navy-200 text-sm font-medium">Products → DIDs / Numbers</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-2">
            <span className="px-3 py-1 rounded-sm bg-cyan-DEFAULT/20 border border-cyan-DEFAULT text-cyan-DEFAULT text-xs font-semibold">
              VIRTUAL PHONE NUMBERS & DIDs
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-white font-bold mb-8 leading-tight"
            style={{ fontSize: 'clamp(41px, 10.0vw, 73px)' }}
          >
            Virtual numbers for carriers and platforms.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-navy-200 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Wholesale DID numbers for carriers, UCaaS platforms, resellers and enterprises. Local, national, toll-free, mobile and UIFN numbers, with availability varying by country.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-white text-navy-DEFAULT hover:bg-signal">
              Check Number Availability
            </Link>
            <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm border border-white/30 text-white hover:border-white hover:bg-white/5">
              Get Wholesale Rates
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
