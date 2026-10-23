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

The graph server's CSP observed on 2026-10-23 allows framing only by `hohta.fi`
and `www.hohta.fi`. Preview embeds need their Pages origins explicitly allowed
by the separate hardening/deployment owner. Do not broaden that policy as a
side effect of a marketing-site deployment.
