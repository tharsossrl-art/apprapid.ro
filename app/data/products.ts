export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  priceRange: string
  gradient: string
  features: string[]
  ctaLabel: string
  ctaWhatsAppText: string
  deliveryRange: string
}

export const products: Product[] = [
  {
    id: 'aplicatii',
    slug: '/aplicatii',
    name: 'Aplicații Web',
    tagline: 'Mai mult decât un site. Mai simplu decât o aplicație.',
    description: 'Aplicații web instalabile pe telefon, care funcționează offline și trimit notificări push. De la site-uri de prezentare la aplicații complete cu comenzi și rezervări.',
    priceRange: 'de la 2.999 RON',
    gradient: 'from-blue-500 to-emerald-500',
    features: [
      'Admin dashboard inclus',
      'Funcționează ca aplicație',
      'E-commerce & booking',
      'Sistem rezervări & comenzi',
    ],
    ctaLabel: 'Vreau o aplicație web',
    ctaWhatsAppText: 'Bună! Mă interesează o aplicație web (PWA) pentru afacerea mea.',
    deliveryRange: '5-30 zile',
  },
  {
    id: 'mobile',
    slug: '/mobile',
    name: 'Aplicații Mobile',
    tagline: 'Prezent în App Store și Google Play.',
    description: 'Aplicații native iOS și Android, publicate în magazine. Performanță maximă, experiență nativă.',
    priceRange: 'de la 7.999 RON',
    gradient: 'from-violet-500 to-fuchsia-500',
    features: [
      'iOS + Android incluse',
      'Admin dashboard inclus',
      'Publicare App Store & Play Store',
      'Notificări push native',
    ],
    ctaLabel: 'Vreau aplicație mobilă',
    ctaWhatsAppText: 'Bună! Mă interesează o aplicație mobilă (iOS/Android) pentru afacerea mea.',
    deliveryRange: '30-75 zile',
  },
  {
    id: 'ai',
    slug: '/ai',
    name: 'AI Employee',
    tagline: 'Angajați AI care lucrează non-stop pentru tine.',
    description: 'Un angajat AI care auditează date, trimite rapoarte, aplică reguli și urmărește deadline-uri — non-stop, 365 zile/an.',
    priceRange: 'de la 2.499 RON',
    gradient: 'from-violet-500 to-fuchsia-500',
    features: [
      'Lucrează 24/7, 365 zile/an',
      'Rapoarte automate',
      'Integrare Google Workspace',
      'Agenți AI autonomi',
    ],
    ctaLabel: 'Vreau AI Employee',
    ctaWhatsAppText: 'Bună! Mă interesează un AI Employee pentru afacerea mea.',
    deliveryRange: '5-14 zile setup',
  },
]
