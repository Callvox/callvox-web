'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/stats';

const stats = [
  { number: STATS.routes.value, label: 'direct routes', description: 'Voice termination built corridor by corridor' },
  { number: STATS.countries.value, label: 'countries', description: 'Reached through one platform' },
  { number: STATS.operators.value, label: 'operators', description: 'Mobile operators for airtime top-ups' },
  { number: '2007', label: 'founded', description: 'Operating as a wholesale carrier since' }
];

export default function ByTheNumbers() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24 surface-ink">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-DEFAULT font-bold text-5xl md:text-6xl mb-3 leading-tight">
                {stat.number}
              </div>
              <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
              <p className="text-navy-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
