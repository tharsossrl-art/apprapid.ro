import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const GATED_HOSTS = ['apprapid.ro', 'www.apprapid.ro']

// Static assets and Next.js internals that should always pass through
const PASSTHROUGH_PREFIXES = [
  '/_next/',
  '/favicon',
  '/robots.txt',
  '/sitemap',
  '/manifest.json',
  '/apple-touch-icon',
  '/icons/',
  '/heroes/',
  '/og-',
]

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const hostname = host.split(':')[0] // strip port if present

  // Only gate on the production domain
  if (!GATED_HOSTS.includes(hostname)) {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname

  // Always allow static assets and Next.js internals through
  for (const prefix of PASSTHROUGH_PREFIXES) {
    if (pathname.startsWith(prefix) || pathname === prefix.replace(/\/$/, '')) {
      return NextResponse.next()
    }
  }

  // Already on /coming-soon — let it render
  if (pathname.startsWith('/coming-soon')) {
    return NextResponse.next()
  }

  // Rewrite all other paths to /coming-soon (URL stays clean)
  const url = request.nextUrl.clone()
  url.pathname = '/coming-soon'
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
