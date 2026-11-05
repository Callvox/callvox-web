'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/callvox-ui/Button';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function MVNOsHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-navy-DEFAULT py-20 md:py-24 lg:min-h-[55vh] flex items-center overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="relative z-10 hero-inner w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 text-sm text-navy-200 font-medium">
            Solutions → For MVNOs
          </div>

          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/50">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-DEFAULT">For Mobile Virtual Network Operators</span>
            </div>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 6.2vw, 68px)' }}>
            Launch faster. Scale without lock-in.
          </h1>

          <p className="text-navy-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything an MVNO needs in one wholesale relationship — voice termination, A2P messaging, eSIM provisioning, airtime, and virtual numbers. Cloud-native APIs. No long-term commitment required to start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="white"
              size="lg"
            >
              Talk to an MVNO Specialist
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
