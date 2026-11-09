import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * US visitors are confined to the dedicated US homepage (/us), which is
 * rewritten onto "/" so the address bar keeps showing callvox.net/.
 *
 * Country comes from Vercel's `x-vercel-ip-country` header, which the platform
 * sets (and overwrites if a client tries to spoof it). A missing header (local
 * dev, unknown IP) is treated as non-US.
 *
 * Exemptions:
 *  - /robots.txt, /sitemap.xml, /api/og (crawlers and link previews)
 *  - search-engine crawlers. Googlebot and Bingbot crawl from US IPs, so
 *    without this the whole site would be redirected to /us and drop out of
 *    search for everyone else. The header is user-agent based, so it is an SEO
 *    allowance, not a security boundary.
 */

const US_HOME = '/us'

const ALWAYS_ALLOWED = new Set(['/robots.txt', '/sitemap.xml', '/api/og'])

const SEARCH_CRAWLERS =
  /googlebot|google-inspectiontool|adsbot-google|bingbot|bingpreview|duckduckbot|yandex|baiduspider|applebot/i

export function proxy(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country')
  if (country !== 'US') return NextResponse.next()

  const { pathname } = request.nextUrl

  if (SEARCH_CRAWLERS.test(request.headers.get('user-agent') ?? '')) {
    return NextResponse.next()
  }

  // The US homepage is served by rewriting "/", so the URL stays callvox.net/.
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(US_HOME, request.url))
  }
  if (ALWAYS_ALLOWED.has(pathname)) return NextResponse.next()

  // APIs get a status code rather than an HTML redirect.
  if (pathname.startsWith('/api/')) {
    return NextResponse.json(
      { error: 'This service is not available in your region.' },
      { status: 403 },
    )
  }

  // Everything else (including a direct /us) goes to "/". 307 (temporary) so
  // browsers never cache the redirect for non-US visits.
  return NextResponse.redirect(new URL('/', request.url), 307)
}

export const config = {
  // Skip Next internals and static files (anything with a file extension,
  // e.g. logos, favicon, fonts). Everything else is a page or API route.
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
