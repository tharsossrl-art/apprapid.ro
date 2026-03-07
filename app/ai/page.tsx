import type { Metadata } from 'next'
import AIEmployeePage from './AIEmployeePage'

export const metadata: Metadata = {
  title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
  description: 'Agenți AI autonomi, automatizări de echipă și platforme AI Business OS. De la 1.999 RON per agent — soluții AI complete pentru afaceri.',
  openGraph: {
    title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
    description: 'Agenți AI autonomi, automatizări de echipă și platforme AI Business OS. De la 1.999 RON per agent — soluții AI complete pentru afaceri.',
    url: 'https://apprapid.ro/ai',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Page() {
  return <AIEmployeePage />
}
