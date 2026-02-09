'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplashHero from './components/SplashHero'
import AnimatedBackground from './components/AnimatedBackground'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import QuizAI from './components/QuizAI'
import Packages from './components/Packages'
import TemplatesShowcase from './components/TemplatesShowcase'
import ExtraServices from './components/ExtraServices'
import Hosting from './components/Hosting'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import ComparisonTable from './components/ComparisonTable'
import AboutUs from './components/AboutUs'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/ScrollToTop'
import ScrollAnimations from './components/ScrollAnimations'
import ThemeToggle from './components/ThemeToggle'
import SchemaMarkup from './components/SchemaMarkup'

export default function Home() {
  const [showSite, setShowSite] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <SchemaMarkup />

      <AnimatePresence mode="wait">
        {!showSite ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50"
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <SplashHero onEnter={() => setShowSite(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <AnimatedBackground />
            <Navigation />
            <ThemeToggle />
            <Hero />
            <Benefits />

            <section id="quiz" className="relative z-10 px-6 py-24 bg-slate-900/50">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Nu știi ce pachet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ți se potrivește?</span>
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl mx-auto">
                    Răspunde la 6 întrebări simple și îți recomandăm pachetul perfect pentru afacerea ta.
                  </p>
                </div>
                <QuizAI />
              </div>
            </section>

            <Packages />
            <TemplatesShowcase />
            <ExtraServices />
            <Hosting />
            <Portfolio />
            <Testimonials />
            <ComparisonTable />
            <AboutUs />
            <Process />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
            <CookieConsent />
            <ScrollAnimations />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
