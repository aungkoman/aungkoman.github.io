---
layout: post
title: "mock API from OpenAPI spec"
date: 2025-09-16
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

This is a **new Android 15 requirement**: starting **Nov 1, 2025**, all apps on Google Play must support **16 KB memory page sizes**.
If your Flutter app currently fails this check, it means your APK/AAB is built with a native library (either your own or a dependency) that doesn’t support 16 KB pages.

Here’s how you can fix it in Flutter:

---

### 1. **Update Flutter & Dependencies**

* Upgrade to the latest **stable Flutter SDK**:

  ```bash
  flutter upgrade
  ```

* Make sure you’re using the latest **Gradle plugin** and **NDK** versions:

  * In `android/build.gradle`:

    ```gradle
    dependencies {
        classpath 'com.android.tools.build:gradle:8.5.0' // or latest
    }
    ```
  * In `gradle-wrapper.properties`:

    ```
    distributionUrl=https\://services.gradle.org/distributions/gradle-8.7-all.zip
    ```

* Update all **pubspec.yaml** dependencies, especially plugins with native code (`camera`, `sqflite`, `firebase`, etc.).

---

### 2. **Enable 16 KB Page Size Support in NDK**

Google Play’s [documentation](https://developer.android.com/ndk/guides/16k-page-support) says you must use **NDK r26b or later**, which supports 16 KB pages.

In `android/gradle.properties`, add:

```properties
android.useAndroidX=true
android.enableJetifier=true
android.experimental.lld.enable=true
android.native.buildOutput=ndkBuild
```

And in `android/app/build.gradle`:

```gradle
android {
    defaultConfig {
        ndk {
            // Needed to ensure compatibility
            abiFilters "arm64-v8a", "armeabi-v7a"
        }
    }
}
```

If you use C/C++ (via FFI or plugins), rebuild native libraries with the new NDK:

```bash
ndkVersion = "26.3.11579264"
```

(in `android/build.gradle`)

---

### 3. **Rebuild Your App Bundle**

```bash
flutter clean
flutter build appbundle --release
```

---

### 4. **Verify 16 KB Page Support**

Google Play Console will automatically test your uploaded `.aab`.
Locally, you can check with `readelf` (Linux/macOS with NDK installed):

```bash
readelf -W -l lib/arm64-v8a/libyourlibrary.so | grep -i pagesize
```

You should see something like:

```
Page size: 16384
```

---

### 5. **If You Rely on Plugins**

Some older Flutter plugins may bundle prebuilt `.so` files that don’t support 16 KB.
👉 In that case:

* File an issue with the plugin author.
* Or recompile the native library yourself with NDK r26b+.

---

✅ **In short:**

* Update Flutter + Gradle + NDK.
* Rebuild with **NDK r26b or newer**.
* Ensure all native libs (.so files) are rebuilt for **16 KB page support**.
* Upload the new `.aab` to Play Console and verify.

---

Do you want me to prepare a **step-by-step upgrade script** (Flutter + Gradle + NDK) so you can just run it on your project and be ready before the Nov 1 deadline?
