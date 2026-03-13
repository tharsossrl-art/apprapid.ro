'use client'

import { useEffect, useState, useRef } from 'react'
import { LAUNCH_DATE } from '../data/constants'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) return null

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

const LAUNCH_DISPLAY = LAUNCH_DATE.toLocaleDateString('ro-RO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | 'launched'>(null)
  const [mounted, setMounted] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setMounted(true)
    const initial = getTimeLeft()
    setTimeLeft(initial ?? 'launched')

    if (initial) {
      intervalRef.current = setInterval(() => {
        const tl = getTimeLeft()
        if (!tl) {
          setTimeLeft('launched')
          if (intervalRef.current) clearInterval(intervalRef.current)
        } else {
          setTimeLeft(tl)
        }
      }, 1000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const isLaunched = timeLeft === 'launched'

  return (
    <main className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
        <h1 className="mb-10 text-4xl sm:text-5xl font-heading font-semibold tracking-tight">
          <span className="text-blue-400">App</span>
          <span className="text-white">Rapid</span>
          <span className="text-emerald-400">.ro</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl font-heading font-semibold tracking-wide text-white/90 mb-3">
          {isLaunched ? 'Suntem live!' : 'Ceva nou se pregătește.'}
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 mb-14 max-w-lg leading-relaxed">
          {isLaunched
            ? 'Aplicații web, mobile și AI pentru afaceri din România — descoperă acum.'
            : 'Lansare în curând — aplicații web, mobile și AI pentru afaceri din România'}
        </p>

        {isLaunched ? (
          /* Post-launch CTA */
          <a
            href="/"
            className="bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 rounded-lg text-sm font-medium tracking-wider transition-opacity duration-300 hover:opacity-90"
          >
            Intră pe site
          </a>
        ) : (
          /* Countdown */
          <div className="grid grid-cols-4 gap-4 sm:gap-6 w-full max-w-xl" role="timer" aria-live="polite">
            {(
              [
                { label: 'Zile', value: (timeLeft as TimeLeft)?.days },
                { label: 'Ore', value: (timeLeft as TimeLeft)?.hours },
                { label: 'Minute', value: (timeLeft as TimeLeft)?.minutes },
                { label: 'Secunde', value: (timeLeft as TimeLeft)?.seconds },
              ] as const
            ).map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center bg-slate-900/70 border border-slate-800/60 rounded-xl py-5 px-2 sm:py-7 sm:px-4 backdrop-blur-sm"
              >
                <span className="text-3xl sm:text-5xl font-heading font-semibold tabular-nums tracking-tight text-white leading-none mb-1">
                  {mounted && value !== undefined ? pad(value) : '--'}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 tracking-widest uppercase mt-2">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Divider line */}
        <div className="w-16 h-px bg-gradient-to-r from-blue-500/40 via-emerald-500/40 to-violet-500/40 mt-14 mb-8 rounded-full" />

        {/* Footer note */}
        <p className="text-sm text-slate-600 tracking-wide">
          {LAUNCH_DISPLAY} · Timișoara, România
        </p>
      </div>
    </main>
  )
}
