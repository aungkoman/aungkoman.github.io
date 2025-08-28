---
layout: post
title: "CRUD in Next.js with MSSQL Server"
date: 2025-08-27
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

အကြမ်းဖျဉ်းကတော့

Next.js မှာ Proxy API ရေးမယ်။
Primsa ဖြစ်ဖြစ် ORM တစ်ခု သုံးပြီး MSSQL ကို ချိတ်မယ်။
Table တစ်ခု ။ tasks ဖြစ်ဖြစ် CRUD လုပ်မယ်။


ဒါပဲ။


ပထမဆုံး Next.js မှာ tasks crud proxy api ရေးမယ်။



## Create database in MSSQL

- [ ] create database.
- [ ] access database from third party client



host: localhost
username: mssql_username
password: mssql_password
database: ToDoListDB

NEXT_DB_HOST=localhost
NEXT_DB_PORT=1433
NEXT_DB_USER=mssql_username
NEXT_DB_PASSWORD=mssql_password
NEXT_DB_NAME=ToDoListDB


MECBBS-2-285\cisco
127.0.0.1


node connectDb.js

SELECT name, is_disabled FROM sys.sql_logins WHERE name = 'mssql_username';
ALTER LOGIN [mssql_username] ENABLE;
ALTER LOGIN [mssql_username] WITH PASSWORD = 'mssql_password';


