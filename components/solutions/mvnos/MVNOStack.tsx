'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChatCircle, SimCard, Lightning, Hash, ArrowRight } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const services = [
  { num: 1, name: 'Voice termination', desc: 'Direct routes', icon: Phone },
  { num: 2, name: 'A2P SMS', desc: 'Messaging by API', icon: ChatCircle },
  { num: 3, name: 'eSIM provisioning', desc: 'Profiles by API', icon: SimCard },
  { num: 4, name: 'Airtime top-up', desc: '1700+ operators', icon: Lightning },
  { num: 5, name: 'DIDs / Numbers', desc: 'Virtual numbers', icon: Hash },
];

export default function MVNOStack() {
  return (
    <Section>
      <SectionHeader
        title="Your wholesale stack from one vendor."
        intro="Voice, messaging, eSIM, airtime and numbers from one wholesale partner. One integration. One invoice. One support contact."
      />

      {/* Flow diagram: left-aligned, wraps on small screens instead of scrolling */}
      <div className="flex flex-wrap items-start gap-x-3 gap-y-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Fragment key={service.num}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex w-36 flex-col items-start"
              >
                <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-lg border border-navy-100 bg-navy-50">
                  <div className="flex flex-col items-center gap-1">
                    <Icon weight="duotone" size={24} className="text-cyan-DEFAULT" />
                    <span className="text-xs font-bold text-navy-600">{service.num}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-navy-DEFAULT">{service.name}</p>
                <p className="text-xs text-navy-600">{service.desc}</p>
              </motion.div>
              {idx < services.length - 1 && (
                <ArrowRight size={28} weight="bold" className="mt-8 hidden text-cyan-DEFAULT xl:block" />
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}
