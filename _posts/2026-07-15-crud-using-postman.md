---
layout: post
title: "Basic Restful Web Service - Repo"
date: 2026-07-15
categories: tutorials
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---

အရင်နေ့ကတော့ ပန်းရထားတွေ၊ Facebook မှာ Post တင်တာတွေနဲ့ ဉပမာ ပေးပြီး Restful Web Service ရဲ့ Request / Response , Resource , Represntation, URL , HTTP Verb စတာတွေကို ဆွေးနွေးခဲ့ပြီးပါပြီ။
ဒီနေ့တော့ Restful Web Service ကို မျက်လုံးထဲ မြင်နိုင်အောင် အသုံးစာရင်းတွေ မှတ်တဲ့  တကယ့် Restful Web Service အသေးလေး တစ်ခုကို  စမ်းကြည့်ကြမယ်။

ပထမဆုံး စက်ထဲမှာ Postman လို ခေါ်တဲ့ Software တစ်ခု ထည့်ထားရပါမယ်။
မရှိသေးရင် ဒီမှာ Download လုပ်နိုင်ပါတယ်။ အခမဲ့ပါပဲ။

https://www.postman.com/downloads/


API Doc ကို အရင် ဖတ်ကြည့်ကြမယ်။
အသုံးစာရင်း မှတ်ပေးတဲ့ Web Service တစ်ခုလို့ အကြမ်းဖျဉ်း မှတ်ထားလို့ရမယ်။

ကျွန်တော်တို့ နေ့စဉ် သုံးနေတဲ့ အသုံးစာရင်းက Resource ဖြစ်သွားမယ်။
Representation အနေနဲ့ကတော့ JSON သုံးမယ်။

URL ကတော့ https://api.software100.com.mm/expenses 

အသုံးစာရင်းတွေ လိုချင်ရင်

HTTP GET
URL  https://api.software100.com.mm/expenses 
လို့ ခေါ်လိုက်ရင် JSON ပုံစံနဲ့ အသုံးစာရင်းတွေ ကြလာမယ်။

တစ်ခုချင်းစီ အသေးစိတ် ကြည့်ချင်ရင်

HTTP GET 
URL https://api.software100.com.mm/expeses/{id}
ဒီနေရာမှာ id ဆိုတာက ကျွန်တော်တို့ ကြည့်ချင်တဲ့ Resource ရဲ့ identifier ကို ပြောတာ။ ဥပမာ id 1 ရှိတဲ့ အသုံးစာရင်းကို ကြည့်ချင်ရင်

HTTP GET 
URL https://api.software100.com.mm/expenses/{1}
လို့ ခေါ်လိုက်ရင် JSON ပုံစံနဲ့ အသုံးစာရင်း အသေးစိတ်အချက်အလက် ကြလာမယ်။   

အသုံးစာရင်း အသစ်မှတ်ချင်ရင်
HTTP POST 
URL https://api.software100.com.mm/expenses 
Payload မှာ တော့ ကျွန်တော်တို့ရဲ့ အသုံးစာရင်း အချက်အလက်ကို JSON ပုံစံနဲ့ ထည့်ပေးရမယ်။ ဒီလိုမျိုး
```json
{
  "date": "2026-07-15",
  "amount": 4000,
  "description": "ကော်ဖီ"
}
```
မှားထည့်မိလို့ ပြင်ချင်တယ်ဆိုရင်လည်း

HTTP PUT
URL https://api.software100.com.mm/expeses/{id}
Payload မှာတော့ ပြင်ချင်တဲ့ အချက်အလက်။

```json
{
  "amount": 5000
}
```

ဖျတ်ပြင်ချင်တယ်ဆိုရင်

HTTP DELETE
URL https://api.software100.com.mm/expenses/{id}

ကဲ ဒါတွေကို postman မှာ တစ်ခုချင်းစီ စမ်းကြည့်ရအောင်

Collection အသစ်လုပ်။



---


အရင်နေ့က ပန်းရထားတွေ၊ Facebook Post ဥပမာတွေနဲ့ RESTful Web Service ရဲ့ အခြေခံသဘောတရားတွေဖြစ်တဲ့ Request/Response, Resource, Representation, URL နဲ့ HTTP Verb တွေအကြောင်း ဆွေးနွေးခဲ့တာ မှတ်မိကြဦးမယ် ထင်ပါတယ်။

ဒီနေ့မှာတော့ RESTful Web Service ကို မျက်မြင်ကိုယ်တွေ့ ပိုပြီးနားလည်သွားအောင် အသုံးစရိတ် မှတ်ပေးတဲ့ (Expense Tracker) တကယ့် Web Service အသေးလေးတစ်ခုနဲ့ လက်တွေ့ စမ်းသပ်ကြည့်ကြရအောင်။

