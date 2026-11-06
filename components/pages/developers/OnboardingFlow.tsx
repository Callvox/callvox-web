'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserCircle, Key, Phone, Rocket } from '@phosphor-icons/react';

const steps = [
  {
    num: 1,
    icon: UserCircle,
    title: 'Request access',
    description: 'Tell us about your company and use case.'
  },
  {
    num: 2,
    icon: Key,
    title: 'Get sandbox access',
    description: 'Sandbox credentials to build and test against.'
  },
  {
    num: 3,
    icon: Phone,
    title: 'Make first call',
    description: 'Send your first request from the sandbox.'
  },
  {
    num: 4,
    icon: Rocket,
    title: 'Go live',
    description: 'Move to production once your account is verified.'
  }
];

export default function OnboardingFlow() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16 text-center"
        >
          From request to live.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-DEFAULT/40 to-transparent"></div>
                )}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-cyan-DEFAULT/10 border-2 border-cyan-DEFAULT flex items-center justify-center">
                      <Icon size={40} weight="duotone" className="text-cyan-DEFAULT" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-DEFAULT text-navy-DEFAULT font-bold flex items-center justify-center text-sm">
                      {step.num}
                    </div>
                  </div>
                </div>
                <h3 className="text-navy-DEFAULT font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-navy-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/get-started?type=other"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
          >
            Request API access
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
