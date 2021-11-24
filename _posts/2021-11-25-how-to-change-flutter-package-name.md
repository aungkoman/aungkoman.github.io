---
layout: post
title: How to change flutter package name.
description: How to change flutter package name.
image: ../images/auto_reply_sms.png
---
### Flutter Project ကို package name ပြောင်းခြင်း

Change App Package Name ဆိုတဲ့ flutter package ကို dev_dependencies မှာထည့်။
https://pub.dev/packages/change_app_package_name 

```yaml
dev_dependencies: 
  change_app_package_name: ^0.1.3
```

```flutter pub get``` နဲ့ package install လုပ်ပြီးရင် terminal မှာ

```
flutter pub run change_app_package_name:main com.new.package.name
```

လို့ run ရင် ရပြီ။