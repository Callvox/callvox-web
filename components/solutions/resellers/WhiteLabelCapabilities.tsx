'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Receipt, Users } from '@phosphor-icons/react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const features = [
  {
    icon: Monitor,
    title: 'Branded portal',
    description: 'White-label client portal under your domain and brand. Your clients see your product, not ours.',
  },
  {
    icon: Receipt,
    title: 'Automated billing',
    description: 'Billing engine handles invoicing, usage alerts, and payment collection for your downstream clients. Configurable markup per client.',
  },
  {
    icon: Users,
    title: 'Multi-tenant management',
    description: 'One portal to manage all your clients. Individual rate plans, usage limits, and CDR access per tenant.',
  },
];

export default function WhiteLabelCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-50/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-DEFAULT text-4xl mb-16"
        >
          Your brand. Our infrastructure.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={1 + i}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <Icon weight="duotone" size={40} className="text-cyan-DEFAULT mb-4" />
                <h3 className="font-semibold text-navy-DEFAULT text-xl mb-3">{feature.title}</h3>
                <p className="text-navy-200">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
