import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black inline-block mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                AppRapid
              </span>
              <span className="text-slate-400">.ro</span>
            </Link>
            <p className="text-slate-500 text-sm">
              Aplicații web moderne pentru afaceri locale din vestul României.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Link-uri rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#pachete" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Pachete și prețuri
                </Link>
              </li>
              <li>
                <Link href="/#cum-functioneaza" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Cum funcționează
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-confidentialitate" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni-conditii" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © 2026 AppRapid.ro — Operat de Tharsos SRL, Timișoara
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:tharsossrl@gmail.com"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              tharsossrl@gmail.com
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://wa.me/40756870425"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
