'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Building, Globe, Headset } from '@phosphor-icons/react';

const useCases = [
  {
    icon: Building,
    title: 'Replace legacy PSTN',
    description: 'Migrate your on-premise PBX to SIP trunking and keep the phone system your team already uses.'
  },
  {
    icon: Globe,
    title: 'Global office numbers',
    description: 'Virtual numbers for regional offices. Local presence without local infrastructure.'
  },
  {
    icon: Headset,
    title: 'Contact centre infrastructure',
    description: 'SIP trunking for inbound and outbound call centres, with call detail records for reporting.'
  }
];

export default function EnterprisesUseCases() {
  return (
    <Section tone="tint">
        <SectionHeader title="What enterprises use it for." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border border-navy-100"
              >
                <Icon size={40} weight="duotone" className="text-cyan-DEFAULT mb-6" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-4">
                  {useCase.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
    </Section>
  );
}
