// pm2 process file — used by deploy.sh (pm2 startOrReload)
module.exports = {
  apps: [
    {
      name: 'surfsite-api',
      cwd: '/var/www/surfsite/server',
      script: 'dist/app.js',
      env: { NODE_ENV: 'production' },
      max_memory_restart: '300M',
      time: true,
    },
    {
      name: 'surfsite-web',
      cwd: '/var/www/surfsite/client',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -H 127.0.0.1 -p 3000',
      env: { NODE_ENV: 'production' },
      max_memory_restart: '400M',
      time: true,
    },
  ],
}
