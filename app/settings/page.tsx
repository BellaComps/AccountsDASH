const settings = [
  { label: "Base Currency", value: "GBP" },
  { label: "Timezone", value: "Europe/London" },
  { label: "FX Provider", value: "Frankfurter" },
  { label: "FX Cache", value: "30 minutes" },
  { label: "Accounts & Categories", value: "Manage" },
  { label: "Social Connectors", value: "Feature flags" }
];

export default function SettingsPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <section>
        <h1>Settings</h1>
        <p>Configure base currency, timezone, FX, and connectors.</p>
        <div className="grid two" style={{ marginTop: 16 }}>
          {settings.map((setting) => (
            <div key={setting.label} className="kpi">
              <h3>{setting.label}</h3>
              <p style={{ margin: 0 }}>{setting.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Exports & Backups</h2>
        <p>Configure CSV export, scheduled backups, and audit logs.</p>
      </section>
    </div>
  );
}
