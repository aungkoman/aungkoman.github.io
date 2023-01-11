---
layout: post
title: Wordpress Database Schema
---
# Wordpress Database Schema

## Table List

+-----------------------+
| Tables_in_map_by_kmt  |
+-----------------------+
| wp_commentmeta        |
| wp_comments           |
| wp_links              |
| wp_options            |
| wp_postmeta           |
| wp_posts              |
| wp_term_relationships |
| wp_term_taxonomy      |
| wp_termmeta           |
| wp_terms              |
| wp_usermeta           |
| wp_users              |
+-----------------------+
12 rows in set (0.000 sec)

ဒီထဲမှာ အဓိက အကျဆုံးက ```wp_posts```

## wp_posts

ဒီ Table ထဲမှာ ကိုယ့် app မှာ သုံးရမယ့် Entity တွေအကုန်လုံးလိုလိုကို သိမ်းထားတယ်။

MariaDB [map_by_kmt]> desc wp_posts;
+-----------------------+---------------------+------+-----+---------------------+----------------+
| Field                 | Type                | Null | Key | Default             | Extra          |
+-----------------------+---------------------+------+-----+---------------------+----------------+
| ID                    | bigint(20) unsigned | NO   | PRI | NULL                | auto_increment |
| post_author           | bigint(20) unsigned | NO   | MUL | 0                   |                |
| post_date             | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_date_gmt         | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_content          | longtext            | NO   |     | NULL                |                |
| post_title            | text                | NO   |     | NULL                |                |
| post_excerpt          | text                | NO   |     | NULL                |                |
| post_status           | varchar(20)         | NO   |     | publish             |                |
| comment_status        | varchar(20)         | NO   |     | open                |                |
| ping_status           | varchar(20)         | NO   |     | open                |                |
| post_password         | varchar(255)        | NO   |     |                     |                |
| post_name             | varchar(200)        | NO   | MUL |                     |                |
| to_ping               | text                | NO   |     | NULL                |                |
| pinged                | text                | NO   |     | NULL                |                |
| post_modified         | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_modified_gmt     | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_content_filtered | longtext            | NO   |     | NULL                |                |
| post_parent           | bigint(20) unsigned | NO   | MUL | 0                   |                |
| guid                  | varchar(255)        | NO   |     |                     |                |
| menu_order            | int(11)             | NO   |     | 0                   |                |
| post_type             | varchar(20)         | NO   | MUL | post                |                |
| post_mime_type        | varchar(100)        | NO   |     |                     |                |
| comment_count         | bigint(20)          | NO   |     | 0                   |                |
+-----------------------+---------------------+------+-----+---------------------+----------------+
23 rows in set (0.040 sec)

ဒီထဲမှာ အဓိက ကြည့်ရမှာက


MariaDB [map_by_kmt]> desc wp_posts;
+-----------------------+---------------------+------+-----+---------------------+----------------+
| Field                 | Type                | Null | Key | Default             | Extra          |
+-----------------------+---------------------+------+-----+---------------------+----------------+
| ID                    | bigint(20) unsigned | NO   | PRI | NULL                | auto_increment |
| post_date_gmt         | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_content          | longtext            | NO   |     | NULL                |                |
| post_title            | text                | NO   |     | NULL                |                |
| post_excerpt          | text                | NO   |     | NULL                |                |
| post_status           | varchar(20)         | NO   |     | publish             |                |
| post_modified_gmt     | datetime            | NO   |     | 0000-00-00 00:00:00 |                |
| post_parent           | bigint(20) unsigned | NO   | MUL | 0                   |                |
| guid                  | varchar(255)        | NO   |     |                     |                |
| post_type             | varchar(20)         | NO   | MUL | post                |                |
+-----------------------+---------------------+------+-----+---------------------+----------------+
ဒီ (၁၀) ခုလောက် ကြည့်ထားရင် အဆင်ပြေပြီ။


