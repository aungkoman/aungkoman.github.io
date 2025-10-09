---
layout: post
title: "Laravel Telescope"
date: 2025-09-24
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---
React မှာ Form တစ်ခုဆောက်မယ်။

ဘာတွေ သိဖို့လိုမလဲ?



## Listing to Detail 


row မှာ detail route အတွက် link ကိုထည့်ပါ။

```js
  const handleViewDetails = useCallback((customerId) => {
    router.push(`/dashboard/borrower/${customerId}`);
  }, [router]);
```

router က ဘယ်ကယူသုံးထားတာလဲ?


Next.js က ပါတဲ့ `useRouter` ကိုသုံးပါတယ်။

```js
import { useRouter, useSearchParams } from 'next/navigation';

const router = useRouter();
```

hard routing အစား path.borrower.detail ဒါမျိုး သွားနိင်မလား ကြည့်ရမယ်။

ပြဿနာက variable ကို မသိတာပဲ။
data type နဲ့ value ကို မျက်ခြေမပြတ် သိမှ ရမယ်။

မသိတာတွေ တော်တော်များတာပဲ။

404 ပြတာကို exception တောင် မတက်ပဲ app တစ်ခုလုံး crush ဖြစ်သွားတာမျိုး။ ဘာလို့ပါလိမ့်။

ဘာမှ မဟုတ်ဘူး။ Hot Reload ကို မယုံရတာ။
Hot Reload ကြောင့် ကိုယ့်ကိုယ်ကို ယုံကြည်မှုတွေပါ ပျောက်ဉီးမယ်။

JS မှာ ဆက်အလုပ်လုပ်ရင် အသက်တိုနိုင်တယ်။

Type စနစ်နဲ့မှ ခေါင်းစားသက်သာမယ်။

စိတ်ထင်တိုင်းမဖြစ်တော့ပြီးလား?
Restart  ချလိုက်ပါ။
