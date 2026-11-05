'use client'

import { motion } from 'framer-motion'
import { CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function CarriersHero() {
  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-28 overflow-hidden surface-ink">
      <HeroBackdrop />
      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-navy-200 font-medium">
            <span>Solutions</span>
            <CaretRight size={16} weight="fill" className="mx-2" />
            <span className="text-cyan-DEFAULT">For Carriers</span>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex">
            <div className="px-3 py-1.5 bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 rounded-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-DEFAULT">
                For Telecom Operators & Carriers
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight text-balance">
            Carrier-grade infrastructure. Carrier-grade relationships.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-navy-200 max-w-2xl leading-relaxed">
            We've been routing carrier traffic for 2 decades. We understand interconnect requirements, SLA expectations, and NOC culture. No learning curve.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="white" size="lg">
              Request Interconnect Details
              <CaretRight size={18} weight="fill" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
