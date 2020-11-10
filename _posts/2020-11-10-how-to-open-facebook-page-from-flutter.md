---
layout: post
title: How to open facebook page from Flutter
---

Flutter App ကနေ Facebook Page တစ်ခုကို လှမ်းဖွင့်ချင်တဲ့အခါ
 
 Url Launcher ထည့်ပါမယ်။

> url_launcher: ^5.7.10
 
 ခေါ်ပုံခေါ်နည်းက 

```dart
  void _openFacebook() async{
    /* numeric value ကို https://lookup-id.com/ မှာ ရှာပါ */
    String fbProtocolUrl = "fb://page/110486103786309";
    String fallbackUrl = "https://www.facebook.com/mmsoftware100";
    try {
      bool launched = await launch(fbProtocolUrl, forceSafariVC: false);
      print("launching..."+fbProtocolUrl);
      if (!launched) {
        print("can't launch");
        await launch(fallbackUrl, forceSafariVC: false);
      }
    } catch (e) {
      print("can't launch exp "+e.toString());
      await launch(fallbackUrl, forceSafariVC: false);
    }
  }
}
```
> facebook page/ profile id ကို https://lookup-id.com မှာ ရှာလို့ရပါတယ်။




