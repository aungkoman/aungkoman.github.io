---
layout: post
title:  "Flutter Buyer Persona"
date:   2023-07-02 16:30:00 +0630
categories: howto
---


Game ကိုကိုယ်ကပဲဆော့နေမှာလား၊ ကိုယ်တိုင်ဖန်တီးမှာလား



Ref; 
https://www.facebook.com/padc.com.mm/posts/pfbid0yzRW1ZJgFc4TMwKjC4oemu6z7W76NrC3sQR7ghSPEEKawHLPssXDMm1DXSbqy7NMl


အခုနောက်ပိုင်း Mobile Development ကို စိတ်ဝင်စားကြတဲ့ လူငယ်အများစုဟာ Flutter ဘက်ကို ပိုဦးတည်လာကြပါတယ် ။ အဓိက အကြောင်းရင်းကတော့ Android Development နဲ့ iOS Development ကို သီးသန့်စီ ခွဲပြီး လေ့လာမဲ့ အစား Flutter Framework ကို အသုံးပြုပြီး codebase တစ်ခုတည်းနဲ့  Android App ရော iOS App ရော တည်ဆောက်နိုင်မယ် ဆိုတဲ့ အချက်ကို စိတ်ဝင်စားကြလို့ပါ ။ 
ဒါ့အပြင် Flutter Framework ကလဲ လွန်ခဲ့တဲ့ တစ်နှစ်ကျော်လောက်ကထက် အများကြီးပို Robust ဖြစ်လာတာ ၊ Production Ready ဖြစ်တဲ့ အစိတ်အပိုင်းတွေ များလာတာ တွေ့ရတဲ့ အတွက် ဒီအချိန်မှာ Mobile App Development အတွက် Flutter ကို ရွေးချယ်တာဟာ Mobile App Type အများစုအတွက် တော်တော်လေးကို သင့်တော်နေပါပြီ ။
ဒါပေမဲ့ Flutter Framework ကို လေ့လာကြသူ အများစုက Dart Programming Language နဲ့ ပတ်သတ်တဲ့အပိုင်းတွေ ၊ Flutter Framework ရဲ့ အနှစ်သာရဖြစ်တဲ့ Widget Composition အပိုင်းတွေကို အခြေခံကျကျ မလေ့လာမိကြပဲ “A အခြေအနေမှာ X ကို လုပ်” ဆိုတဲ့ ပုံစံအသေတွေကို အလွတ်နီးပါးမှတ်ပြီး အဲဒီလို လုပ်ရတာကိုပဲ Flutter Development လို့ နားလည်နေကြဟန်တူပါတယ် ။ 
Android Development အပိုင်းမှာ Language ကို Java ကနေ Kotlin ကို ပြောင်းလဲ သုံးစွဲတဲ့ နေရာမှာတောင်မှ Functional Programming ရဲ့ အားသာချက်တွေကို အပြည့်အဝ အသုံးပြုနိုင်ဖို့ စဉ်းစားပုံ စဉ်းစားနည်း ပြောင်းလဲ ပြုလုပ်ရတဲ့ အပိုင်းတွေ ရှိနေပါတယ် ။ 
(Functional Programming ရဲ့ အားသာချက်တွေ ၊ Kotlin မှာ ပါဝင်လာတဲ့ Language Level အားသာချက်တွေကို အသုံးမပြုနိုင်ဘဲ Java Syntax နေရာမှာ Kotlin Syntax ကို အစားထိုး အသုံးပြုရုံလောက်နဲ့လဲ Android App Development မှာ Kotlin ကို အသုံးပြုနိုင် / အသုံးပြုနေကြပါတယ် ၊ ဒါပေမဲ့ အဲဒီအသုံးပြုရုံလောက်ပဲ ဆိုရင်တော့လည်း Kotlin ကို မပြောင်းဘဲ Java ပဲ ဆက်သုံးနေတာနဲ့ သိပ်အများကြိး ကွာတော့မှာ မဟုတ်ပါဘူး ။) 
Dart + Flutter က Java က နေ Kotlin ကို ပြောင်းလဲ အသုံးပြုတာထက် အများကြီးပို စဉ်းစားပုံ စဉ်းစားနည်းကို ပြောင်းလဲ ရပါတယ် (ပြောင်းလဲ နိုင်ဖို့ ကြိုးစားရပါတယ်) ။
ဒါကြောင့် အခု Article မှာ Flutter Framework ရဲ့ အခြေခံကျတဲ့ အစိတ်အပိုင်းလေးတွေကို အကြမ်းဖျဉ်းပြောသွားပါမယ် ။ ဒါဟာ Flutter ကို သေချာ မသိသေးသူတွေ High-Level Overview နားလည်နိုင်ဖို့ရော ၊ Flutter ကို လေ့လာ လက်စ ရှိထားပြိးသား သူတွေ အတွက် Basic-Level က Component တွေမှာ ကိုယ် သေချာ မသိသေးတာပါလာရင် Flutter.dev ကိုပြန်သွားပြိး လေ့လာနိုင်ဖို့ အတွက်ကိုရော ရည်ရွယ်တာ ဖြစ်ပါတယ် ။
(Flutter.dev ဆိုတာ Flutter Development နဲ့ ပတ်သတ်ပြီး အသေးစိတ်လေ့လာနိုင်ဖို့ Flutter Team က စီစဉ်ပေးထားတဲ့ Website ဖြစ်ပါတယ်) 
#1
အများစု သိထားပြီးသား ဖြစ်ကြတဲ့အတိုင်း Widget တွေဟာ Flutter Development အတါက် အခြေခံ Building Block တွေ ဖြစ်ပါတယ် ။
Building Block ဆိုတာ ကိုယ်လိုချင်တဲ့ ပုံစံတစ်ခု (Screen တစ်ခု ၊ Screen အစိတ်အပိုင်း တစ်ခု) ရလာဖို့ အသုံးပြုရတဲ့ အရာကို ဆိုလိုတာ ဖြစ်ပါတယ် ။ 
Android Development မှာ ကိုယ်လိုချင်တဲ့ Screen တစ်ခု ၊ Screen အစိတ်အပိုင်းတစ်ခု ရလာဖို့ Activity တွေ Fragment တွေ View တွေ ViewGroups စတဲ့ Type မတူတဲ့ Building Block တွေကို အသုံးပြုရပေမဲ့ Flutter Development မှာတော့ Widget Type တစ်ခုတည်းကိုပဲ အသုံးပြုပါတယ် ။
ဒါဟာ အစပိုင်းမှာ နည်းနည်းလေးတော့ မျက်စေ့လည်စေပါတယ် ။ Swift UI အပိုင်း သိပ်မကျွမ်းကျင်တဲ့ iOS Developer တွေ Flutter လေ့လာမယ်ဆိုရင်တော့ ဒီ concept ကို နည်းနည်းပို အချိန်ပေး Digest ဖြစ်ဖို့ လိုပါလိမ့်မယ် ။
High-Level Widget Type အနေနဲ့ Data ပြပေးတဲ့ Text တို့ Image တို့လို Widget တွေ ရှိသလို ၊ Child Widget တွေကို Layout ချပေးတဲ့ Column လို Row လို Stack လို Widget တွေလဲ ရှိပါတယ် ။ ဒါ့အပြင် အသေးစိတ် Position သတ်မှတ်တဲ့ Padding လို အစိတ်အပိုင်းကိုလည်း Widget အနေနဲ့ပဲ Setup ပြုလုပ်ထားပါတယ် ။
အဲဒီလို Different Purpose နဲ့ Widget တွေကို တွဲစပ်ပြီး Compose ပြုလုပ်တဲ့ပုံစံနဲ့ ကိုယ်လိုချင်တဲ့  Screen / အစိတ်အပိုင်း ရလာဖို့ တည်ဆောက်ရတာ ဖြစ်ပါတယ် ။ 
(ဒီနေရာမှာ Design Pattern တွေထဲက တစ်ခုဖြစ်တဲ့ Composite Pattern ကို လေ့လာထားပြီးသား ဆိုရင် ဒီသဘောတရားကို နည်းနည်းပို မြင်သာ ပါလိမ့်မယ်) 
#2 Stateless & Stateful Widgets
အပေါ်မှာ ပါတဲ့ Widget တွေက Flutter Framework ထဲမှာ ရှိထားပြီးသား (တန်း အသုံးပြုလို့ ရတဲ့) Widget တွေ ဖြစ်ပါတယ် ။
Developer က အဲဒီ Widget တွေကို Compose ပြုလုပ်ပြီး ကိုယ်ပိုင် Widget တွေ တည်ဆောက်နိုင်ပါတယ် ။ အဲဒီ ကိုယ်ပိုင် တည်ဆောက်တဲ့ Widget တစ်ခုဟာ App မှာ Screen တစ်ခု (ဒါမှမဟုတ် Screen အစိတ်အပိုင်း တစ်ခု) ဖြစ်လာတာ ဖြစ်ပါတယ် ။
ဒီလို ကိုယ့်ဘာသာ တည်ဆောက်တဲ့ Widget တွေမှာ ပါဝင်တဲ့ Data အပြောင်းအလဲ ဖြစ်မဖြစ် အပေါ်မူတည်ပြီး Stateless နဲ့ Stateful ဆိုပြီး ၂ မျိုး ထပ်ခွဲနိုင်ပါတယ် ။  
Stateless Widget ဆိုတာ Widget တည်ဆောက်စဉ်မှာ Constructor ကနေ Pass လုပ်ပေးလိုက်တဲ့ Data ကို အခြေခံပြီး UI မှာ မြင်ရမဲ့ Component တစ်ခု တည်ဆောက်ဖို့အတွက် အသုံးပြုတဲ့ Widget အမျိုးအစား ဖြစ်ပါတယ် ။
(Data Pass လုပ်ပေးစရာ မလိုဘဲ UI Component တည်ဆောက်တဲ့ Widget ဆိုရင်လည်း Stateless Widget အနေနဲ့ တည်ဆောက်ပါတယ်)
Stateful Widget ဆိုတာကတော့ ဒီ Widget ထဲမှာ ပါဝင်မဲ့ Data က အပြောင်းအလဲ ဖြစ်မယ် ဆိုတာရယ် ၊ အဲဒီ Data အပြောင်းအလဲ အပေါ်မူတည်ပြီး UI မှာ ပြတဲ့ ပုံစံကို အပြောင်းအလဲ လုပ်ရမယ် ဆိုတဲ့ သဘောလို့ အကြမ်းဖျဉ်းနားလည်နိုင်ပါတယ် ။
Flutter နဲ့ App တစ်ခု တည်ဆောက်တဲ့ အခါမှာ ကိုယ်တည်ဆောက်တဲ့ Widget အများစုဟာ Stateless Widget တွေ ဖြစ်ကြပါတယ် ။
အများစုရင်းနှီးကြတဲ့ Application Architecture အရ Data အများစုဟာ ViewModel ဒါမှမဟုတ် Presenter နဲ့ ချိတ်ထားတဲ့ Model မှာ တည်ရှိကြတာ ဖြစ်ပါတယ် ။ 
ဒါကြောင့် အဲဒီ Component တွေက ရလာတဲ့ Data တွေကို ပြပေးဖို့အတွက် အသုံးပြုတဲ့ Widget တွေအများစုက Stateless Widget တွေ (တစ်နည်းအားဖြင့် Widget အတွင်းမှာ Data အပြောင်းအလဲ ဖြစ်မှာ မဟုတ်တဲ့ Widget တွေ) အနေနဲ့ တည်ဆောက်နိုင်တာ ဖြစ်ပါတယ် ။
အဓိက အကြောင်းအရင်းကတော့ MVP ပဲဖြစ်ဖြစ် MVVM ပဲ ဖြစ်ဖြစ် UI Component တစ်ခုမှာ (ပြပေးတဲ့ Data ကို အပြောင်းအလဲ ဖြစ်စေမဲ့) User Interaction တစ်ခုခု ဝင်လာရင် သက်ဆိုင်ရာ Presenter / ViewModel ကို အဲဒီ Interaction ကို ပြန် Pass ပြုလုပ်ပေးကြတဲ့အတွက် လို့ အကြမ်းဖျဉ်းစဉ်းစားကြည့်နိုင်ပါတယ် ။ 
ဒီနေရာမှာတော့ Flutter Development အတွက် ပိုပြီးသင့်တော်တဲ့ / အသုံးများတဲ့ Architecture Pattern ဖြစ်တဲ့ Bloc Pattern အကြောင်းကို Article တစ်ခု သပ်သပ်ရေးဖို့ စဉ်းစားထားလို့  ထည့်မပြောတော့ပါဘူး ။ 
Stateful Widget မှာတော့ အပြောင်းအလဲ ဖြစ်မဲ့ Data ပါဝင်တဲ့ State ရယ် Widget ရယ် ၂ ပိုင်းပါဝင်တယ်လို့ အကြမ်းဖျဉ်းနားလည်နိုင်ပါတယ် ။ State Object မှာ Widget အတွက် တည်ဆောက်ပုံလည်း ပါဝင်ပါတယ် ။ 
Stateful Widget မှာ Data က အပြောင်းအလဲ ဖြစ်ခဲ့ရင် Framework က Widget ကို Next Frame မှာ ပြန်လည်တည်ဆောက်ဖို့ သတ်မှတ်လိုက်ပါတယ် ။ အဲဒါကို Mark As Dirty လို့ သုံးနှုံးပါတယ် ။ 
Mobile Device တစ်ခုဟာ Screen ပေါ်က Component တွေရဲ့ အပြောင်းအလဲတွေ ၊ Screen အပြောင်းအလဲတွေ ၊ Animation တွေကို   User ရဲ့ အမြင်မှာ ချောချောမွေ့မွေ့ ပြသပေးနိုင်ဖို့အတွက် တစ်စက္ကန့်ကို Frame 60 ကနေ 120 အတွင်း ပြန်ပြန်ပြီး ဆွဲပါတယ် ။ 
အဲဒီလို Frame ပြန်ဆွဲတဲ့အခါမှာ Widget တစ်ခုဟာ Data အပြောင်းအလဲ မဖြစ်ခဲ့ရင် လက်ရှိ ပုံစံအတိုင်း ပြပေးပြီး Data အပြောင်းအလဲ ဖြစ်ခဲ့တယ် ဆိုရင်တော့ Widget ကို Data အသစ်နဲ့ ပြန်လည် တည်ဆောက်သွားတာ ဖြစ်ပါတယ် ။ 
ဒီလို Data အပြောင်းအလဲ ဖြစ်တဲ့အခါမှာ Widget ကို အသစ်လာမဲ့ Frame ပြန်လည်တည်ဆောက်နိုင်ဖို့ အတွက် “setState” method ကိုထဲမှာ Data ကို ပြောင်းလဲ ပေးရပါတယ် ။
ဒီနေရာမှာ နောက်တစ်ခု နားလည်ထားဖို့ လိုတာက Element Tree ဖြစ်ပါတယ် ။ 
Flutter နဲ့ Screen တစ်ခု တည်ဆောက်တဲ့ အခါမှာ Widget တွေကို တစ်ခုနဲ့ တစ်ခု ဆင့်ဆင့်ပြီး Compose ပြုလုပ် တည်ဆောက်တာ ဖြစ်တဲ့အတွက် Screen တစ်ခုချင်းစီမှာ အဲဒီ Screen ကို ကိုယ်စားပြုတဲ့ Widget Tree တစ်ခု ရှိနေမယ်လို့ မျက်လုံးထဲ မြင်ကြည့်နိုင်ပါတယ် ။
အဲဒီ Widget တွေကို Screen ပေါ်မှာ တည်လိုဆောက် လိုက်တဲ့ အခါမှာ Widget တစ်ခုချင်းစီကို ကိုယ်စားပြုတဲ့ Element တွေ ထွက်လာပါတယ် ။ 
Element Tree ဆိုတာ Widget Tree ကို Framework က Screen ပေါ်မှာ ဆွဲလို့ (တစ်နည်းအားဖြင့် App ကို run လိုက်လို့) ရလာတဲ့ Element တွေရဲ့ Hierarchy Structure ဖြစ်ပါတယ် ။ 
Element တွေဟာ Widget တွေရဲ့ အကြမ်းထည် (Blueprint) တွေ ဖြစ်ပါတယ် ။ Widget တစ်ခုကို Element တစ်ခုနဲ ကိုယ်စားပြုပါတယ် ။ Widget မှာ Stateless / Stateful ရှိသလို Element မှာလည်း Stateless / Stateful ရှိပါတယ် ။ 
Stateful Widget တစ်ခုအတွက် Stateful Element တစ်ခုတည်ဆောက်တဲ့အခါမှာ လက်ရှိ ရှိနေတဲ့ Data ကို Screen ပေါ်မှာ Widget က သတ်မှတ်လိုက်တဲ့ ပုံစံအတိုင်း ပြပေးနိုင်ဖို့ Stateless Element တစ်ခုကို သက်ဆိုင်ရာ Stateful Element ရဲ့ အောက်မှာ ထပ်မံ တည်ဆောက်ရပါတယ် ။ 
အဲဒီ Stateless Element ကမှ State Object ရဲ့ build method က return ပြန်တဲ့ Widget ကို Point လုပ်ထားတာ ဖြစ်ပါတယ် ။ 
Data အပြောင်းအလဲ ဖြစ်တဲ့အခါမှာ State Object က Data အဟောင်းနဲ့ Widget ကို ဖျက်ဆီးပြီး Data အသစ်နဲ့ Widget ကို ပြန်တည်ဆောက်လိုက်ပါတယ် ။ 
Widget အဟောင်းနဲ့ Widget အသစ်ဟာ (Data ပြောင်းသွားတာက လွဲရင်) အမျိုးအစား အတူတူ ပဲ ဖြစ်တဲ့အတွက် Widget အဟောင်းကို Point လုပ်ထားတဲ့ Stateless Element ဟာ အပြောင်းအလဲ မဖြစ်ဘဲ Widget အသစ်ကို ဆက်လက် Point ပြုလုပ်ပါတယ် ။ 
ဒီနေရာမှာ သတိထားဖို့ လိုတာက Element ဟာ Blueprint ပဲ ဖြစ်တဲ့အတွက် သူ point လုပ်ထားတဲ့ Widget ကို Type ကို အခြေခံပြီးပဲသိပါတယ် ။ အထဲက Content အပြောင်းအလဲကို မသိပါဘူး ။ 
ဒါကြောင့် Same-Type Widget ၂ ခုကို Swap လုပ်တဲ့အခါမှာ Screen ပေါ်မှာ ရှိတဲ့ သက်ဆိုင်ရာ Element တွေပါ Swap လုပ်နိုင်ဖို့ Key ကို သတ်မှတ်ပေးရတာဖြစ်ပါတယ် ။
Key ဆိုတာ Widget ရဲ့ ပါဝင်တဲ့ Data အပေါ်မူတည်ပြီး Element က သိရှိနိုင်ဖို့ သတ်မှတ်ပေးတဲ့ Identifier တစ်ခု ဖြစ်ပါတယ် ။ 
Widget ပါဝင်တဲ့ Data အမျိုးအစားအပေါ် မူတည်ပြီး သင့်တော်တဲ့ Key အမျိုးအစားတွေကို အသုံးပြုနိုင်ပါတယ် ။ 
Widget မှာ ဝင်တဲ့ Data က Primitive Data တစ်မျိုးပဲ ဆိုရင် ValueKey ကို အသုံးပြုနိုင်ပြီး Data က Attribute ၃ ၄ ခုနဲ့ ဖွဲ့စည်းထားတဲ့ Object Format နဲ့ ဆိုရင်တော့ ObjectKey ကို အသုံးပြုနိုင်ပါတယ် ။ 
Random Number တစ်ခုခုနဲ့ Widget ကို တွဲရုံပဲ ဆိုရင်တော့ UniqueKey ကို အသုံးပြုနိုင်ပါတယ် ။
ဒါဟာ Stateful Widget နဲ့ Stateless Widget တွေရဲ့ အခြေခံ အလုပ်လုပ်ပုံတွေ ဖြစ်ပါတယ် ။ 
ဒါ့အပြင် InheritedWidget ဆိုတာ ရှိပါသေးတယ် ။ Widget Hierarchy မှာ အပေါ်ဆုံးက Widget ကနေ အောက်ဆုံးက Widget ကို Data ပို့ချင်တယ် ဆိုရင် ပုံမှန်အရ တဆင့်ချင်းစီက Widget တွေရဲ့ Constructor ကနေတဆင့် Pass လုပ်ပေးရပါတယ် ။ 
ဒီလိုပုံစံက Hierarchy က တော်တော်လေး ရှုပ်ထွေးပြီး ရှည်လျားတယ်ဆိုရင် tedious နိုင်တဲ့ ပုံစံ ဖြစ်ပါတယ် ။ အဲဒီလို ပုံစံကို ရှောင်နိုင်ဖို့ InheritedWidget ကို အသုံးပြုနိုင်ပါတယ် ။ 
Access လုပ်ချင်တဲ့ Data ကို InheritedWidget ထဲမှာ ထည့်ပြီး အဲဒီ InheritedWidget ကို Access လုပ်ချင်တဲ့ Widget ရဲ့ အပေါ်မှာ ထားလိုက်မယ်ဆိုရင် Access လုပ်ချင်တဲ့ Widget က Data ကို “InheritedWidget_Name.of” ဆိုတဲ့ ပုံစံနဲ့ အလွယ်တကူ Access ပြုလုပ်နိုင်ပါလိမ့်မယ် ။ 
App တစ်ခုလုံးနဲ့ ဆိုင်တဲ့ Theme တွေ ဘာတွေကို ကြိုက်တဲ့ Widget ကနေ အလွယ်တကူ Access ပြုလုပ်နိုင်ဖို့ အဲဒီ ပုံစံကို သုံးထားတာ ဖြစ်ပါတယ် ။ 
Part-2 မှာတော့ Flutter မှာ သုံးနိုင်မဲ့ Material Package နဲ့  Cupertino Package တွေ အပိုင်း ၊ Isolate နဲ့ EventLoop တွေနဲ့ ပတ်သတ်တဲ့အပိုင်း လေးတွေ ထပ်ရေးပါဦးမယ် ။
