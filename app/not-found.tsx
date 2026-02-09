import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[12rem] md:text-[16rem] font-black text-slate-900 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              404
            </span>
          </div>
        </div>

        {/* Glitchy phone icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-xl animate-pulse" />
          <div className="relative w-24 h-24 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
              {/* X mark */}
              <path d="M9 8l6 6M15 8l-6 6" strokeWidth="2" strokeLinecap="round" className="text-red-400" stroke="currentColor" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Pagină{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            negăsită
          </span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Pagina pe care o cauți nu există sau a fost mutată.
          Hai să te ducem înapoi pe drumul cel bun.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group relative px-8 py-4 font-semibold text-white overflow-hidden rounded-xl transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:from-blue-600 group-hover:to-emerald-600 transition-all" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-500" />
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Pagina principală
            </span>
          </Link>

          <Link
            href="/#contact"
            className="px-8 py-4 font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contactează-ne
          </Link>
        </div>

        {/* Fun suggestion */}
        <p className="mt-12 text-slate-600 text-sm">
          Poate ai nevoie de o aplicație care să nu mai arate 404?
          <Link href="/#quiz" className="text-blue-400 hover:text-blue-300 ml-1">
            Începe quiz-ul →
          </Link>
        </p>
      </div>
    </div>
  )
}
