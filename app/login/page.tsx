import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function signIn(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = createSupabaseServerClient();

  await supabase.auth.signInWithPassword({ email, password });
  redirect("/");
}

async function signUp(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = createSupabaseServerClient();

  const { data } = await supabase.auth.signUp({ email, password });

  if (data.session) {
    redirect("/");
  }
  redirect("/");
}

export default async function LoginPage({
  searchParams
}: {
  searchParams: { redirect?: string };
}) {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    redirect(searchParams.redirect ?? "/");
  }

  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Sign in to AccountsDASH</h1>
        <p>Use your Supabase credentials to access the dashboard.</p>
        <form action={signIn} className="grid" style={{ gap: 12, maxWidth: 420 }}>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Password
            <input name="password" type="password" required />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </section>

      <section>
        <h2>New here?</h2>
        <p>Create an account to start tracking your money and social KPIs.</p>
        <form action={signUp} className="grid" style={{ gap: 12, maxWidth: 420 }}>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Password
            <input name="password" type="password" required />
          </label>
          <button type="submit">Create account</button>
        </form>
        <p style={{ color: "#475569", marginTop: 12 }}>
          You may need to confirm your email before signing in.
        </p>
      </section>
    </div>
  );
}
