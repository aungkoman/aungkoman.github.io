---
layout: post
title: "Laravel Basic - အပိုင်း (၁)"
date: 2025-05-06
categories: productivity programming
---
Hello World in Laravel

programming ေလ့လာတဲ့အခါ ပထမဆုံး ေရးတဲ့ ပရိုဂရမ် က ကွန်ပျူတာ screen မှာ "Hello World" လို့ ေပါ်ေအာင် ေရးကြတာ များတယ်။

အခု Laravel ကို စလေ့လာမယ် ညီအစ်ကို ေမာင်နှမ ေတွလည်း ကျွန်တော်နဲ့ အတူတူ Hello World ပရိုဂရမ်ကို Laravel နဲ့ စရေးကြည့်ကြရအောင်။

ပရိုဂရမ် စမရေးခင် ကိုယ့်ကွန်ပျူတာထဲမှာ ကြိုထည့်ထားရမယ့်  ဆော့ဝဲလေးေတွ အကြောင်း အရင်ပြောကြမယ်။

၁။ XAMPP , သူကတော့ PHP, Mysql စတဲ့ ေနာက်ပိုင်းမှာ ကျွန်တော်တို့ သုံးရမယ့် နည်းပညာတွေကို ကိုယ့်စက်ထဲမှာ ထည်းပေးတဲ့ ဆော့ဝဲလို့ ေပြာရမယ်။ ဉပမာ ေပြာရရင် ဗီဒီယိုဖိုင်တွေ ဖွင့်ကြည့်ဖို့ စက်ထဲမှာ VLC Player ထည့်ထားသလိုမျိုးပါပဲ၊​ PHP File တွေကို ဖွင့်ကြည့်ဖို့အတွက် XAMPP ဆိုတဲ့ ဆော့ဝဲ ထည့်ထားရတာလို့သာ မှတ်ထားနိုင်ပါတယ်။ https://www.apachefriends.org/download.html မှာ download လုပ်နိုင်ပါတယ်။ စက်ထဲမှာ install လုပ်ပြီးလို့ ဖွင့်ကြည့်ရင် Mysql , PHP , Apache စသည်ဖြင့် menu လေးတွေ မြင်ရပါလိမ့်မယ်၊ သက်ဆိုင်ရာ menu ဘေးက start ဆိုတဲ့ ခလုပ်ကလေးကို နှိပ်ပါ။ ကိုယ် install လုပ်တာ အဆင်ပြေ / မပြေ ကို Browser ( Chrome ) ကို ဖွင့်ပြီး http://localhost လို့ ရိုက်ထည့်ကြည့်ပြီး စစ်လို့ရပါတယ်။ Welcome from XAMPP စသည်ဖြင့် web page တစ်ခု တက်လာရင် XAMPP တင်တာ ေအာင်မြင်ပါပြီ။ 

၂။ Composer , သူကတော့ command line tool အနေနဲ့ စက်ထဲမှာ ထည့်ထားရမယ့် software တစ်ခုပါ။ Windows သုံးတဲ့သူတွေက ဒီမှာ download လုပ်နိုင်ပါတယ်  https://getcomposer.org/Composer-Setup.exe Mac နဲ့ Linux သုံးတဲ့သူတွေကတော့ https://getcomposer.org/doc/00-intro.md ဒီမှာ ဒေါင်းလုဒ် လုပ်နိုင်ပါတယ်။ install လုပ်တာ အဆင်ပြေ မပြေ ကို terminal / cmd ကို ဖွင့်ပြီး composer လို့ ရိုက်ထည့်ကြည့်ပါ။ Composer ပုံစံကို မြင်ရရင် အောင်မြင်ပါပြီ။ 

၃။ VS Code , ကုတ်ရေးတဲ့အခါ Code Editor အမျိုးမျိုး အသုံးပြုနိုင်ပေမယ့် ေနာက် ဆက်လာမယ့် Toturial တွေမှာ VS Code ကို မူတည်ပြီးပဲ ဆွေးနွေးသွားမှာမို့ VS Code ကို ထည့်ထားပေးပါ။ https://code.visualstudio.com/download ဒီမှာ ဒေါင်းလုဒ် လုပ်နိုင်ပါတယ်။


