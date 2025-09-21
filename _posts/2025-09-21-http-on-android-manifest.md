---
layout: post
title: "Cleartext HTTP traffic not permitted"
date: 2025-09-21
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---


```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <application
        ...
        android:usesCleartextTraffic="true"
        ...>
        ...
    </application>
</manifest>
```


https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted


Cleartext HTTP traffic not permitted