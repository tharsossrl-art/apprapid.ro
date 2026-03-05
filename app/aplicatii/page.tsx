import type { Metadata } from 'next'
import AplicatiiPage from './AplicatiiPage'

export const metadata: Metadata = {
  title: 'Aplicații Web (PWA) — De la 1.499 RON | AppRapid.ro',
  description: 'Aplicații web moderne, instalabile pe telefon, funcționalitate offline. De la 1.499 RON, gata în 3-14 zile. Timișoara, România.',
  openGraph: {
    title: 'Aplicații Web (PWA) — De la 1.499 RON | AppRapid.ro',
    description: 'Aplicații web moderne, instalabile pe telefon, funcționalitate offline. De la 1.499 RON, gata în 3-14 zile.',
    url: 'https://apprapid.ro/aplicatii',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <AplicatiiPage />
}
