'use client';

import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export function ESIMHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy-DEFAULT px-4 sm:px-6 lg:px-8 py-16 flex items-center overflow-hidden surface-ink">
      <HeroBackdrop />
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="800" cy="200" r="150" fill="currentColor" className="text-cyan-DEFAULT" />
          <path d="M 850 250 Q 900 300 850 350" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-DEFAULT" />
        </svg>
      </div>

      <div className="relative z-10 hero-inner grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm text-navy-200 mb-4">Products → eSIM</div>
          
          <div className="inline-flex items-center gap-2 bg-navy-50 px-3 py-1 rounded-sm mb-6">
            <span className="text-xs font-semibold text-cyan-DEFAULT">WHOLESALE ESIM PROVISIONING</span>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 10.0vw, 73px)' }}>
            Remote provisioning at scale. No SIM cards. No logistics.
          </h1>

          <p className="text-navy-200 text-lg mb-8 leading-relaxed">
            GSMA SGP.22 and SGP.32 certified eSIM infrastructure for MVNOs, travel operators, and enterprise IoT. Over-the-air profile delivery. White-label RSP platform available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-white text-navy-DEFAULT font-semibold rounded-lg hover:bg-navy-50 transition-colors">
              Talk to an eSIM Specialist
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-900 transition-colors">
              Download Buyer's Guide
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="bg-navy-800 rounded-xl p-12 aspect-square flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 300">
              {/* SIM Card */}
              <rect x="60" y="50" width="120" height="180" rx="8" fill="#0ea5e9" opacity="0.3" />
              <circle cx="130" cy="120" r="15" fill="#0ea5e9" opacity="0.6" />
              
              {/* Signal Arc */}
              <path d="M 200 200 Q 250 150 240 80" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 220 210 Q 270 140 260 50" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
              
              {/* Dissolving effect */}
              <circle cx="90" cy="100" r="8" fill="#0ea5e9" opacity="0.4" />
              <circle cx="110" cy="85" r="6" fill="#0ea5e9" opacity="0.5" />
              <circle cx="160" cy="130" r="5" fill="#0ea5e9" opacity="0.6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
