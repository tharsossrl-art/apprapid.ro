import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const GATED_HOSTS = ['apprapid.ro', 'www.apprapid.ro']

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname

  // Only gate on the production domain
  if (!GATED_HOSTS.includes(hostname)) {
    return NextResponse.next()
  }

  const pathname = request.nextUrl.pathname

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
     * - favicon, robots, sitemap, manifest, icons, heroes, og images
     */
    '/((?!_next/static|_next/image|favicon|robots\\.txt|sitemap|manifest\\.json|apple-touch-icon|icons/|heroes/|og-).*)',
  ],
}
