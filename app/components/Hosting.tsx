'use client'

import { useState } from 'react'

const tiers = [
  {
    key: 'esential',
    name: 'Esențial',
    target: 'Pentru STARTER',
    monthly: 99,
    annual: 79,
    color: 'emerald',
    features: [
      'Hosting rapid pe servere din Europa',
      'Certificat SSL (HTTPS) inclus',
      'Backup automat săptămânal',
      'Updates de securitate',
      'Suport WhatsApp — răspundem în 24h',
    ],
  },
  {
    key: 'standard',
    name: 'Standard',
    target: 'Pentru PRO / COMMERCE',
    monthly: 199,
    annual: 159,
    color: 'purple',
    popular: true,
    features: [
      'Tot din Esențial, plus:',
      'CDN pentru viteză maximă',
      'Monitorizare uptime 24/7',
      'Backup automat zilnic',
      'Prioritate la suport (răspuns în 12h)',
    ],
  },
  {
    key: 'premium',
    name: 'Premium',
    target: 'Pentru SUITE / CUSTOM',
    monthly: 399,
    annual: 319,
    color: 'amber',
    features: [
      'Tot din Standard, plus:',
      'Infrastructură dedicată',
      'Backup în timp real',
      'Suport prioritar (răspuns în 4h)',
      'Manager tehnic dedicat',
    ],
  },
]

const colorMap: Record<string, Record<string, string>> = {
  emerald: {
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/60',
    bg: 'from-emerald-900/20 to-emerald-900/5',
    badge: 'bg-emerald-500',
    check: 'text-emerald-400',
    btn: 'bg-emerald-500/20 border-emerald-500/30 hover:bg-emerald-500/30 text-emerald-300',
    price: 'text-emerald-400',
  },
  purple: {
    border: 'border-purple-500/40',
    borderHover: 'hover:border-purple-500/70',
    bg: 'from-purple-900/30 to-pink-900/10',
    badge: 'bg-purple-500',
    check: 'text-purple-400',
    btn: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 text-white',
    price: 'text-purple-400',
  },
  amber: {
    border: 'border-amber-500/30',
    borderHover: 'hover:border-amber-500/60',
    bg: 'from-amber-900/20 to-amber-900/5',
    badge: 'bg-amber-500',
    check: 'text-amber-400',
    btn: 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 text-amber-300',
    price: 'text-amber-400',
  },
}

export default function Hosting() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Mentenanță & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Suport</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Aplicația ta are nevoie de un loc unde să ruleze, updates de securitate și pe cineva care răspunde când ai o întrebare.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 rounded-full p-1 flex">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!annual ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Lunar
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${annual ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Anual
              <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? 'bg-white/20' : 'bg-emerald-500/20 text-emerald-400'}`}>-20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Tier cards */}
          {tiers.map((tier) => {
            const c = colorMap[tier.color]
            const price = annual ? tier.annual : tier.monthly
            const annualTotal = tier.annual * 12
            const savings = (tier.monthly * 12) - annualTotal
            const waText = `Bună! Mă interesează hosting-ul ${tier.name} (${price} RON/lună).`

            return (
              <div
                key={tier.key}
                className={`relative bg-gradient-to-br ${c.bg} border ${c.border} ${c.borderHover} rounded-2xl p-6 transition-all flex flex-col ${tier.popular ? 'ring-1 ring-purple-500/30' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`${c.badge} text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap`}>
                      Recomandat
                    </span>
                  </div>
                )}

                <div className={tier.popular ? 'mt-2' : ''}>
                  <h3 className="text-xl font-black mb-1">{tier.name}</h3>
                  <p className="text-slate-500 text-xs mb-5">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-heading font-black text-white">{price}</span>
                    <span className="text-slate-400 text-sm">RON/lună</span>
                  </div>
                  {annual && (
                    <p className={`text-xs mt-1 ${c.price}`}>
                      {annualTotal} RON/an (economisești {savings} RON)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <svg className={`w-4 h-4 ${c.check} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block w-full py-3.5 rounded-xl border font-bold text-center text-sm transition-all ${c.btn}`}
                >
                  Alege {tier.name}
                </a>
              </div>
            )
          })}
        </div>

        {/* Info cards row */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Fără hosting = aplicația nu merge</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aplicația ta are nevoie de un server ca să fie accesibilă online. E ca și chiria pentru un magazin fizic — fără ea, ușa e închisă.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Securitate pe care nu o vezi</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Updates automate, backup-uri, SSL — fără ele site-ul e vulnerabil. Noi ne ocupăm, tu te ocupi de clienți.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Suport real, nu un robot</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ai o problemă? Scrii pe WhatsApp și primești răspuns de la o persoană reală, nu de la un chatbot. Simplu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
