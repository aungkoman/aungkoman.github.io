---
layout: post
title: Shortest Path
---

ဆရာ အိမောင်ရဲ့ Rock Star Developer ဖတ်ရင်းနဲ့ အဲ့မှာ The Joel Test ဆိုတာကို သွားတွေ့တယ်။ ဒီမှာ ရှာဖွေဖတ်ကြည့်ရင်းနဲ့ နားလည်သလောက် ပြန်လည်မျှဝေခြင်း ဖြစ်ပါတယ်။

Software Team တစ်ခုကို ဒီ မေးခွန်း(၁၂)ခု မေးလို့ (၁၂) ခုလုံး Yes လို့ ဖြေနိုင်ရင် အဲ့ Team က အခြေအနေ တော်တော် ကောင်းနေပြီ၊ Microsoft တို့ Google တို့လို့ ကုမ္မဏီကြီးတွေဟာလည်း အမှတ်ပြည့် (၁၂) မှတ်နဲ့ အချိန်ပြည့် run နေကြလို့ ဖြစ်ပါတယ်။

အဲ (၁၀) မှတ်အောက်ကို ကျနေပြီ ဆိုရင်တော့ စပြီး ပြဿနာရှိပြီလို့ ဆိုပါတယ်။ (၂) မှတ် (၃) မှတ်ပဲ ရတယ်ဆိုရင်တော့ ချက်ခြင်းသာ ပြင်ပေတော့တဲ့။ ကျွန်တော် တို့ Team ကို စစ်ကြည့်တာ လေးငါးမှတ်နဲ့ စိုးရိမ်ရေမှတ်ရောက်နေလို့ Team တစ်ခုလုံးကို ပြန် push နေရတယ်။

မေးခွန်း (၁) ။ Do you use source control?
ကိုယ့် project source code တွေကို Git, Github , Bitbucket လိုမျိုး version control စနစ်တစ်ခုခု သုံးပြီး manage မလုပ်ရင် ပြဿနာ ဟာ လက်တစ်ကမ်းအလို ရောက်နေပြီ ဆိုရမှာပေါ့။ ကျွန်တော် တို့ git မသုံးခင်က project source code တွေကို  zip ချူပ်ပြီး သိမ်းသိမ်း ထားရတယ်။ git စသုံးတော့ ဒီ ဒုက္ခတွေ တော်တော် နည်းသွားတယ်။ ထားပါ git တရားဟောသလို ဖြစ်နေဉီးမယ်၊ အရေးကြီးတဲ့ တစ်ချက်ကတော့ source control စနစ် တစ်ခုခု သုံးဖို့ပဲ။

မေးခွန်း (၂) ။ Can you make a build in one step?
ကျွန်တော် တို့က web နဲ့ mobile app ဆိုတော့ build လုပ်ရတာတော့ command line မှာ npm build / flutter build apk လောက်နဲ့ project တစ်ခုလုံးက source code တွေကို build လုပ်နိုင်တော့ တော်သေးတယ် ပြောရမှာပေါ့။ အရင်ကလို exe တစ်ဖိုင်ထွက်ဖို့ step တွေ အများကြီး လုပ်ရရင် အမှားပိုများလာနိုင်တော့ script တစ်ခု ရေးထားရတာမျိုး။ အခုနောက်ပိုင်း CI/CD Tools တွေက ပိုကောင်းလာတော့ ဒီ မေးခွန်းကို yes လို့ ဖြေရမယ်။

မေးခွန်း (၃) ။ 3. Do you make daily builds?
ဒါလည်း CI/CD တွေရဲ့ ကျေးဇူးနဲ့ Team ထဲက developer တစ်ယောက် ပေါက်ကရ လုပ်လို့ build fail ဖြစ်သွားရင် ချက်ခြင်းသိတော့ အဆင်ပြေပါရဲ့။

