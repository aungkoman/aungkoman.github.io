---
layout: post
title: "Page View ရေတွက်ဖို့ အဓိက Request ကို နှေးအောင်လုပ်နေရမလား?"
date: 2026-10-24 08:34:00 +0630
categories:
- software-development
author: Aung Ko Man
tags:
- software-house
- knowledge-sharing
- analytics
- middleware
- performance
lang: my
cover: mobile
excerpt: "Public page view ရေတွက်တာကို Database insert တစ်ကြောင်းနဲ့ စနိုင်ပေမယ့် Tracking ပျက်တာကြောင့် အဓိကစာမျက်နှာ မပျက်စေဖို့၊ View ရဲ့အဓိပ္ပာယ်နဲ့ တိုးချဲ့မယ့်လမ်းကြောင်းကို ကြိုသတ်မှတ်ဖို့လိုပါတယ်။"
permalink: /software-development/page-view-tracking-without-slowing-main-request/
---

“Doctor profile ကို လူဘယ်နှယောက်ကြည့်သလဲ သိချင်တယ်။ Request ဝင်တိုင်း Database ထဲ Record တစ်ကြောင်း Insert လုပ်လိုက်ရင် ရပြီမဟုတ်လား?”

အစပိုင်းမှာ ရပါတယ်။ အရိုးရှင်းဆုံးနည်းက Public page ပြန်ပေးတဲ့ Request အတွင်းမှာပဲ View record တစ်ခု သိမ်းခြင်းပါ။

ဒါပေမယ့် Tracking က အဓိကလုပ်ငန်းမဟုတ်ဘဲ အထောက်အကူပြုအလုပ် ဖြစ်တတ်ပါတယ်။ View record သိမ်းမရတာကြောင့် လူနာက ဆရာဝန်အချိန်ဇယား မကြည့်နိုင်တော့တာ၊ ဖောက်သည်က Product page မဖွင့်နိုင်တော့တာမျိုး မဖြစ်သင့်ပါဘူး။

**ရိုးရှင်းစွာ စတင်နိုင်ပါတယ်။ ဒါပေမယ့် Tracking အလုပ်က Main request ရဲ့ မြန်နှုန်းနဲ့ ရရှိနိုင်မှုကို မထိခိုက်စေဖို့ နယ်နိမိတ်ကို ရှင်းထားရပါမယ်။**

### အရင်ဆုံး “View” ဆိုတာ ဘာလဲ သတ်မှတ်ပါ

Database table ရေးတာမစခင် ဘာကို ရေတွက်ချင်တာလဲ မေးပါ။

- Page URL ကို Request ဝင်တိုင်း View တစ်ခုလား။
- Page အောင်မြင်စွာ ပြန်ပေးနိုင်မှ View လား။
- လူတစ်ယောက်က Refresh ဆယ်ခါလုပ်ရင် ဆယ်ခုလား၊ တစ်ခုလား။
- Search engine နဲ့ automated bot တွေကို ထည့်မလား။
- Login ဝင်ထားသူနဲ့ Public visitor ကို ခွဲမလား။
- Profile owner ကိုယ်တိုင်ကြည့်တာ ပါမလား။
- Preview၊ Health check နဲ့ internal monitoring Request တွေ ပါမလား။

“Total views” ဆိုတဲ့ကိန်းဂဏန်းတစ်ခုတည်းကို ထုတ်ပြပေမယ့် အပေါ်ကစည်းမျဉ်းမတူရင် တန်ဖိုးလည်း မတူပါဘူး။

အစပိုင်းမှာ **Request-based view** လို့ ရိုးရိုးသတ်မှတ်နိုင်ပါတယ်။ နောက်ပိုင်း “Unique visitors” လို Metric လိုလာရင် သီးခြားသတ်မှတ်ပါ။ View count နဲ့ လူအရေအတွက်ကို တစ်ခုတည်းလို မခေါ်သင့်ပါဘူး။

### အရိုးရှင်းဆုံး Architecture

အစပိုင်းမှာ Public endpoint တစ်ခုချင်းစီမှာ Code ထပ်မရေးချင်ရင် Middleware သို့မဟုတ် သီးခြား Tracking service တစ်ခု သုံးနိုင်ပါတယ်။

