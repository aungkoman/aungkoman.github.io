---
layout: post
title:  "FCM in Flutter for both Android and iOS"
date:   2023-08-31 10:05:00 +0630
categories: howto
---

# FCM in Flutter for both Android and iOS

## လုပ်ရမယ့် အလုပ်စာရင်း

### Firebase x Flutter integration

- [x] Firebase Project တစ်ခု Create လုပ်မယ်။ https://console.firebase.google.com/
- [x] Create လုပ်ထားတဲ့ Project ထဲမှာ Android App နဲ့ iOS App ထည့်မယ်။
- [x] Android App ထည့်တဲ့အခါ ရလာတဲ့ ```google-services.json``` ဖိုင်ကို Flutter Project ရဲံ /android/app/ folder ထဲမှာ ထည့်ထားမယ်။
- [x] iOS App ထည့်တဲ့အခါ ရလာတဲ့ ```GoogleService-Info.plist``` ဖိုင်ကို Flutter Project မှာ တိုက်ရိုက်ထည့်လို့မရဘူး။ Xcode ဖွင့်ပြီး /ios/Runner/ folder ထဲကို ဆွဲထည့်ရမယ်။
- [x] https://firebase.flutter.dev/docs/messaging/apple-integration/ မှာ ပြထားတဲ့အတိုင်း Apple - Firebase နဲ့ Xcode Integration လုပ်မယ်။
- [x] Code အနေနဲ့ /android/build.gradle ဖိုင်မှာ Google Service ကို သုံးမယ့်အကြောင်း ```classpath 'com.google.gms:google-services:4.3.3'``` ကို သွားရေးထားရမယ်။

```gradle
buildscript {
    ext.kotlin_version = '1.7.10'
    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:7.3.0'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
        // for firebase
        classpath 'com.google.gms:google-services:4.3.3'
    }
}
```

ဒါဆိုရင် Firebase Project နဲ့ Flutter Project integration လုပ်တာ အိုကေသွားပြီ။

### Firebase initialize at Flutter

- [x] လိုတဲ့ Package (၃) ခုထည့်မယ်။

```bash
flutter pub add firebase_core
flutter pub add firebase_messaging
flutter pub add flutter_local_notifications
```

- [x] ဒီ Package (၃) ခုကို Initialize လုပ်မယ်။

```dart

// background notification handler
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  if (kDebugMode) {
    print("Handling a background message: ${message.messageId}");
    print('Message data: ${message.data}');
    print('Message notification: ${message.notification?.title}');
    print('Message notification: ${message.notification?.body}');
  }
}

Future<void> main()async{
  WidgetsFlutterBinding.ensureInitialized();
  
  // local notification 
  const AndroidNotificationChannel channel = AndroidNotificationChannel(
    'high_importance_channel', 
    'High Importance Notifications', 
    description: 'This channel is used for important notifications.', // description
    importance: Importance.max,
  );
  const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('ic_launcher'); // Replace 'app_icon' with your icon name
  void onDidReceiveLocalNotification(int i, String? s, String? s2, String? s3){
    print("onDidReceiveLocalNotification i $i, s $s, s2 $s2, s3 $s3");
  }
  final DarwinInitializationSettings initializationSettingsDarwin =
  DarwinInitializationSettings(
    requestSoundPermission: false,
    requestBadgePermission: false,
    requestAlertPermission: false,
    onDidReceiveLocalNotification: onDidReceiveLocalNotification,
  );

  final InitializationSettings initializationSettings = InitializationSettings(
      android: initializationSettingsAndroid,
      iOS: initializationSettingsDarwin
  );
  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();
  await flutterLocalNotificationsPlugin.initialize(
    initializationSettings,
  );
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<AndroidFlutterLocalNotificationsPlugin>()
      ?.createNotificationChannel(channel);
  // End of Local Notification
  
  // initialize Firebase core
  await Firebase.initializeApp();
  // Request Permission for notification
  final messaging = FirebaseMessaging.instance;
  final settings = await messaging.requestPermission(
    alert: true,
    announcement: false,
    badge: true,
    carPlay: false,
    criticalAlert: false,
    provisional: false,
    sound: true,
  );
  if (kDebugMode) {
    print('Permission granted: ${settings.authorizationStatus}');
  }
  // get fcm token and subscribe to topic
  try{
    String? token = await messaging.getToken();
    if (kDebugMode) {
      print('Registration Token=$token');
    }
    const topic = 'app_promotion';
    print("trying to subscribe $topic");
    await messaging.subscribeToTopic(topic);
    print("$topic is subscribed");
  }
  catch(exp,stackTrace){
    print("messaging.getToken -> exp");
    print(exp);
    print(stackTrace);
  }
  
  // set notification options
  await FirebaseMessaging.instance.setForegroundNotificationPresentationOptions(
    alert: true, // Required to display a heads up notification
    badge: true,
    sound: true,
  );
  
  // handle background notification
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
  
  // handle foreground notification

  // handle foreground
  FirebaseMessaging.onMessage.listen((RemoteMessage message) {

    if (kDebugMode) {
      print('Handling a foreground message: ${message.messageId}');
      print('Message data: ${message.data}');
      print('Message notification: ${message.notification?.title}');
      print('Message notification: ${message.notification?.body}');
      print(message.data);
    }

    // messageStreamController.sink.add(message);

    RemoteNotification? notification = message.notification;
    AndroidNotification? android = message.notification?.android;
    if (notification != null && android != null) {
      print("notification id hashcode is ${notification.hashCode}");
      flutterLocalNotificationsPlugin.show(
          notification.hashCode,
          notification.title,
          notification.body,
          NotificationDetails(
            android: AndroidNotificationDetails(
              channel.id,
              channel.name,
              channelDescription : channel.description,
              icon: android?.smallIcon,
              // other properties...
            ),
          )
      );
    }
  });
}
```

ဒါဆို ကုတ်အပိုင်းလည်း ပြီးပြီ။
နောက်မှ Notification ကို နှိပ်လိုက်ရင် သက်ဆိုင်ရာ Screen ဖွင့်ပြီး ပါလာတဲ့ Payload Data ကို ပြမယ်။