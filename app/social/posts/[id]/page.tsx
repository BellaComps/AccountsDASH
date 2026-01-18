const snapshots = [
  { hour: "1h", likes: 120, comments: 18, shares: 12, views: 2400, delta: "+12%" },
  { hour: "2h", likes: 200, comments: 32, shares: 20, views: 3600, delta: "+8%" },
  { hour: "3h", likes: 260, comments: 40, shares: 24, views: 4200, delta: "+5%" },
  { hour: "6h", likes: 340, comments: 55, shares: 30, views: 5400, delta: "+3%" },
  { hour: "12h", likes: 410, comments: 70, shares: 44, views: 7200, delta: "+2%" },
  { hour: "24h", likes: 520, comments: 88, shares: 60, views: 10400, delta: "+1%" }
];

export default function PostDetailPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Post Detail</h1>
        <p>Velocity curve and snapshot deltas for early-winner detection.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          <div className="kpi">
            <h3>Early Winner Score</h3>
            <p style={{ margin: 0, fontSize: 20 }}>1.4x median velocity</p>
          </div>
          <div className="kpi">
            <h3>Similar Top Posts</h3>
            <p style={{ margin: 0 }}>#launch · #tutorial · video</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Snapshot Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Shares</th>
              <th>Views</th>
              <th>Delta</th>
            </tr>
          </thead>
          <tbody>
            {snapshots.map((snapshot) => (
              <tr key={snapshot.hour}>
                <td>{snapshot.hour}</td>
                <td>{snapshot.likes}</td>
                <td>{snapshot.comments}</td>
                <td>{snapshot.shares}</td>
                <td>{snapshot.views}</td>
                <td>{snapshot.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
