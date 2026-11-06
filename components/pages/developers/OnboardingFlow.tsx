'use client'

import { UserCircle, Key, PaperPlaneTilt, Rocket } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'

const steps = [
  { icon: UserCircle, title: 'Get started', description: 'Tell us about your company and use case.' },
  { icon: Key, title: 'Get sandbox access', description: 'Sandbox credentials to build and test against.' },
  { icon: PaperPlaneTilt, title: 'Make your first request', description: 'Send your first request from the sandbox.' },
  { icon: Rocket, title: 'Go live', description: 'Move to production once your account is verified.' },
]

export default function OnboardingFlow() {
  return (
    <section className="border-t border-navy-100 bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2 mb-12 text-navy-DEFAULT">From request to live.</h2>
        <FlowSteps steps={steps} />
      </div>
    </section>
  )
}
