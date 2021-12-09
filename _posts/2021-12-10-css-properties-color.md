---
layout: post
title: CSS Properties - background-color, color
description: CSS မိတ်ဆက်
image: ../images/fcc/kfc.jpg
---

# CSS Properties - background-color, color

CSS ဆိုတာ ```property:value;``` ဒီ format နဲ့ ရေးရတယ်ဆိုတာ သိပြီဆိုတော့ CSS မှာ ပါတဲ့ အခြေခံ property တွေကို စာရင်းလုပ်ကြည့်လိုက်ရ‌အောင်။

- စာသားအရောင် ပြောင်းချင်ရင် ```color```
- နောက်ခံအရောင် ပြောင်းချင်ရင် ```background-color```
- စာလုံး အရွယ်အစား ပြောင်းချင်ရင် ```font-size```

အစရှိသဖြင့်ပေါ့ CSS Property ပေါင်း (၂၂၀) လောက် W3Schools မှာ စာရင်းလုပ်ထားတာတော့ တွေ့တယ်။

အိုကေ ရိုးရိုးရှင်းရှင်း color အကြောင်း က စပြောကြမယ်။

property ဖြစ်တဲ့ color ကိုတော့ သိပြီ။ value ကရော ဘယ်လိုလဲ? ပုံမှန် ရေးနေကြတာက 
```color:red``` ဒါမျိုး။

စာသားအရောင်ကို အနီရောင် ပြောင်းပါပေါ့။ ```red``` အပြင် green, blue စတဲ့ တစ်ခြား အရောင်(၁၄၀) လောက် သုံးလို့ ရသေးတယ်။ သုံးလို့ရမယ့် အရောင်စာရင်းကို ```https://www.w3schools.com/colors/colors_names.asp``` ဒီမှာ ကြည့်နိုင်ပါတယ်။
ဒါက color name ပေါ့။ နာမည်နဲ့ အရောင် သတ်မှတ်တာ။ 

အဲ့သလိုမှ မဟုတ်ဘူး သူတို့ ကြိုပြီး သတ်မှတ်ပေးထားတဲ့ အရောင် (၁၄၀) ထဲမှာ ကိုယ် စိတ်ကြိုက် အရောင် မပါဘူးဆိုရင် စိတ်ကြိုက် အရောင်စပ်လို့ရသေးတယ်ဗျာ။

အရောင် ဘယ်လို စပ်ကြမလဲ?
ငယ်ငယ်က ရောင်စုံခဲတံ အနီရယ်၊ အစိမ်းရယ်၊ အပြာရယ် ရှိရင် ဘယ်အရောင်မဆို ခြယ်လို့ရတယ်ဆိုတာ မှတ်မိကြဉီးမယ် ထင်ပါတယ်။ အခုလည်း ဒီလိုပါပဲ။ အခု ကိုယ့်မျက်လုံးထဲမှာ မြင်မြင်သမျှ အရောင်တွေကို Red , Green, Blue သုံးခု အချိုးကျ ပေါင်းပြီး ရအောင် စပ်နိုင်ပါတယ်။ 

```color:rgb(255, 99, 71)``` 

ဒါမျိုးပေါ့။ ```rgb()``` ဆိုပြီး Red, Green , Blue ပမာဏ ကို ထည့်ပေးရတယ်။ ပမာဏ ဆိုရာမှာ ```0``` ကနေ ```255`` ကို ဆိုလိုတာ။  နောက်မှ ဒီအကြောင်းကို အသေးစိတ် ဆက်ပါမယ်။ လောလောဆယ် စံသတ်မှတ်ထားတဲ့ အရောင် (၁၄၀) ထဲက ယူသုံးကြတာပေါ့။


ဒီတော့ အရောင်သတ်မှတ်ရမယ့် နေရာတိုင်းမှာ ဒီ အရောင်တွေကို ယူသုံးလို့ရမယ်။ ဆိုရရင် ```background-color: blue``` ဒီလိုမျိုးပေါ့။
ဒါဆိုရင် စာလုံးအရောင်တွေ ပြောင်းတာနဲ့ နောက်ခံ အရောင်တွေ ပြောင်းတဲ့ အကြောင်း နားလည်မယ်လို့ မျှော်လင့်ပါတယ်။ အောက်မှာ နမူနာ code ပြထားပါတယ်။

```html
<!DOCTYPE html>
<html>
  <body>

    <h3 style="color:red;">Leisure</h3>

    <p style="color:green;">What is this life if, full of care,We have no time to stand and stare?No time to stand beneath the boughsAnd stare as long as sheep or cows</p>

    <p style="color:blue;">No time to see, when woods we pass,Where squirrels hide their nuts in grass: No time to see, in broad daylight, Streams full of stars, like skies at night</p>

    <p style="background-color:orange;">No time to turn at Beauty’s glance, And watch her feet, how they can dance No time to wait till her mouth can Enrich that smile her eyes began?</p>

  </body>
</html>
```
