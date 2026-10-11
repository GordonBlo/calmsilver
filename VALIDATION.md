# Validation — CalmSilver

## Passed

- JavaScript syntax check with Node.
- 146 translation keys: Romanian and English have identical key coverage. Every text, accessible label, image description and placeholder used in the HTML resolves in both languages.
- HTML: single main heading, unique IDs, valid internal anchor destinations, present local assets and labelled form controls.
- External links have `noopener noreferrer`.
- Interaction checks using DOM test doubles: Romanian default; English switching; translated page metadata, ARIA labels and placeholders; mobile navigation; dialog handlers; email draft preparation and encoding; clipboard success and denied-access fallback.
- Explicit `?lang=ro` / `?lang=en` overrides a saved language. Blocked local storage does not stop the page from working.
- Image inspected visually and converted to a 99 KB WebP. Sharing artwork exported at 1200 × 630.
- Responsive CSS reviewed at 1600, 1150, 900, 700 and 390 pixel breakpoints, including a 320 pixel layout allowance.
- Reduced-motion preferences supported. Essential content remains visible without animations or JavaScript. Email remains available without JavaScript.
- CSS delimiters checked. Source has no external script or font dependencies.

## Verification limits

Rendered browser QA was not available because the supported browser-control skill was not exposed in this session. No preview server, browser installation or alternate browser-control route was used. The DOM checks validate application logic; they do not confirm rendered layout, native dialog focus behaviour or actual mobile browser rendering.

The email draft is generated locally. Actual delivery and the mailbox's DNS configuration were not tested. The two application previews are explicitly conceptual and are not screenshots of live applications.

The initial Sites audience remains owner-private. Public audience and the `calmsilver.com` domain require their respective hosting and DNS configuration.
