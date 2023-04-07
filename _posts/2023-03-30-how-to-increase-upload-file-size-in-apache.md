---
layout: post
title: How to increase upload file size in apache?
---



Increase PHP upload file size


လက်ရှိ ဆာဗာက သုံးေနတဲ့ PHP version ကို 
<?php
phpinfo();
?>

ဒီဖိုင်မှာ သွားကြည့်။

Loaded Configuration File	/etc/php/8.0/fpm/php.ini

ဒါဆို ပြင်ရမယ့် ဖိုင်ကိုသိရပြီ။

sudo nano /etc/php/8.0/fpm/php.ini

Nano editor နဲ့ ပွင့်လာပြီဆိုရင် ရှာဖို့အတွက် Ctrl+w ကို နှိပ်။

ပြင်ရမှာက ဒီ (၂)​ေကြာင်း။

; Maximum allowed size for uploaded files.
upload_max_filesize = 40M

; Must be greater than or equal to upload_max_filesize
post_max_size = 40M

Ctrl+w ကို နှိပ်လိုက်ရင် search လုပ်မယ့် keyword ရိုက်ခိုင်းလိမ့်မယ်။
upload_max_filesize လို့ ရိုက်ပြီး Enter နှိပ်။

အဲ့စာေကြာင်းကို တန်းေရာက်သွားလိမ့်မယ်။

Default က 2M လို့ ဖြစ်ေကာင်းဖြစ်ေနလိမ့်မယ်။

80M ေပါ့ ကိုယ်လိုချင်သေလာက် ေပြာင်း

Ctrl+x ကို နှိပ်ပြီး Save 

ပြီးရင် sudo nano /etc/php/8.0/fpm/php.ini နဲ့ post_max_size ကိုလည်း ဆက်ပြင်မယ်။

နှစ်ေကြာင်းလံုး ပြင်ပြီးရင် 



sudo service apache2 restart

Apache ကို Restart ချ 
 
