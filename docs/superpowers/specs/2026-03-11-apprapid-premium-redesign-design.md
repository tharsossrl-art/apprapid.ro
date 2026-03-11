# AppRapid.ro Premium Redesign

## Goal

Apply Premium design system structure (typography, spacing, shadows, motion, component rules) to AppRapid.ro while keeping the existing blue/emerald/violet color identity. The result is a more polished, disciplined dark-mode site that feels premium and justifies the 2.999–14.999 EUR pricing.

## Context

- **Current state:** Next.js 14 + Tailwind 3 + Framer Motion. 30+ components. Dark theme (slate-950). Space Grotesk + DM Sans fonts. Multiple gradient accents (blue-emerald, violet-fuchsia). Inconsistent component tokens.
- **Problem:** Colors compete (3 gradient pairs), component spacing/radius/shadows are ad-hoc, typography lacks the letter-spacing refinement of a premium product.
- **Vertex Media uses the gold/emerald Premium palette** — AppRapid must keep its blue/emerald/violet identity to avoid brand confusion.

## Archive Strategy

Create a local git branch `archive/pre-redesign` from current HEAD before any changes. Not pushed to remote.

## Design Tokens

### Colors (unchanged — AppRapid identity)

| Token | Hex | Tailwind |
|-------|-----|----------|
| `--primary` | #60a5fa | blue-400 |
| `--secondary` | #34d399 | emerald-400 |
| `--accent` | #a78bfa | violet-400 |
| `--background` | #020617 | slate-950 |
| `--surface` | #0f172a | slate-900 |
| `--surface-alt` | #1e293b | slate-800 |
| `--text` | #f1f5f9 | slate-100 |
| `--text-muted` | #94a3b8 | slate-400 |
| `--text-inverse` | #020617 | slate-950 |
| `--border` | #334155 | slate-700 |
| `--success` | #34d399 | emerald-400 |
| `--warning` | #fbbf24 | amber-400 |
| `--danger` | #f87171 | red-400 |
| `--info` | #60a5fa | blue-400 |

### Typography (new — Premium system)

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| Display | Hanken Grotesk | system-ui, sans-serif | 500, 600 |
| Body | Sora | system-ui, sans-serif | 300, 400 |
| Mono | Inconsolata | monospace | 400 |

**Scale:**

| Token | Size | Line Height |
|-------|------|-------------|
| h1 | 3.5rem | 1.1 |
| h2 | 2.5rem | 1.15 |
| h3 | 1.75rem | 1.2 |
| h4 | 1.25rem | 1.3 |
| body | 1rem | 1.65 |
| body-sm | 0.875rem | 1.55 |
| caption | 0.75rem | 1.5 |

### Spacing

Same 4px grid, Premium values:

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 40px |
| 2xl | 64px |
| 3xl | 96px |

### Borders & Shadows

| Token | Value |
|-------|-------|
| radius-sm | 4px |
| radius-md | 8px |
| radius-lg | 12px |
| radius-full | 9999px |
| shadow-sm | 0 2px 4px rgba(0, 0, 0, 0.3) |
| shadow-md | 0 4px 12px rgba(0, 0, 0, 0.4) |
| shadow-lg | 0 8px 24px rgba(0, 0, 0, 0.5) |
| shadow-xl | 0 16px 48px rgba(0, 0, 0, 0.6) |

### Motion

| Property | Value |
|----------|-------|
| Speed fast | 150ms |
| Speed normal | 300ms |
| Speed slow | 500ms |
| Easing default | cubic-bezier(0.25, 0.1, 0.25, 1) |

All transitions minimum 300ms. No bouncy/elastic effects. Weighted, deliberate motion.

## Component Rules

### Buttons
- **Primary:** bg `--primary`, text `--text-inverse`, padding 12px 28px, font-weight 500, font-size 0.875rem, letter-spacing 0.04em, radius 8px. Hover: lighten 10%, shadow-md, 300ms. Colored box-shadow (blue at 25% opacity).
- **Secondary:** bg transparent, text `--text`, 1px solid `--border`, radius 8px. Hover: border-color `--primary`, text `--primary`.
- **Ghost:** bg transparent, text `--text-muted`. Hover: text `--text`.

### Cards
- Padding 28px, bg `--surface`, radius 12px, 1px solid `--border`, shadow-md. Hover: border-color #475569, shadow-lg, 300ms.

### Inputs
- 1px solid `--border`, bg `--surface`, radius 8px, padding 12px 16px, font-size 0.875rem. Focus: border-color `--primary`, glow 0 0 0 3px rgba(96, 165, 250, 0.15).

### Navigation
- bg `--background` or transparent, height 64px. Links in `--text-muted`, font-weight 400, 0.875rem. Active/hover: text `--text`. CTA uses primary button.

## Per-Service Color Coding (preserved)

- Web apps → blue-400 (`--primary`)
- Mobile apps → violet-400 (`--accent`)
- AI Employee → emerald-400 (`--secondary`)

Used on card icons, gradient text, section accents. Each service page keeps its color identity.

## Scope

### Files to modify:
1. `tailwind.config.ts` — fonts, extended theme tokens
2. `app/layout.tsx` — Google Fonts imports (Hanken Grotesk, Sora, Inconsolata)
3. `app/globals.css` — CSS custom properties layer, updated light mode
4. All 30+ components in `app/components/` — update Tailwind classes to use new tokens

### Files NOT changing:
- `app/data/products.ts` — content unchanged
- `public/` — all assets stay
- `app/sitemap.ts`, `SchemaMarkup.tsx`, `GoogleAnalytics.tsx` — no visual changes

## Success Criteria

1. All components use consistent design tokens (no hardcoded one-off values)
2. Typography uses Hanken Grotesk + Sora with Premium letter-spacing
3. All transitions are 300ms+ with the specified easing curve
4. Cards, buttons, inputs follow Premium component rules consistently
5. Per-service color coding preserved across all 3 service pages
6. Light mode updated to use the same token system
7. No visual regressions in page structure or content
8. Site builds and deploys without errors
