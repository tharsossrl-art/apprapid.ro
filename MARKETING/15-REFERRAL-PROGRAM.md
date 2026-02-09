# Referral Program - AppRapid.ro

## 🎯 De ce Referral Program?

- **CAC (Cost Acquisition) aproape 0** - Clienții aduc clienți
- **Trust deja construit** - Recomandarea vine de la cineva de încredere
- **Calitate lead-uri** - Referrals au rată de conversie 3-5x mai mare
- **LTV mai mare** - Clienții din referral rămân mai mult

---

## 💰 Structura programului

### Opțiunea 1: Cash Reward
```
PENTRU CEL CARE RECOMANDĂ:
- 50€ cash pentru fiecare client adus
- SAU 1 lună hosting gratuit (valoare 25€)
- SAU upgrade gratuit la funcționalități (valoare până la 100€)

PENTRU CEL RECOMANDAT:
- 10% reducere la orice pachet
- SAU Setup Google My Business gratuit (valoare 50€)
```

### Opțiunea 2: Tiered Rewards
```
PENTRU CEL CARE RECOMANDĂ:

Nivel 1 (primul referral):
→ 30€ credit sau 1 lună hosting gratuit

Nivel 2 (2-3 referrals):
→ 50€ per referral

Nivel 3 (4+ referrals):
→ 75€ per referral + status "Partner"

BONUS: La al 5-lea referral = 1 funcționalitate custom gratuită
```

### Opțiunea 3: Double-Sided Reward
```
"Dă 50€, Primește 50€"

Clientul existent: 50€ credit pentru următorul proiect/hosting
Clientul nou: 50€ reducere la primul proiect

WIN-WIN pentru amândoi.
```

---

## 📋 Termeni și Condiții

### Cine poate participa:
- Orice client activ care a plătit cel puțin un proiect
- Plata completă efectuată (nu în rate)

### Ce contează ca referral valid:
- Clientul recomandat menționează numele celui care l-a trimis
- SAU folosește link/cod unic de referral
- Clientul recomandat plătește integral un pachet
- Proiectul este livrat cu succes

### Când se plătește reward-ul:
- După ce clientul recomandat plătește integral
- În maxim 7 zile de la plată
- Transfer bancar sau credit pe factură

### Restricții:
- Nu poți recomanda membri ai familiei (grad 1)
- Nu poți recomanda angajați ai propriei firme
- Maximum 10 referrals per lună (pentru a preveni abuzuri)
- AppRapid își rezervă dreptul de a modifica programul

---

## 🔗 Sistem de tracking

### Opțiunea A: Link unic de referral
```
Fiecare client primește link unic:
apprapid.ro/?ref=NUME_CLIENT

sau

apprapid.ro/r/CODCLIENT
```

**Implementare Next.js:**
```javascript
// În page.tsx sau middleware
const searchParams = useSearchParams()
const ref = searchParams.get('ref')
if (ref) {
  localStorage.setItem('referral_code', ref)
  // Track în analytics
}
```

### Opțiunea B: Cod de referral
```
Fiecare client primește cod:
"MARIA50" - Maria primește credit când cineva folosește codul

În formularul de contact/quiz:
"Ai un cod de recomandare? [__________]"
```

### Opțiunea C: Manual (pentru început)
```
În mesajul inițial, întreabă:
"Cum ai aflat de noi?"
"Te-a recomandat cineva?"

Notează în CRM și oferă reward-ul manual.
```

---

## 📧 Comunicare Referral Program

### Email 1: După livrare proiect (Ziua 0)
```
Subiect: Aplicația ta e gata! 🎉 + O surpriză pentru tine

Salut [Nume],

Felicitări! Aplicația ta e live și gata de treabă.

Avem și o surpriză pentru tine:

🎁 PROGRAM DE RECOMANDĂRI

Pentru fiecare prieten cu afacere pe care ni-l recomanzi și devine client:
→ TU primești: 50€ (cash sau credit)
→ EL/EA primește: 10% reducere

Cum funcționează:
1. Trimite-le link-ul tău unic: apprapid.ro/?ref=[COD]
2. Sau spune-le să menționeze numele tău când ne contactează
3. Când plătesc, tu primești reward-ul în 7 zile

Cunoști pe cineva care ar avea nevoie de o aplicație?
(saloane, restaurante, clinici, freelanceri...)

Mulțumim că ești clientul nostru!

Echipa AppRapid
```

### Email 2: Follow-up la 2 săptămâni
```
Subiect: Cunoști pe cineva care ar avea nevoie de asta? 🤔

Hey [Nume],

Cum merge aplicația? Sperăm că îți aduce clienți noi!

Te-am contactat pentru că suntem curioși:
Cunoști pe cineva (prieten, cunoscut, vecin cu afacere) care se luptă cu:

❌ Telefoane pentru programări
❌ Site vechi sau inexistent
❌ Lipsa comenzilor online

Dacă da, trimite-i link-ul tău: apprapid.ro/?ref=[COD]

Tu primești 50€ pentru fiecare client.
El/ea primește 10% reducere.

Doar să știi că opțiunea există 😊

Cu drag,
Echipa AppRapid
```

