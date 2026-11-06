import { CTA } from '@/components/CTA'
import { NetworkMap } from './NetworkMap'

export function Hero() {
  return (
    <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT text-white">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center lg:top-16 lg:items-center">
        <NetworkMap className="w-[170%] max-w-none sm:w-[130%] lg:w-[112%]" />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_45%,rgba(13,43,78,0.94)_0%,rgba(13,43,78,0.7)_32%,rgba(13,43,78,0)_62%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-page gap-14 pb-20 pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-48 px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-12">
          <h1 className="text-[clamp(3rem,5.8vw,6.25rem)] leading-[0.98] text-white [text-wrap:balance]">
            <span className="reveal-line"><span>Direct routes to the world&rsquo;s <em className="whitespace-nowrap text-signal">fastest‑growing</em> markets.</span></span>
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-navy-200 [text-wrap:pretty]">
            Voice, SMS, airtime, eSIM and numbers from one wholesale partner.{' '}
            <br className="hidden sm:block" />
            One integration, one invoice and one support contact, for carriers, MVNOs, resellers and enterprises.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTA tone="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