မေးခွန်း (၄) ။ Do you have a bug database?
ဒါကတော့ ကျွန်တော် တို့မှာ မရှိဘူး ပြောရမယ်။ bug တစ်ခု client က လာပြောရင် သြ ဟုတ်ဟုတ် ပြင်လိုက်မယ် ဆိုပြီး ဒီအတိုင်း ပြင်ပေးလိုက်တာ များတယ်။ bug က နှစ်ခု သုံးခုဆို ခေါင်းက ဟုမ်လာပြီ၊ ဘယ်သူ့ကို သွားရှင်းခိုင်းလို့ ရှင်းခိုင်းရမှန်း မသိတော့ဘူး။ ကြာတော့ ရှင်းဖြစ်တဲ့ bug က ရှင်းဖြစ်တယ်၊ ကျန်ခဲ့တဲ့ bug က မေ့ပြီး ကျန်ခဲ့ရော၊ နောင်တစ်ချိန်ကြ ပြန်ပြီး ပြဿနာ အကြီးကြီး တက်နဲ့ တော်တော်ကို ကသောင်း ကနင်းနိုင်တယ်။ bug database ဆိုလို့ အကြီးကြီးလည်း တွေးမနေနဲ့ bug tracking / issue tracking စနစ်တွေက ရှုပ်ထွေးလွန်းလို့ မသုံးချင်ဘူးဆိုရင် ကိုယ့်ဘာသာကိုယ် ကော်လံ (၅) ခု ပါတဲ့ ဇယားတစ်ခု ဆောက်ပြီး မှတ်ထားလို့ရတယ်။ ပါရမယ့် column တွေက
complete steps to reproduce the bug
expected behavior
observed (buggy) behavior
who it’s assigned to
whether it has been fixed or not

မေးခွန်း (၅) ။ Do you fix bugs before writing new code?
ဒါကလည်း ကျွန်တော် တို့ အဖွဲ့မှာ ဖြစ်တဲ့ ပြဿနာ တစ်ခုပါပဲ။ project launch လုပ်ဖို့ပဲ စိတ်စောနေပြီး bug သေးသေးလေးတွေ ဆိုရင် ဒီအတိုင်း ကျော်ခဲ့လိုက်တာ များတယ်။ ဒီတော့ low quality code နဲ့ buggy ဖြစ်တဲ့ project စုတ်စုတ်ပြတ်ပြတ်တွေပဲ ထွက်လာတာ များတယ်။ အခု စည်းမျဉ်း အသစ်ကတော့ bug တစ်ခုတွေ့ရင် ပြီးအောင် ရှင်း၊ ပြီးမှ feature အသစ် / code အသစ် ဆက်ရေး။

မေးခွန်း (၆) ။ Do you have an up-to-date schedule?
ကျွန်တော် တို့မှာ ပြတိုက်ကို ပို့လို့ ရတဲ့ work schedule တစ်ခုရှိပါတယ်။ တကယ်ပါ၊ project မစခင်ကတော့ schedule အမှန်အကန် စွဲလိုက်တယ်၊ အဲ စလည်း ကုတ်ပြီလည်း ဆိုရော ရေးထားတဲ့ schedule လှည့်မကြည့်တော့ဘူး။ ဒီတော့ ကြားထဲမှာ ပြဿနာပေါင်း သောင်းခြောက်ထောင်၊ client က တစ်မျိုး၊ management အပိုင်းက လူကြီးတွေက တစ်ဖုံ၊ ဒီကြားထဲ ကိုယ်မသိတဲ့ domain က အလုပ်တွေဆိုရင် ပိုဆိုး (ဉပမာ ငွေစာရင်းတို့၊ ဘဏ်တို့ )။ အရေးကြီးတာက schedule ကို up to date ဖြစ်အောင် တောက်လျှောက် ပြန်ပြင်ရေးထားမှ အဆင်ပြေမှာ။ မဟုတ်ရင် ဘယ်တော့ပြီးမှာလဲ ဆိုတဲ့ မေးခွန်းက ကိုယ့်အဖွဲ့ကို နေ့တိုင်း သတ်နေလိမ့်မယ်။

