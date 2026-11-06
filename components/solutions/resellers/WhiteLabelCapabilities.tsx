'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Monitor, Receipt, Users } from '@phosphor-icons/react';

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

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay: i * 0.06 },
});

export default function WhiteLabelCapabilities() {
  return (
    <Section tone="tint">
      <SectionHeader title="Your brand. Our infrastructure." />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} {...fadeUp(i)}>
              <Icon weight="duotone" size={40} className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-xl font-semibold text-navy-DEFAULT">{feature.title}</h3>
              <p className="text-navy-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