လုပ်ဆောင်ပုံက—

1. Public page Request ဝင်လာတယ်။
2. သက်ဆိုင်ရာ Doctor၊ Clinic သို့မဟုတ် Product ကို ရှာတယ်။
3. Page ပြန်ပေးနိုင်တဲ့အခြေအနေမှာ View record သိမ်းတယ်။
4. Main response ကို ပြန်ပေးတယ်။

ဒီနည်းရဲ့ အားသာချက်က ရိုးရှင်းပြီး စမ်းသပ်ရလွယ်တာပါ။ Queue၊ Worker နဲ့ Message broker မလိုသေးပါဘူး။

အားနည်းချက်က Database insert ပြီးအောင် Request က စောင့်ရတာပါ။ Traffic နည်းပြီး Database ကျန်းမာနေချိန်မှာ ကွာခြားမှုသေးနိုင်ပေမယ့် Request များလာတာ၊ Database connection ပြည့်တာနဲ့ Lock ဖြစ်တာတွေမှာ Tracking က Main page ကို ထိခိုက်လာနိုင်ပါတယ်။

### View table ထဲ ဘာတွေသိမ်းမလဲ?

လိုတာထက်ပိုမသိမ်းပါနဲ့။ အစပိုင်းနမူနာအဖြစ်—

| Field | ရည်ရွယ်ချက် |
|---|---|
| id | Record ကို သီးခြားခွဲရန် |
| viewable_type | Doctor၊ Clinic၊ Product စတဲ့ Resource အမျိုးအစား |
| viewable_id | ကြည့်ခဲ့တဲ့ Resource ID |
| viewed_at | ကြည့်ခဲ့တဲ့အချိန် |
| route_name | ဘယ် Public route က ဝင်လာသလဲ |
| visitor/session key | သတ်မှတ်ထားတဲ့ကာလအတွင်း ထပ်ကြည့်မှု ခွဲရန်၊ လိုအပ်မှသာ |
| user_id | Login user နဲ့ ချိတ်ရန်၊ လုပ်ငန်းလိုအပ်ချက်ရှိမှသာ |
| source | Web၊ Mobile Web စတဲ့ Source ခွဲရန်၊ ယုံကြည်နိုင်သည့်အခါ |

IP address အပြည့်၊ User-Agent အပြည့်နဲ့ မလိုအပ်တဲ့ ကိုယ်ရေးအချက်အလက်တွေကို “နောက်မှသုံးမယ်ထင်လို့” ဆိုပြီး အကုန်မသိမ်းသင့်ပါဘူး။ ဘာအတွက်သုံးမလဲ၊ ဘယ်လောက်ကြာထိန်းမလဲ၊ ဘယ်သူကြည့်နိုင်မလဲကို သတ်မှတ်ပြီး လိုအပ်သလောက်သာ သိမ်းပါ။

### Middleware သုံးတာနဲ့ နှေးသွားမလား?

Middleware ဆိုတဲ့အမည်ကြောင့် နှေးတာမဟုတ်ပါဘူး။ Middleware ထဲမှာ ဘာလုပ်ထားသလဲပေါ် မူတည်ပါတယ်။

Memory ထဲက အချက်တစ်ခုစစ်တာနဲ့ Database insert လုပ်တာ၊ အပြင် Service ကို HTTP call လုပ်တာတို့ရဲ့ ကုန်ကျချိန် မတူပါဘူး။

Request အချိန်ကို အကြမ်းဖျဉ်း ဒီလိုမြင်နိုင်ပါတယ်။

> Total response time = Main business work + Tracking work + Network/Database waiting

Synchronous insert သုံးထားရင် Tracking အချိန်က Main response ထဲ ပါပါတယ်။ ဒါကြောင့် မခန့်မှန်းဘဲ တိုင်းပါ။

- Tracking မပါခင် response time
- Tracking ပါပြီး response time
- Database insert ကြာချိန်
- Error rate
- Peak traffic မှာ connection usage

တို့ကို စမ်းသပ်ကြည့်ပါ။

