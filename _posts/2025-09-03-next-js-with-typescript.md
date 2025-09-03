---
layout: post
title: "Next.js ကို Type Script ဖြင့် ရေးသားခြင်း"
date: 2025-09-03
categories: life-lessons
author: Cisco
tags: [life] # TAG names should always be lowercase
---


npx create-next-app@latest thank-book-nextjs --typescript

```bash
F:\code\web>npx create-next-app@latest thank-book-nextjs --typescript
Need to install the following packages:
create-next-app@15.5.2
Ok to proceed? (y) y

√ Which linter would you like to use? » ESLint
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack? (recommended) ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in F:\code\web\thank-book-nextjs.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 335 packages, and audited 336 packages in 7m

137 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created thank-book-nextjs at F:\code\web\thank-book-nextjs


F:\code\web>cd thank-book-nextjs


F:\code\web\thank-book-nextjs>npm run dev

> thank-book-nextjs@0.1.0 dev
> next dev --turbopack

 ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of F:\code\web\package-lock.json as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
   See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
 Detected additional lockfiles:
   * F:\code\web\thank-book-nextjs\package-lock.json

   ▲ Next.js 15.5.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.10.15:3000

 ✓ Starting...
 ✓ Ready in 4s
 ○ Compiling / ...
 ✓ Compiled / in 24.9s
 GET / 200 in 26347ms
 ✓ Compiled /favicon.ico in 349ms
 GET /favicon.ico?favicon.0b3bf435.ico 200 in 769ms



```



-- 1. Create a new database
CREATE DATABASE mydatabase;

-- 2. Create a new user with a password
CREATE USER 'thankbook'@'localhost' IDENTIFIED BY 'mypassword';

-- 3. Grant all privileges on the database to the new user
GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';

-- 4. Apply the changes
FLUSH PRIVILEGES;



CREATE DATABASE thankbook;
CREATE USER 'thankbook'@'%' IDENTIFIED BY 'YUljChanNKT4ahotpAsYUGbuKO3nFYKOCusivnuCbpzeqsxSby';
GRANT ALL PRIVILEGES ON thankbook.* TO 'thankbook'@'localhost';



