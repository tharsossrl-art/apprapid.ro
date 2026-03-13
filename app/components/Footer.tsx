import Link from 'next/link'
import { WhatsAppIcon } from './icons'
import { WHATSAPP_URL } from '../data/constants'

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-slate-700 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-heading font-semibold tracking-wide inline-block mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                AppRapid
              </span>
              <span className="text-slate-400">.ro</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Aplicații web, mobile și AI pentru afaceri din România.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-3">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/aplicatii" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Aplicații Web (PWA)
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Aplicații Mobile
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Employee
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
            <h4 className="text-white mb-3">Legal</h4>
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
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            © 2026 AppRapid.ro — Operat de Tharsos SRL, Timișoara
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:tharsossrl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              tharsossrl@gmail.com
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
