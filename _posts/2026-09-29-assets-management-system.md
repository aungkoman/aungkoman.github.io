---
layout: post
title: "Developing Assest Management System"
date: 2026-09-29
categories: learning
author: "Cisco Ramon"
tags: [life,promotion] # TAG names should always be lowercase
---

hello 


### Main Entity

- [ ] User , user access
- [ ] Location , location of the assets , Branch / Building / Floor etc
- [ ] Asset , real enity , the central of this system , track individually (mostly) , consumable item like wire or small staff will keep quantity , otherwise quantity is default 1
- [ ] AssetTransaction , record the movement of asset like purchase, return, transfer, received, etc 

### Requirements

- [ ] User Login
- [ ] Dashboard , overview of assets distribution around locations
- [ ] Asset listing
- [ ] Add New Asset
- [ ] Transfer Asset
- [ ] Update / Remove Asset


--- 
Grand Dream တွေကို မေ့ထားလိုက်။

အလုပ်ဖြစ်တာနဲ့ 
စိတ်ထဲ ထင်တာက စလိုက်ကြရအောင်။



Let's start with data structure,

ပစ္စည်းအတူတူပါပဲလို့ ပြောဖို့ ခက်ပြီ။

ကွန်ပျူတာပဲ ဆိုကြပါစို့

ကွန်ပျူတာ အလုံး(၅၀) 

မတူတာဆိုလို့ Serial No ပဲ ရှိမယ်။

ဒါမျိုး။

နောက်တစ်ခါ 

အဲ့ကွန်ပျူတာကိုပဲ အလုံး (၂၀) ထပ်ဝယ်တိုးတာမျိုး။

Assets ဆိုတာ တစ်ခုတည်းနဲ့ သိမ်းထားကြမလား?
Consumable Item တွေ ဆိုရင်ရော
ဉပမာ Fiber ကြိုးလိပ်တွေ။

Fiber ကြိုးလိပ်က Asset တစ်ခု။
သူ့မှာ မီတာ (၅၀၀) ပါတာ။

တစ်ရက် တစ်ရက် ဖြတ်ဖြတ်ပြီး သုံးကြတယ်။
ဒါမျိုးကိုလည်း track လုပ်ထားနိုင်ရမှာ။

လက်ရှိ မီတာ (၃၀၀) ကျန်ပြီး 
မီတာ (၂၀၀) ကို ဒီလူတွေ ဒီနေ့က သုံးသွားပါတယ်ဆိုတာမျိုး မှတ်ထားနိုင်ရမှာ။

ကွန်ပျူတာလည်း အတူတူပဲ။

မန္တလေး ရုံးကို အလုံး (၂၀) ထုတ်ပေး။

မန္တလေးရုံးကလည်း လက်ခံ။
ပြီးရင် ဘယ်သူ့ကို ဘယ်အလုံး ထုတ်ပေးထားတယ်ဆိုတာ ဆက်ပြီး စာရင်းသွင်း။

Individual နဲ့ Bulk ကို အသေအချာ track လုပ်နိုင်တဲ့ စနစ်ဖြစ်ရမယ်။
ဖြည်းဖြည်းချင်းပေါ့။
လောလောဆယ် အလုပ်ဖြစ်နိုင်တဲ့ အသေးဆုံး အပိုင်းနဲ့ စလိုက်ကြရအောင်။

