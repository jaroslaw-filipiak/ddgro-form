import { NextRequest, NextResponse } from 'next/server'

// Define the locales you support
const locales = ['en', 'pl', 'fr']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
    // Get the pathname from the request
    const { pathname } = request.nextUrl

    // Check if the pathname is the root
    if (pathname === '/') {
        // Redirect to the default locale
        return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)', '/'],
}
