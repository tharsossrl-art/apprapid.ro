'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LAUNCH_DATE } from '../data/constants'

export default function LaunchBanner() {
  const [visible, setVisible] = useState(true)
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null)

  useEffect(() => {
    const now = new Date()
    const diff = LAUNCH_DATE.getTime() - now.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    setDaysRemaining(days)
  }, [])

  // Hide after launch date or if dismissed
  if (daysRemaining !== null && daysRemaining <= 0) return null
  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-50 w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 overflow-hidden"
        >
          <div className="flex items-center justify-center px-10 py-2 min-h-[40px] text-center">
            <p className="text-white text-xs sm:text-sm font-medium tracking-wide leading-snug">
              <span className="mr-1">🚀</span>
              Lansare {LAUNCH_DATE.getDate()} {LAUNCH_DATE.toLocaleString('ro-RO', { month: 'long' })} — Primii 10 clienți primesc{' '}
              <span className="font-bold">20% reducere</span>
              {daysRemaining !== null && (
                <span className="ml-2 inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  Rămân {daysRemaining} {daysRemaining === 1 ? 'zi' : 'zile'}
                </span>
              )}
            </p>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
              aria-label="Închide banner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
