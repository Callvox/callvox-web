'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Phone, PhoneTransfer, Receipt, Headset } from '@phosphor-icons/react';

const features = [
  {
    icon: Phone,
    title: 'Business voice',
    description: 'Voice for sales teams, contact centres and offices, delivered over direct carrier routes.'
  },
  {
    icon: PhoneTransfer,
    title: 'Standard SIP',
    description: 'Connect the PBX or UCaaS platform you already run over standard SIP trunking.'
  },
  {
    icon: Receipt,
    title: 'One invoice',
    description: 'Voice and numbers from one provider, on one invoice, with terms agreed up front.'
  },
  {
    icon: Headset,
    title: 'One support contact',
    description: 'A single contact who knows your account. Not a ticket queue.'
  }
];

export default function EnterprisesFeatures() {
  return (
    <Section>
        <SectionHeader title="Business voice from one provider." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-navy-50/40 rounded-xl"
              >
                <Icon size={32} weight="duotone" className="text-cyan-DEFAULT mb-4" />
                <h3 className="text-navy-DEFAULT font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
    </Section>
  );
}
