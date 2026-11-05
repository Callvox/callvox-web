'use client';

import { motion } from 'framer-motion';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export function VoiceHero() {
  const stats = [
    { value: '500+', label: 'Direct routes' },
    { value: '99.99%', label: 'ASR uptime' },
    { value: '<150ms', label: 'One-way latency' },
    { value: '24/7', label: 'NOC support' },
  ];

  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-32 overflow-hidden surface-ink" style={{ minHeight: '60vh' }}>
      <HeroBackdrop />
      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs text-navy-400 font-medium">Products → Voice</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/30 rounded-sm px-4 py-2">
                <p className="text-xs uppercase tracking-widest font-semibold text-cyan-DEFAULT">Wholesale Voice</p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
            >
              Premium CLI routes to every market that matters.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-navy-200 mb-8 max-w-xl leading-relaxed"
            >
              500+ direct voice routes across Africa, Latin America, South Asia & the Middle East. Tier-1 quality without Tier-1 procurement cycles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-white text-navy-DEFAULT px-8 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors">
                Get Voice Rates
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Stats cluster */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-navy-800 rounded-2xl p-8 border border-navy-600">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-cyan-DEFAULT mb-2">{stat.value}</p>
                    <p className="text-sm text-white">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats - show below on smaller screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden mt-12 bg-navy-800 rounded-2xl p-8 border border-navy-600"
        >
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-cyan-DEFAULT mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
