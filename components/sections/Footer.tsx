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
      { label: 'Pricing', href: '/pricing' },
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
    <footer className="bg-navy-900 text-navy-200 pt-16 pb-8 sm:pt-20 border-t border-navy-800/50">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-x-10 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block py-2">
              <Image
                src="/callvox-logo-white.png"
                alt="Callvox"
                width={599}
                height={134}
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxWidth: '160px' }}
              />
            </Link>
            <p className="text-[13px] text-navy-300 mt-1 leading-relaxed max-w-xs">
              The unified wholesale platform for the world&apos;s fastest-growing markets.
            </p>
            <address className="not-italic text-[13px] text-navy-300 mt-4 leading-relaxed">
              Callvox OÜ<br />
              Lootsa tn 5, 11415 Tallinn, Estonia<br />
              Registry code 17467209<br />
              <a href="mailto:support@callvox.net" className="inline-block py-1 hover:text-white transition-colors">support@callvox.net</a>
            </address>
          </div>

          {Object.values(footerLinks).map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-xs uppercase tracking-widest text-navy-200 font-semibold mb-4">
                {title}
              </h2>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="inline-block py-2 lg:py-1.5 text-sm text-navy-300 hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-navy-300">
          <p>&copy; {new Date().getFullYear()} Callvox OÜ. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-2">
            <Link href="/privacy" className="px-2 py-3 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="px-2 py-3 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/dpa" className="px-2 py-3 hover:text-white transition-colors">DPA</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