+-----------------------+---------------------+------+-----+---------------------+----------------+
| Field                 | Type                | Description          |
+-----------------------+---------------------+------+-----+---------------------+----------------+
| ID                    | bigint(20) unsigned | Entity တိုင်းမှာ ပါမယ့် id                             |
| post_date_gmt         | datetime            | created_at                                        |
| post_content          | longtext            | description                                       |
| post_title            | text                | title                                             |
| post_excerpt          | text                | sub_title                                         |
| post_status           | varchar(20)         | ဒါက publish ဖြစ်နေတဲ့ post တွေကိုပဲ ယူရမယ်။           |
| post_modified_gmt     | datetime            | modified_at                                       |
| post_parent           | bigint(20) unsigned | series တွေလိုမျိုး တစ်ခုနဲ့ တစ်ခု ချိတ်ထားရင် သုံးလို့ရအောင်  |
| guid                  | varchar(255)        | original web link                                 |
| post_type             | varchar(20)         | post ကိုပဲ ယူတာများမယ်                               |
+-----------------------+---------------------+------+-----+---------------------+----------------+

ဒါဆိုရင် မဖြစ်မနေ ပြကိုပြရမယ့် ဒီ (၅) ချက်ရပြီ။
- id
- title
- subtitle
- description
- created_at
- modified_at

 ဒီမှာ thumbnail လိုလာပြီ။ Thumbnail ကိုလည်း များသော နောက်ထပ် Post တစ်ခု အနေနဲ့ ထည့်ထားတက်တယ်။ ဒါဆိုရင်တော့ wp_posts table ကို နောက်ထပ် wp_posts table တစ်ခုနဲ့ ထပ် join ရမယ်ဆိုပါတော့။ ဒါပေမယ့် သေချာသလားဆိုတော့ မပြောနိုင်ဘူး။ ဒီတော့ ON မှာပဲ multi-condition သုံးပြီးလုပ်ရမယ်။ condition မကိုက်ရင်တောင် ဘယ်ဘက်က အဓိက wp_posts က records တွေ ပျက်သွားမှာ မဟုတ်ဘူး။
 ညာဘက်က ကောင်ကတော့ null နဲ့ ရလာလိမ့်မယ်။ ပြဿနာ မရှိဘူး။

 ```sql
/*
    Thumbnail Column Added
*/
SELECT 
    wp_posts.ID AS id, 
    wp_posts.post_title AS title,
    wp_posts.post_excerpt AS subtitle,
    wp_posts.post_content AS description,
    wp_posts.post_date_gmt AS created_at,
    wp_posts.post_modified_gmt AS modified_at,
    thumbnail.guid AS thumbnail_url
FROM 
    wp_posts
/* thumbnail table joined */
LEFT JOIN
    wp_posts AS thumbnail 
ON 
    wp_posts.ID = thumbnail.post_parent AND thumbnail.post_type = "attachment"

/* Critical Conditional Checking */
WHERE 
    wp_posts.post_status = "publish" AND
    wp_posts.post_type = "post"
GROUP BY
    wp_posts.ID /* to prevent duplicate posts */
ORDER BY
    wp_posts.post_modified_gmt /* latest updated post come first as always */
LIMIT 0, 10; /* for pagination purpose */
 ```

 အိုကေ Thumbnail တော့ ရလာပြီ။ နောက်ထပ် ဒီ post အတွက် အထောက်အကူပြု Column တွေရှိသေးတယ်။ ဒီမှာ `wp_postmeta` table က ဝင်လာတယ်။
 MariaDB [map_by_kmt]> desc wp_postmeta;
+------------+---------------------+------+-----+---------+----------------+
| Field      | Type                | Null | Key | Default | Extra          |
+------------+---------------------+------+-----+---------+----------------+
| meta_id    | bigint(20) unsigned | NO   | PRI | NULL    | auto_increment |
| post_id    | bigint(20) unsigned | NO   | MUL | 0       |                |
| meta_key   | varchar(255)        | YES  | MUL | NULL    |                |
| meta_value | longtext            | YES  |     | NULL    |                |
+------------+---------------------+------+-----+---------+----------------+
4 rows in set (0.003 sec)

