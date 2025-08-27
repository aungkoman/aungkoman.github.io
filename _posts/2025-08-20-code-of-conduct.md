---
layout: post
title: "Code of Conduct"
date: 2025-08-20
categories: life-lessons
author: Cisco
tags: [life] # TAG names should always be lowercase
image: "https://www.eqs.com/assets/2022/03/EQS-Blog_Code-of-conduct.jpg"
---

Code of Conduct in Software Development at software100.com.mm


### Version Control

- [x] commit every 15 minutes / small features  
- [x] create feature branch from dev branch
- [x] PR to dev branch

### Issues များ

Issues ရှင်းပြီးတဲ့အခါ Issue ရဲ့ comment section တွင် အောက်ပါတို့ ထည့်ပေးရန်။
- [x] ရှင်းပြီးတဲ့ Pull Request 
- [x] ရှင်းထားတဲ့ screenshot များ ၊ ဉပမာ CRUD UI များ၊ CRUD API Postman Screenshot များ

### API , RestFUL Architecture

- [x] Module တစ်ခုတိုင်းမှာ အခြေခံ API (၅) မျိုး ရှိသင့်တယ်။
- [x] Listing API တိုင်းမှာ Pagination, Filter နဲ့ Sorting ပါသင့်တယ်။

#### Basic CRUD API for a module (e.g User)

- [x] GET api/v1/users -> Return list of users
- [x] GET api/v1/users/{id} -> Return detail of user
- [x] POST api/v1/users -> Create a new user
- [x] PUT api/v1/users/{id} -> Update an existing user
- [x] DELETE api/v1/users/{id} -> Delete an existing user

#### Listing API with Pagination, Filter and Sorting

- [x] GET api/v1/users?page=1&q=Test&role_id=1&sort=created_at&order=desc

- [x] page -> Pagination page no
- [x] q -> Search parameter
- [x] role_id -> filter 
- [x] sort -> sorting field
- [x] order -> ascending or descending ( asc | desc )


### UI/UX , Don't make me think 
*** Listing table တိုင်းမှာ ***
- [x] last updated record ဟာ ထိပ်ဆုံးမှာ ပြထားသင့်တယ်။
- [x] သင့်တင့်လျောက်ပတ်တဲ့ ကော်လံတိုင်းကို searchable ဖြစ်အောင် လုပ်ပေးထားပါ။
- [x] သင့်တင့်လျောက်ပတ်တဲ့ Filter တွေ ထည့်ပေးထားရမယ်။