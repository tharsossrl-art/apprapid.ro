export default function Loading() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-5 sm:px-6 py-8 sm:py-12">
      {/* Ambient glow - same as main page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-r from-blue-500/15 via-emerald-500/10 to-blue-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      
      <div className="relative z-10 text-center">
        {/* Logo - static version */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">App</span>
          <span className="text-white">Rapid</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">.ro</span>
        </h1>

        {/* Simple loading indicator */}
        <div className="flex justify-center gap-1.5">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
