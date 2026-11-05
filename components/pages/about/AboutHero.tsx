'use client';

import { motion } from 'framer-motion';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function AboutHero() {
  return (
    <section className="relative bg-navy-DEFAULT min-h-screen flex items-center justify-center py-20 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <span className="inline-block px-4 py-2 rounded-sm bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
              About Callvox
            </span>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 10.0vw, 68px)' }}>
            2 decades in the markets others treat as afterthoughts.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in 2007 as a voice-only wholesale carrier focused on Latin America, Africa, South Asia, and the Middle East. Today, a unified five-product platform — built for the corridors where wholesale telecom actually grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
