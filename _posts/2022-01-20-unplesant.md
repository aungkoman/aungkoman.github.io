---
layout: post
title: Test ရေးတယ်ဆိုတာ
description: test driven development
image: ../images/fcc/kfc.jpg
---

Test ရေးတယ်ဆိုတာ

Unit Testing ပဲ ဆိုကြပါစို့။
ဒီ class တစ်ခု 
method တစ်ခုရဲ့ အလုပ်လုပ်ပုံကို စစ်တာ။

ကိုယ့်စီမှာ ဖြစ်နိုင်သမျှ အခြေအနေအားလုံးရဲ့ input scenario တွေရှိမယ်။
နောက် scenario တစ်ခုချင်းစီအတွက်လည်း မျှော်မှန်းထားတဲ့ output တွေ ရှိမယ်။
ဒါဆိုရင် စစ်လို့ရပြီ။

ဉပမာ ဂဏန်းနှစ်ခု ပေါင်းတဲ့ method / function တစ်ခုကို Test Case တွေ ရေးမယ်ဆိုကြပါစို့
ကိုယ့်ရဲ့ input and expected output scenario က ဒီလို ရှိမယ်။


| No  | Description         | Input       | Output
----  | ----------          | ----        | ------
| 1   | 1 + 1 = 2           | 1 , 1       | 2
| 2   | -1 + 1 = 0          | -1 , 1      | 0
| 3   | -1 + -1 = -2        | -1 , -1     | -2
| 4   | "1" + 1 = 2         | "1" , 1     | 2
| 1   | 1.5 + 2.3 = 3.8     | 1.5 , 2.3   | 3.8

String ဘာညာသာရကာ ထည့်တာက JS လိုမျိုး dynamic language တွေအတွက်။
နောက် 1.5 လိုမျိုး double တွေထည့်တာက dart လိုမျိုး statc lanaguage တွေမှာကျတော့ type အတိအကျနဲ့လာတော့ ဖြစ်နိုင်သမျှ numeric type တွေထည့်စစ်ထားရမယ်။

နောက်ပိုင်း class တွေ၊ methods တွေက input တစ်ခုတည်းကို မှီခိုနေတာ မဟုတ်တော့ပဲ တစ်ခြား Class / Methods တွေကိုပါ မှီခိုလာရင် ဘယ်လိုလုပ်ကြမလဲ?

ဆိုပါစို့ Network ပေါ်က data ကို ယူပြီး အလုပ်လုပ်တဲ့ method မျိုးဆိုရင် network library တစ်ခုခု သုံးပြီး သူက ဆက်ခေါ် ရမှာတွေ ရှိတယ်။

user detail ပြတဲ့ method ပဲ ဆိုပါစို့
input ကတော့ user id 1 ထည့်ပေးလိုက်မယ်။
expected output က user object ပေါ့။

ဒီမှာ network call ခေါ် ဖို့ လိုလာတယ်။ 
တကယ်စမ်းနေချိန်မှာ data မသေချာတဲ့ network ကို မူတည်ပြီး စမ်းလို့လည်း အဆင်မပြေ။
ဒါကြောင့် Mock Library တွေ ဝင်လာတာ။

Sometimes, unit tests might depend on classes that fetch data from live web services or databases. This is inconvenient for a few reasons:

Calling live services or databases slows down test execution.
A passing test might start failing if a web service or database returns unexpected results. This is known as a “flaky test.”
It is difficult to test all possible success and failure scenarios by using a live web service or database.

Therefore, rather than relying on a live web service or database, you can “mock” these dependencies. Mocks allow emulating a live web service or database and return specific results depending on the situation.

Implementation ကို လက်နဲ့ရေးရင်ရေး၊ 
Generally speaking, you can mock dependencies by creating an alternative implementation of a class. Write these alternative implementations by hand or make use of the Mockito package as a shortcut.

```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:mocking/main.dart';

import 'fetch_album_test.mocks.dart';

// Generate a MockClient using the Mockito package.
// Create new instances of this class in each test.
@GenerateMocks([http.Client])
void main() {
  group('fetchAlbum', () {
    test('returns an Album if the http call completes successfully', () async {
      final client = MockClient();

      // Use Mockito to return a successful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/albums/1')))
          .thenAnswer((_) async =>
              http.Response('{"userId": 1, "id": 2, "title": "mock"}', 200));

      expect(await fetchAlbum(client), isA<Album>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();

      // Use Mockito to return an unsuccessful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/albums/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(fetchAlbum(client), throwsException);
    });
  });
}
```

ဒီမှာ Fixture လိုမျိုး sample data json တွေထည့်ပြီး စစ်စလို့ရပြီ။



https://docs.flutter.dev/cookbook/testing/unit/mocking