### Tracking မအောင်မြင်ရင် Main page ကို ဘာလုပ်မလဲ?

ဒီမေးခွန်းက အရေးကြီးပါတယ်။

Doctor schedule ကြည့်တဲ့ Page မှာ Tracking insert ပျက်သွားတယ်ဆိုပါစို့။ အများအားဖြင့် Schedule ကို ဆက်ပြပြီး Tracking error ကို သီးခြားမှတ်တမ်းတင်တာ သင့်တော်နိုင်ပါတယ်။

ဒါပေမယ့် Security audit၊ ငွေပေးချေမှုနဲ့ ဥပဒေဆိုင်ရာလိုအပ်ချက်အတွက် မဖြစ်မနေမှတ်ရမယ့် Event ဆိုရင် ပျက်သွားလည်း ဆက်လုပ်မယ်ဆိုတဲ့ Rule မသင့်တော်နိုင်ပါဘူး။

| အချက်အလက်အမျိုးအစား | Failure ဖြစ်ရင် စဉ်းစားရမယ့်ပုံ |
|---|---|
| Public page view | Main page ကို ဆက်ပြပြီး Tracking failure ကို စောင့်ကြည့်နိုင် |
| Marketing analytics | နည်းနည်းပျောက်နိုင်မှုကို သတ်မှတ်ထားတဲ့အတိုင်း လက်ခံနိုင် |
| Payment record | မပျောက်ရ၊ Transaction စည်းမျဉ်းနဲ့ ကိုင်တွယ်ရ |
| Security audit | မပြည့်စုံမှုကို သီးခြား Alert နဲ့ စစ်ရ |
| Legal acknowledgement | လုပ်ငန်းနဲ့ ဥပဒေလိုအပ်ချက်အတိုင်း အတည်ပြုမှ ဆက်လုပ်ရနိုင် |

Page view tracking ကို Audit log နဲ့ မရောပါနဲ့။ ရည်ရွယ်ချက်မတူသလို ပျက်သွားတဲ့အခါ ကိုင်တွယ်ပုံလည်း မတူပါတယ်။

### Error ကို တိတ်တိတ်ပဲ ဖျောက်ထားရမလား?

Main page ကို မပျက်စေချင်လို့ Exception ကို ဖမ်းပြီး ဘာမှမလုပ်ဘဲထားတာလည်း မကောင်းပါဘူး။ Tracking က ရက်ပေါင်းများစွာ ပျက်နေတာ မသိဘဲ Report မှားနေနိုင်ပါတယ်။

အနည်းဆုံး—

- Tracking insert failure count
- နောက်ဆုံးအောင်မြင်ခဲ့တဲ့အချိန်
- Error အမျိုးအစား
- Database latency
- Queue သုံးရင် pending/failed jobs

တို့ကို စောင့်ကြည့်နိုင်အောင်လုပ်ပါ။

Main request က အောင်မြင်ပြီး Tracking ပျက်နေတာကို Error log အများကြီးရေးပြီး Server disk ပြည့်စေမယ့်ပုံလည်း ရှောင်ရပါတယ်။ Log level၊ sampling နဲ့ Alert threshold ကို သတ်မှတ်နိုင်ပါတယ်။

### Duplicate View ကို ဘယ်လိုကိုင်တွယ်မလဲ?

User က Refresh နှစ်ခါလုပ်ရင် Record နှစ်ခုဝင်တာဟာ Bug လားဆိုတာ သတ်မှတ်ချက်ပေါ်မူတည်ပါတယ်။

အောက်ပါနည်းတွေရှိနိုင်ပါတယ်။

1. **Request တိုင်းရေတွက်ခြင်း** — ရိုးရှင်းပေမယ့် Refresh နဲ့ Bot traffic ပါနိုင်တယ်။
2. **Session + Resource + Time window** — သတ်မှတ်ထားတဲ့ကာလအတွင်း တစ်ကြိမ်ပဲ ရေတွက်တယ်။
3. **Login user အလိုက်** — Login လိုတဲ့ System မှာ အသုံးဝင်ပေမယ့် Public visitor မဖမ်းနိုင်ဘူး။
4. **Client event** — Page တကယ်ဖွင့်ပြီးမှ Browser က Event ပို့တယ်၊ JavaScript မပြေးတာနဲ့ Block ဖြစ်တာတွေကြောင့် အားလုံးမရနိုင်ဘူး။
5. **Aggregate counter** — Detail record အကုန်မသိမ်းဘဲ Count တိုးတယ်၊ နောက်မှ လေ့လာနိုင်တဲ့အချက် နည်းသွားနိုင်တယ်။

