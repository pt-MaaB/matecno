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

# ─── GUARD: publish only what git holds (2026-10-27) ─────
# This script builds the working tree. An uncommitted GraphExplorer.astro edit went live on 2026-10-17 and git never
# held it, so the SEO auto-ship rail (ANTI tools/empire_seo_ship.py) held every approved wording as "drift" until a
# session reconciled it on 10-26. Untracked files under src/ or public/ count: a new page would go live the same way.
dirty="$(git status --porcelain --untracked-files=all -- src public nginx astro.config.mjs tailwind.config.mjs \
  package.json package-lock.json tsconfig.json)"
if [ -n "$dirty" ] && [ "${ALLOW_DIRTY:-0}" != "1" ]; then
  echo "✗ These changes are not committed, so they would go live without git knowing:" >&2
  echo "$dirty" >&2
  echo "  Commit them, then run ./deploy.sh again." >&2
  echo "  ALLOW_DIRTY=1 ./deploy.sh publishes anyway; the SEO auto-ship rail then holds until git matches the site." >&2
  exit 1
fi
# ─────────────────────────────────────────────────────────

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

# ─── REDIRECTS (2026-10-27) ──────────────────────────────
# nginx/redirects.conf → /etc/nginx/snippets/matecno-redirects.conf, included once in the matecno.pt server block.
# nginx -t before the reload; if the test fails, the previous site file and snippet come back and nothing reloads.
echo "▸ Redirects (nginx/redirects.conf)…"
scp -q nginx/redirects.conf "${SERVER_USER}@${SERVER_HOST}:/tmp/matecno-redirects.conf"
ssh "${SERVER_USER}@${SERVER_HOST}" 'bash -s' <<'REMOTE'
set -euo pipefail
SITE=/etc/nginx/sites-available/matecno.pt
SNIP=/etc/nginx/snippets/matecno-redirects.conf
TS=$(date +%Y%m%d-%H%M%S)
cp -a "$SITE" "/root/nginx-matecno.pt.bak-$TS"
had_snip=0; [ -f "$SNIP" ] && { cp -a "$SNIP" "/root/matecno-redirects.conf.bak-$TS"; had_snip=1; }
install -m 0644 /tmp/matecno-redirects.conf "$SNIP"
python3 - "$SITE" <<'PY'
import sys
p = sys.argv[1]; s = open(p).read()
line = "    include snippets/matecno-redirects.conf;\n"
anchor = "    index index.html;\n"            # first server block (443) only
if line not in s:
    assert anchor in s, "anchor not found in " + p
    s = s.replace(anchor, anchor + line, 1)
    open(p, "w").write(s)
PY
if nginx -t 2>/tmp/matecno-nginx-test.log; then
  systemctl reload nginx
  echo "  redirects live ($(grep -c 'return 301' "$SNIP") rules)"
else
  cat /tmp/matecno-nginx-test.log >&2
  cp -a "/root/nginx-matecno.pt.bak-$TS" "$SITE"
  if [ "$had_snip" = 1 ]; then cp -a "/root/matecno-redirects.conf.bak-$TS" "$SNIP"; else rm -f "$SNIP"; fi
  echo "✗ nginx -t failed: previous config restored, nothing reloaded" >&2
  exit 1
fi
REMOTE

echo "▸ Verifying ${CHECK_URL} …"
code="$(curl -s -o /dev/null -w '%{http_code}' "$CHECK_URL" || echo 000)"
if [ "$code" = "200" ]; then
  echo "✓ Deployed → https://matecno.pt  (HTTP $code)"
else
  echo "✗ Live check failed: ${CHECK_URL} returned HTTP $code" >&2
  exit 1
fi
redir="$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "https://matecno.pt/servicos/emails-profissionais" || true)"
if [ "$redir" = "301 https://matecno.pt/servicos/" ]; then
  echo "✓ Redirects answer (/servicos/emails-profissionais → 301 /servicos/)"
else
  echo "⚠ Redirect check: /servicos/emails-profissionais answered '$redir', expected '301 https://matecno.pt/servicos/'" >&2
fi

# IndexNow (2026-10-08): tell Bing & co. which pages exist, the moment they change; ChatGPT search and Copilot read
# Bing's index. Key + sites: ANTI/empire-brain/seo/indexnow.yaml. Never fails a deploy that already succeeded.
INDEXNOW="$SITE_DIR/../../../../../tools/empire_indexnow.py"
if [ -f "$INDEXNOW" ]; then
  python3 "$INDEXNOW" submit --site matecno || echo "⚠ IndexNow submission failed (the deploy itself is fine)"
fi
