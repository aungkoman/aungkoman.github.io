---
layout: post
title:  Emoji Array in JS
description: How to get emoji array in JS.
image: ../images/fcc/kfc.jpg
---
###
JS မှာ emoji တွေကို string တစ်ခုအနေနဲ့ ကြေညာပြီး random ထုတ်ပြချင်တာ ရိုးရိုး string လို လုပ်တာ မရ။
ဒါနဲ့ ဟိုရှာ သည်ရှာနဲ့ stackoverflow က အဖြေပေါင်း သောင်းခြောက်ထောင်ထဲမှာ ဒီကောင်ကို သွားတွေ့တယ်။

Code Monkey ဆိုတော့ကာ နားလည်အောင် မဖတ်ပဲ အလုပ်ဖြစ်အောင် အရင် copy paste ပြီး စမ်းကြည့်တော့ လိုချင်တဲ့အတိုင်း ရတာတွေ့တာနဲ့ ဒီမှာ လာသိမ်းထားရတယ်။

```js
var emojiString = "😍❤😂😊🤣😒👌😁👍🤷‍♀️🤷‍♂️😜😢😎😉🤞✌👏✔👀😃✨🎁🙄👨🧑👩🏿👨🏿🧓🏿🚐🚘💌💕💓💜💚💛🤢";
var emojiList = emojiString.split(/.*?/u);
console.log(emojiList[0]); // 😍
```