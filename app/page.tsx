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
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { d, h, m, s }
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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Ambient glow — same as main site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/15 via-emerald-500/10 to-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-blue-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo — matching main site gradient */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">App</span>
            <span className="text-white">Rapid</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">.ro</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-slate-300 mb-3 font-body">
            Ceva nou se construiește.
          </p>
          <p className="text-base md:text-lg text-slate-500 mb-14 font-body max-w-md mx-auto">
            Aplicații web moderne pentru afaceri locale din România.
            Mai rapid decât crezi.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div 
          className="flex gap-4 md:gap-6 justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { val: d, label: 'Zile' },
            { val: h, label: 'Ore' },
            { val: m, label: 'Min' },
            { val: s, label: 'Sec' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg shadow-black/20">
                <span className="text-2xl md:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tabular-nums">
                  {String(val).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-slate-500 mt-2 uppercase tracking-wider font-body">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email-ul tău"
                required
                className="flex-1 px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors font-body"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all font-body whitespace-nowrap shadow-lg shadow-blue-500/20"
              >
                Anunță-mă
              </button>
            </form>
          ) : (
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-body text-lg font-semibold">
              ✓ Perfect! Te anunțăm când lansăm.
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="mt-20 text-sm text-slate-700 font-body"
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
