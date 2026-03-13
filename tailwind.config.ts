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
      },
      boxShadow: {
        'token-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'token-md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'token-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'token-xl': '0 16px 48px rgba(0, 0, 0, 0.6)',
        'cta-glow-blue': '0 2px 8px rgba(96, 165, 250, 0.2)',
        'cta-glow-violet': '0 2px 8px rgba(167, 139, 250, 0.2)',
        'cta-glow-amber': '0 2px 8px rgba(251, 191, 36, 0.2)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
export default config
