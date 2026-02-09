export default function ComparisonTable() {
  const rows: { feature: string; apprapid: boolean | string; agency: boolean | string; diy: boolean | string }[] = [
    { feature: 'Preț', apprapid: '249-899€', agency: '1.500-5.000€', diy: '200€/an ongoing' },
    { feature: 'Timp livrare', apprapid: '3-14 zile', agency: '4-12 săptămâni', diy: 'DIY (ore-zile)' },
    { feature: 'Sistem rezervări', apprapid: true, agency: 'Cost extra', diy: 'Plugin plătit' },
    { feature: 'Comenzi online', apprapid: true, agency: 'Cost extra', diy: 'Limitat' },
    { feature: 'Funcționează offline', apprapid: true, agency: false, diy: false },
    { feature: 'Instalabilă pe telefon', apprapid: true, agency: false, diy: false },
    { feature: 'Notificări push', apprapid: true, agency: 'Rar', diy: false },
    { feature: 'Suport în română', apprapid: true, agency: true, diy: false },
    { feature: 'Fără cunoștințe tehnice', apprapid: true, agency: true, diy: false }
  ]

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-6 h-6 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    }
    return value
  }

  return (
    <section className="relative z-10 px-6 py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            De ce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AppRapid</span>?
          </h2>
          <p className="text-slate-400 text-lg">Comparație sinceră cu alternativele</p>
        </div>
        <div className="overflow-x-auto">
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
                    {typeof row.apprapid === 'boolean' ? renderCell(row.apprapid) : <span className="text-emerald-400 font-bold">{row.apprapid}</span>}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-500">{renderCell(row.agency)}</td>
                  <td className="py-4 px-4 text-center text-slate-500">{renderCell(row.diy)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
