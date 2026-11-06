'use client';

import { m as motion } from 'framer-motion';
import { SimCard, Airplane, HardDrives } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const cards = [
  {
    icon: SimCard,
    title: 'MVNOs',
    description:
      'Launch or expand your MVNO with eSIM provisioning. Over-the-air profile delivery through one wholesale partner.',
  },
  {
    icon: Airplane,
    title: 'Travel operators',
    description:
      'Offer eSIM data plans to travellers without physical SIM inventory. Profile delivery at point of booking.',
  },
  {
    icon: HardDrives,
    title: 'Enterprise IoT',
    description:
      'Deploy connected devices without SIM logistics. Manage profiles over the air across your device fleet.',
  },
];

export function WhoItsForESIM() {
  return (
    <Section>
      <SectionHeader title="Who uses our eSIM platform." />
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-lift rounded-xl border border-navy-100 bg-white p-8"
            >
              <Icon weight="duotone" size={40} className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-xl font-semibold text-navy-DEFAULT">{card.title}</h3>
              <p className="text-base leading-relaxed text-navy-600">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
