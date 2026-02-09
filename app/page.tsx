'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LAUNCH_DATE = new Date('2026-02-17T09:00:00+02:00')

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

const screens = [
  {
    title: 'Restaurant',
    subtitle: 'Comandă online',
    color: 'from-orange-500 to-red-500',
    icon: '🍕',
    items: ['Meniu digital', 'Comenzi online', 'Rezervări', 'Livrare'],
  },
  {
    title: 'Salon Beauty',
    subtitle: 'Programări instant',
    color: 'from-pink-500 to-purple-500',
    icon: '💅',
    items: ['Programări', 'Galerie foto', 'Prețuri', 'Recenzii'],
  },
  {
    title: 'Fitness',
    subtitle: 'Antrenament personal',
    color: 'from-emerald-500 to-cyan-500',
    icon: '💪',
    items: ['Program săpt.', 'Nutriție', 'Progres', 'Comunitate'],
  },
  {
    title: 'Cabinet Medical',
    subtitle: 'Consultații online',
    color: 'from-blue-500 to-indigo-500',
    icon: '🏥',
    items: ['Programări', 'Istoric medical', 'Rețete', 'Chat doctor'],
  },
]

function PhoneMockup() {
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % screens.length), 3000)
    return () => clearInterval(id)
  }, [])

  const s = screens[screen]

  return (
    <div className="relative mx-auto w-fit">
      {/* Glow behind phone */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-emerald-500/15 to-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Phone frame */}
      <div className="relative w-[220px] h-[440px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] lg:w-[280px] lg:h-[560px] bg-slate-900 rounded-[2.5rem] border-2 border-slate-700/60 shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-slate-950 rounded-b-2xl z-20" />

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-9 sm:h-10 bg-slate-950/80 backdrop-blur-sm z-10 flex items-end justify-between px-5 sm:px-6 pb-1">
          <span className="text-[9px] sm:text-[10px] text-slate-400">21:30</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 sm:w-3.5 h-1.5 sm:h-2 border border-slate-400 rounded-sm relative">
              <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="absolute inset-0 pt-11 sm:pt-12 pb-6 sm:pb-4 px-3 sm:px-4 flex flex-col">
          <motion.div
            key={screen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col"
          >
            {/* Hero card */}
            <div className={`w-full h-24 sm:h-28 md:h-30 lg:h-32 rounded-2xl bg-gradient-to-br ${s.color} flex flex-col items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
              <span className="text-2xl sm:text-3xl md:text-4xl mb-0.5 sm:mb-1">{s.icon}</span>
              <span className="text-white font-heading font-bold text-xs sm:text-sm md:text-base">{s.title}</span>
              <span className="text-white/70 text-[9px] sm:text-[10px] md:text-xs">{s.subtitle}</span>
            </div>

            {/* Feature list */}
            <div className="space-y-2 sm:space-y-2.5 flex-1">
              {s.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-2.5 sm:gap-3 bg-slate-800/60 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5"
                >
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-br ${s.color} opacity-80 flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-[11px] sm:text-xs md:text-sm font-body">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <div className={`w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r ${s.color} mt-2 sm:mt-3`}>
              <p className="text-center text-white text-[10px] sm:text-xs font-semibold font-body">Programează acum →</p>
            </div>
          </motion.div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-slate-600 rounded-full" />
      </div>

      {/* Dots indicator */}
      <div className="flex gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setScreen(i)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              i === screen ? 'bg-emerald-400 w-5 sm:w-6' : 'bg-slate-600 w-1.5 sm:w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function FloatingTag({ text, className, delay }: { text: string; className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute hidden lg:flex items-center gap-2 bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="text-xs text-slate-300 font-body whitespace-nowrap">{text}</span>
    </motion.div>
  )
}

export default function ComingSoon() {
  const { d, h, m, s } = useCountdown(LAUNCH_DATE)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="min-h-screen min-h-[100dvh] bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-5 sm:px-6 py-8 sm:py-12">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-r from-blue-500/15 via-emerald-500/10 to-blue-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-emerald-500/8 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-blue-500/8 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          
          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left order-1">
            {/* Logo */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">App</span>
              <span className="text-white">Rapid</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">.ro</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-1.5 sm:mb-2 font-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Ceva nou se construiește.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base text-slate-500 mb-8 sm:mb-10 font-body max-w-sm sm:max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Aplicații web moderne pentru afaceri locale din România. Mai rapid decât crezi.
            </motion.p>

            {/* Countdown */}
            <motion.div
              className="flex gap-2.5 sm:gap-3 md:gap-5 justify-center lg:justify-start mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { val: d, label: 'Zile' },
                { val: h, label: 'Ore' },
                { val: m, label: 'Min' },
                { val: s, label: 'Sec' },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-900/80 border border-slate-700/50 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg shadow-black/20">
                    <span className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tabular-nums">
                      {String(val).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 mt-1 sm:mt-1.5 uppercase tracking-wider font-body">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Email signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-sm sm:max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email-ul tău"
                    required
                    className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-900/60 border border-slate-700/50 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors font-body"
                  />
                  <button
                    type="submit"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all font-body whitespace-nowrap shadow-lg shadow-blue-500/20"
                  >
                    Anunță-mă
                  </button>
                </form>
              ) : (
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-body text-base sm:text-lg font-semibold">
                  ✓ Perfect! Te anunțăm când lansăm.
                </p>
              )}
            </motion.div>
          </div>

          {/* Right — Phone mockup */}
          <motion.div 
            className="relative flex-shrink-0 order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FloatingTag text="⚡ Gata în 7 zile" className="-top-2 -left-20" delay={1.0} />
            <FloatingTag text="📱 PWA nativ" className="top-1/4 -right-24" delay={1.2} />
            <FloatingTag text="🚀 Rapid & modern" className="bottom-1/4 -left-24" delay={1.4} />
            <FloatingTag text="🇷🇴 Made in RO" className="-bottom-2 -right-20" delay={1.6} />
            <PhoneMockup />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          className="mt-10 sm:mt-16 text-xs sm:text-sm text-slate-700 font-body text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Tharsos SRL · Timișoara, România
        </motion.p>
      </div>
    </div>
  )
}
