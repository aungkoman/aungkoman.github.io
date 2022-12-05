---
layout: post
title: Laravel Cheat Sheet
---
## Laravel Cheat Sheet

### Add Model , Migration and Seeder

```bash
php artisan make:model News -msc
```

- m means Migration
- s means Seeder
- c means Controller

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

ထုံးစံအတိုင်း News Admin Panel အတွက် Controller တစ်ခု ဆောက်မယ်။

```bash
php artisan make:controller NewsController --model=News
```

#### Model Generation Result

```bash
aungkoman@AungnoMBookpuro ecommerce % php artisan make:controller NewsController --model=News
Controller created successfully.
aungkoman@AungnoMBookpuro ecommerce % 
```

```app/Http/Controllers/``` folder ထဲမှာ ```NewsController``` ဆိုပြီး ဖိုင်တစ်ဖိုင်ရောက်လာမယ်။ လိုအပ်တဲ့ method တွေလည်း ရေးထားပြီးသား။

ဒီ methods တွေထဲကမှာ သက်ဆိုင်ရာ View ကို render လုပ်ပေးဖို့ လိုမယ်။ ဒီတော့ ```resources/views/``` folder မှာ ```news``` ဆိုပြီး folder တစ်ခုဆောက်ပြီး news နဲ့ ပတ်သက်တဲ့ view ( blade template file ) တွေ စုရေးထားမယ်။ အဓိကတော့ Form နဲ့ Table ပါပဲ။

data တွေ တန်းစီပြဖို့အတွက် ```index.blade.php``` ဆိုပြီး တစ်ဖိုင်ဆောက်မယ်။ သူ့က List News လိုမယ်။ ဒါတွေကို table ပုံစံနဲ့ ပြမယ်။

```html
<table>
  <thead>
    <tr>
      <th>No</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```

ဒီထဲကို model တွေ inject လုပ်မယ်။

```php
@foreach ($newsList as $news)
    <tr>
            <td>{{ $news->id }}</td>
            <td>{{ $news->title }}</td>
    </tr>
@endforeach
```

data ကို ပြပေးမယ့် view လည်း ရေးပြိးသွာပြီ။ controller က data ယူပြီး view ကို pass ပေးဖို့ပဲ ကျန်မယ်။ ဒါမျိုး index method ကို သွားပြင်လိုက်မယ်။

```php
public function index()
{
    $newsList = News::all();
    //return view('news.index', compact('newsList'));
    return view('news.index', ['newsList' => $newsList]);
}
```

controller နဲ့ view အပိုင်းကတော့ အိုကေသွားပြီ ဒီ controller method ကို ခေါ်မယ့် routing အပိုင်း ဆက်ထည့်လိုက်မယ်။ ```routes/web.php``` မှာ routing တစ်ခု သွားတိုးမယ်။

```php
Route::get('/news', [NewsController::class, 'index']);
// for complete routing
// Route::resource('news', NewsController::class);
```

အခုချိန် ```/news``` endpoint ကို brower မှာ ကြည့်ရင် နမူနာ ထည့်ထားတဲ့ သတင်း (၅) ခုကို တွေ့နေရပါပြီ။

### Create , Update and Delete

အသစ်ထည့်တာ၊ ပြင်တာ ဖျတ်တာ တွေ လုပ်နိုင်ဖို့ အခု UI မှာ ဆက်ထည့်မယ်။ လောလောဆယ် ဒီအတွက် View တွေ အရင် ဖန်တီးလိုက်ကြအောင်။

#### New Form

news view folder ထဲမှာ ```create.blade.php`` ဆိုပြီး ဖိုင်အသစ်ဆောက်ပြီး ဖောင်တစ်ခု ရေးမယ်။

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
```

လိုမှာက Route Name , Method , CSRF
Router မှာ create route သွားထည့်မယ်။

```php
Route::get('/news', [NewsController::class, 'index'])->name('news');
Route::get('/news/create', [NewsController::class, 'create'])->name('news_create');
Route::post('/news', [NewsController::class, 'store'])->name('news_store');
```

ဖောင်အတွက် route တစ်ခုပါ ထည့်ပြီးသွားပြီ။ index မှာ ဒါမျိုး Link သွားထည့်ထားမယ်။

