'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowsHorizontal, CheckCircle } from '@phosphor-icons/react';

export function HowItWorks() {
  const steps = [
    {
      title: 'Your Traffic',
      description: 'SIP trunk or IP peering from your infrastructure',
      icon: Phone,
    },
    {
      title: 'Callvox Network',
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
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-cyan-DEFAULT font-medium mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-navy-DEFAULT mb-6">Direct. Not aggregated.</h2>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl leading-relaxed">
            Many wholesale carriers aggregate routes through intermediaries. Callvox operates direct interconnects, keeping the path from your network to the terminating carrier as short as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-1 bg-cyan-DEFAULT/20"></div>
                )}

                <div className="bg-white rounded-xl p-8 border border-navy-100">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-light mb-6">
                    <Icon size={32} weight="duotone" className="text-cyan-DEFAULT" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-DEFAULT mb-3">{step.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
