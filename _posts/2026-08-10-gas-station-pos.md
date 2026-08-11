---
layout: post
title: "Let's build CRM for SaaS"
date: 2026-07-15
categories: tips
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---

What we want too keep track?
Money , I means subscription.
When we get money, that's all we want to know and take actions.

First Thing

1. Customer Information (Especially Contact Info)
2. Subscription Period ( last period)
3. Payment List ( history of payment )

Main Sheet should be 

Customer | Current Subscription 

and then 
Payment History Sheet
customer_id | subscription period | payment amount and status , method etc

Customer Sheet 
that's is tracking of current customer journey , like prospect, lead , along with their status , foucs on their communication channel , so we can reach one click away.

Customer Followup History Sheet
customer_id | and method of follow up and reaction / feedback



Main Dashboard Sheet should show 

- current active customer (who paid and running)
- prospect / lead count 
- upcoming payments within this month, next mount

## First thing we need to define is architecture

Clean?
MVVM 
etc

normally we used 

Presentation Layer
- State Managment (Provider)
- Screen
- Components


Domain Layer
- Entity
- Repository
- Service

Data Layer
- Model
- Service Implementation



Or, for keep it simple approach,

UI - Provider - Model - Repository
that's also nice.

May be we used Repository and Service or Something to interexchange of Local DB , Remote API etc

