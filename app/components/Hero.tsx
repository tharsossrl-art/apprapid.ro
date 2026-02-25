'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/* ── iPhone Mockup with rotating screens ── */
const SCREENS = [
  // Restaurant app
  <div key="rest" className="w-full h-full bg-gradient-to-b from-orange-950 to-slate-950 p-3 flex flex-col">
    <div className="text-[12px] text-orange-400 font-bold mb-1">La Bella Pizza</div>
    <div className="flex-1 space-y-1.5">
      {['Margherita', 'Quattro Formaggi', 'Diavola'].map(p => (
        <div key={p} className="bg-slate-800/60 rounded-lg p-1.5 flex justify-between items-center">
          <span className="text-[9px] text-white">{p}</span>
          <span className="text-[12px] text-orange-400 font-bold">32 lei</span>
        </div>
      ))}
    </div>
    <div className="bg-orange-500 rounded-lg py-1 text-center text-[9px] font-bold text-white">Comandă acum</div>
  </div>,
  // Fitness app
  <div key="fit" className="w-full h-full bg-gradient-to-b from-emerald-950 to-slate-950 p-3 flex flex-col">
    <div className="text-[12px] text-emerald-400 font-bold mb-1">FitPro</div>
    <div className="flex-1 space-y-1.5">
      <div className="bg-slate-800/60 rounded-lg p-2 text-center">
        <div className="text-[16px] font-black text-emerald-400">2,450</div>
        <div className="text-[12px] text-slate-400">calorii arse azi</div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-slate-800/60 rounded p-1 text-center">
          <div className="text-[12px] font-bold text-blue-400">12k</div>
          <div className="text-[9px] text-slate-500">pași</div>
        </div>
        <div className="bg-slate-800/60 rounded p-1 text-center">
          <div className="text-[12px] font-bold text-purple-400">45m</div>
          <div className="text-[9px] text-slate-500">antrenament</div>
        </div>
      </div>
    </div>
  </div>,
  // Salon app
  <div key="salon" className="w-full h-full bg-gradient-to-b from-pink-950 to-slate-950 p-3 flex flex-col">
    <div className="text-[12px] text-pink-400 font-bold mb-1">GlowUp Studio</div>
    <div className="flex-1 space-y-1.5">
      {['Tuns & Styling', 'Manichiură Gel', 'Masaj Facial'].map(s => (
        <div key={s} className="bg-slate-800/60 rounded-lg p-1.5">
          <div className="text-[9px] text-white">{s}</div>
          <div className="text-[9px] text-pink-400">Disponibil azi</div>
        </div>
      ))}
    </div>
    <div className="bg-pink-500 rounded-lg py-1 text-center text-[9px] font-bold text-white">Programează-te</div>
  </div>,
  // Shop app
  <div key="shop" className="w-full h-full bg-gradient-to-b from-blue-950 to-slate-950 p-3 flex flex-col">
    <div className="text-[12px] text-blue-400 font-bold mb-1">TrendShop</div>
    <div className="flex-1 space-y-1.5">
      <div className="bg-slate-800/60 rounded-lg p-2 text-center">
        <div className="text-[12px] text-slate-400">Ofertă specială</div>
        <div className="text-[12px] font-black text-yellow-400">-40% WEEKEND</div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {['Sneakers', 'Jachetă', 'Ochelari', 'Ceas'].map(i => (
          <div key={i} className="bg-slate-800/60 rounded p-1.5 text-center">
            <div className="text-[9px] text-white">{i}</div>
            <div className="text-[9px] text-emerald-400">Nou</div>
          </div>
        ))}
      </div>
    </div>
  </div>,
]

function IPhoneMockup() {
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setScreen(s => (s + 1) % SCREENS.length), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Glow behind phone */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[60px] blur-3xl opacity-60" />

      {/* iPhone frame */}
      <div className="relative w-[220px] h-[440px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] bg-slate-800 rounded-[30px] md:rounded-[40px] border-[3px] border-slate-600 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] md:w-[100px] h-[22px] md:h-[28px] bg-slate-900 rounded-b-2xl z-20" />

        {/* Screen content */}
        <div className="absolute inset-[3px] rounded-[27px] md:rounded-[37px] overflow-hidden bg-slate-950">
          <div className="w-full h-full pt-6">
            {SCREENS.map((s, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 pt-7"
                initial={false}
                animate={{
                  opacity: screen === i ? 1 : 0,
                  scale: screen === i ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] md:w-[80px] h-[4px] bg-slate-500 rounded-full z-20" />
      </div>

      {/* Screen dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {SCREENS.map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              backgroundColor: screen === i ? '#60a5fa' : '#334155',
              scale: screen === i ? 1.3 : 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative z-10 px-6 pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left - Content */}
          <motion.div
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-sm font-medium">
                <span className="text-blue-400">Mai mult decât un site.</span>
                <span className="text-slate-500 mx-1.5">|</span>
                <span className="text-emerald-400">Mai simplu decât o aplicație.</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transformă-ți
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-gradient bg-[length:200%_auto]">
                afacerea
              </span>
              <br />
              în aplicație.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nu facem site-uri clasice. Facem aplicații web moderne care arată și funcționează ca cele din App Store — <span className="text-white font-semibold">dar fără costurile și complicațiile lor.</span>
            </motion.p>

            {/* Guarantee Banner */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
                  label: 'Gata în 3-14 zile', sublabel: 'sau e gratis'
                },
                {
                  icon: <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5" strokeLinecap="round"/></svg>,
                  label: 'Instalabilă pe telefon', sublabel: 'ca o aplicație reală'
                },
                {
                  icon: <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                  label: 'Preț fix', sublabel: 'fără surprize'
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 px-5 py-3 rounded-xl">
                  {item.icon}
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.sublabel}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#quiz"
                className="group relative bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 rounded-full font-bold text-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Descoperă pachetul potrivit
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.a>

              <motion.a
                href="#pachete"
                className="bg-slate-800/50 border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Vezi pachetele
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - iPhone Mockup */}
          <div className="flex-shrink-0">
            <IPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
