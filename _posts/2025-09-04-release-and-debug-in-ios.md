---
layout: post
title: "iOS Debug and Release Mode"
date: 2025-09-04
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

another debug and release issue.

```dart
int? contentHeight = await controller.evaluateJavascript(
                source: "document.body.scrollHeight;"
);
if (contentHeight != null) {
    setState(() {
        webViewHeight = contentHeight.toDouble(); // update Flutter widget height
    });
}
```

Error က release mode မှာ တက်တယ်။
```bash
/* [ERROR:flutter/runtime/dart_vm_initializer.cc(40)] Unhandled Exception: type 'double' is not a subtype of type 'int?'
              #0      _NewsDescriptionState.rawHtmlWidget.<anonymous closure> (package:base/features/presentation/components/news_description.dart:493)
              <asynchronous suspension>
            */
```



