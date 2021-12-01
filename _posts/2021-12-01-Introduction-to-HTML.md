---
layout: post
title: Introduction to HTML
description: HTML- Hyper Text Markup Language
image: ../images/fcc/kfc.jpg
---

### Introduction to HTML

ယနေ့ အင်တာနက် Brower ပေါ်မှာ မြင်မြင်သမျှ အရာအားလုံးကို HTML လို့ အတိုကောက်ခေါ်တဲ့ Hyper Text Markup Language နဲ့ ရေးထားတာ ဖြစ်ပါတယ်။ 

HTML နဲ့ ရေးဖို့ကလည်း ဘာမှ အများကြီးမလိုပါဘူး။ ကွန်ပျူတာမှာ ပါတဲ့ Notepad နဲ့ Browser တစ်ခု (ဉပမာ Chrome / Microsoft Edge) ရှိရင် HTML ရေးလို့ရပြီ။

ကွန်ပျူတာထဲက Notepad ကို ဖွင့်ပါ။ အောက်က ကုတ်ကို ရေးပါ။

```html
<h1>Hello World</h1>
```

ပြီးရင် ဖိုင်ကို သိမ်းပါ။ သိမ်းတဲ့နေရာမှာ file name ကို ```.html``` နဲ့ အဆုံးသတ်သိမ်းရပါတယ်။ ဉပမာ ကိုယ်က filename ကို ```hello``` လို့ ပေးမယ်ဆိုရင် ```hello.html``` လို့ သိမ်းရပါတယ်။

သိမ်းထားတဲ့ ဖိုင် ```hello.html``` ကို right click နှိပ်ပြီး Open With မှာ Brower တစ်ခုခု ( Chrome / Microsoft Edge) ရွေးလိုက်ရင် ကျွန်‌တော်တို့ ရဲ့ ပထမဆုံး HTML နဲ့ ရေးထားတဲ့ ```Hello World``` webpage ကို မြင်ရမှာ ဖြစ်ပါတယ်။

```hello.html```
<h1>Hello World</h1>

စာပိုဒ်တွေ ကို ရေးချင်ရင် ```<p>``` ကို အသုံးပြုနိုင်ပါတယ်။

hello.html မှာ ```<p>``` သုံးပြီး စာပိုဒ်တစ်ပိုဒ် ရေးကြည့်ပါမယ်။
```html
<h2>Hello World</h2>
<p>This is paragraph. What's this life if full of care, we have no time to stand and stare. No Time to see beneath the boot. And stare as long as sheep or cow.</p>
```

ဖိုင်ကို save ပြီးရင် Brower ကို refresh လုပ်ကြည့်ပါ။ အောက်ကလို မြင်ရပါမယ်။

```hello.html```
<h2>Hello World</h2>
<p>This is paragraph. WHAT is this life if, full of care,We have no time to stand and stare?No time to stand beneath the boughs,And stare as long as sheep and cows.</p>

Code ကို ပြန်ကြည့်မယ်ဆိုရင်
```<h2>Hello World</h2>```
ဒီမှာ ```<h2>``` ဆိုတာ ခေါင်းစဉ်ကို ရေးချင်တဲ့အခါ သုံးရတဲ့ HTML Tag ဖြစ်ပါတယ်။ HTML မှာ Tag တစ်ခု ဖွင့်ပြီးရင် ```/``` နဲ့ ပြန်ပိတ်ရပါတယ်။ ဒီ code မှာဆိုရင် ```<h2>``` နဲ့ စထားပြီး ```</h2>``` နဲ့ ပိတ်ထားတာကို တွေ့ရမှာပါ။ အဖွင့် Tag နဲ့ အပိတ် Tag ကြားမှာ ကိုယ်ပြချင်တဲ့ Content / စာ ကို ရေးရပါတယ်။ ကျွန်တော် တို့က Hello World ဆိုပြီး ခေါင်းစဉ် ပြချင်တာဆိုတော့ ```<h2>Hello World</h2>``` ဆိုပြီး ရေးတာဖြစ်ပါတယ်။

ခေါင်းစဉ် ရေဖို့အတွက် ```<h2>``` Tag

စာပိုဒ်‌ရေးဖို့အတွက် ```<p>``` Tag

စသည်ဖြင့် Tag ပေါင်း ```110``` ရှိပါတယ်။

Tag တစ်ခုချင်းစီကို စမ်းသုံးကြည့်ပြီး ကိုယ်ရေးချင်တဲ့ webpage တစ်ခုအတွက် ဘယ် Tag တွေ သုံးရမလဲ သိရင် အခြေခံအားဖြင့် ရပါပြီ။ များသောအားဖြင့် Tag ပေါင်း 110 ထဲက ဆယ်ခု ဆယ့်ငါးခုလောက်ကိုပဲ သုံးဖြစ်တာ များပါတယ်။ ဒီတော့ အလွတ်ကျက်စရာတော့ မလိုပါဘူး၊ ဒီ output ရဖို့ ဒီ Tag သုံးလို့ရတယ်ဆိုတာ သိရင် ရပါပြီ။

HTML Tag စာရင်းကို ဒီမှာ ကြည့်နိုင်ပါတယ်။
https://www.w3schools.com/TAGS/default.ASP