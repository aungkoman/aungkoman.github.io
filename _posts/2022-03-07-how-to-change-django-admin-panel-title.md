---
layout: post
title:  How to change Django admin panel title
description: Djaon admin panel က Title ကို ဘယ်မှာ ပြောင်းနိုင်မလဲ?
image: ../images/fcc/kfc.jpg
---
### How to change Django admin panel title
Djaon admin panel က Title ကို ဘယ်မှာ ပြောင်းနိုင်မလဲ?
```admin.py``` မှာ အောက်က (၃) ကြောင်းကို ထည့်ရေးပေးနိုင်တယ်။
```python
admin.site.site_header = "Custom Site Header"
admin.site.site_title = "Custom Site Title"
admin.site.index_title = "Welcome to Our Portal"
```