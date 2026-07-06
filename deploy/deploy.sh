#!/usr/bin/env bash
# ============================================================
# DEPLOY / UPDATE script — run this every time you push changes:
#   bash /var/www/surfsite/deploy/deploy.sh
# Pulls latest code, builds server + client, (re)starts pm2,
# reloads nginx. Safe to run repeatedly.
# ============================================================
set -euo pipefail

APP_DIR="/var/www/surfsite"

echo "==> Pulling latest code"
cd "$APP_DIR"
git fetch origin main
git reset --hard origin/main

echo "==> Building API (server/)"
cd "$APP_DIR/server"
if [[ ! -f .env ]]; then
  echo "ERROR: server/.env missing — run 01-setup-vps.sh first and edit it."; exit 1
fi
if grep -q "REPLACE_ME" .env; then
  echo "ERROR: server/.env still has REPLACE_ME placeholders — edit it first."; exit 1
fi
npm ci
npm run build

echo "==> Building frontend (client/)"
cd "$APP_DIR/client"
if [[ ! -f .env.production ]]; then
  echo "ERROR: client/.env.production missing — run 01-setup-vps.sh first."; exit 1
fi
npm ci
npm run build

echo "==> Starting/reloading pm2 processes"
pm2 startOrReload "$APP_DIR/deploy/ecosystem.config.js"
pm2 save
# Make pm2 start on boot (idempotent)
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true

echo "==> Reloading nginx"
nginx -t && systemctl reload nginx

echo ""
echo "==> Health checks"
sleep 3
curl -sf http://127.0.0.1:5000/health && echo "  API OK" || echo "  !! API not responding on :5000 — check: pm2 logs surfsite-api"
curl -sf -o /dev/null http://127.0.0.1:3000 && echo "  Frontend OK" || echo "  !! Frontend not responding on :3000 — check: pm2 logs surfsite-web"

echo ""
echo "Deploy finished. Site: https://hiriketiyanoahsurfschool.com"
