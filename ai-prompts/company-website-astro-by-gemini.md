
Let's rebuild our company website.

Tech Stack : astro + D2 database and markdown

What we want to show 


## Clients and Projects 

Clear call to action with Hero Section
and Client List 

- [ ] MOI Mobile App ( www.moi.gov.mm - Ministry of Information, Myanmar) with Appstore , Playstore Links
- [ ] Dr. Token ( www.drtoken.live ) , Android App Links
- [ ] Simple Delivery , Android App Link
- [ ] MM QR Menu ( www.mmqrmenu.com ) 
- [ ] Thank Book , ( thanks.com.mm - Thank Book Co., Ltd , ) with Appstore , Playstore Links
- [ ] National Museum (Yangon) , Inventory 
- [ ] National Museum (Yangon) , Ticket
- [ ] Suzuki Myanmar Smart Order
- [ ] Tourism.gov.mm
- [ ] Myanmar Link 
- [ ] Mar Thin
- [ ] AELC
- [ ] Young Tel Security Company
- [ ] Zip Myit
- [ ] Myanmar Name Converter 
- [ ] Expense Tracker Telegram Bot


So just client name and brand logo or project list

So we need to separate project | client 

Our clients

Our Projects (Featured Projects )
and then project list

Contact Us + Slack Integration / Telegram Integration 


## Purpose

Professional, Outstanding Web page
Clear for Uncle, Anty Audience. 
and then lead capturing

- [ ] social preview for all page , so we can link back in our promotion content 
- [ ] lead capturing , Form and Phone Call, Email 
- [ ] SEO
- [ ] AI Feed
- [ ] Online Presense

So what the Prospect feel about our website, business?

- Impression?
- Trust
- and then Project :D

## Add about AI Activity

- [ ] Expense Tracker ( categorization )
- [ ] Zip Myit ? ( Dijkstra Algorithm )
- [ ] Any other AI Project? 

We don't want to be ordinary
We want to tell stories

How we and our client collaborate to achieve Exceptional Performance from a new software for their business.

## Team ?

Cisco
Mr. HaH
Sir. Phyo


Master Degree in Computer Science 
5+ Years in Industry
3+ Institution Level Projects
20+ Commercial Projects
Many other side / hobby projects for local communities.

Sharing software development knowledge 


## Any other attractive facts about our team?

To be feel like Client as follow.

For friendly
Like this feeling , That's what we are looking for or what we need right now.

mostly will visit project landing page (detail) and then go to home page.

## Tracking 

- [ ] google analytic
- [ ] slack for lead caputre
- [ ] chat box / modal for Greeting and Lead Capture


## Database D2 and Files on R2 

- [ ] Admin Panel? 

not yet, 
just static files are enough.


just to keep Prospect Information and Visit Analytic..


## So what we do?

Using astro , db insert,

How can we see db , private admin panel? or slack / telegram bot to list and get up to date information.


suggest prompt for google antigravity IDE



-------------------------------

This sounds like an incredibly strong agency portfolio. You have a highly impressive mix of institutional heavyweights (MOI, National Museum, Tourism.gov.mm), commercial enterprises (Suzuki), and innovative SaaS products (Dr. Token, ThankBook).

To win over the "Uncle and Aunty" demographic in Myanmar—who are often key decision-makers—the site needs to project immense **trust, stability, and approachability**. They don't care about the tech stack; they care that you built the official Ministry of Information app and that you'll answer the phone when they call.

Here is a strategy to build this in Astro, handle your leads without an admin panel, and the exact prompt to feed into Google Project IDX (the official name for the Antigravity IDE).

---

## 1. The "Uncle/Aunty" Trust Architecture

To make older, non-technical clients feel "This is exactly what we need," prioritize clarity over flashy animations.

* **Social Proof First:** Place the logos of MOI, Tourism.gov.mm, and Suzuki Myanmar immediately "above the fold" right under the Hero text. Institutional trust is the strongest currency for this demographic.
* **Clear, Direct Communication:** Use a floating "Contact Us" button (usually Viber, Messenger, or Telegram for Myanmar clients) so they can talk to a human instantly without filling out a form.
* **Story-Driven Case Studies:** Instead of listing features, frame your projects as solutions.
* *For Dr. Token:* "How we eliminated crowded waiting rooms for busy clinics."
* *For Zip Myit:* "Using AI to find the fastest delivery routes automatically."


