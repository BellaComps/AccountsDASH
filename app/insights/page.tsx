const insights = [
  "Best posting windows: Wed 18:00, Fri 12:00",
  "Top tags last 30 days: #launch, #tutorial",
  "Early-winner alert threshold: +25% vs median",
  "Content focus: short-form video + CTA 'Download'"
];

export default function InsightsPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Insights & Recommendations</h1>
        <p>Heatmaps, scatter plots, and automated next-step guidance.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          <div className="kpi">
            <h3>Heatmap</h3>
            <p style={{ margin: 0 }}>Weekday × hour performance matrix</p>
          </div>
          <div className="kpi">
            <h3>Velocity Scatter</h3>
            <p style={{ margin: 0 }}>1h velocity vs 24h outcomes</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Weekly Action List</h2>
        <ul>
          {insights.map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
