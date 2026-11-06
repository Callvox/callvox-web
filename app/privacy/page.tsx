import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Callvox handles information submitted through this website.',
  // Draft: keep out of search until reviewed
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
          <p className="label text-cyan-DEFAULT">Legal</p>
          <h1 className="mt-5 text-5xl text-navy-DEFAULT lg:text-6xl">Privacy Policy</h1>

          <p className="mt-8 rounded-sm border border-navy-200 bg-white px-5 py-4 text-sm text-navy-600">
            <strong className="text-navy-DEFAULT">Draft.</strong> This page is a working draft to be reviewed by
            Callvox counsel before launch. It describes how this website currently handles contact-form
            information and is not final legal text.
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-navy-600">
            <section>
              <h2 className="text-3xl text-navy-DEFAULT">What we collect</h2>
              <p className="mt-4">
                When you submit the form on our{' '}
                <Link href="/get-started" className="text-cyan-DEFAULT underline">Get started</Link> page, we collect
                the details you enter: your name, work email address, company name, and optionally your phone number,
                company type, the services you are interested in, the destinations (corridors) and monthly volume you
                expect, and any message you write.
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">How we use it</h2>
              <p className="mt-4">
                We use this information to respond to your enquiry, for example to send route options, rate
                information or interconnect details.
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">How it is handled</h2>
              <p className="mt-4">
                Submissions are sent to the Callvox team by email through an email delivery provider. We do not
                use the form to collect payment details or passwords.
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">Retention, sharing and your rights</h2>
              <p className="mt-4 rounded-sm bg-white p-4 text-navy-400">
                [To be completed with counsel: retention period, any sharing with service providers, legal basis,
                and how to request access, correction or deletion.]
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">Cookies and analytics</h2>
              <p className="mt-4 rounded-sm bg-white p-4 text-navy-400">
                [To be completed with counsel: confirm which cookies or analytics, if any, this site uses.]
              </p>
            </section>

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">Contact</h2>
              <p className="mt-4">
                To ask about your information, contact us through the{' '}
                <Link href="/get-started" className="text-cyan-DEFAULT underline">Get started</Link> form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
