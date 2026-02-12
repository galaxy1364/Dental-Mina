export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <h1 style={{ margin: 0, color: "#0a7a3b" }}>Dental-Mina</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        G38 smoke build (stable). Next gates will restore full navigation/pages cleanly.
      </p>

      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <div style={{ padding: 12, borderRadius: 14, background: "rgba(0,0,0,0.04)" }}>
          <strong>Scheduling / نوبت‌دهی</strong>
          <div style={{ opacity: 0.75, marginTop: 6 }}>Placeholder</div>
        </div>

        <div style={{ padding: 12, borderRadius: 14, background: "rgba(0,0,0,0.04)" }}>
          <strong>Finance / مالی</strong>
          <div style={{ opacity: 0.75, marginTop: 6 }}>Placeholder</div>
        </div>

        <div style={{ padding: 12, borderRadius: 14, background: "rgba(0,0,0,0.04)" }}>
          <strong>Patients / بیماران</strong>
          <div style={{ opacity: 0.75, marginTop: 6 }}>Placeholder</div>
        </div>
      </div>
    </div>
  );
}