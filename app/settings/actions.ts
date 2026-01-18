"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function updateSettings(formData: FormData) {
  const baseCurrency = String(formData.get("baseCurrency") ?? "GBP");
  const timezone = String(formData.get("timezone") ?? "Europe/London");
  const fxProvider = String(formData.get("fxProvider") ?? "Frankfurter");
  const fxCacheMins = Number(formData.get("fxCacheMins") ?? 30);

  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  await supabase.from("settings").upsert({
    user_id: user.id,
    base_currency: baseCurrency,
    timezone,
    fx_provider: fxProvider,
    fx_cache_minutes: fxCacheMins,
    updated_at: new Date().toISOString()
  });

  revalidatePath("/settings");
}
