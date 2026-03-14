export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AppRapid.ro',
    alternateName: 'Tharsos SRL',
    url: 'https://apprapid.ro',
    logo: 'https://apprapid.ro/favicon-512.png',
    description: 'Aplicații web moderne pentru afaceri locale din vestul României',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Timișoara',
      addressCountry: 'RO'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40756870425',
      contactType: 'sales',
      email: 'tharsossrl@gmail.com',
      availableLanguage: ['Romanian', 'English']
    },
    sameAs: [
      'https://wa.me/40756870425'
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AppRapid.ro',
    image: 'https://apprapid.ro/favicon-512.png',
    description: 'Dezvoltare aplicații web moderne pentru afaceri locale',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Timișoara',
      addressRegion: 'Timiș',
      addressCountry: 'RO'
    },
    telephone: '+40756870425',
    email: 'tharsossrl@gmail.com',
    url: 'https://apprapid.ro',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Application Development',
    provider: {
      '@type': 'Organization',
      name: 'AppRapid.ro'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pachete dezvoltare web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pachet Starter',
            description: 'Landing page + admin dashboard'
          },
          price: '2999',
          priceCurrency: 'RON'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pachet Business',
            description: 'Funcționalități avansate + integrări'
          },
          price: '6999',
          priceCurrency: 'RON'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pachet Enterprise',
            description: 'Soluții complexe, personalizate'
          },
          price: '14999',
          priceCurrency: 'RON'
        }
      ]
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AppRapid.ro',
    url: 'https://apprapid.ro',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://apprapid.ro/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const aiEmployeeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Employee Configuration',
    provider: {
      '@type': 'Organization',
      name: 'AppRapid.ro'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pachete AI Employee',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Employee Starter',
            description: '1 agent AI configurat, mentenanță 249 RON/lună'
          },
          price: '4499',
          priceCurrency: 'RON'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Employee Business',
            description: '2-3 agenți AI, integrare CRM/API, mentenanță 499 RON/lună'
          },
          price: '14999',
          priceCurrency: 'RON'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Employee Enterprise',
            description: '5+ agenți AI, toate canalele, manager AI dedicat, mentenanță 899 RON/lună'
          },
          price: '24999',
          priceCurrency: 'RON'
        }
      ]
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cât durează să primesc aplicația?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'În funcție de pachet: Vitrină 3-5 zile, Business 5-7 zile, Complet 7-14 zile.'
        }
      },
      {
        '@type': 'Question',
        name: 'Ce este inclus în preț?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prețul include dezvoltarea completă, design responsiv, optimizare SEO, și suport tehnic. Hosting-ul și mentenanța sunt separate.'
        }
      },
      {
        '@type': 'Question',
        name: 'Pot modifica aplicația după livrare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Da, pachetele Business și Complet includ un panou admin intuitiv unde poți edita conținutul singur.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiEmployeeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