မေးခွန်း (၇) ။ Do you have a spec?
ပြောရရင် ဒီစာဖတ်မှ specification ဆိုတာ ရေးရကောင်းမှန်းသိတာ။ မသိဘူး work flow diagram တို့ ဘာတို့တောင် စိတ်ပါမှ ထဆွဲထာမျိုးဆိုတော့ functional specification ရော၊ technical solution ရော ဘာမှ မရေးဘူး။ ဒီ Joel Test ဖတ်ပြီး နောက် သုံးလေးရက်လောက် code မရေးပဲ လက်ရှိ လုပ်နေတဲ့ project တွေရဲ့ specification တွေ ထရေးရတယ်။ Specification ဆိုတာကဗျာ code မရေးခင်မှာ ဒီ code ဟာ ဘယ်လို အလုပ်လုပ်ပါမယ်ဆိုတာကို သာမန်လူ နားလည်မယ့် စကားပြေမျိုးနဲ့ ရေးထားတာမျိုးကို ပြောတာ။ ဉပမာ login စနစ် တစ်ခုအတွက် coding စမရေးခင်မှာ အခုလို functional specification အရင်ရေးကြမယ်၊
    ၁။ user က app ကို ဖွင့်မယ်။
    ၂။ username နဲ့ password တောင်းမယ်။
    ၃။ sign in ခလုပ်ကို နှိပ်မယ်။
    ၄။ မှန်ရင် main screen ပြမယ်။ မှားရင် error message ပြမယ်။
    ဒီလို ရေးပြီးရင် တာဝန်ရှိတဲ့ project leader , management အပိုင်းက ဆရာသမားတွေကို ပြမယ်၊ ဒီမှာ သူတို့က username နဲ့ မဟုတ်ပဲ email နဲ့ ဝင်စေချင်တယ်။ နောက် email verification စနစ်ကိုလည်း ကြားထဲမှာ ထည့်ချင်တယ်။ စသည်ဖြင့်ပေါ့ ပြင်ချင်သမျှတွေ ပြောတဲ့အခါ specification ကို ပြင်ပြီး ရေးပေးရုံပဲ၊ ပရိုဂရမ်မာအနေနဲ့ သိပ် မထိခိုက်သေးဘူးပေါ့။ အဲ့ specification မရေးပဲ coding တန်းရေးပြီး result ထွက်လာမှ သွားပြတဲ့အခါ ပြင်လို့ ပြောရင် နာကျင်ရပြီ 😁 ။ ဘယ်လောက်ပဲ မှားတဲ့ code ပဲ ဖြစ်ဖြစ် ကိုယ့်လက်နဲ့ ကိုယ်တိုင်‌ရေးခဲ့ရတော့ code တွေကို ဖျက်ရတာ အသည်းနာလှသဗျ၊ ဒီတော့ code ဖျတ်မယ့်အစား specification ရေးထားတာလေး ဖျတ်ပြီး ပြင်ပေးတာက နှစ်ဉီးနှစ်ဘက် ပိုသက်သာတာပေါ့။

မေးခွန်း (၈) ။ Do programmers have quiet working conditions?
ပရိုဂရမ်မာတွေက အလုပ်လုပ်နေတဲ့အချိန်မှာ ဖိုင်သုံးလေးခုကို ခေါင်းထဲမှာ ထည့်ထားပြီး variable name တွေ၊ class name တွေနဲ့ ရှားလော့ဟုမ်းလိုမျိုး memory palace တည်ဆောက်ပြီး ချိတ်ဆက်ထားရတာ။ ဒီလိုအာရုံစိုက်ပြီး ဆိတ်ငြိမ်တဲ့ zone ကိုရောက်ဖို့ (၁၅) မိနစ်လောက် အနည်းဆုံး အချိန်ယူရတယ်၊  ဒီမှာ အာရုံစိုက်ထားဖို့ အရေးကြီးတယ်၊ ဒီလို အာရုံစိုက်ပြီး အလုပ်လုပ်နေတဲ့အချိန်မှာ ဘေးက တစ်ခြားပရိုဂရမ်မာ နဲ့ client က အော်ကြီး ဟစ်ကျယ် ငြင်းခုန် ရန်ဖြစ်နေကြရင် ဘယ်အဆင်ပြေမလဲ။ အဲ့မှာ ဘေးက နှောက်ယှက်သံကြောင့် အာရုံပျက်သွားပြီဆိုရင် အစကနေ နောက်ထပ် ဆယ်ငါးမိနစ်လောက် သုံးပြီး ပြန်မှတ်ရတယ်။ အဆင်မပြေဘူး။ ဆိုတော့ကာ တစ်ယောက်ချင်းစီကို ဆိတ်ငြိမ်တဲ့ ပတ်ဝန်းကျင် စီမံပေးထားဖို့ လိုတယ်။

မေးခွန်း (၉) ။ Do you use the best tools money can buy?
အခြေခံ က စပြောရင် development machine က တော့ processing power ကောင်းကောင်းရှိသင့်တာပေါ့။ Android Studio လို resource intensive ဖြစ်တဲ့ IDE နဲ့ အလုပ်လုပ်ရတဲ့ ပရိုဂရမ်မာကို Ram 4 GB နဲ့ Intel Core i3 လောက် ပေးထားတာမျိုးကတော့ ဘယ်လိုမှ အဆင်မပြေ၊ နောက် သုံးတဲ့ keyboard , mouse , monitor ဒါတွေကအစ သင့်တင့်တဲ့ အနေအထားရှိသင့်တယ်။ အထူးသဖြင့် debugging လုပ်ရတဲ့အချိန်မှာ Secondary Monitor ရှိခြင်း မရှိခြင်းက အချိန်ကုန်တာကို နှစ်ဆ သုံးဆ သက်သာစေမှာပါ။ ဒီတော့ productivity ကို ထောက်ပံ့မယ့် tools တွေမှာ ရင်းနှိးမြှပ်နှံဖို့လည်း လိုပါရဲ့။

