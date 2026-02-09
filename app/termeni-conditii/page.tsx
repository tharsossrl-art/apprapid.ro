import Link from 'next/link'

export const metadata = {
  title: 'Termeni și Condiții | AppRapid.ro',
  description: 'Termenii și condițiile de utilizare pentru serviciile AppRapid.ro',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              AppRapid
            </span>
            <span className="text-slate-400">.ro</span>
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Înapoi
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Termeni și{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Condiții
          </span>
        </h1>
        <p className="text-slate-400 mb-12">Ultima actualizare: Februarie 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">1</span>
              Informații generale
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Acești termeni și condiții reglementează utilizarea site-ului apprapid.ro și a serviciilor
              oferite de Tharsos SRL, cu sediul în Timișoara, România. Prin accesarea site-ului sau
              utilizarea serviciilor noastre, ești de acord cu acești termeni.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">2</span>
              Servicii oferite
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              AppRapid.ro oferă servicii de dezvoltare aplicații web, inclusiv:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-emerald-400 mb-2">Pachete de dezvoltare</h3>
                <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
                  <li>Pachet Start</li>
                  <li>Pachet Business</li>
                  <li>Pachet Complet</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-blue-400 mb-2">Servicii adiționale</h3>
                <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
                  <li>Hosting și mentenanță</li>
                  <li>Integrări și module extra</li>
                  <li>Suport tehnic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">3</span>
              Procesul de colaborare
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-white">Consultație inițială</h4>
                  <p className="text-slate-400 text-sm">Discutăm nevoile tale și stabilim cerințele proiectului.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-white">Ofertă și contract</h4>
                  <p className="text-slate-400 text-sm">Primești o ofertă detaliată. După accept, semnăm contractul.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-white">Dezvoltare</h4>
                  <p className="text-slate-400 text-sm">Construim aplicația ta cu update-uri regulate de progres.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-white">Livrare și suport</h4>
                  <p className="text-slate-400 text-sm">Lansăm aplicația și oferim suport continuu.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">4</span>
              Plăți și facturare
            </h2>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Plățile se efectuează conform termenilor din contract</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acceptăm transfer bancar și plăți online</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Facturile sunt emise conform legislației românești</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Prețurile afișate pe site sunt orientative și pot varia în funcție de complexitate</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">5</span>
              Proprietate intelectuală
            </h2>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-3">
              <p className="text-slate-300">
                <strong className="text-white">Codul sursă:</strong> După achitarea integrală, clientul devine proprietar al codului specific aplicației sale.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Componente reutilizabile:</strong> Librăriile și modulele standard rămân proprietatea AppRapid.ro.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Conținut:</strong> Textele, imaginile și materialele furnizate de client rămân proprietatea sa.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">6</span>
              Garanții și limite
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                <h3 className="font-semibold text-emerald-400 mb-2">Ce garantăm</h3>
                <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                  <li>Funcționalitate conform specificațiilor agreate</li>
                  <li>Suport tehnic în perioada contractată</li>
                  <li>Remediere bug-uri 30 zile după livrare</li>
                </ul>
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="font-semibold text-red-400 mb-2">Limite</h3>
                <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                  <li>Nu garantăm rezultate de business</li>
                  <li>Nu răspundem pentru întreruperi hosting terț</li>
                  <li>Modificări majore necesită cotație separată</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">7</span>
              Reziliere
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Oricare dintre părți poate rezilia colaborarea cu un preaviz de 30 de zile.
              În caz de reziliere, clientul plătește pentru munca efectuată până la data rezilierii.
              Avansurile plătite pentru etape neîncepute sunt returnabile.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">8</span>
              Contact
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Pentru întrebări despre acești termeni sau serviciile noastre:
            </p>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-slate-700 rounded-2xl">
              <p className="text-white font-semibold mb-2">Tharsos SRL</p>
              <p className="text-slate-300">Timișoara, România</p>
              <p className="text-slate-300">Email: tharsossrl@gmail.com</p>
              <p className="text-slate-300">WhatsApp: +40 756 870 425</p>
            </div>
          </section>
        </div>

        {/* Links to other pages */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Înapoi la pagina principală
          </Link>
          <Link
            href="/politica-confidentialitate"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            Politica de confidențialitate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm">
          © 2026 AppRapid.ro — Operat de Tharsos SRL, Timișoara
        </div>
      </footer>
    </div>
  )
}
