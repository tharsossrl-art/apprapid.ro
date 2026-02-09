'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/20">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          {/* Custom Icon */}
          <div className="flex items-start gap-4 flex-1">
            <div className="relative flex-shrink-0">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl blur-lg opacity-40" />
              {/* Icon container */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                {/* Shield/Privacy icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-1">Confidențialitatea ta contează</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Folosim cookie-uri pentru a-ți oferi cea mai bună experiență. Datele tale sunt în siguranță.
                {' '}
                <Link
                  href="/politica-confidentialitate"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Vezi politica de confidențialitate
                </Link>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0 md:ml-4">
            <button
              onClick={handleDecline}
              className="px-5 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
            >
              Refuz
            </button>
            <button
              onClick={handleAccept}
              className="group relative px-5 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-xl transition-all"
            >
              {/* Button gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:from-blue-600 group-hover:to-emerald-600 transition-all" />
              {/* Shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-500" />
              <span className="relative flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accept
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  )
}
