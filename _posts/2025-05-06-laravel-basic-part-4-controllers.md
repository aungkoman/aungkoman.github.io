---
layout: post
title: "Laravel Basic - အပိုင်း (၄) Controllers"
date: 2025-05-08
categories: productivity programming
---
Controller in Laravel

ဒီတစ်ပိုင်းမှာတော့ Controller အကြောင်း ဆွေးနွေးကြပါမယ်။
Controller ဆိုတာကတော့ ကိုယ့်ပရောဂျက်ရဲ့  Business Logic တွေ ချရေးတဲ့ နေရာလို့ အကြမ်းဖျဉ်း မှတ်ထားနိုင်ပါတယ်။ 

Business Logic ဆိုတာ ဘယ် route တွေ လာရင် ဘယ် UI ပြန်ပေးမယ် စသည်ဖြင့်ပေါ့ အသေးစိတ်တွက်ချက်‌ပေးတဲ့နေရာကို ဆိုလိုတာပါ။

အရင်က ကျွန်တော်တို့ web.php ဆိုတဲ့ Routing File မှာ အဲ့ logic တွေကို ချရေးခဲ့ပါတယ်။
လက်ရှိ web.php က ဒီလို ရှိပါတယ်။

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
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

အခုတော့ Controller နဲ့ ပြန်ပြောင်းရေးကြည့်ပါမယ်။
Controller တစ်ခု ပရောဂျက်ထဲကို ထည့်ဖို့အတွက် အောက်က command ကို ရိုက်ထည့်ပါမယ်။

```bash
php artisan make:controller OurController
```

OurController ဆိုတဲ့ နေရာမှာ ကိုယ့်ကြိုက်တဲ့ နာမည် ပေးနိုင်ပါတယ်။ 
MyController
FirstController

အစရှိသဖြင့်ပေါ့။

ဒီ command ရိုက်ထည့်လိုက်ပြီ ဆိုရင် 

```bash
app\Http\Controllers\OurController.php
```

ဆိုပြီး ဖိုင် တစ်ခု ပေါ်လာပါလိမ့်မယ်။

```php

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OurController extends Controller
{
    //
}

```

ထုံးစံအတိုင်း hello world အတွက် စရေးကြပါမယ်။ web.php က ကုတ်အတိုင်းပါပဲ။

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OurController extends Controller
{
    public function helloWorld()
    {
        return view('hello');
    }
}

```

ဒီမှာ helloWorld ဆိုတဲ့ method တစ်ခု ထည့်လိုက်တာပါပဲ။ ဒီ method ကို web.php က ဒီလို ခေါ်ပါမယ်။

```php
Route::get('/', [OurController::class, 'helloWorld']);
// Route::get('/', function () {
//     return view('hello');
// });
```

အရင်က Route::get method ကို ခေါ်တဲ့အချိန် function အစား ဘယ် Controller က ဘယ် Method ကို ခေါ်ပါလို့ ပြောင်းရေးလိုက်တာပါပဲ။ ရလဒ်ကတော့ အတူတူပါပဲ။ 

localhost:8000 ကို ခေါ်ရင် အရင်အတိုင်းပဲ မြင်ရမှာ ဖြစ်ပါတယ်။

web.php မှာ ရေးထားတဲံ တစ်ခြား function တွေ အကုန်လုံးကိုလည်း controller ဘက်ကို အခုလိုမျိုး ရွေ့နိုင်ပါတယ်။

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OurController extends Controller
{
    public function helloWorld()
    {
        return view('hello');
    }
    public function greeting()
    {
       return "<h2>Good Morning</h2>";
    }
    public function bye()
    {
       return "<h2>See you</h2>";
    }
    public function funFact()
    {
       return "<h2>Coding has over 700 languages.</h2>";
    }
}
```

Controller ဘက်ကို ပြောင်းရေးထားတဲ့ method တွေကို web ဘက်က ဒီလို ပြန်ခေါ်နိုင်ပါတယ်။

```php
<?php

use App\Http\Controllers\OurController;
use Illuminate\Support\Facades\Route;


Route::get('/', [OurController::class, 'helloWorld']);
Route::get('/greeting', [OurController::class, 'greeting']);
Route::get('/bye', [OurController::class, 'bye']);
Route::get('/fun-fact', [OurController::class, 'funFact']);
```

အခု ဆိုရင် ကုတ်က ပိုပြီး ကျစ်ကျစ်လစ်လစ် နဲ့ စနစ်တကျ ရှိလာတာကို တွေ့ရပါမယ်။

web.php မှာ routing အပိုင်း ရေး
controller အပိုင်းမှာ business logic တွေ ရေးပြီး
views အပိုင်းမှာ ပြချင်တဲ့ UI ရေးကာ 

Routing - Controller - View ဆိုတဲ့ အပိုင်း (၃) ပိုင်းကို ချိတ်ဆက် ရေးသားနိုင်မယ်လို့ မျှော်လင့်ပါတယ်။

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



