---
layout: post
title: How to convert ip to country
---

သူတို့ ေပးထားတဲ့ Solution က အေတာ်ေလး ရှင်းပါတယ်။
ခက်ကတာက load data infile ကလည်း မရ
mac မှာ တိုင်ပတ်ေနတာနဲ့ 
ကိုယ့်ဘာသာကိုယ် 



### Create geoip2_network table

```sql
create table geoip2_network (
  network_start varbinary(16) not null,
  network_end varbinary(16) not null,
  geoname_id int,
  registered_country_geoname_id int,
  represented_country_geoname_id int,
  is_anonymous_proxy bool,
  is_satellite_provider bool,
  postal_code text,
  latitude float,
  longitude float,
  accuracy_radius int,
  index(network_start),
  index(network_end)
);
```

### import from csv

```sql
load data local infile '/Users/msd/Downloads/GeoLite2-Country-Blocks-IPv6-Hex.csv'
into table geoip2_network
fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows
(@network_start, @network_end, @geoname_id, @registered_country_geoname_id, @represented_country_geoname_id,
 @is_anonymous_proxy, @is_satellite_provider, @postal_code, @latitude, @longitude, @accuracy_radius)
set network_start = unhex(@network_start),
    network_end = unhex(@network_end),
    geoname_id = nullif(@geoname_id, ''),
    registered_country_geoname_id = nullif(@registered_country_geoname_id, ''),
    represented_country_geoname_id = nullif(@represented_country_geoname_id, ''),
    is_anonymous_proxy = nullif(@is_anonymous_proxy, ''),
    is_satellite_provider = nullif(@is_satellite_provider, ''),
    postal_code = nullif(@postal_code, ''),
    latitude = nullif(@latitude, ''),
    longitude = nullif(@longitude, ''),
    accuracy_radius = nullif(@accuracy_radius, '');
```

local ထည့်လိုက်တာ အိုေကသွားပြီ။




ERROR 13 (HY000): Can't get stat of '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv' (Errcode: 13 "Permission denied")


Terminal ကို Download Folder access ေပးပြီး ပြန် run ေတာ့
ERROR 13 (HY000): Can't get stat of '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv' (Errcode: 13 "Permission denied")

ဒါပဲ​ဆက်တက်တယ်။


### how to add path in Mac

sudo nano ~/.zshrc
source ~/.zshrc


load data infile '/var/lib/mysql-files/GeoIP2-City-Blocks-IPv6-Hex.csv'
into table geoip2_network
fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows
(@network_start, @network_end, @geoname_id, @registered_country_geoname_id, @represented_country_geoname_id,
 @is_anonymous_proxy, @is_satellite_provider, @postal_code, @latitude, @longitude, @accuracy_radius)
set network_start = unhex(@network_start),
    network_end = unhex(@network_end),
    geoname_id = nullif(@geoname_id, ''),
    registered_country_geoname_id = nullif(@registered_country_geoname_id, ''),
    represented_country_geoname_id = nullif(@represented_country_geoname_id, ''),
    is_anonymous_proxy = nullif(@is_anonymous_proxy, ''),
    is_satellite_provider = nullif(@is_satellite_provider, ''),
    postal_code = nullif(@postal_code, ''),
    latitude = nullif(@latitude, ''),
    longitude = nullif(@longitude, ''),
    accuracy_radius = nullif(@accuracy_radius, '');




load data infile '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv'
into table geoip2_network
fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows
(@network_start, @network_end, @geoname_id, @registered_country_geoname_id, @represented_country_geoname_id,
 @is_anonymous_proxy, @is_satellite_provider, @postal_code, @latitude, @longitude, @accuracy_radius)
set network_start = unhex(@network_start),
    network_end = unhex(@network_end),
    geoname_id = nullif(@geoname_id, ''),
    registered_country_geoname_id = nullif(@registered_country_geoname_id, ''),
    represented_country_geoname_id = nullif(@represented_country_geoname_id, ''),
    is_anonymous_proxy = nullif(@is_anonymous_proxy, ''),
    is_satellite_provider = nullif(@is_satellite_provider, ''),
    postal_code = nullif(@postal_code, ''),
    latitude = nullif(@latitude, ''),
    longitude = nullif(@longitude, ''),
    accuracy_radius = nullif(@accuracy_radius, '');




/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv


https://dev.maxmind.com/geoip/importing-databases/mysql?lang=en

https://github.com/maxmind/geoip2-csv-converter

