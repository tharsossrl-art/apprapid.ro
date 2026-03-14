'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckIcon, WhatsAppIcon } from './icons'
import { WHATSAPP_NUMBER } from '../data/constants'

/* ═══════════════════════════════════════════════════
   Chat mockup — owner giving tasks to AI Employee
   ═══════════════════════════════════════════════════ */
const CONVERSATIONS = [
  {
    biz: 'HoReCa',
    color: 'from-violet-500 to-fuchsia-500',
    botName: 'AI Employee',
    avatar: 'AI',
    messages: [
      { from: 'user', text: 'Care sunt vânzările de săptămâna asta?' },
      { from: 'bot', text: '23 comenzi, 8.450 RON, +15% față de săptămâna trecută. Cel mai vândut: Pachet Pro.' },
      { from: 'user', text: 'Trimite raportul pe WhatsApp la contabila.' },
      { from: 'bot', text: 'Gata. Am trimis raportul complet cu breakdown pe zile la Andreea.' },
    ],
  },
  {
    biz: 'Salon Beauty',
    color: 'from-violet-500 to-fuchsia-500',
    botName: 'AI Employee',
    avatar: 'AI',
    messages: [
      { from: 'user', text: 'Trimite reminder-e la toți clienții cu programări mâine.' },
      { from: 'bot', text: 'Am trimis 12 reminder-e pe WhatsApp. 3 au confirmat deja.' },
      { from: 'user', text: 'Câte no-show-uri am avut luna asta?' },
      { from: 'bot', text: '4 din 89 programări (4.5%). Luna trecută: 11%. Reminder-ele funcționează.' },
    ],
  },
  {
    biz: 'E-commerce',
    color: 'from-violet-500 to-fuchsia-500',
    botName: 'AI Employee',
    avatar: 'AI',
    messages: [
      { from: 'user', text: 'Câte comenzi noi avem de ieri?' },
      { from: 'bot', text: '17 comenzi noi, 4.230 RON. 3 au plata ramburs, restul card. Nicio returnare.' },
      { from: 'user', text: 'Verifică stocul la produsele best-seller.' },
      { from: 'bot', text: '2 produse sub limită: Crema X (4 buc) și Serum Y (7 buc). Trimit alertă la furnizor?' },
    ],
  },
  {
    biz: 'Clinică',
    color: 'from-violet-500 to-fuchsia-500',
    botName: 'AI Employee',
    avatar: 'AI',
    messages: [
      { from: 'user', text: 'Care e gradul de ocupare pe săptămâna asta?' },
      { from: 'bot', text: '78% ocupare. Luni și marți pline. Joi are 4 sloturi libere, vineri 6.' },
      { from: 'user', text: 'Trimite ofertă la clienții inactivi de 3+ luni.' },
      { from: 'bot', text: 'Am identificat 23 clienți inactivi. Trimit mesaj personalizat pe WhatsApp acum.' },
    ],
  },
  {
    biz: 'Auto Service',
    color: 'from-violet-500 to-fuchsia-500',
    botName: 'AI Employee',
    avatar: 'AI',
    messages: [
      { from: 'user', text: 'Ce programări avem mâine?' },
      { from: 'bot', text: '6 programări: 3 ITP, 2 revizie, 1 schimb anvelope. Rampa 2 e liberă după 14:00.' },
      { from: 'user', text: 'Trimite confirmare la toți și verifică piesele.' },
      { from: 'bot', text: 'Confirmări trimise. Piesele pentru revizii sunt pe stoc. Lipsesc filtre pentru ITP #3 — comand?' },
    ],
  },
]

