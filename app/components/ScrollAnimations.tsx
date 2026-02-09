'use client'

import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all sections and cards
    const elements = document.querySelectorAll('section, .animate-on-scroll')
    elements.forEach((el) => {
      el.classList.add('animate-on-scroll-init')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
