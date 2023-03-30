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

load data local infile '/Users/msd/Downloads/GeoLite2-Country-Blocks-IPv6-Hex.csv'


```sql
load data local infile '/Users/msd/Downloads/GeoLite2-Country-Blocks-IPv4-Hex.csv'
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



test our db

```sql
select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
from geoip2_network
where inet6_aton('146.243.121.22') between network_start and network_end
limit 1;
```

MariaDB [ip_converter]> select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
    ->        postal_code, latitude, longitude, accuracy_radius
    -> from geoip2_network
    -> where inet6_aton('146.243.121.22') between network_start and network_end
    -> limit 1;
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
| geoname_id | registered_country_geoname_id | represented_country_geoname_id | postal_code | latitude | longitude | accuracy_radius |
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
|    6252001 |                          NULL |                           NULL | NULL        |     NULL |      NULL |            NULL |
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
1 row in set (0.031 sec)


another query
```sql
select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
from geoip2_network
where inet6_aton('146.243.121.22') between network_start and network_end
order by network_end
limit 1;
```

finding non existed ip
```sql
select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
from geoip2_network
where inet6_aton('127.0.0.1') between network_start and network_end
order by network_end
limit 1;
```


increase performace

```sql
select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
from (
  select *
  from geoip2_network
  where inet6_aton('146.243.121.22') >= network_start
  order by network_start desc
  limit 1
) net
where inet6_aton('146.243.121.22') <= network_end ;
```

MariaDB [ip_converter]> select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
    ->        postal_code, latitude, longitude, accuracy_radius
    -> from (
    ->   select *
    ->   from geoip2_network
    ->   where inet6_aton('146.243.121.22') >= network_start
    ->   order by network_start desc
    ->   limit 1
    -> ) net
    -> where inet6_aton('146.243.121.22') <= network_end
    -> ;
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
| geoname_id | registered_country_geoname_id | represented_country_geoname_id | postal_code | latitude | longitude | accuracy_radius |
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
|    6252001 |                          NULL |                           NULL | NULL        |     NULL |      NULL |            NULL |
+------------+-------------------------------+--------------------------------+-------------+----------+-----------+-----------------+
1 row in set (0.009 sec)

for non exist ip

```sql

select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
from (
  select *
  from geoip2_network
  where inet6_aton('127.0.0.1') >= network_start
  order by network_start desc
  limit 1
) net
where inet6_aton('127.0.0.1') <= network_end;
```
MariaDB [ip_converter]> select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
    ->        postal_code, latitude, longitude, accuracy_radius
    -> from (
    ->   select *
    ->   from geoip2_network
    ->   where inet6_aton('127.0.0.1') >= network_start
    ->   order by network_start desc
    ->   limit 1
    -> ) net
    -> where inet6_aton('127.0.0.1') <= network_end;
Empty set (0.005 sec)


### Create Location Table

```sql
create table geoip2_location (
  geoname_id int not null,
  locale_code text not null,
  continent_code text not null,
  continent_name text not null,
  country_iso_code text,
  country_name text,
  subdivision_1_iso_code text,
  subdivision_1_name text,
  subdivision_2_iso_code text,
  subdivision_2_name text,
  city_name text,
  metro_code int,
  time_zone text,
  is_in_european_union bool,
  primary key (geoname_id, locale_code(5))
);
```


### import location

```sql
load data local infile '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Locations-en.csv'
into table geoip2_location
fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows (
  geoname_id, locale_code, continent_code, continent_name,
  @country_iso_code, @country_name, @subdivision_1_iso_code, @subdivision_1_name,
  @subdivision_2_iso_code, @subdivision_2_name, @city_name, @metro_code, @time_zone,
  is_in_european_union
)
set country_iso_code = nullif(@country_iso_code, ''),
    country_name = nullif(@country_name, ''),
    subdivision_1_iso_code = nullif(@subdivision_1_iso_code, ''),
    subdivision_1_name = nullif(@subdivision_1_name, ''),
    subdivision_2_iso_code = nullif(@subdivision_2_iso_code, ''),
    subdivision_2_name = nullif(@subdivision_2_name, ''),
    city_name = nullif(@city_name, ''),
    metro_code = nullif(@metro_code, ''),
    time_zone = nullif(@time_zone, '');
