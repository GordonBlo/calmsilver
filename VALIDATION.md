# Validation — CalmSilver

## Passed

- JavaScript syntax check with Node.
- Romanian/English/Hungarian translation keys: all three languages have identical key coverage. Every translatable text, accessible label, image description, hover title and placeholder used in the HTML resolves in all three languages.
- HTML: single main heading, unique IDs, valid internal anchor destinations, present local assets and labelled form controls.
- External links have `noopener noreferrer`.
- Interaction checks using DOM test doubles: Romanian default; English switching; translated page metadata, ARIA labels and placeholders; mobile navigation; dialog handlers; email draft preparation and encoding; clipboard success and denied-access fallback.
- Explicit `?lang=ro` / `?lang=en` / `?lang=hu` overrides a saved language. Blocked local storage does not stop the page from working.
- The sculpture and its sharing artwork were removed in the approved 12 October revision.
- Responsive CSS reviewed at 1600, 1150, 900, 700 and 390 pixel breakpoints, including a 320 pixel layout allowance.
- Reduced-motion preferences supported. Essential content remains visible without animations or JavaScript. The email address remains visible without JavaScript.
- CSS delimiters checked. Source has no external script or font dependencies.

## Verification limits

Rendered browser QA was not available because the supported browser-control skill was not exposed in this session. No preview server, browser installation or alternate browser-control route was used. The DOM checks validate application logic; they do not confirm rendered layout, native dialog focus behaviour or actual mobile browser rendering.

The email draft is generated locally. Actual delivery and the mailbox's DNS configuration were not tested. The two application previews are explicitly conceptual and are not screenshots of live applications.

The Sites audience is public. The custom `calmsilver.com` domain is not connected.

## Legal footer and consent update — 11 October 2026

- Node syntax checks for app.js and consent.js passed.
- DOM interaction checks passed for no optional storage before permission; accept, reject and custom settings; preference deletion on withdrawal; consent expiry and invalid version; storage denial; persisted rejection; Romanian/English panel copy.
- Permanent settings link, controller identity and ANPC/SAL link verified in markup. The supplied horizontal badge is displayed without distortion, with its blank margins clipped by CSS.
- Hosting infrastructure cookies/analytics have not been inventoried. Application settings do not control platform mechanisms.
- The supplied legal PDF templates remain unpublished, pending final policy content, hosting verification and a functioning contact address.

## Both SAL images — 11 October 2026

- Both supplied images are present in the footer: the square image on the left and the horizontal image on the right. Both link to https://reclamatiisal.anpc.ro/.
- Image proportions are preserved. Responsive sizing retains left/right placement on narrow screens; only blank margins of the horizontal original are clipped.
- Both local assets and both links verified in HTML. Rendered browser QA remains unavailable.

## Approved design revision — 12 October 2026

- The published design revision matched the approved draft byte for byte.
- Original palette, font families, logo, copy and section order preserved.
- Hero picture and sharing artwork removed; larger centred title with a soft CSS shadow added.
- Both SAL images remain on their original left/right sides with their links; sizes reduced by about 8–9%.
- Visible email activation status removed from the contact section and form.
- JavaScript, markup, links, translations and consent/contact interactions checked.
- Browser rendering QA remains unavailable in this session. The user reviewed the standalone draft and approved publication.

## Contact copy button — 12 October 2026

- A separate keyboard-accessible icon button copies only `hello@calmsilver.com`; it does not launch a mail application.
- Romanian and English labels, hover titles and live confirmations are translated. Successful copying briefly shows a check mark.
- DOM checks cover clipboard success, denied/missing Clipboard API, selected-field fallback, manual selection, confirmation timeout and language-switch reset.
- The address stays a normal email link and remains visible without JavaScript. The new row wraps on limited widths; its narrow-screen font allowance fits the original 320 pixel page width.
- Node syntax, markup/assets and CSS delimiter checks passed. Rendered browser QA remains unavailable.

## Hungarian language — 12 October 2026

- RO / EN / HU language controls have native language labels and one active selection. Romanian remains the default.
- All 158 application strings and 24 consent strings are present in each language. Hungarian copy covers headings, body text, menus, FAQs, forms, email drafts, clipboard feedback, legal information, cookie panels and metadata.
- Translation wording was reviewed for natural Hungarian, consistent terminology and preservation of the original meaning. Official ANPC/SAL artwork remains intact; its alternative text is translated.
- DOM interaction checks passed for full language round trips, active state, text/ARIA/alt/title/placeholder coverage, Hungarian title and locale, accented email subject/body, draft copying, direct `?lang=hu` links and preservation of other query parameters and anchors.
- Hungarian preferences are remembered only after consent; withdrawal, expiry, explicit URL precedence and blocked storage were checked.
- JavaScript syntax, markup, assets, anchors and CSS delimiters passed. Compact mobile header spacing was reviewed for the additional language choice. These checks do not replace rendered browser QA, which remains unavailable in this session.
