/* ============================================
   CRISISUNHEARD.ORG — APP LOGIC
   - Language toggle
   - ZIP code senator lookup
   - Message population & rotation
   - Copy to clipboard
   ============================================ */

let currentLang = 'en';

/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
function setLang(lang) {
  currentLang = lang;

  // Toggle all data-lang elements
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.lang === lang) el.classList.add('active');
  });

  // Update active button
  const btns = document.querySelectorAll('.lang-btn');
  btns[0].classList.toggle('active', lang === 'en');
  btns[1].classList.toggle('active', lang === 'ti');
}

/* ============================================
   POPULATE ALL MESSAGE BOXES
   ============================================ */
function populateMessages() {
  document.getElementById('senatorMessageBox').value    = formatMessage(getRotatingMessage(SENATOR_MESSAGES));
  document.getElementById('unhcrMessageBox').value      = formatMessage(getRotatingMessage(UNHCR_MESSAGES));
  document.getElementById('igoMessageBox').value        = formatMessage(getRotatingMessage(IGO_MESSAGES));
  document.getElementById('hrwMessageBox').value        = formatMessage(getRotatingMessage(HRW_MESSAGES));
}

// Populate once on load — each visitor gets a random unique version
populateMessages();

/* ============================================
   INIT LANGUAGE
   ============================================ */
setLang('en');

/* ============================================
   SENATOR ZIP LOOKUP
   ============================================ */
const CIVIC_API_KEY = 'AIzaSyDP2c-5NWdT64FvILSwO7U1r0Ui4f4JaD4';

async function lookupSenators() {
  const zip = document.getElementById('zipInput').value.trim();

  if (zip.length !== 5 || isNaN(zip)) {
    alert(currentLang === 'en'
      ? 'Please enter a valid 5-digit ZIP code.'
      : 'ቅኑዕ 5-ቁጽሪ ዚፕ ኮድ ኣእቱ።');
    return;
  }

  const result = document.getElementById('senatorResult');
  result.innerHTML = '<p>Looking up your representatives...</p>';
  result.classList.add('visible');

  try {
    const url = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zip}&levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&key=${CIVIC_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Not found');
    const data = await res.json();

    const officials = data.officials || [];
    const offices = data.offices || [];

    if (!officials.length) throw new Error('No results');

    let html = '';

    offices.forEach(office => {
      office.officialIndices.forEach(i => {
        const official = officials[i];
        const phone = official.phones?.[0] || '';
        const website = official.urls?.[0] || '';
        const email = official.emails?.[0] || '';

        html += `
          <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #2a2a2a;">
            <h3>${official.name}</h3>
            <p style="color: var(--accent); font-size: 13px; margin-bottom: 6px;">${office.name}</p>
            ${phone ? `<p>📞 <a href="tel:${phone}" style="color:#aaa;">${phone}</a></p>` : ''}
            ${email ? `<p>✉️ <a href="mailto:${email}" style="color: var(--accent);">${email}</a></p>` : ''}
            ${website ? `<p><a href="${website}" target="_blank" style="color: var(--accent);">→ Official Website & Contact Form</a></p>` : ''}
          </div>
        `;
      });
    });

    result.innerHTML = html;

  } catch {
    result.innerHTML = `<p>Could not find results. <a href="https://www.senate.gov/senators/senators-contact.htm" target="_blank">Click here to find your senator manually →</a></p>`;
  }
}

// Allow Enter key on zip input
document.getElementById('zipInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') lookupSenators();
});

/* ============================================
   COPY MESSAGE TO CLIPBOARD
   ============================================ */
function copyMessage(textareaId, btnId) {
  const box = document.getElementById(textareaId);
  const btn = document.getElementById(btnId);

  box.select();
  document.execCommand('copy');

  btn.classList.add('copied');
  btn.textContent = '✓ Copied!';

  setTimeout(() => {
    btn.classList.remove('copied');
    btn.textContent = '📋 Copy Message';
  }, 2500);
}

/* ============================================
   COPY PAGE LINK
   ============================================ */
function copyPageLink() {
  navigator.clipboard.writeText(window.location.href || 'https://crisisunheard.org').then(() => {
    alert(currentLang === 'en' ? 'Link copied!' : 'ሊንክ ተቐዲሑ!');
  });
}