ဒီကောင်က wordpress table တွေထဲမှာ အရိုးရှင်းဆုံး ပြောရမယ်။ ချိတ်ဆက်တဲ့ နေရာမှာ ပြောပါတယ်။ သူတို့ရဲ့ ဆက်သွယ်ချက်က
```s
wp_postmeta.post_id = wp_posts.ID
```

 ဉပမာ ဒီ post က Featured Flag ဖွင့်ထားသလား ဖွင့်မထားဘူးလား? ဒါလည်း ကြည့်နိုင်မယ်။
 နောက် တစ်ခြား custom field တွေအကုန် ထည့်ထားလို့ရမယ်။
 ဉပမာ ဗီဒီယို post တွေမှာ ဆိုရင် duration ပါမယ်။ post_views_count လိုမျိုး ဘယ်နှစ်ခါ ကြည့်သွားပြီလဲ ပါမယ်။

 +------------+---------------------+------+-----+---------+----------------+
| Field      | Type                | Description                            |
+------------+---------------------+------+-----+---------+----------------+
| meta_id    | bigint(20) unsigned | id လောလောဆယ်သုံးတာ မတွေ့သေးဘူး       |
| post_id    | bigint(20) unsigned | wp_posts.id ကို ညွှန်းထားတာ               |
| meta_key   | varchar(255)        | ထပ်ဖြည့်ချင်တဲ့ column name               |
| meta_value | longtext            | column                                |
+------------+---------------------+------+-----+---------+----------------+


ဒီတော့ field တစ်ခု လိုချင်တယ် တိုးချင်တယ် ဆိုရင် 

 ```sql
/*
    Thumbnail Column Added
    One custom field, duration Added
    One more custom field and set default value using
*/
SELECT 
    wp_posts.ID AS id, 
    wp_posts.post_title AS title,
    wp_posts.post_excerpt AS subtitle,
    wp_posts.post_content AS description,
    wp_posts.post_date_gmt AS created_at,
    wp_posts.post_modified_gmt AS modified_at,
    thumbnail.guid AS thumbnail_url,
    /* duration.meta_value AS duration, */
    IFNULL(duration.meta_value, 0) AS post_views_count,
    /* ISNULL(post_views_count.meta_value, 0), */
    IFNULL(post_views_count.meta_value, 0) AS post_views_count
FROM 
    wp_posts
/* thumbnail table joined */
LEFT JOIN
    wp_posts AS thumbnail 
ON 
    wp_posts.ID = thumbnail.post_parent AND thumbnail.post_type = "attachment"

/* duration table joined */
/* ဆိုလိုတာက "duration" column ရှိရင် လာ Join လှည့်၊ မရှိရင် null ပေါ့ */
LEFT JOIN
    wp_postmeta AS duration 
ON 
    wp_posts.ID = duration.post_id AND duration.meta_key = "duration"

/* post_views_count table joined */
/* ဆိုလိုတာက "post_views_count" column ရှိရင် လာ Join လှည့်၊ မရှိရင် null ပေါ့ */
/* မ null ပဲ default value တစ်ခုခု ပေးထားချင်ရင် ဘယ်လို လုပ်ကြမလဲ? ဒါက Google မှာ ပြန်ရှာရမယ့် သဘော */
/* TODO: how to set default value for column if it is null */
LEFT JOIN
    wp_postmeta AS post_views_count 
ON 
    wp_posts.ID = post_views_count.post_id AND post_views_count.meta_key = "post_views_count"

/* Critical Conditional Checking */
WHERE 
    wp_posts.post_status = "publish" AND
    wp_posts.post_type = "post"
GROUP BY
    wp_posts.ID /* to prevent duplicate posts */
ORDER BY
    wp_posts.post_modified_gmt /* latest updated post come first as always */
LIMIT 0, 10; /* for pagination purpose */
 ```

