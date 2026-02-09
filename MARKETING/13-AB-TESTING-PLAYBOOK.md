# A/B Testing Playbook - AppRapid.ro

## 🧪 Ce este A/B Testing?

Testezi 2 variante (A și B) pentru a vedea care performează mai bine.
**Regula de aur:** Testezi UN SINGUR element la un moment dat.

---

## 🎯 De ce e important?

- **Fără testare:** Ghicești ce funcționează
- **Cu testare:** Știi EXACT ce funcționează
- **Rezultat:** Mai mulți clienți cu același buget

---

## 📊 Framework de testare

### Pasul 1: Ipoteză
"Cred că [SCHIMBARE] va [REZULTAT] pentru că [MOTIV]"

**Exemplu:** "Cred că schimbarea butonului din 'Contactează-ne' în 'Începe acum' va crește click-urile pentru că e mai action-oriented."

### Pasul 2: Metric principal
Ce măsori? (o singură metrică)
- Click-through rate (CTR)
- Conversion rate
- Cost per lead
- Response rate

### Pasul 3: Sample size
Câte date ai nevoie pentru rezultat valid?
- Minim 100 conversii per variantă pentru ads
- Minim 50 răspunsuri per variantă pentru outreach

### Pasul 4: Durată
Cât rulează testul?
- Minim 7 zile pentru ads (să prinzi toate zilele săptămânii)
- Minim 2 săptămâni pentru email/outreach

### Pasul 5: Decizie
- Diferență >20%? → Winner clar
- Diferență 10-20%? → Probabil winner, mai testează
- Diferență <10%? → Nu e semnificativ, alege oricare

---

## 🔬 Ce să testezi (în ordine de impact)

### IMPACT MARE

#### 1. Offer/Ofertă
```
Test A: "Aplicație web de la 249€"
Test B: "Aplicație web - Plată unică, fără abonament"
Test C: "Primii 10 clienți: -20% reducere"
```

#### 2. Headline/Hook
```
Test A: "Transformă-ți afacerea în aplicație"
Test B: "Clienții tăi se pot programa singuri. Tu dormi."
Test C: "Site-ul tău pierde clienți. Uite soluția."
```

#### 3. Audiență (pentru ads)
```
Test A: Interese - Small business owners
Test B: Interese - Specific industry (saloane)
Test C: Lookalike 1% din vizitatori site
```

### IMPACT MEDIU

#### 4. Call to Action (CTA)
```
Test A: "Contactează-ne"
Test B: "Începe acum"
Test C: "Fă quiz-ul gratuit"
Test D: "Vezi prețuri"
```

#### 5. Social Proof
```
Test A: "Peste 50 de clienți mulțumiți"
Test B: "Rating 4.9/5 pe Google"
Test C: "[Client] și-a crescut vânzările cu 40%"
Test D: Fără social proof
```

#### 6. Imagini/Video
```
Test A: Screenshot aplicație
Test B: Poză persoană (tu/echipa)
Test C: Before/After
Test D: Video scurt
```

### IMPACT MIC (dar cumulat contează)

#### 7. Culori buton
```
Test A: Verde (action)
Test B: Albastru (trust)
Test C: Portocaliu (urgență)
```

#### 8. Lungime text
```
Test A: Scurt (2-3 propoziții)
Test B: Mediu (1 paragraf)
Test C: Lung (multiple paragrafe)
```

#### 9. Emoji vs No emoji
```
Test A: "Începe acum 🚀"
Test B: "Începe acum"
```

---

## 📱 A/B Testing pentru Facebook/Instagram Ads

### Setup în Ads Manager:

1. **Campaign level:** Objective (Traffic vs Conversions)
2. **Ad Set level:** Audiență, Placement, Budget
3. **Ad level:** Creative (imagine, text, CTA)

### Testare corectă:

```
GREȘIT:
- Ad Set 1: Audiență A + Imagine A + Text A
- Ad Set 2: Audiență B + Imagine B + Text B
(Nu știi CE a făcut diferența)

CORECT:
Test 1 - Audiențe:
- Ad Set 1: Audiență A + Imagine X + Text X
- Ad Set 2: Audiență B + Imagine X + Text X

Test 2 - Creative (după ce ai winner pe audiență):
- Ad 1: Winner Audiență + Imagine A + Text X
- Ad 2: Winner Audiență + Imagine B + Text X
```

### Budget pentru testare:
- Minim 10-20€/zi per variantă
- Rulează minim 5-7 zile
- Total test: ~100-300€

---

## 📧 A/B Testing pentru Email

### Ce testezi:

#### Subject Line
```
Test A: "Recomandarea ta personalizată de la AppRapid"
Test B: "📱 Am găsit aplicația perfectă pentru tine"
Test C: "[Nume], ai 5 minute?"
```

