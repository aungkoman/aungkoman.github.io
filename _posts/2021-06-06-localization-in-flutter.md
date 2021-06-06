---
layout: post
title: Localization in Flutter
---

Multi Language in Flutter 

မြန်မာ ဘာသာစကားတစ်ခုတည်းနဲ့ ထုတ်လို့မရတဲ့ Mobile Appတစ်ခု ရေးရတဲ့အခါ localization ခေါ်တဲ့ ဘာသာစကားမျိုးစုံအတွက် ထောက်ပံ့ပေးတဲ့ feature တွေ ရေးပေးဖို့ လိုလာတယ်။

Flutter မှာက Localization အတွက် default ထောက်ပံ့ထားပေးတာရှိပေမယ့် ဖတ်ရတာ စိတ်ရှုပ်တာနဲ့ အလွယ်ရတဲ့ easy_localization package ကိုသုံးလိုက်တယ်။ သူက တော်တ်ောလေးကို အဆင်ပြေတယ်။ လုပ်ရတဲ့အလုပ်က

### Step 1.
```en.json```
```json
{
    "greeting": "Hello English",
}
```
```mm.json```
```json
{
    "greeting": "မင်္ဂလာပါ မြန်မာ",
}
```
စသည်ဖြင့် ကိုယ် ထောက်ပံ့မယ့် ဘာသာစကား json file တွေကို assets folder (ဉပမာ ။ ```assets/translations```) ထဲသွားထည့်ထား။

### Step 2.
ကိုယ့်ရဲ့ widget tree ထပ်ဆုံးမှာ EasyLocalization() widget ကို တင်ထားမယ်။
ကျွန်တော် က Bloc သုံးတာဆိုတော့ Bloc Provider အောက် ကပ်ရပ်မှာ ထည့်ထားလိုက်တယ်။
```dart

void main() async{
  WidgetsFlutterBinding.ensureInitialized();
  runApp(
      BlocProvider(
          create: (context) => sl<IbaydinBloc>(),
          //child:  MyApp()
          child: EasyLocalization(
            supportedLocales: [Locale('en'), Locale('my')],
            path: 'assets/translations', // <-- change the path of the translation files
            fallbackLocale: Locale('en', 'US'),
            child: MyApp()
          ),
      ));
}
```
### Step 3.
ဘာသာပြန်ချင်တဲ့ String / Text Widget နောက်မှာ .tr() method ခေါ် ပေးရုံပဲ။
```dart
import 'package:easy_localization/easy_localization.dart';
Text('greeting').tr(); // widget
"greeting".tr(); // String
```
Device Setting အပေါ် မူတည်ပြီး language ပြောင်းတာတွေ ဘာတွေကို မူရင်း flutter package documentation https://pub.dev/packages/easy_localization မှာ သွားဖတ်နိုင်ပါတယ်။

တစ်ခြား သုံးလို့ အဆင်ပြေတဲ့ Localization Package တွေရှိရင်လည်း မျှဝေခဲ့ကြပါဉီးဗျို့။
