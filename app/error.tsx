'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Error icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl opacity-20 blur-xl animate-pulse" />
          <div className="relative w-24 h-24 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Oops!{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Ceva n-a mers bine
          </span>
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          A apărut o eroare neașteptată. Te rugăm să încerci din nou sau să ne contactezi dacă problema persistă.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="group relative px-8 py-4 font-semibold text-white overflow-hidden rounded-xl transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:from-red-600 group-hover:to-orange-600 transition-all" />
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Încearcă din nou
            </span>
          </button>

          <a
            href="/"
            className="px-8 py-4 font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Pagina principală
          </a>
        </div>
      </div>
    </div>
  )
}
