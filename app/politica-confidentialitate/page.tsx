import Link from 'next/link'

export const metadata = {
  title: 'Politica de Confidențialitate | AppRapid.ro',
  description: 'Politica de confidențialitate și protecția datelor personale pentru AppRapid.ro',
}

export default function PrivacyPolicy() {
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
          Politica de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Confidențialitate
          </span>
        </h1>
        <p className="text-slate-400 mb-12">Ultima actualizare: Februarie 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">1</span>
              Introducere
            </h2>
            <p className="text-slate-300 leading-relaxed">
              AppRapid.ro, operat de Tharsos SRL din Timișoara, respectă confidențialitatea vizitatorilor săi.
              Această politică explică ce date colectăm, cum le folosim și drepturile tale conform GDPR
              (Regulamentul General privind Protecția Datelor).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">2</span>
              Date pe care le colectăm
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Date furnizate direct de tine:</h3>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>Nume și prenume</li>
                  <li>Adresă de email</li>
                  <li>Număr de telefon</li>
                  <li>Numele afacerii</li>
                  <li>Mesaje trimise prin formularul de contact</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Date colectate automat:</h3>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>Adresa IP (anonimizată)</li>
                  <li>Tipul browserului și dispozitivului</li>
                  <li>Paginile vizitate și timpul petrecut</li>
                  <li>Sursa vizitei (de unde ai venit)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">3</span>
              Cum folosim datele
            </h2>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pentru a răspunde la solicitările tale
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pentru a furniza serviciile contractate
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pentru a îmbunătăți site-ul și experiența utilizatorilor
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pentru comunicări de marketing (doar cu consimțământul tău)
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">4</span>
              Cookie-uri
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Folosim cookie-uri pentru a asigura funcționarea corectă a site-ului și pentru analiză. Poți controla cookie-urile din setările browserului tău.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-emerald-400 mb-2">Cookie-uri esențiale</h3>
                <p className="text-slate-400 text-sm">Necesare pentru funcționarea site-ului. Nu pot fi dezactivate.</p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-blue-400 mb-2">Cookie-uri analitice</h3>
                <p className="text-slate-400 text-sm">Ne ajută să înțelegem cum este folosit site-ul. Anonimizate.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">5</span>
              Drepturile tale (GDPR)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Dreptul de acces', desc: 'Poți cere o copie a datelor tale' },
                { title: 'Dreptul la rectificare', desc: 'Poți corecta datele incorecte' },
                { title: 'Dreptul la ștergere', desc: 'Poți cere ștergerea datelor' },
                { title: 'Dreptul la portabilitate', desc: 'Poți primi datele în format digital' },
                { title: 'Dreptul la opoziție', desc: 'Te poți opune prelucrării' },
                { title: 'Dreptul de retragere', desc: 'Poți retrage consimțământul oricând' },
              ].map((right, i) => (
                <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <h3 className="font-semibold text-white mb-1">{right.title}</h3>
                  <p className="text-slate-400 text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">6</span>
              Securitatea datelor
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Implementăm măsuri tehnice și organizatorice pentru a proteja datele tale: conexiuni criptate (HTTPS),
              acces restricționat, backup-uri regulate și monitorizare continuă. Nu vindem și nu împărtășim datele
              tale cu terți în scopuri de marketing.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-bold">7</span>
              Contact
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Pentru orice întrebări legate de confidențialitate sau pentru a-ți exercita drepturile, ne poți contacta:
            </p>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-slate-700 rounded-2xl">
              <p className="text-white font-semibold mb-2">Tharsos SRL</p>
              <p className="text-slate-300">Timișoara, România</p>
              <p className="text-slate-300">Email: tharsossrl@gmail.com</p>
              <p className="text-slate-300">WhatsApp: +40 756 870 425</p>
            </div>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Înapoi la pagina principală
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
