# AI Employee Pricing Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the old 3-tier one-time pricing section in AIEmployee.tsx with a tabbed 3-product interface (Agenți AI, Automatizări Echipă, Platformă Business).

**Architecture:** Single-file edit of AIEmployee.tsx. Replace the `packages` data array and pricing section (Section 8) with a tabbed UI. All other sections (Hero, Comparison, Numbers, Timeline, Use Cases, How It Works, Social Proof) remain untouched. Tab state managed with useState.

**Tech Stack:** Next.js, React, Tailwind CSS, Framer Motion (already in use)

---

### Task 1: Replace packages data with new product data

**Files:**
- Modify: `app/components/AIEmployee.tsx:199-269` (remove old `packages` and `colorMap`)

**Step 1: Remove old data**

Delete the `packages` array (lines 199-248) and `colorMap` object (lines 250-269).

**Step 2: Add new product data structures**

Add at the same location:

```tsx
/* ═══════════════════════════════════════════════════
   Product Data — 3 AI Employee Products
   ═══════════════════════════════════════════════════ */

const AGENT_PRICING = [
  { agents: '1-3', setupPerAgent: '1.999', monthly: '299' },
  { agents: '4-7', setupPerAgent: '1.499', monthly: '499' },
  { agents: '8+', setupPerAgent: '1.099', monthly: '699' },
]

const TEAM_PACKAGES = [
  {
    key: 'solo',
    name: 'SOLO',
    tagline: '1-3 plugin-uri custom, 1 utilizator',
    setup: '2.499',
    monthly: '199',
    color: 'blue',
    features: [
      '1-3 plugin-uri AI custom pentru afacerea ta',
      'Configurare completă Google Workspace',
      'Onboarding 1 utilizator',
      'Suport și actualizări lunare',
    ],
  },
  {
    key: 'team',
    name: 'TEAM',
    tagline: '5-10 plugin-uri, echipă până la 10 persoane',
    setup: '4.999',
    monthly: '399',
    color: 'blue',
    popular: true,
    features: [
      '5-10 plugin-uri AI custom',
      'Integrare completă Google Workspace',
      'Onboarding echipă (până la 10 utilizatori)',
      'Configurare marketplace plugin-uri',
      'Suport prioritar și actualizări',
    ],
  },
  {
    key: 'business',
    name: 'BUSINESS',
    tagline: 'Plugin-uri nelimitate, deployment organizațional',
    setup: '9.999',
    monthly: '699',
    color: 'blue',
    features: [
      'Plugin-uri AI nelimitate',
      'Suita completă de integrări',
      'Branding custom organizațional',
      'Deployment la nivel de organizație',
      'Suport prioritar dedicat',
    ],
  },
]

const PLATFORM_PACKAGES = [
  {
    key: 'business',
    name: 'BUSINESS',
    tagline: 'Până la 5 agenți AI, dashboard complet',
    setup: '14.999',
    monthly: '699',
    color: 'amber',
    features: [
      'Până la 5 agenți AI configurați',
      'Dashboard management complet',
      'Organigramă și roluri AI',
      'Bugete și tracking costuri',
      'Rapoarte de performanță',
      'Suport prioritar',
    ],
  },
  {
    key: 'enterprise',
    name: 'ENTERPRISE',
    tagline: '10+ agenți, multi-companie, fără limite',
    setup: '24.999',
    monthly: '1.499',
    color: 'amber',
    popular: true,
    features: [
      'Agenți AI nelimitați (10+)',
      'Suport multi-companie',
      'Integrări custom API',
      'Dashboard avansat cu analytics',
      'Organigramă completă cu raportare',
      'Suport dedicat 12 luni',
    ],
  },
]
```

**Step 3: Verify no build errors**

Run: `cd ~/Developer/apprapid.ro && npm run build 2>&1 | tail -20`
Expected: Build errors for removed `colorMap` references (will fix in Task 3)

**Step 4: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "refactor: replace old AI Employee pricing data with 3-product structure"
```

---

### Task 2: Update Hero CTA text

**Files:**
- Modify: `app/components/AIEmployee.tsx` (Hero section, around line 391)

**Step 1: Update CTA button text**

Change:
```tsx
De la 1.499 RON — plată unică / angajat AI
```
To:
```tsx
Vezi soluțiile AI pentru afacerea ta
```

**Step 2: Update "How it works" Step 3 description**

Change the step 3 description (around line 676) from:
```tsx
'Rulează pe mașina sau serverul tău. Costuri API direct la furnizor — transparent, fără markup. Noi menținem și actualizăm.'
```
To:
```tsx
'Rulează pe infrastructura ta. Noi gestionăm totul — configurare, monitorizare și actualizări continue.'
```

**Step 3: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "fix: update hero CTA and how-it-works text for new pricing model"
```

---

### Task 3: Build the tabbed pricing section

**Files:**
- Modify: `app/components/AIEmployee.tsx` (Section 8: Pricing, lines ~728-815)

