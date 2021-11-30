---
layout: post
title: Programming Recap
description: Basic Computer Programming Recap
image: ../images/fcc/kfc.jpg
---
Programming Recap
- [ ] Output Functions - print
- [ ] Variable
- [ ] Mathematical Operators
- [ ] Input Functions - input
- [ ] Conditional Flow Control - if / else if / else
- [ ] Comparison Operators
- [ ] Looping - for loop / while loop
- [ ] Array - numerical index and associative array
- [ ] Function 


### Output Function
User ကို တစ်ခုခု ထုတ်ပြချင်တဲ့အခါမှာ output function ကို သုံးပြီး ထုတ်ပြနိုင်ပါတယ်။ ဉပမာ Programming တွေရဲ့ အစပထမ Hello World ဆိုတာကို ထုတ်ပြမယ်ဆိုပါစို့။ ကျွန်တော်တို့ အခု ရေးနေတဲ့ Python မှာဆိုရင် ```print``` ဆိုတဲ့ function ကို သုံးပြီး ထုတ်ပြနိုင်ပါတယ်။
```python
print("Hello World") # Hello World
```
ဒီ code ကို run လိုက်ရင် ကွန်ပျူတာ screen မှာ ```Hello World``` လို့ ပေါ်လာမှာ ဖြစ်ပါတယ်။

### Variable
Variable ဆိုတာကတော့ Data တွေကို သိမ်းစည်းလို့ရတဲ့ Container လိုမျိုးပါပဲ။ ဒီ Container ထဲကို ကြိုက်တဲ့ data ထည့်သိမ်းထားလို့ရမယ်၊ ထုတ်ကြည့်လို့ရမယ်။ Container ကို နာမည် ပေးထားရတယ်။ ဒါမှ အသုံးလိုတဲ့အခါ နာမည်ခေါ်ပြီး ပြန်ထုတ်သုံးလို့ရမှာကိုး။
```python
x = 1 # integer
y = 1.45 # float
z = "Mg Mg" # String

print(x) # 1
print(y) # 1.45
print(z) # Mg Mg
```
ဒီနေရာမှာ ပြောစရာ တစ်ခုက ```=``` ဒါကို Programming မှာ ```assign``` operator လို့ခေါ်တယ်။ သူ အလုပ်လုပ်ပုံက ညာဘက်က data ကို ဘယ်ဘက်ထဲ ထည့်ပေးတာမျိုး။
လိုင်းနံပတ် (၁) ကို ကြည့်ရင်
```python
x = 1
```
x ဆိုတဲ့ variable တစ်ခု ကြေညာထားတယ်၊ assign operator သုံးပြီး ```x``` ထဲကို ```1``` သိမ်းထားလိုက်တယ်။
နောက် လိုင်းနံပါတ် (၅) မှာ ```print(x)``` ဆိုပြီး ```x``` ထဲက data ကို ပြန်ပြီး output ထုတ်ပြထားတယ်။