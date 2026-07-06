#!/usr/bin/env bash
# ============================================================
# FIREWALL HARDENING — run once, as root:
#   bash 02-firewall-cloudflare.sh
#
# - Blocks ALL incoming ports by default (3000, 5000, MongoDB,
#   everything — nothing unnecessary stays open)
# - Allows SSH (22)
# - Allows 80/443 ONLY from Cloudflare's IP ranges, so nobody
#   can bypass Cloudflare and hit the VPS IP directly
# ============================================================
set -euo pipefail

if [[ $EUID -ne 0 ]]; then echo "Run as root: sudo bash $0"; exit 1; fi

echo "==> Resetting UFW to a clean state"
ufw --force reset

echo "==> Default policy: deny all incoming, allow outgoing"
ufw default deny incoming
ufw default allow outgoing

echo "==> Allow SSH (port 22)"
ufw allow 22/tcp comment 'SSH'

echo "==> Allow 80/443 from Cloudflare ranges only"
for ip in $(curl -fsS https://www.cloudflare.com/ips-v4); do
  ufw allow proto tcp from "$ip" to any port 80,443 comment 'Cloudflare'
done
for ip in $(curl -fsS https://www.cloudflare.com/ips-v6); do
  ufw allow proto tcp from "$ip" to any port 80,443 comment 'Cloudflare'
done

echo "==> Enabling firewall"
ufw --force enable
ufw status verbose

echo ""
echo "Done. Only SSH is publicly reachable; web traffic must come"
echo "through Cloudflare. Ports 3000/5000 etc. are blocked."
echo ""
echo "Optional (stronger): restrict SSH to your home IP:"
echo "  ufw delete allow 22/tcp && ufw allow from YOUR_IP to any port 22 proto tcp"
