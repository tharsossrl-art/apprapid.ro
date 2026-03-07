'use client'

import { motion } from 'framer-motion'

const packages = [
  {
    key: 'standard',
    name: 'STANDARD',
    tagline: 'Aplicația ta mobilă completă',
    price: '7.999',
    color: 'blue',
    popular: true,
    target: 'Afaceri care vor prezență pe App Store',
    delivery: '30-45 zile',
    support: '3 luni suport tehnic',
    features: [
      'iOS + Android (ambele platforme)',
      'Admin dashboard inclus',
      'Design custom UI/UX',
      'Notificări push',
      'Publicare App Store + Google Play',
      'Analytics integrat',
      'Testare pe dispozitive reale',
      '3 revizii design incluse',
    ],
  },
  {
    key: 'advanced',
    name: 'ADVANCED',
    tagline: 'Funcționalități avansate, fără limite',
    price: '14.999+',
    color: 'violet',
    popular: false,
    target: 'Proiecte complexe, platforme, e-commerce',
    delivery: '45-75 zile',
    support: '6 luni suport tehnic',
    features: [
      'Tot ce include STANDARD +',
      'Plăți in-app integrate',
      'Chat in-app',
      'Sistem booking / e-commerce',
      'API integrations complexe',
      'Offline mode avansat',
      'Sistem de roluri & permisiuni',
      'Revizii nelimitate',
      'Suport dedicat 6 luni',
    ],
  },
]

const colorMap: Record<string, Record<string, string>> = {
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

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6">
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
                    <span className="text-4xl font-heading font-black text-white">{pkg.price}</span>
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

        {/* PWA Add-on Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4">
              Ai deja o aplicație web de la noi?
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              Lansează-te pe App Store la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                jumătate de preț
              </span>
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto">
              Backend-ul și dashboard-ul există deja. Noi doar construim aplicația nativă pe baza lor — mai rapid și mai ieftin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'APP STORE LAUNCH',
                price: '4.999',
                delivery: '14-21 zile',
                features: [
                  'iOS + Android din PWA-ul tău existent',
                  'Același admin dashboard',
                  'Notificări push native',
                  'Publicare App Store + Google Play',
                  'Design adaptat pentru mobile',
                ],
              },
              {
                name: 'APP STORE ADVANCED',
                price: '9.999',
                delivery: '21-30 zile',
                features: [
                  'Tot ce include LAUNCH +',
                  'Offline mode complet',
                  'Plăți in-app',
                  'Funcționalități native avansate',
                  'Integrări cameră, GPS, biometrie',
                  'Revizii nelimitate',
                ],
              },
            ].map((addon, idx) => {
              const waText = `Bună! Am deja o aplicație web de la voi și mă interesează ${addon.name} (${addon.price} RON).`
              return (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-b from-emerald-900/15 to-emerald-900/5 backdrop-blur-sm p-8 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{addon.name}</h3>
                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {addon.delivery}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-heading font-black text-white">{addon.price}</span>
                      <span className="text-slate-400 text-sm">RON</span>
                    </div>
                    <p className="text-xs mt-1 text-slate-500">plată unică</p>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {addon.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <svg className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="w-full py-3.5 rounded-xl border bg-emerald-500/20 border-emerald-500/30 hover:bg-emerald-500/30 text-emerald-300 text-center font-semibold text-sm transition-all block"
                  >
                    Vreau {addon.name} →
                  </a>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
