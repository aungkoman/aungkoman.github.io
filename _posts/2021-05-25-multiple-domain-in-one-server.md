---
layout: post
title: How to add multiple domain in One Server?
---


1. DNS and Name Server Configuration
   Domain Name Company နဲ့ Name Server Company ကို ချိတ်ဆက်ပေးခြင်း
  https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars

2. A-Record configuration
  domain name နဲ့ ip address ကို ချိတ်ဆက်ပေးခြင်း

3. Apache Server မှာ Virtual Host ဖိုင်တစ်ခု ထည့်သွင်းခြင်း
  ဒီနေရာ ```/etc/apache2/sites-available/``` ကိုသွားပြီး ဖိုင်အသစ်တစ်ဖိုင် ဆောက်မယ်။ နာမည်ကို ကိုယ့် domain name နဲ့ .conf ပေါင်းပြီး ပေးမယ်။ ဉပမာ 
```mmsoftware100.com.conf```
```conf
<VirtualHost *:80>
        ServerAdmin admin@mmsoftware100
        ServerName mmsoftware100.com
        ServerAlias www.mmsoftware100.com
        DocumentRoot /var/www/mmsoftware100.com
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
အဓိက ပြင်ရမှာက
ServerName
ServerAlias နဲ့
DocumentRoot ပဲ။

ServerName => ကိုယ့်ရဲ့ domain name ကို ထည့်မယ် ( ဉပမာ mmsoftware100.com)
ServerAlias => ကိုယ့် domain name ရှေ့မှာ www. ထည့်မယ် ( ဉပမာ www.mmsoftware100.com)
DocumentRoot => ဒါကတော့ ကိုယ့် project file တွေထားမယ့်နေရာကိုထည့်ပေးရမှာ၊ များသောအားဖြင့် /var/www/ နေရာမှာ folder အသစ်ဆောက်ပြီး ညျွန်ပေးတာ အဆင်ပြေတယ်။ နမူနာဆိုရင် mmsoftware100.com လို့ folder တစ်ခု ဆောက်ပြီး /var/www/mmsoftware100.com လို့ ပေးလိုက်ရင် ရပြီ။

4. အသစ်ဆောက်ထားတဲ့ Virtual Host ဖိုင်က အဆင်ပြေမပြေသိဖို့ ```sudo apache2ctl configtest``` လို့ run ကြည့်လို့ရတယ်။ ပြီးရင် ဒီ Virtual Host ဖိုင်ကို enable လုပ်ဖို့အတွက်
  ```sudo a2ensite mmsoftware100.com``` လို့ရိုက်မယ် ( နောက်က .conf မပါဘူး )

5. ဒါပြီးရင်တော့ လုပ်ခဲ့သမျှ အလုပ်တွေ အကျိုးသက်ရောက်မှု ရှိဖို့အတွက် Apache Server ကို restart ချပါမယ်။
```sudo service apache2 reload```

အခုချိန် http://mmsoftware100.com ကို ဝင်ကြည့်ရင် ဘာမှ မြင်ရဉီးမှာ မဟုတ်ပါဘူး ။ ဘာဖိုင်မှ ထည့်ထားတာမှ မဟုတ်တာ 😛
ဆိုေတာ့ index.php တစ်ဖိုင်လောက် ထည့်လိုက်ကြရအောင်။

```/var/www/mmsoftware100.com/``` ကို ဝင် ၊ ```sudo nano index.php``` နဲ့ ဖိုင်အသစ်ဆောက်ပြီး <?php echo "Mm Software 100"; ?> လို့ ရေးပြီး သိမ်းထားလိုက်မယ်။
အခု ပြန်ဝင်ကြည့်ရင်တော့ Mm Software 100 လို့ မြင်နေရပြီ ဖြစ်ပါတယ်။

တစ်ခုပဲ ကျန်ပါတော့တယ်။ HTTPS ထည့်ဖို့ပါ။ ဒါကတော့ command line တစ်ကြောင်းနဲ့ ပြီးပါတယ်။ စက်ထဲမှာ certbot လည်းထည့်ထားပြီးသားဆိုတော့။
```sudo certbot --apache -d mmsoftware100.com -d www.mmsoftware100.com```

Redirect လုပ်မှာလား မလုပ်ဘူးလား 1 , 2 ရွေးခိုင်းရင် 1 / 2 ကိုယ် လုပ်စေချင်တာ ရွေးလို့ရတယ်
အိုကေ https://mmsoftware100.com လို့ ကြည့်လိုက်ရင် ssl တပ်ပြီးသား website အသစ်ချပ်ချွက်လေးကို မြင်ရမှာ ဖြစ်ပါတယ်။
အဆင်ပြေကြပါစေ။



TDL:
ပြောရင် Theory တစ်ပိုင်းပြော
Practical တစ်ပိုင်းပြောတာ ကောင်းမယ်။


