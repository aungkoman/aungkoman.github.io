---
layout: post
title: Day 9 - Tracking Structure
---
[x] GPS Tracking Coding Structure

[x] Redlist Website Up and Running

[x] iMovie DBA နဲ့ ဆွေးနွေးဖြစ်

GPS Tracking ကို Architecture ပြောင်းတယ်။ မဟုတ်ရင် Project က အလုပ်လုပ်ရုံ သပ်သပ်ပဲ ဖြစ်နေတာ။ Sensor Data တွေယူတယ်။ သင့်တင့်သလို ပြတယ်။ Provider ကိုက မဖြစ်မနေ Setting အချက်အလက်တွေအတွက်ပဲ သုံးထားတာ။

ဆိုတော့ကာ Backend နဲ့ချိတ်မယ် ဆက်မယ်ဆိုတော့ ဘယ်လိုမှ အဆင်သင့်မဖြစ်။ ဒီတော့ ပြန်ပြင်ရတယ်။ UI ကို မဟုတ်ဘူး နောက်က Coding Structure ကို။

ကျွန်တော် က ဒီလို ပုံစံနဲ့ ရေးဖြစ်တယ်။

```UI <-> Provider <-> Service <-> DAO```

ပထမဆုံး Data Model တွေ ပြန်ဆောက်ရတယ်။ နောက် ကိုယ်က No SQL သုံးဖို့ ကြံထားတာဆိုတော့ Relationship တွေ မများစေဖို့လည်း သတိထားပြီး ပြန်ရေးရတယ်။

ထုံးစံအတိုင်း DAO မှာ Interface ရေး၊ Monk ရေး၊ Service ကခေါ် ၊ Service ကို Provider က ခေါ် ။ null handling မှာတောင် တိုင်နည်းနည်းပတ်သွားသေးတယ်။ စိတ်က ရှည်တာဆိုတော့ အကုန်ကျော် လိုက်တယ်။

UI က ပြန်ချိတ်တာနဲ့ ဘာနဲ့ ဆိုရင် User Model နဲ့တင် နေ့တစ်ပိုင်း ကုန်သွားတယ်။ စဉ်းစားမိတယ်။ User Module တော့ ရေးထားသင့်ပြီလို့။

နောက် Route Data Provider ရေးတော့ UI ဘက်ကို ပြန်သွားကြည့်ရတယ်။ ဒီနေ့တော့ အချိန်မရှိတော့ဘူး။ နောက်ရက်မှ UI အပိုင်းကို Provider  ယူအောင် ပြန်ပြင်ရေးရမယ်။

တစ်ခု စဉ်းစားနေရတာက Consumer Widget နဲ့ ဆိုရင် Provider Data တွေကို listen လုပ်လို့ရနေပေမယ် widget မဟုတ်ပဲ ရိုးရိုး state တစ်ခုအနေနဲ့ရော သုံးလို့ရနိုင်မလား‌ပေါ့ ။ ဒါမှမဟုတ် နေရာတိုင်းမှာ consumer တွေ ခွဲပြီး လုပ်ရမလား။ ဒါကတော့ လေ့လာပြီး တစ်ခုခု ဆုံးဖြတ်မှ ရမယ်။ လွယ်တဲ့နည်းကတော့ Consumer Widget တွေ အများကြီးနဲ့ သုံးတာပါ။ ဖြစ်ချင်တာကတော့ initState လိုနေရာမှာ Provider က အချက်အလက်ကို live ယူနေချင်တာ။ setState တော့ ပြန်ခေါ် နိုင်မှာ မဟုတ်ပေမယ့်ပေါ့။ ရမယ်လို့ မျှော်လင့်မိတယ်။

Day 9 က အလုပ်ပြီးဖို့တော့ လိုသေးတယ်။



