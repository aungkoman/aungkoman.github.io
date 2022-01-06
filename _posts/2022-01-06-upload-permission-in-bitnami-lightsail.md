---
layout: post
title: Upload Permission in Bitanmi Lightsail
description: Linux Permission Issue 
image: ../images/fcc/kfc.jpg
---

နှစ်ခုတည်းနဲ့ အဆင်ပြေသွားပြီး

upload folder အပေါ်မှာ 
ပထမတစ်ခု - user bitnami ကို group daemon ထဲ ထည့်ပေးတယ်။
```
sudo chown -R bitnami:daemon upload
```

ဒုတိယ တစ်ခု - ဒီ user ကို 775 permission ပေးလိုက်တယ်။
```
sudo chmod -R 775 upload
```

အဆင်ပြေသွားရော။