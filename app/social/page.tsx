const growth = [
  { platform: "X", followers: "+1.2%", posts: 8 },
  { platform: "Instagram", followers: "+2.8%", posts: 5 },
  { platform: "TikTok", followers: "+3.4%", posts: 6 },
  { platform: "Reddit", followers: "+0.8%", posts: 3 }
];

export default function SocialOverviewPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Social Overview</h1>
        <p>Day / Week / Month / Year performance across platforms.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          <div className="kpi">
            <h3>Engagement Total</h3>
            <p style={{ margin: 0, fontSize: 20 }}>48.2k interactions</p>
          </div>
          <div className="kpi">
            <h3>Engagement Share</h3>
            <p style={{ margin: 0 }}>TikTok 42% · Instagram 30%</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Follower Growth & Posting Frequency</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Follower Growth</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {growth.map((item) => (
              <tr key={item.platform}>
                <td>{item.platform}</td>
                <td>{item.followers}</td>
                <td>{item.posts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
