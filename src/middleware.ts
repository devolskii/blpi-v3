import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Matches the root `/` and all sub-paths, excluding assets, next internals, and sanity studio
  matcher: ['/', '/((?!api|_next|_vercel|studio|.*\\..*).*)'],
}
