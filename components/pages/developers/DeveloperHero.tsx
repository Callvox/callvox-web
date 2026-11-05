'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function DeveloperHero() {
  return (
    <section className="relative bg-[#042C53] min-h-[70vh] flex items-center justify-center py-20 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="font-mono text-cyan-DEFAULT text-xs tracking-widest uppercase font-semibold">
                Callvox API
              </span>
            </div>

            <h1 className="text-white font-bold text-6xl md:text-7xl mb-6 leading-tight">
              One API. Five services. Zero friction.
            </h1>

            <p className="text-navy-200 text-lg leading-relaxed mb-12 max-w-xl">
              REST APIs for voice, SMS, airtime, eSIM and DIDs. SMPP for messaging. Sandbox access in under 5 minutes. No sales call required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-cyan-DEFAULT text-navy-DEFAULT hover:bg-cyan-DEFAULT/90"
              >
                Get API Keys
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Read the Docs
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-[#0a1929] border border-[#1a3a52] rounded-xl p-6 font-mono text-sm text-navy-300 overflow-hidden">
              <div className="text-cyan-DEFAULT mb-4">
                {'# Get your API key at developers.callvox.net'}
              </div>
              <div className="text-white mb-4">
                {'curl -X POST https://api.callvox.net/v1/sms/send \\'}
              </div>
              <div className="text-white ml-4 mb-2">
                {'-H "Authorization: Bearer '}
                <span className="text-cyan-DEFAULT">cvx_live_...</span>
                {'" \\'}
              </div>
              <div className="text-white ml-4 mb-2">
                {'-H "Content-Type: application/json" \\'}
              </div>
              <div className="text-white ml-4 mb-4">
                {'-d \'{\n    "to": "'}
                <span className="text-green-400">+2348012345678</span>
                {'",\n    "from": "'}
                <span className="text-green-400">Callvox</span>
                {'",\n    "text": "'}
                <span className="text-green-400">Your OTP is 847291</span>
                {'"\n  }\''}
              </div>
              <div className="text-cyan-DEFAULT mb-4">
                {'# Response'}
              </div>
              <div className="text-navy-400">
                {'{'}
              </div>
              <div className="text-navy-400 ml-4 mb-1">
                {'"id": "'}
                <span className="text-green-400">msg_abc123</span>
                {'",'}
              </div>
              <div className="text-navy-400 ml-4 mb-1">
                {'"status": "'}
                <span className="text-green-400">queued</span>
                {'",'}
              </div>
              <div className="text-navy-400 ml-4 mb-1">
                {'"to": "'}
                <span className="text-green-400">+2348012345678</span>
                {'",'}
              </div>
              <div className="text-navy-400 ml-4">
                {'"queued_at": "'}
                <span className="text-green-400">2026-04-01T10:23:41Z</span>
                {'"\n}'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
