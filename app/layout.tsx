import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Preloader from '@/components/Preloader'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
});

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Om Sai Ladies Tailor | Professional Tailoring Services',
  description: 'Discover exquisite tailoring craftsmanship. Om Sai Ladies Tailor specializes in custom tailoring with attention to detail.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        {children}
           <Preloader/>
        <Analytics />
      </body>
    </html>
  )
}
