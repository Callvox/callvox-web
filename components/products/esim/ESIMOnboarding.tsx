'use client';

import { ChatsCircle, ListChecks, PlugsConnected, RocketLaunch } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';
import { Section, SectionHeader } from '@/components/Section';

const steps = [
  { title: 'Share your use case', description: 'Tell us whether it is MVNO, travel or IoT, and the markets you serve.', icon: ChatsCircle },
  { title: 'Scope the integration', description: 'We come back with integration details for your use case.', icon: ListChecks },
  { title: 'Connect by API', description: 'Integrate profile ordering and webhooks.', icon: PlugsConnected },
  { title: 'Test and go live', description: 'Test profiles first, then live provisioning.', icon: RocketLaunch },
];

export function ESIMOnboarding() {
  return (
    <Section tone="tint">
      <SectionHeader title="How onboarding works." />
      <FlowSteps steps={steps} />
    </Section>
  );
}
