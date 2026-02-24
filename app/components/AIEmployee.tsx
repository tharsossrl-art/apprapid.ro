'use client'

import { useState } from 'react'

const packages = [
  {
    key: 'esential',
    name: 'ESENȚIAL',
    tagline: 'Un angajat AI care răspunde 24/7',
    setup: '1.499',
    monthly: '499',
    color: 'emerald',
    popular: false,
    features: [
      '1 AI Employee configurat pe afacerea ta',
      '5 SOP-uri (proceduri automate)',
      '1 canal de comunicare (WhatsApp sau email)',
      'SLA răspuns incident: 24h',
      'Onboarding + testare completă',
      'Clientul plătește API direct (costuri transparente)',
    ],
  },
  {
    key: 'avansat',
    name: 'AVANSAT',
    tagline: 'Echipă AI care automatizează operațiunile',
    setup: '2.499',
    monthly: '999',
    color: 'blue',
    popular: true,
    features: [
      '2 AI Employees configurați',
      '10 SOP-uri (proceduri automate)',
      '2 canale de comunicare',
      'SLA răspuns incident: 12h',
      'Update lunar al instrucțiunilor',
      'Integrare CRM / API client',
      'Clientul plătește API direct',
    ],
  },
  {
    key: 'complet',
    name: 'COMPLET',
    tagline: 'Departament AI complet, zero efort din partea ta',
    setup: '3.999',
    monthly: '2.499',
    color: 'amber',
    popular: false,
    features: [
      'AI Employees nelimitați',
      'SOP-uri custom (oricâte)',
      'Toate canalele de comunicare',
      'SLA răspuns incident: 4h',
      'Manager AI dedicat afacerii tale',
      'Integrări multiple (CRM, API, webhooks)',
      'Rapoarte lunare de performanță',
      'Clientul plătește API direct',
    ],
  },
]

const colorMap: Record<string, Record<string, string>> = {
  emerald: {
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/60',
    bg: 'from-emerald-900/20 to-emerald-900/5',
    badge: 'bg-emerald-500',
    icon: 'bg-emerald-500/20',
    iconText: 'text-emerald-400',
    check: 'text-emerald-400',
    btn: 'bg-emerald-500/20 border-emerald-500/30 hover:bg-emerald-500/30 text-emerald-300',
    setup: 'text-emerald-400',
  },
  blue: {
    border: 'border-blue-500/40',
    borderHover: 'hover:border-blue-500/70',
    bg: 'from-blue-900/30 to-blue-900/10',
    badge: 'bg-blue-500',
    icon: 'bg-blue-500/20',
    iconText: 'text-blue-400',
    check: 'text-blue-400',
    btn: 'bg-blue-500 hover:bg-blue-600 text-white',
    setup: 'text-blue-400',
  },
  amber: {
    border: 'border-amber-500/30',
    borderHover: 'hover:border-amber-500/60',
    bg: 'from-amber-900/20 to-amber-900/5',
    badge: 'bg-amber-500',
    icon: 'bg-amber-500/20',
    iconText: 'text-amber-400',
    check: 'text-amber-400',
    btn: 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 text-amber-300',
    setup: 'text-amber-400',
  },
}

export default function AIEmployee() {
  const [activeTab, setActiveTab] = useState<'setup' | 'monthly'>('monthly')

  return (
    <section id="ai-employee" className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nou — AI Employee
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Angajează un{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              angajat AI
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Plătești 999 RON/lună pentru un angajat care lucrează 24/7, nu obosește, nu pleacă și costă de 10× mai puțin decât un recepționer.
          </p>
        </div>

        {/* Client pays API costs note */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-5 py-2.5 text-sm text-slate-400">
            <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Costurile API Anthropic le plătești direct — fără markup din partea noastră
          </div>
        </div>

        {/* Setup / Monthly toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'monthly' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Abonament lunar
            </button>
            <button
              onClick={() => setActiveTab('setup')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'setup' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Setup (one-time)
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const c = colorMap[pkg.color]
            const price = activeTab === 'monthly' ? pkg.monthly : pkg.setup
            const priceLabel = activeTab === 'monthly' ? 'RON/lună' : 'RON one-time'
            const waText = activeTab === 'monthly'
              ? `Bună! Mă interesează AI Employee pachetul ${pkg.name} (${pkg.monthly} RON/lună).`
              : `Bună! Mă interesează AI Employee pachetul ${pkg.name} — setup ${pkg.setup} RON.`

            return (
              <div
                key={pkg.key}
                className={`relative bg-gradient-to-br ${c.bg} border ${c.border} ${c.borderHover} rounded-2xl p-6 transition-all flex flex-col ${pkg.popular ? 'ring-1 ring-blue-500/30' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`${c.badge} text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap`}>
                      Cel mai ales
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4 ${pkg.popular ? 'mt-2' : ''}`}>
                  <svg className={`w-6 h-6 ${c.iconText}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.304 2.798H4.102c-1.333 0-2.303-1.798-1.304-2.798L4.2 15.3" />
                  </svg>
                </div>

                <h3 className="text-xl font-black mb-1">{pkg.name}</h3>
                <p className="text-slate-500 text-xs mb-5">{pkg.tagline}</p>

                {/* Features */}
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

                {/* Price */}
                <div className="mb-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-white">{price}</span>
                    <span className="text-slate-400 text-sm">{priceLabel}</span>
                  </div>
                  {activeTab === 'monthly' && (
                    <p className={`text-xs mt-1 ${c.setup}`}>+ setup {pkg.setup} RON (one-time)</p>
                  )}
                </div>

                <a
                  href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 block w-full py-3.5 rounded-xl border font-bold text-center text-sm transition-all ${c.btn}`}
                >
                  Vreau {pkg.name}
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Real District Estate rulează deja un AI Employee configurat de noi.{' '}
            <a
              href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Vreau să văd un demo live pentru AI Employee.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
            >
              Cere un demo live →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
