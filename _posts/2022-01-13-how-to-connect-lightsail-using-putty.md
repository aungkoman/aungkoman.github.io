---
layout: post
title: Amazon Lightsail Instance ကို Putty က ဘယ်လိုဝင်ကြမလဲ?
description: lightsail, putty
image: ../images/fcc/kfc.jpg
---
### Amazon Lightsail Instance ကို Putty က ဘယ်လိုဝင်ကြမလဲ?

1. ssh key download လုပ်
2. putty gen မှာ key ထုတ်
3. public ip ကို connection->ssh->key load လုပ်ပြီး ချိတ်
4. username က Ubuntu ဆိုရင် ubuntu, Bitnami ဆိုရင် bitnami

စသုံးနိုင်ပြီ။

https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-putty-to-connect-using-ssh