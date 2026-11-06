import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the Callvox website.',
  // Draft: keep out of search until reviewed
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
          <p className="label text-cyan-DEFAULT">Legal</p>
          <h1 className="mt-5 text-5xl text-navy-DEFAULT lg:text-6xl">Terms of Service</h1>

          <p className="mt-8 rounded-sm border border-navy-200 bg-white px-5 py-4 text-sm text-navy-600">
            <strong className="text-navy-DEFAULT">Draft.</strong> This page is a placeholder structure to be
            written and reviewed by Callvox counsel before launch. It is not final legal text.
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-navy-600">
            {[
              ['Use of this website', 'Terms for browsing and using this website.'],
              ['Information on this site', 'How descriptions of services and coverage on this site relate to any commercial agreement.'],
              ['Commercial services', 'How wholesale services are contracted, including interconnect, rates and acceptable use.'],
              ['Liability and governing law', 'Limitations, governing law and jurisdiction.'],
            ].map(([title, note]) => (
              <section key={title}>
                <h2 className="text-3xl text-navy-DEFAULT">{title}</h2>
                <p className="mt-4 rounded-sm bg-white p-4 text-navy-400">[To be completed with counsel: {note}]</p>
              </section>
            ))}

            <section>
              <h2 className="text-3xl text-navy-DEFAULT">Contact</h2>
              <p className="mt-4">
                For questions, contact us through the{' '}
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
