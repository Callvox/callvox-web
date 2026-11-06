'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Building, PhoneX, DeviceMobile, Globe } from '@phosphor-icons/react';

export default function NumberTypes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const types = [
    {
      icon: Phone,
      name: 'Local DIDs',
      description: 'City or region-specific numbers. Local presence for global businesses.',
      format: '+1 (212) xxx-xxxx',
    },
    {
      icon: Building,
      name: 'National',
      description: 'Country-wide numbers with no geographic restriction.',
      format: '+44 800 xxx xxxx',
    },
    {
      icon: PhoneX,
      name: 'Toll-Free',
      description: '0800/800 numbers. Customer-facing, inbound only or inbound + outbound.',
      format: '+1 (800) xxx-xxxx',
    },
    {
      icon: DeviceMobile,
      name: 'Mobile',
      description: 'Mobile-range DIDs for SMS + voice. Available in select markets.',
      format: '+44 7xxx xxxxxx',
    },
    {
      icon: Globe,
      name: 'UIFN',
      description: 'Universal International Freephone Numbers: one number, worldwide reach.',
      format: '+800 xxxx xxxx',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="display-h2 text-navy-DEFAULT font-bold mb-12 md:mb-16"
        >
          Every number type your clients need.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {types.map((type, idx) => {
            const IconComponent = type.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-navy-50 rounded-lg p-6 border border-navy-100 hover:border-cyan-DEFAULT transition-colors"
              >
                <IconComponent size={32} className="text-cyan-DEFAULT mb-4" weight="duotone" />
                <h3 className="font-bold text-navy-DEFAULT mb-2 text-lg">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{type.description}</p>
                <div className="text-navy-600 font-mono text-xs bg-navy-50 px-3 py-2 rounded">
                  {type.format}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
