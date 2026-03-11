import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
}

export const metadata: Metadata = {
  title: 'AppRapid.ro — Lansare în curând',
  description: 'Aplicații web, mobile și AI pentru afaceri din România. Lansare 23 martie 2026.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
