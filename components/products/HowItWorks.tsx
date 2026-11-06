'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowsHorizontal, CheckCircle } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';

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
          <h2 className="display-h2 font-semibold text-navy-DEFAULT mb-6">Why we run direct routes.</h2>
          <p className="text-base md:text-lg text-navy-600 leading-relaxed">
            Many wholesale carriers aggregate routes through intermediaries. Callvox operates direct interconnects, keeping the path from your network to the terminating carrier as short as possible.
          </p>
        </motion.div>

        <FlowSteps steps={steps} />
      </div>
    </section>
  );
}
