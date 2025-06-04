---
layout: post
title: "Laravel Basic - အပိုင်း (၆) CRUD"
date: 2025-05-18
categories: productivity programming
---

CRUD ဆိုတာ

Create
Retrieve 
Update 
Delete 

ဆိုတဲ့ အခြေခံ operation (၄) ခုရဲ့ အတိုကောက်ပါ။

ပရောဂျက် တိုင်းလိုလို ဒီ အခြေခံ operation (၄) ခုကိုပဲ လုပ်ဆောင်ကြတာ ဖြစ်ပါတယ်။

အခု ကျွန်တော်တို့ Busket List ပရောဂျက်မှာလည်း

- Wish စာရင်း အသစ်ထည့်တာ , Create
- ထည့်သွင်းထားတဲ့ Wish စာရင်းတွေ ပြန်ကြည့်တာ, Retrieve 
- Wish တစ်ခု လုပ်ပြီးသွားရင် လုပ်ပြီးသွားကြောင်း မှတ်သားတာ , update နဲ့
- မလုပ်ချင်တော့တဲ့ Wish ရှိရင် ပယ်ဖျတ်တာ, delete စတဲ့ အခြေခံ (၄) မျိုးကို ထည့်သွင်းပါမယ်။


အပိုင်း(၅) migration အပိုင်းမှာ Wish တွေ သိမ်းစည်းဖို့ အတွက် Database နဲ့ Table တွေ တည်ဆောက်တာ ဆွေးနွေးခဲ့ပြီးပြီမို့ အခုအပိုင်းမှာ

Routing, Controller, View နဲ့ Model အကြောင်း ဆက်လက် ဆွေးနွေးသွားပါမယ်။

ပထမဆုံး လိုအပ်တာကတော့ Wish စာရင်း ကို ဖော်ပြပေးတဲ့ စာမျက်နှာပါ။


ဒီတော့ Feature တစ်ခုထည့်မယ်ဆိုရင် view, controller နဲ့ routing file တွေမှာ အခုလိုမျိုး လိုက်တိုးနိုင်ပါတယ်။

