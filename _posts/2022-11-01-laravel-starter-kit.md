---
layout: post
title: Laravel Starter Kit in Myanmar
---
## Laravel Starter Kit in Myanmar

Laravel Project တစ်ခု စတဲ့အခါ ဘယ်က စလို့ ဘာလုပ်ရမှန်းမသိ လမ်းပျောက်မနေအောင်လို့ လုပ်မယ့် အလုပ် နဲ့ သုံးရမယ့် command တွေကို စာရင်းလုပ်ထားတယ်။

### Model Creation

ပထမဆုံး လိုတာကတော့ Model ပဲ။ ရေးထားတဲ့ ER Diagram / DB Design ကို ကြည့်ပြီး Model တွေ စရေးမယ်။ များသောအားဖြင့်တော့ Entity List ထုတ်ပြီး အဲ့အတိုင်း လိုက်ရေးတာများတယ်။

ဆိုတော့ Entity က ဒါမျိုး ရှိမယ် ဆိုပါတော့

```entity
### News

- id
- title
- featured_photo_id
- short_description
- description
- url
- user_id
```

#### Command

```bash
php artisan make:model News -msc
```

- m means Migration
- s means Seeder
- c means Controller

#### Output

```log
aungkoman@AungnoMBookpuro ecommerce % php artisan make:model News -msc
Model created successfully.
Created Migration: 2022_11_01_093923_create_news_table
Seeder created successfully.
Controller created successfully.
aungkoman@AungnoMBookpuro ecommerce % 
```

အိုကေ ဒါဆိုရင် Model တစ်ခု ဆောက်ပြီး သွားပြီ။ ဒီမှာ ပါမယ့် Fields တွေနဲ့ ထည့်မယ်။ ဒီမှာတော့ Migration လုပ်တယ်လို့ ခေါ်တယ်။ ```database/migrations/``` folder ထဲမှာ ရှိမယ်။

#### Migration

```php
public function up()
{
    Schema::create('news', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('featured_photo_url')->default("");
        $table->string('short_description')->default("");
        $table->string('description')->default(""); //->nullable();
        $table->string('url');
        $table->foreignId('user_id')->constrained();
        $table->timestamps();
    });
}
```

Migration အတွက်လည်း လိုအပ်တဲ့ Field တွေ ပြင်ပြီးပြင်ဆိုရင် တကယ် Migrate လုပ်ဖို့ ဒီ command ကို run မယ်။

```bash
php artisan migrate
```

#### Migration Output

```logs
aungkoman@AungnoMBookpuro ecommerce % php artisan migrate
Migrating: 2022_11_01_093923_create_news_table
Migrated:  2022_11_01_093923_create_news_table (71.91ms)
aungkoman@AungnoMBookpuro ecommerce % 
```

အို‌ကေ ဒါဆိုရင် Model တစ်ခု ရပြီ။ Database ထဲမှာလည်း Table တစ်ခု ဆောက်ပြီးသွားပြီ။
ဒီထဲကို နမူနာ Data ထည့်ထားကြမယ်။ ဒီမှာ Seeder ရဲ့ အပိုင်း ဝင်လာပြီ။ နမူနာ Data ထည့်ထားမှပဲ စမ်းဖို့ ပြုဖို့ အဆင်ပြေမှာ။

```php
    public function run()
    {
        $this->makeNews(1, "news title one", "news_one.jpg", "this is short description","this is long descritpion", "https://mmsoftware100.com", 1 );
        $this->makeNews(2, "news title two", "news_two.jpg", "this is short description","this is long descritpion", "https://mmsoftware100.com", 1 );
        $this->makeNews(3, "news title three", "news_three.jpg", "this is short description","this is long descritpion", "https://mmsoftware100.com", 1 );
        $this->makeNews(4, "news title four", "news_four.jpg", "this is short description","this is long descritpion", "https://mmsoftware100.com", 1 );
        $this->makeNews(5, "news title five", "news_five.jpg", "this is short description","this is long descritpion", "https://mmsoftware100.com", 1 );
    }


    public function makeNews($id,$title, $featured_photo_url, $short_description, $description, $url, $user_id){
        News::create([
            'id' => $id,
            'title' => $title,
            'featured_photo_url' => $featured_photo_url,
            'short_description' => $short_description,
            'description' => $description,
            'url' => $url,
            'user_id' => $user_id
        ]);
    }
```

Seeder ထဲမှာထည့်မယ့် Data လည်းပြင်ပြီးသွားပြီဆိုတော့ database ထဲကို တကယ်ထည့်ဖို့ အောက်က command ကို run မယ်။

