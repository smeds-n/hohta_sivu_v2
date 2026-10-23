# Hohta website

Static Finnish and English marketing website for `hohta.fi`.

## Source and branches

`main` is the release source. The reviewed website changes were developed on
`cloudflare-app` and brought into `main` by fast-forward, preserving the existing
commits and the revisions used by the verified Pages previews.

The website has no uncommitted application changes. Backend services and fleet
configuration live in separate repositories (`../hohta-backend`,
`../hohta-frontend`, and `../fleet`); their working trees are managed separately.

## Build

```sh
sh scripts/build-site.sh
```

The build copies an explicit list of public files into `dist/`. That directory
is ignored by Git. No package installation is needed for this static build.

Cloudflare Pages settings:

- Build command: `sh scripts/build-site.sh`
- Output directory: `dist`
- Production branch: `main` (automatic production deployments enabled)
- Active production domains: `hohta.fi` and `www.hohta.fi`
- Pages project: `hohta-fi`

The production cutover was completed on 2026-10-23. Pushes to `main` publish to
the production domains. Niklas disconnected the separate `hohta-sivu-v2` Workers
Builds repository integration in Cloudflare; the Worker itself is retained.
See `notes/site-operations.md` for verification evidence and redirect follow-up.

## Main files

- `index.html`, `en/index.html`: landing pages and enquiry forms.
- `palvelukuvaus.html`, `en/service-description.html`: packages and pricing.
- `cta.html`, `en/cta.html`: contact pages. Microsoft booking is retired.
- `tietosuoja.html`, `en/privacy.html`: privacy notices.
- `styles.css`, `main.js`: shared appearance and browser interactions.
- `_headers`, `_redirects`, `404.html`: Pages headers, legacy links and errors.
- `scripts/social-card.html`: source for the committed social-sharing image.
- `notes/site-operations.md`: form provider, retention policy, delivery-test
  evidence, preview embedding and production cutover notes.

Use a Pages deployment to verify clean URLs and redirect behavior; a basic
static file server does not reproduce all Pages routing rules.

## Release preparation

Review `git status` and the commits ahead of `origin/main` before publishing.
Keep website changes in this repository and backend/fleet changes in their own
repositories. Confirm the intended Cloudflare deployment target before pushing
a release branch, because pushes can trigger automatic builds and publication.
