export interface FAQItem {
  question: string
  answer: string
}

export const faqAplicatii: FAQItem[] = [
  {
    question: 'Cât durează dezvoltarea unei aplicații web?',
    answer: 'Depinde de complexitate. O aplicație Starter se livrează în 5-10 zile, Business în 15-20, Enterprise în 20-30 zile lucrătoare.',
  },
  {
    question: 'Ce primesc concret în pachetul Starter?',
    answer: 'O aplicație web completă cu design responsive, panou admin, funcționalitate offline (PWA), și instalare pe telefon ca o aplicație nativă. Totul personalizat pe brandul tău.',
  },
  {
    question: 'Pot să-mi actualizez pachetul ulterior?',
    answer: 'Da, poți trece oricând de la Starter la Business sau Enterprise. Plătești doar diferența de preț.',
  },
  {
    question: 'Am nevoie de hosting separat?',
    answer: 'Oferim hosting inclus sau ca serviciu separat (Standard 149 RON/lună, Premium 299 RON/lună). Hosting-ul include SSL, backup-uri și monitorizare.',
  },
  {
    question: 'Ce se întâmplă după livrare? Primesc suport?',
    answer: 'Da, fiecare pachet include o perioadă de suport post-livrare. Pentru suport continuu, oferim pachete de mentenanță lunară.',
  },
  {
    question: 'Aplicația funcționează și pe telefon?',
    answer: 'Da, toate aplicațiile noastre sunt PWA — se instalează pe telefon, funcționează offline și arată ca o aplicație nativă.',
  },
]

export const faqMobile: FAQItem[] = [
  {
    question: 'Aplicația va fi disponibilă pe App Store și Google Play?',
    answer: 'Da, pachetele noastre includ publicarea pe ambele platforme. Ne ocupăm de tot procesul de submisie.',
  },
  {
    question: 'Cât durează dezvoltarea?',
    answer: 'Standard: 30-45 zile, Advanced: 45-75 zile lucrătoare, în funcție de complexitate.',
  },
  {
    question: 'Am deja o aplicație web. Pot face și mobilă?',
    answer: 'Da, oferim pachete speciale PWA Add-On: Standard Add-On la 4.999 RON și Advanced Add-On la 9.999 RON, care transformă aplicația web în aplicație mobilă.',
  },
  {
    question: 'Ce platforme suportați?',
    answer: 'Dezvoltăm pentru iOS și Android simultan folosind React Native — o singură codebase, două platforme.',
  },
  {
    question: 'Cine se ocupă de actualizări după lansare?',
    answer: 'Noi. Fiecare pachet include suport și actualizări. Te concentrezi pe afacere, noi ne ocupăm de tehnologie.',
  },
]

export const faqAI: FAQItem[] = [
  {
    question: 'Ce este exact un AI Employee?',
    answer: 'Un angajat digital configurat pe afacerea ta. Nu e un chatbot generic — știe procedurile, echipa, regulile tale și lucrează non-stop.',
  },
  {
    question: 'Cum funcționează practic?',
    answer: 'Îl configurăm pe bazinele tale de lucru. Verifică date, trimite rapoarte, face follow-up, aplică reguli — tot ce-i spui, automat.',
  },
  {
    question: 'Este sigur? Datele mele sunt protejate?',
    answer: 'Da, totul rulează pe infrastructura ta. Datele nu pleacă nicăieri. Nu folosim servicii terțe pentru stocarea informațiilor tale.',
  },
  {
    question: 'Cât durează configurarea?',
    answer: 'Între 5 și 14 zile, în funcție de complexitate. Starter (1 agent) se configurează mai rapid.',
  },
  {
    question: 'Pot să-l testez înainte să cumpăr?',
    answer: 'Da, oferim o demonstrație live pe un scenariu real din afacerea ta. Scrie-ne pe WhatsApp.',
  },
  {
    question: 'Ce se întâmplă dacă am nevoie de mai mulți agenți?',
    answer: 'Poți trece oricând la un pachet superior. Business (2-3 agenți) sau Enterprise (5+ agenți).',
  },
]
