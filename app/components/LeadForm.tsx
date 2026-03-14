'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon } from './icons'

type Product = 'aplicatii' | 'mobile' | 'ai'

interface LeadFormProps {
  product: Product
  onClose: () => void
}

const PRODUCT_LABELS: Record<Product, string> = {
  aplicatii: 'Aplicații Web',
  mobile: 'Aplicații Mobile',
  ai: 'AI Employee',
}

const INDUSTRY_OPTIONS = [
  'Restaurant / Cafe / Bar',
  'Salon / Beauty / Spa',
  'Clinică / Cabinet medical',
  'Imobiliare',
  'Auto Service / Detailing',
  'Fitness / Sport',
  'E-commerce / Retail',
  'Consultanță / Coaching',
  'Construcții',
  'Altă industrie',
]

const TIMELINE_OPTIONS = [
  { value: 'urgent', label: 'Cât mai repede (1-2 săptămâni)' },
  { value: 'normal', label: 'În 2-4 săptămâni' },
  { value: 'relaxed', label: '1-2 luni' },
  { value: 'flexible', label: 'Flexibil, fără grabă' },
]

const BUDGET_OPTIONS: Record<Product, string[]> = {
  aplicatii: ['Sub 3.000 RON', '3.000 - 7.000 RON', '7.000 - 15.000 RON', 'Peste 15.000 RON'],
  mobile: ['Sub 8.000 RON', '8.000 - 15.000 RON', 'Peste 15.000 RON'],
  ai: ['Sub 5.000 RON', '5.000 - 15.000 RON', '15.000 - 25.000 RON', 'Peste 25.000 RON'],
}

const FEATURE_OPTIONS: Record<Product, { value: string; label: string }[]> = {
  aplicatii: [
    { value: 'booking', label: 'Programări online' },
    { value: 'payments', label: 'Plăți online' },
    { value: 'gallery', label: 'Galerie foto/video' },
    { value: 'menu', label: 'Meniu digital' },
    { value: 'ecommerce', label: 'Magazin online' },
    { value: 'notifications', label: 'Notificări push' },
    { value: 'crm', label: 'CRM / Gestiune clienți' },
    { value: 'multilang', label: 'Multilingv (RO/EN)' },
  ],
  mobile: [
    { value: 'ios', label: 'iOS (App Store)' },
    { value: 'android', label: 'Android (Play Store)' },
    { value: 'push', label: 'Notificări push' },
    { value: 'offline', label: 'Funcționare offline' },
    { value: 'camera', label: 'Acces cameră' },
    { value: 'gps', label: 'Localizare GPS' },
    { value: 'payments', label: 'Plăți în aplicație' },
    { value: 'chat', label: 'Chat / Mesagerie' },
  ],
  ai: [
    { value: 'reports', label: 'Rapoarte automate' },
    { value: 'reminders', label: 'Reminder-e și follow-up' },
    { value: 'data-audit', label: 'Verificare date / audit' },
    { value: 'team-monitor', label: 'Monitorizare echipă' },
    { value: 'scheduling', label: 'Programări automate' },
    { value: 'customer-followup', label: 'Follow-up clienți' },
    { value: 'rules', label: 'Aplicare reguli și proceduri' },
    { value: 'whatsapp', label: 'Integrare WhatsApp/Telegram' },
  ],
}

