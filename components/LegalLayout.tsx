import Link from 'next/link'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

const documents = [
  { label: 'Privacy Notice', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Data Processing Agreement', href: '/dpa' },
]

interface LegalLayoutProps {
  current?: (typeof documents)[number]['href']
  children: React.ReactNode
}

export function LegalLayout({ current, children }: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-paper">
        <div className="mx-auto max-w-page px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          {current && (
          <nav aria-label="Legal documents" className="mb-10 flex flex-wrap gap-x-6 gap-y-1 border-b border-navy-200">
            {documents.map(({ label, href }) => {
              const active = href === current
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`-mb-px border-b-2 py-3 text-sm transition-colors ${
                    active
                      ? 'border-cyan-DEFAULT font-semibold text-navy-DEFAULT'
                      : 'border-transparent text-navy-500 hover:text-navy-DEFAULT'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
