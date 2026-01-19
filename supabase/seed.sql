-- Initial settings table for user preferences
create table if not exists public.settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  base_currency text not null default 'GBP',
  timezone text not null default 'Europe/London',
  fx_provider text not null default 'Frankfurter',
  fx_cache_minutes integer not null default 30,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.settings enable row level security;

create policy "Users can view their settings" on public.settings
  for select using (auth.uid() = user_id);

create policy "Users can insert their settings" on public.settings
  for insert with check (auth.uid() = user_id);

create policy "Users can update their settings" on public.settings
  for update using (auth.uid() = user_id);
