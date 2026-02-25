import type { Metadata } from 'next'
import AIEmployeePage from './AIEmployeePage'

export const metadata: Metadata = {
  title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
  description: 'De la 1.499 RON setup unic + mentenanță lunară. Angajați AI care lucrează 24/7, nu obosesc și costă de 10× mai puțin decât un angajat clasic.',
  openGraph: {
    title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
    description: 'De la 1.499 RON setup unic + mentenanță lunară. Angajați AI care lucrează 24/7, nu obosesc și costă de 10× mai puțin decât un angajat clasic.',
    url: 'https://apprapid.ro/ai',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <AIEmployeePage />
}
