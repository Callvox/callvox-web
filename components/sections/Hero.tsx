import { NetworkMap } from './NetworkMap'

export function Hero() {
  return (
    // Fills the first screen (svh avoids mobile URL-bar jump), capped so ultra-tall screens don't stretch it.
    // Phones: at least 46rem so the map always sits below the button on short screens; content is top-anchored.
    // md up: exactly the viewport, content vertically centred.
    <section className="surface-ink relative flex min-h-[max(100svh,46rem)] flex-col justify-start overflow-hidden bg-navy-DEFAULT text-white md:min-h-[min(100svh,1400px)] md:justify-center">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center pb-16 sm:pb-10 lg:top-16 lg:items-center lg:pb-0">
        <NetworkMap className="w-[165%] max-w-none sm:w-[145%] lg:w-[112%]" />
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
          <br />
          One integration, one invoice and one support contact, for carriers, MVNOs, resellers and enterprises.
        </p>
      </div>
    </section>
  )
}
