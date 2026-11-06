import Image from 'next/image'
import Link from 'next/link'
import { products, solutions, simpleLinks } from '@/lib/nav'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      ...products.map(({ name, href }) => ({ label: name, href })),
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: solutions.map(({ name, href }) => ({ label: name, href })),
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      ...simpleLinks.map(({ name, href }) => ({ label: name, href })),
      { label: 'Legal', href: '/legal' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 relative pt-14 pb-8 sm:pt-20">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/40 to-transparent" />
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-6 gap-y-8 sm:gap-y-10 sm:gap-x-8 lg:gap-x-10 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block py-2">
              <Image
                src="/callvox-logo-white.png"
                alt="Callvox"
                width={599}
                height={134}
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxWidth: '180px' }}
              />
            </Link>
            <p className="text-[13px] text-navy-300 mt-1 leading-relaxed max-w-xs">
              The unified wholesale platform for the world&apos;s fastest-growing markets.
            </p>
          </div>

          {Object.values(footerLinks).map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-xs uppercase tracking-widest text-navy-200 font-semibold mb-4">
                {title}
              </h2>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="inline-block py-2 lg:py-1.5 text-sm text-navy-300 hover:text-white focus-visible:text-white focus-visible:underline underline-offset-4 transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-6 text-xs text-navy-300">
          <p>&copy; {new Date().getFullYear()} Callvox OÜ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
