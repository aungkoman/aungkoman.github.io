---
layout: post
title: Xampp မှာ MySQL Server ပြဿနာ တက်တဲ့အခါ
---

ကျွန်တော် တို့ windows မှာ web development လုပ်တဲ့အခါ ကွန်ပျူတာထဲမှာ Aphache, PHP, MySQL စတာတွေ ထည့်ဖို့အတွက် xampp / wamp software တစ်ခုခု သုံးကြပါတယ်။ ကျွန်တော် ကတော့ စက်ထဲမှာ Xampp ထည့်ပြီး သုံးဖြစ်ပါတယ်။ setup လုပ်ရတာလည်း လွယ် သုံးရတာလည်း ရိုးရှင်းတော့ ဒီတစ်ခုပဲ စွဲစွဲမြဲမြဲ သုံးနေဖြစ်တာ။ တစ်ခုပဲ တစ်ခါတစ်လေ ဘာကြောင့်မှန်း မသိ mysql server ထိုးရပ်သွားပြီ phpMyadmin လည်း ဝင်မရ၊ ရေးထားတဲ့ project တွေလည်း အကုန်အလုပ်မလုပ်တော့ပဲ ရပ်သွားတာမျိုး ဖြစ်တက်တယ်။

ဒီလို MySQL Server အလုပ်မတော့ရင် Xampp ကို အစအဆုံး အသစ်ပြန်တင်၊ project တွေ ပြန်ထည့်၊ database တွေ ပြန်ပြီး import လုပ်နဲ့ တော်တော် အလုပ်ရှုပ်ပါတယ်။ ဒါတောင် database ကို backup လုပ်ထားမိဉီးမှ database လည်း backup လုပ်မထားမိခဲ့ဘူးဆိုရင် ငိုပေတော့ပဲ။ ဒါနဲ့ xampp ကို ရင်တစ်ထိတ်ထိတ်သုံးရင်း database backup လုပ်တဲ့ အကျင့်ဖြစ်လာတယ်။

ပြီးခဲ့တဲ့ အပတ်က ထုံးစံအတိုင်း MySQL Server လည်း ထိုးရပ်သွားရော။ project file တွေ backup လုပ်၊ database file တွေ ပြန်ရှာနဲ့ နေ့တစ်ဝက်လောက် ကုန်သွားတယ်။ ဒါနဲ့ အရင်လို ရှင်းနေကြအတိုင်း Xampp ကို အစအဆုံး ပြန်တင်မျိုးတော့ အဆင်မပြေဘူးဆိုပြီး ဟိုရှာ သည်ရှာနဲ့ stackoverflow မှာ ဖြေထားတာ တစ်ခု သွားတွေ့တယ်။ လိုက်လုပ်ကြည့်တော့လည်း မိနစ်ပိုင်းနဲ့ ပြေလည်သွားတော့ နောက်များဆိုရင် ဒီအတိုင်း ပဲ လိုက်လုပ်တာ ကောင်းမယ်လို့ တွေးမိတယ်။

တကယ်လို့ Xampp မှာ MySQL Server ရပ်သွားပြီဆိုရင် အောက်က အဆင့် (၆) ဆင့်အတိုင်း လုပ်လိုက်ပြီး MySQL Server ပြန်တက်လာအောင် လုပ်နိုင်ပါတယ်။

1. Rename the folder mysql/data to mysql/data_old (you can use any name)
2. Create a new folder mysql/data
3. Copy the content that resides in mysql/backup to the new mysql/data folder
4. Copy all your database folders that are in mysql/data_old to mysql/data (skipping the mysql, performance_schema, and phpmyadmin folders from data_old)
5. Finally copy the ibdata1 file from mysql/data_old and replace it inside mysql/data folder
6. Start MySQL from XAMPP control panel
And, voilà!
