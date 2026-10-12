# Validation — CalmSilver

## Passed

- JavaScript syntax check with Node.
- Romanian/English translation keys: Romanian and English have identical key coverage. Every text, accessible label, image description and placeholder used in the HTML resolves in both languages.
- HTML: single main heading, unique IDs, valid internal anchor destinations, present local assets and labelled form controls.
- External links have `noopener noreferrer`.
- Interaction checks using DOM test doubles: Romanian default; English switching; translated page metadata, ARIA labels and placeholders; mobile navigation; dialog handlers; email draft preparation and encoding; clipboard success and denied-access fallback.
- Explicit `?lang=ro` / `?lang=en` overrides a saved language. Blocked local storage does not stop the page from working.
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

- All production dist files match the approved draft byte for byte.
- Original palette, font families, logo, copy and section order preserved.
- Hero picture and sharing artwork removed; larger centred title with a soft CSS shadow added.
- Both SAL images remain on their original left/right sides with their links; sizes reduced by about 8–9%.
- Visible email activation status removed from the contact section and form.
- JavaScript, markup, links, translations and consent/contact interactions checked.
- Browser rendering QA remains unavailable in this session. The user reviewed the standalone draft and approved publication.
