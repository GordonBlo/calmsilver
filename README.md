# CalmSilver

**Live website:** https://calmsilver.richardpeter-andre.chatgpt.site

**English:** https://calmsilver.richardpeter-andre.chatgpt.site/?lang=en

A buildless, bilingual company landing page. Romanian is the default language; English is selected with the language switcher or `?lang=en`. An explicit language query takes priority over the browser-local preference.

## Contents

- `dist/index.html`: semantic landing page, project previews, FAQs and accessible native dialogs.
- `dist/styles.css`: responsive editorial design with reduced-motion support.
- `dist/app.js`: Romanian/English copy, navigation, email draft and clipboard fallback.
- `dist/assets/silver-sculpture.webp`: original AI-generated website artwork, 99 KB.
- `dist/assets/favicon.svg`: original vector brand mark.
- `dist/assets/social-cover.jpg`: sharing artwork.

No package installation or build step is needed. Deploy `dist` as static files.

## Contact flow

The contact dialog composes an email to `hello@calmsilver.com`. The visitor reviews and sends it using their own mail client. The form also displays a copyable draft when no mail client is configured. It makes no API submission, saves no form data and does not report a message as sent. Receiving emails depends on the actual mailbox configuration, which is outside this website.

BuildFlow and MarginPilot are identified as the founder's own projects. MarginPilot is marked in development. Interface previews are labelled conceptual. There are no invented customers, testimonials, prices or performance guarantees.

## Artwork

Generated with the built-in Imagegen tool. Prompt: a refined photorealistic silver ribbon sculpture shaped as a softly twisted continuous loop, subtly brushed metal and mirror highlights, on an ivory limestone cylindrical plinth, soft daylight, warm off-white architectural studio, quiet luxury, portrait composition, no lettering, people or watermark. Converted to WebP for the website; the original artwork is preserved.

## Publication

The Sites project identity is stored in `.openai/hosting.json`. Source and deployments use the Sites workflow. The website is publicly accessible without ChatGPT sign-in. The `calmsilver.com` custom domain is not connected yet. GitHub stores the source; the current live website is hosted with Sites.

## Validation

See `VALIDATION.md` for verification results and limits.

## Legal and consent status (11 October 2026)

CalmSilver is an unregistered brand project operated by Andre Richard-Peter. The planned hello@calmsilver.com mailbox is being activated. The footer provides both supplied ANPC/SAL images, aligned left and right and linked to the SAL information page and permanent cookie settings in Romanian and English.

The site code uses calmsilver.consent (180-day local consent record) and calmsilver.language (optional language preference). Language storage is disabled before permission and deleted on withdrawal or expiry. No site analytics or advertising integration is installed. The panel controls only CalmSilver application storage; hosting mechanisms require separate verification.

The supplied GDPR/cookie PDFs are unfilled templates and have not been published. Detailed policies and downloadable PDFs remain pending verified infrastructure information and an operational contact address. This release is not a claim of complete legal compliance.

