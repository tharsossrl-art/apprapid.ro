'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const PARTICLE_COUNT = 50

function Particle({ index }: { index: number }) {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const size = Math.random() * 3 + 1
  const duration = Math.random() * 20 + 15
  const delay = Math.random() * -20

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(96,165,250,0.8), rgba(52,211,153,0.4))`,
      }}
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 20, -20, 10, 0],
        opacity: [0, 0.8, 0.4, 0.8, 0],
        scale: [0.5, 1.2, 0.8, 1.1, 0.5],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function HexGrid() {
  const hexagons = Array.from({ length: 24 }, (_, i) => {
    const row = Math.floor(i / 6)
    const col = i % 6
    const x = col * 120 + (row % 2 ? 60 : 0)
    const y = row * 104
    return { x, y, i }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 720 416">
      {hexagons.map(({ x, y, i }) => (
        <motion.polygon
          key={i}
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          transform={`translate(${x},${y})`}
          fill="none"
          stroke="url(#hexGrad)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.3, 0.8, 0.3], scale: 1 }}
          transition={{
            opacity: { duration: 3, delay: i * 0.15, repeat: Infinity },
            scale: { duration: 0.8, delay: i * 0.08 },
          }}
        />
      ))}
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
      } else clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-blue-400">|</motion.span>
      )}
    </span>
  )
}

function InteractiveOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove}>
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ left: `${mousePos.x * 100 - 25}%`, top: `${mousePos.y * 100 - 25}%` }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ right: `${mousePos.x * 30}%`, bottom: `${mousePos.y * 30}%` }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
      />
    </div>
  )
}

/* ───── iPhone Mockup with rotating screens ───── */
const SCREENS = [
  // Restaurant app
  <div key="rest" className="w-full h-full bg-gradient-to-b from-orange-950 to-slate-950 p-3 flex flex-col">
    <div className="text-[12px] text-orange-400 font-bold mb-1">🍕 La Bella Pizza</div>
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
    <div className="text-[12px] text-emerald-400 font-bold mb-1">💪 FitPro</div>
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
    <div className="text-[12px] text-pink-400 font-bold mb-1">✨ GlowUp Studio</div>
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
    <div className="text-[12px] text-blue-400 font-bold mb-1">🛍 TrendShop</div>
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

function IPhoneMockup({ onEnter }: { onEnter?: () => void }) {
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setScreen(s => (s + 1) % SCREENS.length), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative cursor-pointer group"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
      onClick={() => onEnter?.()}
      whileHover={{ scale: 1.03 }}
    >
      {/* Glow behind phone */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[60px] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* iPhone frame */}
      <div className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px] bg-slate-800 rounded-[30px] md:rounded-[40px] border-[3px] border-slate-600 shadow-2xl overflow-hidden">
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

      {/* Tap hint */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[12px] text-slate-500 whitespace-nowrap"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Apasă pentru a continua
      </motion.div>
    </motion.div>
  )
}

function SwipeIndicator({ onEnter }: { onEnter?: () => void }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 cursor-pointer md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 0.8 }}
      onClick={() => onEnter?.()}
    >
      <motion.span
        className="text-slate-400 text-xs font-medium tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Swipe
      </motion.span>
      <motion.div
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function SplashHero({ onEnter }: { onEnter?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <InteractiveOrbs />
      <HexGrid />

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }}
      />

      {/* Content — two column on desktop, stacked on mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        {/* Left: Text */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-black mb-4 leading-[0.9] flex items-center gap-3 md:gap-5 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.span
              className="relative inline-block w-14 h-14 md:w-[72px] md:h-[72px] flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1.2, bounce: 0.3, delay: 0.6 }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl rotate-6 opacity-80" />
              <span className="absolute inset-0 bg-slate-950 rounded-2xl flex items-center justify-center drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]">
                <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
                  <defs>
                    <linearGradient id="splashLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="2" width="20" height="36" rx="4" fill="none" stroke="url(#splashLogoGrad)" strokeWidth="2"/>
                  <rect x="16" y="4" width="8" height="2.5" rx="1.25" fill="url(#splashLogoGrad)"/>
                  <path d="M14 18 L18 24 L26 14" stroke="url(#splashLogoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
            </motion.span>
            <span>
              <span className="text-white">App</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Rapid</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-3xl md:text-5xl">.ro</span>
            </span>
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl text-slate-300 mb-3 h-8 font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <TypeWriter text="Transformăm afaceri în aplicații web." delay={2200} />
          </motion.div>

          <motion.p
            className="text-slate-500 text-sm md:text-base mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Gata în 7 zile. Sau e gratis.
          </motion.p>

          {/* Stats row — properly centered */}
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            {[
              { value: '7', label: 'Zile livrare' },
              { value: '100%', label: 'Satisfacție' },
              { value: '1.499', label: 'RON de la' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl px-4 py-3 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-[12px] md:text-xs mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button — desktop only (mobile taps phone) */}
          <motion.button
            className="hidden md:inline-flex mt-8 relative group overflow-hidden px-10 py-4 rounded-2xl font-bold text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEnter?.()}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500" />
            <div className="absolute inset-[1px] bg-slate-950 rounded-2xl group-hover:bg-slate-950/80 transition-all duration-300" />
            <span className="relative flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:from-white group-hover:to-white transition-all duration-300">
              Vezi ce putem face
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-blue-400 group-hover:text-white"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Right: iPhone mockup */}
        <div className="flex-shrink-0">
          <IPhoneMockup onEnter={onEnter} />
        </div>
      </div>

      <SwipeIndicator onEnter={onEnter} />
    </section>
  )
}
