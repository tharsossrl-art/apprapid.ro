'use client'

import { motion } from 'framer-motion'

function HeroVideo() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Glow effect behind video */}
      <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

      {/* Video container - Desktop */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50 hidden md:block">
        {/* eslint-disable-next-line */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full rounded-2xl"
          // @ts-ignore
          webkit-playsinline=""
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-2xl" />
      </div>

      {/* Video container - Mobile */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50 block md:hidden">
        {/* eslint-disable-next-line */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full rounded-2xl"
          // @ts-ignore
          webkit-playsinline=""
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-2xl" />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative z-10 px-6 pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Top - Content */}
          <motion.div
            className="text-center max-w-4xl"
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
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nu facem site-uri clasice. Facem aplicații web moderne care arată și funcționează ca cele din App Store — <span className="text-white font-semibold">dar fără costurile și complicațiile lor.</span>
            </motion.p>

            {/* Guarantee Banner */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
                  label: 'Gata în 5-7 zile', sublabel: 'sau e gratis'
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
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
                {/* Shine effect */}
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

          {/* Bottom - Hero Video (full width) */}
          <div className="w-full flex justify-center">
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  )
}
