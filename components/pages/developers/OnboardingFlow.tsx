'use client'

import { UserCircle, Key, PaperPlaneTilt, Rocket } from '@phosphor-icons/react'
import { FlowSteps } from '@/components/FlowSteps'

const steps = [
  { icon: UserCircle, title: 'Tell us your use case', description: 'Your company, the products you need and how you plan to connect.' },
  { icon: Key, title: 'Get test access', description: 'Sandbox or test credentials to build against, depending on the product.' },
  { icon: PaperPlaneTilt, title: 'Make your first request', description: 'Send your first request or test traffic.' },
  { icon: Rocket, title: 'Go live', description: 'Move to production once your account is verified.' },
]

export default function OnboardingFlow() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2 mb-12 text-navy-DEFAULT">From request to live.</h2>
        <FlowSteps steps={steps} />
      </div>
    </section>
  )
}
