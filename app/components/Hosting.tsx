'use client'

import { useState } from 'react'

export default function Hosting() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
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
              <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? 'bg-white/20' : 'bg-emerald-500/20 text-emerald-400'}`}>-17%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main hosting plan */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hosting + Suport</h3>
                <p className="text-slate-400 text-sm">Tot ce trebuie ca aplicația să funcționeze</p>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-black text-white">{annual ? '199' : '249'}</span>
              <span className="text-slate-400 text-xl">RON/lună</span>
            </div>
            {annual && (
              <div className="text-sm text-slate-400 mb-6">
                <span className="text-purple-400 font-bold">2.399 RON</span> facturat anual <span className="text-emerald-400 font-medium">(economisești 599 RON)</span>
              </div>
            )}
            {!annual && <div className="text-sm text-slate-400 mb-6">facturat lunar</div>}

            <ul className="space-y-3 mb-8">
              {[
                "Hosting rapid pe servere din Europa",
                "Certificat SSL (HTTPS) inclus",
                "Backup automat săptămânal",
                "Updates de securitate",
                "Suport WhatsApp — răspundem în 24h",
                "Monitorizare uptime 24/7",
                "CDN pentru viteză maximă"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Vreau să discut despre hosting și mentenanță.')}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Întreabă despre hosting
            </a>
          </div>

          {/* Why it matters */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex-1">
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

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex-1">
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

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex-1">
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
      </div>
    </section>
  )
}
