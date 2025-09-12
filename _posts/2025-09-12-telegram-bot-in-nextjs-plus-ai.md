---
layout: post
title: "Developing customer service telegram bot using nextjs, open router and ai"
date: 2025-09-07
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---
Customer Service Telegram Bot တစ်ခု တည်ဆောက်မယ်။

- Next.js
- Telegram Bot
- Open Router AI
- In Memory Storage for session


----

### Prompt


# 📌 AI Agent Prompt: Build FTTH Provider Telegram Bot

**Role:** You are an expert Next.js + Telegram Bot + AI integration developer.
**Goal:** Develop a **Telegram chatbot in Next.js** for an **FTTH provider in Myanmar**, with multi-turn conversations to create and query support tickets.

---

## 🟢 Requirements

1. **Framework & Tools**

   * Use **Next.js** (latest stable).
   * Create API routes in `/pages/api/telegram/webhook.ts` for handling Telegram updates.
   * Use **axios** for external API calls.
   * Use **ngrok** for local development webhook.

2. **Telegram Bot**

   * Receive messages via **Telegram webhook**.
   * Send replies via `sendMessage`.

3. **Conversation Flow (Myanmar language)**

   * Multi-turn chat, maintained **per user session (chatId)**.
   * **Intent choices:**

     * `create_ticket`
     * `query_ticket`
   * Conversation steps:

     * **awaiting\_intent** → Ask: "Ticket အသစ်ဖွင့်ချင်ပါသလား၊ သို့မဟုတ် ရှိပြီးသား Ticket စစ်ချင်ပါသလား?"
     * **awaiting\_customerId** → Ask for Customer ID.
     * **awaiting\_issue** (only for create) → Ask for issue description.
     * **done** → Call CRM API and return result.

4. **AI Layer (OpenRouter / DeepSeek)**

   * Use **OpenRouter API** (`https://openrouter.ai/api/v1/chat/completions`).

   * Model: `deepseek-chat`.

   * Prompt AI to map Myanmar free-text → JSON:

     ```json
     { "intent": "create_ticket" }
     { "intent": "query_ticket" }
     { "intent": "create_ticket", "customerId": "...", "issue": "..." }
     ```

   * Example system prompt:

     ```
     You are an AI assistant for an FTTH provider in Myanmar.
     Detect whether the user wants to "create_ticket" or "query_ticket".
     Extract fields: customerId, issue (if provided).
     Always reply in valid JSON only.
     ```

5. **CRM API Integration**

   * For creating a ticket: `POST http://crm.local/api/tickets { customerId, issue }`
   * For querying tickets: `GET http://crm.local/api/tickets?customerId=xxx`
   * Assume response:

     ```json
     { "ticketNumber": "TCK-1234" }
     ```

     or

     ```json
     [{ "ticketNumber": "TCK-1234", "status": "open" }]
     ```

6. **Session Management**

   * Use **in-memory Map** (`sessions[chatId]`) to store:

     ```ts
     {
       step: "awaiting_intent" | "awaiting_customerId" | "awaiting_issue" | "done",
       intent?: string,
       customerId?: string,
       issue?: string
     }
     ```
   * Reset session after completion.

7. **Local Development**

   * Run: `ngrok http 3000`
   * Register webhook:

     ```bash
     curl -F "url=https://<ngrok-url>/api/telegram/webhook" \
          https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook
     ```

---

## 🟡 Deliverables

* `app/api/v1/telegram-bot/route.ts` (main bot logic).
* `lib/session.ts` (optional, session store).
* Example `.env` file with:

  ```
  TELEGRAM_BOT_TOKEN=xxxx
  OPENROUTER_API_KEY=xxxx
  CRM_API_BASE=http://crm.local/api
  ```
* Instructions for running locally with **ngrok**.

---

## 🔵 Expected Behavior

* User: "ကျွန်တော့် Wi-Fi မအလုပ်လုပ်ဘူး"

* Bot: "မိမိ Customer ID ပေးပါ။"

* User: "[testee@myanmarlink.net](mailto:testee@myanmarlink.net)"

* Bot: "Ticket ဖွင့်ပြီးပါပြီ။ နံပါတ်: TCK-1234"

* User: "ကျွန်တော့် Ticket အခြေအနေ စစ်ချင်တယ်"

* Bot: "မိမိ Customer ID ပေးပါ။"

* User: "[testee@myanmarlink.net](mailto:testee@myanmarlink.net)"

* Bot: "သင့်မှာ Ticket 2 ခုရှိပါတယ် – TCK-1234: ဆက်လုပ်ဆဲ, TCK-1201: ပြီးဆုံးပြီး။"

---

✅ Build this project step by step. Generate production-ready, clean, and well-documented code.
