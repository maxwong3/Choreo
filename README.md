# Choreo
App that builds local connections for people interested in dance covers
## ⚠️Make changes in a separate branch! Not main directly ⚠️

## How to Run the App:
First run the Express backend server from within the backend folder:
```
cd backend
npm run dev
```
Then in a different terminal, run the Next.js frontend server from within the frontend folder:
```
cd frontend
npm run dev
```
### ⚠️Be sure to run the schema.sql file if your Postgres Database isn't set up yet!
```
cd backend
psql -U [DB_USER] -d [DB_NAME] -f /src/database/schema.sql
```

## Branch Naming Conventions
Make sure to name your branches with the feature that you're working on! Then pull request, merge and delete branch. For organization

## 🛠️ Tech Stack & Architecture Plan (In README during Dev, delete later: also found in /docs) 

Our platform is engineered for rapid development, code reusability, and minimal infrastructure costs. By anchoring the ecosystem in JavaScript/TypeScript, we minimize context switching and ensure a smooth migration path from a Web MVP to a native mobile app.

### 🌐 Phase 1: Web MVP Stack
Optimized for zero-cost hosting, rapid deployment, and local community validation (Pitt FRESA / CMU).

* **Frontend Framework:** `Next.js (React)`
  * *Why:* Provides excellent SEO, rapid component-based UI design, and allows us to reuse ~80% of our frontend logic when migrating to mobile.
* **Styling:** `Tailwind CSS`
  * *Why:* Utility-first CSS framework for building clean, fully responsive layouts quickly.
* **Backend Runtime:** `Node.js` + `Express` (via `TypeScript`)
  * *Why:* Extremely lightweight, asynchronous runtime with a tiny memory footprint (<50MB RAM). Handles high-concurrency API calls (chats, schedule updates) efficiently.
* **Database & Auth:** `Supabase (PostgreSQL)`
  * *Why:* Offers a powerful relational database paired with built-in user authentication (sign-up, login, JWT management) right out of the box.
* **Media & Video Hosting:** `Cloudinary`
  * *Why:* Offloads heavy media processing from our database. Automatically compresses and streams dancer audition clips and dance snippets.
* **Deployment & Hosting:** `Vercel` (Frontend) + `Render` / `Railway` (Backend)
  * *Why:* Offers robust, developer-friendly free tiers that keep operational costs at $0 during local rollout.

---

### 📱 Phase 2: Mobile App Expansion
Once the web core is validated by local dance groups, we will scale into cross-platform native applications.
