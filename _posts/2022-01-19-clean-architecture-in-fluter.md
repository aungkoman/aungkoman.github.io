---
layout: post
title: Clean Architecture in Flutter
description: structure of flutter project.
image: ../images/fcc/kfc.jpg
---

### Clean Architecture in Flutter
Clean Architecture ဘာလို့သုံးလဲ?
Clean Architecture မှ မဟုတ်ဘူး။ ကုတ်ရေးတဲ့အခါ 
- Reusable ဖြစ်စေဖို့
- ဘယ် အစိတ်အပိုင်းကို မဆို အလွယ်တကူ ဖြုတ်နိုင် တက်နိုင်ဖို့
- Mainatainable လုပ်ဖို့ နဲ့ 
- Test လုပ်လို့ရအောင်


#### Reusable Component
UI, Business Logic, Entity, Model, Serialization စတာတွေက App တစ်ခုနဲ့ တစ်ခုမှာ သိပ်အများကြီး ကွာသွားတာ မဟုတ်တော့။ တစ်ခု ကောင်းကောင်းရေးထားပြီး ပြန်သုံးနိုင်ဖို့ လိုတယ်။


#### Plug and Play
Componet Level တင်မဟုတ်ပဲ Component တွေစုထားတဲ့ Module တွေကိုပါ Plug and Play လုပ်နိုင်အောင်။
မတူညီတဲ့ Module တွေ ပေါင်းပြီး Product မျိုးစုံ ရနိုင်အောင်။

#### Maintainable
requirements ဆိုတာက ပြောင်းနေတက်တဲ့ သဘောရှိတယ်။
ဒီအခါ ပြောင်းရလွယ်တဲ့ ကုတ်ဖြစ်ဖို့လိုတယ်။
ဟာ ဘာတွေ ရေးထားမှန်းကိုမသိဘူး - Single Responsibility မရှိတဲ့အခါမျိုး မှာ အတော် တိုင်ပတ်တယ်။


#### Test
component တစ်ခုချင်းစီက စပြီး test code ရေးပြီး စစ်နိုင်ဖို့လိုတယ်။
TDD လိုမျိုးပါပဲ။
တစ်နေရာ ပြင်လို့ နောက်တစ်နေရာမှာ ပြဿနာတက်ကုန်တာမျိုးတေွ
နောက် စိတ်အေးချမ်းသာဖို့ပေါ့။
test code run လို့ pass ဖြစ်ရင် ည ကောင်းကောင်း အိပ်လို့ရမယ်။


အိုကေ အကြောင်းပြချက်တွေ ရပြီဆိုတော့ စလိုက်ကြရအောင်။


အဓိက သုံးရမယ့် အရာတွေက

Entity
Usecase
Repository
Datasource

Entity ဆိုတာကတော့ App ရဲ့ အနှစ်ချူပ် Data လို့ ခေါ်ရမယ်
Clean Architecture ရဲ့ အလယ်ဗဟိုမှာ ရှိတဲ့ Core ပဲ။

Data Model နဲ့ ဆင်ပေမယ့် Data Model မှာက Serialization ပါမယ်- Raw Data နဲ့ Entity ကြားမှာ Data Model ရှိတယ်လို့ မှတ်ထားနိုင်တယ်။

Entity - Model - Raw Data (JSON / XML)

UI - State Management - Usecase  - Repository - Datasource

ဒါမျိုး အစီအစဉ်အတိုင်း ချိတ်ဆက်နေမယ်။
တစ်ခု နဲ့ တစ်ခုဟာ Constract (interface class) တွေ သုံးပြီးပဲ ချိတ်ဆက်ကြမယ်။

နောက် Exception နဲ့ Failure ရှိမယ်။

ဘယ်က ဘယ်လို စကြမလဲ?

Big Picture ကို အရင်မြင်ရမယ်။

ဆိုကြပါစို့ CRUD တစ်ခုပဲ အရင် စဉ်းစားကြရအောင်။

CRUD လုပ်မယ့် Entity အရင်သတ်မှတ်မယ်။
သာမန် Dart Class တစ်ခုပါပဲ။

ပြီးရင် usecase တွေ သတ်မှတ်မယ်။

ဒီမှာဆိုရင် CRUD usecase လေးခု ရှိမှာပေါ့။
ထည့်ပေးရမယ့် Parameter နဲ့
ပြန်ရမယ့် Data အမျိုးအစား ( Entity , List<Entity> စသည်ဖြင့်)

Usecase တွေက Input နဲ့ Output သတ်မှတ်ပေးထားတာမျိုး။
ဒီမှာ Repository တွေ လိုလာပြီ

Usecase -> Repository

