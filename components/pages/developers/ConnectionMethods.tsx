import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

const methods = [
  { product: 'Voice', href: '/products/voice', how: ['SIP trunk', 'IP peering'], what: 'Termination and origination' },
  { product: 'SMS', href: '/products/sms', how: ['SMPP', 'REST'], what: 'A2P messaging' },
  { product: 'Airtime', href: '/products/airtime', how: ['REST API'], what: 'Mobile top-ups' },
  { product: 'eSIM', href: '/products/esim', how: ['REST API'], what: 'Profile provisioning' },
  { product: 'DIDs', href: '/products/dids', how: ['REST API', 'portal'], what: 'Number search and provisioning' },
]

const grid = 'sm:grid-cols-[9rem_minmax(0,1.1fr)_minmax(0,1fr)_1.5rem] sm:gap-x-8'

export default function ConnectionMethods() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2 text-navy-DEFAULT">How you connect.</h2>
        <p className="mt-4 text-lg text-navy-600">
          Each product has its own connection method. Use one, some or all. Documentation and test access are shared when your account is set up.
        </p>

        <div className="mt-12 border-t border-navy-100">
          <div
            aria-hidden
            className={`hidden border-b border-navy-100 py-3 font-data text-xs uppercase tracking-widest text-navy-400 sm:grid ${grid}`}
          >
            <span>Product</span>
            <span>Connect via</span>
            <span>Used for</span>
            <span />
          </div>

          <ul>
            {methods.map((m) => (
              <li key={m.product} className="border-b border-navy-100">
                <Link
                  href={m.href}
                  className={`group grid items-center gap-x-8 gap-y-2 px-0 py-5 transition-colors hover:bg-paper focus-visible:bg-paper sm:px-2 ${grid}`}
                >
                  <span className="flex items-center justify-between font-semibold text-navy-DEFAULT">
                    {m.product}
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-0.5 group-hover:text-cyan-DEFAULT sm:hidden"
                    />
                  </span>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {m.how.map((h, i) => (
                      <span key={h} className="flex items-center gap-2">
                        {i > 0 && <span className="text-xs text-navy-400">or</span>}
                        <span className="rounded-sm border border-navy-200 bg-paper px-2.5 py-1 font-data text-[13px] text-navy-DEFAULT">
                          {h}
                        </span>
                      </span>
                    ))}
                  </span>
                  <span className="text-sm text-navy-600">{m.what}</span>
                  <ArrowRight
                    aria-hidden
                    className="hidden h-4 w-4 justify-self-end text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-DEFAULT sm:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