**Step 1: Replace entire pricing section**

Remove everything from `{/* SECTION 8: Pricing */}` comment through the closing `</div>` of `id="ai-pachete"`, and replace with:

```tsx
{/* ──────────────────────────────────────────
    SECTION 8: Pricing — 3 Product Tabs
    ────────────────────────────────────────── */}
<div id="ai-pachete">
  <motion.div
    className="text-center mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl md:text-4xl font-black mb-3">
      Alege soluția AI potrivită
    </h3>
    <p className="text-slate-400 max-w-xl mx-auto">
      Trei produse diferite, pentru nevoi diferite. De la agenți autonomi la platforme complete de management AI.
    </p>
  </motion.div>

  {/* Tabs */}
  <div className="flex justify-center mb-10">
    <div className="inline-flex bg-slate-800/60 border border-slate-700 rounded-full p-1 gap-1">
      {[
        { id: 'agents', label: 'Agenți AI' },
        { id: 'team', label: 'Automatizări Echipă' },
        { id: 'platform', label: 'Platformă Business' },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
            activeTab === tab.id
              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>

  {/* Tab Content */}
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {activeTab === 'agents' && <AgentsTab />}
    {activeTab === 'team' && <TeamTab />}
    {activeTab === 'platform' && <PlatformTab />}
  </motion.div>
</div>
```

**Step 2: Add `activeTab` state to the component**

At the top of the `AIEmployee` component function (line ~287), add:

```tsx
const [activeTab, setActiveTab] = useState('agents')
```

