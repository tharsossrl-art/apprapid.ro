'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industries = [
  {
    label: 'Beauty & Tanning',
    icon: <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round"/></svg>,
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    label: 'Fitness & PT',
    icon: <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h1m1-4h1m0 0V6m0 2h3m0 0V6m0 2h1m6 2h1m1-4h1m0 0V6m0 2h-3m0 0V6m0 2h-1m-4 0h4m-4 0v8m4-8v8m-4 0H8m4 0h1m-5 0V12m0 0H7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bg: 'bg-red-500/10 border-red-500/20',
  },
  {
    label: 'Wellness & Spa',
    icon: <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bg: 'bg-teal-500/10 border-teal-500/20',
  },
  {
    label: 'Terapie & Sănătate',
    icon: <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative z-10 px-6 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ce spun{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              clienții
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Primele proiecte sunt în lucru. Testimonialele vin curând.</p>
        </motion.div>

        <motion.div
          className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              În lucru acum
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Construim pentru 7 branduri locale</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Din industrii diferite — beauty, wellness, fitness, retail, terapie. Rezultatele vor vorbi de la sine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                className={`${item.bg} border rounded-xl p-4 text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <div className="text-sm text-slate-300 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
