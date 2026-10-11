'use strict';

const translations = {
  ro: {
    pageTitle: 'CalmSilver — Website-uri și produse digitale, cu intenție.',
    pageDescription: 'CalmSilver creează website-uri atent gândite și produse digitale pentru afaceri. Design rafinat, experiențe clare și o bază tehnică solidă.',
    ogTitle: 'CalmSilver — Digital, cu intenție.', ogDescription: 'Website-uri atent gândite. Produse digitale cu substanță.',
    skip: 'Mergi la conținut', navLabel: 'Navigare principală', mobileNavLabel: 'Navigare mobilă', languageLabel: 'Limba paginii',
    navServices: 'Servicii', navWork: 'Proiecte', navApproach: 'Abordare', navContact: 'Să vorbim', menuOpen: 'Deschide meniul', menuClose: 'Închide meniul',
    heroEyebrow: 'Website-uri & produse digitale', heroTitle1: 'Prezență digitală.', heroTitle2: 'Cu substanță.',
    heroDescription: 'Website-uri atent gândite și soluții digitale pentru afaceri care apreciază claritatea, calitatea și detaliile.',
    heroCta: 'Hai să construim ceva bun', heroSecondary: 'Descoperă proiectele', heroNote: 'O idee clară. Un design care o pune în valoare.',
    heroAlt: 'Sculptură din argint cu forme fluide, pe un soclu din piatră, în lumină naturală.', artLabel: 'Esența stă în detalii.', artCaption: 'Formă. Funcție. Echilibru.',
    principle1: 'Design cu intenție', principle2: 'Tehnologie cu rost', principle3: 'Atenție la detalii', principle4: 'O experiență firească',
    introLabel: 'Despre CalmSilver', introTitle1: 'Lucrurile bune', introTitle2: 'nu au nevoie să strige.',
    introLead: 'Un website ar trebui să inspire încredere înainte de prima conversație.',
    introText: 'CalmSilver îmbină designul atent cu dezvoltarea web pentru a transforma ideile în experiențe digitale clare. De la pagina de prezentare a unei afaceri la un produs software propriu, pornim de la ceea ce contează: oamenii care îl vor folosi.', introLink: 'Cum lucrăm',
    servicesLabel: 'Ce putem construi împreună', servicesTitle1: 'Din idee,', servicesTitle2: 'în experiență.', servicesIntro: 'Un scop bine definit. O soluție potrivită. Fiecare detaliu are un rol.',
    service1Title: 'Website-uri de prezentare', service1Tags: 'Identitate · Claritate · Prezență',
    service1Description: 'Pagini de prezentare și landing page-uri care explică bine ce faci, arată bine pe orice ecran și fac următorul pas simplu pentru client.', service1Link: 'Discută despre un website',
    service2Title: 'Aplicații web', service2Tags: 'Funcție · Structură · Utilitate',
    service2Description: 'Instrumente digitale construite în jurul unui proces real: organizarea activității, gestionarea informațiilor și simplificarea muncii de zi cu zi.', service2Link: 'Discută despre o aplicație',
    service3Title: 'Îngrijire & evoluție', service3Tags: 'Continuitate · Rafinare · Suport',
    service3Description: 'Ajustări de conținut, îmbunătățiri vizuale și dezvoltări ulterioare. Stabilim de la început ce ai nevoie după lansare și cum păstrăm lucrurile în ordine.', service3Link: 'Discută despre actualizări',
    workLabel: 'Proiecte proprii', workTitle1: 'Idei care', workTitle2: 'prind formă.',
    workIntro: 'O privire în direcția noastră de lucru: aplicații practice, interfețe clare și atenție la logica din spate.',
    buildflowAlt: 'Exemplu conceptual de interfață BuildFlow, cu proiecte și sarcini.', marginpilotAlt: 'Exemplu conceptual MarginPilot, cu un calcul de preț și marjă.',
    previewOverview: 'Privire de ansamblu', previewProjects: 'Proiecte', previewTasks: 'Sarcini', previewWorkspace: 'SPAȚIUL TĂU DE LUCRU', previewDemo: 'Demo',
    previewOrganized: 'Totul, într-un singur loc', previewProgress: 'Un pas mai departe', previewProject1: 'Website de prezentare', previewProject2: 'Identitate digitală',
    conceptCaption: 'Previzualizare conceptuală', buildflowType: 'Aplicație web · Demo de portofoliu',
    buildflowDescription: 'O aplicație pentru organizarea proiectelor și sarcinilor, cu dashboard, autentificare și separarea datelor între utilizatori.', githubLink: 'Explorează portofoliul GitHub',
    previewEstimate: 'Estimare', previewPricing: 'CLARITATE ÎNAINTE DE OFERTĂ', previewMarginTitle: 'Prețul potrivit.\nMarja protejată.',
    previewCost: 'Cost total', previewMargin: 'Marjă țintă', previewPrice: 'Preț de ofertare', marginpilotType: 'Produs propriu · În dezvoltare',
    marginpilotDescription: 'Un produs software pentru constructori și firme de servicii: costuri mai clare, prețuri calculate și oferte pregătite cu atenție la profit.', marginpilotLink: 'Află mai multe despre produs',
    approachLabel: 'Felul în care lucrăm', approachTitle1: 'De la prima conversație', approachTitle2: 'la primul click.',
    approachIntro: 'Un proces simplu de urmărit, cu decizii clare și loc pentru feedback la momentul potrivit.',
    step1Title: 'Înțelegem', step1Text: 'Vorbim despre afacerea ta, public și obiectiv. Stabilim conținutul, funcționalitățile, bugetul și ce înseamnă un rezultat bun.',
    step2Title: 'Construim', step2Text: 'Transformăm direcția în design și cod. Vezi o variantă concretă, oferi feedback, iar noi rafinăm experiența.',
    step3Title: 'Lansăm', step3Text: 'Verificăm paginile, linkurile și afișarea pe diferite ecrane. Pregătim publicarea și stabilim pașii pentru întreținere.', approachSignoff: 'Mai puțin zgomot. Mai multă grijă pentru ceea ce contează.',
    faqLabel: 'Câteva răspunsuri', faqTitle1: 'Înainte de', faqTitle2: 'prima conversație.',
    faq1Question: 'Pentru ce tipuri de afaceri creați website-uri?', faq1Answer: 'Pentru afaceri mici, profesioniști independenți și firme de servicii care au nevoie de o prezență online clară. Pornim de la publicul și obiectivele fiecărui proiect.',
    faq2Question: 'Cât durează și cât costă un proiect?', faq2Answer: 'Depinde de conținut, numărul de pagini și funcționalități. După o discuție inițială, stabilim o propunere cu livrabile, preț și calendar, înainte de a începe lucrul.',
    faq3Question: 'Pot avea un website în mai multe limbi?', faq3Answer: 'Da. Putem organiza website-ul în română și engleză, cu un selector de limbă simplu. Stabilim împreună limbile și conținutul potrivit publicului tău.',
    faq4Question: 'Ce trebuie să pregătesc pentru început?', faq4Answer: 'O scurtă descriere a afacerii, serviciile principale și câteva exemple de website-uri care îți plac. Dacă ai deja un logo, un domeniu sau fotografii, le putem integra în direcția proiectului.',
    contactEyebrow: 'O conversație este un început bun.', contactTitle1: 'Ai o idee?', contactTitle2: 'Să-i dăm formă.', contactText: 'Spune-ne pe scurt ce vrei să construiești. Pornim de acolo.',
    contactCta: 'Spune-ne despre proiect', contactEmailLabel: 'Sau scrie-ne direct', contactLocation: 'Oradea, România · Colaborări la distanță',
    footerTagline: 'Digital, cu intenție.', backTop: 'Înapoi sus', rights: 'Toate drepturile rezervate.', privacyLink: 'Confidențialitate', footerNote: 'Creat cu grijă.',
    close: 'Închide', briefEyebrow: 'Primul pas', briefTitle: 'Povestește-ne ideea ta.', briefIntro: 'Câteva detalii sunt suficiente pentru a începe o conversație.',
    formName: 'Numele tău', formBusiness: 'Afacerea ta (opțional)', namePlaceholder: 'Cum te numești?', businessPlaceholder: 'Numele afacerii',
    formService: 'Ce ai în minte?', optionWebsite: 'Website de prezentare', optionWebapp: 'Aplicație web', optionMaintenance: 'Actualizări sau îmbunătățiri', optionMarginpilot: 'MarginPilot', optionOther: 'Aș vrea să discutăm',
    formMessage: 'Câteva cuvinte despre proiect', messagePlaceholder: 'Ce vrei să construiești și pentru cine?',
    formNote: 'Butonul pregătește un mesaj în aplicația ta de e-mail. Îl poți verifica și trimite de acolo. Acest formular nu trimite și nu salvează datele pe server.',
    formSubmit: 'Pregătește e-mailul', draftReady: 'Mesajul este pregătit. Dacă aplicația de e-mail nu s-a deschis, copiază textul de mai jos și trimite-l la hello@calmsilver.com.', draftLabel: 'Mesaj pregătit', copyDraft: 'Copiază mesajul', copied: 'Mesaj copiat.', copyFallback: 'Selectează textul de mai sus și copiază-l manual.',
    emailSubject: 'CalmSilver — Discuție despre proiect', emailGreeting: 'Bună, CalmSilver!', emailName: 'Nume', emailBusiness: 'Afacere', emailService: 'Proiect', emailMessage: 'Despre proiect',
    privacyTitle: 'Despre datele tale.',
    privacyText1: 'Formularul de proiect pregătește un mesaj local, în browser, și deschide aplicația ta de e-mail. Datele introduse nu sunt trimise către CalmSilver până când nu trimiți tu e-mailul. Nu le salvăm într-o bază de date prin acest formular.',
    privacyText2: 'Dacă ne contactezi prin e-mail, folosim informațiile primite pentru a răspunde și pentru a discuta proiectul. Pentru întrebări legate de aceste informații, ne poți scrie la hello@calmsilver.com.',
    privacyText3: 'Selectorul de limbă păstrează preferința în browserul tău, folosind stocarea locală. Furnizorul de găzduire poate prelucra date tehnice de acces și statistici de trafic conform propriilor politici.',
    hostingPrivacy: 'Politica de confidențialitate a furnizorului de găzduire'
  },
  en: {
    pageTitle: 'CalmSilver — Thoughtful websites & digital products.',
    pageDescription: 'CalmSilver creates thoughtful websites and digital products for businesses. Refined design, clear experiences and a solid technical foundation.',
    ogTitle: 'CalmSilver — Digital, with intention.', ogDescription: 'Thoughtful websites. Digital products with substance.',
    skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', languageLabel: 'Page language',
    navServices: 'Services', navWork: 'Projects', navApproach: 'Approach', navContact: 'Let’s talk', menuOpen: 'Open menu', menuClose: 'Close menu',
    heroEyebrow: 'Websites & digital products', heroTitle1: 'Digital presence.', heroTitle2: 'With substance.',
    heroDescription: 'Thoughtful websites and digital solutions for businesses that value clarity, quality and the finer details.',
    heroCta: 'Let’s build something good', heroSecondary: 'Explore our projects', heroNote: 'A clear idea. A design that brings it to life.',
    heroAlt: 'A flowing silver sculpture on a stone plinth, illuminated by soft natural light.', artLabel: 'The essence is in the details.', artCaption: 'Form. Function. Balance.',
    principle1: 'Intentional design', principle2: 'Purposeful technology', principle3: 'Attention to detail', principle4: 'An effortless experience',
    introLabel: 'About CalmSilver', introTitle1: 'Good things', introTitle2: 'don’t need to shout.',
    introLead: 'A website should inspire trust before the first conversation.',
    introText: 'CalmSilver brings thoughtful design and web development together to turn ideas into clear digital experiences. From a business website to a software product of our own, we begin with what matters: the people who will use it.', introLink: 'How we work',
    servicesLabel: 'What we can build together', servicesTitle1: 'From an idea,', servicesTitle2: 'to an experience.', servicesIntro: 'A clear purpose. The right solution. Every detail has a role.',
    service1Title: 'Business websites', service1Tags: 'Identity · Clarity · Presence',
    service1Description: 'Business websites and landing pages that explain what you do, look good on every screen and make the next step easy for your customers.', service1Link: 'Discuss a website',
    service2Title: 'Web applications', service2Tags: 'Function · Structure · Usefulness',
    service2Description: 'Digital tools built around a real process: organising work, managing information and making everyday tasks simpler.', service2Link: 'Discuss a web application',
    service3Title: 'Care & evolution', service3Tags: 'Continuity · Refinement · Support',
    service3Description: 'Content updates, visual refinements and further development. We agree on what you need after launch and how to keep everything in good shape.', service3Link: 'Discuss website updates',
    workLabel: 'Our own projects', workTitle1: 'Ideas that', workTitle2: 'take shape.',
    workIntro: 'A glimpse into our work: practical applications, clear interfaces and care for the logic behind them.',
    buildflowAlt: 'A conceptual BuildFlow interface preview showing projects and tasks.', marginpilotAlt: 'A conceptual MarginPilot preview showing a price and margin calculation.',
    previewOverview: 'Overview', previewProjects: 'Projects', previewTasks: 'Tasks', previewWorkspace: 'YOUR WORKSPACE', previewDemo: 'Demo',
    previewOrganized: 'Everything in one place', previewProgress: 'One step further', previewProject1: 'Business website', previewProject2: 'Digital identity',
    conceptCaption: 'Conceptual interface preview', buildflowType: 'Web application · Portfolio demo',
    buildflowDescription: 'An application for organising projects and tasks, with a dashboard, authentication and separation of data between users.', githubLink: 'Explore the GitHub portfolio',
    previewEstimate: 'Estimate', previewPricing: 'CLARITY BEFORE THE QUOTE', previewMarginTitle: 'The right price.\nA protected margin.',
    previewCost: 'Total cost', previewMargin: 'Target margin', previewPrice: 'Quote price', marginpilotType: 'Our own product · In development',
    marginpilotDescription: 'A software product for contractors and service businesses: clearer costs, calculated prices and quotes prepared with profit in mind.', marginpilotLink: 'Ask us about the product',
    approachLabel: 'The way we work', approachTitle1: 'From the first conversation', approachTitle2: 'to the first click.',
    approachIntro: 'A process that is easy to follow, with clear decisions and room for feedback at the right moment.',
    step1Title: 'Understand', step1Text: 'We talk about your business, audience and goals. We agree on the content, functionality, budget and what a good result looks like.',
    step2Title: 'Build', step2Text: 'We turn the direction into design and code. You see a tangible version, share feedback and we refine the experience.',
    step3Title: 'Launch', step3Text: 'We check the pages, links and layouts across different screens. We prepare the launch and agree on the next steps for maintenance.', approachSignoff: 'Less noise. More care for what matters.',
    faqLabel: 'A few answers', faqTitle1: 'Before the', faqTitle2: 'first conversation.',
    faq1Question: 'What kinds of businesses do you build websites for?', faq1Answer: 'Small businesses, independent professionals and service companies that need a clear online presence. We start with the audience and goals of each project.',
    faq2Question: 'How long does a project take, and what does it cost?', faq2Answer: 'That depends on the content, number of pages and functionality. After an initial conversation, we prepare a proposal with deliverables, pricing and a timeline before work begins.',
    faq3Question: 'Can my website have more than one language?', faq3Answer: 'Yes. We can organise your website in Romanian and English with a simple language switcher. We agree on the languages and content that suit your audience.',
    faq4Question: 'What should I prepare to get started?', faq4Answer: 'A short description of your business, your main services and a few websites you like. If you already have a logo, domain or photographs, we can bring them into the project.',
    contactEyebrow: 'A conversation is a good beginning.', contactTitle1: 'Have an idea?', contactTitle2: 'Let’s give it form.', contactText: 'Tell us briefly what you would like to build. We’ll start there.',
    contactCta: 'Tell us about your project', contactEmailLabel: 'Or write to us directly', contactLocation: 'Oradea, Romania · Working remotely',
    footerTagline: 'Digital, with intention.', backTop: 'Back to top', rights: 'All rights reserved.', privacyLink: 'Privacy', footerNote: 'Made with care.',
    close: 'Close', briefEyebrow: 'The first step', briefTitle: 'Tell us about your idea.', briefIntro: 'A few details are enough to start a conversation.',
    formName: 'Your name', formBusiness: 'Your business (optional)', namePlaceholder: 'What is your name?', businessPlaceholder: 'Business name',
    formService: 'What do you have in mind?', optionWebsite: 'Business website', optionWebapp: 'Web application', optionMaintenance: 'Updates or improvements', optionMarginpilot: 'MarginPilot', optionOther: 'I’d like to talk it through',
    formMessage: 'A few words about the project', messagePlaceholder: 'What would you like to build, and who is it for?',
    formNote: 'The button prepares a message in your email application. You can review and send it there. This form does not send or store your information on a server.',
    formSubmit: 'Prepare the email', draftReady: 'Your message is ready. If your email application did not open, copy the text below and send it to hello@calmsilver.com.', draftLabel: 'Prepared message', copyDraft: 'Copy the message', copied: 'Message copied.', copyFallback: 'Select the text above and copy it manually.',
    emailSubject: 'CalmSilver — Let’s discuss a project', emailGreeting: 'Hello, CalmSilver!', emailName: 'Name', emailBusiness: 'Business', emailService: 'Project', emailMessage: 'About the project',
    privacyTitle: 'About your information.',
    privacyText1: 'The project form prepares a message locally in your browser and opens your email application. The information you enter is not sent to CalmSilver until you send the email yourself. This form does not save it to a database.',
    privacyText2: 'If you contact us by email, we use the information you share to reply and discuss your project. For questions about that information, you can write to hello@calmsilver.com.',
    privacyText3: 'The language switcher remembers your preference in your browser using local storage. The hosting provider may process technical access data and traffic statistics under its own policies.',
    hostingPrivacy: 'Hosting provider’s privacy policy'
  }
};


