import type {Metadata} from 'next'
import {Ancizar_Serif, DM_Sans, DM_Serif_Display, DM_Serif_Text} from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({variable: '--font-dm-sans', subsets: ['latin']})
const dmSerifDisplay = DM_Serif_Display({variable: '--font-dm-serif-display', subsets: ['latin'], weight: '400'})
const dmSerifText = DM_Serif_Text({variable: '--font-dm-serif-text', subsets: ['latin'], weight: '400'})
const ancizarSerif = Ancizar_Serif({variable: '--font-ancizar', subsets: ['latin'], style: ['normal', 'italic']})

export const metadata: Metadata = {
  title: 'International Path',
  description: 'International Path — a revolutionary socialist publication.',
}

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} ${dmSerifText.variable} ${ancizarSerif.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
