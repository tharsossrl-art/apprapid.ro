'use client'

const rows: { feature: string; apprapid: boolean | string; agency: boolean | string; diy: boolean | string }[] = [
  { feature: 'Preț', apprapid: '1.490-4.990 RON', agency: '7.500-25.000 RON', diy: '1.000 RON/an' },
  { feature: 'Timp livrare', apprapid: '3-14 zile', agency: '4-12 săptămâni', diy: 'DIY (ore-zile)' },
  { feature: 'Sistem rezervări', apprapid: true, agency: 'Cost extra', diy: 'Plugin plătit' },
  { feature: 'Comenzi online', apprapid: true, agency: 'Cost extra', diy: 'Limitat' },
  { feature: 'Funcționează offline', apprapid: true, agency: false, diy: false },
  { feature: 'Instalabilă pe telefon', apprapid: true, agency: false, diy: false },
  { feature: 'Notificări push', apprapid: true, agency: 'Rar', diy: false },
  { feature: 'Suport în română', apprapid: true, agency: true, diy: false },
  { feature: 'Fără cunoștințe tehnice', apprapid: true, agency: true, diy: false },
]

function Check() {
  return (
    <svg className="w-5 h-5 text-emerald-400 mx-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-red-400/60 mx-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function RenderCell({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === 'boolean') return value ? <Check /> : <Cross />
  return <span className={highlight ? 'text-emerald-400 font-bold text-sm' : 'text-slate-500 text-sm'}>{value}</span>
}

/* Mobile: card-based layout per feature */
function MobileComparison() {
  return (
    <div className="md:hidden space-y-3">
      {rows.map((row, i) => (
        <div key={i} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <div className="text-sm font-semibold text-white mb-3">{row.feature}</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'AppRapid', value: row.apprapid, highlight: true },
              { label: 'Agenție', value: row.agency, highlight: false },
              { label: 'Wix/DIY', value: row.diy, highlight: false },
            ].map((col) => (
              <div key={col.label} className={`text-center rounded-lg py-2 px-1 ${col.highlight ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-800/50'}`}>
                <div className={`text-[10px] uppercase tracking-wider mb-1.5 ${col.highlight ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {col.label}
                </div>
                <RenderCell value={col.value} highlight={col.highlight} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* Desktop: table layout */
function DesktopComparison() {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-4 px-4 text-slate-400 font-medium"></th>
            <th className="py-4 px-4 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold">AppRapid</div>
            </th>
            <th className="py-4 px-4 text-center text-slate-400">Agenție clasică</th>
            <th className="py-4 px-4 text-center text-slate-400">Wix / Squarespace</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800">
              <td className="py-4 px-4 text-slate-300 font-medium">{row.feature}</td>
              <td className="py-4 px-4 text-center">
                <RenderCell value={row.apprapid} highlight />
              </td>
              <td className="py-4 px-4 text-center">
                <RenderCell value={row.agency} />
              </td>
              <td className="py-4 px-4 text-center">
                <RenderCell value={row.diy} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ComparisonTable() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            De ce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AppRapid</span>?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">Comparație sinceră cu alternativele</p>
        </div>
        <MobileComparison />
        <DesktopComparison />
      </div>
    </section>
  )
}
