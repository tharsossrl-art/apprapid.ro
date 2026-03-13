'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckIcon, WhatsAppIcon } from './icons'
import { WHATSAPP_NUMBER } from '../data/constants'

/* ─────────────────────────────────────────────
   3-PACKAGE STRUCTURE
   ───────────────────────────────────────────── */
const plans = [
  {
    name: "STARTER",
    price: "2.999",
    currency: "RON",
    tagline: "Aplicația ta web completă",
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
    popular: false,
    target: "Cafenele, Frizerii, Saloane, Freelanceri",
    features: [
      "PWA responsive — funcționează ca aplicație",
      "Admin dashboard inclus",
      "CMS — editezi tot singur",
      "SEO optimizare completă",
      "Google Analytics integrat",
      "Formular contact + WhatsApp",
      "Galerie foto profesională",
      "Google Maps + Google My Business",
      "Certificat SSL inclus",
      "Viteză garantată 90+ PageSpeed",
      "1 revizie design inclusă",
      "Prima lună hosting GRATIS",
    ],
    delivery: "5-7 zile",
    support: "30 zile suport tehnic",
  },
  {
    name: "BUSINESS",
    price: "6.999",
    currency: "RON",
    tagline: "Tot ce-ți trebuie să vinzi și să crești",
    color: "from-blue-500 to-indigo-600",
    accent: "blue",
    popular: true,
    target: "Restaurante, Clinici, Săli fitness, Retail",
    features: [
      "Tot ce include STARTER +",
      "E-commerce sau sistem de booking",
      "Plăți online integrate (card, Apple Pay)",
      "Integrări WhatsApp, email, SMS",
      "Admin dashboard avansat cu rapoarte",
      "Conturi clienți cu login",
      "Notificări push personalizate",
      "Program de fidelitate",
      "Meniu digital QR inclus",
      "3 revizii design incluse",
      "Prima lună hosting GRATIS",
    ],
    delivery: "10-14 zile",
    support: "3 luni suport prioritar",
  },
  {
    name: "ENTERPRISE",
    price: "14.999+",
    currency: "RON",
    tagline: "Aplicație web custom, fără limite",
    color: "from-violet-500 to-purple-600",
    accent: "purple",
    popular: false,
    target: "Francize, Clinici private, Startup-uri, SaaS",
    features: [
      "Tot ce include BUSINESS +",
      "Aplicație web custom de la zero",
      "API integrations complexe",
      "Multi-locație cu management centralizat",
      "Dashboard complet cu roluri utilizator",
      "Automatizări workflow",
      "Raportare avansată & export date",
      "Scalabilitate enterprise",
      "Revizii nelimitate",
      "Suport dedicat 12 luni",
      "Prima lună hosting GRATIS",
    ],
    delivery: "21-30 zile",
    support: "12 luni suport dedicat",
  },
]

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
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-400', glow: 'shadow-blue-500/25' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500', glow: 'shadow-purple-500/25' },
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
      {/* Card */}
      <div className={`relative bg-slate-900 border rounded-xl p-7 h-full transition-premium ${ plan.popular ? 'border-blue-400/40 shadow-token-lg' : 'border-slate-700 hover:border-slate-600 shadow-token-md hover:shadow-token-lg' }`}>
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
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
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
          className={`inline-block bg-gradient-to-r ${plan.color} px-4 py-1.5 rounded-lg text-sm font-medium mb-6`}
          whileHover={{ scale: 1.05 }}
        >
          {plan.name}
        </motion.div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl md:text-5xl font-heading font-semibold">
              {plan.price}
            </span>
            <span className="text-slate-400 text-lg">RON</span>
          </div>
          <div className="text-slate-500 text-sm">plată unică</div>

          {/* Hosting gratis badge */}
          <motion.div
            className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mt-3"
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
                <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accent.text}`} />
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
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        )}

        {/* Delivery info */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 py-3 border-t border-b border-slate-700">
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
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bună! Mă interesează pachetul ${plan.name} (${plan.price} RON). Putem discuta?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block w-full py-3 px-7 rounded-lg text-sm font-medium tracking-wider text-center overflow-hidden transition-premium ${
            plan.popular
              ? `bg-gradient-to-r ${plan.color} shadow-cta-glow-blue hover:shadow-token-lg`
              : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Alege {plan.name}
            <WhatsAppIcon className="w-5 h-5" />
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
          <h2 className="text-4xl md:text-5xl mb-4">
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