Unique visitor တိတိကျကျ သိမယ်လို့ အလွယ်မပြောသင့်ပါဘူး။ Cookie၊ Session၊ Login နဲ့ Privacy rule တို့ပေါ်မူတည်ပြီး ခန့်မှန်းချက်ဖြစ်နိုင်ပါတယ်။

### Index မရှိရင် Report က နှေးလာမယ်

Insert လုပ်တာအဆင်ပြေပေမယ့် View table ကြီးလာတဲ့အခါ Dashboard query က နှေးလာနိုင်ပါတယ်။

Report က အများဆုံး ဘယ်လိုမေးမလဲဆိုတာ စဉ်းစားပါ။

- Doctor တစ်ဦးရဲ့ ဒီနေ့ View
- Clinic တစ်ခုရဲ့ နောက်ဆုံး ၃၀ ရက် View
- Resource အမျိုးအစားအလိုက် View
- နေ့စဉ်စုစုပေါင်း
- Route အလိုက် Error/Success

ဒီ Query တွေအတွက် viewable_type, viewable_id, viewed_at စတဲ့ Field တွေကို သင့်တော်တဲ့အစီအစဉ်နဲ့ Index စဉ်းစားရပါတယ်။ Index အများကြီးထည့်တိုင်း ကောင်းတာမဟုတ်ပါဘူး။ Insert cost နဲ့ Storage တိုးနိုင်လို့ တကယ်သုံးတဲ့ Query ကိုကြည့်ပြီး သတ်မှတ်ပါ။

Record အဟောင်းတွေကို ဘယ်လောက်ကြာထိန်းမလဲ၊ Raw data ကနေ Daily aggregate ပြောင်းမလားဆိုတာလည်း Table ကြီးမလာခင် ဆုံးဖြတ်ထားနိုင်ပါတယ်။

### ဘယ်အချိန်မှာ Queue/Event ပြောင်းသင့်သလဲ?

အစကတည်းက Infrastructure အများကြီးမတည်ဆောက်ချင်ရင် Synchronous insert နဲ့ စနိုင်ပါတယ်။ အောက်ကလက္ခဏာတွေ ပေါ်လာရင် Async လမ်းကြောင်းစဉ်းစားနိုင်ပါတယ်။

- Tracking ကြောင့် response time သိသိသာသာတိုးလာတယ်။
- Traffic မြင့်ချိန် Database connection ဖိအားတိုးတယ်။
- View အပြင် Device၊ Campaign၊ Referrer စတဲ့ အလုပ်များလာတယ်။
- Main request အောင်မြင်မှုကို Tracking failure နဲ့ ခွဲချင်တယ်။
- Event တစ်ခုကို Analytics၊ Notification နဲ့ Audit စတဲ့ Consumer များက သီးခြားယူသုံးချင်တယ်။
- Retry၊ batching နဲ့ failure handling လိုလာတယ်။

Async ပြောင်းတာနဲ့ အခက်အခဲအားလုံး ပျောက်သွားတာမဟုတ်ပါဘူး။ Queue Database ကို သုံးရင် Database write က ဆက်ရှိပါတယ်။ Worker မပြေးတာ၊ Job ထပ်လုပ်မိတာနဲ့ Queue backlog တက်တာတို့ကို ထပ်ကိုင်တွယ်ရပါတယ်။

### တဖြည်းဖြည်း တိုးချဲ့နိုင်တဲ့ လမ်းကြောင်း

