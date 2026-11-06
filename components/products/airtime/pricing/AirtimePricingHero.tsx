'use client'

import { motion } from 'framer-motion'

export default function AirtimePricingHero() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-navy-400 mb-6"
        >
          Products → Airtime Top-Ups → Pricing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-navy-DEFAULT font-bold mb-6 text-balance"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
        >
          Current rates, on request.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-navy-600 text-lg max-w-2xl leading-relaxed"
        >
          Airtime rates move with the market and differ by corridor, so we don&apos;t publish a
          fixed price list. Tell us your corridors and we&apos;ll send a current rate deck.
        </motion.p>
      </div>
    </section>
  )
}
