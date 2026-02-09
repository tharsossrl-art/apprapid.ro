'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapidă",
    desc: "Se încarcă instant, chiar și cu net slab",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Instalabilă",
    desc: "Apare pe ecran ca o aplicație din App Store",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: "Offline",
    desc: "Meniu, prețuri, program — disponibile oricând",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Push",
    desc: "Trimite oferte direct pe telefonul clienților",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Preț fix",
    desc: "Știi exact cât plătești, fără costuri ascunse",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: "24/7",
    desc: "Clienții rezervă sau comandă oricând vor",
    gradient: "from-indigo-500 to-blue-500"
  }
]

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

      <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 h-full">
        {/* Icon with gradient background */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} p-[1px] mb-4`}>
          <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            <div className={`text-transparent bg-clip-text bg-gradient-to-br ${benefit.gradient}`} style={{ WebkitTextStroke: '0' }}>
              <div className="text-white group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
            </div>
          </div>
        </div>

        {/* Title with gradient on hover */}
        <h3 className="font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative z-10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            De ce să alegi o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              aplicație web?
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Toate avantajele unei aplicații mobile, fără dezavantajele ei.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
