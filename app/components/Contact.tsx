import ContactForm from './ContactForm'
import { WhatsAppIcon } from './icons'
import { WHATSAPP_NUMBER } from '../data/constants'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
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
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-8">
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
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
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-8">
              <h3 className="text-xl mb-6">Sau contactează-ne direct</h3>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bună! Vreau să discutăm despre o aplicație pentru afacerea mea.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/20 transition-premium group"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-emerald-300 transition-colors duration-300">WhatsApp</div>
                    <div className="text-slate-400 text-sm">+40 756 870 425</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="mailto:tharsossrl@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 transition-premium group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300">Email</div>
                    <div className="text-slate-400 text-sm">tharsossrl@gmail.com</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-5 text-center hover:border-slate-600 transition-premium">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Timișoara</div>
                <div className="text-xs text-slate-500">România</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-5 text-center hover:border-slate-600 transition-premium">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Răspundem</div>
                <div className="text-xs text-slate-500">în max. 24h</div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-slate-700 rounded-xl shadow-token-md p-5 hover:border-slate-600 transition-premium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
