---
layout: post
title:  "Crawling PAGODA data from Myanmar Wikipedia"
date:   2023-05-16 07:55:00 +0630
categories: howto
---

class .mw-parser-output မှာ Chlidren တွေရှိတယ်။

လိုတာက h2, p, div.reflist

title => h1#firstHeading

Page တစ်ခုလုံးကနေ သေချာ Parse လုပ်နိုင်ဖို့ လိုမယ်။

input => Wiki Page
output => Json Object 

```json
{
    "id" : 0,
    "title" : "Page Title",
    "content" : [
        {
            "title" : "Sub Title 1",
            "content" : "this is sub title content",
            "facts" : [] // for list items
        },
        {
            "title" : "Sub Title 1",
            "content" : "this is sub title content",
            "facts" : []
        }
    ],
    "images" : [
        "images urls ",
        "images urls ",
        "images urls ",
    ],
    "url" : "original url"
}
```


title ကတော့ အိုကေတယ်။

```js
// https://my.wikipedia.org/wiki/ဥပ္ပါတသန္တိ_စေတီတော်

var main_content = {
    id : 0,
    title : "",
    content_list : [],
    image_list : []
};
let title = $("#firstHeading").text();
main_content.title = title;

console.log("title is " + title);



let block = {
    title : "",
    content : "",
    facts : []
};

var $parentDiv = $('#mw-content-text > div.mw-parser-output');

  // Find all img elements within the parent div
  var $imgElements = $parentDiv.find('img');

  // Iterate through each img element and extract the src attribute
  var images = [];
  $imgElements.each(function() {
    var src = $(this).attr('src');
    // console.log("https:"+src);
    let image_url = "https:"+src;
    images.push(image_url);
  });
  main_content.image_list = images;

  
  $parentDiv.children().each(function() {
    // Perform operations on each child element
    let childElement = $(this);
    let htmlTag = childElement.prop('nodeName');
    let text = childElement.text();

    console.log(childElement.prop('nodeName') + " , " + childElement.text());


    text = text.replace(/\[[^\]]+\]/g, '');
    text = text.replace(/\[|\]/g, '');
    text = text.replace(/\n/g, '');
    text = text.replace("ဓာတ်ပုံများ", "");
    if(htmlTag == 'H2' && text.length > 0){
        block.title = text;
    }
    if(htmlTag == 'P' && text.length > 0){
        block.content = text;
        main_content.content_list.push(JSON.parse(JSON.stringify(block))); // = title;
        block = {
            title : "",
            content : "",
            facts : []
        };
    }
    if(htmlTag == 'UL'){
        // loop through ul to get li , facts
        childElement.children().each(function() {
            block.facts.push($(this).text());
        });
        main_content.content_list.push(JSON.parse(JSON.stringify(block))); // = title;
        block = {
            title : "",
            content : "",
            facts : []
        };
    }

    // stop point 
    if(text.indexOf('ကိုးကား') !== -1){
        // stop loop
        return false;
    }
    // $(this).prop('nodeName');
    // console.log(childElement.prop('nodeName') + " , " + childElement.text());
    
    // ...do something with childElement
  });

  console.log("main content");
  console.log(main_content);



```


### Final Output

