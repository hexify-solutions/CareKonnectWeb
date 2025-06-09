// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isLoggedIn = Boolean(request.cookies.get("auth_token")?.value)

  const { pathname } = request.nextUrl
  // Redirect logged-in users from homepage to dashboard
  if (pathname === "/" && isLoggedIn) {
    return NextResponse.redirect(new URL("/user/dashboard", request.url))
  }
  if (pathname?.includes("/user/dashboard") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  if (pathname?.includes("/user/profile") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}
