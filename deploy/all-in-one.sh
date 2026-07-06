#!/usr/bin/env bash
# ============================================================
# ALL-IN-ONE DEPLOY SCRIPT for hiriketiyanoahsurfschool.com
#
# Run as root on a fresh VPS:
#   curl -fsSL https://raw.githubusercontent.com/Izu99/surfsite/main/deploy/all-in-one.sh -o all-in-one.sh
#   bash all-in-one.sh
#
# Does, in order:
#   1. Install Node 22, nginx, pm2, fail2ban, ufw, swap
#   2. Clone the repo to /var/www/surfsite
#   3. Create env files (pauses for you to edit MONGO_URI)
#   4. Install nginx site (pauses for you to install Cloudflare Origin cert)
#   5. Build + start server & client with pm2
#   6. Lock down the firewall (only SSH + Cloudflare IPs on 80/443)
#
# Safe to re-run — every step is idempotent.
# ============================================================
set -euo pipefail

REPO_URL="https://github.com/Izu99/surfsite.git"
APP_DIR="/var/www/surfsite"
DOMAIN="hiriketiyanoahsurfschool.com"

if [[ $EUID -ne 0 ]]; then echo "Run as root: sudo bash $0"; exit 1; fi

pause() {
  echo ""
  read -rp ">>> $1  Press ENTER when done... " _
}

echo "############################################################"
echo "# STEP 1/6 — System packages, Node.js, pm2, swap"
echo "############################################################"
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
apt-get install -y curl git nginx ufw fail2ban unattended-upgrades ca-certificates openssl

if ! command -v node >/dev/null || [[ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
npm install -g pm2

if [[ ! -f /swapfile ]] && [[ $(free -m | awk '/^Mem:/{print $2}') -lt 3000 ]]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
  echo "2G swap enabled"
fi

echo ""
echo "############################################################"
echo "# STEP 2/6 — Clone repository"
echo "############################################################"
if [[ -d "$APP_DIR/.git" ]]; then
  echo "Repo already exists at $APP_DIR — skipping clone"
else
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

echo ""
echo "############################################################"
echo "# STEP 3/6 — Environment files"
echo "############################################################"
if [[ ! -f "$APP_DIR/client/.env.production" ]]; then
  cp "$APP_DIR/deploy/env/client.env.production" "$APP_DIR/client/.env.production"
fi
if [[ ! -f "$APP_DIR/server/.env" ]]; then
  cp "$APP_DIR/deploy/env/server.env.production" "$APP_DIR/server/.env"
  sed -i "s|JWT_SECRET=REPLACE_ME.*|JWT_SECRET=$(openssl rand -hex 32)|" "$APP_DIR/server/.env"
fi

if grep -q "REPLACE_ME" "$APP_DIR/server/.env"; then
  echo ""
  echo "Opening $APP_DIR/server/.env — set MONGO_URI (use a NEW Atlas db user for production)."
  pause "Edit MONGO_URI in the editor that opens, save, and exit"
  nano "$APP_DIR/server/.env"
fi

echo ""
echo "############################################################"
echo "# STEP 4/6 — nginx site + Cloudflare Origin certificate"
echo "############################################################"
mkdir -p /etc/ssl/cloudflare
cp "$APP_DIR/deploy/nginx/$DOMAIN.conf" "/etc/nginx/sites-available/$DOMAIN.conf"
ln -sf "/etc/nginx/sites-available/$DOMAIN.conf" "/etc/nginx/sites-enabled/$DOMAIN.conf"
rm -f /etc/nginx/sites-enabled/default

if [[ ! -f "/etc/ssl/cloudflare/$DOMAIN.pem" ]]; then
  echo ""
  echo "Cloudflare Origin cert not found. In the Cloudflare dashboard:"
  echo "  SSL/TLS -> Origin Server -> Create Certificate (defaults are fine)"
  echo "Then paste the two blocks into these files on THIS server:"
  echo "  /etc/ssl/cloudflare/$DOMAIN.pem   (Origin Certificate)"
  echo "  /etc/ssl/cloudflare/$DOMAIN.key   (Private Key)"
  pause "Create the cert in Cloudflare and paste both files on this server"
  chmod 600 "/etc/ssl/cloudflare/$DOMAIN.key" 2>/dev/null || true
fi

nginx -t && systemctl reload nginx

echo ""
echo "############################################################"
echo "# STEP 5/6 — Build & start (server + client via pm2)"
echo "############################################################"
cd "$APP_DIR/server"
npm ci
npm run build

cd "$APP_DIR/client"
npm ci
npm run build

pm2 startOrReload "$APP_DIR/deploy/ecosystem.config.js"
pm2 save
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true

nginx -t && systemctl reload nginx

sleep 3
curl -sf http://127.0.0.1:5000/health >/dev/null && echo "API OK" || echo "!! API not responding — check: pm2 logs surfsite-api"
curl -sf -o /dev/null http://127.0.0.1:3000 && echo "Frontend OK" || echo "!! Frontend not responding — check: pm2 logs surfsite-web"

echo ""
echo "############################################################"
echo "# STEP 6/6 — Firewall (block unnecessary ports)"
echo "############################################################"
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp comment 'SSH'

for ip in $(curl -fsS https://www.cloudflare.com/ips-v4); do
  ufw allow proto tcp from "$ip" to any port 80,443 comment 'Cloudflare'
done
for ip in $(curl -fsS https://www.cloudflare.com/ips-v6); do
  ufw allow proto tcp from "$ip" to any port 80,443 comment 'Cloudflare'
done

ufw --force enable
ufw status verbose

systemctl enable --now fail2ban
dpkg-reconfigure -f noninteractive unattended-upgrades

echo ""
echo "############################################################"
echo "# DONE"
echo "############################################################"
echo "Site:   https://$DOMAIN"
echo "Health: https://$DOMAIN/health"
echo ""
echo "In the Cloudflare dashboard, set:"
echo "  SSL/TLS -> Overview -> Full (strict)"
echo "  SSL/TLS -> Edge Certificates -> Always Use HTTPS: On"
echo ""
echo "To deploy future updates, just run:"
echo "  bash $APP_DIR/deploy/deploy.sh"
