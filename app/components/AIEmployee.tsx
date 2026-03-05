'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      <div className="relative w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] bg-slate-800 rounded-[35px] border-[3px] border-slate-600 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-slate-900 rounded-b-2xl z-20" />

        <div className="absolute inset-[3px] rounded-[32px] overflow-hidden bg-slate-950 flex flex-col">
          {/* Header */}
          <div className={`pt-8 pb-3 px-4 bg-gradient-to-r ${current.color} flex items-center gap-3`}>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] font-bold">
              {current.avatar}
            </div>
            <div>
              <div className="text-white text-[11px] font-bold">{current.botName}</div>
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
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-[10px] leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-violet-500/30 text-white rounded-br-sm'
                    : 'bg-slate-800 text-slate-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {visibleMsgs < current.messages.length && visibleMsgs > 0 && (
              <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-slate-800 px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1">
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
      className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  )
}

/* ═══════════════════════════════════════════════════
   Packages
   ═══════════════════════════════════════════════════ */
const packages = [
  {
    key: 'esential',
    name: 'ESENȚIAL',
    tagline: '1 angajat AI care operează 24/7',
    price: '1.499',
    color: 'emerald',
    popular: false,
    features: [
      '1 AI Employee configurat pe afacerea ta',
      '5 proceduri automate configurate',
      '1 canal de comunicare (WhatsApp sau email)',
      'Răspuns la incidente în 24h',
      'Onboarding + testare completă',
    ],
  },
  {
    key: 'avansat',
    name: 'AVANSAT',
    tagline: '1 angajat AI cu capabilități avansate',
    price: '2.499',
    color: 'blue',
    popular: true,
    features: [
      '1 AI Employee configurat pe afacerea ta',
      '10 proceduri automate configurate',
      '2 canale de comunicare',
      'Răspuns la incidente în 12h',
      'Update lunar al instrucțiunilor',
      'Conectare la uneltele tale existente',
    ],
  },
  {
    key: 'complet',
    name: 'COMPLET',
    tagline: '1 angajat AI cu tot ce ai nevoie',
    price: '3.999',
    color: 'amber',
    popular: false,
    features: [
      '1 AI Employee configurat pe afacerea ta',
      'Proceduri automate nelimitate',
      'Toate canalele de comunicare',
      'Răspuns la incidente în 4h',
      'Update-uri și ajustări nelimitate',
      'Conectare la toate platformele tale',
      'Rapoarte lunare de performanță',
    ],
  },
]

