import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { PageHero } from '@/components/PageHero'
import { GetStartedForm } from '@/components/GetStartedForm'

export const metadata: Metadata = {
  title: 'Contact Callvox | Request Route Options and Rates',
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
          body="Share the destinations and services you need."
          cta={false}
        />
        <section className="bg-paper">
          <div className="mx-auto grid max-w-page gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
            <div className="lg:col-span-5">
              <h2 className="label text-navy-DEFAULT">What happens next</h2>
              <ol className="mt-6 space-y-6 text-[15px] text-navy-600">
                {[
                  ['We review your request', 'Your corridors, services and volumes.'],
                  ['We reply by email', 'With route options and rates for your destinations.'],
                  ['We agree terms and connect', 'Then you integrate and test before going live.'],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span aria-hidden className="font-data text-sm text-cyan-DEFAULT">0{i + 1}</span>
                    <span>
                      <span className="block font-semibold text-navy-DEFAULT">{title}</span>
                      {body}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
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
