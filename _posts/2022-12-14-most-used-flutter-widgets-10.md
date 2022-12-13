---
layout: post
title: အသုံးအများဆုံး Flutter Widget (၁၀) ခု
---
# What's widget in Flutter?

## အသုံးအများဆုံး Flutter Widget (၁၀) ခု

### MaterialApp

ဒါကတော့ Google က ထုတ်တဲ့ Material UI ဆိုတဲ့ UI Framework ကို သုံးမယ်ဆိုရင် မဖြစ်မနေ သုံးရမယ့် Widget ပါ။ iOS အထူးပြု UI တွေ သုံးမယ်ဆိုရင်တော့ Capachino ဆိုတဲ့ Widget ရှိပါတယ်။ လောလောဆယ်တော့ လူသုံးများတဲ့ Material UI နဲ့ သွားပါမယ်။

ဆိုတော့ကာ ကိုယ့် App ရဲ့ root widget ကို MaterialApp လို့ ဒီလို ရေးပါမယ်။
```dart
void main(){
    runApp(
        MaterialApp(),
    );
}
```

MaterialApp မှာ ကိုယ့် App ရဲ့ home screen ကို သတ်မှတ်ချင်ရင် ```home``` ဆိုတဲ့ property ရှိပါတယ်။ 
```dart
void main(){
    runApp(
        MaterialApp(
            home: Text("Hell World")
        ),
    );
}
```

### Text

စာ ပြချင်ရင်တော့ ```Text``` Widget ကို သုံးနိုင်ပါတယ်။ ဉပမာ Hello World လို့ ကိုယ့် App မှာ ပေါ်စေချင်ရင် 

```dart
Text("Hello World")
```
```dart
void main(){
    runApp(
        MaterialApp(
            home: Text("Hell World")
        ),
    );
}
```

### Image

ပုံတွေ ပြဖို့အတွက် ```Image``` Widget ကို သုံးနိုင်ပါတယ်။ အင်တာနက်ပေါ်က ပုံတွေကို ပြနိုင်သလို local မှာ သိမ်းထားတဲ့ ပုံတွေကိုလည်း ပြနိုင်ပါတယ်။
```dart
Image(
    image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png")
)
```
```dart
Image(
    image: AssetImage("assets/images/flutter-logo.png")
)
```
```dart
void main(){
    runApp(
        MaterialApp(
            home: Image(
                image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png")
            ),
        ),
    );
}
```

### Center
ဒါကတော့ Layout Widget တစ်ခုဖြစ်ပါတယ်။ Widget တစ်ခု ကို အလယ်မှာ နေရာချထားချင်တယ်ဆိုရင် ```Center``` Widget ကိုသုံးနိုင်ပါတယ်။
```dart
Center(
    child: Text("Hello World")
)
```
```dart
void main(){
    runApp(
        MaterialApp(
            home: Center(
                child: Text("Hello World")
            ),
        ),
    );
}
```

### Scaffold

အခုထိ သုံးခဲ့သမျှ Widget တွေဖြစ်တဲ့ Text, Image, တွေဟာ ကြည့်ရဆိုးနေတယ်လို့ ထင်နေသလား? ```Scaffold``` Widget သုံးလိုက်ပါ။ Scaffold ဆိုတာကတော့  App Bar, Body , Navigation Drawer နဲ့ Floating Action Button အပါအဝင် Mobile App Screen တစ်ခုမှာ ရှိသင့်ရှိထိုက်တဲ့ အင်္ဂါရပ်တွေ အစုံအလင် ထောက်ပံ့ပေးထားတဲ့ Widget တစ်ခုဖြစ်ပါတယ်။

```dart
Scaffold(
    appBar: AppBar(
        title: Text("Hello App Bar"),
    ),
    body: Center(
        child: Text("Hello Body")
    ),
)
```
```dart
void main(){
    runApp(
        MaterialApp(
            home: Scaffold(
                appBar: AppBar(
                    title: Text("Hello App Bar"),
                ),
                body: Center(
                    child: Text("Hello Body")
                ),
            )
        ),
    );
}
```

ကြည့်ပျော် ရှုပျော် App တစ်ခု ရလာမယ်လို့ မျှော်လင့်ပါတယ်။

ဒီအထိ ရောက်လာပြီဆိုရင် Widget အကြောင်း နည်းနည်းသဘောပေါက်လာပြီလို့ ထင်ပါတယ်။ အဲ့ဒီတော့ Widet အသစ်တွေ အကြောင်း မပြောခင်် Widget ဆိုတာ ဘာလဲ ဘယ်လဲ ဆိုတာ နည်းနည်း ပြန်ဆွေးနွေးလိုက်ကြရအောင်။

