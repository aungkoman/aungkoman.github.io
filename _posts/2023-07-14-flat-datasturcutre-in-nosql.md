---
layout: post
title:  "Flat Data Structure in No SQL"
date:   2023-07-14 12:50:00 +0630
categories: howto
---
## Google က ပြောနေတဲ့ Falttern Data Structure

သိမ်းချင်တဲ့ Data က ဘယ်နှစ်ခုရှိမလဲ?

- [x] Employee
- [x] Customer
- [x] DataBox
- [x] Track


** Databox တစ်ခုနဲ့ တစ်ခု ချိတ်တာ မထည့်တော့ဘူး **


## Employee
Endpoint : ```employees```

```json
"gyi203605": {
    "lat": 16.8863488,
    "lng": 96.2287967,
    "name": "gyi203605",
    "email": "gyi203605@gmail.com",
    "phone": "0945856352",
    "remark": "this is remark",
    "update_at": "2023-07-14 10:22:34.755303"
}
```


## Customer
Endpoint : ```customers```

```json
"customerone": {
    "lat": 16.8863488,
    "lng": 96.2287967,
    "name": "customerone",
    "email": "customerone@gmail.com",
    "phone": "0945856352",
    "remark": "this is remark",
    "update_at": "2023-07-14 10:22:34.755303"
}
```



## DataBox
Endpoint : ```databoxes```

```json
"databoxone": {
    "lat": 16.8863488,
    "lng": 96.2287967,
    "name": "databoxone",
    "connected_to" : {
        "databoxtwo" : {
            "lat": 16.8863488,
            "lng": 96.2287967,
            "name": "databoxtwo",
        },
        "databoxtwo" : {
            "lat": 16.8863488,
            "lng": 96.2287967,
            "name": "databoxtwo",
        }
    }
}
```

## Track
```tracks/$user-id/$date(YYYY-MM-DD)```

```json
{
  "device_model": "Pixel 2 XL",
  "created_at": "2023-07-14T06:54:48.109Z",
  "activity_type": "still",
  "activity_confidence": 100,
  "battery_level": 0.87,
  "battery_is_charging": false,
  "provider": {
    "network": true,
    "gps": true,
    "enabled": true,
    "status": 3,
    "accuracyAuthorization": 0,
    "airplane": false
  },
  "is_moving": false,
  "uuid": "52b30d87-6e31-47ac-a32b-d84c870b906f",
  "odometer": 0,
  "latitude": 19.8526317,
  "longitude": 96.2980089,
  "accuracy": 14.2,
  "speed": 0.11,
  "speed_accuracy": -1,
  "heading": 336.97,
  "heading_accuracy": -1,
  "altitude": 110.4,
  "ellipsoidal_altitude": 110.4,
  "altitude_accuracy": 1
}

```