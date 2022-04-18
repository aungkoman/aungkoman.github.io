---
layout: post
title:  Even and Odd row style in CSS
description: text align right in thrid column.
image: ../images/fcc/kfc.jpg
---

### Table CSS Style

- [x] odd and even row highlight in table
- [x] right align in number
Even နဲ့ Odd ကို css မှာ ဒီလို select လုပ်တယ်။

နောက်ပြီး third column  က text တွေကို right align ဖြစ်ချင်တယ်။

```css
tr:nth-child(even) {background: #CCC}
tr:nth-child(odd) {background: #FFF}
td:nth-child(3) { text-align: end; }
```

ဒီမှာတော့ စာအရှည်ကြီး ရေးပြီး ရှင်းထားတာ တွေ့တယ်။
https://stackoverflow.com/questions/1332406/better-way-to-right-align-text-in-html-table


