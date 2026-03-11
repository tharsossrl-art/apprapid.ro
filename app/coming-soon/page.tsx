'use client'

import { useEffect, useState } from 'react'

const LAUNCH_DATE = new Date('2026-03-23T00:00:00+02:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = LAUNCH_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(getTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute -bottom-40 right-1/3 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2.4s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto w-full">

        {/* Logo */}
        <div
          className="mb-10 text-4xl sm:text-5xl font-semibold tracking-tight transition-opacity duration-300"
          style={{ fontFamily: 'var(--font-heading), system-ui, sans-serif' }}
        >
          <span className="text-blue-400">App</span>
          <span className="text-white">Rapid</span>
          <span className="text-emerald-400">.ro</span>
        </div>

        {/* Tagline */}
        <p
          className="text-2xl sm:text-3xl font-semibold tracking-wide text-white/90 mb-3 transition-all duration-300"
          style={{ fontFamily: 'var(--font-heading), system-ui, sans-serif', letterSpacing: '0.04em' }}
        >
          Ceva nou se pregătește.
        </p>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg font-light text-slate-400 mb-14 max-w-lg leading-relaxed transition-all duration-300"
          style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
        >
          Lansare în curând — aplicații web, mobile și AI pentru afaceri din România
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6 w-full max-w-xl">
          {(
            [
              { label: 'Zile', value: timeLeft?.days },
              { label: 'Ore', value: timeLeft?.hours },
              { label: 'Minute', value: timeLeft?.minutes },
              { label: 'Secunde', value: timeLeft?.seconds },
            ] as const
          ).map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center bg-slate-900/70 border border-slate-800/60 rounded-2xl py-5 px-2 sm:py-7 sm:px-4 transition-all duration-300 backdrop-blur-sm"
            >
              <span
                className="text-3xl sm:text-5xl font-semibold tabular-nums tracking-tight text-white leading-none mb-1 transition-all duration-300"
                style={{ fontFamily: 'var(--font-heading), system-ui, sans-serif' }}
              >
                {mounted && value !== undefined ? pad(value) : '--'}
              </span>
              <span
                className="text-xs sm:text-sm font-light text-slate-500 tracking-widest uppercase mt-2 transition-all duration-300"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-16 h-px bg-gradient-to-r from-blue-500/40 via-emerald-500/40 to-violet-500/40 mt-14 mb-8 rounded-full" />

        {/* Footer note */}
        <p
          className="text-sm font-light text-slate-600 tracking-wide"
          style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
        >
          23 martie 2026 · Timișoara, România
        </p>
      </div>
    </div>
  )
}
