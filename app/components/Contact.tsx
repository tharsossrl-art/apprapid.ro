import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Gata să <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">începi</span>?
          </h2>
          <p className="text-xl text-slate-400">
            Scrie-ne acum. Îți răspundem în mai puțin de 24 de ore cu o ofertă clară.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Cel mai rapid răspuns? Pe WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Trimite-ne un mesaj
            </h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick contact */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Sau contactează-ne direct</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/40756870425?text=Bună! Vreau să discutăm despre o aplicație pentru afacerea mea."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl hover:bg-emerald-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">WhatsApp</div>
                    <div className="text-slate-400 text-sm">+40 756 870 425</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="mailto:tharsossrl@gmail.com"
                  className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl hover:bg-blue-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white group-hover:text-blue-300 transition-colors">Email</div>
                    <div className="text-slate-400 text-sm">tharsossrl@gmail.com</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Timișoara</div>
                <div className="text-xs text-slate-500">România</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Răspundem</div>
                <div className="text-xs text-slate-500">în max. 24h</div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-slate-700 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">100% Confidențial</div>
                  <div className="text-xs text-slate-400">Datele tale sunt în siguranță și nu le împărtășim cu nimeni.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
