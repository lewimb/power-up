import { type NextRequest, NextResponse } from 'next/server';
import { authPageChecker } from './middlewares/auth.middleware';

export function middleware(req: NextRequest) {
  const { pathname, searchParams, origin } = req.nextUrl;

  if (pathname === '/auth' && !authPageChecker(searchParams.get('tab'))) {
    return NextResponse.redirect(origin + '/auth?tab=0');
  }
}
