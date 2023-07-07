---
layout: post
title:  "Regular Expression"
date:   2023-07-07 09:20:00 +0630
categories: howto
---


## ဗျည်း နဲ့ သရ

Regular Expression မှာ ဗျည်းနဲ့ လိုက်စစ်မယ်ဆိုရင် သူနဲ့ တွဲနေတဲ့ သရတွေပါ အော်တိုရတယ်။

ဆိုပါစို ့ဒီစာကြောင်း

```js
const myConsonant = "\u1000-\u1021"; // "က-အ"
const BREAK_PATTERN = new RegExp("([" + myConsonant + "])", "mg");
console.log(BREAK_PATTERN); // /([က-အ])/gm
let text = "အအာအိအီအုအူအေအဲအော့အံအို";
var outArray = text.replace(BREAK_PATTERN, "𝕊$1").split('𝕊');
console.log(outArray); // ['', 'အ', 'အာ', 'အိ', 'အီ', 'အု', 'အူ', 'အေ', 'အဲ', 'အော့', 'အံ', 'အို']


```

ဆိုတာ့ Character ကတာ့ တစ်လုံး / နှစ်လုံး ဖြစ်နိုင်တယ်။
သုံးလုံးတော့ မဖြစ်ဘူး။

?! ဆိုတာ ပါရင်ပါမယ် မပါရင် မပါဘူးလို့ ဆိုလိုတာလား?

```
In regular expressions, ?! is a negative lookahead assertion. It is used to specify a pattern that should not be present immediately after the current position in the string.
```




ကိုယ်ဘာလိုချင်လဲ​အရင်ကြည့်ရအောင်။

သတ်မှတ်တဲ့ Pattern တစ်ခုကို Select လုပ်ချင်တယ်။

replace လုပ်မှာလား?

ဆွဲထုတ်ချင်တာလား?

ဉပမာ အသတ်တွေချည်းထုတ်တာမျိုး။

အခုလိုတာက segmentation လိုတာ

stop word pattern ကိုက်ရင် | ထည့်မယ်။

ဒါမျိုး။


အောင်ကိုမန်း

ဒါကို ဘာတွေနဲ့ stop word လုပ်မလဲ?

င် |  ု | န်း

```bash
/((?!္)[က-အ](?![်္])|[a-zA-Z0-9ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@\[-`\{-~\s])/gm


(
	(?!္)[က-အ](?![်္])|
	[a-zA-Z0-9ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@\[-`\{-~\s]
)/gm
```

အသက်တွေပဲ​ခွဲကြည့်ရအောင်။

```js
const myConsonant = "\u1000-\u1021"; // "က-အ"
const aThat = "\u103a";
//const BREAK_PATTERN = new RegExp("([" + myConsonant + "])(?![" + aThat + "])", "mg");
const BREAK_PATTERN = new RegExp("([" + myConsonant + "])", "mg");
console.log(BREAK_PATTERN);

//let text = "အောင်းကိုးမန်း";
let text = "အအာအိအီအုအူအေအဲအော့အံအို";
var outArray = text.replace(BREAK_PATTERN, "𝕊$1").split('𝕊');
console.log(outArray);

// (?!" + ssSymbol + ")[" + myConsonant + "](?![" + aThat + ssSymbol + "])"
```js
/// https://github.com/ye-kyaw-thu/sylbreak/blob/master/Javascript/resegment.js
const myConsonant = "\u1000-\u1021"; // "က-အ"

const enChar = "a-zA-Z0-9";

// "ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@[-`{-~\s"
const otherChar = "\u1023\u1024\u1025\u1026\u1027\u1029\u102a\u103f\u104c\u104d\u104f\u1040-\u1049\u104a\u104b!-/:-@\\[-`\\{-~\\s";

const ssSymbol = "\u1039"; // တက္ကသိုလ် လိုမျိုး အသက်တွေ။

const ngaThat = "\u1004\u103a";

const aThat = "\u103a";

// Regular expression pattern for Myanmar syllable breaking
// *** a consonant not after a subscript symbol AND a consonant is not
// followed by a-That character or a subscript symbol
const BREAK_PATTERN = new RegExp("((?!" + ssSymbol + ")[" + myConsonant + "](?![" + aThat + ssSymbol + "])" + "|[" + enChar + otherChar + "])", "mg");

console.log(BREAK_PATTERN);
// /((?!္)[က-အ](?![်္])|[a-zA-Z0-9ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@\[-`\{-~\s])/gm

function segment(text) {
	var outArray = text.replace(BREAK_PATTERN, "𝕊$1").split('𝕊')
	if (outArray.length > 0) {
		outArray.shift();
		//out.splice(0, 1);
	}
	return outArray;
}
```


