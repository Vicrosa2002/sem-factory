export default function CoberturaPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>

      <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--md-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Telcel</p>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--md-on-surface)", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Mapa de Cobertura
        </h1>
        <p style={{ color: "var(--md-on-surface-variant)", fontSize: "1rem", lineHeight: 1.6 }}>
          Verifica la cobertura 2G, 3G, 4G LTE y 5G de Telcel en tu zona antes de contratar.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { color: "#1565C0", label: "5G",     desc: "Ultra velocidad" },
          { color: "#0288D1", label: "4G LTE", desc: "Red principal" },
          { color: "#0891B2", label: "3G",     desc: "Cobertura amplia" },
          { color: "#64B5F6", label: "2G",     desc: "Cobertura básica" },
        ].map((r) => (
          <div key={r.label} className="glass-card" style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: r.color, flexShrink: 0, boxShadow: `0 2px 8px ${r.color}60` }} />
            <div>
              <p style={{ fontWeight: 700, color: "var(--md-on-surface)", fontSize: "0.9rem" }}>{r.label}</p>
              <p style={{ fontSize: "0.78rem", color: "var(--md-on-surface-variant)" }}>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 8px 32px rgba(21,101,192,0.15)", border: "1px solid rgba(255,255,255,0.9)", marginBottom: "1rem" }}>
        <iframe
          src="https://www.nperf.com/es/map/MX/-/2004799.Telcel-Mobile/signal/?ll=23.6345&lng=-102.5528&zoom=5"
          width="100%"
          height="600"
          style={{ border: "none", display: "block" }}
          title="Mapa de cobertura Telcel"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--md-on-surface-variant)", textAlign: "center", marginBottom: "2rem" }}>
        Mapa de cobertura basado en mediciones reales de usuarios. Fuente: nperf.com
      </p>

      <div style={{ background: "linear-gradient(135deg, #0D3B8E, #1565C0)", borderRadius: "24px", padding: "2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "250px", height: "250px", background: "rgba(66,165,245,0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "0.4rem" }}>¿Hay cobertura en tu zona?</h3>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.92rem" }}>Activa tu SIM o eSIM hoy con el respaldo de Telcel.</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <a href="/catalogo?cat=esim" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "white", color: "#0D3B8E", padding: "0.8rem 1.5rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
            Ver eSIMs
          </a>
          <a href="https://wa.me/5212461576175?text=Hola%2C%20quiero%20verificar%20cobertura%20en%20mi%20zona" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "white", padding: "0.8rem 1.5rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
            Consultar por WhatsApp
          </a>
        </div>
      </div>

    </div>
  )
}