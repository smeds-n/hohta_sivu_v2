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
- Intended production domains: `hohta.fi` and `www.hohta.fi`
- Pages project: `hohta-fi`

Verify the production branch, domain associations and automatic deployment
settings in Cloudflare before the production cutover. A separate Workers Builds
integration also runs on this repository; its configuration is managed in
Cloudflare rather than in this source tree.

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
