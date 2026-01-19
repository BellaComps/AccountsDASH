const posts = [
  {
    title: "Launch teaser",
    platform: "TikTok",
    status: "Snapshots: 1h/2h/3h/6h/12h/24h",
    velocity: "+28%"
  },
  {
    title: "Feature breakdown",
    platform: "Instagram",
    status: "Snapshots scheduled",
    velocity: "+14%"
  },
  {
    title: "Behind the scenes",
    platform: "X",
    status: "Capture snapshot now",
    velocity: "+8%"
  }
];

export default function SocialPostsPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Social Posts</h1>
        <p>Create posts, schedule snapshots, and capture manual metrics.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          <div className="kpi">
            <h3>Add Post</h3>
            <p style={{ margin: 0 }}>Platform · URL · Tags · Media · CTA</p>
          </div>
          <div className="kpi">
            <h3>Snapshot Schedule</h3>
            <p style={{ margin: 0 }}>1h · 2h · 3h · 6h · 12h · 24h</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Post Leaderboard</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Post</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Velocity</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.title}>
                <td>{post.title}</td>
                <td>{post.platform}</td>
                <td>{post.status}</td>
                <td>{post.velocity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
