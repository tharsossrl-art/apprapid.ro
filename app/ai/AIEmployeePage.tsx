'use client'

import Navigation from '../components/Navigation'
import AIEmployee from '../components/AIEmployee'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function AIEmployeePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <AIEmployee />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
