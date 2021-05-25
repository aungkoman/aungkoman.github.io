---
layout: post
title: Using Myanmar font in TCPDF and FPDI
---
PHP မှာ မြန်မာစာနဲ့ PDF Generate ပြုလုပ်ခြင်း

php မှာ pdf generation library အများကြီးရှိတဲ့အထဲကမှ ကျွန်တော်တို့ သုံးဖြစ်တာ TCPDF ပါ။ english စာတွေကို pdf generate လုပ်နေတုန်းက အဆင်ပြေပေမယ့် မြန်မာစာ ထုတ်ဖို့လိုလာတဲ့အခါ စပြီး ပြဿနာ တက်ပါတယ်။ font rendering က မမှန်။ ယူနီကုတ်ဖောင့် ဖြစ်တဲ့ pyidaungsu / padauk ဘာသုံးသုံး အဆင်မပြေတော့ နည်းလမ်းရှာရင်း ကြံရင်းနဲ့ Zawgyi နဲ့ အဆင်ပြေတာကို သွားတွေ့တယ်။

ဒါနဲ့ပဲ ခေတ်နောက်ပြန်ဆွဲပြီး database ထဲက ယူနီကုတ် မြန်မာစာတွေကို zawgyi ပြောင်းပြီး pdf ထုတ်ရတယ်။ font converter ကတော့ ထုံးစံအတိုင်း Rabbit ပဲပေါ့။

working demo ကိုတော့ မြန်မာလိပ်စာကတ် generator အနေနဲ့ https://mmsoftware100.com/pdf မှာ သုံးကြည့်နိုင်ပါတယ်။
နမူနာ ကုတ် sample ကို Github repo https://github.com/aungkoman/pdf_generate/ မှာ ကြည့်နိုင်ပါတယ်။