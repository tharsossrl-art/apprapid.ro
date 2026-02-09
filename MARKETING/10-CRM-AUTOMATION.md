# CRM și Automatizări pentru Lead Management

## 📊 Setup CRM Simplu (Google Sheets)

### Structură recomandată

**Creează un Google Sheet cu aceste tab-uri:**

---

### Tab 1: "🔍 Lead-uri Noi"
```
Coloane:
A - ID (auto: =ROW()-1)
B - Data găsirii
C - Nume Afacere
D - Industrie (dropdown: Salon/Restaurant/Clinică/Fitness/Altele)
E - Oraș (dropdown: Timișoara/Arad/Oradea/Altele)
F - Google Rating
G - Nr. Reviews
H - Are Website? (dropdown: Da/Nu/Vechi)
I - Are Programări Online? (dropdown: Da/Nu)
J - Instagram (@handle)
K - Facebook (link)
L - Email
M - Telefon
N - Persoană Contact
O - Scor Lead (formula: vezi mai jos)
P - Prioritate (formula: vezi mai jos)
Q - Note
```

**Formula Scor Lead (coloană O):**
```
=IF(H2="Nu",3,IF(H2="Vechi",2,0)) + IF(I2="Nu",2,0) + IF(F2>=4,1,0) + IF(G2>=50,1,0) + IF(D2="Salon",1,IF(D2="Restaurant",1,0)) + IF(E2="Timișoara",1,0)
```

**Formula Prioritate (coloană P):**
```
=IF(O2>=7,"🔥 URGENT",IF(O2>=5,"📧 Săptămâna asta",IF(O2>=3,"📝 Mai târziu","❌ Skip")))
```

---

### Tab 2: "📨 Outreach Tracker"
```
Coloane:
A - ID Lead (referință din Tab 1)
B - Nume Afacere (VLOOKUP din Tab 1)
C - Data Contact
D - Platformă (dropdown: Instagram/Facebook/Email/WhatsApp)
E - Script Folosit (dropdown: Value-First/Compliment/Direct/Referral)
F - Mesaj Trimis (text)
G - Răspuns? (dropdown: Da/Nu/Pending)
H - Data Răspuns
I - Sentiment Răspuns (dropdown: Pozitiv/Neutru/Negativ)
J - Rezumat Răspuns
K - Follow-up Necesar? (dropdown: Da/Nu)
L - Data Follow-up Programat
M - Follow-up Trimis? (checkbox)
N - Status Final (dropdown: În progres/Call programat/Client/Refuzat/Ghost)
```

---

### Tab 3: "📞 Pipeline"
```
Coloane:
A - ID Lead
B - Nume Afacere
C - Persoană Contact
D - Stage (dropdown: Lead/Calificat/Call Programat/Propunere Trimisă/Negociere/Câștigat/Pierdut)
E - Data Stage
F - Pachet Interes (dropdown: Vitrină/Business/Complet/Nu știe)
G - Valoare Potențială
H - Probabilitate % (dropdown: 10%/25%/50%/75%/90%)
I - Valoare Weighted (=G*H)
J - Data Estimată Close
K - Motivul Pierderii (dacă e cazul)
L - Note Conversație
M - Next Action
N - Data Next Action
```

---

### Tab 4: "✅ Clienți"
```
Coloane:
A - ID
B - Nume Afacere
C - Persoană Contact
D - Email
E - Telefon
F - Data Conversie
G - Pachet Cumpărat
H - Valoare
I - Sursă Lead (cum l-am găsit)
J - Testimonial Primit? (checkbox)
K - Data Livrare
L - Hosting Activ? (checkbox)
M - MRR Hosting
N - Referrals Dați
O - Note
```

---

### Tab 5: "📈 Dashboard"
```
Metrici auto-calculate:

SĂPTĂMÂNA CURENTĂ:
- Lead-uri noi găsite: =COUNTIF(...)
- Mesaje trimise: =COUNTIF(...)
- Răspunsuri primite: =COUNTIF(...)
- Calls programate: =COUNTIF(...)
- Response Rate: =răspunsuri/mesaje

LUNA CURENTĂ:
- Lead-uri total:
- Clienți noi:
- Revenue:
- Avg. Deal Size:

TOTAL:
- Clienți totali:
- Revenue total:
- MRR (hosting):
```

---

## 🤖 Automatizări cu Zapier/Make (Gratuite sau Freemium)

