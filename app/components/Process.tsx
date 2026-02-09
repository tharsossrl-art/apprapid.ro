'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Ne spui ce faci',
    desc: 'O discuție de 15 minute pe WhatsApp. Ne povestești despre afacerea ta, ce funcționalități ai nevoie și ce vrei să obții. Fără jargon tehnic.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Construim',
    desc: 'Design personalizat pe brand-ul tău, funcționalități la fix, testat pe toate dispozitivele. Tu primești preview și feedback în timp real.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    step: '03',
    title: 'Livrăm în 5-7 zile',
    desc: 'Aplicația ta e live. Îți arătăm cum o folosești, cum editezi conținut și cum o promovezi. Plus suport post-livrare inclus.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '04',
    title: 'Crești',
    desc: 'Clienții te găsesc pe Google, rezervă online, comandă și revin. Tu te concentrezi pe afacere, aplicația lucrează pentru tine 24/7.',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Process() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="cum-functioneaza" ref={sectionRef} className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            În{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              4 pași simpli
            </span>
          </h2>
          <p className="text-slate-400 text-lg">De la idee la aplicație funcțională — în maxim 7 zile.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-4`}>
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-slate-700 to-slate-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
