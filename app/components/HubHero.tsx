'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { WhatsAppIcon } from './icons'
import { WHATSAPP_URL } from '../data/constants'

export default function HubHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="relative z-10 pt-24 md:pt-28">
      {/* Video Frame */}
      <div className="px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-xl overflow-hidden border border-white/10 shadow-token-xl shadow-blue-500/10"
        >
          {/* Gradient border glow */}
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-blue-500/10 via-emerald-500/5 to-violet-500/10 -z-10" />

          {/* Desktop video */}
          <div className="hidden md:block w-full aspect-[21/9] overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile video */}
          <div className="md:hidden w-full aspect-[9/14] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-mobile.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>

      {/* Text Section Below */}
      <div className="px-6 py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
          >
            Tot ce are nevoie{' '}
            <br className="hidden md:block" />
            afacerea ta.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 animate-gradient bg-[length:200%_auto]">
              Digital.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Aplicații web, aplicații mobile și angajați AI — totul de la o echipă din Timișoara.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#servicii"
              className="group relative px-7 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 rounded-lg font-medium text-sm tracking-wider text-white transition-premium overflow-hidden shadow-cta-glow-blue"
            >
              <span className="relative z-10">Descoperă serviciile</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            <a
              href={`${WHATSAPP_URL}?text=Bun%C4%83!%20M%C4%83%20intereseaz%C4%83%20serviciile%20AppRapid.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-lg font-medium text-sm tracking-wider text-white transition-premium flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
              Contactează-ne
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
