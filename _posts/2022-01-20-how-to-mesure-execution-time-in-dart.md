---
layout: post
title: Test ရေးတယ်ဆိုတာ
description: test driven development
image: ../images/fcc/kfc.jpg
---
Dart မှာ execution time ကို ဘယ်လို တိုင်းကြမလဲ?

```dart
Stopwatch stopwatch = new Stopwatch()..start();
doSomething();
print('doSomething() executed in ${stopwatch.elapsed}');
```
Code War မှာ solution တစ်ခု submit လုပ်တော့
သူတို့က voting အများဆုံး တွေကို စီပြတယ်။

ကိုယ်က လူလည်ကျထားတာကို သဘောမကျ။
နောက်ပြီး exection time ကလည်း ဘယ်လိုဖြစ်မလဲ မသိရသေး။
ဒါနဲ့ ဒီနှစ်ခုကို တိုင်းကြည့်ဖို့ ဖြစ်လာတယ်။


### Most Voted Solution

```dart
bool validBraces(String str) {
  var prev = "";
  while (str.length != prev.length) {
            prev = str;
            str = str
                .replaceAll("()", "")
                .replaceAll("[]", "")
                .replaceAll("{}", "");                
    }
    return (str.length == 0);
}
```
```
00:01 +2: find true or false should return true / false
validBraces executed in 0:00:00.000225
00:01 +3: find true or false Example tests
validBraces executed in 0:00:00.000013
validBraces executed in 0:00:00.000006
validBraces executed in 0:00:00.000013
00:01 +4: All tests passed!
```

### Our Solution
```dart
bool validBraces(String braces) {
    Stopwatch stopwatch = new Stopwatch()..start();
    // TODO
    bool result = true;
    List<String> currentCloser = [];
    for(int i=0; i < braces.length; i++){
      String currentCloserChar = currentCloser.isEmpty ? "" : currentCloser.last;
      //print("current Closer - braches i => $currentCloserChar - ${braces[i]}");
      // အခု ပိတ်မှာလား?
      if( currentCloserChar != braces[i]){
        result = false;

        // အသစ် ထပ်လာမှာလား
        switch (braces[i]){
          case "(":
            currentCloser.add(")");
            break;
          case "{":
            currentCloser.add("}");
            break;
          case "[":
            currentCloser.add("]");
            break;
          default:
            // အသစ်လည်း ထပ်လာမှာ မဟုတ်ဘူး၊ စပြီး တလွဲကြီး ဖြစ်နေပြီ
            currentCloser.add("-");
        }
      }
      else{
        result = true;
        currentCloser.removeLast();
      }

      //print("result is $result");

    }
    print('validBraces executed in ${stopwatch.elapsed}');
    return result;
  }
```
```
00:01 +2: find true or false should return true / false
validBraces executed in 0:00:00.000217
00:01 +3: find true or false Example tests
validBraces executed in 0:00:00.000007
validBraces executed in 0:00:00.000005
validBraces executed in 0:00:00.000008
00:01 +4: All tests passed!
```