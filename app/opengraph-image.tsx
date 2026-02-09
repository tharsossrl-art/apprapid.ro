import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AppRapid.ro - Transformă-ți afacerea în aplicație'
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Phone mockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 200,
              borderRadius: 24,
              border: '4px solid',
              borderColor: '#3b82f6',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: 'absolute',
                top: 8,
                width: 50,
                height: 12,
                borderRadius: 6,
                background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
              }}
            />
            {/* Checkmark */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginTop: 20 }}
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: 'linear-gradient(90deg, #60a5fa 0%, #34d399 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AppRapid
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#64748b',
            }}
          >
            .ro
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Transformă-ți afacerea în aplicație
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 40,
          }}
        >
          {['Rapid', 'Modern', 'Accesibil'].map((text) => (
            <div
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={{ color: '#e2e8f0', fontSize: 24 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
