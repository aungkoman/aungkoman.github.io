---
layout: post
title: "Laravel Basic - အပိုင်း (၃) View"
date: 2025-05-07
categories: productivity programming
---
Views in Laravel

ဒီတစ်ပိုင်းမှာတော့ UI တွေ ဘယ်လို ပြကြလဲဆိုတာကို ဆွေးနွေးကြပါမယ်။
Laravel မှာတော့ UI ကို HTML နဲ့ပဲ ပြကြတာ များပါတယ်။ 
ဒီတော့ html အခြေခံလောက် ရေးတက်ရင် သိရင် UI စပြီး ရေးလို့ရပါပြီ။

အပိုင်း (၂) Routing မှာတုန်းက ရေးခဲ့တဲ့ 
```bash
routes\web.php
```
ဖိုင်ကို ပြန်ကြည့်မယ် ဆိုရင် 

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    return "<h2>Hello, We're at get / route </h2>";
});

Route::get('/greeting', function () {
    return "<h2>Good Morning</h2>";
});

Route::get('/bye', function () {
    return "<h2>See you</h2>";
});

Route::get('/fun-fact', function () {
    return "<h2>Coding has over 700 languages.</h2>";
});


```

UI မှန်သမျှကို Html တစ်ကြောင်းတည်းနဲ့ ပြပေးတာကို တွေ့ရပါလိမ့်မယ်။
အခုအပိုင်းမှာတော့ UI ကို html တစ်ကြောင်းနဲ့ မဟုတ်ပဲ ဖိုင် အပြည့်အစုံနဲ့ ဘယ်လို ပြန်ကြလဲ ဆိုတာကို ဆက်လက် ဆွေးနွေးသွားပါမယ်။

ကျွန်တော်တို့ ပြချင်တဲ့ HTML Code က ဒီလိုပါ။

```html
<!DOCTYPE html>
        <html>
        <head>
            <title>My First HTML Page</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a basic HTML file returned from a Laravel route.</p>
        </body>
        </html>
```

ဒါကို web.php မှာ အခုလို ပြင်ရေးပေးနိုင်ပါတယ်။

```php

Route::get('/', function () {
    // return view('welcome');
    // return "<h2>Hello, We're at get / route </h2>";
    $html = <<<HTML
        <!DOCTYPE html>
        <html>
        <head>
            <title>My First HTML Page</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a basic HTML file returned from a Laravel route.</p>
        </body>
        </html>
        HTML;
    return $html;
});
```

အခုချိန် http://localhost:8000 ကို refresh လုပ်ကြည့်ရင် 

```bash
Hello, World!
This is a basic HTML file returned from a Laravel route.
```

ဒီလို မြင်ရပါမယ်။

ဒါပေမယ့် အခုလို Html Code နဲ့ PHP Code တွေ ရောပြီး ရေးရတာက သိပ်ပြီး သက်တောင့်သက်သာ မရှိလှပါဘူး။ ဒီတော့ HTML Code တွေကို သီးခြား ဖိုင်တစ်ခုမှာ ခွဲပြီးရေးကြပါမယ်။

Laravel မှာတော့ ဒီလို UI နဲ့ ပက်သက်ပြီး ခွဲထားမယ့် ဖိုင်တွေကို 
```bash
resources/views/ 
```
ဆိုတဲ့ Directory အောက်မှာ ထားကြပါတယ်။

ဒီတော့ resources/views directory အောက်မှာ html file တစ်ခု ဆောက်ကြပါမယ်။
html file name ကို ကိုယ်ကြိုက်တာ ပေးလို့ရပေမယ့် extension ကိုတော့ .blade.php လို့ ပေးရပါတယ်။
ဉပမာ ကျွန်တော်တို့ အပေါ်က HTML Code တွေကို hello.blade.php လို့ နာမည်ပေးပြီး ဖိုင်တစ်ခု ဆောက်လိုက်ပါမယ်။

```bash
resources/views/hello.blade.php
```


```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First HTML Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a basic HTML file returned from a Laravel route.</p>
    </body>
