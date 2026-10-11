'use strict';
(() => {
  const KEY = 'calmsilver.consent';
  const VERSION = 1;
  const DURATION = 180 * 24 * 60 * 60 * 1000;
  const strings = {
    ro: {
      bannerTitle: 'Preferințele tale.', bannerText: 'Poți alege dacă păstrăm limba paginii în acest browser. Pagina funcționează și fără această opțiune.',
      accept: 'Acceptă toate', reject: 'Respinge opționalele', customize: 'Personalizează', close: 'Închide', settingsTitle: 'Setări cookie-uri',
      settingsIntro: 'Aceste setări controlează stocarea folosită de codul CalmSilver. Le poți modifica oricând din subsolul paginii.',
      necessaryTitle: 'Necesare', necessaryText: 'Păstrăm alegerea ta pentru a nu afișa din nou panoul la fiecare vizită. Nu o folosim pentru publicitate.', alwaysActive: 'Mereu active',
      preferencesTitle: 'Preferințe', preferencesText: 'Memorează limba aleasă în acest browser. Dacă refuzi, selectorul de limbă continuă să funcționeze.',
      trackingText: 'Codul CalmSilver nu include Google Analytics, pixeli de publicitate sau alte integrări de marketing. Setările de aici nu controlează eventuale mecanisme proprii ale platformei de găzduire.',
      save: 'Salvează alegerea', storageUnavailable: 'Alegerea este aplicată pentru această vizită. Browserul nu permite memorarea ei.',
      policyTitle: 'Politica de cookies', policyIntro: 'Operatorul proiectului CalmSilver este Andre Richard-Peter. Această informare descrie stocarea locală utilizată de codul acestei pagini.',
      inventoryTitle: 'Ce păstrăm în browser', consentInventory: 'Stocare locală proprie: alegerea ta, versiunea setărilor și data expirării. Se păstrează maximum 180 de zile, apoi îți cerem din nou alegerea. Este necesară pentru memorarea setărilor.',
      languageInventory: 'Stocare locală proprie: limba RO sau EN, numai cu acordul pentru preferințe. Este eliminată când retragi acordul sau când acesta expiră, cel târziu la următoarea vizită.',
      noTracking: 'Nu adăugăm în codul CalmSilver cookie-uri de analiză sau publicitate. Formularul pregătește un mesaj local; nu păstrează datele introduse în localStorage.',
      platformNotice: 'Platforma de găzduire poate prelucra date tehnice și statistici conform propriilor politici. Panoul CalmSilver nu modifică setările platformei. Inventarul complet al infrastructurii trebuie verificat separat înainte de finalizarea documentelor PDF.',
      withdrawal: 'Poți retrage acordul din Setări cookie-uri în subsolul paginii sau poți șterge stocarea site-ului din browser. Dacă browserul blochează stocarea, alegerile funcționează doar pentru vizita curentă.'
    },
    en: {
      bannerTitle: 'Your preferences.', bannerText: 'Choose whether we remember the page language in this browser. The page works without this option too.',
      accept: 'Accept all', reject: 'Reject optional', customize: 'Customise', close: 'Close', settingsTitle: 'Cookie settings',
      settingsIntro: 'These settings control storage used by the CalmSilver code. You can change them at any time in the footer.',
      necessaryTitle: 'Necessary', necessaryText: 'We remember your choice so the panel does not appear on every visit. We do not use it for advertising.', alwaysActive: 'Always active',
      preferencesTitle: 'Preferences', preferencesText: 'Remember your chosen language in this browser. If you decline, the language switcher still works.',
      trackingText: 'The CalmSilver code contains no Google Analytics, advertising pixels or other marketing integrations. These settings do not control any mechanisms operated by the hosting platform itself.',
      save: 'Save choice', storageUnavailable: 'Your choice applies for this visit. Your browser does not allow it to be saved.',
      policyTitle: 'Cookie information', policyIntro: 'The operator of the CalmSilver project is Andre Richard-Peter. This notice describes local storage used by this page’s code.',
      inventoryTitle: 'What we store in your browser', consentInventory: 'First-party local storage: your choice, settings version and expiry date. Kept for up to 180 days, after which we ask again. Necessary to remember your settings.',
      languageInventory: 'First-party local storage: RO or EN, only with permission for preferences. Removed when permission is withdrawn or expires, no later than your next visit.',
      noTracking: 'We do not add analytics or advertising cookies to the CalmSilver code. The form prepares a message locally; it does not save your input in localStorage.',
      platformNotice: 'The hosting platform may process technical data and statistics under its own policies. The CalmSilver panel does not change platform settings. The full infrastructure inventory needs separate verification before the PDF documents are finalised.',
      withdrawal: 'Withdraw permission using Cookie settings in the footer, or clear site storage in your browser. If browser storage is blocked, your choices apply for the current visit only.'
    }
  };
  let choice = null;
  const banner = document.getElementById('cookie-banner');
  const settings = document.getElementById('cookies-settings-dialog');
  const preference = document.getElementById('cookie-preferences');
  const status = document.getElementById('cookie-save-status');
  function language() { return document.documentElement.lang === 'en' ? 'en' : 'ro'; }
  function removeLanguage() { try { localStorage.removeItem('calmsilver.language'); } catch { /* In-memory settings still work. */ } }
  function valid(value) {
    return value && value.version === VERSION && typeof value.preferences === 'boolean' && Number.isFinite(value.updatedAt) && Number.isFinite(value.expiresAt) && value.updatedAt <= Date.now() && value.expiresAt > Date.now() && value.expiresAt - value.updatedAt <= DURATION;
  }
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (valid(stored)) choice = stored;
    else localStorage.removeItem(KEY);
  } catch { /* Missing, invalid or blocked storage means no optional permission. */ }
  if (!choice || !choice.preferences) removeLanguage();
  function allowsPreferences() {
    if (choice && !valid(choice)) {
      choice = null;
      removeLanguage();
      try { localStorage.removeItem(KEY); } catch { /* No storage available. */ }
      banner.hidden = false;
    }
    return Boolean(choice && choice.preferences);
  }
  function render() {
    const t = strings[language()];
    for (const node of document.querySelectorAll('[data-consent-i18n]')) node.textContent = t[node.dataset.consentI18n];
    for (const node of document.querySelectorAll('[data-consent-i18n-aria]')) node.setAttribute('aria-label', t[node.dataset.consentI18nAria]);
  }
  function apply(preferences) {
    const updatedAt = Date.now();
    choice = { version: VERSION, preferences, updatedAt, expiresAt: updatedAt + DURATION };
    let persisted = true;
    try { localStorage.setItem(KEY, JSON.stringify(choice)); } catch { persisted = false; }
    if (!preferences) removeLanguage();
    else { try { localStorage.setItem('calmsilver.language', language()); } catch { persisted = false; } }
    preference.checked = preferences;
    banner.hidden = true;
    status.textContent = persisted ? '' : strings[language()].storageUnavailable;
    if (persisted && settings.open) settings.close();
    // No analytics or marketing integration is enabled by this module.
  }
  window.CalmSilverConsent = Object.freeze({ allowsPreferences });
  for (const button of document.querySelectorAll('[data-consent-choice]')) button.addEventListener('click', () => {
    apply(button.dataset.consentChoice === 'accept' || (button.dataset.consentChoice === 'save' && preference.checked));
  });
  for (const button of document.querySelectorAll('[data-consent-open]')) button.addEventListener('click', () => {
    preference.checked = allowsPreferences();
    status.textContent = '';
  });
  document.getElementById('policy-open-settings').addEventListener('click', () => {
    document.getElementById('cookies-policy-dialog').close();
    preference.checked = allowsPreferences();
    status.textContent = '';
    settings.showModal();
    document.body.classList.add('modal-open');
  });
  window.addEventListener('calmsilver:language', render);
  window.addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    try { const value = JSON.parse(localStorage.getItem(KEY)); choice = valid(value) ? value : null; } catch { choice = null; }
    if (!allowsPreferences()) removeLanguage();
    preference.checked = allowsPreferences();
    banner.hidden = Boolean(choice);
  });
  banner.hidden = Boolean(choice);
  preference.checked = allowsPreferences();
  render();
})();
