import type { Metadata } from 'next'
import MobilePage from './MobilePage'

export const metadata: Metadata = {
  title: 'Aplicații Mobile iOS & Android — De la 7.999 RON | AppRapid.ro',
  description: 'Aplicații mobile native pentru iOS și Android. Publicate în App Store și Google Play. De la 7.999 RON. Timișoara, România.',
  openGraph: {
    title: 'Aplicații Mobile iOS & Android — De la 7.999 RON | AppRapid.ro',
    description: 'Aplicații mobile native pentru iOS și Android. Publicate în App Store și Google Play. De la 7.999 RON.',
    url: 'https://apprapid.ro/mobile',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <MobilePage />
}
