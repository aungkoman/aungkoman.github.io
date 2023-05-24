---
layout: post
title:  "Laravel Resources"
date:   2023-05-24 23:20:00 +0630
categories: howto
---

Laravel မှာ Resource ဆိုတာက Model ကို Json ပြောင်းပေးတဲ့ Converter ပဲ။

ဘယ် Model အတွက်ဆိုပြီး မရှိဘူး။
ဘယ်လို JSON Structure ထွက်မယ်ဆိုတာပဲ​ရှိတယ်။


```bash
php artisan make:model CustomerInfo -mcs
php artisan make:model Invoice -mcs
php artisan make:model PackageCategory -mcs
php artisan make:model Package -mcs

php artisan make:resource UserInfoResource
php artisan make:resource InvoiceSummaryResource
php artisan make:resource InvoiceDetailResource
php artisan make:resource PackageCategoryResource
```


```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            "id" => 0,
            "username" => "username",
            "password" => "password",
            "access_token" => "accessToken",
            "account_id" => "accountId",
            "customer_name" => "customerName",
            "email_address" => "emailAddress",
            "phone_number" => "phoneNumber",
            "address" => "address",
            "invoice_no" => "invoiceNo",
            "tax" => 0,
            "discount" => 0,
            "total_amount" => 0,
            "currency" => "currency",
            "bill_no" => "billNo",
            "bill_cycle" => "billCycle",
            "bill_date" => "billDate",
            "bill_start_date" => "billStartDate",
            "bill_end_date" => "billEndDate",
            "due_date" => "dueDate",
            "total_bill_due" => 0,
            "paid_balance_amount" => 0,
            "balance_amount" => 0,
            "plan_name" => "planName",
            "plan_price" => 0
        ];
    }
}
```