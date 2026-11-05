'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/callvox-ui/Button';
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
            Enterprise-grade voice and numbers. Without enterprise procurement cycles.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            SIP trunking, virtual numbers, and HD voice for businesses running on legacy PSTN or fragmented UCaaS providers. 40–70% cost reduction. 24/7 support. ISO 27001 certified.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
            >
              Work with us
            </Button>
            <Button
              variant="white-ghost"
              size="lg"
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
