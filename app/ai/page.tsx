import type { Metadata } from 'next'
import AIEmployeePage from './AIEmployeePage'

export const metadata: Metadata = {
  title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
  description: 'De la 1.499 RON plată unică per angajat AI. Un AI Employee care auditează date, trimite rapoarte, aplică reguli și urmărește deadline-uri — non-stop, 365 zile/an.',
  openGraph: {
    title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
    description: 'De la 1.499 RON plată unică per angajat AI. Un AI Employee care auditează date, trimite rapoarte, aplică reguli și urmărește deadline-uri — non-stop, 365 zile/an.',
    url: 'https://apprapid.ro/ai',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <AIEmployeePage />
}
