const weekdayStats = [
  { day: "Mon", value: "£4,120", share: "18%" },
  { day: "Tue", value: "£3,540", share: "15%" },
  { day: "Wed", value: "£4,880", share: "21%" },
  { day: "Thu", value: "£5,120", share: "22%" },
  { day: "Fri", value: "£3,200", share: "14%" },
  { day: "Sat", value: "£1,220", share: "5%" },
  { day: "Sun", value: "£1,040", share: "5%" }
];

export default function WeekdayInsightsPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Weekday Performance</h1>
        <p>Identify which days drive the most income and consistency.</p>
        <div className="grid three" style={{ marginTop: 16 }}>
          <div className="kpi">
            <h3>Best Weekday</h3>
            <p style={{ margin: 0, fontSize: 20 }}>Thursday (22%)</p>
          </div>
          <div className="kpi">
            <h3>Consistency Score</h3>
            <p style={{ margin: 0, fontSize: 20 }}>82 / 100</p>
          </div>
          <div className="kpi">
            <h3>Recommendation</h3>
            <p style={{ margin: 0 }}>Schedule promo pushes Thu + Wed.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Income by Weekday</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Total Income</th>
              <th>% Share</th>
            </tr>
          </thead>
          <tbody>
            {weekdayStats.map((stat) => (
              <tr key={stat.day}>
                <td>{stat.day}</td>
                <td>{stat.value}</td>
                <td>{stat.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
