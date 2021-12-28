---
layout: post
title: အလွယ်လိုက်ခြင်းနှင့် နောက်ဆက်တွဲများ
description: Wordpress Permission Issue 
image: ../images/fcc/kfc.jpg
---
အလွယ်လိုက်ခြင်းနှင့် နောက်ဆက်တွဲများ

Wordpress Permission Issue 

ဘယ်တော့မှ ဆာဗာမှာ Permission 777 မပေးသင့်ဘူးဆိုတာကို အချိန်တစ်ပတ်လောက် ရင်းပြီးမှ သင်ခန်းစာရလိုက်တယ်။
Wordpress Site တစ်ခုတင်ထားတာ။ အစပိုင်းက အားလုံးအဆင်ပြေတယ်။ သိတဲ့အတိုင်း Wordpress မှာက ဖရီး ရတဲ့ plugin လေးတွေကလည်း ဖောချင်းသောချင်းဆိုတော့ ကုန်းဆင်းရင်း ဘယ်တစ်ခုက Spam လည်း မသိ။ ချက်ခြင်း file permission တွေ ပိတ်ကုန်တယ်။ 

Site ကလည်း Production မှာ run နေတာဆိုတော့ bug ကို ရှာမရခင် post တွေဘာတွေ တင်လို့ရအောင် permission ကို 777 ကောက်ပေးထားလိုက်တယ်။
အဆင်ပြေသွားရော။ Site ကလည်း ပုံမှန်အတိုင်းပဲ run နေတယ်။

တစ်ပတ်လောက် ကြာမှ ပြန်သွားကြည့်မိတော့ ကိုယ်မသိတဲ့ Post တစ်ထောင်လောက် site ပေါ် ရောက်နေပြီ။
ဘာတွေဖြစ်ကုန်တာလဲဟ 
မျက်ကလဲ ဆန်ပြာ နဲ့ site ကို ခန ပိတ်ချလိုက်ပြီး အကုန်ပြန်စစ်၊ ပြန်စစ်လည်း နားမလည်ပါဘူး။ ကိုယ်လုပ်တက်တာက restart နဲ့ reset လောက်ပဲဆိုတော့။
reset ချပြီး တစ်ခုချင်းစီ ပြန်တင်ကြည့်တယ်။

ဒီမှာ ဘာသွားတွေ့လဲဆိုရင် သုံးထားတာက AWS Lightsail မှာ LAMP Stack တင်ပြီး သုံးထားတာ။ အဲ့မှာ bitnami က အကုန်လုပ်ပေးပြီးသား။ ပြဿနာက bitnami ဆိုတဲ့ သကောင့်သားက linux တို့ရဲ့ ထုံးစံအတိုင်း bitnami:bitnami ဆိုပြီး bitnami group ထဲမှာ ရှိတယ်။ apache က daemon နာမည်နဲ့ daemon:daemon ဆိုပြီး daemon group ထဲမှာ ရှိတယ်။ permission တေွ ဘယ်လို conflict ဖြစ်ကုန်လည်းတော့မသိ။ Bitnami က official ရှင်းပြတဲ့အထဲမှာတော့ bitnami user account ကို daemon user group ထဲ ထည့်ပါလို့ ပြောတာနဲ့ အောက်က command တွေ ကော်ပီပေ့ လိုက်တာ အဆင်ပြေသွားရော။


ကျွန်တော်တို့ရဲ့ wordpress ကို /home/bitnami/htdocs/imirror-backend-api ဒီမှာ run ထားတာပါ။





# add bitnami user to daemon group
sudo chown -R bitnami:daemon /home/bitnami/htdocs/imirror-backend-api
# change all directory permission
sudo find /home/bitnami/htdocs/imirror-backend-api -type d -exec chmod 775 {} \;
# change all file permission
sudo find /home/bitnami/htdocs/imirror-backend-api -type f -exec chmod 664 {} \;
# change wp-config permission
sudo chmod 640 /home/bitnami/htdocs/imirror-backend-api/wp-config.php