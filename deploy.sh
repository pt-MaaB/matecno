#!/usr/bin/env bash
# Build the Matecno Astro site and PUBLISH it to the host that actually serves
# matecno.pt: nginx on the Hetzner box, webroot /var/www/matecno.pt/.
#
# matecno.pt is NO LONGER on GitHub Pages — that migration is done. Pushing to
# pt-MaaB/matecno does NOT publish the site. The live publish is the rsync below
# (SSH key-based, no PAT needed).
#
# Usage: ./deploy.sh
set -euo pipefail

# ─── CONFIG ──────────────────────────────────────────────
SERVER_USER="root"
SERVER_HOST="178.105.102.45"              # Hetzner box (LusovexCapital)
REMOTE_DIR="/var/www/matecno.pt"          # nginx web root for matecno.pt
NPM_CACHE="/tmp/npm-cache-matecno"
CHECK_URL="https://matecno.pt/"           # smoke-test after deploy
SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# nginx config (/etc/nginx/sites-available/matecno.pt + geoip2 locale routing)
# lives OUTSIDE the webroot and is untouched by this content sync.
# ─────────────────────────────────────────────────────────

cd "$SITE_DIR"

echo "▸ Building (astro)…"
npm run build --cache "$NPM_CACHE"

if [ ! -f dist/index.html ]; then
  echo "✗ Build produced no dist/index.html — aborting before rsync." >&2
  exit 1
fi

echo "▸ Publishing dist/ → ${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/"
# --delete keeps the webroot clean (only stale _astro hashes are removed; the
# webroot is pure Astro output — no og.png/logo.png/CNAME to preserve).
rsync -az --delete dist/ "${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/"

echo "▸ Verifying ${CHECK_URL} …"
code="$(curl -s -o /dev/null -w '%{http_code}' "$CHECK_URL" || echo 000)"
if [ "$code" = "200" ]; then
  echo "✓ Deployed → https://matecno.pt  (HTTP $code)"
else
  echo "✗ Live check failed: ${CHECK_URL} returned HTTP $code" >&2
  exit 1
fi

# IndexNow (2026-10-08): tell Bing & co. which pages exist, the moment they change; ChatGPT search and Copilot read
# Bing's index. Key + sites: ANTI/empire-brain/seo/indexnow.yaml. Never fails a deploy that already succeeded.
INDEXNOW="$SITE_DIR/../../../../../tools/empire_indexnow.py"
if [ -f "$INDEXNOW" ]; then
  python3 "$INDEXNOW" submit --site matecno || echo "⚠ IndexNow submission failed (the deploy itself is fine)"
fi
