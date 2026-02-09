'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

const PARTICLE_COUNT = 60

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
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
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

function AnimatedLogo() {
  return (
    <motion.div
      className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-8"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
    >
      {/* Outer glow rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid rgba(96,165,250,${0.3 / ring})`,
            transform: `scale(${1 + ring * 0.25})`,
          }}
          animate={{
            scale: [1 + ring * 0.25, 1 + ring * 0.35, 1 + ring * 0.25],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{ duration: 2 + ring * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      
      {/* Main hexagon with bolt */}
      <motion.svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(96,165,250,0.5)]"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.polygon
          points="60,5 110,30 110,90 60,115 10,90 10,30"
          fill="rgba(15,23,42,0.9)"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <motion.path
          d="M55 25 L45 60 L58 58 L50 95 L80 52 L63 54 L72 25 Z"
          fill="url(#logoGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </motion.svg>
    </motion.div>
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
      } else {
        clearInterval(interval)
      }
    }, 45)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-blue-400"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

function InteractiveOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Primary orb - follows mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          left: `${mousePos.x * 100 - 25}%`,
          top: `${mousePos.y * 100 - 25}%`,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      />
      {/* Secondary orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          right: `${mousePos.x * 30}%`,
          bottom: `${mousePos.y * 30}%`,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
      />
    </div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 0.8 }}
      onClick={() => {
        document.getElementById('main-site')?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <motion.span
        className="text-slate-400 text-sm font-medium tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Descoperă
      </motion.span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

function FloatingStats() {
  const stats = [
    { label: 'Zile livrare', value: '7', suffix: '' },
    { label: 'Clienți mulțumiți', value: '100', suffix: '%' },
    { label: 'De la', value: '1.499', suffix: ' RON' },
  ]

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.2, duration: 0.8 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="relative group cursor-default"
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 text-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative">
              <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-slate-400 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function SplashHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100])

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      style={{ opacity, scale, y }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <InteractiveOrbs />
      <HexGrid />
      
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Scan lines effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatedLogo />

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-white">App</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
            Rapid
          </span>
        </motion.h1>

        <motion.div
          className="text-lg md:text-2xl text-slate-300 mb-4 h-8 font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <TypeWriter text="Transformăm afaceri în aplicații web." delay={2200} />
        </motion.div>

        <motion.p
          className="text-slate-500 text-sm md:text-base max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          Gata în 7 zile. Sau e gratis.
        </motion.p>

        <FloatingStats />

        <motion.button
          className="mt-10 relative group overflow-hidden px-10 py-4 rounded-2xl font-bold text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            document.getElementById('main-site')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-[1px] bg-slate-950 rounded-2xl group-hover:bg-slate-950/80 transition-all duration-300" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:from-white group-hover:to-white transition-all duration-300">
            Vezi ce putem face
          </span>
        </motion.button>
      </div>

      <ScrollIndicator />
    </motion.section>
  )
}
