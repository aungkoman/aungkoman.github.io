---
layout: post
title: "Laravel Basic - အပိုင်း (၂) Routing"
date: 2025-05-07
categories: productivity programming
---

`localhost` နဲ့ `127.0.0.1` က အခြေခံအားဖြင့် အတူတူပါပဲ၊ ဒါပေမယ့် အနည်းငယ်ကွာခြားမှုတွေ ရှိပါတယ်။  

### **ဘာကွာလဲ?**  
1. **`localhost`**  
   - `localhost` ဆိုတာ **hostname** တစ်ခုဖြစ်ပြီး၊ သူ့ကို **DNS** (Domain Name System) ကနေ `127.0.0.1` ကို resolve လုပ်ပေးပါတယ်။  
   - `localhost` ကို **hosts file** (`/etc/hosts` on Linux/macOS, `C:\Windows\System32\drivers\etc\hosts` on Windows) မှာ သတ်မှတ်ထားပါတယ်။  
   - Browser က `localhost` ကို ရိုက်ထည့်ရင် အလိုအလျောက် `127.0.0.1` ကို ပြောင်းလဲအသုံးပြုပါတယ်။  

2. **`127.0.0.1`**  
   - `127.0.0.1` ဆိုတာ **IPv4 loopback address** ဖြစ်ပြီး၊ ကိုယ့်ကွန်ပျူတ်ကိုယ် ပြန်လည်ဆက်သွယ်တဲ့နေရာမှာ အသုံးပြုပါတယ်။  
   - DNS resolution မလိုဘဲ တိုက်ရိုက်အလုပ်လုပ်ပါတယ်။  

### **PHP `artisan serve` မှာ ဘာကြောင့် `127.0.0.1` ကိုပြသလဲ?**  
- `php artisan serve` က default အနေနဲ့ `127.0.0.1` ကိုသုံးပါတယ်။  
- `localhost` က `127.0.0.1` ကို ညွှန်းတာကြောင့် နှစ်ခုလုံးအလုပ်လုပ်ပါတယ်။  

### **ဘယ်ဟာသုံးသင့်လဲ?**  
- **`http://localhost:8000`**  
  - Hostname ကိုသုံးတာကြောင့် ပိုဖတ်ရလွယ်ပါတယ်။  
  - Local development အတွက် အဆင်ပြေပါတယ်။  
- **`http://127.0.0.1:8000`**  
  - DNS resolution မလိုဘဲ တိုက်ရိုက်အလုပ်လုပ်တာကြောင့် ပိုမြန်နိုင်ပါတယ်။  
  - `localhost` DNS မှာပြဿနာရှိရင် ဒီဟာကိုသုံးပါ။  

### **တကယ်လို့ `localhost` အလုပ်မလုပ်ရင်?**  
- **Hosts file မှာ `localhost` က `127.0.0.1` ကို ညွှန်းထားရဲ့လား** စစ်ပါ။  
- **Firewall/Network setting** တွေကြောင့် `localhost` ကို block လုပ်နေနိုင်လား စစ်ပါ။  
- **Browser cache** ဖျက်ကြည့်ပါ။  

### **အတိုချုပ်**  
- `localhost` = Hostname (DNS ကနေ `127.0.0.1` ကိုညွှန်း)  
- `127.0.0.1` = IPv4 Loopback Address (တိုက်ရိုက်သုံး)  
- **နှစ်ခုလုံးက local server ကို ဆက်သွယ်ဖို့ အဆင်ပြေပါတယ်!**  

ဒါကြောင့် `php artisan serve` က `127.0.0.1` ကိုပြပေမယ့် `localhost` နဲ့လည်း အလုပ်လုပ်နိုင်ပါတယ်။ 😊