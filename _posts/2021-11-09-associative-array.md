---
layout: post
title: Associative Array
description: Programming Basic , Associative Array
image: ../images/auto_reply_sms.png
---
### Two Types of Array

ပြီးခဲ့တဲ့ အခန်းမှာ array ဆိုတာ data အများကြီးကို အခန်းလိုက် အခန်းလိုက် သိမ်းလို့ရတဲ့ varaible တစ်မျိုးဖြစ်တဲ့အကြောင်း ရှင်းပြခဲ့ပါတယ်။

```python
name_list = ["Aung Aung", "Mg Mg", "Bo Bo"]
print(name_list[0]) # Aung Aung
print(name_list[1]) # Mg Mg
print(name_list[2]) # Bo Bo
```

ဒီမှာဆိုရင် array အခန်းတွေကို numerical index နဲ့ သုံးထားတာကို တွေ့ရမှာပါ။
ကျွန်တော် တို့ array နောက်တစ်မျိုး ကို ကြည့်ကြရအောင်။

ဆိုကြပါစို့ ကျွန်တော်တို့ လူတစ်ယောက်ရဲ့ အမည်၊ အသက် နဲ့ သွေးအမျိုးအစားကို သိမ်းချင်တယ် ဆိုကြပါစို။

ပုံမှန် varariable တွေ နဲ့ ဒါမျိုး ရေးနိုင်ပါတယ်
```python
name = "Mg Mg"
age = 30
blood = "B"
print("Personal data is ",name, " ",age, " ",blood)
```
numerical array နဲ့ ဆို ဒါမျိုးရေးနိုင်ပါတယ်
```python
person_data = ["Mg Mg", 30, "B"]
print("Personal data is ",person_data[0], " ", person_data[1]," ",person_data[2])
```
associative array နဲ့ဆို ဒါမျိုး ရေးနိုင်ပါတယ်။
```python
person_data = {
  "name" : "Mg Mg",
  "age" : 30,
  "blood" : "B"
}
print("Personal data is ")
print(person_data["name"])
print(person_data["age"])
print(person_data["blood"])

```

numerical array တွေကို သိမ်းတုန်းက value တွေအကုန်လုံးကို comma (,) ခြားပြီး သိမ်းပါတယ်။ ပြန်ထုတ်သုံးရင် index number 0 က စပြီး ပြန်ထုတ်သုံးပါတယ်။

အခု associative array မှာတော့ သိမ်းတဲ့အခါ 
key : value pair ပုံစံနဲ့ သိမ်းပါတယ်။ ပြန်ထုတ်သုံးချင်ရင် key နဲ့ ပြန်ထုတ်သုံးလို့ရပါတယ်။

နမူနာ array မှာဆိုရင် 
```python
person_data = {
  "name" : "Mg Mg",
  "age" : 30,
  "blood" : "B"
}
```
ဆိုပြီး pair (၃) ခုသိမ်းထားပါတယ်။ နာမည်ကို ထုတ်ကြည့်ချင်ရင် numerical index လို index 0 ကနေ တွက်ကြည့်စရာမလိုပါဘူး၊ လိုချင်တဲ့ key နဲ့ တိုက်ရိုက် ထုတ်ကြည့်နိုင်ပါတယ်။

```python
print(person_data["name"]) # Mg Mg
```

ဒါဆိုရင်တော့ numerical array နဲ့ associative array ကို နားလည်မယ်လို့ ထင်ပါတယ်။