Flutter မှာ Widget သည်သာ အရာရာပဲ။ ရို ဆန်တယ် မထင်လေနဲ့ ဆရာ။ အကုန်လုံးကို Widget ထဲမှာ Widget တွေထည့်ပြီး အဆင့်ဆင့် တည်ဆောက်ကြရတာ။ Nested Widget / Widget Tree လို့ ခေါ်ကြတယ်။

ဆိုတော့ကာ အခြေခံ အကျဆုံး ```Text``` Widget ကို တစ်ချက်ကြည့်လိုက်ကြရအောင်

```dart
Text("Hello World")
```

ဒီမှာ ကျွန်တော် တို့ ပြချင်တဲ့ စာ / content က ```Hello World``` သုံးရတဲ့ Widget က ```Text```
ဒီတော့ Widget ဟေ့လို့ ဆိုလိုက်တာနဲ့ Widget Name ပါမယ်။ အဲ့ Widget က တာဝန်ယူပြီး ပြပေးမယ့် content ပါမယ်။ နောက်တစ်ခါ နည်းနည်း ထပ်တိုးလိုက်ကြရအောင် ဒီ စာကို အလယ်မှာ ပြချင်ရင် ```Center``` Widget သုံးလို့ရတယ်။ ဒီလိုဖြစ်သွားမယ်။

```dart
Center(
    child: Text("Hello World")
)
```

```Center``` widget မှာတော့ ```child``` ဆိုတဲ့ ```property``` တစ်ခု ပါလာပြီး အဲ့ ```property``` ရဲ့ value အနေနဲ့ ```Text``` Widget ကို ထည့်ပေးထားတယ်။

ဒီတော့ ထပ်ပြောရရင် Widget ဟေ့လို့ ဆိုလိုက်တာနဲ့
- Widget Name
- Content
- property : value 
ဒါမျိုးတွေ ရှိမယ်။

```dart
WidgetName(
    content,
    property_one: value_one,
    property_two: value_two
)
```

```Text``` Widget မှာလည်း ```property``` တွေ ရှိတယ်။ ကျွန်တော် တို့ အခု Hello World ဆိုတဲ့ text ကို စာ အနီရောင် နဲ့ ဖော်ပြချင်တယ်ဆိုပါစို့။ ဘယ်လို လုပ်ကြမလဲ? 

```dart
Text(
    "Hello World",
    style: TextStyle(
        color: Colors.red
    )
)
```

```Text``` Widget မှာ ```style``` ဆိုတဲ့ property ရှိပါတယ်။ ဒီ style property ကို သုံးပြီး ကျွန်‌တော် တို့ Text ရဲ့ အရောင်၊ အရွယ်အစား စတာတွေကို ပြောင်းနိုင်ပါတယ်။

```dart
Text(
    "Hello World",
    style: TextStyle(
        color: Colors.red,
        font-size: 16,
        font-weight: FontWeight.bold
    )
)
```

ဒီတော့ Widget တိုင်း Widget တိုင်းမှာ 
- Widget Name 
- Widget Content
- Widget Property

ဒီ (၃) ခု ရှိမယ်ဆိုတာ မှတ်ထားရင် ရပြီ။
အိုကေ ဒီတော့ (၆) ခုမြောက် Widget ကို သွားကြရအောင်။

### Container

Container က UI Widget ဆိုရင်လည်း ဟုတ်တယ် Layout Widget ဆိုရင်လည်း မမှားဘူး။ ဟ ဘာလဲ UI Widget, ဘာလဲ Layout Widget ? UI Widget ဆိုတာက ဗျာ ```Text``` တို့ ```Image``` တို့ ဒါမျိုး Widget တွေကို ပြောတာ။ ဒီ Widget တွေက စာတွေ ပုံတွေကို ပြဖို့ သုံးတဲ့ Widget တွေ။ ဆိုရရင် UI မှာ ပြပေးတဲ့ကောင်တွေပေါ့။ အဲ ```Center``` Widget ကတော့ ```Text``` တို့ ```Image``` တို့လို UI မှာတော့ မမြင်ရဘူး၊ ဒါပေမယ့် Text ကိုတော့ အလယ်တည့်တည့်မှာ နေရာချပေးနိုင်တယ်။ ဒီလို UI Widget တွေကို သင့်တင့်လျောက်ပတ်တဲ့ နေရာမှာ နေရာချပေးတဲ့ Widget တွေကိုတော့ Layout Widget လို့ ခေါ်ကြတယ်။

