---
layout: post
title: "Laravel Basic - အပိုင်း (၅) Migrations"
date: 2025-05-08
categories: productivity programming
---
Migration

ဒီတစ်ပိုင်းမှာတော့ Laravel မှာ Database ကိုချိတ်ဆက် အသုံးပြုဖို့အတွက် လိုအပ်တဲ့

- Migration
- Model
- Seeder
- Controller 

စတဲ့အကြောင်းတွေကို ဆွေးနွေးသွားမှာ ဖြစ်ပါတယ်။

နမူနာ အနေနဲ့ Busket List ပရောဂျက် ရေးကြည့်ပါမယ်။

Busket List ဆိုတာ ကိုယ်မသေခင် လုပ်သွားချင်တဲ့ အလုပ် စာရင်းလို့ ေပြာရမယ်။

ဉပမာ ဒီလိုမျိုးပေါ့။

### 📝 Simple Bucket List
- [x] Travel to another country
- [x] Learn a new language
- [x] Watch the sunrise at the beach
- [ ] Go on a road trip with friends or family
- [ ] Try a new extreme sport (like ziplining or scuba diving)

ကိုယ်လုပ်ကြည့်ချင်တဲ့ အလုပ်တွေ ထည့်မှတ်ထားမယ်။
လုပ်ပြီးသွားရင်လည်း လုပ်ပြီးသွားကြောင်း မှတ်ထားမယ်။
မလုပ်ချင်တော့ဘူးဆိုရင်လည်း ပြန်ဖျတ်မယ်။

ဒီလောက်ဆိုရင် Busket List ပရောဂျက် ကို နားလည်မယ် ထင်ပါတယ်။

စပြီးရေးကြည့်ရအောင်။

အရင် အပိုင်းတွေမှာ ရေးခဲ့တဲ့ Routing , View, Controller တွေမှာ အခုလိုမျိုး  ဒေတာ သိမ်းတာတွေ၊ ပြင်တာတွေ, ဖျတ်တာတွေ မပါခဲ့ပါဘူး။ အခု အပိုင်းမှာတော့ ကိုယ့်ရဲ့ Busket List ကို Database ထဲမှာ သိမ်းထားဖို့ လိုလာပါပြီ။ 

### Laravel မှာ Database ဘယ်လို ချိတ်ဆက်မလဲ?

- ပထမဆုံး Xampp ကို ဖွင့်ပြီး Apache နဲ့ MySQL ကို စတင်ပါ။
- Broswer မှာ http://localhost/phpMyAdmin လို့ ရိုက်ထည့်ပြီး phpMyAdmin ကို ဖွင့်ပါ။
- Create database ကို နှိပ်ပြီး  Database Name နေရာမှာ busket_list လို့ ရိုက်ထည့်ပါ။

ဒါဆိုရင် Database တစ်ခု ဖန်တီးပြီးသွားပါပြီ။ ဒီ အသစ်ဖန်တီးထားတဲ့ Database ကို Laravel နဲ့ ချိတ်ဆက်မယ် ဆိုရင် Laravel project directory ထဲက .env.example ကို ကူးပြီး .env လို့ နာမည်ပေးပါ။ 

.env ကို ဖွင့်ပြီး Database နဲ့ ပက်သက်တဲ့ Enviroment Virable တွေကို ပြင်ပါ။

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=busket_list
DB_USERNAME="root"
DB_PASSWORD=
```
DB_DATABASE မှာ ကိုယ်အသစ်ဆောက်ခဲ့တဲ့ database name ကို ရိုက်ထည့်ပါ။​ အခု case မှာဆိုရင် busket_list ပေ့ါ။
XAMPP မှာ
DB_USERNAME က  root ဖြစ်ပြီး
DB_PASSWORD ကတော့ blank ဖြစ်ပါတယ်။

.env မှာ Database နဲ့ ပက်သက်တဲ့ Enviroment Variable တွေကို ပြင်ပြီးရင် terminal မှာ 
```bash
php artisan migrate
```
command ကို ရိုက်ထည့်ပါ။


ဒါဆိုရင်တော့ Database နဲ့ Laravel Project ချိတ်ဆက်တဲ့ အပိုင်းပြီးပါပြီ။

### Table အသစ် တည်ဆောက်ခြင်း , migration, model

database ချိတ်ဆက်တဲ့ အပိုင်းပြီးတဲ့နောက်မှာ တကယ့် အချက်အလက်ကို သုံးမယ့် Table တွေကို ဆက်လက် ဖန်တီးပါမယ်။
အခု Busket List ပရောဂျက်မှာတော့ ကိုယ်လုပ်ချင်တဲ့ အလုပ် (Wish ) တွေကို သိမ်းပေးထားမယ့် Table တစ်ခုပဲ လိုပါတယ်။ Table ရဲ့ ဖွဲ့စည်းပုံကတော့ ဒီလိုမျိုး ဖြစ်သင့်ပါတယ်။
| id | name | completed |
|----|------|-----------|
| 1  | Travel to another country | 1 |
| 2  | Learn a new language | 1 |
| 3  | Watch the sunrise at the beach | 1 |
| 4  | Go on a road trip with friends or family | 0 |
| 5  | Try a new extreme sport (like ziplining or scuba diving) | 0 |

ဒီလို Table မျိုး ဆောက်မယ်ဆိုရင် ရိုက်ထည့်ရမယ့် command ကတော့
```bash
php artisan make:model Wish -mcs
```
ဒီ command ရိုက်ထည့်တဲ့အခါ ေအာက်ကအတိုင်း ဖိုင် (၄) ဖိုင် ထွက်လာပါလိမ့်မယ်။

### migration file

```bash
./database/migrations/2025_05_15_162208_create_wishes_table.php
```
ဒါကတော့ Table Structure ကို သတ်မှတ်ရမယ့် ဖိုင်ဖြစ်ပါတယ်။ 
စာတွေသိမ်းမယ့် name ကော်လံနဲ့
ပြီး / မပြီး သိမ်းမယ့် completed ေကာ်လံ ကို အောက်ပါအတိုင်း ထည့်ရေးပါမယ်။
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wishes', function (Blueprint $table) {
            $table->id();
            # ကိုယ်သိမ်းချင်တဲ့ column တွေကို ထည့်ပေးရမယ်။
            # name column
            $table->string('name');
            # completed column
            $table->boolean('completed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishes');
    }
};


```



