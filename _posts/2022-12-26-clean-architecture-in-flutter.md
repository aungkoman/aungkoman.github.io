---
layout: post
title: ကိုယ်ရှာတာ ကိုယ်တွေ့
---
### မတူတဲ့ Model လေးခုကို တစ်ခုတည်းနဲ့ အဆင်ပြေမလား?


Video One,
Video Two,
Text (HTML ) and
Text (Imags) 


အစုံဆုံး Model တစ်ခု ဆောက်ထားပြီး မလိုတာတွေကို default value / ဒါမှမဟုတ် ဖြုတ်ထားခဲ့လိုက်ရင် အဆင်ပြေမယ်။

ပြဿနာက ဘယ် Endpoint ကို ခေါ်မယ်ဆိုတာကို ဘယ်မှာ ဆုံးဖြတ်ကြမလဲ?

Repository
Remote Data Source 
တစ်ခုတည်းကို သုံးပြီး contentTypeId အပေါ် မူတည်ပြီး endpoint တွေကို ပြောင်းကြမလား။

ဒါက ပိုပြီး သက်သာမယ်
Anti Pattern ဖြစ်နေသလား ပြန်စဉ်စားရမယ်။

Anti ဖြစ်တာမဖြစ်တာ အသာထား တကယ်လို့ ခွဲရေးမယ်ဆိုရင် Duplicate ကုတ်တွေက နည်းမှာ မဟုတ်ဘူး။ ဒီတော့ တစ်ခုတည်းပဲ ထားလိုက်ကြရအောင်။

ဒါဆို Remote Data Source က Method တွေမှာ Our Http Request အတွက် Endpoint ပြင်တဲ့နေရာမှာ content type id အပေါ် မူတည်ပြီး သက်ဆိုင်ရာ endpoint ကို ပြောင်းခေါ်မယ်။

listing ခေါ်တဲ့ နေရာမှာတောင် endpoint က (၄) ခု ဖြစ်သွားမယ်။

1 => Video One
2 => Video Two
3 => Text
4 => Image

Video အတွက်က 
Endpoint ဘယ်နှစ်ခု ထုတ်ရမလဲ?

getCategories
getVideoContentByCategoryId
getVideoContentByTagId
getVideoContentBySearch

getVideoContentDetail

အမှန်ကတော့ Categroy Select အတွက် တစ်ကြောင်း
Video Select အတွက် နှစ်ကြောင်းရေးရင် ရပြီ။

db လည်း download လုပ်ပြီးသားဆိုတော့ local မှာ စမ်းရေးကြည့်ရုံပဲ။

link လုပ်ရမယ့် Table ဘယ်နှစ်ခု ရှိနိုင်မလဲ?

wp_posts table ရှိမယ်။
ဒါရရင် listing အတွက် ရမလား?

filter လုပ်ရမှာ ဆိုတော့ Category table နဲ့  ချိတ်ရမယ်။ ထုံးစံအတိုင်း 

wp_posts | category | category_wp_posts ဒါမျိုး (၃) ခု ချိတ်ရမယ်။

Tag အတွက်လည်း ထိုနည်းလည်းကောင်း

Detail အတွက်ကတော့ ပိုများမယ်။

wp_posts | category | category_wp_posts | tag | tag_wp_posts | meta_data | meta_data_wp_posts ဒါမျိုး အများကြီး ချိတ်ကောင်း ချိတ်ရမယ်။

ပုံမှန်အတိုင်း Up and Running တက်လာရင် Encrypt အတွက် စဉ်းစားရမယ်။

accessToken ကိုပဲ runtime မှာ generate ထုတ်ပြီးသုံးတာ ကောင်းမယ်။

intercept လုပ်တောင် နှစ်နာရီလောက်ဆိုရင် expired လုပ်လိုက်။
ဒီတော့ user account ‌တောင်မရှိသေးတဲ့ public device က ဘာတွေ random ထုတ်မလဲ?

လက်ရှိအချိန် in milisecond 
အိုကေ ဒါကရလာပြီ
နောက်တစ်ခုက device id ကို ဘယ်လိုလုပ်မလဲ?
shared prefrence မှာဖြစ်ဖြစ်ဖြစ်။
app storage မှာဖြစ်ဖြစ် model_name နဲ့ 

device_id ကို ဘယ်လို generate လုပ်မလဲ?
ဒါက သူနောက်ပိုင်းမှာ သုံးသွားမယ့် အချက်အလက်။
uninstall မလုပ်ခင်အထိပေါ့။ 
    
username password အစား ဒီ အချက်အလက်ကို သုံးပြီး login လုပ်မယ်။

first_installed_miliseconds: ဒါက app ကို စဖွင့်ဖွင့်ခြင်း ဒီ key မရှိသေးဘူးဆိုရင် current miliseconds ကို သိမ်းထားမယ့် နေရာ။ ဒါကလည်း တူနိုင်တယ် တစ်ယောက်နဲ့ တစ်ယောက်။ ဒီတော့ နောက်တစ်ခု စဉ်းစားရမယ်။
current_time_zone: local time zone ဒါလည်း တူနိုင်သေးတယ်။
phone_model: ဒါက ရနိုင်မလားတော့ မသိဘူး။ စမ်းကြည့်ရမယ်။
os_version: အခုထိတော့ platform independent ဖြစ်နေတုန်းပဲ။
unique_id: ဒါကတော့ database ကဖြစ်ဖြစ် လှမ်းတောင်းမှပဲ အဆင်ပြေမယ်။ ဒီတော့ အပေါ်က အချက်အလက်တွေကို ပို့ပြီး db မှာ insert လုပ်။ ရလာတဲ့ inserted id ကို return ပြန်ပေး။ ဒါကို local မှာ ပြန်သိမ်း။

ဒါတွေရလာပြီး ဆိုပါတော့ ဘာလုပ်ကြမလဲ?

first_installed_miliseconds နဲ့ unique_id ကို algorith တစ်ခုနဲ့ encrypt လုပ်။
လုပ်တဲ့အချိန်မှာ အမြဲတမ်း dynamic ဖြစ်နေဖို့ လိုတယ်။ နီးစပ်ရာ နာရီနဲ့ လုပ်မလား?
ဒါဆို မဆိုးဘူး။

login call က ဒါမျိုးဖြစ်မယ်။

first_installed_miliseconds နဲ့ unique_id ကို string တစ်ခုအနေနဲ့ပေါင်း။
unique identifier + လက်ရှိနာရီ သုံးပြီး encrypt လုပ်။

ဟိုဘက်က access Token ပြန်ပေးလိမ့်မယ်။ 
firebase jwt သုံးပေါ့။ 

နောက် session တွေအကုန်လုံးကို ဒါသုံးပြီးလုပ်မယ်။

ဒီလောက်ဆို login လိုက်လုပ်လို့မရဘူးလို့ ယူဆရ။ တစ်ခုပဲ encrypt လုပ်မယ့် algorithm နဲ့ timezone difference ကို ကြည့်ရမယ်။ UTC ပြောင်းလိုက်တာက ပိုအဆင်ပြေမယ်။

နောက်တစ်ခု streaming နဲ့ download url တွေကို ဘယ်လို လုပ်မလဲ?
reverse လုပ်မလား? ရိုးလွန်းတယ်။
