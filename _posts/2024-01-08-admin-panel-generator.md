---
layout: post
title:  "Admin Panel Generator in Laravel"
date:   2024-01-07 08:55:00 +0630
categories: howto
---


တင်ထားတဲ့ xampp က php version နဲ့ brew က ပေးထားတဲ့ terminal က php version မကိုက်တော့ တိုင်ပတ်နေတာ။


### Steps

[0855] Create laravel project


composer create-project laravel/laravel imirror


[0856] -> Github မှာ တင်ထားမယ်။
[0858] -> Github မှာ တင်ပြီးပြီ။
[0859] -> Database setup လုပ်မယ်။
[0901] -> Database setup လုပ်ပြီးပြီ။

composer require filament/filament:"^3.1" -W
 
php artisan filament:install --panels

php artisan make:filament-user

http://127.0.0.1:8000/admin

ဒီမှာ စသုံးလို့ရပြီ။

[0909] -> Admin Panel တက်လာပြီ။ Category နဲ့ Article လုပ်မယ်။

[1535] -> intl extension ဟာ တစ်နေကုန် လျေှာက်စမ်းရင် ရလာပြီ။

```bash
php artisan make:filament-resource Patient
```





user စထည့်တာ တိုင်စပတ်။
Class "NumberFormatter" not found

intl extension မထည့်ရသေး။

brew မှာလည်း မပါ။
```bash
- filament/filament v3.1.35 requires filament/support v3.1.35 -> satisfiable by filament/support[v3.1.35].
    - filament/support[v3.1.0, ..., v3.1.35] require ext-intl * -> it is missing from your system. Install or enable PHP's intl extension.
    - Root composer.json requires filament/filament ^3.1 -> satisfiable by filament/filament[v3.1.0, ..., v3.1.35].

To enable extensions, verify that they are enabled in your .ini files:
    - /Applications/XAMPP/xamppfiles/etc/php.ini
You can also run `php --ini` in a terminal to see which files are used by PHP in CLI mode.
Alternatively, you can run Composer with `--ignore-platform-req=ext-intl` to temporarily ignore these required extensions.

Installation failed, reverting ./composer.json and ./composer.lock to their original content.
msd@MSDs-Mac-mini imirror %
```

တစ်ခုလိုချင် နောက်တစ်ခု ထပ်ထည့်။
နောက်တစ်ခုက နောက်တစ်ခုကို ထပ်လို။
တိုင်တွေ ပတ်နေပါပြီ။


enviroment path ပါ လိုက်ပြင်ရမလိုပဲ။

တစ်မနက်ခင်းလုံး ဒီ ext-intl ထည့်မရတာတာနဲ့ ကုန်သွားပြီ။
အတော်တော်တဲ့ တော်တော်တွေပါဗျာ။

[1024] -> mac မှာ intl-ext တင်ဖို့လက်လျော့လိုက်ပြီ။ Docker မှာတင်သုံးကြည့်တော့မယ်။

လိုအပ်တဲ့ပုံစံက

os နဲ့ lib တွေကို stack ထပ်ထားမယ်။
ပြီးရင် code ကိုတော့ local က repo နဲ့ link  ချိတ်ထားမယ်။