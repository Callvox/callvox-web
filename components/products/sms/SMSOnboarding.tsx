'use client';

import { ChatsCircle, ListChecks, PlugsConnected, RocketLaunch } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';
import { Section, SectionHeader } from '@/components/Section';

const steps = [
  {
    title: 'Share your traffic',
    description: 'Tell us your corridors, expected volumes and sender ID needs.',
    icon: ChatsCircle,
  },
  {
    title: 'Review route options',
    description: 'We come back with route options for your destinations.',
    icon: ListChecks,
  },
  {
    title: 'Connect',
    description: 'Connect by SMPP or REST API.',
    icon: PlugsConnected,
  },
  {
    title: 'Test and go live',
    description: 'Test messages first, then live traffic.',
    icon: RocketLaunch,
  },
];

export default function SMSOnboarding() {
  return (
    <Section tone="tint">
      <SectionHeader title="How onboarding works." />
      <FlowSteps steps={steps} />
    </Section>
  );
}
