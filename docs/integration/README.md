# Astro + Hono + Cloudflare integration

ဒီ repo ရဲ့ main website နဲ့ blog ကို local မှာ run ပြီး Cloudflare Workers ပေါ် deploy လုပ်ဖို့ လမ်းညွှန်များ ဖြစ်ပါတယ်။

1. [Architecture and setup](01-architecture-and-setup.md) — request flow၊ dependencies နဲ့ local commands
2. [Astro guide](02-astro.md) — pages၊ posts၊ assets နဲ့ canonical URLs
3. [Hono guide](03-hono.md) — API routes၊ bindings နဲ့ secrets
4. [Cloudflare deployment](04-cloudflare.md) — Wrangler၊ Git integration နဲ့ domain setup
5. [Validation and troubleshooting](05-validation-and-troubleshooting.md) — checks၊ common errors နဲ့ rollback

Main website/blog ကိုသာ deploy လုပ်ပါတယ်။ မူရင်း app/demo directories တွေကို ဒီ build ထဲ ထည့်မထားပါ။ ဒီ integration က Astro static output + Hono Worker ဖြစ်ပါတယ်။ Server-side rendered Astro pages လိုလာရင် architecture ပြောင်းဖို့ လိုပါတယ်။
