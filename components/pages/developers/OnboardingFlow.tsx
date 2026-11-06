import { UserCircle, Key, PaperPlaneTilt, Rocket } from '@phosphor-icons/react/dist/ssr'

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
        <h2 className="display-h2 text-navy-DEFAULT">From request to live.</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <li key={s.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-DEFAULT/40 bg-white">
                    <Icon size={24} weight="duotone" className="text-cyan-DEFAULT" />
                  </span>
                  <span className="label text-navy-400">Step {i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-DEFAULT">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{s.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
