'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ChatDots, Wallet, SimCard, Phone as DID } from '@phosphor-icons/react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResellerAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    { name: 'Voice', icon: Phone, desc: 'Direct routes' },
    { name: 'SMS', icon: ChatDots, desc: 'A2P messaging' },
    { name: 'Airtime', icon: Wallet, desc: '1700+ operators' },
    { name: 'eSIM', icon: SimCard, desc: 'Profiles by API' },
    { name: 'DIDs', icon: DID, desc: 'Virtual numbers' },
  ];

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-DEFAULT text-4xl mb-4"
        >
          Five revenue streams. One wholesale relationship.
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-200 text-lg max-w-3xl mb-16"
        >
          Most resellers manage multiple wholesale accounts across fragmented providers. Callvox consolidates all five product lines — letting you offer more to clients while reducing your back-office overhead.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                custom={2 + i}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="bg-navy-50/50 p-6 rounded-lg border border-navy-100"
              >
                <Icon weight="duotone" size={32} className="text-cyan-DEFAULT mb-4" />
                <h3 className="font-semibold text-navy-DEFAULT text-lg mb-3">{product.name}</h3>
                <p className="text-sm text-navy-600">{product.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
