---
layout: post
title:  How to transfer SSL from production to development stage.
description: for local development with real ssl
image: ../images/fcc/kfc.jpg
---

### Intranet မှာ SSL Certificate ရဖို့

https://ivanderevianko.com/2019/03/migrate-letsencrypt-certificates-certbot-to-new-server


Archive SSL certificates
live server က ssl certificate တွေကို zip ချူပ်။

```
sudo ls -l /etc/letsencrypt/live/divbyte.com
total 0
lrwxrwxrwx 1 root root 46 Mar 25 13:23 cert.pem -> /etc/letsencrypt/archive/divbyte.com/cert2.pem
lrwxrwxrwx 1 root root 47 Mar 25 13:24 chain.pem -> /etc/letsencrypt/archive/divbyte.com/chain2.pem
lrwxrwxrwx 1 root root 51 Mar 25 13:24 fullchain.pem -> /etc/letsencrypt/archive/divbyte.com/fullchain2.pem
lrwxrwxrwx 1 root root 49 Mar 25 13:24 privkey.pem -> /etc/letsencrypt/archive/divbyte.com/privkey2.pem
```
renewal ပါ လိုကောင်းလိုမယ်
```
sudo tar -chvzf certs.tar.gz /etc/letsencrypt/archive/divbyte.com /etc/letsencrypt/renewal/divbyte.com.conf
```

ရလာတဲ့ cers.tar.gz ကို local server ကို ကူးလာပြီး root မှာ unzip လုပ်၊ ဒါမှ မဟုတ် /etc/letsencrypt/archtve/divbyte.com/ * အစရှိတဲ့ နေရာမှာ manual ကူးထည့်။

အိုကေ certificate တွေတော့ ရလာပြီ။

Ngix က ဒီ certificate တွေကို ယူသုံးအောင် configuration လုပ်ဖို့ပဲ ကျန်တယ်။


ရလာတဲ့ zip file ကို new server ရဲ့ root directory မှာ သွားပြီး extract လုပ်။ ပြီးရင် link ချိတ် အောက်ကလို။


sudo ln -s /etc/letsencrypt/archive/mmkey.org/cert.pem /etc/letsencrypt/live/mmkey.org/cert.pem
sudo ln -s /etc/letsencrypt/archive/mmkey.org/chain.pem /etc/letsencrypt/live/mmkey.org/chain.pem
sudo ln -s /etc/letsencrypt/archive/mmkey.org/fullchain.pem /etc/letsencrypt/live/mmkey.org/fullchain.pem
sudo ln -s /etc/letsencrypt/archive/mmkey.org/privkey.pem /etc/letsencrypt/live/mmkey.org/privkey.pem


မရှိရင် သွားဆောက်ပါ။




avalable site မှာ သွားပြင်ရတယ်။


ပြီးရင် restart ချပါ။

