const filters = ["Account", "Category", "Tags", "Currency", "Compare: Previous", "Include Pending"];
const charts = [
  "Income & Expenses Over Time (Line)",
  "Net Cashflow Per Period (Bar)",
  "Available vs Pending (Stacked Area)",
  "Income Share by Account (Pie)",
  "Income Share by Category (Donut)"
];

const bestPeriods = [
  { label: "2024-09", value: "£8,420" },
  { label: "2024-08", value: "£7,980" },
  { label: "2024-07", value: "£7,120" }
];

const worstPeriods = [
  { label: "2024-03", value: "£1,120" },
  { label: "2024-02", value: "£980" },
  { label: "2024-01", value: "£760" }
];

export default function MoneyTimelinePage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Money Timeline</h1>
        <p>Unified cashflow view with Day / Week / Month / Year switching.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          {filters.map((filter) => (
            <div key={filter} className="kpi">
              <h3>{filter}</h3>
              <p style={{ margin: 0, color: "#475569" }}>Configured in UI controls</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Charts</h2>
        <div className="grid two">
          {charts.map((chart) => (
            <div key={chart} className="kpi">
              <h3>{chart}</h3>
              <p style={{ margin: 0, color: "#475569" }}>Data from aggregate views</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Best Periods</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Period</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            {bestPeriods.map((period) => (
              <tr key={period.label}>
                <td>{period.label}</td>
                <td>{period.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Worst Periods</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Period</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            {worstPeriods.map((period) => (
              <tr key={period.label}>
                <td>{period.label}</td>
                <td>{period.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
