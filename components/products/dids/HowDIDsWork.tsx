'use client'

import { MagnifyingGlass, ShoppingCartSimple, ArrowsSplit } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'
import { Section, SectionHeader } from '@/components/Section'

const steps = [
  { icon: MagnifyingGlass, title: 'Choose country and type', description: 'Search inventory by country and number type. Availability varies by country.' },
  { icon: ShoppingCartSimple, title: 'Order numbers', description: 'Order through the API or the portal.' },
  { icon: ArrowsSplit, title: 'Route to your trunk', description: 'Point the numbers at your trunk for voice and SMS.' },
]

export default function HowDIDsWork() {
  return (
    <Section tone="tint">
      <SectionHeader title="From search to live number." />
      <FlowSteps steps={steps} />
    </Section>
  )
}
