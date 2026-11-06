'use client'

import { Phone, Lightning, CheckCircle, Receipt } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'
import { Section, SectionHeader } from '@/components/Section'

const steps = [
  {
    icon: Phone,
    title: 'MSISDN validation',
    description: 'Send the destination number. We identify the operator, country, and available denomination ranges automatically.',
  },
  {
    icon: Lightning,
    title: 'Top-up execution',
    description: "API call dispatches the recharge to the operator's system.",
  },
  {
    icon: CheckCircle,
    title: 'Webhook confirmation',
    description: 'Delivery confirmed via webhook, with a transaction record and operator reference number.',
  },
  {
    icon: Receipt,
    title: 'Reconcile',
    description: 'A transaction log with the operator reference, exportable for your finance team.',
  },
]

export default function HowItWorksAirtime() {
  return (
    <Section tone="tint">
      <SectionHeader title="A top-up request, confirmed by webhook." />
      <FlowSteps steps={steps} />
    </Section>
  )
}
