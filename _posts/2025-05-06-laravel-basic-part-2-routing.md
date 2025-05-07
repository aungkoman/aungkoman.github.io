---
layout: post
title: "Laravel Basic - အပိုင်း (၂) Routing"
date: 2025-05-07
categories: productivity programming
---
Routing and Views in Laravel

Laravel Project တစ်ခုမှာ ကုတ်ဖိုင်တွေ ရာနဲ့ချီရှိပြီး စစချင်း ကြည့်လိုက်ရင် စိတ်ဖိစီးသွားနိုင်ပါတယ်။

Hey, relax.

အေးဆေး စိတ်အေးအေးထားပါ။ အခု တစ်ခေါက် ကြည့်ရမယ့် ဖိုင် က တစ်ခုပဲ ရှိပါတယ်။

pre requested : အပိုင်း (၁) က အဆက်ဖြစ်တဲ့အတွက် php artisan serve လုပ်ပြီးသား အနေအထား ဖြစ်နေမယ်လို့ ယူဆပါမယ်။

အောက်က ဖိုင်ကို ဖွင့်ကြည့်ပါမယ်။
```bash
routes\web.php
```
ဒီလို မြင်ရပါမယ်။
```php
Route::get('/', function () {
    return view('welcome');
});
```
အောက်ကလိုမျိုး ပြင်ရေးလိုက်ပါမယ်။
```php
Route::get('/', function () {
    // return view('welcome');
    return "<h2>Hello, We're at get / route </h2>";
});
```

ဒါဆိုရင် Broswer မှာ Refresh လုပ်ကြည့်တဲ့အခါ 

"Hello, We're at get / route " ဆိုပြီး မြင်ရပါလိမ့်မယ်။


ပရိုဂရမ် ရေးတဲ့အခါ ကုတ် တစ်ကြောင်းချင်းစီ step by step အလုပ်လုပ်သွားတာကို မျက်လုံးထဲ မြင်ဖို့ လိုပါတယ်။
ဒါမျိုး ပြန်လိုက်ကြည့်တာကို trace လိုက်ကြည့်တယ်လို့ ဆိုကြပါတယ်။

ဒီတော့ အခု Hello World ပရိုဂရမ်ကို ပြန်ပြီး trace လိုက်ကြည့်ကြစို့။

Broswer မှာ 

http://localhost:8000/ လို့ ရိုက်ထည့်တဲ့အခါ 

"Hello, We're at get / route" ဆိုပြီး  ဘာလို့မြင်ရတာလဲ

ဘယ်ကုတ်လိုင်းတွေ အလုပ်လုပ်သွားလဲ ဆိုတာကို trace လိုက်ကြည့်ကြပါမယ်။

Broswer မှာ http://localhost:8000 လို့ ရိုက်ထည့်လိုက်တဲ့အခါ

laravel project ရဲ့ ``` routes\web.php``` ဖိုင် ထဲက line no 5 စပြီး run ပါတယ်။ 

```php
Route::get('/', function () {
```
Route::get() ဆိုတာ function call တစ်ခု ဖြစ်ပါတယ်။

စကားမစပ် အခုလိုက်ဖတ်နေရင်းနဲ့ ကိုယ်နဲ့ စိမ်းတဲ့ အခေါ်အဝေါ်တွေ မြင်ရတဲ့အခါ စိတ်ညစ်မသွားပါနဲ့ဉီး ကိုယ်မသိတဲ့ စကားလုံးတွေကို မှတ်စုစာအုပ်ထဲမှာ ချရေးထားလိုက်ပါ။ ပြီးမှ Google မှာ ရှာ / ဆရာ တစ်ယောက်ကို ချဉ်းကပ်ပြီး ပြန်လည်မေးမြန်း ဆွေးနွေးပါ။ ဉပမာ အခု ဆိုရင် function , function call ဆိုတာ ဘာလဲ မသိရင် ခန ချမှတ်ထားလိုက်ပါ။

ဆိုလိုရင်းကို သိဖို့က ဒီ ကုတ်ကို run တယ်ဆိုတာ မှတ်ထားရင် ရပါပြီ. 

