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

