'use client';

import { m as motion } from 'framer-motion';
import { HardDrive, GitBranch, ChartLineUp } from '@phosphor-icons/react';

const features = [
  {
    icon: HardDrive,
    title: 'Direct interconnects',
    description: 'Direct routes with terminating carriers, without aggregation in between.'
  },
  {
    icon: GitBranch,
    title: 'One platform',
    description: 'Voice, SMS, airtime, eSIM and numbers through one integration and one invoice.'
  },
  {
    icon: ChartLineUp,
    title: 'Corridor focus',
    description: 'Built around Latin America, Africa, South Asia and the Middle East, since 2007.'
  }
];

export default function NetworkInfrastructure() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT font-bold">
            The infrastructure behind the coverage.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-navy-50/40 rounded-xl border border-navy-100"
              >
                <Icon size={40} weight="duotone" className="text-cyan-DEFAULT mb-6" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-4">
                  {feature.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
