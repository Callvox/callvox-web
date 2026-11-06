'use client';

import { m as motion } from 'framer-motion';
import { ChatDots } from '@phosphor-icons/react';
import { Section, SectionHeader } from '@/components/Section';

const features = [
  {
    title: 'Direct carrier connections',
    desc: 'Direct operator connections, without third-party hubs between your traffic and the destination carrier.',
  },
  {
    title: 'Delivery receipts',
    desc: 'A delivery status returned for every message: delivered, undelivered, buffered, expired or rejected.',
  },
  {
    title: 'Sender ID handling by destination',
    desc: 'Sender ID availability and registration are confirmed per destination before you send.',
  },
];

const send = ['Destination number', 'Sender ID', 'Message text'];
const receive = ['Message ID', 'Delivery status', 'Timestamp'];

export default function DeliverabilitySection() {
  return (
    <Section>
      <SectionHeader
        title="Delivery is the product."
        intro="Grey routes are cheap until carrier filtering blocks them, and your clients' campaigns with them. Callvox routes through direct carrier connections."
      />

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <ChatDots size={24} weight="duotone" className="text-cyan-DEFAULT" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-navy-DEFAULT">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="surface-ink grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2"
        >
          {[
            ['What you send', send],
            ['What you get back', receive],
          ].map(([title, items]) => (
            <div key={title as string} className="bg-navy-DEFAULT p-8">
              <p className="label text-signal">{title as string}</p>
              <ul className="mt-5 space-y-3">
                {(items as string[]).map((it) => (
                  <li key={it} className="flex items-center gap-3 text-navy-100">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-DEFAULT" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
