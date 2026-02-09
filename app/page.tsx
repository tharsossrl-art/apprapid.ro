'use client'

import { useState, useEffect } from 'react'

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
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
            App<span className="text-blue-500">Rapid</span><span className="text-blue-400">.ro</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-body">
          Ceva nou se construiește.
        </p>
        <p className="text-base md:text-lg text-slate-500 mb-12 font-body max-w-md mx-auto">
          Aplicații web moderne pentru afaceri locale din România. 
          Mai rapid decât crezi.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 md:gap-6 justify-center mb-14">
          {[
            { val: d, label: 'Zile' },
            { val: h, label: 'Ore' },
            { val: m, label: 'Min' },
            { val: s, label: 'Sec' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-heading font-bold text-white tabular-nums">
                  {String(val).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-slate-500 mt-2 uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        {/* Email signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email-ul tău"
              required
              className="flex-1 px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors font-body"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors font-body whitespace-nowrap"
            >
              Anunță-mă
            </button>
          </form>
        ) : (
          <div className="text-blue-400 font-body text-lg">
            ✓ Perfect! Te anunțăm când lansăm.
          </div>
        )}

        {/* Subtle footer */}
        <p className="mt-16 text-sm text-slate-700">
          Tharsos SRL · Timișoara, România
        </p>
      </div>
    </div>
  )
}
