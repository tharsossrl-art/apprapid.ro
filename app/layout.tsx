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
  title: 'AppRapid.ro - Aplicații web moderne de la 1.499 RON | Gata în 7 zile',
  description: 'Transformă-ți afacerea în aplicație web modernă. Instalabilă pe telefon, funcționează offline, gata în 5-7 zile sau e gratis. De la 1.499 RON. Timișoara, România.',
  keywords: ['aplicații web', 'web app', 'dezvoltare aplicații', 'Timișoara', 'România', 'afaceri locale', 'PWA', 'site afacere', 'aplicatie mobila', 'dezvoltare web'],
  authors: [{ name: 'AppRapid.ro', url: 'https://apprapid.ro' }],
  creator: 'Tharsos SRL',
  publisher: 'Tharsos SRL',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'AppRapid.ro - Aplicații web moderne de la 1.499 RON | Gata în 7 zile',
    description: 'Transformă-ți afacerea în aplicație web modernă. Instalabilă pe telefon, funcționează offline. De la 1.499 RON, gata în 5-7 zile sau e gratis.',
    url: 'https://apprapid.ro',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppRapid.ro - Aplicații web moderne de la 1.499 RON',
    description: 'Transformă-ți afacerea în aplicație web modernă. Gata în 5-7 zile sau e gratis. Timișoara, România.',
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
      <body className="antialiased font-body">
        {/* Instant loading screen - CSS only, no JS needed */}
        <div id="__next-loading">
          <div className="logo">
            <span className="app">App</span>
            <span className="rapid">Rapid</span>
            <span className="ro">.ro</span>
          </div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        {/* Hide loading screen when React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  var loader = document.getElementById('__next-loading');
                  if (loader) {
                    loader.classList.add('loaded');
                    setTimeout(function() { loader.remove(); }, 300);
                  }
                });
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
