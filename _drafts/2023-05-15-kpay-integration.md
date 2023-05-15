---
layout: post
title:  "kpay integration"
date:   2023-05-15 16:15:00 +0630
categories: youdontkonw
---

Documentation အပြည့်အစုံကို ဒီမှာ ဖတ်နိုင်မယ်။

https://wap.kbzpay.com/pgw/uat/api/#/en/docs/PWA/scenes-PWA-en


## Business ကိစ္စ ဘဏ်နဲ့ စာချူပ်ချူပ်။

## IT TEAM က လိုတဲ့  ဒေတာ တောင်း

Merchant	Description	UAT 
Merchant system IP	The IP Address of Merchant Server	Fill
Merchant Code	Assigned by KBZPay before integration	
Merchant Name	Name will be shown on APP when input PIN as “Pay to XXX” in the screen	Fill
Organization Name	Portal Organization/Company Name 	Fill
App ID	Assigned by KBZPay before integration	
App Key	Assigned by KBZPay before integration	
Precreat Url	The Url is for creating an advance transaction in KBZPay payment service backend	
notify_url	The Url is for receiving KBZPay payment notifications if payment is successful.	Fill
Org Portal Url and User Name	 Please provide User Name used to login to Org Portal	
	Receive initial password of org portal login	
Phone No.	Receive initial password of org portal login	Fill
Payment way	Please choose from   PWAAPP, PAY_BY_QRCODE, APP	Fill
Referer Url (only PWAAPP)	Referer Url is the merchant source url from which redirect to PWA url.	Fill
Return Url (only PWAAPP)	Return url is used to display the merchant's success page.	Fill


## KBZ IT Team က UAT အတွက် စမ်းလို့ရမယ့် Credential တွေပေး။

I would like to share integration keys and portal user guide for UAT environment.You can start integration.If you have questions please let us know.
Please use this data for portal login.
Portal URL Link :https://159.138.20.58:31002/payment/orglogin.action
Shortcode : 200280
Username : 200280
Initial Password was received by this phone number : 9963170133

PASSWORD က ကိုယ့်ဖုန်းကို KBZUAT ဆိုပြီး စာပို့လာတယ်။

7K*82732



### လိုအပ်တဲ့ ဖိုင်များ


1. user.html

အော်ဒါတင်မယ့် HTML Page

2. server.php

html page က တင်တဲ့အော်ဒါကို kbz bakend ကို ခေါ်မယ်။
ရလာတဲ့ link ကို html page ကို ပြန်ပေးမယ်။

3. call back က ရလာသမှျကို json file အသစ်မှာ write မယ်။


## Documenation 


https://wap.kbzpay.com/pgw/uat/api/#/en/docs/PWA/api-precreate-en


http://api.kbzpay.com/payment/gateway/uat/precreate

ဒီမှာ Order Create လုပ်မယ်။

Postman မှာ အရင် လုပ်ကြည့်ရမယ်။


```json
{
  "Request": {
    "timestamp": "1535166225",
    "method": "kbz.payment.precreate",
    "notify_url": "http://xxxxxx",
    "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
    "sign_type": "SHA256",
    "sign": "768E0C18F7FF0450B6A652000068980335E5DD1067FD276994116E6799EE9FCC",
    "version": "1.0",
    "biz_content": {
      "merch_order_id": "0101234123456789012",
      "merch_code": "09991234567",
      "appid": "kp1234567890987654321aabbccddeef ",
      "trade_type": "PWAAPP",
      "title": "iPhoneX",
      "total_amount": "5000000",
      "trans_currency": "MMK",
      "timeout_express": "100m",
      "callback_info": "title%3diphonex"
    }
  }
}
```

```json
{
  "Response": {
    "result": "SUCCESS",
    "code": "0",
    "msg": "success",
    "prepay_id": "KBZ0088e60aae01db4735cbd781c9c8270594124720161",
    "merch_order_id": "0101234123456789012",
    "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
    "sign_type": "SHA256",
    "sign": "768E0C18F7FF0450B6A652000068980335E5DD1067FD276994116E6799EE9FCC"
  }
}
```

Common request parameters
Parameter	Type	Required	Example	Description
timestamp	String(13)	Yes	1563161657	Time when a request is sent. UTC timestamp. The unit is second.

notify_url	String(512)	Yes	http://test.payment.com/notify	Specifies the callback address for receiving KBZPay payment notifications if payment is successful.

method	String	Yes	kbz.payment.precreate	Set to ‘kbz.payment.precreate’, fixed for this interface

nonce_str	String(32)	Yes	5K8264ILTKCH16CQ2502SI8ZNMTM67VS	Random character string containing a maximum of 32 characters, including uppercase letters, lowercase letters, digits, but not special characters.

sign_type	String	Yes	SHA256	Signature type. Currently, only SHA256 is supported.

sign	String	Yes	F957B724D1E3704E90BA801BC6CB6DF4FA0898EBF94C67710CB71ABF40BFF8A1	Request signature. For more information, see Section 1.3.1 Signature Algorithm

version	String(64)	Yes	1.0	Interface version number. Only support 1.0 now

biz_content	String			Service parameter set. For detail, see below table.


## အဓိက API တစ်ခုပဲ​လိုမယ်။

KBZ Backend ကို Order Create လုပ်ပြီး PWA Link Generate လုပ်တဲ့ API

ပို့တာနဲ့ ရတာက ဒါတွေ



```json
{
  "Request": {
    "timestamp": "1535166225",
    "method": "kbz.payment.precreate",
    "notify_url": "http://xxxxxx",
    "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
    "sign_type": "SHA256",
    "sign": "768E0C18F7FF0450B6A652000068980335E5DD1067FD276994116E6799EE9FCC",
    "version": "1.0",
    "biz_content": {
      "merch_order_id": "0101234123456789012",
      "merch_code": "09991234567",
      "appid": "kp1234567890987654321aabbccddeef ",
      "trade_type": "PWAAPP",
      "title": "iPhoneX",
      "total_amount": "5000000",
      "trans_currency": "MMK",
      "timeout_express": "100m",
      "callback_info": "title%3diphonex"
    }
  }
}
```

```json
{
  "Response": {
    "result": "SUCCESS",
    "code": "0",
    "msg": "success",
    "prepay_id": "KBZ0088e60aae01db4735cbd781c9c8270594124720161",
    "merch_order_id": "0101234123456789012",
    "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
    "sign_type": "SHA256",
    "sign": "768E0C18F7FF0450B6A652000068980335E5DD1067FD276994116E6799EE9FCC"
  }
}
```

တစ်ခုပဲ​ server ကနေ ခေါ် မှ ရမယ်။

ဘယ်လို ဖွဲံစည်းထားမလဲ?


get request ပဲ​ထားမလား?​

ကိုယ့် link ကနေလည်း လာရမှာ ဆိုတော့။



user.php -> server.php -> kbz backend -> server.php ကနေ url ပြန်ပို့ပေး။

KBZ Pay Middlepage ကို သွားနိုင်မယ့် အခြေအနေ။


အိုကေ အပေါ်က Request နဲ့ Response ကတော့ အိုကေသွားပြီ။

production server ပေါ် တင်ပြီး စမ်းကြည့်ရမယ်။

// TODO:
လိုတာကတော့ Random String ထုတ်ဖို့ပဲ။

အခုတော့ local server မှာ မို့ un authenticated ပြနေတယ်။