function AIChatMockup() {
  const [convo, setConvo] = useState(0)
  const [visibleMsgs, setVisibleMsgs] = useState(0)
  const current = CONVERSATIONS[convo]

  useEffect(() => {
    setVisibleMsgs(0)
    let count = 0
    const interval = setInterval(() => {
      count++
      if (count <= current.messages.length) {
        setVisibleMsgs(count)
      } else {
        clearInterval(interval)
        setTimeout(() => setConvo(c => (c + 1) % CONVERSATIONS.length), 2500)
      }
    }, 1400)
    return () => clearInterval(interval)
  }, [convo, current.messages.length])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow */}
      <div className="absolute -inset-10 bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 rounded-[60px] blur-3xl opacity-60" />

      {/* Phone */}
      <div className="relative w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] bg-slate-800 rounded-[35px] border-[3px] border-slate-600 shadow-token-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-slate-900 rounded-b-xl z-20" />

        <div className="absolute inset-[3px] rounded-[32px] overflow-hidden bg-slate-950 flex flex-col">
          {/* Header */}
          <div className={`pt-8 pb-3 px-4 bg-gradient-to-r ${current.color} flex items-center gap-3`}>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] font-medium">
              {current.avatar}
            </div>
            <div>
              <div className="text-white text-[11px] font-medium">{current.botName}</div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-white/70 text-[9px]">Activ — 24/7</span>
              </div>
            </div>
            <div className="ml-auto text-white/40 text-[9px]">{current.biz}</div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
            {current.messages.slice(0, visibleMsgs).map((msg, i) => (
              <motion.div
                key={`${convo}-${i}`}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-relaxed ${ msg.from === 'user' ? 'bg-violet-500/30 text-white rounded-br-sm' : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-sm' }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {visibleMsgs < current.messages.length && visibleMsgs > 0 && (
              <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 pb-4 pt-2">
            <div className="flex items-center gap-2 bg-slate-800/80 rounded-full px-4 py-2">
              <span className="text-[10px] text-slate-500 flex-1">Dă o instrucțiune...</span>
              <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70px] h-[4px] bg-slate-500 rounded-full z-20" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {CONVERSATIONS.map((c, i) => (
          <motion.div key={i} className="w-1.5 h-1.5 rounded-full" animate={{ backgroundColor: convo === i ? '#a78bfa' : '#334155', scale: convo === i ? 1.3 : 1 }} />
        ))}
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════
   Animated counter
   ═══════════════════════════════════════════════════ */
function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <motion.span
      className="text-4xl md:text-5xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  )
}

/* ═══════════════════════════════════════════════════
   Pricing — 3 simple tiers
   ═══════════════════════════════════════════════════ */

const PACKAGES = [
  {
    key: 'starter',
    name: 'STARTER',
    tagline: '1 angajat digital, configurat pe afacerea ta',
    agents: '1 agent AI',
    setup: '4.499',
    monthly: '249',
    popular: false,
    features: [
      '1 agent AI configurat pe procedurile tale',
      'Rapoarte și verificări automate zilnice',
      'Reminder-e și follow-up clienți',
      'Integrare WhatsApp / Telegram',
      'Suport tehnic și actualizări lunare',
    ],
    waText: 'Bună! Mă interesează pachetul STARTER — un angajat digital AI pentru afacerea mea.',
  },
  {
    key: 'business',
    name: 'BUSINESS',
    tagline: '2-3 angajați digitali, o echipă AI completă',
    agents: '2-3 agenți AI',
    setup: '14.999',
    monthly: '499',
    popular: true,
    features: [
      '2-3 agenți AI — fiecare cu rolul lui',
      'Rapoarte, verificări, alerte avansate',
      'Follow-up automat și reactivare clienți',
      'Integrare Google Workspace completă',
      'Monitorizare echipă și conformitate',
      'Dashboard de management',
      'Suport prioritar dedicat',
    ],
    waText: 'Bună! Mă interesează pachetul BUSINESS — 2-3 angajați digitali AI pentru echipa mea.',
  },
  {
    key: 'enterprise',
    name: 'ENTERPRISE',
    tagline: '5+ angajați digitali, departament AI complet',
    agents: '5+ agenți AI',
    setup: '24.999',
    monthly: '899',
    popular: false,
    features: [
      '5+ agenți AI — departament digital complet',
      'Dashboard avansat cu analytics și raportare',
      'Organigramă AI cu roluri și responsabilități',
      'Bugete și tracking costuri per agent',
      'Integrări custom API',
      'Suport multi-departament',
      'Suport dedicat 12 luni',
    ],
    waText: 'Bună! Mă interesează pachetul ENTERPRISE — departament AI complet pentru compania mea.',
  },
]

/* ═══════════════════════════════════════════════════
   Daily Operations Timeline
   ═══════════════════════════════════════════════════ */
