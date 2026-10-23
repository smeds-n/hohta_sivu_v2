#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
output_dir="$repo_root/dist"

mkdir -p "$output_dir/en" "$output_dir/assets"

cp "$repo_root/index.html" \
   "$repo_root/cta.html" \
   "$repo_root/palvelukuvaus.html" \
   "$repo_root/tietosuoja.html" \
   "$repo_root/404.html" \
   "$repo_root/og-image.png" \
   "$repo_root/robots.txt" \
   "$repo_root/sitemap.xml" \
   "$repo_root/styles.css" \
   "$repo_root/main.js" \
   "$repo_root/mockup-1280.webp" \
   "$repo_root/mockup-2560.webp" \
   "$output_dir/"

cp "$repo_root/en/index.html" \
   "$repo_root/en/cta.html" \
   "$repo_root/en/service-description.html" \
   "$repo_root/en/privacy.html" \
   "$output_dir/en/"

cp "$repo_root/assets/service-standard.png" \
   "$repo_root/assets/service-elegant.png" \
   "$repo_root/assets/inter-variable.woff2" \
   "$repo_root/assets/inter-license.txt" \
   "$output_dir/assets/"

cp "$repo_root/_headers" "$repo_root/_redirects" "$output_dir/"
