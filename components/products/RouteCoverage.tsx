'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export function RouteCoverage() {
  const regions = [
    {
      title: 'Africa',
      destinations: 'Nigeria · Ghana · Kenya · South Africa · Egypt · Tanzania · Ethiopia',
    },
    {
      title: 'South Asia',
      destinations: 'India · Pakistan · Bangladesh · Sri Lanka · Nepal',
    },
    {
      title: 'Latin America',
      destinations: 'Mexico · Brazil · Colombia · Peru · Argentina · Ecuador',
    },
    {
      title: 'Middle East',
      destinations: 'UAE · Saudi Arabia · Kuwait · Jordan · Lebanon · Oman',
    },
  ];

  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            500+ direct routes. Built for the corridors others avoid.
          </h2>
          <p className="text-lg text-navy-200">
            Our route network is designed around the world's highest-growth termination corridors — not just the easy markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-cyan-DEFAULT pl-6 py-4"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{region.title}</h3>
              <p className="text-navy-200 text-sm leading-relaxed">{region.destinations}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/get-started?type=carrier" className="inline-flex items-center gap-2 text-cyan-DEFAULT hover:text-cyan-light transition-colors font-medium">
            Don't see your destination? Tell us your corridors
            <ArrowRight size={18} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
