export default function ExtraServices() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Adaugă <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">superputeri</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Funcționalități extra care aduc clienți noi și automatizează munca repetitivă. Se adaugă la orice pachet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* AI Chatbot */}
          <div className="relative bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all group">
            <div className="absolute -top-3 left-6">
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Cel mai popular
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mt-2">
              <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-1">AI Chatbot</h3>
            <p className="text-slate-500 text-xs mb-4">Integrare unică — setup o singură dată</p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Răspunde instant la întrebări frecvente",
                "Funcționează 24/7, chiar și când dormi",
                "Colectează date de contact automat",
                "Antrenat pe informațiile afacerii tale",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-black text-white">199</span>
              <span className="text-slate-400 text-lg">€</span>
            </div>
            <p className="text-slate-500 text-xs mb-4">plată unică, fără abonament</p>

            <a href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Mă interesează AI Chatbot-ul (199€).')}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 rounded-xl bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 font-bold text-center text-sm text-blue-300 transition-all">
              Vreau chatbot
            </a>
          </div>

          {/* QR Menu Digital */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="3" height="3" />
                <rect x="18" y="14" width="3" height="3" /><rect x="14" y="18" width="3" height="3" /><rect x="18" y="18" width="3" height="3" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-1">QR Menu Digital</h3>
            <p className="text-slate-500 text-xs mb-4">Pentru restaurante & cafenele</p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Meniu scanabil de pe telefon, fără aplicație",
                "Actualizezi prețuri instant, fără retipărire",
                "Poze produse + categorii organizate",
                "Design personalizat pe brand-ul tău",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-black text-white">79</span>
              <span className="text-slate-400 text-lg">€</span>
            </div>
            <p className="text-slate-500 text-xs mb-4">plată unică, fără abonament</p>

            <a href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Mă interesează QR Menu Digital (79€).')}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-center text-sm transition-all">
              Vreau meniu QR
            </a>
          </div>

          {/* Email Marketing */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-1">Email Marketing</h3>
            <p className="text-slate-500 text-xs mb-4">Transformă vizitatorii în clienți fideli</p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Template-uri email profesionale pe brand",
                "Campanii automate (bun venit, oferte, reminder)",
                "Colectare email-uri de pe aplicație",
                "Rapoarte deschideri, click-uri, conversii",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-black text-white">99</span>
              <span className="text-slate-400 text-lg">€</span>
            </div>
            <p className="text-slate-500 text-xs mb-4">plată unică, fără abonament</p>

            <a href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Mă interesează Email Marketing (99€).')}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-center text-sm transition-all">
              Vreau email marketing
            </a>
          </div>
        </div>

        {/* Bundle upsell */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-amber-500/10 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-lg font-bold mb-2">
            Adaugi toate 3? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Primești 15% reducere.</span>
          </p>
          <p className="text-slate-400 text-sm mb-4">
            Chatbot + QR Menu + Email Marketing = <span className="line-through text-slate-500">377€</span>{' '}
            <span className="text-white font-bold">320€</span>
          </p>
          <a href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Mă interesează pachetul complet de servicii extra (Chatbot + QR Menu + Email Marketing).')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
            Vreau toate 3 cu reducere
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
