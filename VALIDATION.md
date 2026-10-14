# Validation — compliance review, 14 October 2026

## Passed

- JavaScript syntax checks for app.js, consent.js and generated legal.js.
- Seven HTML pages: local resources, unique IDs, ARIA references, image alt attributes, protected external new-tab links and static language links.
- Full RO/EN/HU key coverage, visible text, metadata, labels, placeholders, email accents, language round trips and query precedence.
- Local draft creation, trimming, encoded mailto content, clipboard success, legacy copy and manual-selection fallbacks; no false sent status.
- Default-off optional storage, accept/reject/custom settings, withdrawal and deletion of language storage; no stored form content.
- Consent schema 2, version 1 renewal, 180-day duration, invalid/expired/future records and storage denial.
- Active expiry within the JavaScript timeout limit; focus/visibility expiry checks and cross-tab withdrawal or storage clearing.
- Existing dialog handlers, test-double focus restoration, policy-to-settings transition and settings return deep links.
- Form becomes interactive only after submit prevention is installed. Without JavaScript it stays hidden and direct email remains available.
- Legal HTML is generated from escaped repository content, never visitor input. Six static policy pages and modal copies share one source.
- The header, entire main element, original style sheets, favicon and two SAL images are byte-identical to the baseline Sites source.

## Live/source audit

GitHub main `81e534a6addd26abc291405fd5c679437b34bce7` and Sites source `c14016eb1b4a82e0ebee954509b2d9ab573a2748` have the same full Git tree: `697fbb2e57b30b0a8bb487de9bd28db43e055969`.

Both public root HTML responses match the baseline. Successful curl reads of custom-domain styles.css, app.js and consent.js also match it. Sites reports the custom domain and certificate active.

Those five responses set __cf_bm. Cookie values are excluded from [legal/live-audit.json](legal/live-audit.json); names, flags and expiry attributes remain. A separate Python HTTP batch received 403 responses and is recorded as failed, not passed. This audit is not a browser cookie jar or HAR capture.

No application cookie writes, sessionStorage, IndexedDB, service worker, external scripts/fonts, analytics, marketing or form endpoint were found. Browser form restoration and a visitor's email application may independently retain data.

## Not verified

- Rendered desktop/mobile layouts, actual dialog Tab trapping and Escape behaviour, screen-reader announcements, contrast and 200% zoom/reflow. The supported browser-control skill was unavailable.
- Complete browser network/cookie inventory before consent, after accept/reject, reload and withdrawal. HttpOnly cookies are not visible through document.cookie.
- Hosting internal logs, complete processor chain, physical processing locations, retention and contractual transfer safeguards.
- Zoho account security, trash/backups and retention. Mailbox facts are owner-confirmed, not independently tested.
- HSTS, CSP, anti-framing and nosniff HTTP-header support. None of those headers or a Referrer-Policy header appeared in the sampled responses. The new referrer-policy meta element does not create HTTP headers.
- Legal bases and legitimate-interest assessment, controller contact particulars, cookie necessity, retention, cross-border transfers and ANPC/SAL applicability.

## Manual checks before deployment

1. Inspect RO/EN/HU at 320, 375, 768 and 1440 pixels and at 200% zoom.
2. Use Tab, Shift+Tab, Enter, Space and Escape through each dialog, including policies opened from the contact form; verify focus restoration.
3. In a fresh browser profile, inspect Network and all cookie/storage panels. Confirm no optional language before permission; persistence after opt-in; deletion after rejection/withdrawal; no unexpected requests. Repeat on the other origin.
4. Obtain missing provider and owner facts; check hosting security-cookie handling. The offline file cannot reproduce hosting cookies.
5. Finalise the policy source, regenerate, rerun checks and approve the final content before a separate Sites deployment.