Object.assign(translations.ro, {
  privacyLink: 'Politica de confidențialitate', cookiesLink: 'Politica de cookies', cookieSettings: 'Setări cookie-uri',
  operatorLabel: 'CalmSilver este un proiect de brand al lui Andre Richard-Peter.', registrationPending: 'Forma juridică este în curs de pregătire.',
  emailPending: 'Adresa de e-mail este în curs de activare.',
  privacyIdentity: 'Operator: Andre Richard-Peter. CalmSilver este un brand în pregătire, fără o entitate SRL/PFA înregistrată în prezent.',
  privacyText2: 'Informațiile primite prin e-mail sunt folosite pentru a răspunde și a discuta proiectul. Adresa planificată pentru contact și întrebări despre date este hello@calmsilver.com; aceasta este în curs de activare.',
  privacyText3: 'Limba paginii este memorată în browser numai dacă activezi preferințele în Setări cookie-uri. Platforma de găzduire poate prelucra date tehnice și statistici conform propriilor politici. Informarea de aici este preliminară; documentele detaliate vor fi completate după verificarea infrastructurii și activarea contactului.'
});
Object.assign(translations.en, {
  privacyLink: 'Privacy information', cookiesLink: 'Cookie information', cookieSettings: 'Cookie settings',
  operatorLabel: 'CalmSilver is a brand project by Andre Richard-Peter.', registrationPending: 'Business registration is being prepared.',
  emailPending: 'This email address is being activated.',
  privacyIdentity: 'Operator: Andre Richard-Peter. CalmSilver is a brand in preparation, currently without a registered SRL/PFA entity.',
  privacyText2: 'Information received by email is used to reply and discuss your project. The planned contact address for enquiries and data questions is hello@calmsilver.com; it is being activated.',
  privacyText3: 'Your page language is remembered in this browser only if you enable preferences in Cookie settings. The hosting platform may process technical data and statistics under its own policies. This information is preliminary; detailed documents will be completed after infrastructure checks and contact activation.'
});

