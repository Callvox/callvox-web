import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { PageHero } from '@/components/PageHero'
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
  const defaultType = type && TYPES.includes(type) ? type : ''

  return (
    <>
      <Nav />
      <main id="main-content">
        <PageHero
          title={
            <>
              Tell us your <em>corridors.</em>
            </>
          }
          body="Share the destinations and services you need. We'll review them and come back with route options and wholesale rates."
          cta={false}
        />
        <section className="bg-paper">
          <div className="mx-auto grid max-w-page gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
            <ul className="space-y-6 text-[15px] text-navy-600 lg:col-span-5">
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
            <div className="lg:col-span-7">
              <GetStartedForm defaultType={defaultType} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
