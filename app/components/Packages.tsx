'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────
   3-PACKAGE STRUCTURE (active)
   ───────────────────────────────────────────── */
const plans = [
  {
    name: "STARTER",
    price: "1.499",
    currency: "RON",
    tagline: "Prezența ta digitală completă",
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
    popular: false,
    target: "Cafenele, Frizerii, Florării, Freelanceri, Fotografi",
    features: [
      "Pagină de prezentare completă",
      "Meniu / Catalog / Servicii",
      "Galerie foto profesională (până la 20 poze)",
      "Informații business & program de lucru",
      "Locație Google Maps integrată",
      "Butoane contact (WhatsApp, Tel, Email)",
      "Link-uri social media",
      "Formular simplu de contact",
      "Instalabilă ca aplicație (PWA)",
      "Funcționează offline",
      "Design responsive mobile-first",
      "Optimizare SEO completă",
      "Certificat SSL inclus",
      "Google My Business setup",
      "Viteză garantată 90+ PageSpeed",
      "1 revizuire design inclusă",
      "Prima lună hosting GRATIS 🎁",
    ],
    delivery: "3-5 zile",
    support: "30 zile suport tehnic",
  },
  {
    name: "BUSINESS",
    price: "2.999",
    currency: "RON",
    tagline: "Tot ce-ți trebuie să crești",
    color: "from-blue-500 to-indigo-600",
    accent: "blue",
    popular: true,
    target: "Saloane, Clinici, Personal Trainers, Studiouri",
    features: [
      "Tot ce include STARTER +",
      "Sistem de rezervări cu calendar interactiv",
      "Vizualizare sloturi disponibile în timp real",
      "Confirmări automate pe email + WhatsApp",
      "Remindere automate programări (-40% no-show)",
      "Notificări push personalizate",
      "Formular contact cu auto-reply",
      "Secțiune recenzii clienți cu rating",
      "Panou admin intuitiv (editezi tot singur)",
      "Editare meniu/prețuri/program instant",
      "Integrare feed Instagram & Facebook",
      "Google My Business complet optimizat",
      "Analytics vizitatori + raport lunar",
      "QR Code pentru scanare rapidă",
      "3 revizuiri design incluse",
      "Suport tehnic prioritar 60 zile",
      "Prima lună hosting GRATIS 🎁",
    ],
    delivery: "5-7 zile",
    support: "60 zile suport prioritar",
  },
  {
    name: "COMPLET",
    price: "4.999",
    currency: "RON",
    tagline: "Operațiunea ta digitală completă",
    color: "from-orange-500 to-red-600",
    accent: "orange",
    popular: false,
    target: "Restaurante, Pizzerii, Săli fitness, Florării cu livrare",
    features: [
      "Tot ce include BUSINESS +",
      "Sistem comenzi online complet",
      "Coș de cumpărături & checkout",
      "Plăți online integrate (card, Apple Pay)",
      "Management comenzi live (admin)",
      "Conturi clienți cu login",
      "Istoric comenzi & preferințe salvate",
      "Program de fidelitate (puncte/rewards)",
      "Notificări email + SMS automate",
      "Dashboard admin cu statistici detaliate",
      "Rapoarte vânzări & performanță",
      "Meniu digital cu QR inclus",
      "Suport locații/staff multiplu",
      "Integrare livrare (dacă e cazul)",
      "Revizuiri nelimitate",
      "Suport tehnic prioritar 90 zile",
      "Prima lună hosting GRATIS 🎁",
    ],
    delivery: "7-14 zile",
    support: "90 zile suport prioritar",
  },
]

/* ─────────────────────────────────────────────
   4-PACKAGE ALTERNATIVE (commented out — activate if needed)
   ─────────────────────────────────────────────
const customPlan = {
  name: "CUSTOM",
  price: "9.999+",
  currency: "RON",
  tagline: "Proiecte complexe, soluții enterprise",
  color: "from-purple-500 to-pink-600",
  accent: "purple",
  popular: false,
  target: "Startup-uri, Platforme SaaS, Rețele multi-locație",
  features: [
    "Arhitectură custom de la zero",
    "Integrări API complexe",
    "Baze de date scalabile",
    "Dashboard multi-user cu roluri",
    "Automatizări avansate",
    "Scalabilitate enterprise",
    "DevOps & CI/CD pipeline",
    "SLA garantat 99.9% uptime",
    "Suport dedicat 12 luni",
    "Prima lună hosting GRATIS 🎁",
  ],
  delivery: "30-60 zile",
  support: "12 luni suport dedicat",
}
// To activate: add customPlan to plans array above
─────────────────────────────────────────────── */

