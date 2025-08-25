---
layout: post
title: "Code of Conduct"
date: 2025-08-20
categories: life-lessons
author: Cisco
tags: [life] # TAG names should always be lowercase
---

Code of Conduct in Software Development at software100.com.mm


### Version Control

- [ ] commit every 15 minutes / small features  
- [ ] create feature branch from dev branch
- [ ] PR to dev branch

### API , RestFUL Architecture

- [ ] Module တစ်ခုတိုင်းမှာ အခြေခံ API (၅) မျိုး ရှိသင့်တယ်။
- [ ] Listing API တိုင်းမှာ Pagination, Filter နဲ့ Sorting ပါသင့်တယ်။

#### Basic CRUD API for a module (e.g User)

- [ ] GET api/v1/users -> Return list of users
- [ ] GET api/v1/users/{id} -> Return detail of user
- [ ] POST api/v1/users -> Create a new user
- [ ] PUT api/v1/users/{id} -> Update an existing user
- [ ] DELETE api/v1/users/{id} -> Delete an existing user

#### Listing API with Pagination, Filter and Sorting

- [ ] GET api/v1/users?page=1&q=Test&role_id=1&sort=created_at&order=desc

- page -> Pagination page no
- q -> Search parameter
- role_id -> filter 
- sort -> sorting field
- order -> ascending or descending ( asc | desc )


### UI/UX , Don't make me think 

- [ ] Listing table တိုင်းမှာ last updated record ဟာ ထိပ်ဆုံးမှာ ပြထားသင့်တယ်။