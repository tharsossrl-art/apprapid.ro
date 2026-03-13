'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WHATSAPP_URL } from '../data/constants'

const serviceIcons: Record<string, React.ReactNode> = {
  web: (
    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  mobile: (
    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
}

const services = [
  { href: '/aplicatii', label: 'Aplicații Web', sub: 'De la 2.999 RON', iconKey: 'web' },
  { href: '/mobile', label: 'Aplicații Mobile', sub: 'De la 7.999 RON', iconKey: 'mobile' },
  { href: '/ai', label: 'AI Employee', sub: 'De la 2.499 RON', iconKey: 'ai' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isServicePage = services.some(s => pathname.startsWith(s.href))

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${ scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/30 shadow-lg shadow-black/20' : 'bg-slate-950' }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative w-11 h-11"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl rotate-6 opacity-80 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-slate-950 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-7 h-7">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <rect x="10" y="2" width="20" height="36" rx="4" fill="none" stroke="url(#logoGrad)" strokeWidth="2"/>
                <rect x="16" y="4" width="8" height="2.5" rx="1.25" fill="url(#logoGrad)"/>
                <path d="M14 18 L18 24 L26 14" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </motion.div>
          <div>
            <span className="text-xl font-heading font-semibold tracking-wide text-white">
              App<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rapid</span>
            </span>
            <div className="text-[10px] text-slate-500 -mt-1 tracking-wider">.ro</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`relative px-4 py-2 transition-premium font-medium tracking-wide group ${ pathname === '/' ? 'text-white' : 'text-slate-300 hover:text-white' }`}
          >
            Acasă
            {pathname === '/' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400" />
            )}
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`relative px-4 py-2 transition-premium font-medium tracking-wide group flex items-center gap-1 ${ isServicePage ? 'text-white' : 'text-slate-300 hover:text-white' }`}
            >
              Servicii
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {isServicePage && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400" />
              )}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden shadow-token-xl"
                >
                  <div className="p-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-premium ${ pathname.startsWith(service.href) ? 'bg-slate-800/80 text-white' : 'hover:bg-slate-800/50 text-slate-300 hover:text-white' }`}
                      >
                        {serviceIcons[service.iconKey]}
                        <div>
                          <p className="font-medium text-sm">{service.label}</p>
                          <p className="text-xs text-slate-500">{service.sub}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#contact"
            className="relative px-4 py-2 text-slate-300 hover:text-white transition-premium font-medium tracking-wide"
          >
            Contact
          </Link>

          <motion.a
            href={`${WHATSAPP_URL}?text=Bun%C4%83!%20M%C4%83%20intereseaz%C4%83%20serviciile%20AppRapid.`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 relative overflow-hidden bg-gradient-to-r from-blue-500 to-emerald-500 px-7 py-3 rounded-lg text-sm font-medium tracking-wider shadow-cta-glow-blue hover:shadow-[0_4px_16px_rgba(96,165,250,0.3)] transition-premium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contactează-ne</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden shadow-token-xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-300 font-medium tracking-wide hover:bg-slate-800/50 rounded-xl transition-premium"
              >
                Acasă
              </Link>

              {/* Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-slate-300 font-medium tracking-wide hover:bg-slate-800/50 rounded-xl transition-premium"
              >
                Servicii
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2.5 px-4 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-premium"
                        >
                          {serviceIcons[service.iconKey]}
                          <div>
                            <p className="text-sm font-medium">{service.label}</p>
                            <p className="text-xs text-slate-500">{service.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-300 font-medium tracking-wide hover:bg-slate-800/50 rounded-xl transition-premium"
              >
                Contact
              </Link>

              <motion.a
                href={`${WHATSAPP_URL}?text=Bun%C4%83!%20M%C4%83%20intereseaz%C4%83%20serviciile%20AppRapid.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-4 rounded-lg font-medium tracking-wider text-center transition-premium shadow-cta-glow-blue hover:shadow-[0_4px_16px_rgba(96,165,250,0.3)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Contactează-ne pe WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
