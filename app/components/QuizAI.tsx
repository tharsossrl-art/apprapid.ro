'use client'

import { useState } from 'react'

type PackageKey = 'starter' | 'business' | 'enterprise'

interface QuizOption {
  value: string
  label: string
  desc?: string
  points: Record<PackageKey, number>
}

interface QuizQuestion {
  id: string
  question: string
  subtitle: string
  options: QuizOption[]
}

export default function QuizAI() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, QuizOption>>({})
  const [showResult, setShowResult] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const questions: QuizQuestion[] = [
    {
      id: 'business_type',
      question: 'Ce tip de afacere ai?',
      subtitle: 'Selectează categoria care ți se potrivește cel mai bine',
      options: [
        { value: 'salon', label: 'Salon / Frizerie / Beauty', points: { starter: 2, business: 3, enterprise: 0 } },
        { value: 'restaurant', label: 'Restaurant / Cafenea / Bar', points: { starter: 1, business: 3, enterprise: 1 } },
        { value: 'clinic', label: 'Clinică / Cabinet medical', points: { starter: 1, business: 3, enterprise: 1 } },
        { value: 'fitness', label: 'Sală fitness / Yoga / PT', points: { starter: 2, business: 3, enterprise: 0 } },
        { value: 'services', label: 'Servicii (foto, makeup, etc)', points: { starter: 3, business: 1, enterprise: 0 } },
        { value: 'retail', label: 'Magazin / Retail', points: { starter: 1, business: 3, enterprise: 1 } },
        { value: 'chain', label: 'Rețea / Franciză / Multi-locație', points: { starter: 0, business: 1, enterprise: 3 } },
        { value: 'other', label: 'Altceva', points: { starter: 1, business: 2, enterprise: 1 } }
      ]
    },
    {
      id: 'main_need',
      question: 'Ce ai nevoie cel mai mult?',
      subtitle: 'Care e problema principală pe care vrei să o rezolvi?',
      options: [
        { value: 'presence', label: 'Prezență online profesională', desc: 'Să mă găsească clienții pe Google', points: { starter: 3, business: 1, enterprise: 0 } },
        { value: 'bookings', label: 'Sistem de programări online', desc: 'Clienții să se programeze singuri 24/7', points: { starter: 1, business: 3, enterprise: 0 } },
        { value: 'orders', label: 'Comenzi și vânzări online', desc: 'Vânzare produse, meniu digital, livrare', points: { starter: 0, business: 3, enterprise: 1 } },
        { value: 'management', label: 'Management complet al afacerii', desc: 'CRM, echipă, rapoarte, automatizări', points: { starter: 0, business: 1, enterprise: 3 } },
        { value: 'custom_platform', label: 'Platformă sau aplicație complexă', desc: 'SaaS, marketplace, integrări API', points: { starter: 0, business: 0, enterprise: 3 } }
      ]
    },
    {
      id: 'current_situation',
      question: 'Ce ai în momentul de față?',
      subtitle: 'Spune-ne de unde pornim',
      options: [
        { value: 'nothing', label: 'Nimic online', desc: 'Doar Facebook/Instagram', points: { starter: 3, business: 1, enterprise: 0 } },
        { value: 'old_site', label: 'Un site vechi', desc: 'Arată depășit, nu merge pe mobil', points: { starter: 2, business: 2, enterprise: 0 } },
        { value: 'good_site', label: 'Un site OK', desc: 'Dar fără programări sau comenzi', points: { starter: 1, business: 3, enterprise: 0 } },
        { value: 'existing_system', label: 'Sisteme multiple, neintegrate', desc: 'Site + Excel + altceva, nimic legat', points: { starter: 0, business: 1, enterprise: 3 } }
      ]
    },
    {
      id: 'clients_per_month',
      question: 'Câți clienți ai aproximativ pe lună?',
      subtitle: 'Ne ajută să înțelegem dimensiunea afacerii',
      options: [
        { value: 'small', label: 'Sub 50 clienți', points: { starter: 3, business: 1, enterprise: 0 } },
        { value: 'medium', label: '50 - 200 clienți', points: { starter: 1, business: 3, enterprise: 0 } },
        { value: 'large', label: '200 - 500 clienți', points: { starter: 0, business: 2, enterprise: 2 } },
        { value: 'enterprise', label: 'Peste 500 clienți', points: { starter: 0, business: 0, enterprise: 3 } }
      ]
    },
    {
      id: 'budget',
      question: 'Care e bugetul tău aproximativ?',
      subtitle: 'Fără obligații - doar pentru recomandare',
      options: [
        { value: 'low', label: 'Sub 4.000 RON', points: { starter: 3, business: 0, enterprise: 0 } },
        { value: 'medium', label: '4.000 - 10.000 RON', points: { starter: 0, business: 3, enterprise: 0 } },
        { value: 'high', label: '10.000 - 20.000 RON', points: { starter: 0, business: 1, enterprise: 3 } },
        { value: 'premium', label: 'Peste 20.000 RON', points: { starter: 0, business: 0, enterprise: 3 } }
      ]
    },
    {
      id: 'timeline',
      question: 'Când ai nevoie de aplicație?',
      subtitle: 'Livrăm în 5-60 zile în funcție de pachet',
      options: [
        { value: 'urgent', label: 'Cât mai repede posibil', desc: 'În mai puțin de o săptămână', points: { starter: 3, business: 1, enterprise: 0 } },
        { value: 'soon', label: 'În următoarele 2-3 săptămâni', points: { starter: 1, business: 3, enterprise: 0 } },
        { value: 'flexible', label: 'Am timp, vreau calitate', desc: 'Poate dura și o lună', points: { starter: 0, business: 1, enterprise: 2 } },
        { value: 'planning', label: 'Doar mă informez deocamdată', points: { starter: 1, business: 1, enterprise: 1 } }
      ]
    }
  ]

  const packages: Record<PackageKey, { name: string; price: string; color: string; tagline: string }> = {
    starter: { name: 'STARTER', price: '2.999 RON', color: 'emerald', tagline: 'Prezența ta digitală completă' },
    business: { name: 'BUSINESS', price: '6.999 RON', color: 'blue', tagline: 'Tot ce-ți trebuie să vinzi și să crești' },
    enterprise: { name: 'ENTERPRISE', price: '14.999+ RON', color: 'purple', tagline: 'Proiecte complexe, soluții enterprise' }
  }

  const handleAnswer = (questionId: string, option: QuizOption) => {
    const newAnswers = { ...answers, [questionId]: option }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setIsAnalyzing(true)
      setTimeout(() => {
        setIsAnalyzing(false)
        setShowResult(true)
      }, 2000)
    }
  }

  const calculateResult = (): PackageKey => {
    const scores: Record<PackageKey, number> = { starter: 0, business: 0, enterprise: 0 }
    Object.values(answers).forEach(answer => {
      if (answer.points) {
        (Object.keys(scores) as PackageKey[]).forEach(key => {
          scores[key] += answer.points[key]
        })
      }
    })
    const maxScore = Math.max(...Object.values(scores))
    // Priority: higher tiers win ties (better upsell)
    if (scores.enterprise === maxScore) return 'enterprise'
    if (scores.business === maxScore) return 'business'
    return 'starter'
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
    setIsAnalyzing(false)
  }

  const progress = ((currentStep + 1) / questions.length) * 100
  const currentQuestion = questions[currentStep]
  const recommendedPackage = showResult ? calculateResult() : null
  const recommended = recommendedPackage ? packages[recommendedPackage] : null

  if (isAnalyzing) {
    return (
      <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
          <div className="absolute inset-2 bg-blue-500/40 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Analizăm răspunsurile...</h3>
        <p className="text-slate-400">AI-ul nostru găsește pachetul perfect pentru tine</p>
        <div className="mt-8 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
          ))}
        </div>
      </div>
    )
  }

  if (showResult && recommended) {
    const colorClasses: Record<string, string> = {
      emerald: 'from-emerald-500 to-teal-600',
      blue: 'from-blue-500 to-indigo-600',
      purple: 'from-purple-500 to-violet-600',
    }

    return (
      <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 md:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Analiză completă
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Recomandarea noastră</h3>
        </div>

        <div className={`bg-gradient-to-br ${colorClasses[recommended.color]} rounded-2xl p-6 md:p-8 mb-6`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <div className="text-white/80 text-sm font-medium mb-1">Pachet recomandat</div>
              <h4 className="text-3xl font-black text-white">{recommended.name}</h4>
              <p className="text-white/80">{recommended.tagline}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-heading font-black text-white">{recommended.price}</div>
              <div className="text-white/70 text-sm">plată unică</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={`https://wa.me/40756870425?text=${encodeURIComponent(`Bună! Am completat quiz-ul și vreau pachetul ${recommended.name} (${recommended.price}). Putem discuta?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white text-slate-900 py-4 px-6 rounded-xl font-bold text-center hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Vreau acest pachet
            </a>
            <button onClick={resetQuiz} className="flex-1 sm:flex-none bg-white/10 text-white py-4 px-6 rounded-xl font-bold hover:bg-white/20 transition-colors">
              Refă testul
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm mb-3">Sau vezi celelalte opțiuni:</p>
          <a href="#pachete" className="text-blue-400 hover:text-blue-300 font-medium">
            Vezi toate pachetele →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 md:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
          <span>Întrebarea {currentStep + 1} din {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{currentQuestion.question}</h3>
        <p className="text-slate-400">{currentQuestion.subtitle}</p>
      </div>

      <div className="grid gap-3 max-w-2xl mx-auto">
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(currentQuestion.id, option)}
            className="group w-full p-4 md:p-5 rounded-xl border-2 border-slate-700 bg-slate-800/50 text-left transition-all duration-300 hover:border-blue-500 hover:bg-slate-800 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="font-bold text-white group-hover:text-blue-300 transition-colors">{option.label}</div>
                {option.desc && <div className="text-sm text-slate-400 mt-0.5">{option.desc}</div>}
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-slate-600 group-hover:border-blue-400 flex-shrink-0"></div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
        <button
          onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${currentStep === 0 ? 'text-slate-600' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Înapoi
        </button>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentStep ? 'bg-blue-500 w-6' : i < currentStep ? 'bg-emerald-500' : 'bg-slate-600'}`}></div>
          ))}
        </div>
        <div className="w-20"></div>
      </div>
    </div>
  )
}
