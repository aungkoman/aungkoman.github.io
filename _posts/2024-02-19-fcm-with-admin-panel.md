---
layout: post
title:  "FCM with Admin Panel"
date:   2024-02-19 15:00:00 +0630
categories: howto
---

## Mobile 

FCM Topic တွေ subscribe လုပ် / unscbscribe လုပ်။
Token ပို့။
FCM ရောက်လာရင်  အခြေအနေ (၃) မျိုးအတွက် Handle လုပ်ထား။ မတူညီတဲ့ screen တွေကို သွား။
Data parse လုပ်ပြ။


## Backend API

Register
Login
Subscription CRUD


## Admin Panel

User CRUD
Topic CRUD
Message CRUD



### Test Cases

ချက်ခြင်း ပို့နိုင်တဲ့ Notification မှ အဆင်ပြေမယ်။

Token အရင် Generate လုပ်ပြီး ယူထား။
အဲ့တာနဲ့ စမ်းပို့
နောက် Topic တွေကို Web က ပို့လို့ရနိုင်လား စစ်ကြည့်။

```json

  "results": [
    {
      "error": {
        "code": "messaging/registration-token-not-registered",
        "message": "The provided registration token is not registered. A previously valid registration token can be unregistered for a variety of reasons. See the error documentation for more details. Remove this registration token and stop using it to send messages."
      }
    },
    {
      "error": {
        "code": "messaging/registration-token-not-registered",
        "message": "The provided registration token is not registered. A previously valid registration token can be unregistered for a variety of reasons. See the error documentation for more details. Remove this registration token and stop using it to send messages."
      }
    },
    {
      "messageId": "1708335104009267"
    }
  ],
  "canonicalRegistrationTokenCount": 0,
  "failureCount": 2,
  "successCount": 1,
  "multicastId": 6588644802774198000
}
```

Token တွေက Expired ဖြစ်ကုန်ပြီ။
အမြဲတန်းတော့ အသစ် Re Generate လုပ်နေကြမယ်။

https://socket-server-uiks.onrender.com/fcm

ဒါနဲ့ စမ်းနိုင်မယ်။​FCM Server ကို။
သူက အတော်မြန်တယ်။


