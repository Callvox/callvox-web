'use client'

import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { label: 'Voice', href: '/products/voice' },
      { label: 'SMS / Messaging', href: '/products/sms' },
      { label: 'Airtime Top-Ups', href: '/products/airtime' },
      { label: 'eSIM', href: '/products/esim' },
      { label: 'DIDs / Numbers', href: '/products/dids' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'For Carriers', href: '/solutions/carriers' },
      { label: 'For MVNOs', href: '/solutions/mvnos' },
      { label: 'For Resellers', href: '/solutions/resellers' },
      { label: 'For Enterprises', href: '/solutions/enterprises' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Coverage', href: '/coverage' },
      { label: 'Developers', href: '/developers' },
      { label: 'Resources', href: '/resources' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 pt-32 pb-12 border-t border-navy-800/50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/callvox-logo-white.png"
                alt="Callvox"
                width={599}
                height={134}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '160px',
                }}
              />
            </Link>
            <p className="text-sm text-navy-300 mt-6 max-w-xs leading-relaxed">
              The unified wholesale platform for the world&apos;s fastest-growing markets.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-navy-300 font-semibold mb-6">
              {footerLinks.products.title}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.products.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-300 hover:text-white hover:translate-x-0.5 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-navy-300 font-semibold mb-6">
              {footerLinks.solutions.title}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.solutions.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-300 hover:text-white hover:translate-x-0.5 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-navy-300 font-semibold mb-6">
              {footerLinks.company.title}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.company.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-300 hover:text-white hover:translate-x-0.5 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800/30 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>&copy; 2026 Callvox. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
