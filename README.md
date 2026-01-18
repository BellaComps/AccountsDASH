# AccountsDASH

AccountsDASH is a Next.js (App Router) dashboard scaffold for money, FX, and social analytics.

## Requirements

- Node.js 18+
- Supabase project (URL + anon key)

## Quickstart

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your Supabase credentials.

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Supabase setup

1. Create a new Supabase project.
2. Run the SQL in `supabase/seed.sql` to create the `settings` table and RLS policies.
3. Configure redirect URLs in Supabase Auth settings:
   - `http://localhost:3000/api/auth/callback`

## Next Steps

- Add the remaining tables for money + social tracking
- Implement recurring transactions and FX caching
- Replace placeholder data with live queries
