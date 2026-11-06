'use client';

import { m as motion } from 'framer-motion';
import { STATS } from '@/lib/stats';
import { Section, SectionHeader } from '@/components/Section';
import { Phone, ChatDots, Wallet, SimCard, Hash } from '@phosphor-icons/react';

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay: i * 0.06 },
});

const products = [
  { name: 'Voice', icon: Phone, desc: 'Direct routes, by SIP trunk or IP peering.' },
  { name: 'SMS', icon: ChatDots, desc: 'A2P messaging over SMPP or REST.' },
  { name: 'Airtime', icon: Wallet, desc: `Top-ups across ${STATS.operators.value} operators.` },
  { name: 'eSIM', icon: SimCard, desc: 'Profiles ordered by API.' },
  { name: 'Numbers', icon: Hash, desc: 'DIDs by country and number type.' },
];

export default function ResellerAdvantage() {
  return (
    <Section>
      <SectionHeader
        title="Five revenue streams. One wholesale relationship."
        intro="Instead of one wholesale account per product, you work with one partner and one invoice."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div key={product.name} {...fadeUp(i)} className="rounded-lg border border-navy-100 bg-navy-50/50 p-6">
              <Icon weight="duotone" size={32} className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-lg font-semibold text-navy-DEFAULT">{product.name}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{product.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