| အဆင့် | Architecture | သင့်တော်နိုင်တဲ့အခြေအနေ |
|---|---|---|
| 1 | Main request ထဲ DB insert | Traffic နည်း၊ အမြန်စတင်လို၊ တိုင်းတာနိုင် |
| 2 | Tracking service သီးခြားခွဲ | Controller များမှာ Rule တူအောင်လုပ်လို |
| 3 | Event + Database queue | Main response နဲ့ Processing ခွဲလို၊ Worker ရှိ |
| 4 | Batch/Aggregation | View volume များ၊ Report query ဖိအားများ |
| 5 | Dedicated analytics pipeline | Source များ၊ Consumer များနဲ့ Retention rule ရှုပ်ထွေး |

အဆင့်တိုင်းကို မဖြစ်မနေသွားဖို့ မလိုပါဘူး။ လက်ရှိလိုအပ်ချက်နဲ့ တိုင်းတာရလဒ်အပေါ် မူတည်ပါတယ်။

### လက်ခံစမ်းသပ်ချိန်မှာ စစ်သင့်တာများ

သီးခြားစမ်းသပ်နေရာမှာ—

1. Resource ရှိတဲ့ Page ကိုဖွင့်ရင် View တစ်ခု မှန်မှန်ဝင်သလား။
2. Resource မရှိတဲ့ 404 Request ကို View အဖြစ် ရေတွက်သလား။
3. Tracking table ကို Write မရအောင်လုပ်ရင် Main page က ဆက်ပွင့်သလား။
4. Tracking error ကို Monitoring မှာ သိနိုင်သလား။
5. Refresh နှစ်ခါလုပ်ရင် သတ်မှတ်ထားတဲ့ Rule အတိုင်း ရေတွက်သလား။
6. Owner ကိုယ်တိုင်ကြည့်တာနဲ့ Public visitor ကို ခွဲထားသလား။
7. Report ရဲ့ Time zone နဲ့ Date range မှန်သလား။
8. Traffic တိုးစမ်းတဲ့အခါ response time နဲ့ Database connection ဘယ်လောက်ပြောင်းသလဲ။
9. Sensitive data မလိုအပ်ဘဲ သိမ်းထားတာ ရှိသလား။
10. Record retention နဲ့ ဖျက်သိမ်းပုံ ရှင်းသလား။

### ဒီနေ့လုပ်ကြည့်ရန်

Public page တစ်ခုအတွက် View ရေတွက်နေတယ်ဆိုရင် မေးခွန်းသုံးခု ဖြေကြည့်ပါ။

1. “View” ကို ဘယ်လိုသတ်မှတ်ထားသလဲ။
2. Tracking Database ပျက်ရင် Main page ဆက်ပွင့်မလား။
3. Tracking မအောင်မြင်နေတာကို ဘယ်လိုသိမလဲ။

ဒီအဖြေတွေရှင်းပြီး Traffic နည်းသေးရင် ရိုးရှင်းတဲ့ Database insert နဲ့ စတင်တာ လုံလောက်နိုင်ပါတယ်။ နောက်ပိုင်း တိုင်းတာချက်အရ လိုမှ Queue၊ Event နဲ့ Aggregation ကို တိုးချဲ့နိုင်ပါတယ်။

### မိမိလုပ်ငန်းနဲ့ ချိတ်ဆက်ဆွေးနွေးရန်

Doctor profile၊ Clinic page၊ Product listing သို့မဟုတ် Booking page တွေရဲ့ အသုံးပြုမှုကို သိချင်ပေမယ့် Main system နှေးသွားမှာ၊ Database ကြီးလာမှာနဲ့ Report မတိကျမှာ စိုးရိမ်နေပါက [အသုံးပြုမှု Tracking architecture အကြောင်း ဆက်သွယ်မေးမြန်းရန်](mailto:admin@mmsoftware100.com?subject=Page%20view%20tracking%20architecture) ကနေ လက်ရှိ Page အမျိုးအစားနဲ့ သိချင်တဲ့ Metric ကို ပြောပြနိုင်ပါတယ်။ ဆွေးနွေးမှုစဖို့ ဖောက်သည်အချက်အလက်၊ IP စာရင်း၊ စကားဝှက်နဲ့ Access token ပေးပို့ဖို့ မလိုပါဘူး။
