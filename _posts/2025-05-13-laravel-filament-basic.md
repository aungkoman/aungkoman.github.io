---
layout: post
title: "Laravel Filament Basic"
date: 2025-05-13
categories: productivity programming
---

## Create Laravel Project

- [ ] create laravel project
- [ ] add filament
- [ ] add migration
- [ ] add roles, seeder
- [ ] add students, teachers, admin info
- [ ] subject
- [ ] schedule
- [ ] exam
- [ ] marks


admin အတွက် အရင်လုပ်မယ်?
teacher အတွက်။ ဘာသာရပ် နည်းပြတွေ ဘာတွေ မထားတော့ဘူး။
နောက် student အတွက်။


## Entities List

- [ ] Role
- [ ] User
- [ ] Subject
- [ ] Schedule
- [ ] Exam
- [ ] Marks

## Commands

```bash
# create laravel project
composer create-project laravel/laravel .   
# run laravel project
php artisan serve
# Ctrl + C to exit / stop project
# install filament
composer require filament/filament:"^3.3" -W
# install panels
php artisan filament:install --panels

# create database
# update .env file
# migrate
php artisan migrate
# create model, migration, controller , seeder
php artisan make:model Role -mcs

# refresh migration
php artisan migrate:fresh

# seed data
php artisan db:seed

# create seeder
php artisan make:seeder UserSeeder
```

## Logs

