---
layout: post
title: How to upload Wordpress Site
---
local မှာ စိတ်တိုင်းကျပြီဆိုရင် github မှာ တင်။
server ကနေ github repo ကို ပြန် pull။
ပြောင်းဖို့လိုတာက
- database backup လုပ်ပြီး server မှာ ပြန် import လုပ်ရမယ်
- wp-config.php မှာ server က database credential ပြောင်းရမယ်
- server database ထဲက wp-options table ထဲမှာ site ရဲ့ base url ကို ပြောင်းရမယ်

ဒီသုံးခု လုပ်ပြီးတာနဲ့ local မှာ အတိုင်း up and running တက်လာပြီ။

ကျွန်တော်တို့ ဆာဗာမှာ တိုင်ပတ်နေတာကတော့
- URL Rewrite မရတာနဲ့
- Write Permission မရတာ
ဒီနှစ်ခုတော့ အသေအချာ ပြန်ရှင်းမှ ရမယ်။ host တွေ add တဲ့အချိန်မှာပဲ လိုသလား မသိ။ URL Rewrite Module က ဖွင့်ထားပြီးသားလို့ Apache က ပြနေတယ်။

နောက် Write Permission လည်း လိုတယ်။ 