let currentLanguage = 'ro';
let lastDialogTrigger = null;
const languageButtons = document.querySelectorAll('[data-language]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const briefForm = document.getElementById('brief-form');
const draftResult = document.getElementById('draft-result');
const emailDraft = document.getElementById('email-draft');
const copyStatus = document.getElementById('copy-status');

function setMenuOpen(open) {
  mobileNav.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', translations[currentLanguage][open ? 'menuClose' : 'menuOpen']);
}

function setLanguage(language, updateUrl = true) {
  if (!Object.hasOwn(translations, language)) return;
  currentLanguage = language;
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = t.pageTitle;
  document.querySelector('meta[name="description"]').content = t.pageDescription;
  document.querySelector('meta[property="og:title"]').content = t.ogTitle;
  document.querySelector('meta[property="og:description"]').content = t.ogDescription;
  document.querySelector('meta[property="og:locale"]').content = language === 'ro' ? 'ro_RO' : 'en_GB';
  for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = t[node.dataset.i18n];
  for (const [dataAttribute, attribute] of [['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder']]) {
    for (const node of document.querySelectorAll(`[${dataAttribute}]`)) node.setAttribute(attribute, t[node.getAttribute(dataAttribute)]);
  }
  for (const button of languageButtons) button.setAttribute('aria-pressed', String(button.dataset.language === language));
  menuToggle.setAttribute('aria-label', t[menuToggle.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen']);
  copyStatus.textContent = '';
  if (!draftResult.hidden) emailDraft.value = prepareDraft();
  try { if (window.CalmSilverConsent.allowsPreferences()) localStorage.setItem('calmsilver.language', language); } catch { /* The switcher also works without storage. */ }
  window.dispatchEvent(new Event('calmsilver:language'));
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (language === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    try { window.history.replaceState(null, '', url); } catch { /* File previews may restrict URL changes. */ }
  }
}

function prepareDraft() {
  const t = translations[currentLanguage];
  const name = briefForm.elements.namedItem('name').value.trim();
  const business = briefForm.elements.namedItem('business').value.trim();
  const service = briefForm.elements.namedItem('service').selectedOptions[0].textContent;
  const message = briefForm.elements.namedItem('message').value.trim();
  const parts = [t.emailGreeting, '', `${t.emailName}: ${name}`];
  if (business) parts.push(`${t.emailBusiness}: ${business}`);
  parts.push(`${t.emailService}: ${service}`, '', `${t.emailMessage}:`, message);
  return parts.join('\n');
}

for (const button of languageButtons) button.addEventListener('click', () => setLanguage(button.dataset.language));
menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
for (const link of mobileNav.querySelectorAll('a')) link.addEventListener('click', () => setMenuOpen(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenuOpen(false); });
const desktopQuery = window.matchMedia('(min-width: 701px)');
desktopQuery.addEventListener('change', event => { if (event.matches) setMenuOpen(false); });

for (const trigger of document.querySelectorAll('[data-open-dialog]')) {
  trigger.addEventListener('click', () => {
    setMenuOpen(false);
    const dialog = document.getElementById(trigger.dataset.openDialog);
    if (dialog.open) return;
    lastDialogTrigger = trigger;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
}
for (const dialog of document.querySelectorAll('dialog')) {
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    const anotherDialogOpen = [...document.querySelectorAll('dialog')].some(item => item.open);
    if (!anotherDialogOpen) {
      document.body.classList.remove('modal-open');
      if (lastDialogTrigger) lastDialogTrigger.focus();
    }
  });
}

briefForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameField = briefForm.elements.namedItem('name');
  const messageField = briefForm.elements.namedItem('message');
  nameField.value = nameField.value.trim();
  messageField.value = messageField.value.trim();
  if (!briefForm.reportValidity()) return;
  const draft = prepareDraft();
  emailDraft.value = draft;
  draftResult.hidden = false;
  copyStatus.textContent = '';
  const mailto = 'mailto:hello@calmsilver.com?subject=' + encodeURIComponent(translations[currentLanguage].emailSubject) + '&body=' + encodeURIComponent(draft);
  const emailLink = document.createElement('a');
  emailLink.href = mailto;
  emailLink.hidden = true;
  document.body.appendChild(emailLink);
  emailLink.click();
  emailLink.remove();
});
document.getElementById('copy-draft').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(emailDraft.value);
    copyStatus.textContent = translations[currentLanguage].copied;
  } catch {
    emailDraft.focus();
    emailDraft.select();
    copyStatus.textContent = translations[currentLanguage].copyFallback;
  }
});
document.getElementById('year').textContent = String(new Date().getFullYear());
let initialLanguage = 'ro';
const queryLanguage = new URL(window.location.href).searchParams.get('lang');
if (queryLanguage === 'ro' || queryLanguage === 'en') initialLanguage = queryLanguage;
else { try { const saved = window.CalmSilverConsent.allowsPreferences() ? localStorage.getItem('calmsilver.language') : null; if (saved === 'en' || saved === 'ro') initialLanguage = saved; } catch { /* Romanian remains the default. */ } }
setLanguage(initialLanguage, false);
