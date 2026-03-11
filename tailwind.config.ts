import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        brand: {
          primary: '#60a5fa',
          secondary: '#34d399',
          accent: '#a78bfa',
        },
      },
      borderRadius: {
        'sm-token': '4px',
        'md-token': '8px',
        'lg-token': '12px',
      },
      boxShadow: {
        'token-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'token-md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'token-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'token-xl': '0 16px 48px rgba(0, 0, 0, 0.6)',
      },
      transitionDuration: {
        premium: '300ms',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
