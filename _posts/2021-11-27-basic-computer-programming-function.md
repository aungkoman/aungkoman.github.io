---
layout: post
title: Function - Basic Computer Programming
description: Function - Basic Computer Programming
image: ../images/auto_reply_sms.png
---
### Function အကြောင်း

```function``` အကြောင်းမပြောခင်မှာ ရိုးရိုးရှင်းရှင်း ပရိုဂရမ်လေး တစ်ပုဒ်လောက် အရင်ရေးလိုက်ကြရအောင်။
ကျွန်‌တော်တို့ user နာမည်ကို မေးပြီး နှုတ်ဆက်တဲ့ ပရိုဂရမ်ကို ရေးမယ် ဆိုပါစို့။ ဒီအတိုင်း ရေးနိုင်ပါတယ်။

```python
username = input("What is your name? ")
print("Hello ",username)
print("Warmly Welcome")
```
လိုင်းနံပတ်(၁) မှာ ```username``` variable ကို ကြေညာထားပါတယ်။
```input``` ကိုသုံးပြီး ```What is your name?``` လို့ user ကို မေးပါတယ်၊ user ရိုက်ထည့်တဲ့ စာကို ```username``` variable ထဲကို assign ```=``` လုပ်ပါတယ်။

လိုင်းနံပတ်(၂) နဲ့ (၃) ကတော့  ```print``` ကို သုံးပြီး သက်ဆိုင်ရာ စာတွေကို output ထုတ်ပြတာပါ။

တကယ်လို့ user (၃) ယောက်လောက်ကို အခုလို နာမည်မေးပြီး နှုတ်ဆက်ရမယ်ဆိုရင် ဘယ်လို ရေးကြမလဲ?

```python
username = input("What is your name? ")
print("Hello ",username)
print("Warmly Welcome")

username = input("What is your name? ")
print("Hello ",username)
print("Warmly Welcome")


username = input("What is your name? ")
print("Hello ",username)
print("Warmly Welcome")
```

ဒါမျိုး (၃) ခါ ရေးလိုက်လို့ရပါတယ်။ တကယ်လို့ user (၁၀၀) လောက်ကို မေးမယ်ဆိုရင်ရော? ဒီအတိုင်းပဲ copy paste လုပ်မယ် ၊ ဒါမှမဟုတ် loop တစ်ခုခု သုံးပြီး ဖြေရှင်းလို့ ရပါတယ်။  ဒီထက် ပိုပြီး အဆင်ပြေမယ့် နည်း programming မှာ ရှိပါတယ်။ ဒါကတော့ ```function``` ပါပဲ။

### ```function``` ဆိုတာ ထပ်ခါ ထပ်ခါ လုပ်ရမယ့် ကုတ်တွေကို နာမည် တစ်ခု ပေးပြီး စုထားပေးတာမျိုးပါ။ 
ဉပမာ အပေါ်က ပရိုဂရမ်ကိုပဲ ကြည့်ပါ၊ ဒီမှာ username တောင်းတဲ့ ကုတ်နဲ့ output ထုတ်ပြတဲ့ ကုတ် စုစုပေါင်း (၃) ကြောင်းကို ထပ်ခါ ထပ်ခါ ရေးနေရတာကို တွေ့ရပါမယ်။ ဒီတော့ ဒီ (၃) ကြောင်းကို နာမည်တစ်ခု ပေးပြီး အဲ့သုံးကြောင်းကို run ချင်တိုင်း ပေးထားတဲ့ နာမည်ကိုပဲ ခေါ်လိုက် ရင် ရပါပြီ။ အပေါ်က ပရိုဂရမ်ကို  ```function``` သုံးပြီး အောက်ကအတိုင်း ရေးနိုင်ပါတယ်။

```python 
def greeting():
  username = input("What is your name? ")
  print("Hello ",username)
  print("Warmly Welcome")

greeting()
greeting()
greeting()
```

```function``` တစ်ခု ကြေညာတော့မယ်ဆိုရင် ```def``` လို့ အ‌ရှေ့က ရေးရပါတယ်။ ```def``` နောက်မှာ ဒီ ```function``` အတွက် နာမည်ပေးရပါတယ်၊ နာမည်နောက်မှာ ကွင်းစကွင်းပိတ် ```()``` နဲ့  group သင်္ကေတ ```:``` ထည့်ပေးရပါတယ်။

ပြီးရင်တော့ ဒီနာမည်ကို ခေါ်တဲ့အခါ ```run``` စေချင်တဲ့ ```code``` တွေကို အုပ်စု ဖွဲ့ပြီး ချရေးထားရုံပါပဲ။

နမူနာ ရေးထားတဲ့ ပရိုဂရမ်မှာဆိုရင် 
```python
def greeting():
```
ဆိုပြီး function တစ်ခု ကြေညာထားပါတယ်၊ function name ကို ```greeting``` လို့ ပေးထားပါတယ်။
နောက် သူ့အောက်မှာ ကုတ်(၃) ကြောင်းရေးထားပါတယ်။
```python
def greeting():
  username = input("What is your name? ")
  print("Hello ",username)
  print("Warmly Welcome")
```
ဒါဆိုရင် function တစ်ခု ရေးတာ ပြည့်စုံသွားပါပြီ။

ဆိုလိုတာက ကုတ် (၃) ကြောင်းကို နာမည် တစ်ခု ပေးထားလိုက်တာပါပဲ။
ဒီ ကုတ် (၃) ကြောင်းကို ```run``` စေချင်တဲ့ အချိန်တိုင်း ပေးထားတဲ့ နာမည် ဖြစ်တဲ့ ```greeting``` ကို ကွင်းစကွင်းပိတ် ```()``` နဲ့ တွဲပြီး ခေါ်လိုက်ရုံပါပဲ
```python
def greeting():
  username = input("What is your name? ")
  print("Hello ",username)
  print("Warmly Welcome")

greeting()
```
လူ (၃) ယောက်ကို နာမည်မေးပြီး နှုတ်ဆက်မယ်ဆိုရင် 
```python
def greeting():
  username = input("What is your name? ")
  print("Hello ",username)
  print("Warmly Welcome")

greeting()
greeting()
greeting()
```
ဒီလိုမျိုး function ကိုပဲ (၃) ခါ ခေါ်လိုက်ရုံပါပဲ။ ကုတ်တွေ အများကြီး ထပ်ခါ ထပ်ခါ မရေးရတော့တာပေါ့။

ဒါကတော့ ```function``` အကြောင်းပါပဲ။ 
အနှစ်ချူပ်ရရင် ```function``` ဆိုတာက ထပ်ခါ ထပ်ခါ ရေးရမယ့် ကုတ်တွေကို နာမည်တစ်ခု ပေးပြီး အဲ့နာမည်ကိုပဲ ခေါ်သုံးတာမျိုးပဲ ဆိုပါတော့။ နားလည်မယ်လို့ ထင်ပါတယ်။