**Step 3: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "feat: add tabbed pricing UI shell for 3 AI products"
```

---

### Task 4: Build AgentsTab component

**Files:**
- Modify: `app/components/AIEmployee.tsx` (add before main component)

**Step 1: Add AgentsTab component**

```tsx
function AgentsTab() {
  return (
    <div>
      {/* Model-agnostic badge */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 bg-slate-800/60 border border-violet-500/20 rounded-full px-5 py-2.5">
          <span className="text-xs text-slate-400">Compatibil cu:</span>
          <div className="flex items-center gap-2">
            {['Claude', 'GPT', 'Gemini'].map((model) => (
              <span key={model} className="text-xs font-bold text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-full">
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* API managed badge */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2.5 text-sm text-emerald-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          API inclus — gestionat complet de noi
        </div>
      </div>

      {/* Pricing table */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/30 border border-violet-500/20 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-violet-500/10 px-6 py-4 border-b border-violet-500/20">
            <span className="text-sm font-bold text-violet-300">Nr. Agenți</span>
            <span className="text-sm font-bold text-violet-300 text-center">Setup / agent</span>
            <span className="text-sm font-bold text-violet-300 text-right">Lunar</span>
          </div>
          {/* Rows */}
          {AGENT_PRICING.map((tier, i) => (
            <div
              key={tier.agents}
              className={`grid grid-cols-3 px-6 py-5 items-center ${
                i < AGENT_PRICING.length - 1 ? 'border-b border-slate-700/50' : ''
              } hover:bg-violet-500/5 transition-colors`}
            >
              <span className="text-white font-bold">{tier.agents} agenți</span>
              <div className="text-center">
                <span className="text-2xl font-black text-white">{tier.setupPerAgent}</span>
                <span className="text-slate-400 text-sm ml-1">RON</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-white">{tier.monthly}</span>
                <span className="text-slate-400 text-sm ml-1">RON/lună</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {[
            'Agenți AI care lucrează 24/7 pe infrastructura ta',
            'Model AI ales per sarcină (Claude, GPT, Gemini)',
            'Integrare Google Workspace completă',
            'Rapoarte, reminder-e, verificări automate',
            'Monitorizare și actualizări continue',
            'Suport tehnic dedicat',
          ].map((f) => (
            <div key={f} className="flex items-start gap-2.5 text-slate-300 text-sm">
              <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/40756870425?text=${encodeURIComponent('Bună! Mă interesează Agenți AI Autonomi pentru afacerea mea.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Vreau Agenți AI
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "feat: add AgentsTab with per-agent pricing table"
```

---

### Task 5: Build TeamTab component

**Files:**
- Modify: `app/components/AIEmployee.tsx`

**Step 1: Add TeamTab component**

```tsx
function TeamTab() {
  return (
    <div>
      {/* Subscription note */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 text-sm text-blue-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Abonamentul AI se plătește separat, direct la furnizor
        </div>
      </div>

      {/* Google Workspace badge */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-slate-800/60 border border-blue-500/20 rounded-full px-5 py-2.5 text-sm text-slate-300">
          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Integrare completă Google Workspace (Drive, Gmail, Calendar, Docs)
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TEAM_PACKAGES.map((pkg, idx) => {
          const waText = `Bună! Mă interesează Automatizări de Echipă — pachetul ${pkg.name} (${pkg.setup} RON).`
          return (
            <motion.div
              key={pkg.key}
              className={`relative bg-gradient-to-br from-blue-900/20 to-blue-900/5 border ${
                pkg.popular ? 'border-blue-500/40 ring-1 ring-blue-500/20' : 'border-blue-500/20'
              } hover:border-blue-500/50 rounded-2xl p-6 transition-all flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Recomandat
                  </span>
                </div>
              )}

              <h3 className="text-xl font-black mb-1 mt-1">{pkg.name}</h3>
              <p className="text-slate-500 text-xs mb-5">{pkg.tagline}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-heading font-black text-white">{pkg.setup}</span>
                  <span className="text-slate-400 text-sm">RON</span>
                </div>
                <p className="text-xs mt-1 text-slate-500">setup unic</p>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-lg font-bold text-blue-300">+{pkg.monthly}</span>
                  <span className="text-slate-500 text-sm">RON/lună</span>
                </div>
              </div>

              <a
                href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 block w-full py-3.5 rounded-xl border font-bold text-center text-sm transition-all ${
                  pkg.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
                    : 'bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30 text-blue-300'
                }`}
              >
                Vreau {pkg.name}
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "feat: add TeamTab with Solo/Team/Business pricing cards"
```

---

### Task 6: Build PlatformTab component

**Files:**
- Modify: `app/components/AIEmployee.tsx`

**Step 1: Add PlatformTab component**

```tsx
function PlatformTab() {
  return (
    <div>
      {/* Subscription note */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 text-sm text-amber-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Abonamentele AI se plătesc separat, direct la furnizor
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {PLATFORM_PACKAGES.map((pkg, idx) => {
          const waText = `Bună! Mă interesează Platforma AI Business OS — pachetul ${pkg.name} (${pkg.setup} RON).`
          return (
            <motion.div
              key={pkg.key}
              className={`relative bg-gradient-to-br from-amber-900/20 to-amber-900/5 border ${
                pkg.popular ? 'border-amber-500/40 ring-1 ring-amber-500/20' : 'border-amber-500/20'
              } hover:border-amber-500/50 rounded-2xl p-6 transition-all flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Enterprise
                  </span>
                </div>
              )}

              <h3 className="text-xl font-black mb-1 mt-1">{pkg.name}</h3>
              <p className="text-slate-500 text-xs mb-5">{pkg.tagline}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-heading font-black text-white">{pkg.setup}</span>
                  <span className="text-slate-400 text-sm">RON</span>
                </div>
                <p className="text-xs mt-1 text-slate-500">setup unic</p>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-lg font-bold text-amber-300">+{pkg.monthly}</span>
                  <span className="text-slate-500 text-sm">RON/lună</span>
                </div>
              </div>

              <a
                href={`https://wa.me/40756870425?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 block w-full py-3.5 rounded-xl border font-bold text-center text-sm transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white border-amber-500'
                    : 'bg-amber-500/20 border-amber-500/30 hover:bg-amber-500/30 text-amber-300'
                }`}
              >
                Vreau {pkg.name}
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add app/components/AIEmployee.tsx
git commit -m "feat: add PlatformTab with Business/Enterprise pricing cards"
```

---

### Task 7: Update page metadata

**Files:**
- Modify: `app/ai/page.tsx`

**Step 1: Update metadata**

```tsx
export const metadata: Metadata = {
  title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
  description: 'Agenți AI autonomi, automatizări de echipă și platforme AI Business OS. De la 1.999 RON per agent — soluții AI complete pentru afaceri.',
  openGraph: {
    title: 'AI Employee — Angajați AI pentru afacerea ta | AppRapid.ro',
    description: 'Agenți AI autonomi, automatizări de echipă și platforme AI Business OS. De la 1.999 RON per agent — soluții AI complete pentru afaceri.',
    url: 'https://apprapid.ro/ai',
    siteName: 'AppRapid.ro',
    locale: 'ro_RO',
    type: 'website',
  },
}
```

**Step 2: Commit**

```bash
git add app/ai/page.tsx
git commit -m "fix: update AI Employee page metadata for new pricing"
```

---

### Task 8: Verify build and visual check

**Step 1: Run build**

Run: `cd ~/Developer/apprapid.ro && npm run build 2>&1 | tail -20`
Expected: Build succeeds with no errors

**Step 2: Run dev server and visual check**

Run: `cd ~/Developer/apprapid.ro && npm run dev`
Check: `http://localhost:3000/ai`

Verify:
- [ ] Tabs render and switch correctly
- [ ] Agenți AI tab shows pricing table with 3 tiers
- [ ] Automatizări Echipă tab shows 3 cards (Solo/Team/Business)
- [ ] Platformă Business tab shows 2 cards (Business/Enterprise)
- [ ] WhatsApp links work with correct pre-filled text
- [ ] Mobile responsive — tabs scroll/wrap properly
- [ ] All other sections unchanged

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete AI Employee page redesign with 3-product tabbed pricing"
```
