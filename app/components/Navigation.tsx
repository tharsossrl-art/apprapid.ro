'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#quiz', label: 'Quiz AI' },
    { href: '#pachete', label: 'Pachete' },
    { href: '#cum-functioneaza', label: 'Cum funcționează' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/30 shadow-lg shadow-black/20'
          : 'bg-slate-950'
      }`}
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
            <span className="text-xl font-black tracking-tight text-white">
              App<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rapid</span>
            </span>
            <div className="text-[10px] text-slate-500 -mt-1 tracking-wider">.ro</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4/5 transition-all duration-300" />
            </motion.a>
          ))}

          <Link
            href="/politica-confidentialitate"
            className="relative px-4 py-2 text-slate-400 hover:text-slate-300 transition-colors font-medium text-sm"
          >
            Legal
          </Link>

          <motion.a
            href="#quiz"
            className="ml-4 relative overflow-hidden bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-2.5 rounded-full font-bold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Începe acum</span>
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
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-slate-300 font-medium hover:bg-slate-800/50 rounded-xl transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <Link
                href="/politica-confidentialitate"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-400 font-medium hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                Legal
              </Link>

              <motion.a
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-4 rounded-xl font-bold text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Începe acum
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
