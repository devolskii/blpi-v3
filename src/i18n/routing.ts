import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'bn'],
  defaultLocale: 'en',
  localePrefix: 'always', // Forces a redirect from `/` to `/en` (or `/bn` depending on preferences)
  localeDetection: false,
});
