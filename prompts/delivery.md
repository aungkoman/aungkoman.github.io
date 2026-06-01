

Create a minimalist, production-ready Delivery Management System using Next.js (App Router), Supabase, Tailwind CSS, and TypeScript. The system must be fully functional, fully typed, and ready to deploy to Vercel/Netlify.

### 1. Core Architecture (The 4 Pillars)
Keep the UI clean and simple, utilizing a unified layout with role-based access control (RBAC).

- Platform Owner: A master dashboard to oversee all orders, view all riders/customers, and manually or automatically assign "Ways" (Deliveries) to Riders.
- Rider: A mobile-first dashboard to view assigned deliveries, accept/reject jobs, and update the status of a "Way".
- Customer: A simple interface to create a delivery request (Pickup/Dropoff details) and live-track their active "Way".
- Way (Delivery Route/Order): The core state engine tracking individual order lifecycles: `Pending` -> `Assigned` -> `In_Transit` -> `Completed` -> `Cancelled`.

### 2. Database Schema (Supabase SQL)
Initialize the database with the following relational structure. Use Supabase Auth for user management linked to a `profiles` table via a trigger:

```sql
-- Enums
CREATE TYPE user_role AS ENUM ('owner', 'rider', 'customer');
CREATE TYPE way_status AS ENUM ('pending', 'assigned', 'in_transit', 'completed', 'cancelled');

-- Profiles Table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE,
  full_name TEXT,
  role user_role DEFAULT 'customer' NOT NULL
);

-- Ways (Deliveries) Table
CREATE TABLE ways (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES profiles(id) NOT NULL,
  rider_id UUID REFERENCES profiles(id),
  pickup_address TEXT NOT NULL,
  dropoff_address TEXT NOT NULL,
  status way_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

```

### 3. Application Workflow & Pages

Implement the following routes using Next.js App Router:

* `/` (Landing/Login): Simple email/password authentication using Supabase Auth UI or clean Tailwind forms. Automatically redirect users to their respective dashboard based on their `profiles.role`.
* `/dashboard/owner`: View metrics (total orders, active riders) and an interactive table of all "Ways" with a dropdown to assign a `rider_id` to `pending` ways.
* `/dashboard/rider`: Mobile-friendly list of assigned `ways`. A single prominent button to progress the status: [Mark as Picked Up] -> [Mark as Completed].
* `/dashboard/customer`: A simple form to create a new "Way" (Pickup & Dropoff inputs) and a visual tracking timeline of their active orders.

### 4. Technical Constraints

* Use TypeScript strictly; avoid `any`. Ensure all Supabase database types are generated or explicitly typed.
* Use Lucide React for clean icon indicators on the delivery tracking timeline.
* Implement Row Level Security (RLS) in Supabase or handle clean data fetching server-side in Next.js to ensure Customers only see their own orders, and Riders only see their assigned orders.

Build this incrementally, starting with the database setup instructions and authentication, followed by the specific dashboards. Provide clean, copy-pasteable files.

```

---

## 🛠️ Architecture Blueprint

To help you visualize how these 4 elements interact before you start generating code, look at the system data flow below:

* **Customer** creates a **Way** $\rightarrow$ Status set to `pending`.
* **Platform Owner** views the `pending` list $\rightarrow$ Assigns a **Rider** $\rightarrow$ Status changes to `assigned`.
* **Rider** updates the **Way** $\rightarrow$ Status moves to `in_transit` then `completed`.

To easily customize this setup, tweak specific features, or add logic before feeding it to your AI builder, use the interactive configuration tool below.

```json
{"component":"LlmGeneratedComponent","props":{"height":"650px","prompt":"Create an interactive Architecture & Prompt Builder for a Next.js/Supabase Delivery Management system. The layout must display controls and the generated output cleanly without side-by-side splits. Include inputs to customize options: Toggle Automatic/Manual Rider Assignment, Toggle Live Location Tracking Placeholder, and a dropdown for primary theme style. Based on these inputs, dynamically update and display two clean text fields: a structural SQL schema summary and a tailored AI Developer Prompt that the user can copy. Do not use specific color names, fonts, or explicit CSS values in the description. Highlight active configuration states visually.","id":"im_9bae0aca8c25cfe7"}}

```