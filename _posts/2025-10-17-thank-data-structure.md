---
layout: post
title: "Thank Book - Data Structure"
date: 2025-10-17
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

## User

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 50009 |
| **name** | String | "haha" |
| **email** | String | "gokab11117@datoinf.com" |
| **phone** | String , Nullable | `null` |
| **profile\_image** | String (URL), Nullable | "[https://ibb.co/PzzwLCFx](https://ibb.co/PzzwLCFx)" |
| **email\_verified\_at** | String (Timestamp), Nullable | `null` |
| **phone\_verified\_at** | String (Timestamp), Nullable | `null` |
| **role\_id** | Integer | 2 |
| **created\_at** | String (Timestamp) | "2025-10-16T15:06:22.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-16T15:06:22.000000Z" |
| **profile** | Object (Dictionary) | `{...}` |

---

## Profile


| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 65 |
| **image** | String (URL), Nullable | "[https://ibb.co/PzzwLCFx](https://ibb.co/PzzwLCFx)" |
| **bio** | String | "human1" |
| **profession** | String | "dev" |
| **address** | String | "earth" |
| **dob** | String (Date) | "2023-03-04" |
| **dod** | String (Date), Nullable | `null` |




## reaction\_types 

### Reaction Type Object Structure

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 1 |
| **name** | String | "like" |
| **icon** | String (Emoji) | "👍" |

### Privacy Type Object Structure

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 1 |
| **name** | String | "public" |

### Report Category Object Structure

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 1 |
| **name** | String | "Spam" |
| **description** | String | "Spam" |

-----

## emotions 

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 1 |
| **name** | String | "Joy" |
| **emoji** | String (Emoji) | "😊" |
| **description** | String | "A strong feeling of happiness." |
| **color\_code** | String (Hex Code) | "\#FFD700" |
| **related\_color** | String | "Gold" |

-----

## Story


| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 47 |
| **note** | String | "I appreciate your dedication\!" |
| **image** | String (URL), Nullable | `null` or URL |
| **privacy\_type\_id** | Integer | 1 |
| **privacy\_type** | Object | `{ "id": 1, "name": "public" }` |
| **expired\_at** | String (Timestamp) | "2025-10-18T09:14:39.884000Z" |
| **user\_id** | Integer | 50011 |
| **user** | Object | `{...}` (See User Object structure) |
| **created\_at** | String (Timestamp) | "2025-10-17T09:14:39.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-17T09:14:39.000000Z" |

-----

## Thank NOte


| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 413 |
| **user\_id** | Integer | 50012 |
| **title** | String | "for my friend who always help me" |
| **note** | String | "အချစ်အကြံအစည်အား..." |
| **date** | String (Date) | "2025-10-17" |
| **privacy\_type\_id** | Integer | 1 |
| **thank\_note\_type\_id** | Integer | 1 |
| **user** | Object | `{...}` (See User Object structure) |
| **contacts** | Array of Objects | `[]` or `[{...}]` (See Contact Object structure) |
| **medias** | Array of Objects | `[{...}]` (See Media Object structure) |
| **commments\_count** | Integer | 0 |
| **reactions\_count** | Integer | 1 |
| **react** | Null | `null` |
| **comments** | Array of Objects | `[]` or `[{...}]` (See Comment Object structure) |
| **reactions** | Array of Objects | `[{...}]` (See Reaction Object structure) |
| **share\_url** | String (URL) | "[http://admin.thanks.com.mm/](https://www.google.com/search?q=http://admin.thanks.com.mm/)..." |
| **created\_at** | String (Timestamp) | "2025-10-17T05:42:33.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-17T05:42:33.000000Z" |

-----



### Contact

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 695 |
| **name** | String | "petric" |
| **image** | String (URL) | "https://..." |
| **bio** | String, Nullable | `null` |
| **profession** | String, Nullable | `null` |
| **dob** | String (Date), Nullable | "2000-10-15" |
| **dod** | String (Date), Nullable | "2025-10-10" |
| **gender\_id** | Integer | 1 |
| **created\_at** | String (Timestamp) | "2025-10-15T03:03:04.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-15T03:03:27.000000Z" |

### Media 

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 25 |
| **thank\_note\_id** | Integer | 413 |
| **media\_type\_id** | Integer | 1 |
| **media\_type** | Object | `{ "id": 1, "name": "image" }` |
| **path** | String (URL) | "https://..." |
| **created\_at** | String (Timestamp) | "2025-10-17T05:42:33.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-17T05:42:33.000000Z" |

### Comment 

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 3211 |
| **thank\_note\_id** | Integer | 406 |
| **comment** | String | "👋" |
| **user\_id** | Integer | 50001 |
| **user** | Object (Partial User) | `{ "id": 50001, "name": "Modo ZuShi", "email": "...", "phone": null }` |
| **created\_at** | String (Timestamp) | "2025-10-16T02:07:39.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-16T02:07:39.000000Z" |

### Reaction Object  

| Field Name | Field Type | Example Value |
| :--- | :--- | :--- |
| **id** | Integer | 8599 |
| **thank\_note\_id** | Integer | 413 |
| **reaction\_type\_id** | Integer | 1 |
| **user\_id** | Integer | 50012 |
| **reaction\_type** | Object | `{ "id": 1, "name": "like", "icon": "👍" }` |
| **user** | Object (Partial User) | `{ "id": 50012, "name": "Yell", "email": "...", "phone": null }` |
| **created\_at** | String (Timestamp) | "2025-10-17T05:45:02.000000Z" |
| **updated\_at** | String (Timestamp) | "2025-10-17T05:45:02.000000Z" |

