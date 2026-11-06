'use client'

import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { CTA } from './CTA'
import { products as navProducts, solutions as navSolutions, simpleLinks as navSimpleLinks } from '@/lib/nav'
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
  type Icon,
} from '@phosphor-icons/react'

const productIcons: Record<string, Icon> = {
  '/products/voice': Phone,
  '/products/sms': ChatDots,
  '/products/airtime': Lightning,
  '/products/esim': SimCard,
  '/products/dids': PhoneIncoming,
}

const solutionIcons: Record<string, Icon> = {
  '/solutions/carriers': Broadcast,
  '/solutions/mvnos': SimCard,
  '/solutions/resellers': ArrowUpRight,
  '/solutions/enterprises': Buildings,
}

const products = navProducts.map((p) => ({ ...p, icon: productIcons[p.href] }))
const solutions = navSolutions.map((s) => ({ ...s, icon: solutionIcons[s.href] }))
const simpleLinks = navSimpleLinks

type DropdownName = 'Products' | 'Solutions'

const panels: { name: DropdownName; basePath: string; width: number; items: typeof products }[] = [
  { name: 'Products', basePath: '/products', width: 460, items: products },
  { name: 'Solutions', basePath: '/solutions', width: 320, items: solutions },
]

// Hover opens after a short intent delay, and closes after a short grace period.
const OPEN_DELAY = 90
const CLOSE_DELAY = 150

