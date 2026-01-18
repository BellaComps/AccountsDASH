import "./globals.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata = {
  title: "AccountsDASH",
  description: "Money + Social analytics dashboard"
};

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/money/timeline", label: "Money Timeline" },
  { href: "/money/weekday", label: "Weekday Insights" },
  { href: "/social", label: "Social Overview" },
  { href: "/social/posts", label: "Social Posts" },
  { href: "/insights", label: "Insights" },
  { href: "/settings", label: "Settings" }
];

async function signOut() {
  "use server";
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-left">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            {user ? (
              <form action={signOut}>
                <button type="submit">Sign out</button>
              </form>
            ) : (
              <Link href="/login">Sign in</Link>
            )}
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
