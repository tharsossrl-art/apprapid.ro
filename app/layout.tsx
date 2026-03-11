import type { Metadata, Viewport } from 'next'
import { Hanken_Grotesk, Sora, Inconsolata } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600'],
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
}

export const metadata: Metadata = {
  title: 'AppRapid.ro — Aplicații Web, Mobile & AI | Timișoara',
  description: 'Aplicații web, aplicații mobile iOS & Android și angajați AI pentru afacerea ta. De la 999 RON. Echipă din Timișoara, România.',
  keywords: ['aplicații web', 'aplicații mobile', 'iOS', 'Android', 'AI Employee', 'dezvoltare aplicații', 'Timișoara', 'România', 'PWA', 'web app'],
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
    title: 'AppRapid.ro — Aplicații Web, Mobile & AI | Timișoara',
    description: 'Aplicații web, aplicații mobile iOS & Android și angajați AI pentru afacerea ta. De la 999 RON. Echipă din Timișoara.',
    url: 'https://apprapid.ro',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppRapid.ro — Aplicații Web, Mobile & AI | Timișoara',
    description: 'Aplicații web, mobile și AI pentru afacerea ta. Echipă din Timișoara, România.',
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
    <html lang="ro" className={`${hankenGrotesk.variable} ${sora.variable} ${inconsolata.variable}`}>
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
      <body className="antialiased font-body" suppressHydrationWarning>
        {/* Instant loading screen - hidden via CSS after page loads */}
        <div id="__loading" suppressHydrationWarning>
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
        <script dangerouslySetInnerHTML={{ __html: `
          function _hl(){var e=document.getElementById('__loading');if(e){e.style.transition='opacity .3s';e.style.opacity='0';e.style.pointerEvents='none'}}
          if(document.readyState==='complete'||document.readyState==='interactive'){_hl()}
          else{document.addEventListener('DOMContentLoaded',_hl)}
          setTimeout(_hl,3000);
        `}} />
        {children}
      </body>
    </html>
  )
}
