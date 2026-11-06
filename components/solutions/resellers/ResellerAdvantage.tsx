'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Phone, ChatDots, Wallet, SimCard, Hash } from '@phosphor-icons/react';

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay: i * 0.06 },
});

const products = [
  { name: 'Voice', icon: Phone, desc: 'Direct routes' },
  { name: 'SMS', icon: ChatDots, desc: 'A2P messaging' },
  { name: 'Airtime', icon: Wallet, desc: '1700+ operators' },
  { name: 'eSIM', icon: SimCard, desc: 'Profiles by API' },
  { name: 'DIDs', icon: Hash, desc: 'Virtual numbers' },
];

export default function ResellerAdvantage() {
  return (
    <Section>
      <SectionHeader
        title="Five revenue streams. One wholesale relationship."
        intro="Most resellers manage multiple wholesale accounts across fragmented providers. Callvox consolidates all five product lines, so you can offer clients more while cutting back-office overhead."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div key={product.name} {...fadeUp(i)} className="rounded-lg border border-navy-100 bg-navy-50/50 p-6">
              <Icon weight="duotone" size={32} className="mb-4 text-cyan-DEFAULT" />
              <h3 className="mb-3 text-lg font-semibold text-navy-DEFAULT">{product.name}</h3>
              <p className="text-sm text-navy-600">{product.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
