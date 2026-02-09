'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    name: 'MegaSun', type: 'Tanning / Beauty', status: 'În dezvoltare', color: 'from-amber-500 to-orange-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round"/></svg>
  },
  {
    name: 'Derma Graphics', type: 'Tattoo / Graphics', status: 'În dezvoltare', color: 'from-purple-500 to-pink-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    name: 'Icon Shop', type: 'Retail', status: 'În dezvoltare', color: 'from-blue-500 to-indigo-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    name: 'GymOne2', type: 'Personal Trainer', status: 'În dezvoltare', color: 'from-red-500 to-rose-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h1m1-4h1m0 0V6m0 2h3m0 0V6m0 2h1m6 2h1m1-4h1m0 0V6m0 2h-3m0 0V6m0 2h-1m-4 0h4m-4 0v8m4-8v8m-4 0H8m4 0h1m-5 0V12m0 0H7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    name: 'Sound Bath Studio', type: 'Wellness', status: 'În dezvoltare', color: 'from-teal-500 to-cyan-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    name: 'Cabinet Psihologie', type: 'Terapie', status: 'În dezvoltare', color: 'from-emerald-500 to-green-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    name: 'Studio Masaj', type: 'Wellness / Masaj', status: 'În dezvoltare', color: 'from-indigo-500 to-violet-600',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="portofoliu" ref={sectionRef} className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Proiecte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              în lucru
            </span>
          </h2>
          <p className="text-slate-400 text-lg">7 branduri locale din Timișoara — aplicații livrate în curând</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`h-24 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white mb-1">{project.name}</h3>
                <p className="text-slate-500 text-xs mb-3">{project.type}</p>
                <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                  </span>
                  {project.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-500 text-sm mb-4">Vrei să fii următorul?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Discută cu noi
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
