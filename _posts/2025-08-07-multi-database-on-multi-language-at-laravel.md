---
layout: post
title: "Setting up multiple database for multiple language in Laravel"
date: 2025-08-07
categories: life-lessons
author: Cisco
tags: [life] # TAG names should always be lowercase
---

/en -> en_database
/mm -> mm_database

ဒါမျိုး သုံး‌စ‌ချင်တာ

### အဆင့်(၁) ။ main database မှာ tenants ဆိုပြီး migration တိုးမယ်။

```bash
php artisan make:model Tenant -mcs
```

```php
Schema::create('tenants', function (Blueprint $table) {
    $table->id();
    $table->string('code')->unique(); // e.g. 'en', 'mm'
    $table->string('database');      // DB name
    $table->timestamps();
});
```

Seeder မှာက ဒါမျိုး ဖြစ်မယ်။

```php
DB::table('tenants')->insert([
    ['code' => 'en', 'database' => 'english_db'],
    ['code' => 'mm', 'database' => 'myanmar_db'],
]);
```

တစ်ခုပဲ
database name တွေကို env file က ယူလိုက်တာ ပိုအဆင်ပြေမယ်။

### အဆင့် (၂) ။ Routing တွေ ပြင်မယ်။

```php
Route::prefix('{locale}')->group(function () {
    Route::get('/', function ($locale) {
        return "Welcome to {$locale} site!";
    });

    Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index']);
});
```

*** This will allow /en/dashboard and /mm/dashboard. ***

အခုထိ ဘာမှ ထွေထွေထူးထူးပြောင်းတာ မရှိသေးဘူး။ 
Migration နဲ့ Routing ပဲ ရှိဉီးမယ်။

### အဆင့် (၃) ။ Middleware to Switch Database

database တွေ ပြောင်းဖို့ middleware တစ်ခု ထည့်မယ်။

```bash
php artisan make:middleware TenantDatabaseByLocale
```
```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
use App\Models\Tenant;

class TenantDatabaseByLocale
{
    public function handle($request, Closure $next)
    {
        $locale = $request->route('locale'); // 'en' or 'mm'

        $tenant = Tenant::where('code', $locale)->first();

        if ($tenant) {
            config(['database.connections.tenant' => [
                'driver'    => 'mysql',
                'host'      => env('DB_HOST', '127.0.0.1'),
                'port'      => env('DB_PORT', '3306'),
                'database'  => $tenant->database,
                'username'  => env('DB_USERNAME', 'root'),
                'password'  => env('DB_PASSWORD', ''),
                'charset'   => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
                'prefix'    => '',
                'strict'    => true,
                'engine'    => null,
            ]]);

            DB::setDefaultConnection('tenant');
        }

        return $next($request);
    }
}
```
middleware ကြေညာပြီးပြီဆိုတော့ register လုပ်ကြမယ်။


In app/Http/Kernel.php:

```php
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\TenantDatabaseByLocale::class,
        // other middlewares...
    ],
];
```

ဒါဆို web.php က routes ‌‌တွေ အကုန် ဒီ middleware ကို ဖြတ်ကြလိမ့်မယ်။

Yes, the `web` middleware group you've defined will be applied to all routes that are registered within the `routes/web.php` file by default in Laravel.

Here's how it works:

1. In Laravel, routes defined in `routes/web.php` automatically use the `web` middleware group (this is configured in your `App\Providers\RouteServiceProvider`).

2. Any middleware listed in the `web` group (including your `TenantDatabaseByLocale` middleware) will run for these routes in the order they're defined.

3. The `web` middleware group typically includes middleware for sessions, CSRF protection, etc., in addition to your custom middleware.

If you want to exclude certain routes from this middleware, you would need to:
- Either define them in a different routes file (like `routes/api.php`)
- Or explicitly remove the middleware when defining the route

Example of a route that wouldn't use this middleware:
```php
// In routes/api.php
Route::get('/example', function () {
    // This won't use the 'web' middleware group
});
```

The middleware will execute on every HTTP request that goes through routes in the web group, before your controller method is called.


### အဆင့် (၄) ။ Model တွေကို ဒီ အသစ်လုပ်ထားတဲ့ database connection သုံးဖို့ ပြောရမယ်။


```php
class Post extends Model
{
    protected $connection = 'tenant';
}
```

ဒါဆို ပုံမှန် project တွေအတွက် အဆင်ပြေပြီ။



### Filament အတွက်ဆိုရင်

If you want Filament to also work with /en/admin and /mm/admin:

Prefix Filament routes with {locale}

Add the same middleware to Filament’s route group (in PanelServiceProvider or RouteServiceProvider).




### End of Article
--
improvement and testing လိုအပ်မယ်။
