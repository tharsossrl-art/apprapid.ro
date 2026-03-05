'use client'

import { motion } from 'framer-motion'

const packages = [
  {
    key: 'essential',
    name: 'ESSENTIAL',
    tagline: 'Prima ta aplicație mobilă',
    price: '4.999',
    color: 'emerald',
    popular: false,
    target: 'Mici afaceri, startup-uri, MVP',
    delivery: '30-45 zile',
    support: '30 zile suport tehnic',
    features: [
      '1 platformă (iOS sau Android)',
      '5-7 ecrane custom',
      'Design profesional UI/UX',
      'Notificări push',
      'Publicare în App Store sau Google Play',
      'Integrare cu API-uri existente',
      'Analytics de bază',
      'Testare pe dispozitive reale',
      '1 revizuire design inclusă',
    ],
  },
  {
    key: 'business',
    name: 'BUSINESS',
    tagline: 'Aplicația completă pentru afacerea ta',
    price: '12.999',
    color: 'blue',
    popular: true,
    target: 'Afaceri în creștere, servicii, retail',
    delivery: '45-75 zile',
    support: '3 luni suport tehnic',
    features: [
      'Ambele platforme (iOS + Android)',
      '10-15 ecrane custom',
      'Design profesional UI/UX',
      'Notificări push avansate',
      'Publicare în ambele magazine',
      'Panou admin web',
      'Integrare plăți online',
      'Sistem de conturi utilizatori',
      'Analytics & rapoarte',
      'Chat in-app',
      '3 revizuiri design incluse',
      'Testare QA completă',
    ],
  },
  {
    key: 'enterprise',
    name: 'ENTERPRISE',
    tagline: 'Proiecte complexe, fără limite',
    price: '24.999+',
    color: 'violet',
    popular: false,
    target: 'Proiecte complexe, platforme, franchise',
    delivery: '60-120 zile',
    support: '12 luni suport tehnic',
    features: [
      'Ambele platforme (iOS + Android)',
      'Ecrane nelimitate',
      'Design premium UI/UX',
      'Backend custom & scalabil',
      'Integrări API complexe',
      'Sistem de roluri & permisiuni',
      'Offline mode avansat',
      'Plăți, subscripții, facturare',
      'Multi-limbă',
      'CI/CD & deployment automat',
      'Manager de proiect dedicat',
      'Revizuiri nelimitate',
      'Suport prioritar 12 luni',
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
  },
  blue: {
    border: 'border-blue-500/40',
    borderHover: 'hover:border-blue-500/70',
    bg: 'from-blue-900/20 to-blue-900/5',
    badge: 'bg-blue-500',
    icon: 'bg-blue-500/20',
    iconText: 'text-blue-400',
    check: 'text-blue-400',
    btn: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white',
  },
  violet: {
    border: 'border-violet-500/30',
    borderHover: 'hover:border-violet-500/60',
    bg: 'from-violet-900/20 to-violet-900/5',
    badge: 'bg-violet-500',
    icon: 'bg-violet-500/20',
    iconText: 'text-violet-400',
    check: 'text-violet-400',
    btn: 'bg-violet-500/20 border-violet-500/30 hover:bg-violet-500/30 text-violet-300',
  },
}

export default function MobilePackages() {
  return (
    <section id="pachete-mobile" className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
            Pachete & Prețuri
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Alege pachetul{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              potrivit
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Plată unică. Fără abonamente ascunse. Publicare în magazine inclusă.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const colors = colorMap[pkg.color]
            const waText = `Bună! Mă interesează aplicația mobilă pachetul ${pkg.name} (${pkg.price} RON).`
            return (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl border ${colors.border} ${colors.borderHover} bg-gradient-to-b ${colors.bg} backdrop-blur-sm p-8 transition-all duration-300 flex flex-col`}
              >
                {pkg.popular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${colors.badge} text-white text-xs font-bold px-4 py-1 rounded-full`}>
                    Cel mai popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm">{pkg.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-slate-400 text-sm">RON</span>
                  </div>
                  <p className="text-xs mt-1 text-slate-500">plată unică</p>
                </div>

                <div className="flex items-center gap-4 mb-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pkg.delivery}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pkg.support}
                  </span>
                </div>

                <a
                  href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl border text-center font-semibold text-sm transition-all mb-6 block ${colors.btn}`}
                >
                  Solicită oferta →
                </a>

                <p className="text-[11px] text-slate-500 mb-4">
                  Ideal pentru: {pkg.target}
                </p>

                <ul className="space-y-2.5 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${colors.check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