#### Database Seeding

```bash
php artisan db:seed --class=NewsSeeder
```

#### Database Seeding Output

```logs
aungkoman@AungnoMBookpuro ecommerce % php artisan db:seed --class=NewsSeeder
Database seeding completed successfully.
aungkoman@AungnoMBookpuro ecommerce % 
```

ဆိုတော့ကာ နမူနာ Data တွေလည်း Database ထဲကို ရောက်ပြီ ဆိုတော့ လုပ်စရာ နှစ်ခု ရှိမယ်။ ဒီအတွက် CRUD API ထုတ်ဖို့နဲ့ CRUD Admin Panel ထည့်ဖို့။

လောလောဆယ် API ကို အရင်သွားမယ်။ ဒီတော့ API Controller နဲ့ API Router ထည့်ကြတာပေါ့။

### Adding API Controller

```bash
php artisan make:controller Api\\NewsApiController --model=News
```

### Adding API Controller Result

```log
aungkoman@AungnoMBookpuro ecommerce % php artisan make:controller Api\\NewsApiController --model=News
Controller created successfully.
aungkoman@AungnoMBookpuro ecommerce % 
```

Laravel ကတော့ API Controller တစ်ခုမှာ ပါမယ့် CRUD Method တွေ အကုန်ရေးပေးထားတယ်။ မသုံးတက်သေးရင် ကိုယ့်ဘာသာကိုယ် CRUD Method တွေ ရေးပေါ့။

select all က စရေးလိုက်မယ်။

```php
public function selectAll(Request $request)
    {
        // select all လုပ်ပြီး ပြန်ပေးလိုက်။
        $news = News::all();
        $responseData = array(
            'status' => true,
            'message' => "News Select Success",
            'data' => $news
        );
        return response($responseData);
    }
```

Method လည်း ကြေညာ ပြိးပြီ။ ဒီ Method ကို ခေါ်မယ့် Routing ထည့်ဖို့ ကျန်မယ်။ ```routes/api.php``` မှာ ဒီလိုထည့်မယ်။

```php
Route::prefix('v1')->group(function () {
    Route::get('/news', [NewsApiController::class, 'selectAll']);
}
```

အခုချိန် Postman ကနေ ```api/v1/news``` endpoint ကို ```GET``` request ပို့ရင် ဒါမျိုး json response ရမယ်။

```json
{
    "status": true,
    "message": "News Select Success",
    "data": [
        {
            "id": 1,
            "title": "news title one",
            "featured_photo_url": "news_one.jpg",
            "short_description": "this is short description",
            "description": "this is long descritpion",
            "url": "https://mmsoftware100.com",
            "user_id": 1,
            "created_at": "2022-11-01T10:14:11.000000Z",
            "updated_at": "2022-11-01T10:14:11.000000Z"
        },
        {
            "id": 2,
            "title": "news title two",
            "featured_photo_url": "news_two.jpg",
            "short_description": "this is short description",
            "description": "this is long descritpion",
            "url": "https://mmsoftware100.com",
            "user_id": 1,
            "created_at": "2022-11-01T10:14:11.000000Z",
            "updated_at": "2022-11-01T10:14:11.000000Z"
        },
        {
            "id": 3,
            "title": "news title three",
            "featured_photo_url": "news_three.jpg",
            "short_description": "this is short description",
            "description": "this is long descritpion",
            "url": "https://mmsoftware100.com",
            "user_id": 1,
            "created_at": "2022-11-01T10:14:11.000000Z",
            "updated_at": "2022-11-01T10:14:11.000000Z"
        },
        {
            "id": 4,
            "title": "news title four",
            "featured_photo_url": "news_four.jpg",
            "short_description": "this is short description",
            "description": "this is long descritpion",
            "url": "https://mmsoftware100.com",
            "user_id": 1,
            "created_at": "2022-11-01T10:14:11.000000Z",
            "updated_at": "2022-11-01T10:14:11.000000Z"
        },
        {
            "id": 5,
            "title": "news title five",
            "featured_photo_url": "news_five.jpg",
            "short_description": "this is short description",
            "description": "this is long descritpion",
            "url": "https://mmsoftware100.com",
            "user_id": 1,
            "created_at": "2022-11-01T10:14:11.000000Z",
            "updated_at": "2022-11-01T10:14:11.000000Z"
        }
    ]
}
```

အိုကေ Select API တော့ အိုကေသွားပြီဆိုရမယ်။ လောလောဆယ် API အပိုင်းကို ခန နားပြီး Admin Panel အပိုင်းကို ဆက်မယ်။
