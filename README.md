# CalmSilver

Live website: https://calmsilver.com

Static landing page with Romanian, English and Hungarian copy, native dialogs, local email drafting and optional language storage. No runtime dependencies or build framework. Publish only `dist/` through the existing Sites project.

## Compliance review — 14 October 2026

The owner approved publishing the reviewed compliance update on 14 October 2026, with the documented unconfirmed items still explicitly disclosed. Read [COMPLIANCE-REVIEW.md](COMPLIANCE-REVIEW.md) and [VALIDATION.md](VALIDATION.md). Unconfirmed legal facts are explicitly marked; this is not a compliance certification.

- `legal/policies.json`: single authored source for both policies in all three languages.
- `scripts/generate-legal.py`: generates six static policy pages, matching Romanian modal content and `dist/legal.js` for language changes. Edit the JSON, then regenerate.
- Policy anchors retain the existing dialogs and work as real page links without JavaScript. Static policy pages have ordinary language links.
- `dist/consent.js`: controls the consent record and optional language preference. Hosting security cookies are disclosed separately and have no misleading optional switch.
- `review/CalmSilver-GDPR-review.html`: offline review copy, outside the deployed directory. Browser storage in this file is separate from production.

The approved header, main content, original style sheets, logo and two ANPC/SAL images are preserved. New CSS is scoped to legal content and dialog controls.

## Checks

```bash
python3 scripts/generate-legal.py
python3 scripts/check-site.py
node --check dist/app.js
node --check dist/consent.js
node --check dist/legal.js
node tests/regression.cjs
python3 scripts/create-review.py
```

Tests use DOM test doubles and source inspection. They do not verify rendered layout, real native-dialog focus trapping or a browser cookie jar. The supported browser-control skill was unavailable; no replacement browser or preview server was installed.

## Contact and storage

The form prepares an email locally and makes no API submission. Form content is not stored in cookies, localStorage or a database. The form remains inert until its submit-prevention handler is installed. Visitors review and send the message in their own mail application. Clipboard controls retain manual-copy fallbacks.

The owner confirmed a working hello@calmsilver.com mailbox, Zoho EU, sole access and no automatic forwarding. No test email was sent. PFA registration is not confirmed; no registration number or address has been invented.

Consent schema version 2 stores `version`, `preferences`, `updatedAt` and `expiresAt` in `calmsilver.consent` for 180 days. `calmsilver.language` is stored only after permission. Withdrawal, expiry and cross-tab rejection remove it. Version 1 choices are renewed after deployment. The record has no random user ID and is not transmitted to a consent server.

`__cf_bm` was observed in public HTTP responses on both origins. It is an HttpOnly, Secure hosting cookie documented by Cloudflare as bot protection with 30 minutes of inactivity. The application panel does not control it. No other provider cookie is asserted without evidence.

## Publication after approval

The existing project ID is retained in `.openai/hosting.json`. GitHub and Sites are separate systems: a GitHub commit does not deploy the website.

The owner authorised deployment of this exact reviewed draft. Push its approved source using the Sites source helper, save the matching archive, explicitly deploy that saved version to the existing project, preserve the public audience and verify the returned status. Synchronise GitHub main separately. Future changes that resolve legal facts must update the shared policy source and must not retrospectively claim those facts were already confirmed.