မေးခွန်း (၁၀) ။ Do you have testers?
Client is tester. ဒါက ကိုယ့်အဖွဲ့ ဖြစ်သလိုကျင့်သုံးနေတဲ့ မကောင်းတဲ့ အကျင့်။ tester လည်း သီးသန့်မရှိလေတော့ client ကို project အပ်ပြီဆိုမှ bug ပေါင်း သောင်းခြောက်ထောင်နဲ့ အစကပြန်လိုက်ပြင်ပေတော့ပဲ။ ဒီတော့ ပရိုဂရမ်မာ နှစ်ယောက် သုံးယောက်မှာ tester တစ်ယောက်လောက်တော့ ထားမှသာ buggy project တွေ အပ်ပြီး အချိန်တွေကုန်အောင် လိုက်ပြင်ရခြင်းမှ ကင်းဝေစေပါလိမ့်မယ်ဗျား။

မေးခွန်း (၁၁) ။ Do new candidates write code during their interview?
ကျွန်တော် တို့လို လူမျိုးတွေပေါ့၊ စာတွေ ဖတ်တယ်၊ ကြီးကြီးကျယ်ကျယ်တွေ လျှောက်ပြောတယ်။ အလုပ် အင်တာဗျူးတွေမှာလည်း မေးတဲ့ မေးခွန်းတွေကို ကောင်းကောင်းကြွယ်ပြီး ဖြေနိုင်တယ်။ theory တွေ၊ best practice တွေ၊ programming good / bad pattern စတာတွေကို အာဂုဏ်ဆောင်ထားတော ့အဆင်ပြေတာပေါ့။ အဲ့ ကုတ် ချရေးဆိုရင် ဘယ်ဟာမှ hello world ကို ဖြောင့်အောင် မရေးနိုင်ဘူး။ google ဒါမှမဟုတ် IDE ကောင်းကောင်း ရှိပါမှပဲ ရေးတက်တယ် :D , ဆရာ Joel ရဲ့ အလိုအရဆိုရင်တော့ ကိုယ့် team ကို လူခေါ် တော့မယ်ဆိုရင် code ချရေးခိုင်းကြည့်ပါတဲ့။

မေးခွန်း (၁၂) ။ Do you do hallway usability testing?
Testing ပုံစံ မျိုးစုံတွေထဲမှာ Hallway Usability Testing ဆိုတာ ရှိတယ်။ သူက ကိုယ့် product ကို ဟောခန်းထဲ (ထမင်းစားခန်း / နားနေခန်း ) ယူသွားပြီး ကြုံတဲ့ တစ်ယောက်ကို စမ်းသုံးခိုင်းကြည့် ကိုယ်က ဘာမှ ဝင်မပြောပဲ ဘေးက ရပ်ကြည့်နေ၊ ဒီမှာ user အနေနဲ့ ဘယ်လောက် အဆင်ပြေပြေ သုံးနိုင်လဲ ဆိုတာ ထွက်လာမယ်။ ဒီမှာ UI / UX ကလည်း စကားစပြောလာတယ်။ ကျွန်တော်တို့ product တွေတော့ စမ်းသုံးကြည့်ခိုင်းလိုက်တိုင်း home screen မှာပဲ မလုပ်တက် မကိုင်တက် နဲ့ ရပ်ရပ်နေကြလို့ အခုတော့ Team မှာ UI/UX Designers တစ်ယောက် သပ်သပ် ထားဖို့ ကြံနေရတယ်။

ဒါကတော့ The Joel Test ကို ဖတ်ပြီးသကာလ ကိုယ့် team နဲ့ ယှဉ်ကြည့်ပြီး နားလည်သလို ပြန်လည် မျှဝေခြင်း ဖြစ်ပါတယ်။ မူရင်း article ကို အောက်က link မှာ ဖတ်နိုင်ပါတယ်။
https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/

အခုလုပ်နေတဲ့ အလုပ် / team မှာရော ဘယ်နှစ်မှတ်လောက် ရကြလဲဗျ။




