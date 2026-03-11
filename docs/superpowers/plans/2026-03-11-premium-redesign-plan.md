# AppRapid.ro Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply Premium design system structure (typography, spacing, shadows, motion) to AppRapid.ro while keeping existing blue/emerald/violet colors.

**Architecture:** Token-swap approach — define CSS custom properties and Tailwind theme extensions as the foundation, then update each component's Tailwind classes to reference the new tokens. No structural changes to pages or components.

**Tech Stack:** Next.js 14, Tailwind CSS 3, Framer Motion, Google Fonts

**Spec:** `docs/superpowers/specs/2026-03-11-apprapid-premium-redesign-design.md`

---

## File Structure

No new files created (except the archive branch). All changes are modifications:

| File | Responsibility | Change Type |
|------|---------------|-------------|
| `tailwind.config.ts` | Theme tokens, fonts | Modify |
| `app/layout.tsx` | Font imports, CSS variables | Modify |
| `app/globals.css` | Token layer, typography rules, light mode, animations | Modify |
| `app/components/Navigation.tsx` | Nav bar styling | Modify |
| `app/components/Footer.tsx` | Footer styling | Modify |
| `app/components/HubHero.tsx` | Hub hero section | Modify |
| `app/components/ProductGrid.tsx` | 3-service card grid | Modify |
| `app/components/TrustBar.tsx` | Trust indicators | Modify |
| `app/components/Process.tsx` | 4-step process | Modify |
| `app/components/AboutUs.tsx` | About section | Modify |
| `app/components/Contact.tsx` | Contact section | Modify |
| `app/components/ContactForm.tsx` | Contact form inputs | Modify |
| `app/components/Hero.tsx` | Service page hero | Modify |
| `app/components/Benefits.tsx` | Feature highlights | Modify |
| `app/components/Packages.tsx` | Web pricing cards | Modify |
| `app/components/MobilePackages.tsx` | Mobile pricing cards | Modify |
| `app/components/QuizAI.tsx` | Package quiz | Modify |
| `app/components/ComparisonTable.tsx` | Feature comparison | Modify |
| `app/components/ExtraServices.tsx` | Upsell services | Modify |
| `app/components/Hosting.tsx` | Hosting plans | Modify |
| `app/components/Portfolio.tsx` | Project showcase | Modify |
| `app/components/Testimonials.tsx` | Client reviews | Modify |
| `app/components/AIEmployee.tsx` | AI chat mockup | Modify |
| `app/components/AnimatedBackground.tsx` | Background orbs | Modify |
| `app/components/FloatingWhatsApp.tsx` | WhatsApp button | Modify |
| `app/components/ScrollToTop.tsx` | Scroll button | Modify |
| `app/components/ThemeToggle.tsx` | Theme switch | Modify |
| `app/components/CookieConsent.tsx` | Cookie banner | Modify |
| `app/components/ScrollAnimations.tsx` | Scroll animations | Modify |

