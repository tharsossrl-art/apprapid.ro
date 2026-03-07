# AI Employee Page Redesign — Design Doc

**Date:** 2026-03-08
**Status:** Approved

## Overview

Replace the current single-product AI Employee page (3 tiers: Esențial/Avansat/Complet at 1.499-3.999 RON one-time) with a **3-product tabbed interface** covering the full AI Employee offering.

## Products & Pricing

### Product 1: Agenți AI Autonomi (internally: OpenClaw setups)

Autonomous AI agents running on client infrastructure. Model-agnostic (Claude, GPT, Gemini, etc).

**Setup (per agent, one-time):**
| Agent count | Price/agent |
|---|---|
| 1-3 agents | 1.999 RON |
| 4-7 agents | 1.499 RON |
| 8+ agents | 1.099 RON |

**Monthly maintenance:**
| Agent count | Monthly |
|---|---|
| 1-3 agents | 299 RON/mo |
| 4-7 agents | 499 RON/mo |
| 8+ agents | 699 RON/mo |

**Revenue:** Setup + Monthly + API at 2x markup (managed by AppRapid, client doesn't deal with API providers).

### Product 2: Automatizări de Echipă (internally: Claude Cowork automations)

Custom workflow plugins, Google Workspace integration, team onboarding. Client pays own Claude/AI subscriptions.

| Tier | Setup (one-time) | Monthly |
|---|---|---|
| SOLO | 2.499 RON | 199 RON/mo |
| TEAM | 4.999 RON | 399 RON/mo |
| BUSINESS | 9.999 RON | 699 RON/mo |

**Revenue:** Setup + Monthly only. No API markup — client pays own subscriptions.

### Product 3: Platformă AI Business OS (internally: Paperclip platform)

Full AI workforce management — org charts, budgets, dashboards, multi-company. Client pays own subscriptions.

| Tier | Setup (one-time) | Monthly |
|---|---|---|
| BUSINESS | 14.999 RON | 699 RON/mo |
| ENTERPRISE | 24.999 RON | 1.499 RON/mo |

**Revenue:** Setup + Monthly only. No API markup.

## Page Structure

### Sections kept as-is:
1. **Hero** — Chat mockup + "Nu e un chatbot, e un coleg" (update CTA text)
2. **Chatbot vs AI Employee comparison**
3. **The Numbers** (24/7, 0 sarcini uitate, 10x mai ieftin, <2min)
4. **Daily Operations Timeline**
5. **Use Cases by Industry**
6. **How it works — 3 steps** (update step 3 — remove "no markup" for Agenți AI)
7. **Social proof (Real District Estate)**

### New pricing section (replaces old 3-tier pricing):
8. **Tabbed pricing interface** with 3 tabs:
   - Tab: **Agenți AI** — per-agent pricing + monthly tiers + model-agnostic badge
   - Tab: **Automatizări Echipă** — Solo/Team/Business cards + Google Workspace highlight
   - Tab: **Platformă Business** — Business/Enterprise cards + enterprise positioning

9. **CTA final** — Keep, update text

## UI Design Rules

- **No mention of OpenClaw, Claude Cowork, or Paperclip** — only AppRapid-branded names
- **Tab UI:** pill-style tabs matching the violet/fuchsia gradient theme
- **Pricing cards:** keep existing card style (gradient bg, border, hover effects)
- **Each product gets distinct color coding:**
  - Agenți AI: violet/purple (matches current)
  - Automatizări Echipă: blue
  - Platformă Business: amber/gold (premium feel)
- **Model-agnostic badge** on Agenți AI tab (Claude, GPT, Gemini logos/text)
- **"Client pays own subscriptions"** note on tabs 2 & 3
- **"API inclus — gestionat de noi"** badge on tab 1

## Metadata Updates

Update `page.tsx` metadata:
- Title: keep similar
- Description: update to reflect broader offering ("De la 1.999 RON per agent AI autonom")

## Key Constraints

- Single file edit: `AIEmployee.tsx` (full rewrite of pricing section)
- Keep all non-pricing sections intact
- Responsive: mobile-first, tabs stack or scroll on small screens
- WhatsApp CTA links with pre-filled text per product/tier
