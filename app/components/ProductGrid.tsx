'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '../data/products'
import { CheckIcon } from './icons'

const icons: Record<string, React.ReactNode> = {
  aplicatii: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  mobile: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  ai: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
}

const gradientMap: Record<string, { border: string; bg: string; icon: string; iconText: string; btn: string }> = {
  aplicatii: {
    border: 'border-blue-500/20 hover:border-blue-500/40',
    bg: 'from-blue-900/20 to-emerald-900/10',
    icon: 'bg-blue-500/15',
    iconText: 'text-blue-400',
    btn: 'from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600',
  },
  mobile: {
    border: 'border-violet-500/20 hover:border-violet-500/40',
    bg: 'from-violet-900/20 to-fuchsia-900/10',
    icon: 'bg-violet-500/15',
    iconText: 'text-violet-400',
    btn: 'from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600',
  },
  ai: {
    border: 'border-fuchsia-500/20 hover:border-fuchsia-500/40',
    bg: 'from-fuchsia-900/20 to-purple-900/10',
    icon: 'bg-fuchsia-500/15',
    iconText: 'text-fuchsia-400',
    btn: 'from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600',
  },
}

export default function ProductGrid() {
  return (
    <section id="servicii" className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Alege ce ai nevoie
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Trei servicii. O singură echipă. Rezultate garantate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => {
            const colors = gradientMap[product.id]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link href={product.slug} className="block h-full">
                  <div className={`relative h-full rounded-xl border ${colors.border} bg-slate-900/80 bg-gradient-to-b ${colors.bg} shadow-token-md p-7 transition-premium hover:translate-y-[-4px] hover:shadow-token-lg`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-lg ${colors.icon} flex items-center justify-center ${colors.iconText} mb-6`}>
                      {icons[product.id]}
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="text-2xl text-white mb-2">{product.name}</h3>
                    <p className="text-slate-400 text-sm mb-6">{product.tagline}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckIcon className={`w-4 h-4 mt-0.5 shrink-0 ${colors.iconText}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div className="mt-auto">
                      <p className="text-xs text-slate-500 mb-3">
                        {product.priceRange} &middot; {product.deliveryRange}
                      </p>
                      <div className={`w-full py-3 rounded-lg bg-gradient-to-r ${colors.btn} text-center text-sm font-medium tracking-wide text-white transition-premium`}>
                        {product.ctaLabel} →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
