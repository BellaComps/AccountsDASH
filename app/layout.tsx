import "./globals.css";
import Link from "next/link";

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