line no : 5 ကို run ပြီးရင် line no 6 ပေါ့။

```php
    // return view('welcome');
```
သူကတော့ comment ပေးထားတဲ့ ကုတ်လိုင်းမို့ ဘာအကျိုးသက်ရောက်မှုမှ မရှိပါဘူး။ နောက်တစ်ကြောင်း ထပ်ဆင်းပါမယ်။

link no : 7 
```php
    return "<h2>Hello, We're at get / route </h2>";
```
ဒါကတော့ HTML တစ်ကြောင်း ပြန်ပေးတာပါ။ ဒီတော့ Broswer မှာ Hello, We're at get / route ဆိုပြီး ခေါင်းစဉ် ခပ်ကြီးကြီးနဲ့ ပြပေးပါမယ်။

နောက်တစ်ကြောင်း ထပ်ဆင်းတော့ line no : 8
```php
});
```
ဒါကတော့ ပရိုဂရမ် run တာ ပြီးပါပြီ ဆိုတဲ့ အကြောင်း ပြတာပါ။ ဒီတော့ trace လိုက်တာ အပြည့်အစုံ ပြီးပါပြီ။

နောက်ထပ် routing တစ်ခု ရေးကြည့်ကြပါမယ်။
ဆိုကြပါစို့ localhost:8000/greeting ဆိုပြီး broswer မှာ ရိုက်ထည့်ရင် Good Morning လို့ ပေါ်စေချင်တယ် ဆိုပါတော့။

စောနက web.php မှာပဲ ဒါမျိုး ရေးနိုင်ပါတယ်။

```php
Route::get('/greeting', function () {
    return "<h2>Good Morning</h2>";
});
```
ကုတ် အပြည့်အစုံဆိုရင် ဒါမျိုး ဖြစ်သွားပါမယ်။
```bash
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    return "<h2>Hello, We're at get / route </h2>";
});

Route::get('/greeting', function () {
    return "<h2>Good Morning</h2>";
});
```

အခုချိန် Broswer မှာ http://localhost:8000/greeting လို့ ရိုက်ထည့်လိုက်ရင် Good Morning လို့ မြင်ရပါလိမ့်မယ်။

Greeting အကြောင်း trace လိုက်ကြည့်ရင် 
broswer မှာ http://localhost:8000/greeting လို့ ရိုက်ထည့်လိုက်တဲ့အခါ 
web.php က line no : 10, 11, 12 အစဉ်အတိုင်း run တာကို တွေ့ရပါလိမ့်မယ်။

ဒါဆို နောက်ထပ် route အသစ်တွေကို ကိုယ်တိုင် ရေးနိုင်လိမ့်မယ် လို့ မျှော်လင့်ပါတယ်။

ဉပမာ ဒီလို route တွေ ဆက်ရေးကြည့်ပါ။

http://localhost:8000/bye လို့ ရိုက်ထည့်လိုက်ရင် "See you" လို့ ပြပေးတာမျိုး။
http://localhost:8000/fun-fact လို့ ရိုက်ထည့်လိုက်ရင် "Coding has over 700 languages." လို့ ပြပေးတာမျိုး။


broswer မှာ ရိုက်ထည့်ပေးလိုက်တဲ့ route သည် web.php ရဲ့ ဘယ် ကုတ်လိုင်းကို run မယ်ဆိုတာ ချိတ်ဆက်သိနိုင်ရင် အခု တစ်ခေါက် ဆွေးနွေးတဲ့ routing အခြေခံကို သိပြီလို့ မှတ်ယူနိုင်ပါတယ်။



--------

အပေါ်က အဆင့်တွေကို လိုက်လုပ်ရာမှာ အခက်အခဲရှိရင် ေအာက်ပါ  Communication Channel တွေ ကတဆင့် ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။

Facebook Group
https://www.facebook.com/groups/587868458743965/

Facebook Page
https://www.facebook.com/mmsoftware100

Medium 
https://aungkoman.medium.com

Email 
info@software100.com.mm

Website
https://software100.com.mm



