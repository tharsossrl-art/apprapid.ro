'use client'

import AnimatedBackground from './components/AnimatedBackground'
import Navigation from './components/Navigation'
import HubHero from './components/HubHero'
import ProductGrid from './components/ProductGrid'
import TrustBar from './components/TrustBar'
import Process from './components/Process'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/ScrollToTop'
import ScrollAnimations from './components/ScrollAnimations'
import SchemaMarkup from './components/SchemaMarkup'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <SchemaMarkup />
      <AnimatedBackground />
      <Navigation />
      <HubHero />
      <ProductGrid />
      <TrustBar />
      <Process />
      <AboutUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <CookieConsent />
      <ScrollAnimations />
    </div>
  )
}
