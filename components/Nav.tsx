'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import {
  Phone,
  ChatDots,
  Lightning,
  SimCard,
  PhoneIncoming,
  Buildings,
  Broadcast,
  ArrowUpRight,
  List,
  X,
  CaretDown,
  ArrowRight,
} from '@phosphor-icons/react'

const products = [
  { icon: Phone,         name: 'Wholesale Voice',  desc: 'Termination & origination across 500+ routes', href: '/products/voice' },
  { icon: ChatDots,      name: 'SMS / Messaging',  desc: 'A2P SMS, SMPP & REST delivery at scale',        href: '/products/sms' },
  { icon: Lightning,     name: 'Airtime Top-Ups',  desc: 'International mobile recharge via API',          href: '/products/airtime' },
  { icon: SimCard,       name: 'eSIM',             desc: 'Wholesale eSIM provisioning (SGP.32)',           href: '/products/esim' },
  { icon: PhoneIncoming, name: 'DIDs / Numbers',   desc: 'Virtual numbers in 90+ countries',              href: '/products/dids' },
]

const solutions = [
  { icon: Broadcast,    name: 'For Carriers',    href: '/solutions/carriers' },
  { icon: SimCard,      name: 'For MVNOs',        href: '/solutions/mvnos' },
  { icon: ArrowUpRight, name: 'For Resellers',    href: '/solutions/resellers' },
  { icon: Buildings,    name: 'For Enterprises',  href: '/solutions/enterprises' },
]

const simpleLinks = [
  { name: 'Coverage',   href: '/coverage' },
  { name: 'Developers', href: '/developers' },
  { name: 'Resources',  href: '/resources' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen]           = useState(false)
  const [mobileProducts, setMobileProducts]   = useState(false)
  const [mobileSolutions, setMobileSolutions] = useState(false)
  const [activeDropdown, setActiveDropdown]   = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  // Home: transparent over the ink hero until the page scrolls
  const overHero = pathname === '/' && !scrolled && !mobileOpen
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isCurrentPage = (href: string) => pathname === href || pathname.startsWith(href + '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  function toggleDropdown(name: string) {
    setActiveDropdown(prev => prev === name ? null : name)
  }

  return (
    <header
      ref={navRef}
      className={`${pathname === '/' ? 'fixed inset-x-0' : 'sticky'} top-0 z-50 h-[68px] border-b transition-colors duration-300 ${
        overHero ? 'border-transparent bg-transparent text-white' : 'border-navy-100 bg-paper'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" aria-label="Callvox home" onClick={() => setActiveDropdown(null)}>
          <Logo reversed={overHero} className="w-[136px] h-auto flex-shrink-0" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1">

          {/* Products mega-menu — hover to open */}
          <div className="relative group" onMouseEnter={() => handleMouseEnter('Products')} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => toggleDropdown('Products')}
              aria-expanded={activeDropdown === 'Products'}
              className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 focus-visible:outline-none ${
                isCurrentPage('/products') ? 'text-cyan-DEFAULT' : overHero ? 'text-white/85 hover:text-white' : 'text-navy-700 hover:text-cyan-DEFAULT'
              }`}
            >
              Products
              <CaretDown weight="bold" className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'Products' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>

            {activeDropdown === 'Products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-paper rounded-md shadow-lg border border-navy-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                   onMouseEnter={() => handleMouseEnter('Products')}
                   onMouseLeave={handleMouseLeave}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-navy-400 mb-4">All Products</p>
                <div className="grid grid-cols-1 gap-1">
                  {products.map((p) => {
                    const Icon = p.icon
                    return (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-4 px-3 py-3 rounded-sm hover:bg-navy-50 transition-colors group"
                      >
                        <span className="mt-0.5 w-8 h-8 rounded-sm bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} weight="light" className="text-cyan-DEFAULT" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-navy-DEFAULT group-hover:text-cyan-DEFAULT transition-colors">{p.name}</span>
                          <span className="block text-xs text-navy-500 mt-0.5">{p.desc}</span>
                        </span>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-navy-100 flex items-center justify-between">
                  <span className="text-xs text-navy-400">One API. All five products.</span>
                  <Link
                    href="/developers"
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs font-semibold text-cyan-DEFAULT flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View API docs <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown — hover to open */}
          <div className="relative group" onMouseEnter={() => handleMouseEnter('Solutions')} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => toggleDropdown('Solutions')}
              aria-expanded={activeDropdown === 'Solutions'}
              className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 focus-visible:outline-none ${
                isCurrentPage('/solutions') ? 'text-cyan-DEFAULT' : overHero ? 'text-white/85 hover:text-white' : 'text-navy-700 hover:text-cyan-DEFAULT'
              }`}
            >
              Solutions
              <CaretDown weight="bold" className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'Solutions' ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>

            {activeDropdown === 'Solutions' && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-paper rounded-md shadow-lg border border-navy-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                   onMouseEnter={() => handleMouseEnter('Solutions')}
                   onMouseLeave={handleMouseLeave}>
                {solutions.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-navy-700 hover:bg-navy-50 hover:text-cyan-DEFAULT transition-colors group"
                    >
                      <Icon size={16} weight="light" className="text-navy-400 group-hover:text-cyan-DEFAULT transition-colors flex-shrink-0" />
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Simple nav links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveDropdown(null)}
              aria-current={isCurrentPage(link.href) ? 'page' : undefined}
              className={`px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:ring-offset-2 rounded-md ${
                isCurrentPage(link.href) ? 'text-cyan-DEFAULT' : overHero ? 'text-white/85 hover:text-white' : 'text-navy-700 hover:text-cyan-DEFAULT'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <Link href="/get-started" className={`inline-flex h-10 items-center rounded-sm px-5 text-sm font-medium transition-colors ${overHero ? 'bg-signal text-navy-DEFAULT hover:bg-white' : 'bg-navy-DEFAULT text-white hover:bg-navy-700'}`}>Get started</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-md ${overHero ? 'text-white' : 'text-navy-DEFAULT'}`}
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X weight="bold" size={24} /> : <List weight="bold" size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-paper text-navy-DEFAULT border-b border-navy-100/20 shadow-xl overflow-y-auto max-h-[calc(100vh-68px)]">
          <div className="px-4 py-6 space-y-1">

            {/* Products accordion */}
            <button
              onClick={() => setMobileProducts(prev => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
            >
              Products
              <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 ${mobileProducts ? 'rotate-180' : ''}`} />
            </button>
            {mobileProducts && (
              <div className="pl-4 space-y-1 pb-2">
                {products.map((p) => {
                  const Icon = p.icon
                  return (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
                    >
                      <Icon size={16} weight="light" className="text-cyan-DEFAULT" />
                      {p.name}
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Solutions accordion */}
            <button
              onClick={() => setMobileSolutions(prev => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
            >
              Solutions
              <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 ${mobileSolutions ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolutions && (
              <div className="pl-4 space-y-1 pb-2">
                {solutions.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
                    >
                      <Icon size={16} weight="light" className="text-navy-400" />
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Simple links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
              >
                {link.name}
              </Link>
            ))}

            {/* CTAs */}
            <div className="pt-4 border-t border-navy-100 space-y-3 mt-4">
              <Link href="/get-started" onClick={() => setMobileOpen(false)} className="flex h-12 w-full items-center justify-center rounded-sm bg-navy-DEFAULT font-medium text-white">Get started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