အိုကေ ဒီတော့ Container က ဘာလဲ ဘယ်လိုနေရာတွေမှာ သုံးလို့ရလဲ ကြည့်လိုက်ကြရအောင်။

```dart
Container(
    child: Text("Hello World")
)
```

Text Widget ကို Container Widget ရဲ့ ```child``` property မှာ ထားထားတယ်။ ဘာထူးလဲ 
No ဘာမှ မထူးဘူး။
အိုကေ Continer မှာ background color ထည့်ကြည့်ရအောင်။

```dart
Container(
    background-color: Colors.red,
    child: Text("Hello World")
)
```

နောက်ထပ် အသုံးများတဲ့ property တွေက ```width```, ```height``` , ```padding``` နဲ့ ```margin``` 
ဘယ်လိုသုံးလဲ ကြည့်လိုက်ကြရအောင်။

```dart
Container(
    width: 100,
    height: 100,
    margin: EdgeInsert.all(24.0),
    padding: EdgetInsert.all(24.0),
    background-color: Colors.red,
    child: Text("Hello World")
)
```

width နဲ့ height ကတော့ Container ရဲ့ အလျား နဲ့ အနံ ကို သတ်မှတ်တာ။
margin ကတော့ ဘေးမျဉ်းခေါ်မှာပေါ့။ ဒီမှာတော့ ဘေးဘယ်ညာ အပေါ်အောက် Widget တွေနဲ့ 24 unit ခြားထားမယ်လို့ သတ်မှတ်ထားတယ်။
padding ကတော့ ကိုယ့်အောက်က content တွေနဲ့ ကိုယ်နဲ့ ဘယ်လောက် ခြားထားမလဲ ဆိုတာကို သတ်မှတ်တာ။


```dart
void main(){
    runApp(
        MaterialApp(
            home: Scaffold(
                appBar: AppBar(
                    title: Text("Hello App Bar"),
                ),
                body: Container(
                    width: 100,
                    height: 100,
                    margin: EdgeInsert.all(24.0),
                    padding: EdgetInsert.all(24.0),
                    background-color: Colors.red,
                    child: Text("Hello World")
                ),
            )
        ),
    );
}
```

Container ရဲ့ width, height, margin , padding နဲ့ background-color တန်ဖိုးတွေကို ပြောင်းကြည့်ပါ။ အခုထိ ပြောခဲ့တဲ့ Center တို့ Contianer တို့ ဆိုတာတွေက Single Child Layout Widget တွေ။ ‌ဟော လာပြန်ပြီ ဘာလဲ Single Child Layout Widget ? ပြောချင်တာက ဗျာ ဒီ Widget တွေက Widget တစ်ခုကိုပဲ နေရာချပေးနိုင်တယ်။ ဒီတော့ Widget အများကြီးကို နေရာချပေးနိုင်တဲ့ Multi Children Layout Widget တွေလည်း ရှိသေးတဲ့ သဘောလား? အမှန်ပါပဲ။ ဆိုပါစို့ ကျွန်တော် တို့ ပုံ နဲ့ စာ ကို အပေါ် အောက် ပြထားချင်ရင် ဘယ်လိုလုပ်ကြမလဲ? အောက်မှာ ထပ်ပြောမယ့် Column နဲ့ Row ဆိုတဲ့ Widget တွေကိုကြည့်ပါ။

### Column , Row
ဒါကတော့ Multi Children Layout Widget တစ်ခုပါပဲ။ ကျွန်တော်တို့ ပုံနဲ့ စာကို အပေါ် အောက် ပြချင်ရင် ဒါမျိုး ရေးပါမယ်။

```dart
Column(
    children:[
        Image(image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png"),),
        Text("Hello World"),
    ]
)
```

```Column``` ဆိုတဲ့ Widget မှာ ```children``` property သုံးပြီး ကိုယ် အပေါ်အောက်ပြချင်တဲ့ Widget တွေကို တန်းစီပြီး ရေးသွားရုံပဲ။



```dart
void main(){
    runApp(
        MaterialApp(
            home: Scaffold(
                appBar: AppBar(
                    title: Text("Hello App Bar"),
                ),
                body: Column(
                    children:[
                        Image(image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png"),),
                        Text("Hello World"),
                    ]
                ),
            )
        ),
    );
}
```