```json
{
    "id": 0,
    "title": "ဥပ္ပါတသန္တိ စေတီတော်",
    "content_list": [
        {
            "title": "",
            "content": "ဥပ္ပါတသန္တိ စေတီတော် (အင်္ဂလိပ်: Uppatasanti Pagoda, pronounced )သည် နေပြည်တော်တွင် တည်ရှိသော ထင်ရှားသည့်တန်ခိုးကြီး စေတီတစ်ဆူဖြစ်သည်။ တရုတ်ပြည်မှ ဗုဒ္ဂစွယ်တော်ရုပ်ပွားတော်ကို ဌာပနာထားရှိသည်။ ရန်ကုန်မြို့ရှိ ရွှေတိဂုံစေတီတော်၏ ပုံစံကို နမူနာယူကာ တည်ဆောက်ထားခြင်းဖြစ်သည်။ ဉာဏ်တော်အမြင့်မှာ ၉၉ မီတာ (၃၂၅ ပေ) ရှိသည်။",
            "facts": []
        },
        {
            "title": "",
            "content": "ထီးတော်တင်လှူပူဇော်ပွဲကို ၂၀၀၉ ခုနှစ် မတ်လ ၁၀ ရက်နေ့တွင် ကျင်းပခဲ့သည်။​",
            "facts": []
        },
        {
            "title": "သမိုင်းကြောင်း",
            "content": "စေတီတော်တည်ဆောက်ရေးလုပ်ငန်းများနိုင်ငံတော်အေးချမ်းသာယာရေးနှင့်ဖွံ့ဖြိုးရေးကောင်စီ ဥက္ကဋ္ဌ  ဗိုလ်ချုပ်မှူးကြီးသန်းရွှေ၏ လမ်းညွှန်မှုဖြင့် ၂၀၀၆ခုနှစ် နိုဝင်ဘာလ ၁၂ ရက်နေ့တွင်စတင်ခဲ့ပြီး ၂၀၀၉ခုနှစ် မတ်လတွင် ပြီးစီးခဲ့သည်။​ စေတီတော်၏ ပန္နက်တင် မင်္ဂလာအခမ်းအနားကို ၂၀⁠၀၆ ခုနှစ် နိုဝင်ဘာလ ၁၂ ရက်နေ့တွင် ကျင်းပခဲ့သည်။ အခမ်းအနားအတွက် ဖိတ်စာတွင် 'ရာဇဌာနီ နေပြည်တော် (ဘုရင်နန်းစံသည့် မင်းနေပြည်)' စာပိုဒ်ဖြင့် ဖွင့်ထားသည်။  စေတီ၏ဉာဏ်တော်သည် ရွှေတိဂုံဘုရားအောက် ၃၀ စင်တီမီတာနိမ့်သည်။ဥပ္ပါတသန္တိကို အကြမ်းဖျင်းဘာသာပြန်ဆိုရလျှင် 'ဘေးဒုက္ခ ကပ်ဆိုးကြီးမှ အကာအကွယ်ပေးခြင်း' ဖြစ်သည်။ ဤအမည်သည် ၁၆ ရာစုအစောပိုင်းလောက်တွင် ဘုန်းတော်ကြီးတစ်ပါးမှ ရေးသားရွတ်ဆိုခဲ့သည့် ပရိတ်ဂါထာ ဖြစ်သည်။ ဤ ပရိတ်ဂါထာကို ဘေးဒုက္ခ များကြုံသည့်အချိန်၊ အထူးသဖြင့် တိုင်းတစ်ပါးမှ ဝင်ရောက်တိုက်ခိုက်လာသည့်အခါ တွင် ရွတ်ဆိုကြသည်။",
            "facts": []
        },
        {
            "title": "တည်ဆောက်ပုံ",
            "content": "စေတီတော်ကို လူလုပ်ကုန်းမြင့်ပေါ်တွင် တည်ဆောက်ထားခြင်းဖြစ်သည်။  ",
            "facts": []
        },
        {
            "title": "",
            "content": "စေတီတော်တွင် ",
            "facts": []
        },
        {
            "title": "",
            "content": "",
            "facts": [
                "မဟာဆုတောင်းပြည့်ဘုရား",
                "ကျောက်စိမ်းဘုရား ၃ ဆူ",
                "၁၀၈ပေ မြင့်သော တံခွန်တိုင်",
                "မဟာဗောဓိညောင်ပင်နှင့် ဘုရား ၂၈ ဆူ",
                "ညောင်ပင် ၁၀၈ ပင် နှင့် ဥယျာဉ်တော်",
                "​ ရှင်ဥပဂုတ္တ နှင့် ရေကန်တော်",
                "သိမ်ကျောင်းဆောင် အစရှိသည်တို့ ထည့်သွင်းတည်ဆောက်ထားသည်။"
            ]
        },
        {
            "title": "",
            "content": "၂၀၀၉ခုနှစ် မတ်လတွင် ဘုရားပွဲကျင်းပစဉ်အတွင်း ရဟတ်မတော်တဆဖြစ်ပွားမှုကြောင့် လူ (၂၀) ဦးသေဆုံးခဲ့သည်။ ",
            "facts": []
        }
    ],
    "image_list": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Uppatasanti_Pagoda-02.jpg/220px-Uppatasanti_Pagoda-02.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Uppatasanti_Pagoda_hti_closeup.jpg/120px-Uppatasanti_Pagoda_hti_closeup.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Uppatasanti_Pagoda-02.jpg/120px-Uppatasanti_Pagoda-02.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Uppatasanti_Pagoda%2C_Naypyidaw.jpg/120px-Uppatasanti_Pagoda%2C_Naypyidaw.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Uppatasanti_Pagoda-01.jpg/120px-Uppatasanti_Pagoda-01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Naypyidaw_--_Uppatasanti_Pagoda_interior.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_interior.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Naypyidaw_--_Uppatasanti_Pagoda_--_corner_view.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_--_corner_view.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Naypyidaw_--_Uppatasanti_Pagoda_Plaza_at_sunset.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_Plaza_at_sunset.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Naypyidaw_--_Uppatasanti_Pagoda_plaza_shrine.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_plaza_shrine.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Naypyidaw_--_Uppatasanti_Pagoda_plaza.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_plaza.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Buddha_image_at_UPTTT.jpg/120px-Buddha_image_at_UPTTT.jpg"
    ]
}
```


