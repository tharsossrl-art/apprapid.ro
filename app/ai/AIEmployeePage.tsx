'use client'

import Navigation from '../components/Navigation'
import AIEmployee from '../components/AIEmployee'
import FAQ from '../components/FAQ'
import LeadFormButton from '../components/LeadFormButton'
import Footer from '../components/Footer'
// import FloatingWhatsApp from '../components/FloatingWhatsApp'
import ChatBot from '../components/ChatBot'
import { faqAI } from '../data/faq'

export default function AIEmployeePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-2">
        <AIEmployee />
      </div>

      <FAQ items={faqAI} />

      {/* CTA — Cere ofertă */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl mb-4">Vrei o ofertă personalizată?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Completează formularul și primești o propunere detaliată în maxim 24 de ore.</p>
          <LeadFormButton product="ai" />
        </div>
      </section>

      <Footer />
      <ChatBot />
      {/* <FloatingWhatsApp /> */}
    </div>
  )
}
