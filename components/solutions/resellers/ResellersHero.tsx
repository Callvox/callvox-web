'use client';

import { motion } from 'framer-motion';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResellersHero() {
  return (
    <section className="relative bg-navy-DEFAULT py-24 overflow-hidden surface-ink">
      <HeroBackdrop />
      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-navy-200 mb-6"
        >
          Solutions → For Resellers
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-block bg-cyan-DEFAULT/20 text-cyan-DEFAULT px-4 py-2 rounded-sm text-sm font-semibold mb-8"
        >
          FOR RESELLERS & AGGREGATORS
        </motion.div>

        <motion.h1
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-sans font-bold text-white mb-6"
          style={{
            fontSize: 'clamp(41px, 10.0vw, 68px)',
            lineHeight: 1.2,
          }}
        >
          Margin-first wholesale. Built for resellers.
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-navy-200 text-lg max-w-3xl mx-auto mb-8"
        >
          Competitive wholesale rates across voice, SMS, airtime, eSIM and DIDs. White-label portal. Multi-tenant billing. Automated provisioning. Everything you need to resell at scale.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4"
        >
          <button className="bg-white text-navy-DEFAULT px-8 py-3 font-semibold rounded-lg hover:bg-navy-100 transition">
            Become a Partner
          </button>
          <button className="border-2 border-white text-white px-8 py-3 font-semibold rounded-lg hover:bg-white/10 transition">
            View White-Label Options
          </button>
        </motion.div>
      </div>
    </section>
  );
}
