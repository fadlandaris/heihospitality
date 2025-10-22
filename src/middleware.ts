import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = { matcher: ['/admin/:path*'] };

export function middleware(req: NextRequest) {
  const cookieName = process.env.IRON_SESSION_COOKIE_NAME!;
  const hasSessionCookie = req.cookies.get(cookieName);

  if (!hasSessionCookie) {
    const url = new URL('/auth/admin-login', req.url);
    url.searchParams.set('redirect', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
