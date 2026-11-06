import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Our legal documents: Privacy Notice, Terms of Service and Data Processing Agreement.',
  alternates: { canonical: '/legal' },
}

const documents = [
  {
    title: 'Privacy Notice',
    href: '/privacy',
    text: 'How we handle personal data across our website, customer portal, recruitment and telecommunications services.',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
    text: 'Terms governing the supply of our telecommunications services to business customers.',
  },
  {
    title: 'Data Processing Agreement',
    href: '/dpa',
    text: 'How we process personal data on behalf of business customers as a processor under the GDPR.',
  },
]

export default function LegalPage() {
  return (
    <LegalLayout>
      <h1 className="display-h1 text-navy-DEFAULT">Legal</h1>
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {documents.map(({ title, href, text }) => (
          <li key={href}>
            <Link
              href={href}
              className="block h-full rounded-sm border border-navy-200 bg-white p-6 transition-colors hover:border-cyan-DEFAULT"
            >
              <h2 className="text-lg font-semibold text-navy-DEFAULT">{title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </LegalLayout>
  )
}
