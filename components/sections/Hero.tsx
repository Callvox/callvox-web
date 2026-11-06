import { CTA } from '@/components/CTA'
import { NetworkMap } from './NetworkMap'

export function Hero() {
  return (
    // Fills the first screen (svh avoids mobile URL-bar jump), capped so ultra-tall screens don't stretch it.
    // Content is top-anchored on phones and vertically centred from md up.
    <section className="surface-ink relative flex min-h-[min(100svh,1400px)] flex-col justify-start overflow-hidden bg-navy-DEFAULT text-white md:justify-center">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center lg:top-16 lg:items-center">
        <NetworkMap className="w-[170%] max-w-none sm:w-[130%] lg:w-[112%]" />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_45%,rgba(13,43,78,0.94)_0%,rgba(13,43,78,0.7)_32%,rgba(13,43,78,0)_62%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-page px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <h1 className="text-[clamp(3rem,5.8vw,6.25rem)] leading-[0.98] text-white [text-wrap:balance]">
          <span className="reveal-line"><span>Direct routes to the world&rsquo;s <em className="whitespace-nowrap text-signal">fastest‑growing</em> markets.</span></span>
        </h1>
        {/* Two lines on desktop (one sentence each); it wraps naturally on narrower screens */}
        <p className="hero-fade mt-8 max-w-4xl text-lg leading-relaxed text-navy-200 [text-wrap:pretty]" style={{ '--hero-delay': '0.35s' } as React.CSSProperties}>
          Voice, SMS, airtime, eSIM and numbers from one wholesale partner.{' '}
          <br className="hidden sm:block" />
          One integration, one invoice and one support contact, for carriers, MVNOs, resellers and enterprises.
        </p>
        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--hero-delay': '0.5s' } as React.CSSProperties}>
          <CTA tone="dark" />
        </div>
      </div>
    </section>
  )
}
