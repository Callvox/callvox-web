import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { GetStartedForm } from '@/components/GetStartedForm'

export const metadata: Metadata = {
  title: 'Get started',
  description:
    'Tell us your destinations and services. We’ll come back with route options and wholesale rates.',
}

const TYPES = ['carrier', 'mvno', 'reseller', 'enterprise', 'other']

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const defaultType = type && TYPES.includes(type) ? type : 'carrier'

  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto grid max-w-page gap-12 pb-24 pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-32 lg:pt-24 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-5">
            <h1 className="display-h2 text-navy-DEFAULT">
              Tell us your <em>corridors.</em>
            </h1>
            <p className="mt-6 text-lg text-navy-600">
              Share the destinations and services you need. We&apos;ll review them and come back with
              route options and wholesale rates.
            </p>
            <ul className="mt-10 space-y-4 border-t border-navy-100 pt-8 text-[15px] text-navy-600">
              <li>
                <span className="label block text-navy-DEFAULT">One integration</span>
                Voice, SMS, airtime, eSIM and numbers.
              </li>
              <li>
                <span className="label block text-navy-DEFAULT">One invoice</span>
                A single commercial relationship across services.
              </li>
              <li>
                <span className="label block text-navy-DEFAULT">One team</span>
                A single team to call when it matters.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <GetStartedForm defaultType={defaultType} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