/** Height-animated accordion. `inert` removes collapsed links from the tab order. */
function Accordion({ open, id, children }: { open: boolean; id: string; children: ReactNode }) {
  return (
    <div
      id={id}
      inert={!open}
      className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProducts, setMobileProducts] = useState(false)
  const [mobileSolutions, setMobileSolutions] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null)
  // The panel keeps showing the last menu while it fades out
  const [lastActive, setLastActive] = useState<DropdownName>('Products')
  const [heights, setHeights] = useState<Partial<Record<DropdownName, number>>>({})
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Partial<Record<DropdownName, HTMLButtonElement | null>>>({})
  const contentRefs = useRef<Partial<Record<DropdownName, HTMLDivElement | null>>>({})
  const prevActiveRef = useRef<DropdownName | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Home: transparent over the ink hero until the page scrolls
  const overHero = pathname === '/' && !scrolled && !mobileOpen

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

  // Close everything on navigation (including browser back/forward)
  useEffect(() => {
    setActiveDropdown(null)
    setMobileOpen(false)
  }, [pathname])

  // Lock page scroll behind the open mobile menu, and close it if the viewport grows to desktop
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setMobileOpen(false)
    mq.addEventListener('change', onChange)
    return () => {
      document.body.style.overflow = prev
      mq.removeEventListener('change', onChange)
    }
  }, [mobileOpen])

  // Measure each menu once so the shared panel can animate its height between them
  useEffect(() => {
    const measure = () =>
      setHeights({
        Products: contentRefs.current.Products?.offsetHeight,
        Solutions: contentRefs.current.Solutions?.offsetHeight,
      })
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Remember the previous open state so geometry only animates when switching menus, not on first open
  useEffect(() => {
    prevActiveRef.current = activeDropdown
  })

  // Hover only opens menus on devices with a real hover. On touch, a tap fires hover then click and the
  // menu would open and immediately close, so touch uses click only.
  const canHover = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const clearTimers = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
  }

  const openDropdown = (name: DropdownName) => {
    setLastActive(name)
    setActiveDropdown(name)
  }

  const onTriggerEnter = (name: DropdownName) => {
    if (!canHover()) return
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
    // Already open: switch straight away. Otherwise wait a beat so sweeping across the nav doesn't flash menus.
    if (activeDropdown) openDropdown(name)
    else openTimeoutRef.current = setTimeout(() => openDropdown(name), OPEN_DELAY)
  }

  const onTriggerLeave = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
  }

  const onNavEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
  }

  const onNavLeave = () => {
    if (!canHover()) return
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), CLOSE_DELAY)
  }

  const onTriggerClick = (e: React.MouseEvent, name: DropdownName) => {
    clearTimers()
    // Keyboard activation (detail 0) and touch toggle. A mouse click on a hover-opened menu keeps it open.
    if (e.detail === 0 || !canHover()) {
      if (activeDropdown === name) setActiveDropdown(null)
      else openDropdown(name)
    } else {
      openDropdown(name)
    }
  }

  // Escape closes the open menu (or the mobile menu) and returns focus to its trigger.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return
      if (activeDropdown) {
        const t = triggerRefs.current[activeDropdown]
        setActiveDropdown(null)
        if (navRef.current?.contains(document.activeElement)) t?.focus()
      } else if (mobileOpen) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeDropdown, mobileOpen])

  // Arrow keys move through a menu's links; Home/End jump to the ends.
  function onNavKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    const name = (target.closest<HTMLElement>('[data-dropdown]')?.dataset.dropdown ??
      target.closest<HTMLElement>('[data-panel]')?.dataset.panel) as DropdownName | undefined
    if (!name) return
    const links = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>(`[data-panel="${name}"] a[href]`))
    const trigger = triggerRefs.current[name]
    const idx = links.indexOf(document.activeElement as HTMLAnchorElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (activeDropdown !== name) {
        openDropdown(name)
        setTimeout(() => links[0]?.focus(), 40)
      } else {
        links[(idx + 1) % links.length]?.focus()
      }
    } else if (e.key === 'ArrowUp' && activeDropdown === name) {
      e.preventDefault()
      if (idx <= 0) trigger?.focus()
      else links[idx - 1]?.focus()
    } else if (e.key === 'Home' && idx >= 0) {
      e.preventDefault()
      links[0]?.focus()
    } else if (e.key === 'End' && idx >= 0) {
      e.preventDefault()
      links[links.length - 1]?.focus()
    }
  }

  // Close when keyboard focus leaves the menu area entirely
  function onNavBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) setActiveDropdown(null)
  }

  // Hover/current states keep text dark (AA contrast) and use a tint or underline bar instead of recolouring the text.
  const ringClass = overHero ? 'focus-visible:ring-signal' : 'focus-visible:ring-cyan-DEFAULT'
  const linkTone = (current: boolean) =>
    overHero
      ? current
        ? 'text-white'
        : 'text-white/85 hover:text-white'
      : current
        ? 'text-navy-DEFAULT'
        : 'text-navy-700 hover:bg-navy-50 hover:text-navy-DEFAULT'
  const currentBar = (current: boolean) =>
    current ? 'after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:rounded-full after:bg-cyan-DEFAULT' : ''
  const triggerClass = (current: boolean) =>
    `relative flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ${ringClass} ${linkTone(current)} ${currentBar(current)}`

  const itemFocus =
    'focus-visible:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-DEFAULT'

  // ---- shared desktop panel geometry ----
  const open = activeDropdown !== null
  const panel = panels.find((p) => p.name === lastActive)!
  const left = triggerRefs.current[lastActive]?.offsetLeft ?? 0
  // Position/size only animate when moving between menus; the first open appears in place.
  const animateGeo = prevActiveRef.current !== null && open
  const panelClass = open
    ? animateGeo
      ? 'visible translate-y-0 opacity-100 [transition:left_250ms_ease-out,width_250ms_ease-out,opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_0s]'
      : 'visible translate-y-0 opacity-100 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_0s]'
    : 'invisible -translate-y-1 opacity-0 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_200ms]'

  return (
    <header
      ref={navRef}
      className={`${pathname === '/' ? 'fixed inset-x-0' : 'sticky'} top-0 z-50 h-[68px] border-b transition-colors duration-300 ${
        overHero ? 'border-transparent bg-transparent text-white' : scrolled ? 'border-navy-100 bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/80' : 'border-navy-100 bg-paper'
      }`}
    >
      <nav className="max-w-page mx-auto h-full flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" aria-label="Callvox home" onClick={() => setActiveDropdown(null)} className="flex items-center min-h-11">
          <Logo reversed={overHero} className="w-[136px] h-auto flex-shrink-0" />
        </Link>

        {/* Desktop links */}
        <div
          className="relative hidden flex-1 items-center gap-0.5 lg:flex"
          onMouseEnter={onNavEnter}
          onMouseLeave={onNavLeave}
          onKeyDown={onNavKeyDown}
          onBlur={onNavBlur}
        >
          {panels.map((p) => (
            <button
              key={p.name}
              ref={(el) => { triggerRefs.current[p.name] = el }}
              data-dropdown={p.name}
              onMouseEnter={() => onTriggerEnter(p.name)}
              onMouseLeave={onTriggerLeave}
              onClick={(e) => onTriggerClick(e, p.name)}
              aria-expanded={activeDropdown === p.name}
              aria-haspopup="true"
              aria-controls="nav-panel"
              className={triggerClass(isCurrentPage(p.basePath))}
            >
              {p.name}
              <CaretDown
                weight="bold"
                className={`h-3 w-3 transition-transform duration-300 motion-reduce:transition-none ${activeDropdown === p.name ? 'rotate-180' : ''}`}
              />
            </button>
          ))}

          {/* One panel shared by both menus: it slides and resizes between them. pt-2 bridges the hover gap. */}
          <div
            id="nav-panel"
            className={`absolute top-full z-50 pt-2 ${panelClass} motion-reduce:transition-none`}
            style={{ left, width: panel.width }}
          >
            <div
              className={`relative overflow-hidden rounded-md border border-navy-100 bg-paper shadow-lg ${
                animateGeo ? 'transition-[height] duration-[250ms] ease-out motion-reduce:transition-none' : ''
              }`}
              style={{ height: (heights[lastActive] ?? 0) + 2 }}
            >
              {panels.map((p) => {
                const active = lastActive === p.name
                return (
                  <div
                    key={p.name}
                    data-panel={p.name}
                    ref={(el) => { contentRefs.current[p.name] = el }}
                    className={`absolute inset-x-0 top-0 p-2 motion-reduce:transition-none ${
                      active
                        ? 'visible opacity-100 [transition:opacity_200ms_ease-out,visibility_0s_0s]'
                        : 'invisible opacity-0 [transition:opacity_200ms_ease-out,visibility_0s_200ms]'
                    }`}
                  >
                    {p.items.map((item) => {
                      const Icon = item.icon
                      const current = isCurrentPage(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          aria-current={current ? 'page' : undefined}
                          className={`group relative flex items-start gap-4 rounded-sm px-3 py-3 transition-colors hover:bg-navy-50 ${itemFocus}`}
                        >
                          {current && <span aria-hidden className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-cyan-DEFAULT" />}
                          <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-cyan-DEFAULT/10 transition-colors group-hover:bg-cyan-DEFAULT/20">
                            <Icon size={18} weight="light" className="text-cyan-DEFAULT" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-navy-DEFAULT">{item.name}</span>
                            <span className="mt-0.5 block text-xs text-navy-500">{item.desc}</span>
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Simple nav links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveDropdown(null)}
              onMouseEnter={() => { onTriggerLeave(); setActiveDropdown(null) }}
              onFocus={() => setActiveDropdown(null)}
              aria-current={isCurrentPage(link.href) ? 'page' : undefined}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ${ringClass} ${linkTone(isCurrentPage(link.href))} ${currentBar(isCurrentPage(link.href))}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <CTA size="sm" tone={overHero ? 'dark' : 'light'} />
        </div>

        {/* Mobile hamburger: the two icons cross-rotate */}
        <button
          className={`lg:hidden -mr-2 rounded-md p-2.5 ${overHero ? 'text-white' : 'text-navy-DEFAULT'}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-6 w-6">
            <List
              weight="bold"
              size={24}
              className={`absolute inset-0 transition-all duration-200 motion-reduce:transition-none ${mobileOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
            />
            <X
              weight="bold"
              size={24}
              className={`absolute inset-0 transition-all duration-200 motion-reduce:transition-none ${mobileOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu: always mounted so it can animate; `inert` keeps it out of the tab order while closed */}
      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`absolute inset-x-0 top-[68px] max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-b border-navy-100/20 bg-paper text-navy-DEFAULT shadow-xl lg:hidden motion-reduce:transition-none ${
          mobileOpen
            ? 'visible translate-y-0 opacity-100 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_0s]'
            : 'invisible -translate-y-2 opacity-0 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_200ms]'
        }`}
      >
        <div className="px-4 py-6 space-y-1">

          {/* Products accordion */}
          <button
            onClick={() => setMobileProducts((prev) => !prev)}
            aria-expanded={mobileProducts}
            aria-controls="mobile-products"
            className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
          >
            Products
            <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${mobileProducts ? 'rotate-180' : ''}`} />
          </button>
          <Accordion open={mobileProducts} id="mobile-products">
            <div className="pl-4 space-y-1 pb-2">
              {products.map((p) => {
                const Icon = p.icon
                return (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isCurrentPage(p.href) ? 'page' : undefined}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-navy-DEFAULT"
                  >
                    <Icon size={16} weight="light" className="text-cyan-DEFAULT" />
                    {p.name}
                  </Link>
                )
              })}
            </div>
          </Accordion>

          {/* Solutions accordion */}
          <button
            onClick={() => setMobileSolutions((prev) => !prev)}
            aria-expanded={mobileSolutions}
            aria-controls="mobile-solutions"
            className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
          >
            Solutions
            <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${mobileSolutions ? 'rotate-180' : ''}`} />
          </button>
          <Accordion open={mobileSolutions} id="mobile-solutions">
            <div className="pl-4 space-y-1 pb-2">
              {solutions.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isCurrentPage(s.href) ? 'page' : undefined}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-navy-DEFAULT"
                  >
                    <Icon size={16} weight="light" className="text-cyan-DEFAULT" />
                    {s.name}
                  </Link>
                )
              })}
            </div>
          </Accordion>

          {/* Simple links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50 hover:text-navy-DEFAULT"
            >
              {link.name}
            </Link>
          ))}

          {/* CTAs */}
          <div className="pt-4 border-t border-navy-100 space-y-3 mt-4">
            <CTA onClick={() => setMobileOpen(false)} className="w-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