### Email 3: Reminder lunar
```
Subiect: 💰 Reminder: 50€ pentru fiecare recomandare

Hey [Nume],

Quick reminder:
Programul nostru de recomandări e încă activ!

Situația ta:
- Referrals până acum: [X]
- Earnings: [Y]€

Link-ul tău: apprapid.ro/?ref=[COD]

Cunoști pe cineva? Forward this email 😊

Cheers,
Echipa AppRapid
```

---

## 📱 Assets pentru referral

### Mesaj pentru WhatsApp (client să dea forward)
```
Hey! 👋

Am făcut recent o aplicație web pentru [afacerea mea] și sunt super mulțumit/ă.

O firmă din Timișoara - AppRapid.ro

Dacă ai nevoie de:
✅ Site modern care se încarcă instant
✅ Programări online
✅ Comenzi online
✅ Meniu digital

Prețurile încep de la 249€, gata în câteva zile.

Spune-le că te-am trimis eu și primești 10% reducere.
Link: apprapid.ro/?ref=[COD]
```

### Imagine pentru stories (template Canva)
```
[Design cu]:
- Logo AppRapid
- "Recomandă un prieten"
- "Tu primești 50€ | El primește 10% off"
- Link/QR code
```

### Post pentru clientul să share
```
[Client postează pe Stories/Feed]:

"Tocmai mi-am făcut aplicație pentru [Afacere] cu @apprapid.ro 🚀

Dacă ai o afacere și ai nevoie de:
- Programări online
- Meniu digital
- Site modern

Scrie-le și spune că vin de la mine - primești 10% reducere!

#AppRapid #AfaceriTimisoara"
```

---

## 📊 Tracking în CRM

### Tab nou în Google Sheet: "🎁 Referrals"

| Referrer (cine recomandă) | Cod Referral | Referred (recomandat) | Data | Pachet | Valoare | Status | Reward plătit | Data plată |
|--------------------------|--------------|----------------------|------|--------|---------|--------|---------------|------------|
| Maria - Salon Bella | MARIA50 | Ion - Pizzeria Roma | 01/02 | Business | 499€ | Plătit | Da - 50€ | 08/02 |

### Dashboard referral (în tab Dashboard):
```
REFERRAL PROGRAM STATS:

Total referrals: X
Converted: Y (Z%)
Total rewards paid: W€
Revenue from referrals: V€
ROI program: (V-W)/W * 100 = %
```

---

## 🚀 Lansare Referral Program

### Pre-lansare (1 săptămână înainte):
- [ ] Pregătește toate materialele (emails, assets)
- [ ] Setup tracking (link-uri, CRM)
- [ ] Testează flow-ul complet
- [ ] Pregătește buget pentru rewards

### Lansare:
- [ ] Email către toți clienții existenți
- [ ] Post pe social media
- [ ] Update website cu pagină dedicată (opțional)
- [ ] Mention în onboarding-ul noilor clienți

### Post-lansare (ongoing):
- [ ] Email de follow-up la 2 săptămâni post-proiect
- [ ] Reminder lunar pentru clienții activi
- [ ] Plătește rewards prompt (sub 7 zile)
- [ ] Celebrează public pe social (cu acordul lor)

---

## 💡 Idei pentru boost referrals

### 1. Referral Contest (temporar)
```
"Luna aceasta: Top 3 referrers câștigă:
🥇 Loc 1: Upgrade gratuit la pachet
🥈 Loc 2: 3 luni hosting gratuit
🥉 Loc 3: 1 lună hosting gratuit"
```

### 2. Double Reward Weekend
```
"Doar în weekend:
Reward dublu pentru referrals!
50€ → 100€"
```

### 3. Referral Milestone Bonus
```
"5 referrals = Status PARTNER
- 75€ per referral (în loc de 50€)
- Badge pe site în secțiunea parteneri
- Acces early la funcționalități noi"
```

### 4. Industry-specific push
```
"Luna aceasta: Focus pe RESTAURANTE
Bonus 25€ extra pentru orice referral din HoReCa"
```

---

## 📈 Metrici de urmărit

| Metric | Formula | Target |
|--------|---------|--------|
| Referral rate | Clienți care aduc referral / Total clienți | >20% |
| Conversion rate referrals | Referrals convertiți / Referrals total | >40% |
| Avg rewards paid | Total rewards / Nr referrals | <60€ |
| CAC from referrals | Rewards / Clienți din referrals | <100€ |
| % revenue from referrals | Revenue referrals / Revenue total | >30% (target) |
| Time to referral | Zile de la client la primul referral | <30 zile |
