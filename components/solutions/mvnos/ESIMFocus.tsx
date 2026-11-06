'use client';

import { m as motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { SimCard, Truck, WifiHigh } from '@phosphor-icons/react';

const benefits = [
  {
    icon: SimCard,
    title: 'White-label RSP platform',
    desc: 'Branded eSIM provisioning under your MVNO identity, so subscribers see your brand.',
  },
  {
    icon: Truck,
    title: 'Eliminate SIM logistics',
    desc: 'No physical SIM printing, warehousing or distribution. Profiles are delivered over the air to the device.',
  },
  {
    icon: WifiHigh,
    title: 'Profiles with data connectivity',
    desc: 'eSIM profiles come with data connectivity, ordered through the same API.',
  },
];

export default function ESIMFocus() {
  return (
    <Section tone="tint">
      <SectionHeader title="eSIM, without the SIM logistics." />

      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-lg border border-navy-100 bg-white p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-DEFAULT/10">
                <Icon size={24} className="text-cyan-DEFAULT" weight="duotone" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-navy-DEFAULT">{benefit.title}</h3>
              <p className="text-navy-600">{benefit.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