### Automatizare 1: Form → Sheet → Notification
```
Trigger: Formular contact completat pe site
Action 1: Adaugă rând în Google Sheet (Tab Pipeline)
Action 2: Trimite notificare WhatsApp/Telegram la tine
Action 3: Trimite email de confirmare la lead
```

### Automatizare 2: Calendar reminder pentru follow-up
```
Trigger: Data follow-up programat = azi (din Sheet)
Action: Trimite reminder pe telefon dimineața
```

### Automatizare 3: Client nou → Onboarding
```
Trigger: Status în Sheet devine "Câștigat"
Action 1: Trimite email de bun venit automat
Action 2: Creează task în Notion/Trello pentru delivery
Action 3: Adaugă în lista de clienți
```

---

## 📱 Setup Notificări (Gratis)

### Opțiunea 1: IFTTT + Telegram
1. Creează bot Telegram (@BotFather)
2. Configurează IFTTT: Google Sheets → Telegram
3. Primești notificare instant când:
   - Vine lead nou
   - Cineva răspunde
   - E timpul de follow-up

### Opțiunea 2: Google Apps Script
```javascript
// Adaugă în Google Sheet: Extensions > Apps Script

function sendDailyReminder() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Outreach Tracker");
  var data = sheet.getDataRange().getValues();
  var today = new Date();
  var reminders = [];

  for (var i = 1; i < data.length; i++) {
    var followupDate = new Date(data[i][11]); // Coloana L
    if (followupDate.toDateString() === today.toDateString() && !data[i][12]) {
      reminders.push(data[i][1]); // Numele afacerii
    }
  }

  if (reminders.length > 0) {
    MailApp.sendEmail({
      to: "tharsossrl@gmail.com",
      subject: "🔔 Follow-up-uri pentru azi",
      body: "Trebuie să faci follow-up la:\n\n" + reminders.join("\n")
    });
  }
}

// Setează trigger zilnic: Triggers > Add Trigger > sendDailyReminder > Daily
```

---

## 📋 Workflow Zilnic cu CRM

### Dimineața (9:00) - 15 min
```
1. ☐ Deschide Dashboard tab
2. ☐ Verifică KPIs de ieri
3. ☐ Citește notificările de follow-up
4. ☐ Planifică ziua
```

### Research time (9:30) - 45 min
```
1. ☐ Deschide Tab "Lead-uri Noi"
2. ☐ Găsește 10-15 prospecți noi
3. ☐ Completează informațiile
4. ☐ Scorul se calculează automat
5. ☐ Sortează după Prioritate
```

### Outreach time (10:30) - 45 min
```
1. ☐ Deschide Tab "Outreach Tracker"
2. ☐ Ia lead-urile cu scor mare
3. ☐ Personalizează și trimite mesaje
4. ☐ Notează în tracker fiecare mesaj
5. ☐ Setează dată follow-up
```

### Check răspunsuri (14:00 & 18:00) - 15 min
```
1. ☐ Verifică Instagram DMs
2. ☐ Verifică Facebook Messages
3. ☐ Verifică Email
4. ☐ Răspunde în maxim 2 ore
5. ☐ Update status în Outreach Tracker
6. ☐ Mută în Pipeline dacă e calificat
```

### Seara (20:00) - 10 min
```
1. ☐ Update Dashboard cu cifrele zilei
2. ☐ Verifică ce e programat pentru mâine
3. ☐ Note pentru ziua următoare
```

---

## 📊 Raportare Săptămânală

### Template raport (completează vineri)

```
RAPORT SĂPTĂMÂNAL - [DATA]

📊 ACTIVITATE:
- Lead-uri noi găsite: X
- Mesaje trimise: X
- Răspunsuri primite: X (Y%)
- Calls efectuate: X
- Propuneri trimise: X

💰 PIPELINE:
- Lead-uri active: X
- Valoare pipeline: X€
- Weighted pipeline: X€

✅ CÂȘTIGURI:
- Clienți noi: X
- Revenue: X€
- Avg deal size: X€

📈 TOP PERFORMERS:
- Cel mai bun canal: [Instagram/Facebook/Email]
- Cel mai bun script: [Script name]
- Cea mai bună industrie: [Saloane/Restaurant/etc]

🎯 NEXT WEEK:
- Obiectiv lead-uri: X
- Obiectiv calls: X
- Focus: [ce vei face diferit]
```
