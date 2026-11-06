'use client';

import { Code, ArrowsHorizontal, DeviceMobile, CheckCircle } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';
import { Section, SectionHeader } from '@/components/Section';

const steps = [
  {
    title: 'Your platform',
    description: 'Submit messages over SMPP or REST API.',
    icon: Code,
  },
  {
    title: 'Callvox messaging routes',
    description: 'Messages are routed to the destination operator over direct connections.',
    icon: ArrowsHorizontal,
  },
  {
    title: 'Handset',
    description: "The message is delivered to the subscriber's phone.",
    icon: DeviceMobile,
  },
  {
    title: 'Delivery receipt',
    description: 'The delivery status comes back to you.',
    icon: CheckCircle,
  },
];

export default function SMSHowItWorks() {
  return (
    <Section tone="tint">
      <SectionHeader
        title="How a message travels."
        intro="One integration in, direct operator routes out, and a delivery receipt back."
      />
      <FlowSteps steps={steps} />
    </Section>
  );
}
