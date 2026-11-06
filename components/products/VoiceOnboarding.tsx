'use client';

import { m as motion } from 'framer-motion';
import { ChatsCircle, ListChecks, PlugsConnected, RocketLaunch } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';

const steps = [
  {
    title: 'Share your traffic',
    description: 'Tell us your corridors and expected volumes.',
    icon: ChatsCircle,
  },
  {
    title: 'Review route options',
    description: 'We come back with route options for your destinations.',
    icon: ListChecks,
  },
  {
    title: 'Exchange interconnect details',
    description: 'Technical details for your SIP trunk or IP peering are agreed.',
    icon: PlugsConnected,
  },
  {
    title: 'Test and go live',
    description: 'Test calls first, then live traffic.',
    icon: RocketLaunch,
  },
];

export function VoiceOnboarding() {
  return (
    <section className="bg-navy-50/40 py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT">How onboarding works.</h2>
        </motion.div>
        <FlowSteps steps={steps} />
      </div>
    </section>
  );
}
