---
layout: post
title: "Next.js ကို Type Script ဖြင့် ရေးသားခြင်း"
date: 2025-09-03
categories: life-lessons
author: Cisco
tags: [life] # TAG names should always be lowercase
---

## Requirement 

- one user , one database

So we login using db master account provided by Lightsail.
And run following sql commands.

```sql

-- 1. Create a new database
CREATE DATABASE mydatabase;

-- 2. Create a new user with a password
-- 'username'@'localhost' for localhost
-- 'username'@'%' for anywhere 
CREATE USER 'username'@'%' IDENTIFIED BY 'mypassword';

-- 3. Grant all privileges on the database to the new user
GRANT ALL PRIVILEGES ON mydatabase.* TO 'username'@'%';

-- 4. Apply the changes
FLUSH PRIVILEGES;

```

We get database credential, now let's login using this credential

In adminer , we need to provde

- host
- username
- password
- database

all four information.
If we're not specify database name, the adminer does not show any database (since they don't have SHOW DATABASE - database listing privileges. )


