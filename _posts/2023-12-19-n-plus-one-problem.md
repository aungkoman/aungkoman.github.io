---
layout: post
title:  "N+1 Problem in ORM"
date:   2023-12-19 13:30:00 +0630
categories: howto
---
## N+1 Problem

Database Performace နဲ့ ပက်သက်လာရင် ORM(object-relational mapping) တွေမှာ ကြုံနေကျ ပြဿနာ တစ်ခုရှိတယ်။ နမူနာ အနေနဲ့ Laravel မှာ Post နဲ့ Comment တွေကို ဖော်ပြပေးတဲ့ နေရာကို ကြည့်ကြည့်ရအောင်။

```php
// Controller မှာ ဒါမျိုး ရေးထားမယ်။

$posts = Post::all();
```

```php
// View မှာ ဒါမျိုး ရေးမယ်။
@foreach ($posts as $post)
    <h2>{{ $post->title }}</h2>

    <!-- N+1 problem: fetching comments for each post individually -->
    @foreach ($post->comments as $comment)
        <p>{{ $comment->body }}</p>
    @endforeach
@endforeach
```

ဒီအတွက် စုစုပေါင်း Query ဘယ်နှစ်ခု run ရမယ် ထင်လဲ?

Post စုစုပေါင်း အရေအတွက် + ၁

ဆိုလိုတာက Post  (၁၀)ခု ရှိရင် Query (၁၁) ကြောင်း run ရမယ်။

```sql
SELECT * FROM posts;
SELECT * FROM comments WHERE post_id = 1;
SELECT * FROM comments WHERE post_id = 2;
.
.
.
SELECT * FROM comments WHERE post_id = 10;
```

ဒါမျိုး။

အမှန်ကတော့ (၁) ကြောင်းတည်းနဲ့ ကိစ္စပြတ်သင့်တာ။ ORM  တိုင်းမှာ N+1 အတွက် ဖြေရှင်းနည်းတွေရှိပြီး Laravel ရဲ့ Eloquent ORM မှာတော့ ဒါမျိုး ရှင်းလို့ရတယ်။

Controller ကို ဒါမျိုးပြင်ရေးလိုက်မယ်။

```php
// with keyword သုံးပြီး N+1 ပြဿနာကို ဖြေရှင်း
$posts = Post::with('comments')->get();
```

```php
// View မှာ ဒါမျိုး ရေးမယ်။
@foreach ($posts as $post)
    <h2>{{ $post->title }}</h2>

    <!-- N+1 problem: fetching comments for each post individually -->
    @foreach ($post->comments as $comment)
        <p>{{ $comment->body }}</p>
    @endforeach
@endforeach
```

N+1 Problem Solved!
