'use client';

import { m as motion } from 'framer-motion';
import { Phone, ArrowsHorizontal, CheckCircle } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';

const benefits = [
  {
    title: 'A shorter path',
    body: 'Fewer hops between your network and the terminating carrier.',
  },
  {
    title: 'Easier troubleshooting',
    body: 'Fewer hand-offs means fewer parties to chase when a route needs attention.',
  },
  {
    title: 'One accountable supplier',
    body: 'One team owns the route from your trunk to the destination network.',
  },
]

export function HowItWorks() {
  const steps = [
    {
      title: 'Your traffic',
      description: 'SIP trunk or IP peering from your infrastructure',
      icon: Phone,
    },
    {
      title: 'Callvox network',
      description: 'Route optimisation across 500+ direct routes.',
      icon: ArrowsHorizontal,
    },
    {
      title: 'Termination',
      description: 'Call lands on the destination network via direct interconnect. No unnecessary intermediaries.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-navy-50/40">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT mb-6">Why we run direct routes.</h2>
          <p className="text-base md:text-lg text-navy-600 leading-relaxed">
            Many wholesale carriers aggregate routes through intermediaries. Callvox operates direct interconnects, keeping the path from your network to the terminating carrier as short as possible.
          </p>
        </motion.div>

        <FlowSteps steps={steps} />

        <dl className="mt-16 grid border-t border-navy-100 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`py-8 md:px-8 ${i > 0 ? 'border-t border-navy-100 md:border-l md:border-t-0' : 'md:pl-0'}`}
            >
              <dt className="label text-cyan-DEFAULT">{b.title}</dt>
              <dd className="mt-3 leading-relaxed text-navy-600">{b.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
