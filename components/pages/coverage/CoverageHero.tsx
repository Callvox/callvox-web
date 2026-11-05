'use client';

import { motion } from 'framer-motion';
import { MapPin, MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

export default function CoverageHero() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-24 overflow-hidden surface-ink">
      <HeroBackdrop />

      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(41px, 7.5vw, 73px)', lineHeight: 1.1 }}>
            Global coverage. Emerging-market depth.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            500+ voice routes, 800+ airtime operators, DIDs in 90+ countries. Built for the corridors that matter most.
          </p>

          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-DEFAULT">
                <MapPin size={20} weight="bold" />
              </div>
              <input
                type="text"
                placeholder="Search a country or destination..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-navy-DEFAULT placeholder-navy-400 border-none outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-navy-DEFAULT border border-white text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors flex items-center gap-2">
              <MagnifyingGlass size={20} weight="bold" />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
