'use client';

import { m as motion } from 'framer-motion';
import { STATS } from '@/lib/stats';

const stats = [
  { number: STATS.routes.value, label: 'direct routes', description: 'Voice termination built corridor by corridor' },
  { number: STATS.countries.value, label: 'countries', description: 'Reached through one platform' },
  { number: STATS.operators.value, label: 'operators', description: 'Mobile operators for airtime top-ups' },
];

export default function ByTheNumbers() {
  return (
    <section className="surface-ink bg-navy-DEFAULT py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 font-data text-5xl font-medium leading-tight text-cyan-DEFAULT md:text-6xl">
                {stat.number}
              </div>
              <div className="mb-2 text-lg font-semibold text-white">{stat.label}</div>
              <p className="text-navy-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
