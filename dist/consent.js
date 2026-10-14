'use strict';
(() => {
  const KEY = 'calmsilver.consent';
  const VERSION = 2;
  const DURATION = 180 * 24 * 60 * 60 * 1000;
  const strings = {
  "ro": {
    "bannerTitle": "Preferințele tale.",
    "bannerText": "Poți alege dacă memorăm limba în acest browser. Refuzul nu limitează pagina. Protecția tehnică a găzduirii rămâne activă.",
    "accept": "Acceptă toate",
    "reject": "Respinge opționalele",
    "customize": "Personalizează",
    "close": "Închide",
    "settingsTitle": "Setări cookie-uri",
    "settingsIntro": "Aceste setări controlează stocarea folosită de codul CalmSilver. Le poți modifica oricând din subsolul paginii.",
    "necessaryTitle": "Necesare",
    "necessaryText": "Memorăm decizia ta timp de 180 de zile. Găzduirea folosește separat cookie-ul de securitate Cloudflare __cf_bm; nu îl controlează panoul.",
    "alwaysActive": "Mereu active",
    "preferencesTitle": "Preferințe",
    "preferencesText": "Memorează limba aleasă în acest browser. Dacă refuzi, selectorul de limbă continuă să funcționeze.",
    "trackingText": "Singura opțiune este memorarea limbii. Codul paginii nu include analiză sau publicitate. Cookie-ul de securitate __cf_bm și jurnalele infrastructurii nu sunt dezactivate prin acest panou.",
    "save": "Salvează alegerea",
    "storageUnavailable": "Alegerea este aplicată pentru această vizită. Browserul nu permite memorarea ei.",
    "policyTitle": "Politica de cookies",
    "saved": "Alegerea a fost aplicată.",
    "withdrawn": "Memorarea limbii este dezactivată; preferința salvată a fost eliminată."
  },
  "en": {
    "bannerTitle": "Your preferences.",
    "bannerText": "Choose whether we remember the language in this browser. Declining does not limit the page. Hosting security protection remains active.",
    "accept": "Accept all",
    "reject": "Reject optional",
    "customize": "Customise",
    "close": "Close",
    "settingsTitle": "Cookie settings",
    "settingsIntro": "These settings control storage used by the CalmSilver code. You can change them at any time in the footer.",
    "necessaryTitle": "Necessary",
    "necessaryText": "We remember your choice for 180 days. Hosting separately uses the Cloudflare security cookie __cf_bm; the panel does not control it.",
    "alwaysActive": "Always active",
    "preferencesTitle": "Preferences",
    "preferencesText": "Remember your chosen language in this browser. If you decline, the language switcher still works.",
    "trackingText": "Remembering the language is the only optional feature. The page code contains no analytics or advertising. This panel does not disable the __cf_bm security cookie or infrastructure logs.",
    "save": "Save choice",
    "storageUnavailable": "Your choice applies for this visit. Your browser does not allow it to be saved.",
    "policyTitle": "Cookie Policy",
    "saved": "Your choice has been applied.",
    "withdrawn": "Language storage is off; the saved preference has been removed."
  },
  "hu": {
    "bannerTitle": "A te beállításaid.",
    "bannerText": "Eldöntheted, hogy megjegyezzük-e a nyelvet ebben a böngészőben. Az elutasítás nem korlátozza az oldalt. A tárhely technikai védelme aktív marad.",
    "accept": "Összes elfogadása",
    "reject": "Opcionálisak elutasítása",
    "customize": "Testreszabás",
    "close": "Bezárás",
    "settingsTitle": "Sütibeállítások",
    "settingsIntro": "Ezek a beállítások a CalmSilver kódja által használt böngészőbeli tárolást szabályozzák. Az oldal alján bármikor módosíthatod őket.",
    "necessaryTitle": "Elengedhetetlen",
    "necessaryText": "A döntésedet 180 napig jegyezzük meg. A tárhely külön használja a Cloudflare __cf_bm biztonsági sütijét; ezt a panel nem szabályozza.",
    "alwaysActive": "Mindig aktív",
    "preferencesTitle": "Beállítások megjegyzése",
    "preferencesText": "Megjegyzi a választott nyelvet ebben a böngészőben. Ha elutasítod, a nyelvválasztó továbbra is működik.",
    "trackingText": "Az egyetlen opcionális funkció a nyelv megjegyzése. Az oldal kódjában nincs analitika vagy hirdetés. Ez a panel nem kapcsolja ki a __cf_bm biztonsági sütit vagy az infrastruktúra naplóit.",
    "save": "Választás mentése",
    "storageUnavailable": "A választásod erre a látogatásra érvényes. A böngésződ nem engedi a mentését.",
    "policyTitle": "Sütikezelési tájékoztató",
    "saved": "A választásod érvénybe lépett.",
    "withdrawn": "A nyelv megjegyzése kikapcsolva; a mentett nyelvbeállítást töröltük."
  }
};
  let choice = null;
  let expiryTimer;
  const banner = document.getElementById('cookie-banner');
  const settings = document.getElementById('cookies-settings-dialog');
  const preference = document.getElementById('cookie-preferences');
  const status = document.getElementById('cookie-save-status');
  const liveStatus = document.getElementById('consent-live-status');
  function language() { const lang = document.documentElement.lang; return Object.hasOwn(strings, lang) ? lang : 'ro'; }
  function removeLanguage() { try { localStorage.removeItem('calmsilver.language'); } catch { /* In-memory settings still work. */ } }
  function valid(value) {
    return value && value.version === VERSION && typeof value.preferences === 'boolean' && Number.isFinite(value.updatedAt) && Number.isFinite(value.expiresAt) && value.updatedAt > 0 && value.updatedAt <= Date.now() && value.expiresAt > value.updatedAt && value.expiresAt > Date.now() && value.expiresAt - value.updatedAt <= DURATION;
  }
  function readChoice() {
    try {
      const stored = JSON.parse(localStorage.getItem(KEY));
      if (valid(stored)) return stored;
    } catch { /* Missing, invalid or blocked storage means no optional permission. */ }
    try { localStorage.removeItem(KEY); } catch { /* Browser storage may be disabled. */ }
    return null;
  }
  choice = readChoice();
  if (!choice || !choice.preferences) removeLanguage();
  function allowsPreferences() {
    if (choice && !valid(choice)) {
      choice = null;
      removeLanguage();
      try { localStorage.removeItem(KEY); } catch { /* No storage available. */ }
      banner.hidden = false;
      preference.checked = false;
    }
    return Boolean(choice && choice.preferences);
  }
  function scheduleExpiry() {
    window.clearTimeout(expiryTimer);
    if (!choice) return;
    // setTimeout cannot represent the full 180-day interval in one call.
    expiryTimer = window.setTimeout(() => {
      allowsPreferences();
      scheduleExpiry();
    }, Math.min(Math.max(choice.expiresAt - Date.now() + 1, 1), 2147483647));
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
    const message = persisted ? strings[language()][preferences ? 'saved' : 'withdrawn'] : strings[language()].storageUnavailable;
    status.textContent = message;
    liveStatus.textContent = message;
    scheduleExpiry();
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
    preference.checked = allowsPreferences();
    status.textContent = '';
    window.CalmSilverDialogs.open('cookies-settings-dialog');
    document.getElementById('cookies-policy-dialog').close();
  });
  window.addEventListener('calmsilver:language', render);
  window.addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    choice = readChoice();
    if (!allowsPreferences()) removeLanguage();
    preference.checked = allowsPreferences();
    banner.hidden = Boolean(choice);
    scheduleExpiry();
  });
  window.addEventListener('focus', allowsPreferences);
  document.addEventListener('visibilitychange', allowsPreferences);
  banner.hidden = Boolean(choice);
  preference.checked = allowsPreferences();
  render();
  scheduleExpiry();
})();