* **The Team Section:** Emphasize the Master’s degrees, 5+ years of experience, and institutional track records. This signals safety and competence. Add professional, friendly headshots.

## 2. Separating Clients vs. Projects

You should structure these as two different visual elements on the site.

### The Client Logo Carousel (Home Page)

A simple, scrolling banner of logos to establish instant authority.

* MOI, National Museum, Suzuki Myanmar, Tourism.gov.mm, AELC, Young Tel Security.

### Featured Projects (Home Page & Markdown Pages)

Highlight 3–4 massive wins with thumbnail cards that link to full Markdown-based case studies.

* **MOI Mobile App:** Highlight the scale of reaching citizens.
* **Dr. Token:** Highlight modernizing healthcare workflows and the localized, culturally relevant approach you take to marketing it.
* **ThankBook / MM QR Menu:** Highlight sleek, user-friendly SaaS design.
* **AI Innovations (Zip Myit & Expense Tracker):** Frame this as "We don't just build apps; we build intelligent systems."

## 3. Tech Stack Execution & The "No-Admin" Workflow

*Note: You mentioned a "D2" database alongside R2. You are likely referring to **Cloudflare D1** (their SQL database), which pairs perfectly with Cloudflare R2 (file storage).*

You don't need to build a complex admin panel just to view leads. You can use Astro's Server-Side Rendering (SSR) capabilities to handle form submissions effortlessly.

**The Workflow:**

1. A prospect fills out the lead capture form or interacts with the Chat Box.
2. An Astro API endpoint (`POST /api/lead`) processes the data.
3. **The Database:** Astro inserts the record into Cloudflare D1 for permanent storage and analytics.
4. **The Alert:** Astro simultaneously sends a webhook payload to a **Slack or Telegram Bot**.
5. **Your View:** Your team gets an instant Telegram/Slack message: *"🚨 New Lead: U Kyaw wants an inventory app. Phone: 09-XXXXXXX"*. You can view and manage all leads directly from your chat app.

---

## 4. Prompt for Google Project IDX

Copy and paste this exact prompt into Google Project IDX to generate your foundational boilerplate.

> **System Prompt:**
> You are an expert web developer specializing in Astro, Tailwind CSS, and Cloudflare Pages (D1 database, R2 storage).
> Please scaffold a professional, high-performance agency portfolio website with the following requirements:
> **Tech Stack:**
> * Astro (SSR mode enabled for Cloudflare)
> * Tailwind CSS for styling
> * Markdown/MDX for project case studies
> * Cloudflare D1 for database (sqlite)
> * Cloudflare R2 for image assets
> 
> 
> **Site Structure & Features:**
> 1. **Home Page (`/src/pages/index.astro`):**
> * **Hero Section:** High-conversion CTA with a floating Chat/Greeting modal.
> * **Client Logo Strip:** A section dedicated to displaying high-profile client logos (e.g., Ministries, Corporate brands).
> * **Featured Projects Grid:** Cards pulling from a content collection.
> * **AI Innovations Section:** Highlighting smart algorithms and AI integrations.
> * **Team Section:** Highlighting Master's degrees, 5+ years of experience, and institutional trust.
> 
> 
> 2. **Content Collections (`/src/content/projects/`):**
> * Set up an Astro Content Collection for projects using Markdown. Define a schema that includes `title`, `client`, `type` (SaaS/App/Gov), `appStoreLink`, `playStoreLink`, `heroImage`, and `seoDescription`.
> 
> 
> 3. **Lead Capture & API (`/src/pages/api/lead.ts`):**
> * Create a server-side endpoint to handle POST requests from the contact form.
> * Write boilerplate code to insert this data into a Cloudflare D1 database.
> * Write boilerplate code to fire a webhook to a Slack/Telegram API with the lead information.
> 
> 
> 4. **SEO & Social Previews:**
> * Create a reusable `<BaseHead/>` component that accepts OpenGraph props (title, description, image) to ensure every page looks great when shared on Facebook and Telegram.
> 
> 
> 
> 
> **Design Requirements:**
> * The design must be extremely clean, highly legible, and inspire trust for an older, non-technical demographic (larger typography, high contrast, clear CTA buttons).
> 
> 
> Please provide the initial project structure, the Content Collection schema setup, the `BaseHead.astro` component, and the `api/lead.ts` endpoint logic.

---