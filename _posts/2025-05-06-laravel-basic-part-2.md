---
layout: post
title: "Laravel Basic - အပိုင်း (၂) Routing and Views"
date: 2025-05-07
categories: productivity programming
---
Routing and Views in Laravel

Laravel Project တစ်ခုမှာ ကုတ်ဖိုင်တွေ ရာနဲ့ချီရှိပြီး စစချင်း ကြည့်လိုက်ရင် စိတ်ဖိစီးသွားနိုင်ပါတယ်။

Hey, relax.

အေးဆေး စိတ်အေးအေးထားပါ။ အခု တစ်ခေါက် ကြည့်ရမယ့် ဖိုင် နဲ့ directory က နှစ်ခုပဲ ရှိပါတယ်။

pre requested : အပိုင်း (၁) က အဆက်ဖြစ်တဲ့အတွက် php artisan serve လုပ်ပြီးသား အနေအထား ဖြစ်နေမယ်လို့ ယူဆပါမယ်။

```bash
routes\web.php
```

ဖိုင်ကို ဖွင့်ကြည့်ပါ။

```php
Route::get('/', function () {
    return view('welcome');
});
```
ဒီလို မြင်ရပါမယ်။

အောက်ကလိုမျိုး ပြင်ရေးလိုက်ပါမယ်။

```php
Route::get('/', function () {
    // return view('welcome');
    return "<h2> Hello World</h2>";
});
```




--------

အပေါ်က အဆင့်တွေကို လိုက်လုပ်ရာမှာ အခက်အခဲရှိရင် ေအာက်ပါ  Communication Channel တွေ ကတဆင့် ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။

Facebook Group
https://www.facebook.com/groups/587868458743965/

Facebook Page
https://www.facebook.com/mmsoftware100

Email 
info@software100.com.mm

Website
https://software100.com.mm

