'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type BadgeType = 'PWA' | 'Mobile' | 'AI'

interface Project {
  name: string
  industry: string
  description: string
  badge: BadgeType
  device: 'phone' | 'laptop'
}

const badgeStyles: Record<BadgeType, string> = {
  PWA: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Mobile: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  AI: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
}

const projects: Project[] = [
  {
    name: 'Real District Estate',
    industry: 'Imobiliare',
    description: 'CRM complet cu agenți AI pentru monitorizare echipă',
    badge: 'AI',
    device: 'laptop',
  },
  {
    name: 'Salon Premium',
    industry: 'Beauty',
    description: 'Sistem programări online, reminder-e automate',
    badge: 'PWA',
    device: 'phone',
  },
  {
    name: 'Restaurant App',
    industry: 'HoReCa',
    description: 'Meniu digital, comenzi, livrare',
    badge: 'PWA',
    device: 'phone',
  },
  {
    name: 'Clinică Dentară',
    industry: 'Medical',
    description: 'Programări, fișe pacienți, notificări',
    badge: 'Mobile',
    device: 'phone',
  },
  {
    name: 'Auto Service Pro',
    industry: 'Auto',
    description: 'Gestiune programări, piese, facturare',
    badge: 'PWA',
    device: 'laptop',
  },
  {
    name: 'E-commerce Store',
    industry: 'Retail',
    description: 'Magazin online complet cu administrare',
    badge: 'PWA',
    device: 'laptop',
  },
]

function PhoneMockup() {
  return (
    <div className="mx-auto w-[140px] h-[260px] relative">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[24px] border-[3px] border-slate-600 bg-slate-950 shadow-lg">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-950 rounded-full border border-slate-700 z-10" />
        {/* Screen area */}
        <div className="absolute top-8 left-[6px] right-[6px] bottom-[10px] rounded-[14px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          {/* Replace this div with <Image /> when screenshots are ready */}
          <span className="text-slate-600 text-xs font-medium tracking-wide">Screenshot</span>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-600 rounded-full" />
      </div>
    </div>
  )
}

function LaptopMockup() {
  return (
    <div className="mx-auto w-[220px] h-[160px] relative">
      {/* Laptop lid */}
      <div className="absolute top-0 left-4 right-4 h-[120px] rounded-t-lg border-[3px] border-slate-600 border-b-0 bg-slate-950">
        {/* Camera */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700" />
        {/* Screen area */}
        <div className="absolute top-4 left-[6px] right-[6px] bottom-[2px] rounded-sm overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          {/* Replace this div with <Image /> when screenshots are ready */}
          <span className="text-slate-600 text-xs font-medium tracking-wide">Screenshot</span>
        </div>
      </div>
      {/* Laptop base */}
      <div className="absolute bottom-[14px] left-0 right-0 h-[3px] bg-slate-600 rounded-b-sm" />
      <div className="absolute bottom-[10px] left-2 right-2 h-[4px] bg-slate-700 rounded-b-lg" />
      {/* Hinge */}
      <div className="absolute bottom-[17px] left-4 right-4 h-[2px] bg-slate-600" />
    </div>
  )
}

export default function PortfolioShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="proiecte-livrate" ref={sectionRef} className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Proiecte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Livrate
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Fiecare proiect este construit custom, de la zero, pe nevoile clientului.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden group hover:scale-[1.02] hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Device mockup area */}
              <div className="pt-8 pb-4 px-4 flex items-center justify-center bg-slate-950/50">
                {project.device === 'phone' ? <PhoneMockup /> : <LaptopMockup />}
              </div>

              {/* Info */}
              <div className="p-5 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium text-lg">{project.name}</h3>
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border ${badgeStyles[project.badge]}`}
                  >
                    {project.badge}
                  </span>
                </div>
                <span className="inline-block text-xs text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-md mb-2">
                  {project.industry}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-slate-500 text-sm mb-4">Vrei să fii următorul?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 rounded-lg text-sm font-medium tracking-wider text-white shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
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
