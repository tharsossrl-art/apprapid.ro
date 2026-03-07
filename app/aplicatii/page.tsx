import type { Metadata } from 'next'
import AplicatiiPage from './AplicatiiPage'

export const metadata: Metadata = {
  title: 'Aplicații Web (PWA) — De la 2.999 RON | AppRapid.ro',
  description: 'Aplicații web moderne, instalabile pe telefon, funcționalitate offline. De la 2.999 RON, gata în 5-30 zile. Timișoara, România.',
  openGraph: {
    title: 'Aplicații Web (PWA) — De la 2.999 RON | AppRapid.ro',
    description: 'Aplicații web moderne, instalabile pe telefon, funcționalitate offline. De la 2.999 RON, gata în 5-30 zile.',
    url: 'https://apprapid.ro/aplicatii',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <AplicatiiPage />
}
