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



-- Creates the login AbolrousHazem with password '340$Uuxwp7Mcxo7Khy'.
CREATE LOGIN AbolrousHazem
WITH PASSWORD = '340$Uuxwp7Mcxo7Khy';
GO

-- Creates a database user for the login created previously.
CREATE USER AbolrousHazem
FOR LOGIN AbolrousHazem;
GO


SELECT 
    SERVERPROPERTY('IsIntegratedSecurityOnly') as IsWindowsAuthOnly,
    SERVERPROPERTY('IsMixedAuthentication') as IsMixedAuthenticationEnabled;

-- Check if mixed mode authentication is enabled
SELECT name, value, value_in_use
FROM sys.configurations
WHERE name = 'mixed authentication mode';

-- Check if mixed authentication is enabled
SELECT 
    SERVERPROPERTY('IsIntegratedSecurityOnly') as IsWindowsAuthOnly,
    SERVERPROPERTY('IsMixedAuthentication') as IsMixedAuthenticationEnabled;

-- Alternative check for authentication mode
SELECT 
    CASE SERVERPROPERTY('IsIntegratedSecurityOnly')
        WHEN 0 THEN 'Mixed Authentication Enabled'
        WHEN 1 THEN 'Windows Authentication Only'
        ELSE 'Unknown'
    END as AuthenticationMode;

EXEC xp_readerrorlog 0, 1, N'18456', N'AbolrousHazem';


*** Need to restart MS SQL Service ***


You Should Now Be Able to Connect!
Try connecting with these credentials:

Server Name: MERCBS-2-285

Authentication: SQL Server Authentication

User Name: AbolrousHazem

Password: 340$Uuxwp7Mcxo7Khy





