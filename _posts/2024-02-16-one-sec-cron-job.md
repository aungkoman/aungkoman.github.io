---
layout: post
title:  "Cron Job and Queue"
date:   2024-02-16 15:00:00 +0630
categories: howto
---

ပြီးခဲ့တဲ့ ပရောဂျက်မှာ ဘာတွေ အခက်တွေ့ခဲ့လဲ?

ပုံမှန် CRUD တွေအတွက် အဆင်ပြေခဲ့ပေမယ့် Time Series နဲ့ လုပ်ရတဲ့ operation တွေကတော့ အဆင်ပြေဖို့ ခက်ခဲ့တယ်။

Client လိုချင်တာက မိနစ်တိုင်းမှာ Calculation တွက်ချင်တာ။

ဒါများ လွယ်လွယ်လေး Cron Job run မယ်ပေါ့။
စိတ်ထဲထင့်သွားတာ တစ်ခုတော့ ရှိတယ်။ Cron Job ကို တစ်မိနစ်တိုင်းမှာ run လို့ OS နဲ့ Framework ကို ချိတ်ပေးလိုက်တဲ့အခါ။ ချိတ်တဲ့အချိန်က စပြီး တစ်မိနစ်တိုင်းမှာ run မှာလား

ဉပမာ 2024-02-14 12:34:56 မှာ OS နဲ့ Framework ကို cron job run ဖို့ ချိတ်လိုက်ရင် နောက်တစ်မိနစ်ဖြစ်တဲ့ 
2024-02-14 12:35:56 မှာ စ run မှာလား၊ ဒါမှ မဟုတ် တကယ့်နာရီရဲ့ တစ်မိနစ်ဖြစ်တဲ့
2024-02-14 12:35:00 မှာ စ run မှလား။

Chat GPT ကို မေးကြည့်တော့ 00 sec မှာ run မယ်ပြောတယ်။
စမ်းကြည့်တော့လည်း အဆင်ပြေနေတာတွေ့တာနဲ့ Production ကို မျက်စိမှိတ်ပြီး လွှတ်ပေးလိုက်တယ်။

--- 

သိပ်မကြာပါဘူး။ Calculation အပိုင်းအမှာ အပြည့်မရတာတွေ ဖြစ်လာတယ်။
Telescope ကျေးဇူးနဲ့ ပြန်လိုက်ကြည့်တော့ SQL Query တွေက 02 / 03 Sec တွေမှာ run နေတာ တွေ့တယ်။

Expected SQL Query

```sql
SELECT * FROM investment WHERE updated_at >= 2024-02-14 12:34:01 AND updated_at <=2024-02-14 12:35:00
```
ဒါမျိုး အချိန် တစ်မိနစ် ( စက္ကန့် (၆၀) ) အတိအကျ လိုချင်တာ။

ဒါပေမယ့် Log မှာ ကြည့်တော့

```sql
SELECT * FROM investment WHERE updated_at >= 2024-02-14 12:34:02 AND updated_at <=2024-02-14 12:35:00
SELECT * FROM investment WHERE updated_at >= 2024-02-14 12:34:03 AND updated_at <=2024-02-14 12:35:00
```
စသည်ဖြင့် နှစ်စက္ကန့် က စနေတယ်။

ဆိုရရင် cron job က 00 sec မှာ run ပေမယ့် Laravel ရဲ့ queue က ချက်ခြင်း run မပေးနိုင်တာလည်း ဖြစ်နိုင်တယ်။

ဒီတော့ queue က run ချင်တဲ့အချိန်မှ run 
စမှတ် နဲ့ ဆုံးမှတ် အချိန်တွေကိုတော့ အတိအကျ စက္ကန့် (၆၀) ရဖို့ လိုလာတယ်။

Carbon ရဲ့ ကျေးဇူးနဲ့ အချိန်တွေကို calculate လုပ်ရတာ သက်သာသွားတယ်။

```php
$currentTime = Carbon::now();
// Now $currentTime has the seconds part set to 00
// queue က ချက်ခြင်း မ run နိုင်ပဲ 3 စက္ကန့်လောက်ကြာမှ run တော့ 02 စက္ကန့်က အဖွဲ့တွေ ကျန်ခဲ့
// ဒါကြောင့် စက္ကန့်ကို 00 ထား
$currentTime->second(0);
// လွန်ခဲ့သော (၂၄ နာရီ နှင့် ၂၄ နာရီ​ ၅၉ စက္ကန့်က ရင်းနှီးမြှပ်နှံမှုများ )
$endTime = $currentTime->subDay(); // Carbon::now()->subDay();
// need to copy, since we don't wnat to modify original endTime
$startTime = $endTime->copy()->subSeconds(59);
```
ဒီတော့မှပဲ အိုကေမှ စိုပြေသွားတော့တယ်။