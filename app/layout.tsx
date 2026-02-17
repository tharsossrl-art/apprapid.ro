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
        {/* Inline critical styles for instant loading screen */}
        <style dangerouslySetInnerHTML={{ __html: `
          #__loading{position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#020617}
          #__loading .l{font-size:2.5rem;font-weight:700;margin-bottom:1.5rem}
          #__loading .a{background:linear-gradient(to right,#60a5fa,#34d399);-webkit-background-clip:text;background-clip:text;color:transparent}
          #__loading .r{color:#fff}
          #__loading .o{background:linear-gradient(to right,#34d399,#60a5fa);-webkit-background-clip:text;background-clip:text;color:transparent}
          #__loading .d{display:flex;gap:6px}
          #__loading .d span{width:8px;height:8px;background:#34d399;border-radius:50%;animation:b .6s ease-in-out infinite}
          #__loading .d span:nth-child(2){animation-delay:.1s}
          #__loading .d span:nth-child(3){animation-delay:.2s}
          @keyframes b{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
          @media(min-width:640px){#__loading .l{font-size:3.5rem}}
        `}} />
      </head>
      <body className="antialiased font-body">
        {/* Instant loading screen - renders before React hydrates */}
        <div id="__loading">
          <div className="l">
            <span className="a">App</span>
            <span className="r">Rapid</span>
            <span className="o">.ro</span>
          </div>
          <div className="d">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Hide loading when page fully loads */}
        <script dangerouslySetInnerHTML={{ __html: `window.onload=function(){var e=document.getElementById('__loading');if(e){e.style.opacity='0';setTimeout(function(){e.remove()},300)}}` }} />
        {children}
      </body>
    </html>
  )
}