const TIMELINE = [
  { time: '07:00', task: 'Verifică programările zilei, trimite reminder-e', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { time: '09:00', task: 'Verificare date — informații lipsă, erori, deadline-uri', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  { time: '12:00', task: 'Raport de dimineață — vânzări, comenzi noi, alerte', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { time: '15:00', task: 'Follow-up automat cu clienții care nu au confirmat', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { time: '18:00', task: 'Verificare conformitate echipă — rapoarte, reguli', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { time: '22:00', task: 'Raport zilnic complet trimis pe WhatsApp/Telegram', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
]

/* ═══════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════ */
export default function AIEmployee() {
  return (
    <section id="ai-employee" className="relative z-10 px-6 pt-4 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ──────────────────────────────────────────
            HERO IMAGE — Full width
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/heroes/aiemployeedesktop.webp"
            alt="AI Employee — Colegul tău digital, activ 24/7"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-xl hidden md:block"
            priority
          />
          <Image
            src="/heroes/aiemployeemobile.webp"
            alt="AI Employee — Colegul tău digital, activ 24/7"
            width={540}
            height={960}
            className="w-full h-auto rounded-xl md:hidden"
            priority
          />
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 1: Hero — The Hook
            ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-24">
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nu e un chatbot.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                E un coleg.
              </span>
            </motion.h2>

            <motion.p
              className="text-slate-400 text-lg md:text-xl mb-4 max-w-lg mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Un angajat digital care <span className="text-white font-medium">știe afacerea ta pe de rost</span> — proceduri, echipa, regulile interne. Auditează date, trimite rapoarte, aplică reguli, urmărește deadline-uri. Tu doar dai instrucțiuni.
            </motion.p>

            <motion.p
              className="text-slate-500 text-base mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Nu improvizează. Nu uită. Nu are zile proaste. Și costă cât o cină de echipă.
            </motion.p>

            {/* Value props */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Non-stop, 365 zile/an' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Răspunsuri în secunde' },
                { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Datele tale rămân la tine' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-4 py-2.5 rounded-lg">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#ai-pachete"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 rounded-lg text-sm font-medium tracking-wider shadow-cta-glow-violet hover:shadow-token-lg transition-premium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Vezi pachetele
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>

          <div className="flex-shrink-0">
            <AIChatMockup />
          </div>
        </div>

        {/* ──────────────────────────────────────────
            SECTION 2: Chatbot vs AI Employee
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-3">
            &ldquo;Da, și eu am un chatbot pe site.&rdquo;
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Un chatbot răspunde clienților. Un AI Employee <span className="text-white font-medium">conduce operațiunile</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Chatbot generic */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="text-slate-400">Chatbot generic</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Răspunde reactiv, doar când e întrebat',
                  'Doar interacțiune cu clienții',
                  'Răspunsuri generice, fără context intern',
                  'Nu știe regulile, procedurile sau echipa ta',
                  'Nu poate lua decizii sau aplica reguli',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-500 text-sm">
                    <svg className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Employee */}
            <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/30 rounded-xl p-7 ring-1 ring-violet-500/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-violet-400" />
                </div>
                <h4 className="text-white">AI Employee</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Lucrează proactiv — pe program, fără să-l întrebi',
                  'Trimite rapoarte, reminder-e și alerte automat',
                  'Cunoaște procedurile, echipa și regulile tale',
                  'Aplică reguli și ia decizii conform instrucțiunilor',
                  'Se conectează la uneltele pe care le folosești deja',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-200 text-sm">
                    <CheckIcon className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 3: The Numbers
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Activ non-stop', sub: 'Verifică, raportează și alertează constant' },
              { value: '0', label: 'Sarcini uitate', sub: 'Fiecare procedură se execută la timp' },
              { value: '10×', label: 'Mai ieftin', sub: 'Față de un angajat pe rol similar' },
              { value: '<2min', label: 'Timp de raportare', sub: 'Rapoarte complete, pe loc' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 shadow-token-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedNumber value={stat.value} />
                <div className="text-sm font-medium text-white mt-2">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 4: Daily Operations Timeline
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-3">
            Ce face în fiecare zi — fără să-l rogi
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Un program complet de operațiuni, executat automat, în fiecare zi.
          </p>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[29px] md:left-[33px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/30 to-transparent" />

            <div className="space-y-4">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.time}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Time badge */}
                  <div className="flex-shrink-0 w-[58px] md:w-[66px] text-right">
                    <span className="text-sm md:text-base font-mono font-medium text-violet-400">{item.time}</span>
                  </div>

                  {/* Dot */}
                  <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-violet-500 ring-4 ring-slate-950 relative z-10" />

                  {/* Card */}
                  <div className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-lg px-4 py-3 group-hover:border-violet-500/30 transition-colors duration-300 ease-premium">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-violet-400/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-sm text-slate-300">{item.task}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 5: Use Cases by Industry
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-3">
            Ce face concret?
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Configurat exact pe nevoile industriei tale. Iată câteva exemple reale.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: 'Rapoarte & Verificări',
                icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                color: 'text-violet-400',
                bg: 'bg-violet-500/10',
                tasks: [
                  'Raport zilnic pe WhatsApp — vânzări, comenzi, anomalii',
                  'Audit automat: lipsă date, câmpuri necompletate, erori',
                  'Alerte instant când ceva nu e în parametri normali',
                  'Comparații săptămână vs săptămână, lună vs lună',
                ],
              },
              {
                industry: 'Reminder-e & Follow-up',
                icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                tasks: [
                  'Reminder automat cu 24h și 1h înainte de programare',
                  'Follow-up personalizat dacă clientul nu a confirmat',
                  'Mesaj de reactivare la clienții inactivi 30+ zile',
                  'Confirmare automată comenzi + estimare livrare',
                ],
              },
              {
                industry: 'Decizii & Reguli',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                color: 'text-pink-400',
                bg: 'bg-pink-500/10',
                tasks: [
                  'Aplică politica de prețuri, discount-uri și excepții exact cum ai definit-o',
                  'Escalare automată: problema merge direct la cine trebuie',
                  'Deadline depășit? Alertă + acțiune — nu doar notificare',
                  'Același standard, de fiecare dată — fără „am uitat"',
                ],
              },
            ].map((item) => (
              <div key={item.industry} className="bg-slate-900/80 border border-slate-700 rounded-xl p-7 hover:border-violet-500/30 transition-colors duration-300 ease-premium shadow-token-md hover:shadow-token-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-white">{item.industry}</h4>
                </div>
                <ul className="space-y-2.5">
                  {item.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-violet-400/60 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 6: How it works — 3 steps
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-3">
            Tu nu faci nimic. Noi configurăm totul.
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            De la prima discuție la lansare — în maxim 7 zile.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Ne spui ce ai nevoie',
                desc: 'Discutăm 30-60 minute. Ce faci, cum lucrezi, ce te consumă cel mai mult timp. Noi înțelegem afacerea, tu nu ai treabă cu tehnicul.',
                icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
              },
              {
                step: '02',
                title: 'Construim și testăm',
                desc: 'Configurăm angajatul digital pe procedurile, echipa și regulile tale. Testăm cu date reale până totul merge perfect.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                step: '03',
                title: 'Angajatul tău lucrează',
                desc: 'De acum, colegul tău digital lucrează non-stop. Tu primești rapoarte, alerte și rezultate — fără să faci nimic.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="relative bg-slate-900/80 border border-slate-700 rounded-xl p-7 hover:border-violet-500/30 transition-colors duration-300 ease-premium shadow-token-md hover:shadow-token-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-heading font-semibold text-violet-500/20">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 7: Social proof
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/20 rounded-xl p-8 shadow-token-md text-center">
            <div className="w-14 h-14 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-slate-300 mb-3 leading-relaxed italic">
              &ldquo;Andrei verifică zilnic datele din CRM, trimite avertismente agenților care nu completează câmpurile obligatorii, și ne face raport săptămânal. Noi nu trebuie să facem nimic.&rdquo;
            </p>
            <div className="text-sm font-heading font-medium text-white">Real District Estate</div>
            <div className="text-xs tracking-wide text-slate-500">Primul AI Employee configurat de noi — în producție</div>
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 8: Pricing — Simple 3 tiers
            ────────────────────────────────────────── */}
        <div id="ai-pachete">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl mb-3">
              Spune-ne ce ai nevoie. Noi construim.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Alege în funcție de câte sarcini vrei să automatizezi. Fiecare pachet include configurare completă, testare și suport.
            </p>
          </motion.div>

          {/* 3-tier grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.key}
                className={`relative bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border ${ pkg.popular ? 'border-violet-400/40 ring-1 ring-violet-500/20' : 'border-violet-500/20' } hover:border-violet-500/50 rounded-xl p-7 transition-premium shadow-token-md hover:shadow-token-lg flex flex-col`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">
                      Cel mai popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl mb-1 mt-1">{pkg.name}</h3>
                <p className="text-slate-500 text-xs mb-2">{pkg.tagline}</p>
                <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 text-xs font-medium px-3 py-1 rounded-full w-fit mb-5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {pkg.agents}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <CheckIcon className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-heading font-semibold text-white">{pkg.setup}</span>
                    <span className="text-slate-400 text-sm">RON</span>
                  </div>
                  <p className="text-xs mt-1 text-slate-500">configurare unică</p>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-lg font-medium text-violet-300">+{pkg.monthly}</span>
                    <span className="text-slate-500 text-sm">RON/lună</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 block w-full py-3 rounded-lg border text-sm font-medium tracking-wider text-center transition-premium ${ pkg.popular ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-violet-500 shadow-cta-glow-violet' : 'bg-violet-500/20 border-violet-500/30 hover:bg-violet-500/30 text-violet-300' }`}
                >
                  Vreau {pkg.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">Nu ești sigur ce pachet ți se potrivește?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bună! Vreau să aflu mai multe despre AI Employee — ce pachet mi se potrivește?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-7 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 hover:border-violet-500/30 transition-premium"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            Scrie-ne pe WhatsApp — te ajutăm
          </a>
        </motion.div>

      </div>
    </section>
  )
}
