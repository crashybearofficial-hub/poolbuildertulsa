import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Check if the host is the www version
  if (host === 'www.poolbuildertulsa.com') {
    url.host = 'poolbuildertulsa.com';
    url.protocol = 'https:'; // Ensure it redirects to https
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Only run middleware on document requests to avoid unnecessary overhead for assets/api
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
