---
layout: post
title: "Restful Web Service - Basic Terms"
date: 2026-07-10
categories: tutorials
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---


# Restful Web Service - အခြေခံ အသုံးအနှုန်းများ


ကျွန်တော် တို့ စာစသင်တဲ့အခါ ကကြီး ခခွေး စသင်ရသလိုပဲ အခု Developer လုပ်တော့မယ်ဆိုလည်း Restful Web Service ရဲ့ အခြေခံ အသုံးအနှုန်း (၄) ခုကို နှုတ်တိုက် သင်ထားရပါတယ်။


1. Resource
2. Representation
3. URL
4. HTTP Verb


## 1. Resource 

Resource ဆိုတာကတော့ အချက်အလက် Data ကို ပြောတာ။ 
ဉပမာ Facebook မှာဆိုရင် User Account , Post, Comment စသည်ဖြင့် ဒါတွေဟာ Resource တွေပဲ။ ဘဏ်မှာဆိုရင်လည်း ဘဏ်စာရင်းနံပါတ်၊ ငွေလွှဲထားတဲ့ transaction စတာတွေက Resource တွေပေါ့။ 
Resource ဆိုတာ အဲ့သလောက် ရှင်းပါတယ်။ ဒစ်ဂျစ်တယ် ကမ္ဘာက Noun (နာမ်) တွေ ဟူသမျှ Resource ပဲလို့ အကြမ်းဖျဉ်း မှတ်ထားလို့ရမယ်။

## 2. Representation

အပေါ်က ပြောခဲ့တဲ့ Resource တွေကို နည်းလမ်းမျိုးစုံနဲ့ သိမ်းထားကြတယ်။ အသိသာဆုံးကတော့ Database ပေါ့။ ဒီလို သိမ်းထားတဲ့ Database ထဲမှာ သိမ်းထားတဲ့ Resource တွေကို  XML, JSON , Plain Text , HTML စသည်ဖြင့်  ပုံစံမျိုးစုံနဲ့ ပြကြတယ်။ ဉပမာ Resource အနေနဲ့ ကျွန်တော့ဘဏ်စာရင်း က ဒီလို ရှိတယ် ဆိုကြပါစို့။


Account Holder : U Min Naung 
Account Number : 28-456789
Balance : 1,000,000 kyat



ဒါကို JSON  နဲ့ပြမယ်ဆိုရင်

```json
{
    "account_holder": "U Min Naung",
    "account_number": "28-456789",
    "balance": 1000000
}
```

XML နဲ့ ပြမယ်ဆိုရင် 
```xml
<account>
    <account_holder>U Min Naung</account_holder>
    <account_number>28-456789</account_number>
    <balance>1000000</balance>
</account>
```

ဒီလို ပုံစံမျိုးစုံနဲ့ ပြလို့ရတယ်ပေါ့။ ဒါကို အတိုကောက် ပြောရင် Representation လို့ခေါ်တယ်။ လက်ရှိမှာ အသုံးများဆုံး Representation ကတော့ JSON ဖြစ်ပါတယ်။

### 3. URL

URL ကတော့ အများစု အမြဲလိုလို မြင်နေသိနေကြမယ့် အရာတစ်ခု ဖြစ်မှာပါ။ Uniform Resource Locator (URL) လို့ ခေါ်ပါတယ်။ အပေါ်ကပြောခဲ့တဲ့ Resource တွေရဲ့ လိပ်စာလို့ အကြမ်းဖျဉ်းမှတ်ထားလို့ရပါတယ်။ ဉပမာ ကျွန်တော့ရဲ့ facebook account ရဲ့ URL က https://facebook.com/uminuang ပဲ ဆိုကြပါစို့။ ဒါဟာ ဒစ်ဂျစ်တယ် ကမ္ဘာထဲက ကျွန်တော့ Resource ရဲ့ လိပ်စာပဲ ဖြစ်ပါတယ်။

URL ကို Resource တွေရဲ့ လိပ်စာလို့ အကြမ်းဖျဉ်း မှတ်ထားနိုင်ပါတယ်။

### 4. HTTP Verb

အပေါ်မှာ ပြောခဲ့တဲ့ Resource , Representation နဲ့ URL ဒါတွေ အားလုံးဟာ Noun တွေ ဖြစ်ကြပါတယ်။ သူတို့ချည်း သပ်သပ်နဲ့တော့ ဘာမှ ဖြစ်လာမှာ မဟုတ်ပါဘူး။ ဒီ Resource တွေကို အသစ်တိုးချင်တယ် အသစ်ဖန်တီးချင်တယ်။ ရှိပြီးသား Resource တွေကို ပြင်ချင် ဖျတ်ချင်တယ် စသည်ဖြင့် ဒီလို operation တွေလုပ်မှသာ ပြီးပြည့်စုံတဲ့ Life Cycle တစ်ခု ရလာမှာ ဖြစ်ပါတယ်။ အကြမ်းဖျဉ်းအားဖြင့် Verb (၄) ခု ရှိပါတယ်။

GET : Resource စာရင်း လိုချင်တဲ့အခါ အသုံးပြုပါတယ်။ ဉပမာ Facebook Page တစ်ခုက post တွေကို ကြည့်ချင်တဲ့အခါ GET ကို သုံးပါတယ်။
POST : Resource အသစ်တစ်ခု ဖန်တီးချင်တဲ့အခါ အသုံးပြုပါတယ်။ ဉပမာ Facebook မှာ post အသစ်တင်လိုက်ရင် POST ကို သုံးပါတယ်။
PUT : ရှိပြီးသား Resource ကို ပြင်ဆင်ချင်တဲ့အခါ အသုံးပြုပါတယ်။ ဉပမာ Facebook Post တစ်ခုရဲ့ privacy ကို public ကနေ only me ပြောင်းလိုက်တာမျိုးမှာ PUT ကို သုံးပါတယ်။
DELETE : ရှိပြီးသား Resource တစ်ခုကို ဖျက်ချင်တဲ့အခါ အသုံးပြုပါတယ်။ ဉပမာ Facebook Post တစ်ခုကို delete လုပ်လိုက်တာမျိုးမှာ DELETE ကို သုံးပါတယ်။


ဒီ အခြခံ အသုံးအနှုန်း (၄) ခုကို အကြေအလည်နားလည်အောင် ကြိုးစားထားရင် ရှေ့ဆက်သွားမယ့် Request / Response အပိုင်းမှာ သက်တောင့်သက်သာရှိပါလိမ့်မယ်။
ငယ်ငယ်က ရူပဗေဒ စာသင်တုန်းက defination တွေ အလွတ်ကျတ်သလိုမျိုး ဒီအပေါ်က စာပိုဒ်လေးခုကိုလည်း စိတ်ထဲမှာ ဆွဲနေအောင်သာ ကျတ်ထားပါလိမ့်၊ ရှေ့ဆက်လျှောက်မယ့် ပရိုဂရမ်မာ ဘဝကြီးက အများကြီး သာယာသွားပါလိမ့်မယ်။




