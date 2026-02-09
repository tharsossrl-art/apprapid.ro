# Instrucțiuni Setup CRM în Google Sheets

## 🚀 Pași de urmat

### Pasul 1: Creează Google Sheet nou
1. Deschide [Google Sheets](https://sheets.google.com)
2. Click **Blank** pentru spreadsheet nou
3. Redenumește: **"AppRapid CRM"**

---

### Pasul 2: Importă fișierele CSV

Pentru fiecare fișier CSV din acest folder:

1. În Google Sheet, creează un tab nou (click pe **+** jos)
2. Redenumește tab-ul:
   - `01-Lead-uri-Noi.csv` → Tab: **"🔍 Lead-uri Noi"**
   - `02-Outreach-Tracker.csv` → Tab: **"📨 Outreach"**
   - `03-Pipeline.csv` → Tab: **"📊 Pipeline"**
   - `04-Clienti.csv` → Tab: **"✅ Clienți"**
   - `05-Dashboard-Template.csv` → Tab: **"📈 Dashboard"**
   - `06-Hashtags-Locations.csv` → Tab: **"#️⃣ Hashtags"**
   - `07-Scripts-Reference.csv` → Tab: **"📝 Scripts"**

3. Pentru import:
   - **File → Import → Upload**
   - Selectează fișierul CSV
   - Import location: **"Insert new sheet"** sau **"Replace current sheet"**
   - Separator: **Comma**
   - Click **Import data**

---

### Pasul 3: Adaugă Dropdown-uri (Data Validation)

**În tab-ul "🔍 Lead-uri Noi":**

**Coloana D (Industrie):**
1. Selectează coloana D (fără header)
2. Data → Data validation
3. Criteria: **List of items**
4. Items: `Salon,Restaurant,Clinica,Fitness,Servicii,Altele`

**Coloana E (Oraș):**
- Items: `Timișoara,Arad,Oradea,Lugoj,Reșița,Altele`

**Coloana H (Are Website):**
- Items: `Da,Nu,Vechi`

**Coloana I (Are Programări):**
- Items: `Da,Nu`

**În tab-ul "📨 Outreach":**

**Coloana D (Platformă):**
- Items: `Instagram,Facebook,Email,WhatsApp,Telefon`

**Coloana E (Script Folosit):**
- Items: `Value-First,Compliment,Direct,Trigger,Referral,Professional,Audit,Social Proof`

**Coloana G (Răspuns):**
- Items: `Da,Nu,Pending`

**Coloana I (Sentiment):**
- Items: `Pozitiv,Neutru,Negativ`

**Coloana N (Status Final):**
- Items: `În progres,Call programat,Propunere trimisă,Client,Refuzat,Ghost`

---

### Pasul 4: Adaugă Formulele

**În tab-ul "🔍 Lead-uri Noi":**

**Coloana O (Scor Lead)** - În celula O2, pune:
```
=IF(H2="Nu",3,IF(H2="Vechi",2,0))+IF(I2="Nu",2,0)+IF(F2>=4,1,0)+IF(G2>=50,1,0)+IF(OR(D2="Salon",D2="Restaurant"),1,0)+IF(E2="Timișoara",1,0)
```
Apoi trage formula în jos pentru toate rândurile.

**Coloana P (Prioritate)** - În celula P2, pune:
```
=IF(O2>=7,"🔥 URGENT",IF(O2>=5,"📧 Săptămâna asta",IF(O2>=3,"📝 Mai târziu","❌ Skip")))
```

---

### Pasul 5: Formatare

**Culori pentru Prioritate (Conditional Formatting):**
1. Selectează coloana P
2. Format → Conditional formatting
3. Adaugă reguli:
   - Text contains "URGENT" → Background: Red
   - Text contains "Săptămâna" → Background: Yellow
   - Text contains "Mai târziu" → Background: Light gray
   - Text contains "Skip" → Background: Dark gray

**Header-uri:**
1. Selectează rândul 1
2. Format → Bold
3. Format → Background color → Dark blue
4. Format → Text color → White
5. View → Freeze → 1 row

---

### Pasul 6: Setup Notificări (Opțional)

**Google Apps Script pentru reminder zilnic:**

1. Extensions → Apps Script
2. Șterge codul existent
3. Paste codul de mai jos:

```javascript
function sendDailyReminder() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("📨 Outreach");
  var data = sheet.getDataRange().getValues();
  var today = new Date();
  today.setHours(0,0,0,0);
  var reminders = [];

  for (var i = 1; i < data.length; i++) {
    var followupDate = new Date(data[i][11]); // Coloana L (Data Follow-up)
    followupDate.setHours(0,0,0,0);

    if (followupDate.getTime() === today.getTime() && data[i][12] !== true) {
      reminders.push("• " + data[i][1]); // Numele afacerii
    }
  }

  if (reminders.length > 0) {
    MailApp.sendEmail({
      to: "tharsossrl@gmail.com",
      subject: "🔔 Follow-up-uri pentru azi - AppRapid CRM",
      body: "Bună dimineața!\n\nTrebuie să faci follow-up azi la:\n\n" + reminders.join("\n") + "\n\nSucces! 💪"
    });
  }
}

function createDailyTrigger() {
  ScriptApp.newTrigger('sendDailyReminder')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();
}
```

4. Click **Save** (💾)
5. Run `createDailyTrigger` o singură dată (pentru a seta reminder-ul zilnic)
6. Autorizează accesul când ți se cere

---

### Pasul 7: Partajare (Opțional)

Dacă lucrezi cu altcineva:
1. Click **Share** (dreapta sus)
2. Adaugă email-ul persoanei
3. Setează permisiuni: **Editor**

---

## ✅ Checklist Final

- [ ] Toate tab-urile create și redenumite
- [ ] CSV-urile importate
- [ ] Dropdown-urile configurate
- [ ] Formulele adăugate și funcționează
- [ ] Conditional formatting aplicat
- [ ] Header-uri formatate și înghețate
- [ ] Script de notificări configurat (opțional)
- [ ] Datele de test șterse, gata de folosit

---

## 💡 Tips de utilizare

1. **Adaugă lead-uri zilnic** - minim 10-15
2. **Update imediat** când trimiți mesaje sau primești răspunsuri
3. **Revizuiește Dashboard** săptămânal
4. **Backup** - Google Sheets salvează automat, dar poți face File → Download → Excel pentru backup local
5. **Nu șterge rânduri** - marchează-le ca "Refuzat" sau "Ghost" pentru statistici corecte

---

## 🆘 Probleme frecvente

**Formulele nu funcționează:**
- Verifică să ai virgulă (,) ca separator, nu punct și virgulă (;)
- În România poate fi nevoie să înlocuiești `,` cu `;` în formule

**Dropdown-urile nu apar:**
- Asigură-te că ai selectat celulele FĂRĂ header
- Refresh pagina după ce adaugi validarea

**Notificările nu vin:**
- Verifică că ai rulat `createDailyTrigger`
- Check Extensions → Apps Script → Triggers să vezi dacă e activ