```



### Final Query

```sql
select latitude, longitude, accuracy_radius, continent_name, country_name, subdivision_1_name, city_name
from (
  select *
  from geoip2_network
  where inet6_aton('146.243.121.22') >= network_start
  order by network_start desc
  limit 1
) 
where inet6_aton('146.243.121.22') <= network_end
left join geoip2_location location on (
  net.geoname_id = location.geoname_id and location.locale_code = 'en'
);
```


does not work.

modified version
```sql
select geoname_id, country_iso_code
from (
  select *
  from geoip2_network
  where inet6_aton('146.243.121.22') >= network_start
  order by network_start desc
  limit 1
) net
where inet6_aton('146.243.121.22') <= network_end 
LEFT JOIN geoip2_location ON geoip2_network.geoname_id = geoip2_location.geoname_id;


SELECT *
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

SELECT *
FROM (
    select geoname_id, registered_country_geoname_id, represented_country_geoname_id,
       postal_code, latitude, longitude, accuracy_radius
    from (
    select *
    from geoip2_network
    where inet6_aton('146.243.121.22') >= network_start
    order by network_start desc
    limit 1
    ) net
    where inet6_aton('146.243.121.22') <= network_end ;
) as ip
LEFT JOIN geoip2_location
ON ip.geoname_id = geoip2_location.geoname_id;


```


```sql
select net.geoname_id, location.country_iso_code
from (
  select *
  from geoip2_network
  where inet6_aton('146.243.121.22') >= network_start
  order by network_start desc
  limit 1
) net
where inet6_aton('146.243.121.22') <= network_end
left join geoip2_location location on (
  net.geoname_id = location.geoname_id and location.locale_code = 'en'
)
```

ERROR 13 (HY000): Can't get stat of '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv' (Errcode: 13 "Permission denied")


Terminal ကို Download Folder access ေပးပြီး ပြန် run ေတာ့
ERROR 13 (HY000): Can't get stat of '/Users/msd/Downloads/GeoLite2-Country-CSV_20230328/GeoLite2-Country-Blocks-IPv6-Hex.csv' (Errcode: 13 "Permission denied")

ဒါပဲ​ဆက်တက်တယ်။



### Full Data

```sql
select country_iso_code
from (
  select *
  from geoip2_network
  where inet6_aton('146.243.121.22') >= network_start AND
	inet6_aton('146.243.121.22') <= network_end
  order by network_start desc
  limit 1
) net
left join geoip2_location location on (
  net.geoname_id = location.geoname_id and location.locale_code = 'en'
);
```


MariaDB [ip_converter]> select country_iso_code
    -> from (
    ->   select *
    ->   from geoip2_network
    ->   where inet6_aton('146.243.121.22') >= network_start AND
    -> inet6_aton('146.243.121.22') <= network_end
    ->   order by network_start desc
    ->   limit 1
    -> ) net
    -> left join geoip2_location location on (
    ->   net.geoname_id = location.geoname_id and location.locale_code = 'en'
    -> );
+------------------+
| country_iso_code |
+------------------+
| US               |
+------------------+
1 row in set (0.008 sec)



```sql

```sql
select country_iso_code
from (
  select *
  from geoip2_network
  where inet6_aton('104.28.219.149') >= network_start AND
	inet6_aton('104.28.219.149') <= network_end
  order by network_start desc
  limit 1
) net
left join geoip2_location location on (
  net.geoname_id = location.geoname_id and location.locale_code = 'en'
);
```

+------------------+
| country_iso_code |
+------------------+
| MM               |
+------------------+






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

