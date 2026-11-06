import { CTA } from '@/components/CTA'

export function TrustBar() {
  return (
    <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT py-28 text-white lg:py-40">
      <div className="bg-grid-ink absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2">
          Tell us your <em className="text-signal">corridors.</em>
        </h2>
        <p className="mt-6 text-lg text-navy-200">
          Share the destinations and services you need, and we&apos;ll come back with route options.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CTA type="carrier" tone="dark" />
        </div>
      </div>
    </section>
  )
}
