---
layout: post
title: "New Laravel Project with Backend API and Filament for Dr. Token"
date: 2024-12-15
categories: productivity programming
---
Create laravel project

Create github repo and connect.

User CRUD api with authentication services

Create postman collection.

ER Diagram and 
Migrations, Seeder and Backend API
JSON Resources

Deployment.

Phase one completed.

---

Create new folder.

```bash
composer create-project laravel/laravel example-app
composer create-project laravel/laravel .

php artisan serve

git init

git remote add origin https://github.com/mmsoftware100/drtoken-backend.git


php artisan make:model Todo -mcs
php artisan make:model Role -ms
php artisan make:seeder UserSeeder

composer require laravel/passport




```

start Xampp
create database

update .env file


https://excalidraw.com/

ဒါနဲ့ ဆွဲကြမလား?


### Bash Log

```bash
Last login: Mon Dec 16 18:38:53 on console
msd@192 drtoken-backend % composer create-project laravel/laravel .          
Creating a "laravel/laravel" project at "./"
Cannot use laravel/laravel's latest version v11.4.0 as it requires php ^8.2 which is not satisfied by your platform.
Installing laravel/laravel (v10.3.3)
  - Installing laravel/laravel (v10.3.3): Extracting archive
Created project in /Applications/XAMPP/xamppfiles/htdocs/drtoken-backend/.
> @php -r "file_exists('.env') || copy('.env.example', '.env');"
Loading composer repositories with package information
Updating dependencies
Lock file operations: 111 installs, 0 updates, 0 removals
  - Locking brick/math (0.12.1)
  - Locking carbonphp/carbon-doctrine-types (2.1.0)
  - Locking dflydev/dot-access-data (v3.0.3)
  - Locking doctrine/inflector (2.0.10)
  - Locking doctrine/lexer (3.0.1)
  - Locking dragonmantank/cron-expression (v3.4.0)
  - Locking egulias/email-validator (4.0.2)
  - Locking fakerphp/faker (v1.24.1)
  - Locking filp/whoops (2.16.0)
  - Locking fruitcake/php-cors (v1.3.0)
  - Locking graham-campbell/result-type (v1.1.3)
  - Locking guzzlehttp/guzzle (7.9.2)
  - Locking guzzlehttp/promises (2.0.4)
  - Locking guzzlehttp/psr7 (2.7.0)
  - Locking guzzlehttp/uri-template (v1.0.3)
  - Locking hamcrest/hamcrest-php (v2.0.1)
  - Locking laravel/framework (v10.48.25)
  - Locking laravel/pint (v1.18.3)
  - Locking laravel/prompts (v0.1.25)
  - Locking laravel/sail (v1.39.1)
  - Locking laravel/sanctum (v3.3.3)
  - Locking laravel/serializable-closure (v1.3.7)
  - Locking laravel/tinker (v2.10.0)
  - Locking league/commonmark (2.6.0)
  - Locking league/config (v1.2.0)
  - Locking league/flysystem (3.29.1)
  - Locking league/flysystem-local (3.29.0)
  - Locking league/mime-type-detection (1.16.0)
  - Locking mockery/mockery (1.6.12)
  - Locking monolog/monolog (3.8.1)
  - Locking myclabs/deep-copy (1.12.1)
  - Locking nesbot/carbon (2.72.5)
  - Locking nette/schema (v1.3.2)
  - Locking nette/utils (v4.0.5)
  - Locking nikic/php-parser (v5.3.1)
  - Locking nunomaduro/collision (v7.11.0)
  - Locking nunomaduro/termwind (v1.17.0)
  - Locking phar-io/manifest (2.0.4)
  - Locking phar-io/version (3.2.1)
  - Locking phpoption/phpoption (1.9.3)
  - Locking phpunit/php-code-coverage (10.1.16)
  - Locking phpunit/php-file-iterator (4.1.0)
  - Locking phpunit/php-invoker (4.0.0)
  - Locking phpunit/php-text-template (3.0.1)
  - Locking phpunit/php-timer (6.0.0)
  - Locking phpunit/phpunit (10.5.39)
  - Locking psr/clock (1.0.0)
  - Locking psr/container (2.0.2)
  - Locking psr/event-dispatcher (1.0.0)
  - Locking psr/http-client (1.0.3)
  - Locking psr/http-factory (1.1.0)
  - Locking psr/http-message (2.0)
  - Locking psr/log (3.0.2)
  - Locking psr/simple-cache (3.0.0)
  - Locking psy/psysh (v0.12.7)
  - Locking ralouphie/getallheaders (3.0.3)
  - Locking ramsey/collection (2.0.0)
  - Locking ramsey/uuid (4.7.6)
  - Locking sebastian/cli-parser (2.0.1)
  - Locking sebastian/code-unit (2.0.0)
  - Locking sebastian/code-unit-reverse-lookup (3.0.0)
  - Locking sebastian/comparator (5.0.3)
  - Locking sebastian/complexity (3.2.0)
  - Locking sebastian/diff (5.1.1)
  - Locking sebastian/environment (6.1.0)
  - Locking sebastian/exporter (5.1.2)
  - Locking sebastian/global-state (6.0.2)
  - Locking sebastian/lines-of-code (2.0.2)
  - Locking sebastian/object-enumerator (5.0.0)
  - Locking sebastian/object-reflector (3.0.0)
  - Locking sebastian/recursion-context (5.0.0)
  - Locking sebastian/type (4.0.0)
  - Locking sebastian/version (4.0.1)
  - Locking spatie/backtrace (1.7.1)
  - Locking spatie/error-solutions (1.1.2)
  - Locking spatie/flare-client-php (1.10.0)
  - Locking spatie/ignition (1.15.0)
  - Locking spatie/laravel-ignition (2.9.0)
  - Locking symfony/console (v6.4.15)
  - Locking symfony/css-selector (v6.4.13)
  - Locking symfony/deprecation-contracts (v3.5.1)
  - Locking symfony/error-handler (v6.4.14)
  - Locking symfony/event-dispatcher (v6.4.13)
  - Locking symfony/event-dispatcher-contracts (v3.5.1)
  - Locking symfony/finder (v6.4.13)
  - Locking symfony/http-foundation (v6.4.16)
  - Locking symfony/http-kernel (v6.4.16)
  - Locking symfony/mailer (v6.4.13)
  - Locking symfony/mime (v6.4.13)
  - Locking symfony/polyfill-ctype (v1.31.0)
  - Locking symfony/polyfill-intl-grapheme (v1.31.0)
  - Locking symfony/polyfill-intl-idn (v1.31.0)
  - Locking symfony/polyfill-intl-normalizer (v1.31.0)
  - Locking symfony/polyfill-mbstring (v1.31.0)
  - Locking symfony/polyfill-php80 (v1.31.0)
  - Locking symfony/polyfill-php83 (v1.31.0)
  - Locking symfony/polyfill-uuid (v1.31.0)
  - Locking symfony/process (v6.4.15)
  - Locking symfony/routing (v6.4.16)
  - Locking symfony/service-contracts (v3.5.1)
  - Locking symfony/string (v6.4.15)
  - Locking symfony/translation (v6.4.13)
  - Locking symfony/translation-contracts (v3.5.1)
  - Locking symfony/uid (v6.4.13)
  - Locking symfony/var-dumper (v6.4.15)
  - Locking symfony/yaml (v6.4.13)
  - Locking theseer/tokenizer (1.2.3)
  - Locking tijsverkoyen/css-to-inline-styles (v2.2.7)
  - Locking vlucas/phpdotenv (v5.6.1)
  - Locking voku/portable-ascii (2.0.3)
  - Locking webmozart/assert (1.11.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 111 installs, 0 updates, 0 removals
  - Downloading dragonmantank/cron-expression (v3.4.0)
  - Downloading symfony/deprecation-contracts (v3.5.1)
  - Downloading fakerphp/faker (v1.24.1)
  - Downloading symfony/http-foundation (v6.4.16)
  - Downloading guzzlehttp/promises (2.0.4)
  - Downloading laravel/pint (v1.18.3)
  - Downloading symfony/string (v6.4.15)
  - Downloading symfony/service-contracts (v3.5.1)
  - Downloading symfony/console (v6.4.15)
  - Downloading voku/portable-ascii (2.0.3)
  - Downloading symfony/css-selector (v6.4.13)
  - Downloading symfony/var-dumper (v6.4.15)
  - Downloading symfony/uid (v6.4.13)
  - Downloading symfony/routing (v6.4.16)
  - Downloading symfony/process (v6.4.15)
  - Downloading symfony/mime (v6.4.13)
  - Downloading symfony/event-dispatcher-contracts (v3.5.1)
  - Downloading symfony/event-dispatcher (v6.4.13)
  - Downloading symfony/mailer (v6.4.13)
  - Downloading symfony/error-handler (v6.4.14)
  - Downloading symfony/http-kernel (v6.4.16)
  - Downloading symfony/finder (v6.4.13)
  - Downloading nunomaduro/termwind (v1.17.0)
  - Downloading symfony/translation-contracts (v3.5.1)
  - Downloading symfony/translation (v6.4.13)
  - Downloading monolog/monolog (3.8.1)
  - Downloading league/mime-type-detection (1.16.0)
  - Downloading league/flysystem (3.29.1)
  - Downloading league/flysystem-local (3.29.0)
  - Downloading nette/schema (v1.3.2)
  - Downloading league/commonmark (2.6.0)
  - Downloading laravel/serializable-closure (v1.3.7)
  - Downloading laravel/framework (v10.48.25)
  - Downloading symfony/yaml (v6.4.13)
  - Downloading laravel/sail (v1.39.1)
  - Downloading nikic/php-parser (v5.3.1)
  - Downloading psy/psysh (v0.12.7)
  - Downloading laravel/tinker (v2.10.0)
  - Downloading filp/whoops (2.16.0)
  - Downloading nunomaduro/collision (v7.11.0)
  - Downloading sebastian/comparator (5.0.3)
  - Downloading myclabs/deep-copy (1.12.1)
  - Downloading phpunit/phpunit (10.5.39)
  - Downloading spatie/error-solutions (1.1.2)
  - Downloading spatie/backtrace (1.7.1)
  - Downloading spatie/flare-client-php (1.10.0)
  - Downloading spatie/laravel-ignition (2.9.0)
 46/47 [===========================>]  97%
```
