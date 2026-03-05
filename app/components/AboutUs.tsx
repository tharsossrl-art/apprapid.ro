'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Cine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              suntem
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Suntem <span className="text-white font-bold">Tharsos SRL</span>, o echipă din Timișoara care construiește soluții digitale complete pentru afaceri.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Aplicații web, aplicații mobile iOS & Android și angajați AI care lucrează non-stop. Tot ce are nevoie afacerea ta ca să fie prezentă, eficientă și competitivă în 2026.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Folosim cele mai noi tehnologii, livrăm rapid și oferim prețuri fixe — fără surprize.
              </p>
            </div>

            {/* Trust cards */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Timișoara, România</div>
                  <div className="text-sm text-slate-400">Companie înregistrată. CUI real. Factură fiscală.</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Livrare rapidă</div>
                  <div className="text-sm text-slate-400">Aplicații web gata în 5-7 zile. Proiecte mobile în 30-60 zile.</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">3 servicii, o echipă</div>
                  <div className="text-sm text-slate-400">Aplicații web, mobile și AI — totul sub un singur acoperiș.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
