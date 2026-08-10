---
layout: post
title: "Basic Restful Web Service - Repo"
date: 2026-07-15
categories: tutorials
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---
Let's develop POS for Gas Station

mobile first,
wireless print,
invoice generate


```Mermaid
erDiagram
    BUSINESS {
        int business_id PK
        string name
    }
    
    BRANCH {
        int branch_id PK
        int business_id FK
        string name
    }
    
    PUMP {
        int pump_id PK
        int branch_id FK
    }
    
    INVOICE {
        int invoice_id PK
        int pump_id FK
        float total_amount
        float discount_amount
        float net_amount
        float received
        float change
        string payment_type
    }
    
    ITEM {
        int item_id PK
        int invoice_id FK
        int gas_type_id FK
        float volume_in_liters
        float amount
        float price
    }
    
    GAS_TYPE {
        int gas_type_id PK
        string name
        float derived_price
    }
    
    PRICE_HISTORY {
        int price_id PK
        int gas_type_id FK
        datetime date_time
        float price
    }

    %% Relationships
    BUSINESS ||--o{ BRANCH : "has"
    BRANCH ||--o{ PUMP : "has"
    PUMP ||--o{ INVOICE : "has"
    INVOICE ||--o{ ITEM : "has"
    GAS_TYPE ||--o{ ITEM : "has"
    GAS_TYPE ||--o{ PRICE_HISTORY : "has"

```
