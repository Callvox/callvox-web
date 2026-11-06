'use client'

import { ChatsCircle, ListChecks, FileText, RocketLaunch } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'
import { Section, SectionHeader } from '@/components/Section'

const steps = [
  { icon: ChatsCircle, title: 'Share your traffic', description: 'Your corridors and expected volumes.' },
  { icon: ListChecks, title: 'Review the offer', description: 'Route options, rates and interconnect details come back to you.' },
  { icon: FileText, title: 'Agree terms', description: 'Service and commercial terms are set before you send traffic.' },
  { icon: RocketLaunch, title: 'Test and go live', description: 'Test calls first, then live traffic.' },
]

export default function CarriersOnboarding() {
  return (
    <Section tone="tint">
      <SectionHeader title="How onboarding works." />
      <FlowSteps steps={steps} />
    </Section>
  )
}
