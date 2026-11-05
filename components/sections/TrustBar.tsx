import Link from 'next/link'

const certifications = ['ISO 27001', 'STIR/SHAKEN', 'GDPR', '10DLC', 'GSMA SGP.32']

export function TrustBar() {
  return (
    <>
      <section className="border-t border-navy-100 bg-paper py-10">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <ul className="flex flex-wrap gap-2" aria-label="Certifications and compliance">
            {certifications.map((c) => (
              <li key={c} className="label rounded-sm border border-navy-100 px-3 py-2 text-navy-600">
                {c}
              </li>
            ))}
          </ul>
          <p className="label flex items-center gap-2 text-navy-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-DEFAULT animate-pulse-dot" aria-hidden />
            All systems operational
            <Link href="https://status.callvox.net" className="text-cyan-DEFAULT underline-offset-4 hover:underline">
              status.callvox.net
            </Link>
          </p>
        </div>
      </section>

      <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT py-28 text-white lg:py-40">
        <div className="bg-grid-ink absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <p className="label text-signal">04 — Get started</p>
          <h2 className="mt-5 max-w-4xl text-5xl leading-[1.02] lg:text-7xl">
            Ready to simplify your <em className="text-signal">wholesale stack?</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-navy-200">
            Join 150+ carriers, MVNOs and resellers already on the platform.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-signal px-7 text-[15px] font-semibold text-navy-DEFAULT transition-colors hover:bg-white"
            >
              Work with us
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
    </>
  )
}
