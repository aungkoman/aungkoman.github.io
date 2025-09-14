---
layout: post
title: "Developing customer service telegram bot using nextjs, open router and ai"
date: 2025-09-07
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

don't install passport again, this can be happen duplicate migration files.

```bash
php artisan passport:client --personal
```

if not ok, reinstall passport

```bash
php artisan passport:install
php artisan passport:client --personal
```
but double check migration files for duplication of AUTH.



Always get like this

```json
{
    "message": "Invalid key supplied",
    "exception": "LogicException",
    "file": "/Users/msd/Code/repos/web/thank_book_backend/vendor/league/oauth2-server/src/CryptKey.php",
    "line": 72,
    "trace": [
        {
            "file": "/Users/msd/Code/repos/web/thank_book_backend/vendor/laravel/passport/src/PassportServiceProvider.php",
            "line": 292,
            "function": "__construct",
            "class": "League\\OAuth2\\Server\\CryptKey",
            "type": "->"
        },
    ]
}
```

Or this one

```json
{
    "message": "Personal access client not found for 'users' user provider. Please create one.",
    "exception": "RuntimeException",
    "file": "/Users/msd/Code/repos/web/thank_book_backend/vendor/laravel/passport/src/ClientRepository.php",
    "line": 74,
    "trace": [
        {
            "file": "/Users/msd/Code/repos/web/thank_book_backend/vendor/laravel/passport/src/Bridge/ClientRepository.php",
            "line": 48,
            "function": "personalAccessClient",
            "class": "Laravel\\Passport\\ClientRepository",
            "type": "->"
        }
    ]
}
```