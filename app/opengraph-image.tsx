import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AppRapid.ro - Aplicații web moderne de la 249€ | Gata în 7 zile sau e gratis'
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
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginRight: 60 }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 30 }}>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#60a5fa' }}>App</span>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#ffffff' }}>Rapid</span>
            <span style={{ fontSize: 64, fontWeight: 900, color: '#34d399' }}>.ro</span>
          </div>

          {/* Headline */}
          <div style={{ fontSize: 36, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3, marginBottom: 30 }}>
            Transformă-ți afacerea în aplicație web modernă
          </div>

          {/* Features row */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 30 }}>
            {[
              { text: 'De la 249€', sub: 'preț fix' },
              { text: '5-7 zile', sub: 'sau e gratis' },
              { text: 'PWA nativ', sub: 'instalabil' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', flexDirection: 'column', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: 12, padding: '14px 20px' }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>{item.text}</span>
                <span style={{ fontSize: 14, color: '#94a3b8' }}>{item.sub}</span>
              </div>
            ))}
          </div>

          {/* CTA hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#10b981' }} />
            <span style={{ fontSize: 18, color: '#94a3b8' }}>Timișoara, România</span>
          </div>
        </div>

        {/* Right - Phone mockup */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 180,
            height: 360,
            borderRadius: 32,
            border: '3px solid rgba(59, 130, 246, 0.5)',
            background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px 20px',
            position: 'relative',
          }}>
            {/* Notch */}
            <div style={{ position: 'absolute', top: 12, width: 60, height: 8, borderRadius: 4, background: 'rgba(59, 130, 246, 0.4)' }} />

            {/* App header */}
            <div style={{
              width: '100%',
              height: 80,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 24, color: 'white', fontWeight: 700 }}>Salon</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Programări</span>
            </div>

            {/* Feature rows */}
            {['Calendar', 'Galerie', 'Prețuri', 'Recenzii'].map((item) => (
              <div key={item} style={{
                width: '100%',
                height: 28,
                borderRadius: 8,
                background: 'rgba(30, 41, 59, 0.6)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                marginBottom: 8,
              }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: 'linear-gradient(135deg, #3b82f6, #10b981)', marginRight: 8 }} />
                <span style={{ fontSize: 11, color: '#cbd5e1' }}>{item}</span>
              </div>
            ))}

            {/* CTA */}
            <div style={{
              width: '100%',
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(90deg, #3b82f6, #10b981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 'auto',
            }}>
              <span style={{ fontSize: 10, color: 'white', fontWeight: 700 }}>Programează →</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
