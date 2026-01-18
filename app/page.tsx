const kpis = [
  { label: "Net Worth (GBP)", value: "£124,580", detail: "Include pending" },
  { label: "Income", value: "£32,900", detail: "+12% vs last period" },
  { label: "Expenses", value: "£18,420", detail: "-4% vs last period" },
  { label: "Net", value: "£14,480", detail: "+18% vs last period" }
];

const topAccounts = [
  { name: "Main Bank", value: "£48,200", trend: "+6%" },
  { name: "Creator Wallet", value: "£22,850", trend: "+18%" },
  { name: "Savings", value: "£53,530", trend: "+2%" }
];

const topCategories = [
  { name: "Platform Payouts", value: "£21,400" },
  { name: "Brand Deals", value: "£7,200" },
  { name: "Software", value: "£1,900" }
];

const socialHighlights = [
  { label: "Fastest Growth", value: "TikTok +3.4%" },
  { label: "Top Post", value: "Launch teaser (12.4k views)" },
  { label: "Action Plan", value: "Repost best 1h performers Wed/Fri" }
];

export default function OverviewPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Overview Dashboard</h1>
        <p className="badge">Timeframe: Month</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          {kpis.map((kpi) => (
            <div key={kpi.label} className="kpi">
              <h3>{kpi.label}</h3>
              <p style={{ fontSize: 24, margin: "4px 0" }}>{kpi.value}</p>
              <p style={{ margin: 0, color: "#475569" }}>{kpi.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Top Earning Accounts</h2>
        <div className="grid three">
          {topAccounts.map((account) => (
            <div key={account.name} className="kpi">
              <h3>{account.name}</h3>
              <p style={{ fontSize: 20, margin: "4px 0" }}>{account.value}</p>
              <p style={{ margin: 0, color: "#10b981" }}>{account.trend}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Top Spending Categories</h2>
        <div className="grid three">
          {topCategories.map((category) => (
            <div key={category.name} className="kpi">
              <h3>{category.name}</h3>
              <p style={{ fontSize: 20, margin: "4px 0" }}>{category.value}</p>
              <p style={{ margin: 0, color: "#64748b" }}>Share of expenses</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Social Highlights</h2>
        <div className="grid three">
          {socialHighlights.map((item) => (
            <div key={item.label} className="kpi">
              <h3>{item.label}</h3>
              <p style={{ fontSize: 18, margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
