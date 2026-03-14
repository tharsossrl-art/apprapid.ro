'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

export default function FAQ({ items, title = 'Întrebări frecvente' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`
                  rounded-xl border transition-premium shadow-token-md overflow-hidden
                  ${isOpen
                    ? 'bg-slate-900/90 border-violet-500/60'
                    : 'bg-slate-900/80 border-slate-700 hover:border-slate-600'
                  }
                `}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading text-sm sm:text-base font-semibold pr-4 transition-premium ${isOpen ? 'text-violet-400' : 'text-slate-200'}`}>
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className={`flex-shrink-0 transition-premium ${isOpen ? 'text-violet-400' : 'text-slate-400'}`}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0">
                        <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