လိုတဲ့ ဆော့ဝဲတွေ ေဒါင်းလုဒ် လုပ်၊ install လုပ်ပြီး အောင်အောင်မြင်မြင် ဖွင့်နိုင်ရင် ခရီးတစ်ဝက် ေရာက်ပါပြီ။ 

အခု စရေးပါတော့မယ်။

ကိုယ့် ပရောဂျက် အတွက် folder တစ်ခု ဆောက်လိုက်ပါ။ C / D ဒါမှမဟုတ် အဆင်ပြေတဲ့ နေရာမှာ ဆောက်နိုင်ပါတယ်။ ဉပမာ D: ထဲက Code Folder ထဲမှာ hello-world လို့ ဆောက်လိုက်တယ်ပဲ ဆိုကြပါစို့။



```bash
# terminal ကို ဖွင့်ပါ။

# သက်ဆိုင်ရာ ပရောဂျက် directory ကို သွားနေတာပါ
cd D:/Code/hello-world

# laravel project တစ်ခု တည်ဆောက်ဖို့အတွက် အောက်ပါအတိုင်း ရိုက်ထည့်ပါ။
composer create-project laravel/laravel .
# လက်ရှိ directory ထဲမှာပဲ laravel project တစ်ခု တည်ဆောက်ခိုင်းလိုက်တာပါ။

# ဒါဆိုရင် laravel project တစ်ခုမှာ ပါတဲ့ ကုတ်တွေ အကုန်လုံး အဆင်သင့်ဖြစ်ပါပြီ။

# project ကို run ကြည့်ဖို့အတွက်
php artisan serve
# Server running on [http://127.0.0.1:8000]. 
# ဒီလိုပေါ်လာရင် Browser (Chrome ) မှာ http://localhost:8000 လို့ ရိုက်ထည့်ကြည့်ပါ။
# Laravel Webpage ကို မြင်တွေ့ ရမှာ ဖြစ်ပါတယ်
```

ဒါဆိုရင်တော့ "Hello World" ကို Laravel နဲ့ ေရးသားပြီးပြီလို့ မှတ်ယူနိုင်ပါပြီ။
တကယ် Hello World လို့ မြင်ချင်ရင်တော့ 

VS Code မှာ ကိုယ့်ရဲ့ laravel project ကို ဖွင့်ပါ။ 
VS Code -> File -> Open Folder

စောနက D:/Code/hello-world directory ကို ေရွးပါ။

ဒါဆိုရင် VS Code မှာ Project တစ်ခုလုံး မှာ ပါတဲ့ File / Directory တွေ အကုန်မြင်ရပါပြီ။

```bash
app/resources/welcome.blade.php ဖိုင်ကို ဖွင့်ပြီး 
နဂိုပါလာတဲ့ html code တွေကို ဖျတ်ပြီး
<h2>hello world</h2> လို့ ေရး ၊​ save လိုက်ပါ။

ဒါဆိုရင် ေစာနက Browser မှာ ဖွင့်တဲ့  http://localhost:8000 page ကို refresh လုပ်ကြည့်ရင် Hello World လို့ မြင်တွေ့ရမှာ ဖြစ်ပါတယ်။
```

Congratulations!
Hello World ပရိုဂရမ်ကို Laravel နဲ့ ေရးနိုင်ခဲ့တဲ့အတွက် ဂုဏ်ယူပါတယ်ဗျား။

အပေါ်က အဆင့်တွေကို လိုက်လုပ်ရာမှာ အခက်အခဲရှိရင် ေအာက်ပါ  Communication Channel တွေ ကတဆင့် ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။

Facebook Group
https://www.facebook.com/groups/587868458743965/

Facebook Page
https://www.facebook.com/mmsoftware100

Email 
info@software100.com.mm

Website
https://software100.com.mm

