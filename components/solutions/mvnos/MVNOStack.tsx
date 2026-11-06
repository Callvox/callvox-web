'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ChatCircle, SimCard, Lightning, Hash } from '@phosphor-icons/react';
import { ArrowRight } from '@phosphor-icons/react';

const services = [
  { num: 1, name: 'Voice termination', desc: 'Direct routes', icon: Phone },
  { num: 2, name: 'A2P SMS', desc: 'Messaging by API', icon: ChatCircle },
  { num: 3, name: 'eSIM provisioning', desc: 'Profiles by API', icon: SimCard },
  { num: 4, name: 'Airtime top-up', desc: '1700+ operators', icon: Lightning },
  { num: 5, name: 'DIDs / Numbers', desc: 'Virtual numbers', icon: Hash },
];

export default function MVNOStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-navy-DEFAULT font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Your wholesale stack from one vendor.
          </h2>
          <p className="text-navy-600 text-lg mx-auto">
            Voice, messaging, eSIM, airtime and numbers from one wholesale partner. One integration. One invoice. One support contact.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 mb-8 overflow-x-auto"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={service.num} className="flex items-center gap-4 min-w-max">
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-lg bg-navy-50 flex items-center justify-center mb-3 border border-navy-100">
                    <div className="flex flex-col items-center gap-1">
                      <IconComponent weight="duotone" size={24} className="text-cyan-DEFAULT" />
                      <span className="text-xs font-bold text-navy-600">{service.num}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy-DEFAULT text-sm">{service.name}</p>
                    <p className="text-xs text-navy-600">{service.desc}</p>
                  </div>
                </motion.div>

                {idx < services.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight size={32} className="text-cyan-DEFAULT" weight="bold" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-DEFAULT text-sm font-semibold">One integration. One invoice.</p>
        </motion.div>
      </div>
    </section>
  );
}
