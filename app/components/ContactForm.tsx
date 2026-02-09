'use client'

import { useState, useEffect } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  package: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle')
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0)

  const RATE_LIMIT_MS = 60000 // 1 minute between submissions

  useEffect(() => {
    const savedTime = localStorage.getItem('lastFormSubmit')
    if (savedTime) {
      setLastSubmitTime(parseInt(savedTime))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Rate limiting check
    const now = Date.now()
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      setSubmitStatus('rate-limited')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`[AppRapid] Cerere nouă de la ${formData.name}`)
      const body = encodeURIComponent(
        `Nume: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefon: ${formData.phone}\n` +
        `Pachet interesat: ${formData.package || 'Nespecificat'}\n\n` +
        `Mesaj:\n${formData.message}`
      )

      // Open email client
      window.location.href = `mailto:tharsossrl@gmail.com?subject=${subject}&body=${body}`

      // Also open WhatsApp as backup
      const whatsappMessage = encodeURIComponent(
        `Bună! Sunt ${formData.name}.\n\n${formData.message}\n\nContact: ${formData.email} / ${formData.phone}`
      )
      window.open(`https://wa.me/40756870425?text=${whatsappMessage}`, '_blank')

      // Update rate limit
      localStorage.setItem('lastFormSubmit', now.toString())
      setLastSubmitTime(now)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '', package: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getRemainingTime = () => {
    const remaining = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSubmitTime)) / 1000)
    return remaining > 0 ? remaining : 0
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Ion Popescu"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="ion@exemplu.ro"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="0712 345 678"
          />
        </div>
        <div>
          <label htmlFor="package" className="block text-sm font-medium text-slate-300 mb-2">
            Pachet de interes
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          >
            <option value="">Selectează...</option>
            <option value="vitrina">Vitrină (1.490 RON)</option>
            <option value="business">Business (2.490 RON)</option>
            <option value="complet">Complet (4.990 RON)</option>
            <option value="altceva">Altceva / Nu știu încă</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Mesaj *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
          placeholder="Spune-ne despre afacerea ta și ce ai nevoie..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm">
          Mesaj trimis! Îți vom răspunde în curând pe email sau WhatsApp.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
          A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct pe WhatsApp.
        </div>
      )}

      {submitStatus === 'rate-limited' && (
        <div className="p-4 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-300 text-sm">
          Așteaptă {getRemainingTime()} secunde înainte de a trimite din nou.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitStatus === 'rate-limited'}
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Se trimite...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Trimite mesajul
          </>
        )}
      </button>

      <p className="text-slate-500 text-xs text-center">
        Prin trimiterea formularului, ești de acord cu{' '}
        <a href="/politica-confidentialitate" className="text-blue-400 hover:underline">
          politica de confidențialitate
        </a>
        .
      </p>
    </form>
  )
}
