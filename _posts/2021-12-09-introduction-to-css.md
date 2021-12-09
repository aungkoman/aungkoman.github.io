---
layout: post
title: Introduction to CSS
description: CSS မိတ်ဆက်
image: ../images/fcc/kfc.jpg
---
### CSS မိတ်ဆက်

CSS ဆိုတာကတော့ HTML ကို ဖက်ရှင်ကျအောင် ပြင်ပေးတဲ့ language တစ်ခုဖြစ်ပါတယ်။
HTML ချည်း သပ်သပ်က အဖြူ အမည်း နဲ့ ကြည့်မကောင်းဘူး ဆိုရမှာပေါ့။

ဒီတော့ ကြည့်ကောင်းအောင် အရင်က ```HTML Element``` တွေမှာ ```style attribute``` သုံးပြီး စာသားအရောင်တွေ၊ နောက်ခံ အရောင်တွေ ပြောင်းခဲ့ကြတာ မှတ်မိဉီးမယ် ထင်ပါတယ်။

HTML ချည်း ရေးမယ်ဆိုရင် ဒါမျိုး
```html
<h2>This is Heading</h2>
```

ခေါင်းစဉ် မည်းမည်းကြီးတော့ ပေါ်လာပြီ။ ဒီခေါင်းစဉ်ကို အနီရောင် ပြောင်းချင်တယ် ဘယ်လိုလုပ်ကြမလဲ?
```html
<h2 style="color:red">Hello World</h2>
```
ဒါဆိုရင်တော့ နီသွားပါပြီ။
```style attribute``` ထဲမှာ ```key:value``` pair ပုံစံနဲ့ ```color``` ကို ```red``` အနီရောင်ပြောင်းပါမယ်လို့ ပြင်ရေးလိုက်တာ။

```font-color:red``` ဆိုတာ CSS ပါပဲ။ CSS ရဲ့ အရှည်ကောက်က ```Cascading Style Sheets```။

### CSS ကို သုံးနေရာမှာ ရေးလို့ရတယ်။
စာနဲ့ ပေနဲ့ ပြောရရင်
- inline
- internal stylesheet
- external stylesheet

အခု ```HTML Element``` တွေထဲမှာ ```style attribute``` သုံးပြီး ရေးတာကို ```inline``` ရေးတယ်လို့ ဆိုတယ်။

ဒုတိယ ရေးလို့ရတဲ့ နေရာကတော့ ```<head>``` ထဲမှာပါ။
```HTML``` basic structure ကို မှတ်မိမှာပါ။ ဒါမျိုး ရှိတယ်လေ

```html
<html>
  <head>
    <title>This is Title</title>
  </head>
  <body>
    <h2>This is Heading</h2>
    <p>This is paragraph</p>
  </body>
</html>
```

```<head>``` မှာ အရင်က ```<title>``` ပဲ ရှိတာ။ အခု CSS တွေ ထပ်ရေးကြမယ်။
စောနက heading ကို အနီရောင် ပြောင်းတဲ့ အကြောင်းကိုပဲ အခု ```internal css``` အနေနဲ့ ရေးကြည့်မယ်။

```html
<html>
  <head>
    <title>This is Title</title>
    <style>
      h2 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2>This is Heading</h2>
    <p>This is paragraph</p>
  </body>
</html>
```

ဒီလို ရေးရင်လည်း Heading ကို နီပါတယ်။
ရေးထုံးကတော့ ပြောင်းသွားတယ်။ နောက်ပိုင်းမှာ inline ကို အတက်နိုင်ဆုံး ရှောင်ပြီး ဒီပုံစံအတိုင်းပဲ CSS ကို ရေးသွားပါမယ်။

CSS တွေ အကုန်လုံးကို ```<style>``` Tag ထဲမှာ ထည့်ရေးရပါတယ်။

ရေးထုံးကို ရှင်းပြရရင်

CSS ရေးတဲ့အခါ
```cs
selector { property1 : value1;  }
```
ဒါမျိုး ရေးရပါတယ်။

```css
h2 { color: red; }
```

selector ဆိုတာ ကိုယ် ပြင်ချင်တဲ့ HTML Elemnt ကို ပြောတာပါ။ ဒီ code မှာ ဆိုရင်‌တော့ ကျွန်တ်ောတို့က ```h2``` tag ကို ပြင်ချင်လို့ ```h2``` လို ရေးပါတယ်။ နောက် ပြင်ချင်တဲ့ ပုံစံကို ```{ } ``` တွန့်ကွင်းထဲမှာ ``` property : value ;``` ပုံစံနဲ့ ရေးရတယ်။ ဒီ code မှာဆိုရင် ကျွန်‌တော်တို့က စာသား အရောင်ကို အနီရောင် ပြောင်းချင်တာဆိုတော့ ```color : red ;``` ဒါမျိုး ရေးပါတယ်။ 

နောက် ```h2``` ကိုပဲ နောက်ခံ အရောင်လည်း အပြာရောင် ပြောင်းချင်တယ်ဆိုရင် css ကဒါမျိုး ဖြစ်ပါမယ်။

```html
<html>
  <head>
    <title>This is Title</title>
    <style>
      h2 {
        color: red;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h2>This is Heading</h2>
    <p>This is paragraph</p>
  </body>
</html>
```

property နဲ့ value အတွဲ တစ်ခုရေးပြီးတိုင်း semi column ```;``` နဲ့ အဆုံးသတ်ရပါတယ်။

CSS ရဲ့ အခြေခံ ရေးထုံးကို နားလည်မယ်လို့ မျှော်လင့်ပါတယ်။ စမ်းရေးကြည့်ပြီး နားမလည်တာရှိရင် မေးနိုင်ပါတယ်။
