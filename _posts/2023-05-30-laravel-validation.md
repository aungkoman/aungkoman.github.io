---
layout: post
title:  "Validation in Laravel"
date:   2023-05-30 12:30:00 +0630
categories: howto
---



### ကိုယ် Validate လုပ်ချင်တဲ့ Request ကို Class တစ်ခု ဆောက်မယ်။

```bash
php artisan make:request LoginRequest
```

/app/http/request မှာ ဖိုင်အသစ်ရောက်လာမယ်။

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // for this request validation I don’t need to authorised user so I remove “authorize()” function from the file.
    /*
    public function authorize()
    {
        return false;
    }
    */

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // Rule တွေ Add
        return [
            'email' => 'required|email|exists:users,email|max:50',
            'password' => 'required|min:6'
        ];
    }

    // Failed ခဲ့ရင် ဘာလုပ်ရမယ်ဆိုတဲ့ function ထည့်
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }

}

```


သက်ဆိုင်ရာ Controller မှာ ဒီ Request ကို import လုပ်။

```php
use App\Http\Requests\LoginRequest;
```

Ref;
https://medium.com/@sgandhi132/how-to-validate-an-api-request-in-laravel-35b46470ba88