UI အပိုင်းအတွက် /resources/view directory ထဲမှာ wishes.blade.php ဆိုပြီး file တစ်ခု ဆောက်ပါမယ်။



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wishes</title>
    <style>
        body {
            font-family: sans-serif;
        }
        h1 {
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        li:last-child {
            border-bottom: none;
        }
        .completed {
            text-decoration: line-through;
            color: green;
        }
    </style>
</head>
<body>
    <h1>My Wish List</h1>
    @php
        use App\Models\Wish; // Import the Wish model
        $wishes = Wish::all(); // Fetch all wishes
    @endphp
    @if ($wishes->isEmpty())
        <p>No wishes yet!</p>
    @else
        <ul>
            @foreach ($wishes as $wish)
                <li @class(['completed' => $wish->completed])>
                    {{ $wish->name }}
                    @if ($wish->completed)
                        (Completed)
                    @endif
                </li>
            @endforeach
        </ul>
    @endif

</body>
</html>
```


Business Logic အတွက် WishController.php မှာ ဒီလို method တစ်ခု တိုးပါမယ်။

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WishController extends Controller
{
    public function selectAllWishes()
    {
        return view('wishes');
    }
}

```

နောက်ဆုံးအနေနဲ့ Routing ပိုင်းအတွက် web.php  မှာ route အသစ်တစ်ခုကို အခုလို ထည့်လိုက်ပါမယ်။

```php
<?php

use App\Http\Controllers\OurController;
use App\Http\Controllers\WishController;
use Illuminate\Support\Facades\Route;


Route::get('/wishes', [WishController::class, 'selectAllWishes']);

Route::get('/', [OurController::class, 'helloWorld']);
Route::get('/greeting', [OurController::class, 'greeting']);
Route::get('/bye', [OurController::class, 'bye']);
Route::get('/fun-fact', [OurController::class, 'funFact']);

```

ဒါဆိုရင်တော့ broswer မှာ localhost:8000/wishes လို့ ရိုက်ထည့်လိုက်ရင်  wish တွေကို မြင်ရမှာ ဖြစ်ပါတယ်။
ဒါပေမယ့် ဒီစာရင်းက Database ထဲက လာတဲ့ စာရင်းမဟုတ်ပဲ template file မှာ အသေရေးထားတဲ့ စာရင်းဖြဈ်နပါတယ်။

တကယ့် Database ထဲမှာ သိမ်းထားတဲ့ wishes တွေကို ပြဖို့အတွက် wishes.blade.php မှာ ဒီလို ပြင်ရေးပါမယ်။

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wishes</title>
    <style>
        body {
            font-family: sans-serif;
        }
        h1 {
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        li:last-child {
            border-bottom: none;
        }
        .completed {
            text-decoration: line-through;
            color: green;
        }
    </style>
</head>
<body>
    <h1>My Wish List</h1>
    @php
        use App\Models\Wish; // Import the Wish model
        $wishes = Wish::all(); // Fetch all wishes
    @endphp
    @if ($wishes->isEmpty())
        <p>No wishes yet!</p>
    @else
        <ul>
            @foreach ($wishes as $wish)
                <li @class(['completed' => $wish->completed])>
                    {{ $wish->name }}
                    @if ($wish->completed)
                        (Completed)
                    @endif
                </li>
            @endforeach
        </ul>
    @endif

</body>
</html>
```

ဒါဆိုရင်တော့ broswer မှာ localhost:8000/wishes လို့ ရိုက်ထည့်လိုက်ရင် database ထဲမှာ ကြိုတင် ထည့်သွင်းထားတဲ့ wish တွေကို မြင်ရမှာ ဖြစ်ပါတယ်။




ဒီနေရာမှာ

Database နဲ့ ချိတ်ဆက်ပြီး ဒေတာ ရယူတဲ့ 
PHP Code တွေကို template ဖိုင်ထဲမှာ ရေးတာဟာ သိပ်ပြီး စနစ်မကျလှပါဘူး။

များသောအားဖြင့် ဒီလို ဒေတာ နဲ့ ပက်သက်တဲ့ အပိုင်းကို Controller တွေက တာဝန်ယူပြီး လုပ်ပေးကြပါတယ်။ ဒီတော့ data ရယူတဲ့ အပိုင်းကို controller ဘက်မှာ အခု လိုပြောင်းရေးပါမယ်။


```php
<?php

namespace App\Http\Controllers;
use App\Models\Wish;
use Illuminate\Http\Request;

class WishController extends Controller
{
    public function selectAllWishes()
    {
        $wishes = Wish::all();
        return view('wishes');
    }
}

```

Controller မှာ data တွေ ရလာပေမယ့် template ဘက်ကို အဲ့ ဒေတာတွေ ဘယ်လို ပို့ကြမလဲ

အခုလိုမျိုး key -> value ပုံစံနဲ့ ပို့ပေးနိုင်ပါတယ်

```php
<?php

namespace App\Http\Controllers;
use App\Models\Wish;
use Illuminate\Http\Request;

class WishController extends Controller
{
    public function selectAllWishes()
    {
        $wishes = Wish::all();
        return view('wishes',[
            'wishes' => $wishes
        ]);
    }
}

```

Template ဘက်က ဒီ data ကို ယူသုံးမယ် ဆိုရင် အခုလိုမျိုး key အနေနဲ့ ယူသုံးနိုင်ပါတယ်။


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wishes</title>
    <style>
        body {
            font-family: sans-serif;
        }
        h1 {
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        li:last-child {
            border-bottom: none;
        }
        .completed {
            text-decoration: line-through;
            color: green;
        }
    </style>
</head>
<body>
    <h1>My Wish List</h1>
    @if ($wishes->isEmpty())
        <p>No wishes yet!</p>
    @else
        <ul>
            @foreach ($wishes as $wish)
                <li @class(['completed' => $wish->completed])>
                    {{ $wish->name }}
                    @if ($wish->completed)
                        (Completed)
                    @endif
                </li>
            @endforeach
        </ul>
    @endif

</body>
</html>
```

ဒါဆိုရင်တော့ Wish ‌စာရင်း ထုတ်ကြည့်တဲ့အပိုင်း ပြည့်စုံသွားပါပြီ။ phpMyadmin ထဲကနေ wishes table က ဒေတာတွေကို ပြင်ကြည့်ပြီး browser မှာ /wishes ကို refresh လုပ်ကြည့်ပြီး တကယ့် database ထဲက စာရင်းကို ပြနေတာလား ဆိုတာ စီစစ်နိုင်ပါတယ်။

အနှစ်ချူပ်အဖြစ်

- routing က သက်ဆိုင်ရာ Controller ရဲ့ Method ကို ခေါ်တယ်။
- Controller က လိုအပ်တဲ့ ဒေတာတွေကို Database နဲ့ ချိတ်ဆက်ရယူပြီး template file ဘက်ကို pass လုပ်ပေးလိုက်တယ်
- template file က controller ဘက်က ထည့်ပေးလိုက်တဲ့ ဒေတာကို ပြပေးတယ်

ဒီ ဒေတာ flow ကို မြင်ရင် CRUD ရဲ့ R လို့ ခေါ်တဲ့ ဒေတာ ထုတ်ကြည့်တဲ့အပိုင်း ရပါပြီ။

နောက်တစ်ပိုင်းမှာတော့ Database ထဲကို  UI က တဆင့် ေဒတာဖြည့်သွင်းတဲ့ Create အပိုင်းကို ဆက်လက် ဆွေးနွေးပါမယ်။

------


### Creating new record

Feature တစ်ခု ထည့်မယ်ဆိုရင် view, controller နဲ့ routing file တွေမှာ အခုလိုမျိုး လိုက်တိုးနိုင်ပါတယ်။

UI အပိုင်းအတွက် /resources/view directory ထဲမှာ create.blade.php ဆိုပြီး file တစ်ခု ဆောက်ပါမယ်။


```html

```


Business Logic အတွက် WishController.php မှာ ဒီလို method တစ်ခု တိုးပါမယ်။

```php
```

နောက်ဆုံးအနေနဲ့ Routing ပိုင်းအတွက် web.php  မှာ route အသစ်တစ်ခုကို အခုလို ထည့်လိုက်ပါမယ်။

```php

```



/create route ကို ခေါ်တဲ့အခါ create.blade.php ကို ပြပေးပါမယ်။

ဒီ ဖောင်ထဲမှာ ဒေတာ ဖြည့်ပြီး submit နှိပ်တဲ့အခါ database ထဲမှာ သိမ်းချင်ပါတယ်။ ဒီအတွက် နောက်ထပ် route နဲ့ controller method တစ်ခုကို အခုလို ထည့်ပေးပါမယ်။

```php

```


submit နှိပ်ရင် ဒေတာ ပို့ရမယ့် route ကို အခုလို ဖောင်မှာ ပြင်ရေးလိုက်ပါမယ်။


ဒါဆိုရင်တော့ create process ပြီးပါပြီ။

ပြန်ကြည့်မယ်ဆိုရင်

create လုပ်မယ့် form အတွက် route တစ်ခု
form ထဲက ဒေတာ တွေကို လက်ခံဖို့အတွက် route တစ်ခု 

အဲ့ route တွေရဲ့ နောက်ကွယ်မှာ business logic ကို လုပ်ပေးမယ် controller method နှစ်ခု နဲ့

Form အတွက် ui view တစ်ခု

စုစုပေါင်း အပိုင်း (၅) ပိုင်းနဲ့ create လုပ်တဲ့ လုပ်ငန်းကို လုပ်ပါတယ်။



----- 

### Editing existing record

create လုပ်ခဲ့တဲ့အတိုင်းပဲ Routes, Controller နဲ့ View တွေ လိုပါမယ်။

view

```html

```

Controller

```php

```

Route

```php

```

Form submit route

```php

```

Form submit route ကို ခေါ်တဲ့အခါ update လုပ်ပေးမယ် controller method တွေ

```php

```


ဒီ (၅) ခု ပြင်ပြီးရင် edit ရပါပြီ။




### Deleting existing record

သူကတော့ delete လုပ်တဲ့ route တစ်ခုနဲ့ controller method တစ်ခုပဲ လိုပါမယ်။

Route

```php

```

Controller

```php

```

ဖျတ်ချင်တယ် ဆိုရင် ဒီ route ကို အခုလိုမျိုး သွားလိုက်လို့ ရပါတယ်။

```html


```


ဒါဆိုရင်တော့ CRUD လို့ ခေါ်တဲ့ data အပြည့်အစုံ စီမံလို့ ရတဲ့ module တစ်ခု ရပါပြီ။




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



