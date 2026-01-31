import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const url = request.nextUrl.clone()

  if (
    host.startsWith('www.') ||
    protocol === 'http' ||
    host === 'www.propertywiki.ai'
  ) {
    const canonicalHost = 'propertywiki.ai'
    url.host = canonicalHost
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