const colorMap: Record<string, Record<string, string>> = {
  emerald: {
    border: 'border-emerald-500/30', borderHover: 'hover:border-emerald-500/60',
    bg: 'from-emerald-900/20 to-emerald-900/5', badge: 'bg-emerald-500',
    icon: 'bg-emerald-500/20', iconText: 'text-emerald-400', check: 'text-emerald-400',
    btn: 'bg-emerald-500/20 border-emerald-500/30 hover:bg-emerald-500/30 text-emerald-300',
  },
  blue: {
    border: 'border-blue-500/40', borderHover: 'hover:border-blue-500/70',
    bg: 'from-blue-900/30 to-blue-900/10', badge: 'bg-blue-500',
    icon: 'bg-blue-500/20', iconText: 'text-blue-400', check: 'text-blue-400',
    btn: 'bg-blue-500 hover:bg-blue-600 text-white',
  },
  amber: {
    border: 'border-amber-500/30', borderHover: 'hover:border-amber-500/60',
    bg: 'from-amber-900/20 to-amber-900/5', badge: 'bg-amber-500',
    icon: 'bg-amber-500/20', iconText: 'text-amber-400', check: 'text-amber-400',
    btn: 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 text-amber-300',
  },
}

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
    <section id="ai-employee" className="relative z-10 px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ──────────────────────────────────────────
            HERO IMAGE — Full width
            ────────────────────────────────────────── */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/ai-employee-hero.jpg"
            alt="AI Employee — Colegul tău digital, activ 24/7"
            width={1280}
            height={720}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 1: Hero — The Hook
            ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-24">
          <div className="flex-1 text-center md:text-left">
            <motion.span
              className="inline-block bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nou — AI Employee
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
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
              Un angajat digital care <span className="text-white font-semibold">știe afacerea ta pe de rost</span> — proceduri, echipa, regulile interne. Auditează date, trimite rapoarte, aplică reguli, urmărește deadline-uri. Tu doar dai instrucțiuni.
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
                <div key={item.text} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-4 py-2.5 rounded-xl">
                  <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#ai-pachete"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 rounded-full font-bold text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              De la 1.499 RON — plată unică / angajat AI
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
          <h3 className="text-2xl md:text-3xl font-black text-center mb-3">
            &ldquo;Da, și eu am un chatbot pe site.&rdquo;
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            Un chatbot răspunde clienților. Un AI Employee <span className="text-white">conduce operațiunile</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Chatbot generic */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-400">Chatbot generic</h4>
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
            <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/30 rounded-2xl p-6 ring-1 ring-violet-500/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-white">AI Employee</h4>
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
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
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
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedNumber value={stat.value} />
                <div className="text-sm font-bold text-white mt-2">{stat.label}</div>
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
          <h3 className="text-2xl md:text-3xl font-black text-center mb-3">
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
                    <span className="text-sm md:text-base font-mono font-bold text-violet-400">{item.time}</span>
                  </div>

                  {/* Dot */}
                  <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-violet-500 ring-4 ring-slate-950 relative z-10" />

                  {/* Card */}
                  <div className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-3 group-hover:border-violet-500/30 transition-colors">
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
          <h3 className="text-2xl md:text-3xl font-black text-center mb-3">
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
                  'Rapoarte zilnice și săptămânale — automat, la fix',
                  'Verifică dacă echipa respectă procedurile',
                  'Alerte când ceva nu e în regulă',
                  'Sumar cu cifre, nu povești',
                ],
              },
              {
                industry: 'Reminder-e & Follow-up',
                icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                tasks: [
                  'Trimite reminder-e clienților automat',
                  'Follow-up cu cei care nu au răspuns',
                  'Confirmări programări și comenzi',
                  'Reactivare clienți inactivi',
                ],
              },
              {
                industry: 'Decizii & Reguli',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                color: 'text-pink-400',
                bg: 'bg-pink-500/10',
                tasks: [
                  'Aplică regulile tale fără excepții',
                  'Escalează problemele la persoana potrivită',
                  'Monitorizează deadline-uri și termene',
                  'Acționează conform procedurilor — mereu la fel',
                ],
              },
            ].map((item) => (
              <div key={item.industry} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white">{item.industry}</h4>
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
          <h3 className="text-2xl md:text-3xl font-black text-center mb-3">
            Tu nu faci nimic. Noi configurăm totul.
          </h3>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            De la prima discuție la lansare — în maxim 7 zile.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Învățăm afacerea',
                desc: 'Discutăm cu tine 30-60 minute. Servicii, prețuri, proceduri, echipa, reguli interne. Totul devine „creierul" angajatului tău AI.',
                icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
              },
              {
                step: '02',
                title: 'Configurăm AI-ul',
                desc: 'Construim „creierul" configurat pe afacerea ta, regulile tale, tonul tău. Testat cu scenarii reale până fiecare acțiune e impecabilă.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                step: '03',
                title: 'Instalăm pe echipamentul tău',
                desc: 'Rulează pe mașina sau serverul tău. Costuri API direct la furnizor — transparent, fără markup. Noi menținem și actualizăm.',
                icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-violet-500/20">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
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
          <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 border border-violet-500/20 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-slate-200 mb-3 leading-relaxed italic">
              &ldquo;Andrei verifică zilnic datele din CRM, trimite avertismente agenților care nu completează câmpurile obligatorii, și ne face raport săptămânal. Noi nu trebuie să facem nimic.&rdquo;
            </p>
            <div className="text-sm font-bold text-white">Real District Estate</div>
            <div className="text-xs text-slate-500">Primul AI Employee configurat de noi — în producție</div>
          </div>
        </motion.div>

        {/* ──────────────────────────────────────────
            SECTION 8: Pricing
            ────────────────────────────────────────── */}
        <div id="ai-pachete">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-black mb-3">
              Prețuri simple. Plată unică.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-2">
              Plătești o singură dată configurarea. Costurile de operare (API) le plătești direct la furnizor — transparent, fără markup din partea noastră.
            </p>
          </motion.div>

          {/* Trust badge */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-5 py-2.5 text-sm text-slate-400">
              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Fără abonament. Fără costuri ascunse. Fără surprize.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => {
              const c = colorMap[pkg.color]
              const waText = `Bună! Mă interesează AI Employee pachetul ${pkg.name} (${pkg.price} RON).`

              return (
                <motion.div
                  key={pkg.key}
                  className={`relative bg-gradient-to-br ${c.bg} border ${c.border} ${c.borderHover} rounded-2xl p-6 transition-all flex flex-col ${pkg.popular ? 'ring-1 ring-blue-500/30' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`${c.badge} text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap`}>
                        Cel mai ales
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4 ${pkg.popular ? 'mt-2' : ''}`}>
                    <svg className={`w-6 h-6 ${c.iconText}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.304 2.798H4.102c-1.333 0-2.303-1.798-1.304-2.798L4.2 15.3" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                  <p className="text-slate-500 text-xs mb-5">{pkg.tagline}</p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <svg className={`w-4 h-4 ${c.check} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-white">{pkg.price}</span>
                      <span className="text-slate-400 text-sm">RON</span>
                    </div>
                    <p className="text-xs mt-1 text-slate-500">plată unică / angajat AI</p>
                  </div>

                  <a
                    href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 block w-full py-3.5 rounded-xl border font-bold text-center text-sm transition-all ${c.btn}`}
                  >
                    Vreau {pkg.name}
                  </a>
                </motion.div>
              )
            })}
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
            href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Vreau să aflu mai multe despre AI Employee — ce pachet mi se potrivește?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-800 hover:border-violet-500/30 transition-all"
          >
            <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.212l-.252-.157-2.625.78.78-2.625-.157-.252A8 8 0 1112 20z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
            Scrie-ne pe WhatsApp — te ajutăm
          </a>
        </motion.div>

      </div>
    </section>
  )
}
