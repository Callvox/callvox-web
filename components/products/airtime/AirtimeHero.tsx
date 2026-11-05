'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function AirtimeHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy-DEFAULT px-4 py-20 md:py-32 lg:py-40 flex items-center overflow-hidden surface-ink">
      <HeroBackdrop />
      {/* Animated world map background - CSS only */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 600" className="w-full h-full">
          <defs>
            <style>{`
              @keyframes pulse-dot {
                0%, 100% { r: 6; opacity: 0.8; }
                50% { r: 10; opacity: 0.4; }
              }
              .pulse-africa { animation: pulse-dot 2s ease-in-out infinite; }
              .pulse-asia { animation: pulse-dot 2.2s ease-in-out infinite 0.3s; }
              .pulse-latam { animation: pulse-dot 2.4s ease-in-out infinite 0.6s; }
            `}</style>
          </defs>
          {/* Simplified world map shapes */}
          <g fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-DEFAULT">
            {/* Africa outline */}
            <path d="M 350 150 L 400 180 L 420 200 L 430 280 L 420 340 L 380 380 L 320 350 L 300 250 Z" />
            {/* South Asia outline */}
            <path d="M 550 200 L 600 180 L 620 220 L 610 300 L 570 320 L 540 280 Z" />
            {/* Latin America outline */}
            <path d="M 150 250 L 200 240 L 220 320 L 200 400 L 150 380 L 120 320 Z" />
          </g>
          {/* Pulsing dots on regions */}
          <circle cx="370" cy="280" r="6" fill="currentColor" className="text-cyan-DEFAULT pulse-africa" />
          <circle cx="580" cy="260" r="6" fill="currentColor" className="text-cyan-DEFAULT pulse-asia" />
          <circle cx="170" cy="320" r="6" fill="currentColor" className="text-cyan-DEFAULT pulse-latam" />
        </svg>
      </div>

      <div className="relative z-10 hero-inner">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-navy-300 mb-6"
        >
          Products → Airtime Top-Ups
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 rounded-sm bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/30">
            <span className="text-xs font-semibold tracking-widest text-cyan-DEFAULT">INTERNATIONAL MOBILE RECHARGE</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-bold leading-tight mb-4 text-balance"
          style={{ fontSize: 'clamp(41px, 6.2vw, 73px)' }}
        >
          800+ operators. Sub-3-second delivery. Built for remittance corridors.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-navy-200 text-lg max-w-3xl mb-8"
        >
          Wholesale airtime top-up API for diaspora remittance platforms, mobile money operators, and international resellers. Africa, South Asia, Latin America and the Middle East covered.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 flex-wrap"
        >
          <Link href="/products/airtime/apply">
            <Button variant="white">
              Get API Access
            </Button>
          </Link>
          <Link href="/products/airtime/coverage">
            <Button variant="ghost" className="text-white border-white hover:bg-white/10">
              View Operator Coverage
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