လိုချင်တဲ့ input နဲ့ output ကို သေချာရေးထားရမယ်။
ပြီးရင် Processing လုပ်မယ့် ပုံစံ။




```js
// #mw-content-text ရဲ့ first child 
// $("#myIDorWhatever").first();
$first_child = $("#mw-content-text :first-child").children().each(function () {
    console.log(this); // "this" is the current element in the loop
});

$('#parentElement').children().each(function() {
    // Perform operations on each child element
    var childElement = $(this);
    // ...do something with childElement
  });


// #mw-content-text > div.mw-parser-output
// #mw-content-text > div.mw-parser-output > p:nth-child(3)
// #mw-content-text > div.mw-parser-output > h2:nth-child(5)


var imgElements = parentDiv.getElementsByTagName('img');

// Iterate through each img element and extract the src attribute
for (var i = 0; i < imgElements.length; i++) {
  var src = imgElements[i].getAttribute('src');
  console.log(src);
}


// Select the specific div containing the img elements
  var $parentDiv = $('#mw-content-text > div.mw-parser-output');

  // Find all img elements within the parent div
  var $imgElements = $parentDiv.find('img');

  // Iterate through each img element and extract the src attribute
  var images = [];
  $imgElements.each(function() {
    var src = $(this).attr('src');
    // console.log("https:"+src);
    let image_url = "https:"+src;
    images.push(image_url);
  });
  console.log(images);

https://my.wikipedia.org/wiki/%E1%80%96%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA:Uppatasanti_Pagoda_hti_closeup.jpg
//upload.wikimedia.org/wikipedia/commons/thumb/8/81/Uppatasanti_Pagoda-02.jpg/220px-Uppatasanti_Pagoda-02.jpg
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Uppatasanti_Pagoda_hti_closeup.jpg/120px-Uppatasanti_Pagoda_hti_closeup.jpg
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/8/81/Uppatasanti_Pagoda-02.jpg/120px-Uppatasanti_Pagoda-02.jpg
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/2/23/Uppatasanti_Pagoda%2C_Naypyidaw.jpg/120px-Uppatasanti_Pagoda%2C_Naypyidaw.jpg
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Uppatasanti_Pagoda-01.jpg/120px-Uppatasanti_Pagoda-01.jpg
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Naypyidaw_--_Uppatasanti_Pagoda_interior.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_interior.JPG
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Naypyidaw_--_Uppatasanti_Pagoda_--_corner_view.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_--_corner_view.JPG
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/8/89/Naypyidaw_--_Uppatasanti_Pagoda_Plaza_at_sunset.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_Plaza_at_sunset.JPG
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/3/36/Naypyidaw_--_Uppatasanti_Pagoda_plaza_shrine.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_plaza_shrine.JPG
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Naypyidaw_--_Uppatasanti_Pagoda_plaza.JPG/120px-Naypyidaw_--_Uppatasanti_Pagoda_plaza.JPG
VM1873:9 //upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Buddha_image_at_UPTTT.jpg/120px-Buddha_image_at_UPTTT.jpg


```