**NOT modified:** `TemplatesShowcase.jsx` (3128 lines of phone mockup UI — these are miniature app previews with 6-7px text sizes, not part of the site's design system), `SchemaMarkup.tsx`, `GoogleAnalytics.tsx`, `app/data/products.ts`, `app/sitemap.ts`.

---

## Chunk 1: Foundation

### Task 1: Archive Current Design

**Files:**
- None modified — git operation only

- [ ] **Step 1: Create archive branch**

```bash
cd ~/Developer/apprapid.ro
git add -A && git stash  # stash any uncommitted work
git branch archive/pre-redesign
git stash pop  # restore any stashed work
```

Verify: `git branch | grep archive` shows `archive/pre-redesign`

- [ ] **Step 2: Verify archive branch points to current HEAD**

```bash
git log --oneline archive/pre-redesign -1
git log --oneline HEAD -1
```

Both should show the same commit hash.

---

### Task 2: Foundation — Tailwind Config + Fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update tailwind.config.ts**

Read `tailwind.config.ts` first. Replace the theme extension with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'premium': '300ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Update layout.tsx fonts**

Read `app/layout.tsx`. Replace the font imports. Change `Space_Grotesk` → `Hanken_Grotesk` and `DM_Sans` → `Sora`. Add `Inconsolata` for mono.

```typescript
import { Hanken_Grotesk, Sora, Inconsolata } from "next/font/google";
```

```typescript
const heading = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const body = Sora({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
  display: "swap",
});

const mono = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});
```

Update the `<body>` className to include all three font variables:
```tsx
<body className={`${heading.variable} ${body.variable} ${mono.variable} font-body antialiased`}>
```

Also update the loading screen inline styles to use the new fonts (Sora for body text).

- [ ] **Step 3: Verify build**

```bash
cd ~/Developer/apprapid.ro && npm run build
```

Expected: Build succeeds. No font-related errors.

- [ ] **Step 4: Commit**

```bash
cd ~/Developer/apprapid.ro
git add tailwind.config.ts app/layout.tsx
git commit -m "feat: swap fonts to Hanken Grotesk + Sora + Inconsolata (Premium system)"
```

---

### Task 3: Foundation — CSS Token Layer

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add CSS custom properties block**

Read `app/globals.css` fully. Add a `:root` block AFTER the `@tailwind` directives and BEFORE any existing rules. This block defines all design tokens:

```css
/* ===== PREMIUM × APPRAPID DESIGN TOKENS ===== */
:root {
  /* Colors — AppRapid identity */
  --color-primary: #60a5fa;
  --color-secondary: #34d399;
  --color-accent: #a78bfa;
  --color-bg: #020617;
  --color-surface: #0f172a;
  --color-surface-alt: #1e293b;
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #020617;
  --color-border: #334155;
  --color-success: #34d399;
  --color-warning: #fbbf24;
  --color-danger: #f87171;
  --color-info: #60a5fa;

  /* Typography — Premium scale */
  --text-h1: 3.5rem;
  --text-h2: 2.5rem;
  --text-h3: 1.75rem;
  --text-h4: 1.25rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Borders & Shadows */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);

  /* Motion */
  --speed-fast: 150ms;
  --speed-normal: 300ms;
  --speed-slow: 500ms;
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

- [ ] **Step 2: Update typography rules**

Replace the existing `h1-h6` and body font rules with Premium typography:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading), system-ui, sans-serif;
  letter-spacing: 0.02em;
}

h1 { font-size: var(--text-h1); line-height: 1.1; font-weight: 500; }
h2 { font-size: var(--text-h2); line-height: 1.15; font-weight: 500; }
h3 { font-size: var(--text-h3); line-height: 1.2; font-weight: 600; }
h4 { font-size: var(--text-h4); line-height: 1.3; font-weight: 600; }

body {
  font-family: var(--font-body), system-ui, sans-serif;
  font-weight: 300;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 3: Update animation timing**

Change existing animation durations to match Premium motion:
- `.animate-on-scroll-init` transition duration: `0.6s` → keep (scroll reveals are OK at 0.6s)
- Any `transition-all duration-200` patterns in globals → change to `duration-300`
- Update the easing in scroll animations to `cubic-bezier(0.25, 0.1, 0.25, 1)`

- [ ] **Step 4: Update light mode overrides**

Update the `.light-mode` section to use token-based overrides:

```css
.light-mode {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-alt: #f1f5f9;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-text-inverse: #ffffff;
  --color-border: #e2e8f0;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.12);
}
```

Keep ALL existing `.light-mode` class overrides (text-white→dark, bg-slate→light, etc.) since components still use Tailwind classes directly. The CSS variables are additive.

- [ ] **Step 5: Verify build**

```bash
cd ~/Developer/apprapid.ro && npm run build
```

- [ ] **Step 6: Commit**

```bash
cd ~/Developer/apprapid.ro
git add app/globals.css
git commit -m "feat: add Premium design token layer to globals.css"
```

---

## Chunk 2: Layout Components

### Task 4: Navigation

**Files:**
- Modify: `app/components/Navigation.tsx` (295 lines)

- [ ] **Step 1: Read the full component**

Read `app/components/Navigation.tsx`.

- [ ] **Step 2: Update styling**

Apply these class changes throughout the component:

| Find | Replace With | Reason |
|------|-------------|--------|
| `font-bold` or `font-black` on nav text | `font-medium` (500) | Premium uses medium weight |
| `duration-200` | `duration-300` | Premium 300ms minimum |
| `rounded-2xl` or `rounded-xl` on mobile menu | `rounded-lg-token` (12px) | Premium radius |
| `transition-colors` | `transition-all duration-300 ease-premium` | Weighted transitions |
| `text-sm` on nav links | `text-sm tracking-wide` | Add letter-spacing |
| `hover:bg-slate-800` | `hover:bg-slate-800/80` | Subtler hover |

Ensure the nav CTA button follows Premium button rules:
- `px-7 py-3 text-sm font-medium tracking-wider rounded-lg-token transition-all duration-300 ease-premium`
- Add `shadow-[0_2px_8px_rgba(96,165,250,0.2)]` for blue glow on CTA

- [ ] **Step 3: Verify build**

```bash
cd ~/Developer/apprapid.ro && npm run build
```

- [ ] **Step 4: Commit**

```bash
cd ~/Developer/apprapid.ro
git add app/components/Navigation.tsx
git commit -m "feat: update Navigation to Premium typography and motion"
```

---

### Task 5: Footer

**Files:**
- Modify: `app/components/Footer.tsx` (98 lines)

- [ ] **Step 1: Read and update**

Read `app/components/Footer.tsx`. Apply:

| Find | Replace With | Reason |
|------|-------------|--------|
| `font-bold` on heading text | `font-medium tracking-wide` | Premium weight |
| Any `font-black` | `font-semibold` | Lighter heading weight |
| `text-slate-500` | `text-slate-400` (--text-muted) | Consistent muted text |
| `border-slate-800` | `border-slate-700` (--border) | Token-consistent border |

- [ ] **Step 2: Commit**

```bash
cd ~/Developer/apprapid.ro
git add app/components/Footer.tsx
git commit -m "feat: update Footer to Premium tokens"
```

---

### Task 6: Utility Components

**Files:**
- Modify: `app/components/AnimatedBackground.tsx` (16 lines)
- Modify: `app/components/FloatingWhatsApp.tsx` (67 lines)
- Modify: `app/components/ScrollToTop.tsx` (37 lines)
- Modify: `app/components/ThemeToggle.tsx` (50 lines)
- Modify: `app/components/CookieConsent.tsx` (116 lines)
- Modify: `app/components/ScrollAnimations.tsx` (33 lines)

- [ ] **Step 1: Read all 6 files**

- [ ] **Step 2: AnimatedBackground.tsx**

The 3 pulsing gradient orbs. Make them subtler for Premium feel:
- Reduce opacity from `/20` to `/10` on each orb
- Keep animation but ensure it's slow (3s+)

- [ ] **Step 3: FloatingWhatsApp.tsx**

- `duration-300` on all transitions
- `rounded-lg-token` → keep `rounded-full` (pill shape for FAB is correct)
- Shadow: keep green glow as-is (WhatsApp brand)

- [ ] **Step 4: ScrollToTop.tsx**

- `bg-slate-800/90` → `bg-slate-900/90 border border-slate-700`
- `duration-300` on transition
- `rounded-xl` → `rounded-lg-token`

- [ ] **Step 5: ThemeToggle.tsx**

- Same pattern as ScrollToTop
- `duration-300` transitions

- [ ] **Step 6: CookieConsent.tsx**

- `rounded-2xl` → `rounded-xl` (12px)
- Button: `rounded-full` → `rounded-lg-token`, add `tracking-wider font-medium`
- `duration-300` on transitions

- [ ] **Step 7: ScrollAnimations.tsx**

- Update transition duration from `0.6s` to match Premium: keep `0.6s` for scroll reveals (spec says scroll animations are OK at this speed)
- Update easing to `cubic-bezier(0.25, 0.1, 0.25, 1)`

- [ ] **Step 8: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/AnimatedBackground.tsx app/components/FloatingWhatsApp.tsx app/components/ScrollToTop.tsx app/components/ThemeToggle.tsx app/components/CookieConsent.tsx app/components/ScrollAnimations.tsx
git commit -m "feat: update utility components to Premium tokens"
```

---

## Chunk 3: Hub Page Components

### Task 7: HubHero + ProductGrid

**Files:**
- Modify: `app/components/HubHero.tsx` (115 lines)
- Modify: `app/components/ProductGrid.tsx` (119 lines)

- [ ] **Step 1: Read both files**

- [ ] **Step 2: Update HubHero.tsx**

The hub hero is the main landing section with video frame and headline.

Key changes:
- Headline: ensure `font-heading font-medium` (500 weight, not black/bold)
- Add `tracking-wide` (letter-spacing 0.02em) on headlines
- Subtitle: `font-light` (300 weight) for Sora body
- CTA button: `px-7 py-3 text-sm font-medium tracking-wider rounded-lg-token shadow-[0_4px_16px_rgba(96,165,250,0.25)] transition-all duration-300 ease-premium`
- CTA hover: `hover:shadow-[0_6px_24px_rgba(96,165,250,0.35)] hover:opacity-90`
- Video frame border: keep `border-white/10` but ensure `rounded-xl` (12px)
- Gradient overlay: keep existing blue/emerald/violet but reduce intensity (from `/20` to `/10`)
- Framer Motion: ensure duration values are ≥0.5s

- [ ] **Step 3: Update ProductGrid.tsx**

The 3-card grid showing Web, Mobile, AI services.

Key changes:
- Card container: `bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-7`
- Card hover: `hover:border-slate-600 hover:shadow-token-lg transition-all duration-300 ease-premium`
- Card title: `font-heading font-semibold tracking-wide`
- Card body text: `font-light text-slate-400`
- Per-service colored borders on hover: keep `border-blue-500/20` etc. but apply to border-top or accent element, not full border
- Card links: `text-sm font-medium tracking-wide`
- Remove any `font-black` or `font-extrabold`

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/HubHero.tsx app/components/ProductGrid.tsx
git commit -m "feat: update HubHero + ProductGrid to Premium tokens"
```

---

### Task 8: TrustBar + Process + AboutUs

**Files:**
- Modify: `app/components/TrustBar.tsx` (60 lines)
- Modify: `app/components/Process.tsx` (79 lines)
- Modify: `app/components/AboutUs.tsx` (90 lines)

- [ ] **Step 1: Read all 3 files**

- [ ] **Step 2: Update TrustBar.tsx**

- Text: `font-medium tracking-wide` (not bold)
- Transition: `duration-300`
- Keep colored icons (blue, emerald, amber, violet) — they match the trust indicators

- [ ] **Step 3: Update Process.tsx**

- Step numbers: keep gradient but use `font-heading font-semibold`
- Step titles: `font-heading font-medium tracking-wide`
- Body text: `font-light text-slate-400`
- Cards: `rounded-xl shadow-token-md border border-slate-700`
- Gradient connector lines: keep as-is (visual accent)
- Transition: `duration-300`

- [ ] **Step 4: Update AboutUs.tsx**

- Heading: `font-heading font-medium tracking-wide`
- Body: `font-light`
- Trust cards: `bg-slate-900/80 border border-slate-700 rounded-xl shadow-token-md p-7`
- Remove any `font-bold` → `font-medium`

- [ ] **Step 5: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/TrustBar.tsx app/components/Process.tsx app/components/AboutUs.tsx
git commit -m "feat: update TrustBar, Process, AboutUs to Premium tokens"
```

---

### Task 9: Contact + ContactForm

**Files:**
- Modify: `app/components/Contact.tsx` (125 lines)
- Modify: `app/components/ContactForm.tsx` (234 lines)

- [ ] **Step 1: Read both files**

- [ ] **Step 2: Update Contact.tsx**

- Heading: `font-heading font-medium tracking-wide`
- WhatsApp/email buttons: `rounded-lg-token shadow-token-md transition-all duration-300`
- Card: `bg-slate-900/80 border border-slate-700 rounded-xl`
- Body text: `font-light text-slate-400`

- [ ] **Step 3: Update ContactForm.tsx**

Apply Premium input rules:
- All inputs: `bg-slate-900 border border-slate-700 rounded-lg-token px-4 py-3 text-sm transition-all duration-300`
- Focus: `focus:border-blue-400 focus:ring-[3px] focus:ring-blue-400/15`
- Labels: `text-xs font-normal text-slate-400 tracking-wide`
- Error state: `border-red-400 ring-red-400/15`
- Submit button: Premium primary button style (`px-7 py-3 text-sm font-medium tracking-wider rounded-lg-token shadow-[0_2px_8px_rgba(96,165,250,0.2)] transition-all duration-300`)
- Remove `hover:bg-slate-800` on inputs → `hover:border-slate-600`

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/Contact.tsx app/components/ContactForm.tsx
git commit -m "feat: update Contact + ContactForm to Premium tokens"
```

---

## Chunk 4: Service Page Components

### Task 10: Hero + Benefits

**Files:**
- Modify: `app/components/Hero.tsx` (136 lines)
- Modify: `app/components/Benefits.tsx` (147 lines)

- [ ] **Step 1: Read both files**

- [ ] **Step 2: Update Hero.tsx**

The shared hero for service pages (aplicatii, mobile, ai).

- Main headline: `font-heading font-medium tracking-wide` (not font-black)
- Gradient text: keep `text-transparent bg-clip-text bg-gradient-to-r` but this is the KEY change — use `font-medium` weight so the gradient feels refined, not shouty
- Subtitle: `font-light text-slate-400`
- CTA buttons: Premium primary + secondary styles
- Guarantee badges: `rounded-lg-token border border-slate-700 bg-slate-900/80`
- `.animate-gradient` timing: keep 3s (it's subtle enough)

- [ ] **Step 3: Update Benefits.tsx**

- Section heading: `font-heading font-medium tracking-wide`
- Benefit cards: `rounded-xl border border-slate-700 shadow-token-md p-7 transition-all duration-300`
- Icon containers: keep gradient backgrounds but use `rounded-lg-token`
- Body text: `font-light text-slate-400`
- Remove `font-bold` → `font-medium`

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/Hero.tsx app/components/Benefits.tsx
git commit -m "feat: update Hero + Benefits to Premium tokens"
```

---

### Task 11: Packages + MobilePackages

**Files:**
- Modify: `app/components/Packages.tsx` (307 lines)
- Modify: `app/components/MobilePackages.tsx` (278 lines)

- [ ] **Step 1: Read both files**

- [ ] **Step 2: Update Packages.tsx**

Pricing cards are critical for conversion — must look premium.

- Card: `bg-slate-900 border border-slate-700 rounded-xl shadow-token-lg p-7`
- "Popular" card: keep colored border but use `border-blue-400/40` instead of full gradient border
- Price text: `font-heading font-medium` (not black)
- Feature list: `font-light text-sm text-slate-400`
- Check icons: keep emerald
- CTA buttons: Premium primary (popular) / secondary (others)
- Expandable section: `border-t border-slate-700` divider
- `duration-300` on all transitions
- Remove `font-black` → `font-semibold` on price numbers

- [ ] **Step 3: Update MobilePackages.tsx**

Same patterns as Packages.tsx but for mobile pricing. Apply identical token changes.

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/Packages.tsx app/components/MobilePackages.tsx
git commit -m "feat: update pricing cards to Premium tokens"
```

---

### Task 12: QuizAI + ComparisonTable + ExtraServices + Hosting

**Files:**
- Modify: `app/components/QuizAI.tsx` (288 lines)
- Modify: `app/components/ComparisonTable.tsx` (114 lines)
- Modify: `app/components/ExtraServices.tsx` (165 lines)
- Modify: `app/components/Hosting.tsx` (202 lines)

- [ ] **Step 1: Read all 4 files**

- [ ] **Step 2: Update QuizAI.tsx**

- Question cards: `rounded-xl border border-slate-700 shadow-token-md`
- Option buttons: `rounded-lg-token border border-slate-700 transition-all duration-300`
- Selected option: `border-blue-400 bg-blue-400/10`
- Progress bar: keep gradient, add `rounded-full`
- Result card: `rounded-xl border border-slate-700 shadow-token-lg p-7`
- Typography: `font-heading font-medium tracking-wide` on titles

- [ ] **Step 3: Update ComparisonTable.tsx**

- Table container: `rounded-xl border border-slate-700 overflow-hidden`
- Header row: `bg-slate-800`
- Body rows: `border-b border-slate-700/50`
- Check marks: keep `text-emerald-400`
- X marks: keep `text-red-400/60`

- [ ] **Step 4: Update ExtraServices.tsx**

- Section heading: `font-heading font-medium tracking-wide`
- Service cards: `rounded-xl border border-slate-700 shadow-token-md p-7 transition-all duration-300`
- Icons: keep blue gradient
- Body: `font-light text-slate-400`

- [ ] **Step 5: Update Hosting.tsx**

- Hosting cards: `rounded-xl border border-slate-700 shadow-token-md p-7`
- Popular card border: keep colored but reduce to `/40` opacity
- Price: `font-heading font-medium`
- Features: `font-light text-sm text-slate-400`
- CTA: Premium button styles

- [ ] **Step 6: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/QuizAI.tsx app/components/ComparisonTable.tsx app/components/ExtraServices.tsx app/components/Hosting.tsx
git commit -m "feat: update QuizAI, ComparisonTable, ExtraServices, Hosting to Premium tokens"
```

---

### Task 13: Portfolio + Testimonials

**Files:**
- Modify: `app/components/Portfolio.tsx` (116 lines)
- Modify: `app/components/Testimonials.tsx` (89 lines)

- [ ] **Step 1: Read both files**

- [ ] **Step 2: Update Portfolio.tsx**

- Project cards: `rounded-xl border border-slate-700 shadow-token-md overflow-hidden transition-all duration-300`
- Hover: `hover:border-slate-600 hover:shadow-token-lg`
- Gradient overlays on images: keep but reduce intensity
- Titles: `font-heading font-medium tracking-wide`
- Tags/badges: `rounded-lg-token text-xs font-medium tracking-wide`

- [ ] **Step 3: Update Testimonials.tsx**

- Testimonial cards: `rounded-xl border border-slate-700 shadow-token-md p-7`
- Quote text: `font-light text-slate-300 italic`
- Author name: `font-heading font-medium`
- Author role: `text-xs text-slate-400 tracking-wide`
- Colored accent backgrounds: reduce from `/10` to `/5` for subtlety

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/Portfolio.tsx app/components/Testimonials.tsx
git commit -m "feat: update Portfolio + Testimonials to Premium tokens"
```

---

### Task 14: AIEmployee

**Files:**
- Modify: `app/components/AIEmployee.tsx` (1,044 lines)

- [ ] **Step 1: Read the full component**

This is the largest component (1,044 lines) — an interactive AI chat mockup with 5 business scenarios.

- [ ] **Step 2: Update global styling patterns**

Apply these replacements throughout the file:

| Pattern | Replace With |
|---------|-------------|
| `font-black` | `font-semibold` |
| `font-bold` (on headings) | `font-medium tracking-wide` |
| `font-bold` (on body text) | `font-medium` |
| `rounded-2xl` | `rounded-xl` |
| `rounded-3xl` | `rounded-xl` |
| `duration-200` | `duration-300` |
| `shadow-2xl` | `shadow-token-xl` |
| `shadow-lg` | `shadow-token-lg` |

- [ ] **Step 3: Update specific sections**

- Chat bubble: `rounded-xl border border-slate-700 shadow-token-md`
- Scenario selector buttons: `rounded-lg-token border border-slate-700 transition-all duration-300`
- Active scenario: `border-blue-400 bg-blue-400/10`
- Chat messages: `rounded-lg-token px-4 py-3`
- AI response: `bg-slate-800 border border-slate-700`
- User message: `bg-blue-500/20 border border-blue-500/20`
- Keep gradient accents (`from-violet-500 to-fuchsia-500` for AI branding)

- [ ] **Step 4: Verify build and commit**

```bash
cd ~/Developer/apprapid.ro && npm run build
git add app/components/AIEmployee.tsx
git commit -m "feat: update AIEmployee to Premium tokens"
```

---

## Chunk 5: Verification

### Task 15: Full Build + Visual Verification

**Files:**
- None modified — verification only

- [ ] **Step 1: Full build**

```bash
cd ~/Developer/apprapid.ro && npm run build
```

Must succeed with zero errors.

- [ ] **Step 2: Run dev server**

```bash
cd ~/Developer/apprapid.ro && npm run dev
```

- [ ] **Step 3: Visual check**

Open `http://localhost:3000` in browser. Check:
- [ ] Homepage loads with new fonts (Hanken Grotesk headings, Sora body)
- [ ] All cards have consistent 12px radius, token shadows
- [ ] Buttons use 300ms transitions with letter-spacing
- [ ] Navigation text uses medium weight with tracking
- [ ] Per-service colors preserved (blue=web, violet=mobile, emerald=AI)
- [ ] Light mode toggle works and applies light overrides
- [ ] No broken layouts or missing styles
- [ ] `/aplicatii` page renders correctly
- [ ] `/mobile` page renders correctly
- [ ] `/ai` page renders correctly
- [ ] WhatsApp button, cookie consent, scroll-to-top all functional

- [ ] **Step 4: Final commit if any fixes needed**

```bash
cd ~/Developer/apprapid.ro
git add -A
git commit -m "fix: visual polish after Premium redesign"
```