```bash
msd@192 school-management-filament % composer create-project laravel/laravel .             

Creating a "laravel/laravel" project at "./"
Cannot use laravel/laravel's latest version v12.0.7 as it requires php ^8.2 which is not satisfied by your platform.
Installing laravel/laravel (v10.3.3)
  - Installing laravel/laravel (v10.3.3): Extracting archive
Created project in /Applications/XAMPP/xamppfiles/htdocs/school-management-filament/.
> @php -r "file_exists('.env') || copy('.env.example', '.env');"
Loading composer repositories with package information
Updating dependencies
Lock file operations: 111 installs, 0 updates, 0 removals
  - Locking brick/math (0.12.3)
  - Locking carbonphp/carbon-doctrine-types (2.1.0)
  - Locking dflydev/dot-access-data (v3.0.3)
  - Locking doctrine/inflector (2.0.10)
  - Locking doctrine/lexer (3.0.1)
  - Locking dragonmantank/cron-expression (v3.4.0)
  - Locking egulias/email-validator (4.0.4)
  - Locking fakerphp/faker (v1.24.1)
  - Locking filp/whoops (2.18.0)
  - Locking fruitcake/php-cors (v1.3.0)
  - Locking graham-campbell/result-type (v1.1.3)
  - Locking guzzlehttp/guzzle (7.9.3)
  - Locking guzzlehttp/promises (2.2.0)
  - Locking guzzlehttp/psr7 (2.7.1)
  - Locking guzzlehttp/uri-template (v1.0.4)
  - Locking hamcrest/hamcrest-php (v2.1.1)
  - Locking laravel/framework (v10.48.29)
  - Locking laravel/pint (v1.20.0)
  - Locking laravel/prompts (v0.1.25)
  - Locking laravel/sail (v1.42.0)
  - Locking laravel/sanctum (v3.3.3)
  - Locking laravel/serializable-closure (v1.3.7)
  - Locking laravel/tinker (v2.10.1)
  - Locking league/commonmark (2.7.0)
  - Locking league/config (v1.2.0)
  - Locking league/flysystem (3.29.1)
  - Locking league/flysystem-local (3.29.0)
  - Locking league/mime-type-detection (1.16.0)
  - Locking mockery/mockery (1.6.12)
  - Locking monolog/monolog (3.9.0)
  - Locking myclabs/deep-copy (1.13.1)
  - Locking nesbot/carbon (2.73.0)
  - Locking nette/schema (v1.3.2)
  - Locking nette/utils (v4.0.6)
  - Locking nikic/php-parser (v5.4.0)
  - Locking nunomaduro/collision (v7.12.0)
  - Locking nunomaduro/termwind (v1.17.0)
  - Locking phar-io/manifest (2.0.4)
  - Locking phar-io/version (3.2.1)
  - Locking phpoption/phpoption (1.9.3)
  - Locking phpunit/php-code-coverage (10.1.16)
  - Locking phpunit/php-file-iterator (4.1.0)
  - Locking phpunit/php-invoker (4.0.0)
  - Locking phpunit/php-text-template (3.0.1)
  - Locking phpunit/php-timer (6.0.0)
  - Locking phpunit/phpunit (10.5.46)
  - Locking psr/clock (1.0.0)
  - Locking psr/container (2.0.2)
  - Locking psr/event-dispatcher (1.0.0)
  - Locking psr/http-client (1.0.3)
  - Locking psr/http-factory (1.1.0)
  - Locking psr/http-message (2.0)
  - Locking psr/log (3.0.2)
  - Locking psr/simple-cache (3.0.0)
  - Locking psy/psysh (v0.12.8)
  - Locking ralouphie/getallheaders (3.0.3)
  - Locking ramsey/collection (2.1.1)
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
  - Locking spatie/backtrace (1.7.4)
  - Locking spatie/error-solutions (1.1.3)
  - Locking spatie/flare-client-php (1.10.1)
  - Locking spatie/ignition (1.15.1)
  - Locking spatie/laravel-ignition (2.9.1)
  - Locking symfony/console (v6.4.21)
  - Locking symfony/css-selector (v6.4.13)
  - Locking symfony/deprecation-contracts (v3.5.1)
  - Locking symfony/error-handler (v6.4.20)
  - Locking symfony/event-dispatcher (v6.4.13)
  - Locking symfony/event-dispatcher-contracts (v3.5.1)
  - Locking symfony/finder (v6.4.17)
  - Locking symfony/http-foundation (v6.4.21)
  - Locking symfony/http-kernel (v6.4.21)
  - Locking symfony/mailer (v6.4.21)
  - Locking symfony/mime (v6.4.21)
  - Locking symfony/polyfill-ctype (v1.32.0)
  - Locking symfony/polyfill-intl-grapheme (v1.32.0)
  - Locking symfony/polyfill-intl-idn (v1.32.0)
  - Locking symfony/polyfill-intl-normalizer (v1.32.0)
  - Locking symfony/polyfill-mbstring (v1.32.0)
  - Locking symfony/polyfill-php80 (v1.32.0)
  - Locking symfony/polyfill-php83 (v1.32.0)
  - Locking symfony/polyfill-uuid (v1.32.0)
  - Locking symfony/process (v6.4.20)
  - Locking symfony/routing (v6.4.18)
  - Locking symfony/service-contracts (v3.5.1)
  - Locking symfony/string (v6.4.21)
  - Locking symfony/translation (v6.4.21)
  - Locking symfony/translation-contracts (v3.5.1)
  - Locking symfony/uid (v6.4.13)
  - Locking symfony/var-dumper (v6.4.21)
  - Locking symfony/yaml (v6.4.21)
  - Locking theseer/tokenizer (1.2.3)
  - Locking tijsverkoyen/css-to-inline-styles (v2.3.0)
  - Locking vlucas/phpdotenv (v5.6.2)
  - Locking voku/portable-ascii (2.0.3)
  - Locking webmozart/assert (1.11.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 111 installs, 0 updates, 0 removals
  - Downloading symfony/polyfill-mbstring (v1.32.0)
  - Downloading symfony/http-foundation (v6.4.21)
  - Downloading symfony/polyfill-php80 (v1.32.0)
  - Downloading symfony/string (v6.4.21)
  - Downloading symfony/console (v6.4.21)
  - Downloading vlucas/phpdotenv (v5.6.2)
  - Downloading symfony/var-dumper (v6.4.21)
  - Downloading symfony/polyfill-intl-idn (v1.32.0)
  - Downloading symfony/mime (v6.4.21)
  - Downloading symfony/mailer (v6.4.21)
  - Downloading symfony/http-kernel (v6.4.21)
  - Downloading symfony/translation (v6.4.21)
  - Downloading league/commonmark (2.7.0)
  - Downloading symfony/yaml (v6.4.21)
  - Downloading laravel/sail (v1.42.0)
  - Downloading hamcrest/hamcrest-php (v2.1.1)
  - Downloading myclabs/deep-copy (1.13.1)
  - Downloading phpunit/phpunit (10.5.46)
  - Downloading spatie/backtrace (1.7.4)
  - Installing doctrine/inflector (2.0.10): Extracting archive
  - Installing doctrine/lexer (3.0.1): Extracting archive
  - Installing symfony/polyfill-ctype (v1.32.0): Extracting archive
  - Installing webmozart/assert (1.11.0): Extracting archive
  - Installing dragonmantank/cron-expression (v3.4.0): Extracting archive
  - Installing symfony/deprecation-contracts (v3.5.1): Extracting archive
  - Installing psr/container (2.0.2): Extracting archive
  - Installing fakerphp/faker (v1.24.1): Extracting archive
  - Installing symfony/polyfill-php83 (v1.32.0): Extracting archive
  - Installing symfony/polyfill-mbstring (v1.32.0): Extracting archive
  - Installing symfony/http-foundation (v6.4.21): Extracting archive
  - Installing fruitcake/php-cors (v1.3.0): Extracting archive
  - Installing psr/http-message (2.0): Extracting archive
  - Installing psr/http-client (1.0.3): Extracting archive
  - Installing ralouphie/getallheaders (3.0.3): Extracting archive
  - Installing psr/http-factory (1.1.0): Extracting archive
  - Installing guzzlehttp/psr7 (2.7.1): Extracting archive
  - Installing guzzlehttp/promises (2.2.0): Extracting archive
  - Installing guzzlehttp/guzzle (7.9.3): Extracting archive
  - Installing symfony/polyfill-php80 (v1.32.0): Extracting archive
  - Installing guzzlehttp/uri-template (v1.0.4): Extracting archive
  - Installing laravel/pint (v1.20.0): Extracting archive
  - Installing symfony/polyfill-intl-normalizer (v1.32.0): Extracting archive
  - Installing symfony/polyfill-intl-grapheme (v1.32.0): Extracting archive
  - Installing symfony/string (v6.4.21): Extracting archive
  - Installing symfony/service-contracts (v3.5.1): Extracting archive
  - Installing symfony/console (v6.4.21): Extracting archive
  - Installing voku/portable-ascii (2.0.3): Extracting archive
  - Installing phpoption/phpoption (1.9.3): Extracting archive
  - Installing graham-campbell/result-type (v1.1.3): Extracting archive
  - Installing vlucas/phpdotenv (v5.6.2): Extracting archive
  - Installing symfony/css-selector (v6.4.13): Extracting archive
  - Installing tijsverkoyen/css-to-inline-styles (v2.3.0): Extracting archive
  - Installing symfony/var-dumper (v6.4.21): Extracting archive
  - Installing symfony/polyfill-uuid (v1.32.0): Extracting archive
  - Installing symfony/uid (v6.4.13): Extracting archive
  - Installing symfony/routing (v6.4.18): Extracting archive
  - Installing symfony/process (v6.4.20): Extracting archive
  - Installing symfony/polyfill-intl-idn (v1.32.0): Extracting archive
  - Installing symfony/mime (v6.4.21): Extracting archive
  - Installing psr/event-dispatcher (1.0.0): Extracting archive
  - Installing symfony/event-dispatcher-contracts (v3.5.1): Extracting archive
  - Installing symfony/event-dispatcher (v6.4.13): Extracting archive
  - Installing psr/log (3.0.2): Extracting archive
  - Installing egulias/email-validator (4.0.4): Extracting archive
  - Installing symfony/mailer (v6.4.21): Extracting archive
  - Installing symfony/error-handler (v6.4.20): Extracting archive
  - Installing symfony/http-kernel (v6.4.21): Extracting archive
  - Installing symfony/finder (v6.4.17): Extracting archive
  - Installing ramsey/collection (2.1.1): Extracting archive
  - Installing brick/math (0.12.3): Extracting archive
  - Installing ramsey/uuid (4.7.6): Extracting archive
  - Installing psr/simple-cache (3.0.0): Extracting archive
  - Installing nunomaduro/termwind (v1.17.0): Extracting archive
  - Installing symfony/translation-contracts (v3.5.1): Extracting archive
  - Installing symfony/translation (v6.4.21): Extracting archive
  - Installing psr/clock (1.0.0): Extracting archive
  - Installing carbonphp/carbon-doctrine-types (2.1.0): Extracting archive
  - Installing nesbot/carbon (2.73.0): Extracting archive
  - Installing monolog/monolog (3.9.0): Extracting archive
  - Installing league/mime-type-detection (1.16.0): Extracting archive
  - Installing league/flysystem (3.29.1): Extracting archive
  - Installing league/flysystem-local (3.29.0): Extracting archive
  - Installing nette/utils (v4.0.6): Extracting archive
  - Installing nette/schema (v1.3.2): Extracting archive
  - Installing dflydev/dot-access-data (v3.0.3): Extracting archive
  - Installing league/config (v1.2.0): Extracting archive
  - Installing league/commonmark (2.7.0): Extracting archive
  - Installing laravel/serializable-closure (v1.3.7): Extracting archive
  - Installing laravel/prompts (v0.1.25): Extracting archive
  - Installing laravel/framework (v10.48.29): Extracting archive
  - Installing symfony/yaml (v6.4.21): Extracting archive
  - Installing laravel/sail (v1.42.0): Extracting archive
  - Installing laravel/sanctum (v3.3.3): Extracting archive
  - Installing nikic/php-parser (v5.4.0): Extracting archive
  - Installing psy/psysh (v0.12.8): Extracting archive
  - Installing laravel/tinker (v2.10.1): Extracting archive
  - Installing hamcrest/hamcrest-php (v2.1.1): Extracting archive
  - Installing mockery/mockery (1.6.12): Extracting archive
  - Installing filp/whoops (2.18.0): Extracting archive
  - Installing nunomaduro/collision (v7.12.0): Extracting archive
  - Installing sebastian/version (4.0.1): Extracting archive
  - Installing sebastian/type (4.0.0): Extracting archive
  - Installing sebastian/recursion-context (5.0.0): Extracting archive
  - Installing sebastian/object-reflector (3.0.0): Extracting archive
  - Installing sebastian/object-enumerator (5.0.0): Extracting archive
  - Installing sebastian/global-state (6.0.2): Extracting archive
  - Installing sebastian/exporter (5.1.2): Extracting archive
  - Installing sebastian/environment (6.1.0): Extracting archive
  - Installing sebastian/diff (5.1.1): Extracting archive
  - Installing sebastian/comparator (5.0.3): Extracting archive
  - Installing sebastian/code-unit (2.0.0): Extracting archive
  - Installing sebastian/cli-parser (2.0.1): Extracting archive
  - Installing phpunit/php-timer (6.0.0): Extracting archive
  - Installing phpunit/php-text-template (3.0.1): Extracting archive
  - Installing phpunit/php-invoker (4.0.0): Extracting archive
  - Installing phpunit/php-file-iterator (4.1.0): Extracting archive
  - Installing theseer/tokenizer (1.2.3): Extracting archive
  - Installing sebastian/lines-of-code (2.0.2): Extracting archive
  - Installing sebastian/complexity (3.2.0): Extracting archive
  - Installing sebastian/code-unit-reverse-lookup (3.0.0): Extracting archive
  - Installing phpunit/php-code-coverage (10.1.16): Extracting archive
  - Installing phar-io/version (3.2.1): Extracting archive
  - Installing phar-io/manifest (2.0.4): Extracting archive
  - Installing myclabs/deep-copy (1.13.1): Extracting archive
  - Installing phpunit/phpunit (10.5.46): Extracting archive
  - Installing spatie/error-solutions (1.1.3): Extracting archive
  - Installing spatie/backtrace (1.7.4): Extracting archive
  - Installing spatie/flare-client-php (1.10.1): Extracting archive
  - Installing spatie/ignition (1.15.1): Extracting archive
  - Installing spatie/laravel-ignition (2.9.1): Extracting archive
45 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating optimized autoload files
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi

   INFO  Discovering packages.  

  laravel/sail ................................................................................................................................ DONE
  laravel/sanctum ............................................................................................................................. DONE
  laravel/tinker .............................................................................................................................. DONE
  nesbot/carbon ............................................................................................................................... DONE
  nunomaduro/collision ........................................................................................................................ DONE
  nunomaduro/termwind ......................................................................................................................... DONE
  spatie/laravel-ignition ..................................................................................................................... DONE

81 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
> @php artisan vendor:publish --tag=laravel-assets --ansi --force

   INFO  No publishable resources for tag [laravel-assets].  

No security vulnerability advisories found
> @php artisan key:generate --ansi

   INFO  Application key set successfully. 

# start project
msd@192 school-management-filament % php artisan serve

   INFO  Server running on [http://127.0.0.1:8000].  

  Press Ctrl+C to stop the server
msd@192 school-management-filament % composer require filament/filament:"^3.3" -W
./composer.json has been updated
Running composer update filament/filament --with-all-dependencies
Loading composer repositories with package information
Updating dependencies
Lock file operations: 30 installs, 0 updates, 0 removals
  - Locking anourvalar/eloquent-serialize (1.3.1)
  - Locking blade-ui-kit/blade-heroicons (2.6.0)
  - Locking blade-ui-kit/blade-icons (1.8.0)
  - Locking danharrin/date-format-converter (v0.3.1)
  - Locking danharrin/livewire-rate-limiting (v2.1.0)
  - Locking doctrine/cache (2.2.0)
  - Locking doctrine/dbal (3.9.4)
  - Locking doctrine/deprecations (1.1.5)
  - Locking doctrine/event-manager (2.0.1)
  - Locking filament/actions (v3.3.14)
  - Locking filament/filament (v3.3.14)
  - Locking filament/forms (v3.3.14)
  - Locking filament/infolists (v3.3.14)
  - Locking filament/notifications (v3.3.14)
  - Locking filament/support (v3.3.14)
  - Locking filament/tables (v3.3.14)
  - Locking filament/widgets (v3.3.14)
  - Locking kirschbaum-development/eloquent-power-joins (4.1.0)
  - Locking league/csv (9.23.0)
  - Locking league/uri (7.5.1)
  - Locking league/uri-interfaces (7.5.0)
  - Locking livewire/livewire (v3.6.3)
  - Locking masterminds/html5 (2.9.0)
  - Locking openspout/openspout (v4.25.0)
  - Locking psr/cache (3.0.0)
  - Locking ryangjchandler/blade-capture-directive (v1.1.0)
  - Locking spatie/color (1.8.0)
  - Locking spatie/invade (2.1.0)
  - Locking spatie/laravel-package-tools (1.92.4)
  - Locking symfony/html-sanitizer (v6.4.21)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 30 installs, 0 updates, 0 removals
  - Downloading anourvalar/eloquent-serialize (1.3.1)
  - Downloading blade-ui-kit/blade-heroicons (2.6.0)
  - Downloading spatie/laravel-package-tools (1.92.4)
  - Downloading symfony/html-sanitizer (v6.4.21)
  - Downloading livewire/livewire (v3.6.3)
  - Downloading filament/support (v3.3.14)
  - Downloading filament/widgets (v3.3.14)
  - Downloading league/csv (9.23.0)
  - Downloading filament/actions (v3.3.14)
  - Downloading filament/notifications (v3.3.14)
  - Downloading filament/infolists (v3.3.14)
  - Downloading filament/forms (v3.3.14)
  - Downloading filament/tables (v3.3.14)
  - Downloading filament/filament (v3.3.14)
  - Installing anourvalar/eloquent-serialize (1.3.1): Extracting archive
  - Installing blade-ui-kit/blade-icons (1.8.0): Extracting archive
  - Installing blade-ui-kit/blade-heroicons (2.6.0): Extracting archive
  - Installing danharrin/date-format-converter (v0.3.1): Extracting archive
  - Installing psr/cache (3.0.0): Extracting archive
  - Installing doctrine/event-manager (2.0.1): Extracting archive
  - Installing doctrine/deprecations (1.1.5): Extracting archive
  - Installing doctrine/cache (2.2.0): Extracting archive
  - Installing doctrine/dbal (3.9.4): Extracting archive
  - Installing spatie/laravel-package-tools (1.92.4): Extracting archive
  - Installing masterminds/html5 (2.9.0): Extracting archive
  - Installing league/uri-interfaces (7.5.0): Extracting archive
  - Installing league/uri (7.5.1): Extracting archive
  - Installing symfony/html-sanitizer (v6.4.21): Extracting archive
  - Installing spatie/invade (2.1.0): Extracting archive
  - Installing spatie/color (1.8.0): Extracting archive
  - Installing ryangjchandler/blade-capture-directive (v1.1.0): Extracting archive
  - Installing livewire/livewire (v3.6.3): Extracting archive
  - Installing kirschbaum-development/eloquent-power-joins (4.1.0): Extracting archive
  - Installing filament/support (v3.3.14): Extracting archive
  - Installing filament/widgets (v3.3.14): Extracting archive
  - Installing openspout/openspout (v4.25.0): Extracting archive
  - Installing league/csv (9.23.0): Extracting archive
  - Installing filament/actions (v3.3.14): Extracting archive
  - Installing filament/notifications (v3.3.14): Extracting archive
  - Installing filament/infolists (v3.3.14): Extracting archive
  - Installing filament/forms (v3.3.14): Extracting archive
  - Installing filament/tables (v3.3.14): Extracting archive
  - Installing danharrin/livewire-rate-limiting (v2.1.0): Extracting archive
  - Installing filament/filament (v3.3.14): Extracting archive
2 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating optimized autoload files
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi

   INFO  Discovering packages.  

  anourvalar/eloquent-serialize ............................................................................................................... DONE
  blade-ui-kit/blade-heroicons ................................................................................................................ DONE
  blade-ui-kit/blade-icons .................................................................................................................... DONE
  filament/actions ............................................................................................................................ DONE
  filament/filament ........................................................................................................................... DONE
  filament/forms .............................................................................................................................. DONE
  filament/infolists .......................................................................................................................... DONE
  filament/notifications ...................................................................................................................... DONE
  filament/support ............................................................................................................................ DONE
  filament/tables ............................................................................................................................. DONE
  filament/widgets ............................................................................................................................ DONE
  kirschbaum-development/eloquent-power-joins ................................................................................................. DONE
  laravel/sail ................................................................................................................................ DONE
  laravel/sanctum ............................................................................................................................. DONE
  laravel/tinker .............................................................................................................................. DONE
  livewire/livewire ........................................................................................................................... DONE
  nesbot/carbon ............................................................................................................................... DONE
  nunomaduro/collision ........................................................................................................................ DONE
  nunomaduro/termwind ......................................................................................................................... DONE
  ryangjchandler/blade-capture-directive ...................................................................................................... DONE
  spatie/laravel-ignition ..................................................................................................................... DONE

98 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
> @php artisan vendor:publish --tag=laravel-assets --ansi --force

   INFO  No publishable resources for tag [laravel-assets].  

No security vulnerability advisories found

msd@192 school-management-filament % git remote add origin https://github.com/mmsoftware100/school-management-filament.git
msd@192 school-management-filament % php artisan filament:install --panels

 ┌ What is the ID? ─────────────────────────────────────────────┐
 │ admin                                                        │
 └──────────────────────────────────────────────────────────────┘

   INFO  Filament panel [app/Providers/Filament/AdminPanelProvider.php] created successfully.  

   WARN  We've attempted to register the AdminPanelProvider in your [config/app.php] file as a service provider. If you get an error while trying to access your panel then this process has probably failed. You can manually register the service provider by adding it to the [providers] array.  

  ⇂ public/js/filament/forms/components/color-picker.js  
  ⇂ public/js/filament/forms/components/date-time-picker.js  
  ⇂ public/js/filament/forms/components/file-upload.js  
  ⇂ public/js/filament/forms/components/key-value.js  
  ⇂ public/js/filament/forms/components/markdown-editor.js  
  ⇂ public/js/filament/forms/components/rich-editor.js  
  ⇂ public/js/filament/forms/components/select.js  
  ⇂ public/js/filament/forms/components/tags-input.js  
  ⇂ public/js/filament/forms/components/textarea.js  
  ⇂ public/js/filament/tables/components/table.js  
  ⇂ public/js/filament/widgets/components/chart.js  
  ⇂ public/js/filament/widgets/components/stats-overview/stat/chart.js  
  ⇂ public/js/filament/filament/app.js  
  ⇂ public/js/filament/filament/echo.js  
  ⇂ public/js/filament/notifications/notifications.js  
  ⇂ public/js/filament/support/support.js  
  ⇂ public/css/filament/forms/forms.css  
  ⇂ public/css/filament/support/support.css  
  ⇂ public/css/filament/filament/app.css  

   INFO  Successfully published assets!  

   INFO  Configuration cache cleared successfully.  

   INFO  Route cache cleared successfully.  

   INFO  Compiled views cleared successfully.  

   INFO  Successfully upgraded!  

 ┌ All done! Would you like to show some love by starring the Filament repo on GitHub? ┐
 │ Yes                                                                                 │
 └─────────────────────────────────────────────────────────────────────────────────────┘

   INFO  Thank you!  

msd@192 school-management-filament % php artisan migrate

   INFO  Preparing database.  

  Creating migration table ............................................................................................................... 14ms DONE

   INFO  Running migrations.  

  2014_10_12_000000_create_users_table ................................................................................................... 13ms DONE
  2014_10_12_100000_create_password_reset_tokens_table .................................................................................... 5ms DONE
  2019_08_19_000000_create_failed_jobs_table ............................................................................................. 11ms DONE
  2019_12_14_000001_create_personal_access_tokens_table .................................................................................. 15ms DONE
```


