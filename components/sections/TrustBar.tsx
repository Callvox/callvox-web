import Link from 'next/link'

export function TrustBar() {
  return (
    <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT py-28 text-white lg:py-40">
      <div className="bg-grid-ink absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="label text-signal">04 — Get started</p>
        <h2 className="mt-5 max-w-4xl text-5xl leading-[1.02] lg:text-7xl">
          Tell us your <em className="text-signal">corridors.</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-navy-200">
          Share the destinations and services you need, and we&apos;ll come back with route options and
          wholesale rates.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-started"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-signal px-7 text-[15px] font-semibold text-navy-DEFAULT transition-colors hover:bg-white"
          >
            Get started
          </Link>
          <Link
            href="/developers"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-7 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Read the API docs
          </Link>
        </div>
      </div>
    </section>
  )
}