```php
<a href="{{ route('news_create') }}"> Create News</a>
                
```

router ကိုရောက်ရင် ခေါ်မယ့် controller method မှာလည်း သွားပြင်ထားမယ်။

```php
public function create()
{
    return view('news.create');
}
```

ဒီတော့ ```/news/create``` endpoint ကို broswer က ဝင်ကြည့်ရင် ဖောင် စမြင်ရပြီ။
ဖောင်ထဲမှာ လိုအပ်တဲ့ ဟာတွေကို
ဒီလို ပြန်ပြင်ရေးလိုက်မယ်။

```html
    <form action="{{ route('news_store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title" value="title" placeholder="Enter Title" required><br>

            <label for="featured_photo_url">Featured Photo URL:</label><br>
            <input type="text" id="featured_photo_url" name="featured_photo_url" value="featured_photo_url"><br>

            <label for="short_description">Short Description</label><br>
            <input type="text" id="short_description" name="short_description" value="short_description"><br>

            <label for="description">Description</label><br>
            <input type="text" id="description" name="description" value="description"><br>

            <label for="url">Description</label><br>
            <input type="text" id="url" name="url" value="url"><br>
            
            
            <br>

            <input type="submit" value="Submit">
    </form> 
```

အိုကေ ဖောင်ကတော့ data အပြည့်နဲံ ထည့်ဖို့ အဆင်သင့်ဖြစ်နေပြီ။ router မှာလည်း controller ကို ခေါ်ထားပြီးပြီ။ controller မှာပဲ request က data ကိုယူပြီး db ထဲကို ထည့်ဖို့ ကျန်တော့မယ်။

news controller ရဲ့ store method မှာ validation နဲ့ model create method တွေ ခေါ်မယ်။

```php
public function store(Request $request)
{
        $request->validate([
            'title' => 'required',
            'featured_photo_url' => 'required',
            'short_description' => 'required',
            'description' => 'required',
            'url' => 'required',
        ]);

        $data = $request->post();
        $data["user_id"] = 1; // TODO: get auth user id
        
        News::create($data);
        // Company::create($request->post());

        return redirect()->route('news')->with('success','Company has been created successfully.');
}
```

ဒီမှာ ပြဿနာ တက်တယ်။

```logs
Add [_token] to fillable property to allow mass assignment on [App\Models\News].
```

Model ရဲ့ fields တွေကို တိုက်ရိုက် အဖြည့်မခံတဲ့ သဘော။ ဒီတော့ model မှာ ဒါမျိုး သွားပြင်မယ်။

```php
class News extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'featured_photo_url', 'short_description', 'description', 'url', 'user_id'];
}
```

အိုကေ Create အထိ အိုကေသွားပြီ။ Update နဲ့ Delete ကျန်မယ်။

တစ်ခုခု လုပ်တော့မယ် ဆိုရင်
ဘယ်ကစလဲ

Model ကတော့ ရေးရမယ်။

ပြီးရင် controller မှာ methods တွေ ထည့်မယ်။

ဒါပြီးရင် router တွေ ရေးမယ်။

နောက်ဆုံးတော့ view ပေါ့။

အဲ့မှာ view ကို ပေးရမယ့် data တွေ အတွက် controller method ကို implement လုပ်။

နောက် view က နေ ရမယ့် data တွေအတွက် router နဲ့ controller တွေကို ပြန်ညိှ။

အိုကေ အခု Update Form လုပ်ရမယ်။ ဘယ်က စကြမလဲ?

လောလောဆယ် edit form ကို သွားမယ့် edit route အရင် စသတ်မှတ်မယ်။

### Side Note about Roure::Resource

A RESTful resource controller sets up some default routes for you and even names them.

```php
Route::resource('users', 'UsersController');
```

Gives you these named routes:

Verb          Path                        Action  Route Name
GET           /users                      index   users.index
GET           /users/create               create  users.create
POST          /users                      store   users.store
GET           /users/{user}               show    users.show
GET           /users/{user}/edit          edit    users.edit
PUT|PATCH     /users/{user}               update  users.update
DELETE        /users/{user}               destroy users.destroy

view အရင်ရေးလိုက်ကြရအောင်။

### Refrence List

<https://techvblogs.com/blog/laravel-9-crud-application-tutorial-with-example>
