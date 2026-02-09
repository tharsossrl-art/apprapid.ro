export default function Loading() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[100]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 rounded-full border-4 border-slate-800" />

        {/* Spinning gradient ring */}
        <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-blue-500 border-r-emerald-500 animate-spin" />

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand text */}
      <div className="absolute bottom-1/3 text-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold text-lg">
          AppRapid.ro
        </p>
        <p className="text-slate-500 text-sm mt-1">Se încarcă...</p>
      </div>
    </div>
  )
}
