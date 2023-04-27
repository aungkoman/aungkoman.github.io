---
layout: post
title: Macbook Pro as Power Bank
---

## install PM 

 npm install pm2 -g


## run project 

 pm2 start index.js



## List Process

pm2 list


## Stop Process 

pm2 stop app_name / process index

pm2 stop 0

## Restart on file changes

pm2 start app.js --watch

## Logs

root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# ls
Procfile   app.json    index.js      package-lock.json  public   views
README.md  backup-gps  node_modules  package.json       test.js
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# sudo npm install pm2@latest -g
sudo: npm: command not found
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# npm install
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'node-js-getting-started@0.3.0',
npm WARN EBADENGINE   required: { node: '14.x' },
npm WARN EBADENGINE   current: { node: 'v19.3.0', npm: '9.2.0' }
npm WARN EBADENGINE }

up to date, audited 201 packages in 3s

45 packages are looking for funding
  run `npm fund` for details

10 vulnerabilities (1 moderate, 7 high, 2 critical)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# npm install pm2 -g
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

changed 184 packages in 14s

12 packages are looking for funding
  run `npm fund` for details
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 start index.js

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

[PM2][ERROR] Script already launched, add -f option to force re-execution
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 start index.js -f

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

[PM2] Starting /var/www/html/socket/index.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
│ 1  │ index              │ fork     │ 12   │ online    │ 0%       │ 48.6mb   │
│ 2  │ index              │ fork     │ 0    │ online    │ 0%       │ 15.1mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 stop 1

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

[PM2] Applying action stopProcessId on app [1](ids: [ '1' ])
[PM2] [index](1) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
│ 1  │ index              │ fork     │ 12   │ stopped   │ 0%       │ 0b       │
│ 2  │ index              │ fork     │ 0    │ online    │ 0%       │ 56.1mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 stop 2

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

[PM2] Applying action stopProcessId on app [2](ids: [ '2' ])
[PM2] [index](2) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
│ 1  │ index              │ fork     │ 12   │ stopped   │ 0%       │ 0b       │
│ 2  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 list

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
│ 1  │ index              │ fork     │ 12   │ stopped   │ 0%       │ 0b       │
│ 2  │ index              │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 kill

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.2
Local PM2 version: 5.3.0

[PM2] Applying action deleteProcessId on app [all](ids: [ 0, 1, 2 ])
[PM2] [index](0) ✓
[PM2] [index](1) ✓
[PM2] [index](2) ✓
[PM2] [v] All Applications Stopped
[PM2] [v] PM2 Daemon Stopped
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 list
[PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
[PM2] PM2 Successfully daemonized
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. App index index differs. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 start index.js
[PM2] Starting /var/www/html/socket/index.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ online    │ 0%       │ 39.7mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.
root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# 



https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04

https://www.codespeedy.com/remove-node-js-app-from-pm2-process-list/#:~:text=In%20order%20to%20delete%20a,Doing%20this%20is%20quite%20easy.&text=We%20can%20clearly%20see%20the,or%20remove%20the%20specific%20Node.

https://pm2.keymetrics.io/docs/usage/watch-and-restart/




root@ubuntu-s-1vcpu-2gb-nyc1-01:/var/www/html/socket# pm2 start index.js --watch
[PM2] Starting /var/www/html/socket/index.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ index              │ fork     │ 0    │ online    │ 0%       │ 44.1mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.