function PlanCard({ plan, index, expandedPlan, setExpandedPlan }: {
  plan: typeof plans[0];
  index: number;
  expandedPlan: number | null;
  setExpandedPlan: (i: number | null) => void;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isExpanded = expandedPlan === index
  const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 8)
  const hiddenCount = plan.features.length - 8

  const accentColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500', glow: 'shadow-emerald-500/25' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'shadow-blue-500/25' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500', glow: 'shadow-orange-500/25' },
  }

  const accent = accentColors[plan.accent] ?? accentColors['blue']

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Popular glow effect */}
      {plan.popular && (
        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-[1.75rem] opacity-75 blur-sm animate-pulse" />
      )}

      {/* Card */}
      <div className={`relative bg-slate-900/90 backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-300 ${
        plan.popular
          ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10'
          : 'border-slate-800 hover:border-slate-700'
      }`}>
        {/* Popular badge */}
        {plan.popular && (
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-md opacity-75" />
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Cel mai popular
              </div>
            </div>
          </motion.div>
        )}

        {/* Package name badge */}
        <motion.div
          className={`inline-block bg-gradient-to-r ${plan.color} px-4 py-1.5 rounded-lg text-sm font-bold mb-6`}
          whileHover={{ scale: 1.05 }}
        >
          {plan.name}
        </motion.div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl md:text-5xl font-black">
              {plan.price}
            </span>
            <span className="text-slate-400 text-lg">RON</span>
          </div>
          <div className="text-slate-500 text-sm">plată unică</div>

          {/* Hosting gratis badge */}
          <motion.div
            className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full mt-3"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Prima lună hosting GRATIS
          </motion.div>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 mb-2 font-medium">{plan.tagline}</p>
        <p className="text-slate-600 text-xs mb-6">
          <span className="text-slate-500">Ideal pentru:</span> {plan.target}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-4">
          <AnimatePresence mode="popLayout">
            {visibleFeatures.map((feature, j) => (
              <motion.li
                key={feature}
                className="flex items-start gap-3 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: j * 0.02 }}
              >
                <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accent.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300">{feature}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Expand button */}
        {hiddenCount > 0 && (
          <motion.button
            onClick={() => setExpandedPlan(isExpanded ? null : index)}
            className={`text-sm ${accent.text} hover:opacity-80 mb-6 flex items-center gap-2 font-medium transition-colors`}
            whileHover={{ x: 5 }}
          >
            {isExpanded ? 'Arată mai puțin' : `+ ${hiddenCount} funcționalități`}
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        )}

        {/* Delivery info */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 py-3 border-t border-b border-slate-800">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <strong>Livrare:</strong> {plan.delivery}
          </span>
          <span className="text-slate-700">|</span>
          <span>{plan.support}</span>
        </div>

        {/* CTA Button */}
        <motion.a
          href={`https://wa.me/40756870425?text=${encodeURIComponent(`Bună! Mă interesează pachetul ${plan.name} (${plan.price} RON). Putem discuta?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block w-full py-4 rounded-xl font-bold text-center overflow-hidden transition-all ${
            plan.popular
              ? `bg-gradient-to-r ${plan.color} hover:shadow-xl ${accent.glow}`
              : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Alege {plan.name}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>

          {/* Shine effect */}
          {plan.popular && (
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          )}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Packages() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="pachete" ref={sectionRef} className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Pachete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              transparente
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Prețuri fixe, fără surprize. Prima lună hosting inclusă gratuit.</p>
          <p className="text-slate-500 text-sm mt-2">De 3-4x mai ieftin decât o aplicație nativă. De 2x mai bun decât un site clasic.</p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, i) => (
            <PlanCard
              key={i}
              plan={plan}
              index={i}
              expandedPlan={expandedPlan}
              setExpandedPlan={setExpandedPlan}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