ဒီမှာ alignement အနေနဲ့ ```Column``` Widget က သူ့ရဲ့ Children တွေကို MainAxisAlignmet နဲ့ CrossAxisAlignment ဆိုပြီး ဝင်ရိုး (၂) ခုသုံးပြီး နေရာချပေးတယ်။ Default အနေနဲ့ကတော့ ဝင်ရိုးတွေရဲ့ အစကနေပြီး စပြီးနေရာချတယ်။ ကျွန်‌တော် တို့က အခု အလယ်က စပြီး နေရာချပေးပါလို့ ပြောချင်ရင် 


```dart
void main(){
    runApp(
        MaterialApp(
            home: Scaffold(
                appBar: AppBar(
                    title: Text("Hello App Bar"),
                ),
                body: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children:[
                        Image(image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png"),),
                        Text("Hello World"),
                    ]
                ),
            )
        ),
    );
}
```

### Expanded

ကျွန်တော် တို့ အပေါ်မှာ ရေးခဲ့တဲ့ ပုံနဲ့စာကို screen ရဲ့ တစ်ဝက်စီမှာ ပြချင်ရင် ဘယ်လိုလုပ်ကြမလဲ? ```Expanded``` ဆိုတဲ့   Single Child Layout Widget ကို သုံးလို့ရတယ်။

```dart
Column(
    children:[
        Expanded(
            child:Image(
                image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png"),
            ),
        ),
        Expanded(
            child: Text("Hello World"),
        ),
    ]
)
```

Expanded ဆိုတာက Parent Widget စီက နေရာကျန်သလောက် ပေးပါလို့ တောင်းတာမျိုး။ အခု Column မှာက ကလေး နှစ်ယောက် ရှိတယ်။ Image နဲ့ Text ။ ကလေး (၂) ယောက်လုံးက သူ့စီမှာ ရှိသမျှ အကုန်ပေးပါ တောင်းနေတော့ နှစ်ယောက်လုံးကို တစ်ဝက်စီ အညီအမျှ ခွဲပေးလိုက်တယ်။

Expanded ကို Row နဲ့ Column Widget တွေရဲ့ direct child အနေနဲ့ပဲ သုံးလို့ရမယ်။ ဆိုရရင် Parent က Row ဒါမှမဟုတ် Column ဖြစ်နေမှပဲ အကုန်ပေးလို့ တောင်းဆိုလို့ရမယ်ပေါ့။ တစ်ခြား Container တို့ Stack တို့လို့ Widget တွေအောက်မှာ တောင်းရင်တော့ ပြဿနာ တက်မယ်။

Expanded Widget မှာလည်း property တစ်ခုရှိတယ်။ ```flex``` တဲ့ ။ ဒါက ဘယ်လို အသုံးဝင်လာလဲ ကြည့်ကြရအောင်။

```dart
Row(
    children: [
        Container(
            padding: EdgeInset.all(8.0),
            background-color: Colors.red,
            child: Text("Red"),
        ),
        Container(
            padding: EdgeInset.all(8.0),
            background-color: Colors.green,
            child: Text("Green"),
        ),
        Container(
            padding: EdgeInset.all(8.0),
            background-color: Colors.blue,
            child: Text("Blue"),
        ),
    ],
)
```

ဒီမှာ ဆိုရင် Red, Green, Blue ဆိုတဲ့ Container (၃) ခုကို အပေါ်အောက် ပြထားတယ်။ လောလောဆယ်တော့ သူတို့က သူတို့မှာ ပါတဲ့ content အရွယ်အစားဖော်ပြဖို့ အတွက် သင့်တော်တဲ့ အရွယ်အစား နေရာထိုင်ခင်းကိုပဲ ‌တောင်းဆိုထားတယ်။ အဆင်ပြေတယ်။
အဲ့ဒီမှာ ဒီကောင်တွေက တစ်ယောက်ကို တစ်ယောက်ကြည့်ပြီး မညီမျှဘူးလို့ ထင်လာတယ်။ Red က character (3) လုံးတည်းဆိုတော့ နေရာနည်းနည်းလေး ရပြီး Green  က character (၅) လုံးဆိုတော့ နေရာ ပိုကျယ်ကျယ်ရတယ်။ ဒီမှာ လူလည်ကျတဲ့ Red က ငါက သားဉီးပဲ မိဘမှာ ကျန်သမျှ ငါအကုန်လုံး ယူမယ်ဆိုပြီး Expanded Widget ကောက်သုံးလိုက်တယ်။


