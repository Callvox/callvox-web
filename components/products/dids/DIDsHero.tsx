'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';
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
            90+ countries. Any number type. Instant provisioning.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-navy-200 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Wholesale DID numbers for carriers, UCaaS platforms, resellers and enterprises. Local, national, toll-free, mobile, and UIFN numbers. Voice + SMS on the same number. Free porting.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="white" className="group">
              Check Number Availability
            </Button>
            <Button variant="white-ghost">Get Wholesale Rates</Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-inner relative z-10 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 max-w-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-navy-200 mb-2">Country</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded text-white text-sm cursor-pointer appearance-none">
                <option>United States</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-navy-400">
                ▼
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-navy-200 mb-2">Number Type</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded text-white text-sm cursor-pointer appearance-none">
                <option>Local</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-navy-400">
                ▼
              </div>
            </div>
          </div>

          <button className="w-full bg-navy-DEFAULT hover:bg-navy-600 text-white font-semibold py-2 rounded transition-colors">
            Search
          </button>
        </div>
      </motion.div>
    </section>
  );
}
