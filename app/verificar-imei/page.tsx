"use client"
import { useState } from "react"
import { Search, CheckCircle, XCircle, AlertCircle, Smartphone, Wifi, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"

type ResultadoIMEI = {
  compatible: boolean | null
  marca?: string
  modelo?: string
  tecnologia?: string
  mensaje: string
  detalles?: string
}

export default function VerificarIMEIPage() {
  const [imei, setImei] = useState("")
  const [cargando, setCargando] = useState(false)
  const [resultado, setResultado] = useState<ResultadoIMEI | null>(null)
  const [error, setError] = useState("")

  const handleInput = (val: string) => {
    const solo = val.replace(/\D/g, "").slice(0, 15)
    setImei(solo)
    setError("")
    setResultado(null)
  }

  const verificar = async () => {
    setError("")
    setResultado(null)
    if (imei.length < 15) { setError("El IMEI debe tener 15 dígitos."); return }
    setCargando(true)
    try {
      const res = await fetch(`/api/verificar-imei?imei=${imei}`)
      const data = await res.json()
      setResultado(data)
    } catch {
      setError("No se pudo verificar el IMEI. Intenta de nuevo.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

      <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ width: "72px", height: "72px", background: "linear-gradient(135deg, rgba(21,101,192,0.12), rgba(2,136,209,0.18))", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", border: "1px solid rgba(21,101,192,0.12)" }}>
          <Smartphone size={32} style={{ color: "var(--md-primary)" }} />
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--md-on-surface)", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Verificador de IMEI
        </h1>
        <p style={{ color: "var(--md-on-surface-variant)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "500px", margin: "0 auto" }}>
          Verifica si tu teléfono es compatible con la red Telcel antes de comprar tu SIM o eSIM.
        </p>
      </div>

      <div style={{ background: "rgba(21,101,192,0.06)", borderRadius: "16px", padding: "1rem 1.25rem", marginBottom: "1.75rem", display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <AlertCircle size={18} style={{ color: "var(--md-primary)", flexShrink: 0, marginTop: "2px" }} />
        <div style={{ fontSize: "0.88rem", color: "var(--md-on-surface-variant)", lineHeight: 1.55 }}>
          Para encontrar tu IMEI marca <strong style={{ color: "var(--md-on-surface)" }}>*#06#</strong> en tu teléfono, o ve a <strong style={{ color: "var(--md-on-surface)" }}>Ajustes → Acerca del teléfono</strong>. El IMEI tiene 15 dígitos.
        </div>
      </div>

      <div className="glass-card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "8px" }}>
          Número IMEI
        </label>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={15}
            value={imei}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") verificar() }}
            placeholder="Ingresa los 15 dígitos"
            style={{ flex: 1, padding: "0.9rem 1.1rem", borderRadius: "14px", border: `1.5px solid ${error ? "#C62828" : imei.length === 15 ? "var(--md-primary)" : "var(--md-outline)"}`, background: "rgba(255,255,255,0.9)", fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--md-on-surface)", outline: "none", fontFamily: "monospace" }}
          />
          <button
            onClick={verificar}
            disabled={cargando || imei.length < 15}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: imei.length === 15 ? "linear-gradient(135deg,#42A5F5,#1565C0)" : "var(--md-outline)", color: "white", padding: "0.9rem 1.5rem", borderRadius: "14px", border: "none", cursor: imei.length < 15 ? "not-allowed" : "pointer", fontWeight: 700, fontSize: "0.95rem", flexShrink: 0, opacity: cargando ? 0.7 : 1 }}
          >
            {cargando
              ? <div style={{ width: "18px", height: "18px", border: "2.5px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              : <Search size={18} />}
            {cargando ? "Verificando..." : "Verificar"}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
          {error && <p style={{ fontSize: "0.82rem", color: "#C62828", fontWeight: 600 }}>{error}</p>}
          <p style={{ fontSize: "0.78rem", color: "var(--md-on-surface-variant)", marginLeft: "auto" }}>{imei.length}/15 dígitos</p>
        </div>
      </div>

      {resultado && (
        <div className="animate-scale-in" style={{ background: resultado.compatible === true ? "rgba(46,125,50,0.06)" : resultado.compatible === false ? "rgba(198,40,40,0.06)" : "rgba(21,101,192,0.06)", border: `1.5px solid ${resultado.compatible === true ? "rgba(46,125,50,0.25)" : resultado.compatible === false ? "rgba(198,40,40,0.25)" : "rgba(21,101,192,0.2)"}`, borderRadius: "20px", padding: "1.75rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            {resultado.compatible === true
              ? <CheckCircle size={32} style={{ color: "#2E7D32", flexShrink: 0 }} />
              : resultado.compatible === false
              ? <XCircle size={32} style={{ color: "#C62828", flexShrink: 0 }} />
              : <AlertCircle size={32} style={{ color: "var(--md-primary)", flexShrink: 0 }} />}
            <div>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: resultado.compatible === true ? "#2E7D32" : resultado.compatible === false ? "#C62828" : "var(--md-primary)", marginBottom: "2px" }}>
                {resultado.mensaje}
              </h3>
              {resultado.detalles && <p style={{ fontSize: "0.88rem", color: "var(--md-on-surface-variant)", lineHeight: 1.5 }}>{resultado.detalles}</p>}
            </div>
          </div>

          {(resultado.marca || resultado.modelo || resultado.tecnologia) && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
              {[
                { label: "Marca", valor: resultado.marca },
                { label: "Modelo", valor: resultado.modelo },
                { label: "Tecnología", valor: resultado.tecnologia },
              ].filter((d) => d.valor).map((dato) => (
                <div key={dato.label} style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "0.75rem 1rem" }}>
                  <p style={{ fontSize: "0.75rem", color: "var(--md-on-surface-variant)", fontWeight: 600, marginBottom: "2px" }}>{dato.label}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--md-on-surface)" }}>{dato.valor}</p>
                </div>
              ))}
            </div>
          )}

          {resultado.compatible === true && (
            <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(46,125,50,0.15)" }}>
              <p style={{ fontSize: "0.9rem", color: "#2E7D32", fontWeight: 600, marginBottom: "0.75rem" }}>¡Tu teléfono es compatible! Elige tu plan:</p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/catalogo?cat=esim" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "linear-gradient(135deg,#42A5F5,#1565C0)", color: "white", padding: "0.7rem 1.4rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
                  Ver eSIMs <ChevronRight size={15} />
                </Link>
                <Link href="/catalogo?cat=prepago" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(21,101,192,0.1)", color: "var(--md-primary)", padding: "0.7rem 1.4rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
                  Ver SIM física <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          )}

          {resultado.compatible === false && (
            <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(198,40,40,0.15)" }}>
              <a href="https://wa.me/5212461576175?text=Hola%2C%20verifiqué%20mi%20IMEI%20y%20no%20es%20compatible%2C%20¿qué%20opciones%20tengo%3F" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "white", padding: "0.7rem 1.4rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
                Consultar por WhatsApp
              </a>
            </div>
          )}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {[
          { icon: <Wifi size={20} />, titulo: "Red 5G", desc: "Velocidades ultra rápidas. Requiere equipo compatible con banda 5G.", color: "#0D3B8E" },
          { icon: <Wifi size={20} />, titulo: "Red 4G LTE", desc: "La red más extendida de Telcel. Compatible con la mayoría de equipos.", color: "#1565C0" },
          { icon: <Shield size={20} />, titulo: "Equipo liberado", desc: "Tu equipo debe estar desbloqueado de otras operadoras para funcionar con Telcel.", color: "#0288D1" },
        ].map((item, i) => (
          <div key={i} className="glass-card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ width: "40px", height: "40px", background: `${item.color}15`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
              {item.icon}
            </div>
            <h3 style={{ fontWeight: 700, color: "var(--md-on-surface)", fontSize: "0.9rem" }}>{item.titulo}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--md-on-surface-variant)", lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}