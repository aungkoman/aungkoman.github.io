---
layout: post
title: "SSL with Let's Encrypt"
date: 2025-08-23
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

Let's Encrypt နဲ့ SSL Certificate , Key တွေ ဘယ်လိုထုတ်ကြမလဲ?


```bash
certbot certonly --manual --preferred-challenges dns -d software100.com.mm --config-dir ~/.certbot/config --work-dir ~/.certbot/work --logs-dir ~/.certbot/logs

# ဒီလိုဆိုရင် DNS Record ထည့်ခိုင်းမယ့် စာပေါ်လာမယ်။
# ဉပမာ TXT Record Name-> _acme-challenge.software100.com.mm. 
# TXT Record Value -> UOhII7kGxHhot89XMZBkI3OYJrBP4VzfPly3TainKa0
# ထည့်ပြီးရင် တကယ်အလုပ် လုပ်/မလုပ် ကို ဒီ Link မှာ စစ်ကြည့်။
# https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.software100.com.mm. 
# ကိုယ် ထည့်လိုက်တဲ့ TXT Record Value ကို တွေ့ရင် ဆက်လုပ်လို့ရပြီ။

# အခုလိုမျိုး certificate, key တွေ ရပြီဖြစ်တဲ့အကြောင်း မြင်ရမယ်။

Successfully received certificate.
Certificate is saved at: /home/cisco/.certbot/config/live/software100.com.mm/fullchain.pem
Key is saved at:         /home/cisco/.certbot/config/live/software100.com.mm/privkey.pem
This certificate expires on 2025-11-21.
These files will be updated when the certificate renews.

# fullchain.pem ဒါက Certificate File
# privkey.pem ဒါက Key File


# cPanel ရဲ့ SSL Section မှာ main domain ကို ေရွးပြီး Certificate နဲ့ Key File မှာ ပါတဲ့ စာတွေကို ကူးပြီး Install လုပ်လိုက်ရင် 
# SSL တင်တဲ့ လုပ်ငန်းစဉ် ပြီးပါပြီ။
```

