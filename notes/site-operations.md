# Marketing website operations

## Enquiries

- The public form `gGmWwBq7v` is managed in Formspark. Its notification recipient
  must be `niklas@hohta.fi` (confirmed by Niklas on 2026-10-23). The recipient is
  configured in Formspark, not in HTML.
- Keep an enquiry that does not become a customer for no more than 24 months
  after the last contact (policy confirmed on 2026-10-23).
- Review old enquiries monthly. Delete expired active copies from Formspark and
  the email mailbox, including exports or other active copies. An enquiry's
  submission date is not necessarily its last-contact date.
- Formspark retains deleted submissions for a 30-day recovery period. Technical
  logs, delivery events and provider backups have their own retention periods:
  https://formspark.io/legal/privacy-policy/.
- Review Formspark's DPA, enabled integrations, notification recipients and
  subprocessor list in the owner account. The public site cannot configure or
  verify these account settings.
- Use the language-specific form redirect for successful submissions. An owner-
  approved delivery test should confirm the message appears in the intended
  mailbox; a confirmation page alone does not prove inbox delivery.
- `_append=false` prevents personal form fields being copied into redirect URLs.
  `_error` returns failures to an error state with a direct email fallback.
  `_email.subject` is Formspark's supported notification-subject field.

## Assets and routing

- `sh scripts/build-site.sh` creates the allowlisted Pages output in `dist/`.
- `404.html` gives unknown URLs an HTTP 404 instead of the Pages SPA fallback.
- `_redirects` preserves previous contact and confirmation URLs.
- Inter is self-hosted under `assets/` with its SIL Open Font License, so the
  marketing pages do not request fonts from Google.
- `og-image.png` is rendered from `scripts/social-card.html` at 1200 by 630 pixels.
  Load it in a browser, wait for fonts, and capture that viewport to regenerate.

## Production cutover

Use the successful `hohta-fi` Cloudflare Pages deployment. Verify the apex and
`www` domain associations, DNS, HTTPS, redirects and indexing after cutover, and
retain the previous origin configuration as a rollback reference. Graphs remain
on their separate subdomain. Backend hardening is managed separately.

On 2026-10-23, Niklas explicitly authorized framing by this project's Pages
origins as well as production. The live graph server and backend deployment
source now allow `https://hohta.fi`, `https://www.hohta.fi`,
`https://hohta-fi.pages.dev` and `https://*.hohta-fi.pages.dev`. The nginx config
passed validation as the service user and was gracefully reloaded. Other
security directives were preserved.

## Delivery verification — 2026-10-23

Niklas authorized one test enquiry. The deployed English form submitted it once
with marker `HOHTA-DELIVERY-20261023-01`. Formspark accepted it and returned HTTP
302 to `/en/?submitted=1#kiitos`, with no personal fields in the URL. The success
state was visible and the error state was hidden. Niklas confirmed receipt at
`niklas@hohta.fi`. No repeat submission was made.

## Production deployment — 2026-10-23

- Pages project `hohta-fi` now builds `main` automatically with
  `sh scripts/build-site.sh`, publishing `dist/`. The first successful main
  deployment was `b510c14a-3979-4802-b8a1-467416772e73`, commit `113a2ed`.
- Niklas attached `hohta.fi` and `www.hohta.fi` through the Cloudflare dashboard.
  The Pages API reports both domains, validation, and verification as active.
  Both serve the updated website over HTTPS.
- Niklas confirmed disconnecting the redundant `hohta-sivu-v2` Workers Builds
  integration. Wrangler OAuth cannot independently inspect its build triggers.
- Verified the Finnish and English landing, package, contact, and privacy
  routes, HTTP-to-HTTPS redirect on the apex, legacy contact/confirmation
  redirects, unknown-route HTTP 404, robots.txt, sitemap.xml, and social image.
  The actual versioned stylesheet (`?v=36`) and script (`?v=4`) match the source.
  Bare asset URLs can still return the former origin's cached files; the site
  uses the verified versioned URLs. Cloudflare email obfuscation transforms
  HTML in transit, so HTML byte equality is not a release check.
- Browser inspection confirms the apex canonical, Formspark form action,
  self-hosted font, dashboard iframe, and no horizontal overflow at desktop
  width. The graph server returns HTTP 200 with production and preview origins
  allowed by its framing policy. No additional enquiry was submitted.
- Niklas configured the www-to-apex redirect. Verified HTTP 301 from
  `https://www.hohta.fi/` to `https://hohta.fi/`, including `/en/` and a package
  URL with multiple query parameters; paths and query strings are preserved.
  HTTP on www first redirects to HTTPS on www, then to the HTTPS apex. The
  apex remains HTTP 200.
- Rollback tag `pre-pages-cutover-2026-10-23` preserves the former `origin/main`.
  Local release/API snapshots are under `.git/deployment-backups/2026-10-23/`.
  DNS was changed manually by Niklas; the CLI did not have DNS read access.
