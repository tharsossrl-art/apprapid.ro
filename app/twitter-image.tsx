import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AppRapid.ro - Aplicații web moderne de la 1.499 RON | Gata în 7 zile sau e gratis'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#020617',
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)',
          padding: '60px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 30 }}>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#60a5fa' }}>App</span>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#ffffff' }}>Rapid</span>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#34d399' }}>.ro</span>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3, marginBottom: 30 }}>
            Transformă-ți afacerea în aplicație web modernă
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { text: 'De la 1.499 RON', sub: 'preț fix' },
              { text: '5-7 zile', sub: 'sau e gratis' },
              { text: 'PWA nativ', sub: 'instalabil' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', flexDirection: 'column', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: 12, padding: '14px 20px' }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>{item.text}</span>
                <span style={{ fontSize: 14, color: '#94a3b8' }}>{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
