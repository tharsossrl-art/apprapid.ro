'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhatsAppIcon } from '../components/icons'
import { WHATSAPP_URL } from '../data/constants'
import AnimatedBackground from '../components/AnimatedBackground'
import Navigation from '../components/Navigation'
import MobilePackages from '../components/MobilePackages'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import CookieConsent from '../components/CookieConsent'
import ScrollToTop from '../components/ScrollToTop'
import ScrollAnimations from '../components/ScrollAnimations'
import FAQ from '../components/FAQ'
import LeadFormButton from '../components/LeadFormButton'
import ChatBot from '../components/ChatBot'
import { faqMobile } from '../data/faq'

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Performanță nativă',
    description: 'Aplicația rulează direct pe dispozitiv — viteză maximă, fără întârzieri.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Prezență în magazine',
    description: 'Aplicația ta apare în App Store și Google Play — clienții te găsesc ușor.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: 'Notificări push',
    description: 'Trimite oferte, reminder-e și actualizări direct pe telefonul clientului.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    title: 'Acces hardware',
    description: 'Cameră, GPS, biometrie, NFC — folosește tot ce oferă telefonul.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Securitate maximă',
    description: 'Date criptate, autentificare biometrică, protecție la nivel de sistem.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: 'Actualizări continue',
    description: 'Publici update-uri când vrei — utilizatorii primesc versiunea nouă automat.',
  },
]

const processSteps = [
  { number: '01', title: 'Discuție & Planificare', description: 'Înțelegem afacerea ta, definim funcționalitățile și planificăm fiecare ecran.' },
  { number: '02', title: 'Design UI/UX', description: 'Creăm designul vizual — mockup-uri pentru fiecare ecran, revizuiri până ești mulțumit.' },
  { number: '03', title: 'Dezvoltare', description: 'Construim aplicația, integrăm backend-ul, testăm pe dispozitive reale.' },
  { number: '04', title: 'Testare & QA', description: 'Testare completă pe iOS și Android. Rezolvăm orice problemă înainte de lansare.' },
  { number: '05', title: 'Publicare', description: 'Trimitem aplicația în App Store și Google Play. Ne ocupăm de tot procesul.' },
  { number: '06', title: 'Lansare & Suport', description: 'Aplicația e live! Oferim suport tehnic și actualizări conform pachetului ales.' },
]

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative z-10 min-h-[80vh] flex items-center px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl leading-[1.1] mb-6"
            >
              Afacerea ta,{' '}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                în buzunarul
              </span>
              {' '}clientului.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl"
            >
              Aplicații native pentru iOS și Android — publicate în App Store și Google Play.
              Design profesional, performanță maximă, experiență pe care clienții tăi o merită.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'De la 7.999 RON', sub: 'plată unică',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ),
                  label: 'iOS & Android', sub: 'ambele platforme',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                    </svg>
                  ),
                  label: 'App Store & Play Store', sub: 'publicare inclusă',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  {item.icon}
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#pachete-mobile"
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-xl font-bold text-white transition-all text-center"
              >
                Vezi pachetele →
              </a>
              <a
                href={`${WHATSAPP_URL}?text=Bun%C4%83!%20M%C4%83%20intereseaz%C4%83%20o%20aplica%C8%9Bie%20mobil%C4%83%20(iOS%2FAndroid).`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 hover:border-slate-500 rounded-xl font-bold text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                Discută cu noi
              </a>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            className="flex-shrink-0 flex-1 max-w-xl order-first md:order-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/heroes/mobileappsdesktop.webp"
              alt="Aplicații mobile — iOS și Android"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-2xl hidden md:block"
              priority
            />
            <Image
              src="/heroes/mobileappmobile.webp"
              alt="Aplicații mobile"
              width={540}
              height={960}
              className="w-full h-auto rounded-2xl md:hidden"
              priority
            />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 px-6 py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl mb-4">
              De ce{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                aplicație mobilă?
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              O aplicație nativă oferă experiența pe care clienții tăi o așteaptă.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <MobilePackages />

      {/* Process */}
      <section className="relative z-10 px-6 py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl mb-4">
              Cum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                funcționează
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              De la idee la App Store — în 6 pași simpli.
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/20 flex items-center justify-center">
                  <span className="text-lg font-heading font-medium tracking-wide text-violet-400">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqMobile} />

      {/* CTA — Cere ofertă */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl mb-4">Vrei o ofertă personalizată?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Completează formularul și primești o propunere detaliată în maxim 24 de ore.</p>
          <LeadFormButton product="mobile" />
        </div>
      </section>

      {/* Contact */}
      <Contact />
      <Footer />
      <ChatBot />
      <FloatingWhatsApp />
      <ScrollToTop />
      <CookieConsent />
      <ScrollAnimations />
    </div>
  )
}