### model file
```bash
./app/Models/Wish.php
```
ဒါကတော့ ပရောဂျက် တစ်ခုလုံးမှာ Wish တွေ သိမ်းစည်း၊ ပြင်ဆင်၊​ ပယ်ဖျတ်တာတွေ လုပ်တဲ့အခါ အသုံးပြုရမယ့် Class တစ်ခု ဖြစ်ပါတယ်။
လောလောဆယ်တော့ နဂိုပါလာတဲ့အတိုင်းပဲ ထားထားပါမယ်။

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wish extends Model
{
    use HasFactory;
}

```



### controller file
```bash
./app/Http/Controllers/WishController.php 
```
အရင်အပိုင်းမှာ သုံးခဲ့သလိုပဲ Wish နဲ့ ပက်သက်တဲ့ Business Logic တွေကို တာဝန်ယူ ရေးသားမယ့် Class တစ်ခု ဖြစ်ပါတယ်။
ထုံစံအတိုင်း နဂိုအတိုင်းပဲ ထားလိုက်ပါဉီးမယ်။ 

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WishController extends Controller
{
    //
}

```



### seeder file
```bash
./database/seeders/WishSeeder.php
```
ဒါကတော့ Table ထဲမှာ ဒေတာတွေ ကြိုဖြည့်ထားနိုင်မယ့် Class တစ်ခု ဖြစ်ပါတယ်။ 
အခုလိုမျိုး Wish ငါးခုေလာက် ကြိုထည့်ထားပါမယ်။

```php
<?php

namespace Database\Seeders;

use App\Models\Wish;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // database ထဲမှာ ကြိုထည့်ထားချင်တဲ့ data တွေ။
        Wish::create([
            'name' => 'Travel to another country',
            'completed' => true,
        ]);
        Wish::create([
            'name' => 'Learn a new language',
            'completed' => true,
        ]);
        Wish::create([
            'name' => 'Watch the sunrise at the beach',
            'completed' => true,
        ]);
        Wish::create([
            'name' => 'Go on a road trip with friends or family',
            'completed' => false,
        ]);
        Wish::create([
            'name' => 'Try a new extreme sport (like ziplining or scuba diving)',
            'completed' => false,
        ]);
    }
}
```


အခု ဆိုရင် အသစ်ထွက်လာတဲ့ ဖိုင် (၄) ခုထဲမှာမှ migration file နဲ့ seeder file မှာ ကိုယ်သိမ်းချင်တဲ့ ဒေတာ ပုံစံ၊ ကြိုထည့်ထားချင်တဲ့ ေဒတာ စသည်ဖြင့် ထည့်ရေးပြီးပါပြီ။ ဒါတွေကို တကယ့် database ထဲမှာ Table ဆောက်ဖို့၊ ဆောက်လိုက်တဲ့ Table ထဲမှာ ဒေတာ တွေ ဖြည့်ဖို့ အောက်ပါ command ကို ရိုက်ထည့်ပါမယ်။
```bash
# migration file ထဲကအတိုင်း Database ထဲမှာ table သွားဆောက်ပေးပါ။
php artisan migrate
# BusketSeeder file ထဲကအတိုင်း Table ထဲမှာ data တွေ ဖြည့်ပေးပါ။
php artisan db:seed --class=WishSeeder
```
ဒါဆိုရင် Table ဆောက်တာနဲ့ Table ထဲမှာ ဒေတာ တွေ ဖြည့်တာ အောင်မြင်ပါပြီ။

အချိန် PHPMyAdmin ကို refresh လုပ်ပြီး busket_list Database ကို ဝင်ကြည့်ရင် wishes ဆိုတဲ့ Table တစ်ခု တိုးလာပြီး record ကလည်း (၅) ခု ရှိေနတာကို မြင်တွေ့ရပါလိမ့်မယ်။


အခုတစ်ပိုင်းကတော့ 
- Laravel နဲ့ Database ချိတ်ဆက်ခြင်း
- Table အသစ် ထည့်သွင်းခြင်း
- Table ထဲမှာ data တွေ ကြိုက်တင် ဖြည့်သွင်းခြင်း။
ဒီ (၃)​ခုကို လုပ်ခဲ့ပါတယ်။ နောက်လာမယ့် အပိုင်းမှာတော့  Model နဲ့ Controller ဘယ်လို ပေါင်းစပ် အသုံးပြုနိုင်လဲဆိုတာ ဆက်လက် ေဆွးနွေးသွားပါမယ်။




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



