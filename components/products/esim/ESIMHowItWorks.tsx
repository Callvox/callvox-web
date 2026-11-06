'use client';

import { Code, QrCode, DeviceMobile, CheckCircle } from '@phosphor-icons/react';
import { FlowSteps } from '@/components/FlowSteps';
import { Section, SectionHeader } from '@/components/Section';

const steps = [
  {
    title: 'Order a profile',
    description: 'Request an eSIM profile by API.',
    icon: Code,
  },
  {
    title: 'Receive the activation code',
    description: 'The activation code (LPA string) is returned to you.',
    icon: QrCode,
  },
  {
    title: 'Device downloads the profile',
    description: 'The device downloads the profile over the air from the SM-DP+ profile server.',
    icon: DeviceMobile,
  },
  {
    title: 'Profile active',
    description: 'The profile activates and the status is returned to you.',
    icon: CheckCircle,
  },
];

export function ESIMHowItWorks() {
  return (
    <Section tone="tint">
      <SectionHeader
        title="How a profile gets to a device."
        intro="No physical SIM, no shipping. The profile is ordered by API and delivered over the air."
      />
      <FlowSteps steps={steps} />
    </Section>
  );
}
