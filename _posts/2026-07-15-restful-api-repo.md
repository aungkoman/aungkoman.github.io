---
layout: post
title: "Basic Restful Web Service - Repo"
date: 2026-07-15
categories: tutorials
author: KM
tags: [life,promotion] # TAG names should always be lowercase
---
Let's develop Restful Web Service

## Tech Stack

- [ ] Hono
- [ ] Cloudflare D1 Database
- [ ] Cloudflare Worker
- [ ] Github For version control

## Developer လုပ်တော့မယ်ဟေ့ဆိုရင်

- [ ] Github
- [ ] Cloudflare
- [ ] Namecheap
- [ ] Amazon
- [ ] Google Cloud
- [ ] Firebase

ဒါတွေ ဖောက်ထားသင့်တယ်။


## Setup 

```bash
npm create hono@latest my-restful-web-service
npm create hono@latest .

cd my-restful-web-service
npm install


## create database
npx wrangler d1 create my-restful-web-service-db
## save the database id and update wrangler.toml file.

# running sql command in local
npx wrangler d1 execute my-database --local --command="CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);"

# expense tracker
npx wrangler d1 execute my-database --local --command="CREATE TABLE expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, amount REAL, date TEXT);"


```toml
[[d1_databases]]
binding = "DB"
database_name = "my-restful-web-service-db"
database_id = "your-generated-database-id-here"
```

### create bindings

```typescript
import { Hono } from 'hono'

// 1. Define your Cloudflare bindings
type Bindings = {
  DB: D1Database // 'DB' must match the binding name in wrangler.toml
}

// 2. Pass the Bindings type to Hono
const app = new Hono<{ Bindings: Bindings }>()
```




in ```src/index.ts```

```typescript
import { Hono } from 'hono'

const app = new Hono()

// 1. GET: Simple Text Response
app.get('/', (c) => {
  return c.text('Welcome to the Hono API!')
})

// 2. GET: Returning JSON data
app.get('/api/users', (c) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
  return c.json(users)
})

// 3. GET: Reading Path Parameters
app.get('/api/users/:id', (c) => {
  // Extract the 'id' parameter from the URL
  const userId = c.req.param('id')
  
  return c.json({ 
    id: userId, 
    name: 'Alice',
    message: `Fetched user ${userId}`
  })
})

// 4. GET: Reading Query Parameters (e.g., /api/search?q=hono)
app.get('/api/search', (c) => {
  const query = c.req.query('q')
  return c.json({ searchQuery: query })
})

// 5. POST: Reading JSON from the Request Body
app.post('/api/users', async (c) => {
  // Parse the incoming JSON body
  const body = await c.req.json()
  
  // Return a 201 Created status with the data
  return c.json({ 
    message: 'User created successfully', 
    data: body 
  }, 201)
})

export default app
```



## Basic Expense Tracker

```typescript
import { Hono } from 'hono'

// Define the D1 binding matching your wrangler.toml
type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// 1. POST: Add a new expense
app.post('/expenses', async (c) => {
  // Parse the JSON payload
  const { description, amount, date } = await c.req.json()

  // Basic safety check to ensure data exists
  if (!description || amount === undefined || !date) {
    return c.json({ error: 'Missing required fields: description, amount, or date' }, 400)
  }

  // Insert the data securely using parameterized inputs (?)
  const { success } = await c.env.DB.prepare(
    'INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)'
  )
    .bind(description, amount, date)
    .run()

  if (success) {
    return c.json({ message: 'Expense logged successfully' }, 201)
  }
  
  return c.json({ error: 'Failed to insert expense' }, 500)
})

// 2. GET: List all expenses
app.get('/expenses', async (c) => {
  // Fetch all records, sorted by newest first
  const { results } = await c.env.DB.prepare(
    'SELECT * FROM expenses ORDER BY date DESC'
  ).all()
  
  return c.json(results)
})

// 3. GET: Calculate total expenses
app.get('/expenses/total', async (c) => {
  // Let SQLite do the math for us
  const result = await c.env.DB.prepare(
    'SELECT SUM(amount) as total FROM expenses'
  ).first()
  
  return c.json({ total: result?.total || 0 })
})

// 4. PUT: Update an existing expense
app.put('/expenses/:id', async (c) => {
  const id = c.req.param('id')
  
  // Destructure the payload, allowing values to be undefined
  const { description, amount, date } = await c.req.json()

  // Execute the update
  const { success, meta } = await c.env.DB.prepare(
    `UPDATE expenses 
     SET description = COALESCE(?, description), 
         amount = COALESCE(?, amount), 
         date = COALESCE(?, date) 
     WHERE id = ?`
  )
    .bind(description ?? null, amount ?? null, date ?? null, id)
    .run()

  // meta.changes tells us how many rows were actually modified
  if (success && meta.changes > 0) {
    return c.json({ message: 'Expense updated successfully' })
  }
  
  // If no rows changed, the ID probably doesn't exist
  return c.json({ error: 'Expense not found or update failed' }, 404)
})
// 5. DELETE: Remove an expense
app.delete('/expenses/:id', async (c) => {
  const id = c.req.param('id')

  const { success, meta } = await c.env.DB.prepare(
    'DELETE FROM expenses WHERE id = ?'
  )
    .bind(id)
    .run()

  if (success && meta.changes > 0) {
    return c.json({ message: 'Expense deleted successfully' })
  }
  
  return c.json({ error: 'Expense not found' }, 404)
})

export default app
```



### Sample API Call

```bash
curl -X POST http://localhost:8787/expenses \
  -H "Content-Type: application/json" \
  -d '{"description": "Coffee", "amount": 4.50, "date": "2026-07-15"}'
```



Souce Code

https://github.com/aungkoman/basic-restful-web-service


Live API Endpoint

https://api.software100.com.mm

API Doc

https://mcis-s-team.docs.buildwithfern.com/expense-tracker/introduction