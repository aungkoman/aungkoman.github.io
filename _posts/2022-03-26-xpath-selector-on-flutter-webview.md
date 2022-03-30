---
layout: post
title:  Xpath select on Flutter webview JS
description: fluuter weview js evaluation
image: ../images/fcc/kfc.jpg
---

### Xpath select on Flutter webview JS
Flutter Webview မှာ jquery လည်း မရ၊ ရိုးရိုး js က id,class selector တွေလည်း မရတော့ xpath ကို သုံးကြည့်တာ အဆင်ပြေသွားတယ်။

```js

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
try {
    var acceptCookie = getElementByXpath('//*[@id="onetrust-accept-btn-handler"]');
    acceptCookie.click();
} catch (exp) { console.log(exp); }



try {
    var notNowApp = getElementByXpath('//*[@id="__livescore"]/div[4]/div/div[2]/button');
    notNowApp.click();
} catch (exp) { console.log(exp); }


try {
    var footerAds = getElementByXpath('//*[@id="content-sticky-footer"]');
    footerAds.remove();
} catch (exp) { console.log(exp); }


try {
    var burgerMenu = getElementByXpath('//*[@id="burger-menu-open"]');
    burgerMenu.remove();
} catch (exp) { console.log(exp); }


try {
    var footerSection = getElementByXpath('//*[@id="footer-wrapper"]');
    footerSection.remove();
} catch (exp) { console.log(exp); }


try {
    var bottomMenu = getElementByXpath('//*[@id="bottom-menu"]');
    bottomMenu.remove();
} catch (exp) { console.log(exp); }


try {
    var topNavigation = getElementByXpath('//*[@id="horizontal-navigation-container"]');
    topNavigation.remove();
} catch (exp) { console.log(exp); }


try {
    var headingBar = getElementByXpath('//*[@id="top-menu-holder"]');
    headingBar.remove();
} catch (exp) { console.log(exp); }

```

  