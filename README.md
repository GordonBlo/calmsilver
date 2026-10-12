# CalmSilver

**Live website:** https://calmsilver.richardpeter-andre.chatgpt.site

**English:** https://calmsilver.richardpeter-andre.chatgpt.site/?lang=en

**Hungarian:** https://calmsilver.richardpeter-andre.chatgpt.site/?lang=hu

A buildless, trilingual company landing page. Romanian is the default language; English and Hungarian are selected with the RO / EN / HU language switcher or `?lang=en` / `?lang=hu`. An explicit supported language query takes priority over the browser-local preference. Preferences are stored only with consent.

## Contents

- `dist/index.html`: semantic landing page, project previews, FAQs and accessible native dialogs.
- `dist/styles.css`: responsive editorial design with reduced-motion support.
- `dist/app.js`: Romanian/English/Hungarian copy, navigation, email draft and clipboard fallback.
- `dist/refinement.css`: approved spacing refinements, centred headline and soft tonal shadow.
- `dist/assets/favicon.svg`: original vector brand mark.
- `dist/consent.js`: application consent and language preference controls.
- `dist/assets/anpc-sal.jpg` and `dist/assets/anpc-sal-square.jpg`: supplied ANPC/SAL footer images.

No package installation or build step is needed. Deploy `dist` as static files.

## Contact flow

The contact address has a subtle clipboard icon. It copies only `hello@calmsilver.com`, with a brief confirmation in the selected language. If clipboard access is unavailable, it attempts a selected-field copy, then offers manual copying. The original email link remains available.

The contact dialog composes an email to `hello@calmsilver.com`. The visitor reviews and sends it using their own mail client. The form also displays a copyable draft when no mail client is configured. It makes no API submission, saves no form data and does not report a message as sent. Receiving emails depends on the actual mailbox configuration, which is outside this website.

BuildFlow and MarginPilot are identified as the founder's own projects. MarginPilot is marked in development. Interface previews are labelled conceptual. There are no invented customers, testimonials, prices or performance guarantees.

## Design

The approved 12 October 2026 revision preserves the original colour palette, font families, logo, copy and section order. The generated sculpture and its sharing image have been removed. The opening is text-led, with a larger centred headline and a soft tonal shadow. Decorative details are reduced; the supplied SAL images are about 8–9% smaller. The standalone draft was reviewed before publication.

The Hungarian language addition covers all application and consent copy, metadata, accessibility labels, the contact draft and clipboard feedback. ANPC/SAL images retain their official Romanian artwork and have translated alternative text. The mobile language buttons have a small spacing allowance for the third choice.

## Publication

The Sites project identity is stored in `.openai/hosting.json`. Source and deployments use the Sites workflow. The website is publicly accessible without ChatGPT sign-in. The `calmsilver.com` custom domain is not connected yet. GitHub stores the source; the current live website is hosted with Sites.

## Validation

See `VALIDATION.md` for verification results and limits.

## Legal and consent status (11 October 2026)

CalmSilver is an unregistered brand project operated by Andre Richard-Peter. The website uses hello@calmsilver.com. Mail delivery depends on the external mailbox setup; the visible activation notice was removed in the approved design revision. The footer provides both supplied ANPC/SAL images, aligned left and right and linked to the SAL information page and permanent cookie settings in Romanian, English and Hungarian.

The site code uses calmsilver.consent (180-day local consent record) and calmsilver.language (optional language preference). Language storage is disabled before permission and deleted on withdrawal or expiry. No site analytics or advertising integration is installed. The panel controls only CalmSilver application storage; hosting mechanisms require separate verification.

The supplied GDPR/cookie PDFs are unfilled templates and have not been published. Detailed policies and downloadable PDFs remain pending verified infrastructure information and an operational contact address. This release is not a claim of complete legal compliance.