#### Preview Text
```
Test A: "Vezi ce pachet ți se potrivește..."
Test B: "Rezultatele quiz-ului tău sunt gata"
```

#### Send Time
```
Test A: Marți 10:00
Test B: Joi 14:00
Test C: Sâmbătă 11:00
```

#### CTA în email
```
Test A: Buton "Vezi recomandarea"
Test B: Link text "Click aici să vezi"
Test C: Buton + Link
```

### Metrici email:
- **Open rate** → Testezi Subject line
- **Click rate** → Testezi Content/CTA
- **Reply rate** → Testezi Offer/Ask

---

## 💬 A/B Testing pentru Outreach (DMs)

### Ce testezi:

#### Opening Line
```
Test A: "Salut [Nume]! Am dat peste profilul vostru..."
Test B: "Hey [Nume]! O întrebare rapidă..."
Test C: "Bună! Am o sugestie pentru [Afacere]..."
```

#### Value Proposition
```
Test A: Lead cu audit gratuit
Test B: Lead cu tip/sfat specific
Test C: Lead direct cu ofertă
```

#### CTA în mesaj
```
Test A: "Pot să îți trimit mai multe detalii?"
Test B: "Ai 5 minute pentru un call?"
Test C: "Ce părere ai?"
```

### Tracking outreach A/B:
```
Săptămâna 1: Trimite Script A la 25 prospecți
Săptămâna 2: Trimite Script B la 25 prospecți

Măsoară:
- Response rate
- Positive response rate
- Calls booked
```

---

## 🌐 A/B Testing pentru Website

### Tools gratuite/ieftine:
- **Google Optimize** (gratuit, se închide 2024 - verifică alternativă)
- **Optimizely** (paid)
- **VWO** (paid)
- **Manual:** 50% trafic → Pagina A, 50% → Pagina B

### Ce testezi pe site:

#### Hero Section
```
Test A: Headline focus pe beneficiu
Test B: Headline focus pe pain point
Test C: Headline cu număr/statistică
```

#### Quiz Funnel
```
Test A: Quiz cu 6 întrebări
Test B: Quiz cu 4 întrebări (mai scurt)
Test C: Fără quiz, direct la pachete
```

#### Pagina Prețuri
```
Test A: 3 pachete side by side
Test B: 1 pachet recomandat prominent
Test C: Slider "alege funcționalități"
```

#### Form Contact
```
Test A: Form lung (5+ câmpuri)
Test B: Form scurt (3 câmpuri: nume, email, mesaj)
Test C: Doar buton WhatsApp
```

---

## 📋 Template Documentare Test

### TEST #[NUMĂR]

**Data start:** [DATA]
**Data end:** [DATA]
**Owner:** [CINE]

**Ipoteză:**
[Cred că X va Y pentru că Z]

**Ce testăm:**
- Varianta A: [descriere]
- Varianta B: [descriere]

**Metric principal:**
[CTR / Conversion rate / Response rate / etc.]

**Sample size target:**
[X conversii per variantă]

**Rezultate:**

| Variantă | Impresii/Sends | Clicks/Responses | Rate |
|----------|---------------|------------------|------|
| A | | | |
| B | | | |

**Winner:** [A/B/Inconcluziv]
**Confidence:** [High/Medium/Low]

**Learnings:**
[Ce am învățat din acest test]

**Next steps:**
[Ce testăm în continuare]

---

## 📅 Roadmap Testare (Primele 90 zile)

### Luna 1: Foundation
| Săptămâna | Test | Focus |
|-----------|------|-------|
| 1-2 | Outreach scripts | Opening line |
| 3-4 | Outreach scripts | Value prop |

### Luna 2: Ads
| Săptămâna | Test | Focus |
|-----------|------|-------|
| 1-2 | FB Ads | Audiențe |
| 3-4 | FB Ads | Creative (imagine vs video) |

### Luna 3: Optimization
| Săptămâna | Test | Focus |
|-----------|------|-------|
| 1-2 | FB Ads | Headlines |
| 3-4 | Website | CTA buttons |

---

## ⚠️ Greșeli comune de evitat

1. **Testezi prea multe lucruri odată**
   - GREȘIT: Schimbi headline + imagine + CTA
   - CORECT: Schimbi DOAR headline

2. **Oprești testul prea devreme**
   - GREȘIT: "A câștigă după 2 zile, opresc"
   - CORECT: Așteaptă sample size și min 7 zile

3. **Nu documentezi**
   - GREȘIT: "Parcă B a fost mai bun..."
   - CORECT: Totul în spreadsheet cu date exacte

4. **Ignori rezultatele**
   - GREȘIT: "B a câștigat dar îmi place A mai mult"
   - CORECT: Implementezi winner-ul, indiferent de preferințe

5. **Nu continui să testezi**
   - GREȘIT: "Am găsit ce funcționează, gata"
   - CORECT: Mereu există loc de îmbunătățire
