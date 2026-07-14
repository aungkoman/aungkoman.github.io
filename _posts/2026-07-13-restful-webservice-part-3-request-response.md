---
layout: post
title: "Restful Web Service - Request & Response"
date: 2026-07-1011
categories: tutorials
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---

မနေ့ကတော့ Request / Response ပုံစံကို ပန်းရထား နဲ့ နမူနာယူပြီး ဆွေးနွေးခဲ့ကြပါတယ်။
ဒီနေ့တော့ Facebook မှာ Post တင်တာနဲ့ ဉပမာထားပြီး HTTP GET,POST,PUT,DELETE တွေအကြောင်း ဆက်ပြီး ပြောကြပါမယ်။

Facebook မှာ Newsfeed ကြည့်တဲ့အခါ Posts တွေအများကြီးကို မြင်ရပါတယ်။
နောက်ကွယ်မှာတော့ HTTP GET ကို အခုလိုမျိုး သုံးထားတာပါ

GET /api/v1/posts

GET ကတော့ HTTP Verb ဖြစ်ပြီး
/api/v1/posts ဆိုတာကတော့ URL ဖြစ်ပါတယ်။
တကယ်လိုချင်တဲ့ Post တွေက Resource ဖြစ်ပါတယ်။


Post အသစ်တင်တဲ့အခါမှာလည်း 
POST /api/v1/posts

ဒါမျိုး ခေါ်လိုက်တာ ဖြစ်ပါတယ်။

တင်ထားတဲ့ post ကို only me လုပ်ချင်တဲ့အခါ
PUT /api/v1/posts/123

ဒီနေရာမှာ /123 ဆိုတာကတော့ ပြင်ချင်တဲ့ post ရဲ့ id / တစ်နည်းအားဖြင့် လိပ်စာဖြစ်ပါတယ်။

post တွေ ဖျတ်ချင်တယ် ဆိုရင်တော့ 

DELETE /api/v1/posts/124
ဒီလို ဖြစ်ပါတယ်။

အကြမ်းဖျဉ်း

GET /api/v1/posts Post စာရင်းရယူရန်။
GET /api/v1/posts/123 Post နံပါတ် ၁၂၃ နဲ့ပက်သက်သမျှ အသေးစိတ် ရယူတာ။ 
POST /api/v1/posts Post အသစ်တင်တာ။
PUT /api/v1/posts/123 Post နံပါတ် ၁၂၃ ရဲ့ စာ / privacy (only me) စတာတွေကို ပြင်တာ။
DELETE /api/v1/posts/124 Post နံပါတ် ၁၂၄ ကို ဖျတ်တာ။

ဒါဆိုရင်တော့ ဘယ်အချိန်မှာ ဘယ် HTTP Verb ကိုသုံးရမယ်ဆိုတာ နားလည်မယ်လို့ မျှော်လင့်ပါတယ်။
နောက်တစ်ပိုင်းမှာ Payload နဲ့ Response Status Code တွေ အကြောင်း ဆက်လက်ဆွေးနွေးကြပါမယ်။

မေတ္တာဖြင့်
Cisco
www.software100.com.mm














ဉပမာ Facebook မှာ Newsfeed ကြည့်တာ၊ Like and Comment ပေးတာ၊ Post တင်တာ၊  စသည်ဖြင့် အားလုံးဟာ ဒီ Request / Response သဘောတရားတွေနဲ့ပဲ အလုပ်လုပ်နေကြတာဖြစ်ပါတယ်။ အဲ့တော့ ဒီ Request / Response ဆိုတာကို ကောင်းကောင်းနားလည်ထားဖို့က အရမ်းကို အရေးကြီးပါတယ်။


လက်ရှိ အင်တာနက်ပေါ်မှာ ကျွန်တော်တို့ လုပ်နေသမျှက ဒီ Request / Response ဆိုတဲ့ သဘောတရားအပေါ်မှာ အခြေခံထားတာဖြစ်ပါတယ်။




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




