---
layout: post
title:  "Pagination"
date:   2023-08-26 13:27:00 +0630
categories: howto
---


input , page_no

page_no => 1 - 10 
limit => 10
total_count => 89
last_page => total_count / limit + 1 


```json
{
    "data_list" : [],
    "currect_page" : 3,
    "last_page" : 9,
    "limit" : 10
}
```
output , List<Data>
total_count -> 

```sql
SELECT count(id) FROM data
```




data.table
id, name


1 -> 
```sql
SELECT * FROM data OFFSET 0 LIMIT 10
```


2 -> 
```sql
SELECT * FROM data OFFSET 10 LIMIT 10
```

3 -> 
```sql
SELECT * FROM data OFFSET 20 LIMIT 10
```

limit = 10,
Page -> Offset
1 -> 0
2 -> 10
3 -> 20
4 -> 30

Offset = ( Page - 1)  * Limit