export default function LeadForm({ product, onClose }: LeadFormProps) {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    business_name: '',
    industry: '',
    contact_name: '',
    email: '',
    phone: '',
    timeline: '',
    budget: '',
    features: [] as string[],
    existing_website: '',
    description: '',
  })

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const toggleFeature = (value: string) => {
    setForm(prev => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter(f => f !== value)
        : [...prev.features, value],
    }))
  }

  const canNext = () => {
    if (step === 0) return form.business_name.trim() && form.industry
    if (step === 1) return form.contact_name.trim() && form.phone.trim()
    if (step === 2) return true
    if (step === 3) return true
    return true
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product,
          business_name: form.business_name,
          industry: form.industry,
          contact_name: form.contact_name,
          email: form.email,
          phone: form.phone,
          timeline: form.timeline,
          budget: form.budget,
          details: {
            features: form.features,
            existing_website: form.existing_website,
            description: form.description,
          },
        }),
      })

      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setError('A apărut o eroare. Te rugăm să încerci din nou.')
    } finally {
      setSubmitting(false)
    }
  }

  const steps = [
    // Step 0: Business info
    <div key="business" className="space-y-4">
      <h3 className="text-lg font-heading font-medium text-white mb-1">Despre afacerea ta</h3>
      <p className="text-sm text-slate-500 mb-4">Spune-ne câteva lucruri despre business</p>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Numele business-ului *</label>
        <input
          type="text"
          value={form.business_name}
          onChange={e => updateField('business_name', e.target.value)}
          placeholder="Ex: Salon Beauty Plus"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Industrie *</label>
        <div className="grid grid-cols-2 gap-2">
          {INDUSTRY_OPTIONS.map(opt => (
            <button
              key={opt}
              onClick={() => updateField('industry', opt)}
              className={`text-left px-3 py-2.5 rounded-lg text-sm border transition-colors ${
                form.industry === opt
                  ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>,

    // Step 1: Contact info
    <div key="contact" className="space-y-4">
      <h3 className="text-lg font-heading font-medium text-white mb-1">Date de contact</h3>
      <p className="text-sm text-slate-500 mb-4">Cum te putem contacta</p>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Numele tău *</label>
        <input
          type="text"
          value={form.contact_name}
          onChange={e => updateField('contact_name', e.target.value)}
          placeholder="Ex: Maria Popescu"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Telefon *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={e => updateField('phone', e.target.value)}
          placeholder="07xx xxx xxx"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={e => updateField('email', e.target.value)}
          placeholder="email@exemplu.com"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>
    </div>,

    // Step 2: Features
    <div key="features" className="space-y-4">
      <h3 className="text-lg font-heading font-medium text-white mb-1">Ce ai nevoie?</h3>
      <p className="text-sm text-slate-500 mb-4">Selectează funcționalitățile care te interesează</p>

      <div className="grid grid-cols-2 gap-2">
        {FEATURE_OPTIONS[product].map(opt => (
          <button
            key={opt.value}
            onClick={() => toggleFeature(opt.value)}
            className={`text-left px-3 py-2.5 rounded-lg text-sm border transition-colors flex items-center gap-2 ${
              form.features.includes(opt.value)
                ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
            }`}
          >
            <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
              form.features.includes(opt.value)
                ? 'bg-violet-500 border-violet-500'
                : 'border-slate-600'
            }`}>
              {form.features.includes(opt.value) && (
                <CheckIcon className="w-3 h-3 text-white" />
              )}
            </div>
            {opt.label}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Descriere suplimentară</label>
        <textarea
          value={form.description}
          onChange={e => updateField('description', e.target.value)}
          placeholder="Detalii adiționale despre ce ai nevoie..."
          rows={3}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
        />
      </div>
    </div>,

    // Step 3: Timeline & budget
    <div key="timeline" className="space-y-4">
      <h3 className="text-lg font-heading font-medium text-white mb-1">Termen și buget</h3>
      <p className="text-sm text-slate-500 mb-4">Ne ajută să-ți oferim cea mai bună propunere</p>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Când ai nevoie?</label>
        <div className="space-y-2">
          {TIMELINE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => updateField('timeline', opt.value)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors ${
                form.timeline === opt.value
                  ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Buget orientativ</label>
        <div className="space-y-2">
          {BUDGET_OPTIONS[product].map(opt => (
            <button
              key={opt}
              onClick={() => updateField('budget', opt)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors ${
                form.budget === opt
                  ? 'bg-violet-500/20 border-violet-500/50 text-violet-300'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Website existent</label>
        <input
          type="url"
          value={form.existing_website}
          onChange={e => updateField('existing_website', e.target.value)}
          placeholder="https://... (dacă ai)"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>
    </div>,
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-black/50"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 px-6 py-4 flex items-center justify-between z-10">
            <div>
              <h2 className="text-lg font-heading font-medium text-white">
                Cere ofertă — {PRODUCT_LABELS[product]}
              </h2>
              {!submitted && (
                <p className="text-xs text-slate-500 mt-0.5">
                  Pasul {step + 1} din {steps.length}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          {!submitted && (
            <div className="px-6 pt-4">
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="px-6 py-5">
            {submitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-heading font-medium text-white mb-2">
                  Mulțumim!
                </h3>
                <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
                  Am primit cererea ta. Te vom contacta în maxim 24 de ore cu o ofertă personalizată.
                </p>
                <button
                  onClick={onClose}
                  className="bg-violet-500/20 border border-violet-500/30 text-violet-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-violet-500/30 transition-colors"
                >
                  Închide
                </button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {steps[step]}
                </motion.div>
              </AnimatePresence>
            )}

            {error && (
              <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
          </div>

          {/* Footer buttons */}
          {!submitted && (
            <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => step > 0 ? setStep(step - 1) : onClose()}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {step > 0 ? '← Înapoi' : 'Anulează'}
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canNext()}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-cta-glow-violet transition-premium"
                >
                  Continuă →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium disabled:opacity-60 hover:shadow-cta-glow-violet transition-premium flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    'Trimite cererea'
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
