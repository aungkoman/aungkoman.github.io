---
layout: post
title: Encrypt API between Flutter and Laravel
---
How to encrypt API between Flutter and Laravel

## what we need

- payload as String
- secret key (key lenght is 32)
- IV , dynamic seed

## what we do

- encrypt payload string using IV dynamic seed and secret key
- send encrypted string along with IV dynamic seed

## how we decrypt

- get request body
- separate encrypted string and IV
- decrypt encrypted string using secret key and IV

## sent back

- encrypt response body using secret key and dynamic IV seed
- send back http response along with dynamic IV Seed

## Let's get CODE

in Flutter

### dart

```dart
import 'package:encrypt/encrypt.dart';

class OurApiEncrypt{
  static Key key = Key.fromUtf8("1245714587458888");
  static IV iv = IV.fromUtf8("e16ce888a20dadb8");
  static Encrypter ourEncrypt = Encrypter(AES(key, mode: AESMode.cbc));

  static String decrypt(String encrypted) {
    Encrypted enBase64 = Encrypted.from64(encrypted);
    final decrypted = ourEncrypt.decrypt(enBase64, iv: iv);
    return decrypted;
  }

  static String encrypt(String value) {
    final encrypted = ourEncrypt.encrypt(value, iv: iv);
    return encrypted.base64;
  }
}
```

### php

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    

    function encrypt($value){
        $key = '1245714587458888'; //combination of 16 character
        $iv = 'e16ce888a20dadb8'; //combination of 16 character
        $method = 'aes-128-cbc';
        $encryptedString = openssl_encrypt($value, $method,
            $key, OPENSSL_RAW_DATA, $iv);
        return base64_encode($encryptedString);
    }
    
    function decrypt($value){
        $key = '1245714587458888'; //combination of 16 character
        $iv = 'e16ce888a20dadb8'; //combination of 16 character
        $method = 'aes-128-cbc';
        $base64 = base64_decode($value);
        $decryptedString = openssl_decrypt($base64, $method,
            $key, OPENSSL_RAW_DATA, $iv);
        return $decryptedString;
    }
}
```
