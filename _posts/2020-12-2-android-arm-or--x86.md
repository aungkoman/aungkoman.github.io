---
layout: post
title: android-arm or x86
---
အခါခါဖတ်ပြီး အခါခါမေ့သော ကျွန်တော့အတွက် 
 
Mi Pad 2 တုန်းက တစ်ခါ တိုင်ပတ်ပြီးပြီ။ ဒီကောင်က intel processor နဲ့လာတော့ တော်ရုံ app တွေ သုံးမရ။ ဘယ်ရမလဲ 
ဒီနှစ်ခုက corss compatible မဖြစ်တော့ mobile app release လုပ်တဲ့အခါ သူ့သက်ဆိုင်ရာ processor architecture အရ သီးခြား app တွေအနေနဲ့ ထုတ်ပေးကြတာကိုး။

တစ်ခုပဲ အသေမှတ်ထားဆိုရင် ARM 64 သာ မှတ်ထားလိုက်တော့ :D

ARM vs. x86

While Android version and DPI are pretty straightforward, processor architecture is another story altogether. I’ll do my best to break it down as simply as possible here.

ARM: This is a mobile processor architecture first and foremost, and what the majority of phones run now. Qualcomm’s Snapdragon, Samsung’s Exynos, and MediaTek’s mobile chips are all examples of ARM processors. Most modern chips are 64-bit, or ARM64.
x86: This is the architecture specification for Intel chips. As dominant as Intel is in the computer market, these chips are far less common in Android handsets. x86_64 refers to 64-bit Intel chips.
This information is especially important because x86 and ARM files are not cross compatible—you must use the version designed for your phone’s specific architecture.

Similarly, if your phone is running a 32-bit processor, the 64-bit APK won’t work. 64-bit processors, however, are backwards compatible, so the 32-bit APK will work fine on a 64-bit processor.