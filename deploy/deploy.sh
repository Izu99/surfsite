#!/bin/bash
set -e

cd /var/www/surfsite

echo "Untracking .env files to prevent pull conflicts..."
git rm --cached server/.env 2>/dev/null || true
git rm --cached client/.env.production 2>/dev/null || true

echo "Pulling latest changes..."
git pull

echo "Installing server dependencies..."
cd server
npm install

echo "Building server..."
npm run build

echo "Installing client dependencies..."
cd ../client
npm install

echo "Building client..."
npm run build

echo "Restarting Noah Surf School PM2 processes..."
cd ..
pm2 restart noahsurf-api noahsurf-web

echo "Deploy complete."
