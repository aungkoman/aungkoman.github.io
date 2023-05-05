---
layout: post
title:  "Laravel Backbone"
date:   2023-05-05 15:30:00 +0630
categories: how to
---

## Laravel Backbone


### Create Project
```bash
create-project --prefer-dist laravel/laravel:^9.0 .
```

```bash
msd@MSDs-Mac-mini pos-backend % composer create-project --prefer-dist laravel/laravel:^9.0 .        
Creating a "laravel/laravel:^9.0" project at "./"
Info from https://repo.packagist.org: #StandWithUkraine
Installing laravel/laravel (v9.5.2)
  - Downloading laravel/laravel (v9.5.2)
  - Installing laravel/laravel (v9.5.2): Extracting archive
Created project in /Applications/XAMPP/xamppfiles/htdocs/pos-backend/.
> @php -r "file_exists('.env') || copy('.env.example', '.env');"
Loading composer repositories with package information
Updating dependencies
Lock file operations: 111 installs, 0 updates, 0 removals
  - Locking brick/math (0.11.0)
  - Locking dflydev/dot-access-data (v3.0.2)
  - Locking doctrine/deprecations (v1.0.0)
  - Locking doctrine/inflector (2.0.6)
  - Locking doctrine/instantiator (1.5.0)
  - Locking doctrine/lexer (2.1.0)
  - Locking dragonmantank/cron-expression (v3.3.2)
  - Locking egulias/email-validator (3.2.5)
  - Locking fakerphp/faker (v1.21.0)
  - Locking filp/whoops (2.15.2)
  - Locking fruitcake/php-cors (v1.2.0)
  - Locking graham-campbell/result-type (v1.1.1)
  - Locking guzzlehttp/guzzle (7.5.1)
  - Locking guzzlehttp/promises (1.5.2)
  - Locking guzzlehttp/psr7 (2.5.0)
  - Locking guzzlehttp/uri-template (v1.0.1)
  - Locking hamcrest/hamcrest-php (v2.0.1)
  - Locking laravel/framework (v9.52.7)
  - Locking laravel/pint (v1.5.0)
  - Locking laravel/sail (v1.21.5)
  - Locking laravel/sanctum (v3.2.5)
  - Locking laravel/serializable-closure (v1.3.0)
  - Locking laravel/tinker (v2.8.1)
  - Locking league/commonmark (2.4.0)
  - Locking league/config (v1.2.0)
  - Locking league/flysystem (3.15.1)
  - Locking league/flysystem-local (3.15.0)
  - Locking league/mime-type-detection (1.11.0)
  - Locking mockery/mockery (1.5.1)
  - Locking monolog/monolog (2.9.1)
  - Locking myclabs/deep-copy (1.11.1)
  - Locking nesbot/carbon (2.66.0)
  - Locking nette/schema (v1.2.3)
  - Locking nette/utils (v4.0.0)
  - Locking nikic/php-parser (v4.15.4)
  - Locking nunomaduro/collision (v6.4.0)
  - Locking nunomaduro/termwind (v1.15.1)
  - Locking phar-io/manifest (2.0.3)
  - Locking phar-io/version (3.2.1)
  - Locking phpoption/phpoption (1.9.1)
  - Locking phpunit/php-code-coverage (9.2.26)
  - Locking phpunit/php-file-iterator (3.0.6)
  - Locking phpunit/php-invoker (3.1.1)
  - Locking phpunit/php-text-template (2.0.4)
  - Locking phpunit/php-timer (5.0.3)
  - Locking phpunit/phpunit (9.6.7)
  - Locking psr/container (2.0.2)
  - Locking psr/event-dispatcher (1.0.0)
  - Locking psr/http-client (1.0.2)
  - Locking psr/http-factory (1.0.2)
  - Locking psr/http-message (2.0)
  - Locking psr/log (3.0.0)
  - Locking psr/simple-cache (3.0.0)
  - Locking psy/psysh (v0.11.16)
  - Locking ralouphie/getallheaders (3.0.3)
  - Locking ramsey/collection (1.3.0)
  - Locking ramsey/uuid (4.7.4)
  - Locking sebastian/cli-parser (1.0.1)
  - Locking sebastian/code-unit (1.0.8)
  - Locking sebastian/code-unit-reverse-lookup (2.0.3)
  - Locking sebastian/comparator (4.0.8)
  - Locking sebastian/complexity (2.0.2)
  - Locking sebastian/diff (4.0.4)
  - Locking sebastian/environment (5.1.5)
  - Locking sebastian/exporter (4.0.5)
  - Locking sebastian/global-state (5.0.5)
  - Locking sebastian/lines-of-code (1.0.3)
  - Locking sebastian/object-enumerator (4.0.4)
  - Locking sebastian/object-reflector (2.0.4)
  - Locking sebastian/recursion-context (4.0.5)
  - Locking sebastian/resource-operations (3.0.3)
  - Locking sebastian/type (3.2.1)
  - Locking sebastian/version (3.0.2)
  - Locking spatie/backtrace (1.4.0)
  - Locking spatie/flare-client-php (1.3.6)
  - Locking spatie/ignition (1.7.0)
  - Locking spatie/laravel-ignition (1.6.4)
  - Locking symfony/console (v6.0.19)
  - Locking symfony/css-selector (v6.0.19)
  - Locking symfony/deprecation-contracts (v3.0.2)
  - Locking symfony/error-handler (v6.0.19)
  - Locking symfony/event-dispatcher (v6.0.19)
  - Locking symfony/event-dispatcher-contracts (v3.0.2)
  - Locking symfony/finder (v6.0.19)
  - Locking symfony/http-foundation (v6.0.20)
  - Locking symfony/http-kernel (v6.0.20)
  - Locking symfony/mailer (v6.0.19)
  - Locking symfony/mime (v6.0.19)
  - Locking symfony/polyfill-ctype (v1.27.0)
  - Locking symfony/polyfill-intl-grapheme (v1.27.0)
  - Locking symfony/polyfill-intl-idn (v1.27.0)
  - Locking symfony/polyfill-intl-normalizer (v1.27.0)
  - Locking symfony/polyfill-mbstring (v1.27.0)
  - Locking symfony/polyfill-php72 (v1.27.0)
  - Locking symfony/polyfill-php80 (v1.27.0)
  - Locking symfony/polyfill-php81 (v1.27.0)
  - Locking symfony/polyfill-uuid (v1.27.0)
  - Locking symfony/process (v6.0.19)
  - Locking symfony/routing (v6.0.19)
  - Locking symfony/service-contracts (v3.0.2)
  - Locking symfony/string (v6.0.19)
  - Locking symfony/translation (v6.0.19)
  - Locking symfony/translation-contracts (v3.0.2)
  - Locking symfony/uid (v6.0.19)
  - Locking symfony/var-dumper (v6.0.19)
  - Locking symfony/yaml (v6.0.19)
  - Locking theseer/tokenizer (1.2.1)
  - Locking tijsverkoyen/css-to-inline-styles (2.2.6)
  - Locking vlucas/phpdotenv (v5.5.0)
  - Locking voku/portable-ascii (2.0.1)
  - Locking webmozart/assert (1.11.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 111 installs, 0 updates, 0 removals
  - Downloading psr/http-message (2.0)
  - Downloading psr/http-client (1.0.2)
  - Downloading psr/http-factory (1.0.2)
  - Downloading guzzlehttp/psr7 (2.5.0)
  - Downloading guzzlehttp/guzzle (7.5.1)
  - Downloading laravel/pint (v1.5.0)
  - Downloading ramsey/uuid (4.7.4)
  - Downloading league/flysystem (3.15.1)
  - Downloading league/flysystem-local (3.15.0)
  - Downloading laravel/framework (v9.52.7)
  - Downloading laravel/sail (v1.21.5)
  - Downloading laravel/sanctum (v3.2.5)
  - Downloading psy/psysh (v0.11.16)
  - Downloading filp/whoops (2.15.2)
  - Downloading phpunit/phpunit (9.6.7)
  - Downloading spatie/flare-client-php (1.3.6)
  - Downloading spatie/ignition (1.7.0)
  - Installing doctrine/inflector (2.0.6): Extracting archive
  - Installing doctrine/deprecations (v1.0.0): Extracting archive
  - Installing doctrine/lexer (2.1.0): Extracting archive
  - Installing symfony/polyfill-ctype (v1.27.0): Extracting archive
  - Installing webmozart/assert (1.11.0): Extracting archive
  - Installing dragonmantank/cron-expression (v3.3.2): Extracting archive
  - Installing symfony/deprecation-contracts (v3.0.2): Extracting archive
  - Installing psr/container (2.0.2): Extracting archive
  - Installing fakerphp/faker (v1.21.0): Extracting archive
  - Installing symfony/polyfill-mbstring (v1.27.0): Extracting archive
  - Installing symfony/http-foundation (v6.0.20): Extracting archive
  - Installing fruitcake/php-cors (v1.2.0): Extracting archive
  - Installing psr/http-message (2.0): Extracting archive
  - Installing psr/http-client (1.0.2): Extracting archive
  - Installing ralouphie/getallheaders (3.0.3): Extracting archive
  - Installing psr/http-factory (1.0.2): Extracting archive
  - Installing guzzlehttp/psr7 (2.5.0): Extracting archive
  - Installing guzzlehttp/promises (1.5.2): Extracting archive
  - Installing guzzlehttp/guzzle (7.5.1): Extracting archive
  - Installing symfony/polyfill-php80 (v1.27.0): Extracting archive
  - Installing guzzlehttp/uri-template (v1.0.1): Extracting archive
  - Installing laravel/pint (v1.5.0): Extracting archive
  - Installing symfony/yaml (v6.0.19): Extracting archive
  - Installing voku/portable-ascii (2.0.1): Extracting archive
  - Installing phpoption/phpoption (1.9.1): Extracting archive
  - Installing graham-campbell/result-type (v1.1.1): Extracting archive
  - Installing vlucas/phpdotenv (v5.5.0): Extracting archive
  - Installing symfony/css-selector (v6.0.19): Extracting archive
  - Installing tijsverkoyen/css-to-inline-styles (2.2.6): Extracting archive
  - Installing symfony/var-dumper (v6.0.19): Extracting archive
  - Installing symfony/polyfill-uuid (v1.27.0): Extracting archive
  - Installing symfony/uid (v6.0.19): Extracting archive
  - Installing symfony/routing (v6.0.19): Extracting archive
  - Installing symfony/process (v6.0.19): Extracting archive
  - Installing symfony/polyfill-php72 (v1.27.0): Extracting archive
  - Installing symfony/polyfill-intl-normalizer (v1.27.0): Extracting archive
  - Installing symfony/polyfill-intl-idn (v1.27.0): Extracting archive
  - Installing symfony/mime (v6.0.19): Extracting archive
  - Installing symfony/service-contracts (v3.0.2): Extracting archive
  - Installing psr/event-dispatcher (1.0.0): Extracting archive
  - Installing symfony/event-dispatcher-contracts (v3.0.2): Extracting archive
  - Installing symfony/event-dispatcher (v6.0.19): Extracting archive
  - Installing psr/log (3.0.0): Extracting archive
  - Installing egulias/email-validator (3.2.5): Extracting archive
  - Installing symfony/mailer (v6.0.19): Extracting archive
  - Installing symfony/error-handler (v6.0.19): Extracting archive
  - Installing symfony/http-kernel (v6.0.20): Extracting archive
  - Installing symfony/finder (v6.0.19): Extracting archive
  - Installing symfony/polyfill-intl-grapheme (v1.27.0): Extracting archive
  - Installing symfony/string (v6.0.19): Extracting archive
  - Installing symfony/console (v6.0.19): Extracting archive
  - Installing symfony/polyfill-php81 (v1.27.0): Extracting archive
  - Installing ramsey/collection (1.3.0): Extracting archive
  - Installing brick/math (0.11.0): Extracting archive
  - Installing ramsey/uuid (4.7.4): Extracting archive
  - Installing psr/simple-cache (3.0.0): Extracting archive
  - Installing nunomaduro/termwind (v1.15.1): Extracting archive
  - Installing symfony/translation-contracts (v3.0.2): Extracting archive
  - Installing symfony/translation (v6.0.19): Extracting archive
  - Installing nesbot/carbon (2.66.0): Extracting archive
  - Installing monolog/monolog (2.9.1): Extracting archive
  - Installing league/mime-type-detection (1.11.0): Extracting archive
  - Installing league/flysystem (3.15.1): Extracting archive
  - Installing league/flysystem-local (3.15.0): Extracting archive
  - Installing nette/utils (v4.0.0): Extracting archive
  - Installing nette/schema (v1.2.3): Extracting archive
  - Installing dflydev/dot-access-data (v3.0.2): Extracting archive
  - Installing league/config (v1.2.0): Extracting archive
  - Installing league/commonmark (2.4.0): Extracting archive
  - Installing laravel/serializable-closure (v1.3.0): Extracting archive
  - Installing laravel/framework (v9.52.7): Extracting archive
  - Installing laravel/sail (v1.21.5): Extracting archive
  - Installing laravel/sanctum (v3.2.5): Extracting archive
  - Installing nikic/php-parser (v4.15.4): Extracting archive
  - Installing psy/psysh (v0.11.16): Extracting archive
  - Installing laravel/tinker (v2.8.1): Extracting archive
  - Installing hamcrest/hamcrest-php (v2.0.1): Extracting archive
  - Installing mockery/mockery (1.5.1): Extracting archive
  - Installing filp/whoops (2.15.2): Extracting archive
  - Installing nunomaduro/collision (v6.4.0): Extracting archive
  - Installing sebastian/version (3.0.2): Extracting archive
  - Installing sebastian/type (3.2.1): Extracting archive
  - Installing sebastian/resource-operations (3.0.3): Extracting archive
  - Installing sebastian/recursion-context (4.0.5): Extracting archive
  - Installing sebastian/object-reflector (2.0.4): Extracting archive
  - Installing sebastian/object-enumerator (4.0.4): Extracting archive
  - Installing sebastian/global-state (5.0.5): Extracting archive
  - Installing sebastian/exporter (4.0.5): Extracting archive
  - Installing sebastian/environment (5.1.5): Extracting archive
  - Installing sebastian/diff (4.0.4): Extracting archive
  - Installing sebastian/comparator (4.0.8): Extracting archive
  - Installing sebastian/code-unit (1.0.8): Extracting archive
  - Installing sebastian/cli-parser (1.0.1): Extracting archive
  - Installing phpunit/php-timer (5.0.3): Extracting archive
  - Installing phpunit/php-text-template (2.0.4): Extracting archive
  - Installing phpunit/php-invoker (3.1.1): Extracting archive
  - Installing phpunit/php-file-iterator (3.0.6): Extracting archive
  - Installing theseer/tokenizer (1.2.1): Extracting archive
  - Installing sebastian/lines-of-code (1.0.3): Extracting archive
  - Installing sebastian/complexity (2.0.2): Extracting archive
  - Installing sebastian/code-unit-reverse-lookup (2.0.3): Extracting archive
  - Installing phpunit/php-code-coverage (9.2.26): Extracting archive
  - Installing phar-io/version (3.2.1): Extracting archive
  - Installing phar-io/manifest (2.0.3): Extracting archive
  - Installing myclabs/deep-copy (1.11.1): Extracting archive
  - Installing doctrine/instantiator (1.5.0): Extracting archive
  - Installing phpunit/phpunit (9.6.7): Extracting archive
  - Installing spatie/backtrace (1.4.0): Extracting archive
  - Installing spatie/flare-client-php (1.3.6): Extracting archive
  - Installing spatie/ignition (1.7.0): Extracting archive
  - Installing spatie/laravel-ignition (1.6.4): Extracting archive
53 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating optimized autoload files
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi

   INFO  Discovering packages.  

  laravel/sail .......................................................... DONE
  laravel/sanctum ....................................................... DONE
  laravel/tinker ........................................................ DONE
  nesbot/carbon ......................................................... DONE
  nunomaduro/collision .................................................. DONE
  nunomaduro/termwind ................................................... DONE
  spatie/laravel-ignition ............................................... DONE

84 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
> @php artisan vendor:publish --tag=laravel-assets --ansi --force

   INFO  No publishable resources for tag [laravel-assets].  

No security vulnerability advisories found
> @php artisan key:generate --ansi

   INFO  Application key set successfully.  

msd@MSDs-Mac-mini pos-backend % 
```