</html>
```

ဒီဖိုင်ကို ခေါ်ပြဖို့အတွက် web.php မှာ ဒီလို ပြင်လိုက်ပါမယ်။

```php
Route::get('/', function () {
    // return view('welcome');
    // return "<h2>Hello, We're at get / route </h2>";
    // $html = <<<HTML
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1">
    //         <title>My First HTML Page</title>
    //     </head>
    //     <body>
    //         <h1>Hello, World!</h1>
    //         <p>This is a basic HTML file returned from a Laravel route.</p>
    //     </body>
    //     </html>
    //     HTML;
    // return $html;
    return view('hello');
});
```

ဒီမှာဆိုရင် 
```php
return view('hello');
```

ဆိုတဲ့ တစ်ကြောင်းရေးလိုက်တာနဲ့ စောနက HTML File ကို ယူပြပေးမှာပဲ ဖြစ်ပါတယ်။
ဒီလို view function ကို ခေါ်သုံးတဲ့အခါမှာ file name ကိုပဲ ပေးလိုက်ရင် ရပါပြီ
view('hello.blade.php') ဆိုပြီး ဖိုင်အပြည့်အစုံကို ထည့်ပေးစရာ မလိုပါဘူး။

နောက်ပိုင်းမှာတော့ HTML File လို့ မသုံးတော့ပဲ Blade Template File လို့ ဆက်လက် ခေါ်ဆို အသုံးပြုသွားပါမယ်။

လက်ရှိ web.php ရဲ့ အခြေအနေက အောက်ပါအတိုင်းဖြစ်နေပါမယ်။

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    // return "<h2>Hello, We're at get / route </h2>";
    // $html = <<<HTML
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1">
    //         <title>My First HTML Page</title>
    //     </head>
    //     <body>
    //         <h1>Hello, World!</h1>
    //         <p>This is a basic HTML file returned from a Laravel route.</p>
    //     </body>
    //     </html>
    //     HTML;
    // return $html;
    return view('hello');
});

Route::get('/greeting', function () {
    return "<h2>Good Morning</h2>";
});

Route::get('/bye', function () {
    return "<h2>See you</h2>";
});

Route::get('/fun-fact', function () {
    return "<h2>Coding has over 700 languages.</h2>";
});

```

ဒါဆို ကျန်တဲ့ routing တွေကိုလည်း သက်ဆိုင်ရာ Blade Template File တွေ ရေးပြီး ချိတ်ဆက် အသုံးပြုကြည့်ကြပါ။

အဓိက မှတ်ဖို့က 
- UI / Template File တွေကို resources/views ဆိုတဲ့ Directory ထဲမှာ သိမ်းရတယ်။ 
- သိမ်းတဲ့အခါ .blade.php ဆိုတဲ့ Extension နဲ့ သိမ်းရပြီး 
- ပြန်ခေါ်သုံးချင်ရင် web.php မှာ view() function နဲ့ ခေါ်သုံးနိုင်မယ် 
- view() function ခေါ်တဲ့အခါ ဖိုင် နာမည်လေးပဲ ထည့်ပေးဖို့ လိုပြီး extension အပြည့်အစုံထည့်စရာမလို။ hello.blade.php ကို ပြချင်ရင် view('hello') လို့ ရေးရုံပဲ။
စတဲ့ concept ကို သိရင် ရပါပြီ။

အခု အပိုင်း (၃) ထိ ရောက်တဲ့အခါ

- Laravel Project တစ်ခု Create လုပ်နိုင်မယ်။
- Routing တွေ စိတ်ကြိုက် ထည့်နိုင် run နိင်မယ်။
- View ( HTML / Temaplte ) file တွေ နဲ့ UI စပြီး ပြနိုင်လာမယ်။

နောက် တစ်ပိုင်းမှာ Controller ဆိုတဲ့ concept အကြောင်း ဆက်လက်ဆွေးနွေးကြပါမယ်။

Exercises အနေနဲ့ ကိုယ့်ရဲ့ ကိုယ်ရေးအကျဉ်း ကို ပြပေးတဲ့ laravel project လေး တစ်ခု ရေးကြည့်ပါ။

- laravel project တစ်ခု create လုပ်မယ်။
- routes ငါး ခု ထည့်မယ်။
/ -> ကိုယ့် နာမည် နဲ့ အသက် 
/parents -> မိဘ နှစ်ပါး အမည်
/siblings -> ညီအစ်ကို မောင်နှမ အမည် စာရင်း
/educations -> ပညာအရည်အချင်း
/skills -> ကိုယ်မှာ ရှိတဲ့ skill list
- broswer က မဟုတ်ပဲ route တစ်ခုက တစ်ခုကို <a href=> သုံးပြီး ကူးနိုင်အောင် လုပ်ပါ။


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



