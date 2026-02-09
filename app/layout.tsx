import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
}

export const metadata: Metadata = {
  title: 'AppRapid.ro - Transformă-ți afacerea în aplicație',
  description: 'Mai mult decât un site. Mai simplu decât o aplicație. Aplicații web moderne pentru afaceri locale din vestul României.',
  keywords: ['aplicații web', 'web app', 'dezvoltare aplicații', 'Timișoara', 'România', 'afaceri locale', 'PWA'],
  authors: [{ name: 'AppRapid.ro', url: 'https://apprapid.ro' }],
  creator: 'Tharsos SRL',
  publisher: 'Tharsos SRL',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'AppRapid.ro - Transformă-ți afacerea în aplicație',
    description: 'Aplicații web moderne care arată și funcționează ca cele din App Store — dar fără costurile și complicațiile lor.',
    url: 'https://apprapid.ro',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppRapid.ro - Transformă-ți afacerea în aplicație',
    description: 'Aplicații web moderne care arată și funcționează ca cele din App Store — dar fără costurile și complicațiile lor.',
    creator: '@apprapidro',
  },
  metadataBase: new URL('https://apprapid.ro'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  )
}
