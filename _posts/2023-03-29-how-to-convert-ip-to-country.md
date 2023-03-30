---
layout: post
title: How to convert ip to country
---



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

