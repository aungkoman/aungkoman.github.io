---
layout: post
title: "Dot Net Core - Hello World - API Development"
date: 2026-02-02
categories: tutorials
author: KM
tags: [life,poem] # TAG names should always be lowercase
---

let's build api with ASP .NET Core.

```bash
# create webapi project
dotnet new webapi -controllers -f net8.0

# in project directory
dotnet run
```


## Controller

ဒါက HTTP Endpoint တွေ expose လုပ်ပေးတဲ့ နေရာ။


## Data Store

Data Repository တွေပေါ့။ များသောအားဖြင့် ORM ဖြစ်တဲ့ Entity Framework သုံးပြီး run ကောင်း run ကြမယ်။

## Model

MVC က ယူထားတဲ့ model ပဲ။
ဒါကိုပဲ သုံးပြီး business တစ်ခုလုံး project တစ်ခုလုံးက အလုပ်လုပ်ကြမှာ။

## Entity Framework - The ORM

သုံးချင်တဲ့ Database Driver ကို ထည့်ပေးရတာမျိုး။

```bash
dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 8.0
```

## Context Class (DbContext)

ဒါကတော့ Model နဲ့ DB ကြားက ချိတ်ဆက်မှု။
Database Connection ချိတ်တာ ဆက်တာ၊ ဒီ class က တာဝန်ယူမယ်။


```csharp
class PizzaDb : DbContext
{
    public PizzaDb(DbContextOptions options) : base(options) { }
    public DbSet<Pizza> Pizzas { get; set; } = null!;
}
```

## Dependency Injections

လက်ရှိအထိ ကြေညာထားတဲ့ Class တွေက သီးခြားစီပဲ ရှိနေသေးတာ။

```Program.cs``` ဖိုင်မှာ ဘယ် class ကို ခေါ်ရင်ဘယ်ဟာကို သုံးမယ်။ အဲ့တာမျိုး dependency injection လုပ်ပေးဖို့ လိုမယ်။ Let's wire up.

```csharp
builder.Services.AddDbContext<PizzaDb>(options => options.UseInMemoryDatabase("items"));
```
ဒေတာ ယူတဲ့ ပုံစံက

```csharp
app.MapGet("/pizzas", async (PizzaDb db) => await db.Pizzas.ToListAsync());
```


## အသုံးများတဲ့ packages

```bash
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 8.0
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0
```