အိုကေ ဒီတော့ Custom Column တွေကိုလည်း left join တစ်ခုနဲ့ စိတ်ကြိုက် ထပ်တိုးလို့ရပြီ။ ဘာကျန်ဉီးမလဲ? မထင်နဲ့ ဆရာ အခုမှ Table (၂) ခုပဲ ရှိသေးတယ်။ နောက်ထပ် Table (၃) (၄) ခုလောက် ကြည့်ဖို့ ရှိဉီးမယ်။


## JSON-PHP-MYSQL-TEXT 
ဒီ format ကို လည်း encode, decode လုပ်ရမယ်။
 a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:1:{s:15:"162.158.162.102";i:1657297449;}s:15:"162.158.162.170";i:1657302288;}s:14:"162.158.163.21";i:1657304017;}s:13:"172.68.210.32";i:1658440811;}s:13:"172.70.147.78";i:1658459884;}s:15:"162.158.146.250";i:1658470435;}s:14:"172.70.246.194";i:1658474913;}s:13:"172.70.147.78";i:1658475109;}s:12:"172.70.90.94";i:1658476408;}s:15:"162.158.162.102";i:1658502028;}s:13:"172.70.147.76";i:1658504646;}s:13:"172.70.147.64";i:1658512326;}s:12:"172.71.98.98";i:1658570483;}s:14:"172.70.142.228";i:1658573246;}s:14:"141.101.76.164";i:1658579467;}s:13:"172.70.147.78";i:1658580758;}s:15:"162.158.170.100";i:1658586058;}s:15:"162.158.162.156";i:1658586431;}s:13:"172.70.147.64";i:1658588590;}s:13:"172.70.143.41";i:1658589961;}s:11:"172.70.93.8";i:1658591202;}s:14:"172.71.114.156";i:1658592843;}s:15:"162.158.162.110";i:1658594311;}s:14:"172.70.189.123";i:1658597049;}s:12:"172.70.34.58";i:1658630151;}s:14:"172.71.102.122";i:1658640164;}s:15:"162.158.170.110";i:1658675994;}s:14:"172.70.116.150";i:1658676865;}

```php
$serializedString = "a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:2:{i:0;a:1:{s:15:"162.158.162.102";i:1657297449;}s:15:"162.158.162.170";i:1657302288;}s:14:"162.158.163.21";i:1657304017;}s:13:"172.68.210.32";i:1658440811;}s:13:"172.70.147.78";i:1658459884;}s:15:"162.158.146.250";i:1658470435;}s:14:"172.70.246.194";i:1658474913;}s:13:"172.70.147.78";i:1658475109;}s:12:"172.70.90.94";i:1658476408;}s:15:"162.158.162.102";i:1658502028;}s:13:"172.70.147.76";i:1658504646;}s:13:"172.70.147.64";i:1658512326;}s:12:"172.71.98.98";i:1658570483;}s:14:"172.70.142.228";i:1658573246;}s:14:"141.101.76.164";i:1658579467;}s:13:"172.70.147.78";i:1658580758;}s:15:"162.158.170.100";i:1658586058;}s:15:"162.158.162.156";i:1658586431;}s:13:"172.70.147.64";i:1658588590;}s:13:"172.70.143.41";i:1658589961;}s:11:"172.70.93.8";i:1658591202;}s:14:"172.71.114.156";i:1658592843;}s:15:"162.158.162.110";i:1658594311;}s:14:"172.70.189.123";i:1658597049;}s:12:"172.70.34.58";i:1658630151;}s:14:"172.71.102.122";i:1658640164;}s:15:"162.158.170.110";i:1658675994;}s:14:"172.70.116.150";i:1658676865;}";
$test = unserialize($data);
var_dump($test);
```

