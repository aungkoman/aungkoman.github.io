---
layout: post
title:  "ရမ်းရေး မှန်းရေးရင်း အလှမ်းဝေးခဲ့ရသော..."
date:   2023-05-24 10:20:00 +0630
categories: howto
---
ကုတ်ရေးတဲ့အချိန် ပြဿနာ တစ်ခုက 
ကိုယ်ရေးတဲ့ဟာက အလုပ်လုပ်လား မလုပ်လား သေချာမသိပဲ အကုန်ကူးထည့်တာပဲ။

အခု Http Request တစ်ခုကနေ Integer တစ်ခု စစ်ယူဖို့ရှိတယ်။
ဘာသုံးရမလဲ မသိဘူး။
Sanitize လား Filter လား
ဘယ်ဟာက ဘယ်လိုအလုပ်လုပ်လဲဆိုတာ မသိဘူး။
ဒီလိုပဲ​ ရမ်းရေး မှန်းရေးရင်းနဲ့ ရွေပြည်တော်ဆိုတာ အလှမ်းဝေးရချေဉီးမယ် တမုံ့။

```php
// TODO : need to validate input
$invoice_id = $request->input('invoice_id',0);
$invoice_id = filter_var($invoice_id, FILTER_SANITIZE_NUMBER_INT);
```


### Refrence 
PHP FILTER_SANITIZE_NUMBER_INT Filter
Definition and Usage
The FILTER_SANITIZE_NUMBER_INT filter removes all illegal characters from a number.

This filter allows digits and . + -

Name: "number_int"
ID-number: 519
Example
<?php
$number="5-2+3pp";

var_dump(filter_var($number, FILTER_SANITIZE_NUMBER_INT));
?>
The output of the code will be:

string(5) "5-2+3"

https://www.w3schools.com/php/filter_sanitize_number_int.asp