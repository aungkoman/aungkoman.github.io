---
layout: post
title: What is double dot in Flutter.
---

Sometimes I see this ```List list = [];```

Then ```list..add(color)```

Whats the difference in using 1 dot(.) and 2 dot(..)?

Answer:
``..`` is known as ``cascade notation``. It allows you to not repeat the same target if you want to call several methods on the same object.

```dart
List list = [];
list.add(color1);
list.add(color2);
list.add(color3);
list.add(color4);

// with cascade

List list = [];
list
  ..add(color1)
  ..add(color2)
  ..add(color3)
  ..add(color4);
```

Ref; https://stackoverflow.com/questions/49447736/list-use-of-double-dot-in-dart