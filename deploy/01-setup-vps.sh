#!/usr/bin/env bash
# ============================================================
# ONE-TIME VPS SETUP for hiriketiyanoahsurfschool.com
# Run as root (or with sudo) on a fresh Ubuntu/Debian VPS:
#   bash 01-setup-vps.sh
# Installs Node 22, nginx, pm2, fail2ban; clones the repo to
# /var/www/surfsite; installs env files and the nginx site.
# ============================================================
set -euo pipefail

REPO_URL="https://github.com/Izu99/surfsite.git"
APP_DIR="/var/www/surfsite"
DOMAIN="hiriketiyanoahsurfschool.com"

if [[ $EUID -ne 0 ]]; then echo "Run as root: sudo bash $0"; exit 1; fi

echo "==> [1/7] System packages"
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
apt-get install -y curl git nginx ufw fail2ban unattended-upgrades ca-certificates

echo "==> [2/7] Node.js 22 + pm2"
if ! command -v node >/dev/null || [[ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
npm install -g pm2

echo "==> [3/7] Swap (needed to build Next.js on small VPS)"
if [[ ! -f /swapfile ]] && [[ $(free -m | awk '/^Mem:/{print $2}') -lt 3000 ]]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
  echo "    2G swap enabled"
fi

echo "==> [4/7] Clone repository"
if [[ -d "$APP_DIR/.git" ]]; then
  echo "    Repo already exists at $APP_DIR — skipping clone"
else
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

echo "==> [5/7] Environment files"
if [[ ! -f "$APP_DIR/client/.env.production" ]]; then
  cp "$APP_DIR/deploy/env/client.env.production" "$APP_DIR/client/.env.production"
fi
if [[ ! -f "$APP_DIR/server/.env" ]]; then
  cp "$APP_DIR/deploy/env/server.env.production" "$APP_DIR/server/.env"
  # Auto-generate a fresh JWT secret
  sed -i "s|JWT_SECRET=REPLACE_ME.*|JWT_SECRET=$(openssl rand -hex 32)|" "$APP_DIR/server/.env"
  echo ""
  echo "    !!! EDIT $APP_DIR/server/.env — set MONGO_URI before deploying !!!"
  echo ""
fi

echo "==> [6/7] nginx site"
mkdir -p /etc/ssl/cloudflare
cp "$APP_DIR/deploy/nginx/$DOMAIN.conf" "/etc/nginx/sites-available/$DOMAIN.conf"
ln -sf "/etc/nginx/sites-available/$DOMAIN.conf" "/etc/nginx/sites-enabled/$DOMAIN.conf"
rm -f /etc/nginx/sites-enabled/default
# nginx will fail to start until the Cloudflare Origin cert exists — see DEPLOY.md step 4:
#   /etc/ssl/cloudflare/$DOMAIN.pem  and  /etc/ssl/cloudflare/$DOMAIN.key
if [[ -f "/etc/ssl/cloudflare/$DOMAIN.pem" ]]; then
  nginx -t && systemctl reload nginx
else
  echo "    !!! Cloudflare Origin certificate not found yet."
  echo "    Create it in Cloudflare dashboard (SSL/TLS -> Origin Server) and save as:"
  echo "      /etc/ssl/cloudflare/$DOMAIN.pem   (certificate)"
  echo "      /etc/ssl/cloudflare/$DOMAIN.key   (private key)"
  echo "    Then run:  nginx -t && systemctl reload nginx"
fi

echo "==> [7/7] fail2ban + automatic security updates"
systemctl enable --now fail2ban
dpkg-reconfigure -f noninteractive unattended-upgrades

echo ""
echo "============================================================"
echo " Setup done. Next steps:"
echo "  1. Edit $APP_DIR/server/.env (MONGO_URI)"
echo "  2. Install the Cloudflare Origin cert (see above / DEPLOY.md)"
echo "  3. Run:  bash $APP_DIR/deploy/deploy.sh"
echo "  4. Run:  bash $APP_DIR/deploy/02-firewall-cloudflare.sh"
echo "============================================================"