ပထမဆုံးအနေနဲ့ ကိုယ့်စက်ထဲမှာ API တွေကို စမ်းသပ်ဖို့ **Postman** ဆိုတဲ့ Software လေး သွင်းထားဖို့ လိုပါမယ်။ မရှိသေးရင် အောက်ကလင့်ခ်မှာ အခမဲ့ Download ရယူနိုင်ပါတယ်။
🔗 [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

---

## 📊 API Document ကို လေ့လာကြည့်ခြင်း

ဒီနေ့ စမ်းသပ်မယ့် API လေးကတော့ အသုံးစရိတ် မှတ်ပေးတဲ့ Web Service လေးတစ်ခုပဲ ဖြစ်ပါတယ်။

ဒီနေရာမှာ ကျွန်တော်တို့ နေ့စဉ်သုံးနေတဲ့ **အသုံးစရိတ် (Expense)** က **Resource** ဖြစ်သွားပါမယ်။ Data တွေကို အပြန်အလှန် ပို့ဆောင်ဖို့ **Representation** အနေနဲ့ကတော့ **JSON** ကို အသုံးပြုပါမယ်။

အဓိက အသုံးပြုမယ့် URL ကတော့ `[https://api.software100.com.mm/expenses](https://api.software100.com.mm/expenses)` ဖြစ်ပါတယ်။

အောက်ပါအတိုင်း တစ်ဆင့်ချင်းစီ စမ်းသပ်နိုင်ပါတယ်-

### ၁။ အသုံးစရိတ် စာရင်းအားလုံးကို ကြည့်ရန်

* **Method:** `HTTP GET`
* **URL:** `[https://api.software100.com.mm/expenses](https://api.software100.com.mm/expenses)`
* *ဒီလိုခေါ်လိုက်ရင် မှတ်ထားသမျှ အသုံးစရိတ်စာရင်းတွေက JSON ပုံစံနဲ့ ကျလာပါလိမ့်မယ်။*

### ၂။ အသုံးစရိတ် တစ်ခုချင်းစီကို အသေးစိတ်ကြည့်ရန်

* **Method:** `HTTP GET`
* **URL:** `[https://api.software100.com.mm/expenses/](https://api.software100.com.mm/expenses/){id}`
* *ဒီနေရာမှာ `{id}` ဆိုတာ ကိုယ်ကြည့်ချင်တဲ့ Resource ရဲ့ Identifier (နံပါတ်) ပါ။ ဥပမာ - id နံပါတ် 1 ရှိတဲ့ စာရင်းကို ကြည့်ချင်ရင် `[https://api.software100.com.mm/expenses/1](https://api.software100.com.mm/expenses/1)` လို့ ခေါ်လိုက်တာနဲ့ အသေးစိတ် အချက်အလက်တွေ JSON ပုံစံနဲ့ ကျလာပါမယ်။*

### ၃။ အသုံးစရိတ် အသစ်တစ်ခု မှတ်ရန် (Create)

* **Method:** `HTTP POST`
* **URL:** `[https://api.software100.com.mm/expenses](https://api.software100.com.mm/expenses)`
* *အသစ်ထည့်သွင်းဖို့အတွက် Request ရဲ့ Payload မှာ အောက်ပါအတိုင်း မိမိရဲ့ အသုံးစရိတ် အချက်အလက်ကို JSON ပုံစံနဲ့ ထည့်ပေးရပါမယ်။*

```json
{
  "date": "2026-07-15",
  "amount": 4000,
  "description": "ကော်ဖီ"
}

```

### ၄။ မှားထည့်မိတဲ့ စာရင်းကို ပြင်ဆင်ရန် (Update)

* **Method:** `HTTP PUT`
* **URL:** `[https://api.software100.com.mm/expenses/](https://api.software100.com.mm/expenses/){id}`
* *ဥပမာ - ကော်ဖီဖိုး ၄၀၀၀ ကနေ ၅၀၀၀ ကို ပြင်ချင်တယ်ဆိုရင် Payload မှာ အောက်ပါအတိုင်း ထည့်ရေးရပါမယ်။*

```json
{
  "amount": 5000
}

```

### ၅။ အသုံးစရိတ် စာရင်းကို ဖျက်ရန် (Delete)

* **Method:** `HTTP DELETE`
* **URL:** `[https://api.software100.com.mm/expenses/](https://api.software100.com.mm/expenses/){id}`

---

ကဲ... သဘောတရားတွေ နားလည်ပြီဆိုတော့ ဒါတွေကို Postman မှာ တစ်ခုချင်းစီ လက်တွေ့ စမ်းကြည့်ကြရအောင်!

ပထမဆုံး Postman ကိုဖွင့်၊ **Collection အသစ်တစ်ခု ဖန်တီးပြီး** အပေါ်က အဆင့်တွေကို ကိုယ်တိုင် စမ်းသပ်ကြည့်လိုက်ပါဗျာ။ အဆင်မပြေတာရှိရင် Comment မှာ ဆွေးနွေးလို့ရပါတယ်။ 👇
