import type { Metadata } from 'next';
import {
  Ancizar_Serif,
  DM_Sans,
  DM_Serif_Display,
  Noto_Sans_Bengali,
  Noto_Serif_Bengali,
} from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const enHeading = DM_Serif_Display({
  variable: '--font-en-heading',
  subsets: ['latin'],
  weight: '400',
});

const enSerif = Ancizar_Serif({
  variable: '--font-en-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  adjustFontFallback: false,
});

const enSans = DM_Sans({ variable: '--font-en-sans', subsets: ['latin'] });

const bnSans = Noto_Sans_Bengali({
  variable: '--font-bn-sans',
  subsets: ['bengali'],
});

const bnSerif = Noto_Serif_Bengali({
  variable: '--font-bn-serif',
  subsets: ['bengali'],
});

export const metadata: Metadata = {
  title: 'International Path',
  description: 'International Path — a revolutionary socialist publication.',
  keywords:
    'Antarjatik Path, Bolshevik, Leninist, India, Politics, BLPI, Marxism, Marxist, Journal, Theory, Articles, Communism, Trotskyism, Trotsky, Lenin, Marx, Engels, Rosa Luxemburg',
  icons: { icon: [{ url: '/favicon.ico', sizes: '48x48' }] },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // 2. Await the direct parameter map instead of utilizing global getLocale()
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <>
      <html
        lang={locale}
        className={`${enSans.variable} ${enHeading.variable} ${enSerif.variable} ${bnSerif.variable} ${bnSans.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`,
            }}
          />
        </head>
        <body suppressHydrationWarning>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="fade-in">{children}</div>
          </NextIntlClientProvider>
          <SpeedInsights />
        </body>
      </html>
      <Analytics />
    </>
  );
}
