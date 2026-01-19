import { createSupabaseServerClient } from "@/lib/supabase/server";
import { updateSettings } from "./actions";

export default async function SettingsPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data: settings } = user
    ? await supabase
        .from("settings")
        .select("base_currency, timezone, fx_provider, fx_cache_minutes")
        .eq("user_id", user.id)
        .maybeSingle()
    : { data: null };

  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Settings</h1>
        <p>Configure base currency, timezone, FX provider, and caching.</p>
        <form action={updateSettings} className="grid" style={{ gap: 16, maxWidth: 520 }}>
          <label>
            Base Currency
            <input
              name="baseCurrency"
              defaultValue={settings?.base_currency ?? "GBP"}
              required
            />
          </label>
          <label>
            Timezone
            <input
              name="timezone"
              defaultValue={settings?.timezone ?? "Europe/London"}
              required
            />
          </label>
          <label>
            FX Provider
            <input
              name="fxProvider"
              defaultValue={settings?.fx_provider ?? "Frankfurter"}
              required
            />
          </label>
          <label>
            FX Cache Minutes
            <input
              name="fxCacheMins"
              type="number"
              min={5}
              defaultValue={settings?.fx_cache_minutes ?? 30}
              required
            />
          </label>
          <button type="submit">Save settings</button>
        </form>
      </section>

      <section>
        <h2>Exports & Backups</h2>
        <p>Configure CSV export, scheduled backups, and audit logs.</p>
      </section>
    </div>
  );
}