Usecase တစ်ခုချင်းစီက Repository တစ်ခုရဲ့ Method တစ်ခုကို သုံးတာ များတယ်။

တစ်ခုပဲ သုံးနေတဲ့ Repository တွေကလည်း Abstract Class တွေ ဖြစ်နေဖို့ပဲ လိုတာ။

ဆိုတော့ Repository Abstract Class တွေ ရေးပေါ့။


Entity
Repository
Usecase

ဒီသုံးခုရပြီ

Presentaiton Logic Holder ( flutter မှာတော့ State Management Library တစ်ခုခု မှာ)
သုံးနေကျ Provider ပဲ ဆိုပါစို့။

Promotion Provider  မှာ 
Entity စာရင်း လုပ်ထားမယ်။

ဆိုပါစို့
Promotion Provider မှာ ဆိုရင်
Promotion Entity List ရှိမယ်
နောက် Promotion Entity for detail စသည်ဖြင့် နှစ်ခု လောက် ရှိမယ်ပေါ့။


ပြီးရင် သူက သုံးမယ့် Usecase တွေရှိမယ်။
ဒီ Usecase တွေက concrete လား abstract လား ?
Implement တွေဗျ။

Usecase ဆိုတဲ့ input / output ပုံစံလေးပဲ တူတယ်။
ကျန်တာတွေက concrete class တွေ တိုက်ရိုက် initialize လုပ်ထားတာ။


လိုသမျှ class တွေကို Service Locator က ရှာပေးမှာ ဆိုတော့ ပြဿနာ မရှိဘူး။

လိုတဲ့ type သိနေဖိူ့ပဲ လိုတာ။

Return ပြန်တဲ့အချိန်မှာ
Functional Programming က feature တစ်ခုဖြစ်တဲ့
Left / Right 
Failure / Data ကို သုံးဖြစ်တယ်။

ဒီ Failure တို့ Exception တို့ကို စာရင်း လုပ်ထားတာ ရှိတယ်။


လောလောဆယ်တော့ ဘယ်ရောက်သွားပြီလဲ?

Entity - Usecase - Repository

Provider - Entity - Usecase - Repository

Repository တွေကို Implement တော့မယ် ဆိုရင် Datasource တွေလိုလာပြီ၊ ထုံးစံအတိုင်းပဲ abstract class တွေပါပဲ။
ရှုပ်များသွားသလား မသိ

Repository Implementation လုပ်တဲ့အခါမှာ လိုတဲ့ class ကို abstract class အနေနဲ့ သုံးတာမျိုး။

Repository မှာ Exception တွေကို Failure အနေနဲ့ ပြောင်းပေးမယ်။

Data Source မှာက External Library ဖြစ်တဲ့ HTTP တို့၊ Shared Preference တို့နဲ ့ဆက်သွယ်မယ်။

သူတို့က ပြောင်းလွယ် ပြင်လွယ် အဆင်ပြေတယ် ဆိုတာက 

Contract တွေ ရှိလို့။

ဆိုရရင် ဒီ Contract ကိုသာ ပြေလည်အောင် လုပ်ပေးရင် ကြိုက်တဲ့ကောင် plug and play လုပ်လို့ရတယ်။

Class နှစ်ခု ချိတ်သုံးပြီ ဆိုတာနဲ့ abstrct က ကြားဝင်ပြီးသားပဲ။

ကောင်းတာက Service Locator သုံးထားတော့ တကယ့် ကုတ်ကို ပြင်စရာ မလိုဘူး
service injection လုပ်တဲ့နေရာမှာ class name လေး ပြောင်းပေးလိုက်ရုံပဲ။

business logic တွေ
entity တွေ ပြောင်းရင်တော့ တစ်မျိုးပေါ့။
ဒါဆိုရင်တော့ တော်တော် များမျာကို လိုက်ပြောင်းရမယ် ထင်တယ်။


Class တစ်ခု Initialize လုပ်တဲ့အခါမှာ 

ဒီ class ထဲမှာ လိုမယ့် class instance တွေကို constructor ထဲမှာ တစ်ပါတည်း ထည့်ပေးလိုက်တယ်။

ထည့်ပေးလိုက်တဲ့ class instance တွေက concrete class / abstract class ဘာပဲ ဖြစ်ဖြစ် အဆင်ပြေတယ်။
ဘာ အမျိုးအစားပဲ သုံးသုံး Service Locator က ပြန်လိုက်ရှာပေးမှာပဲ။

အိုကေ ရေးရမယ့် အစီအစဉ်က



Entity
Repository
Model
Datasource

Usecase
Provider

Widget


Widget တွေမှာလည်း nested route ဆိုရင်