```dart
Row(
    children: [
        Expanded(
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.red,
                child: Text("Red"),
            ),
        ),
        Container(
            padding: EdgeInset.all(8.0),
            background-color: Colors.green,
            child: Text("Green"),
        ),
        Container(
            padding: EdgeInset.all(8.0),
            background-color: Colors.blue,
            child: Text("Blue"),
        ),
    ],
)
```

Yay... နေရာတွေအများစုကို Red က ရသွားပါပြီ။ ဒီမှာ Green နဲ့ Blue ကလည်း ဟ သားသမီးချင်း အတူတူပဲ နေရာတွေကို အညီအမျှ ခွဲသင့်တယ်ဆိုပြီး သူတို့လည်း Expanded နဲ့ တောင်းဆိုကြတယ်။


```dart
Row(
    children: [
        Expanded(
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.red,
                child: Text("Red"),
            ),
        ),
        Expanded(
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.green,
                child: Text("Green"),
            ),
        ),
        Expanded(
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.blue,
                child: Text("Blue"),
            ),
        ),
        
    ],
)
```

အိုကေ ကလေးတွေ အကုန်လုံးတော့ နေရာ အညီအမျှ ခွဲခြမ်းစိတ်ဖြာပြီးသွားပြီ။ ဒီမှာ Red က လိုက်ပြီးညှိနှိုင်းတယ်။ ငါက သားဉီး အစ်ကိုကြီး အဘအရာ အနေနဲ့ အမွေတွေရဲ့ တစ်ဝက်ကို ငါယူမယ်။ ကျန်တဲ့ တစ်ဝက်ကို မင်းတို့ တစ်ဝက်စီ ခွဲယူကြ။ ကျန်တဲ့ Green နဲ့ Blue ကလည်း ညီအစ်ကိုချင်း ပြသနာ မဖြစ်ချင်တာနဲ့ အိုကေပါပေါ့ ။ ဒီတော ့အမွေတွေကို လေးပုံပုံ၊ နှစ်ပုံကို Red က ယူ။ Green နဲ့ Blue က တစ်ပုံစီ ယူပြီး ညီအစ်ကိုတွေ ချစ်ချစ်ခင်ခင် နေသွားကြသတဲ့။


```dart
Row(
    children: [
        Expanded(
            flex: 2,
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.red,
                child: Text("Red"),
            ),
        ),
        Expanded(
            flex: 1,
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.green,
                child: Text("Green"),
            ),
        ),
        Expanded(
            flex: 1,
            child: Container(
                padding: EdgeInset.all(8.0),
                background-color: Colors.blue,
                child: Text("Blue"),
            ),
        ),
        
    ],
)
```

ပုံပြင်လေးကတော့ ဒါပါပဲကွယ် 🤣🤣
ဒီမှာ သူတို့ ```Expanded``` Widget ရဲ့ ```flex``` Property ကို ဘယ်လို သုံးသွားလည်း ဆိုတာကို တွေ့နိုင်ပါတယ်။


### Stack
ကျွန်တော် တို့ ပြောခဲ့သမျှ တွေက UI တွေကို ဘေးဘယ်ညာ စီတာ၊ အပေါ်အောက် စီတာ တွေပဲ များတယ်။ အခု UI တစ်ခုနဲ့ တစ်ခု ထပ်ချင်တယ်။ ဘယ်လို လုပ်ကြမလဲ?
လိုလားချက်က ဒီလိုဗျာ ဓာတ်ပုံ တစ်ပုံ ရှိမယ် အဲ့ ဓာတ်ပုံအပေါ်မှာ စာပေါ် ချင်တယ်။

```dart
Stack(
    children: [
        Image(
            image: NetworkImage("https://mmsoftware100.com/images/flutter-logo.png")
        ),
        Text("Hello World")
    ]
)
```

Stack သည်လည်း Multi Child Layout Widget ဖြစ်တဲ့အတွက် ```children``` property နဲ့ Widget တွေကို လက်ခံတယ်။ ပြီးရင် အစဉ်အတိုင်း တစ်ခုအပေါ် တစ်ခု ထပ်ပြတယ်။

ဒီမှာလည်း ထပ်တဲ့အခါမှာ Alignment ကို default အနေနဲ့ Top Left Corner ကနေ စီပြီး ထပ်ပေးတယ်။

// TODO: stack alignment