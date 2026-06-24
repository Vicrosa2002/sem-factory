"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, X, Zap, Wifi, Car, Phone, Package, Smartphone, Wrench } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { productos, categorias } from "@/lib/productos"

const CAT_CONFIG: Record<string, { icon: JSX.Element; color: string; gradient: string; desc: string }> = {
  todos:        { icon: <Package size={28} />,    color: "#1565C0", gradient: "linear-gradient(135deg, #0A2D6E, #1565C0, #0288D1)",  desc: "Todos nuestros productos y servicios Telcel" },
  recargas:     { icon: <Zap size={28} />,        color: "#1565C0", gradient: "linear-gradient(135deg, #1255B5, #0288D1)",            desc: "Planes Libre sin plazos forzosos. Redes sociales incluidas." },
  paquetes:     { icon: <Zap size={28} />,        color: "#4A00E0", gradient: "linear-gradient(135deg, #4A00E0, #1565C0)",            desc: "Actívate sin SIM física. Línea nueva, portabilidad o migración." },
  internet:     { icon: <Wifi size={28} />,       color: "#0277BD", gradient: "linear-gradient(135deg, #0277BD, #0288D1)",            desc: "WiFi Telcel en casa. GB ilimitados desde $399/mes." },
  planes_renta: { icon: <Phone size={28} />,      color: "#0D3B8E", gradient: "linear-gradient(135deg, #0D3B8E, #1565C0)",            desc: "Planes Ultra 5G con internet sin límite. Sin plazo forzoso." },
  vehicular:    { icon: <Car size={28} />,        color: "#0D3B8E", gradient: "linear-gradient(135deg, #0D3B8E, #0288D1)",            desc: "GPS en tiempo real para tu auto o flotilla con red Telcel." },
  smartphone:   { icon: <Smartphone size={28} />, color: "#1565C0", gradient: "linear-gradient(135deg, #1255B5, #0288D1)",            desc: "Smartphones compatibles con eSIM Telcel." },
  accesorio:    { icon: <Wrench size={28} />,     color: "#0277BD", gradient: "linear-gradient(135deg, #0277BD, #0288D1)",            desc: "Accesorios y complementos para tu equipo." },
}

const CAT_LABEL: Record<string, string> = {
  todos: "Todo", recargas: "Recargas", paquetes: "eSIM", internet: "Internet",
  planes_renta: "Planes de Renta", vehicular: "GPS Vehicular", smartphone: "Smartphones", accesorio: "Accesorios",
}

function CatalogoContent() {
  const searchParams = useSearchParams()
  const [catActiva, setCatActiva] = useState("todos")
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    const cat = searchParams.get("cat")
    if (cat) setCatActiva(cat)
  }, [searchParams])

  const filtrados = (
    catActiva === "todos"
      ? productos
      : catActiva === "paquetes"
      ? productos.filter((p) => p.subcategoria === "esim")
      : catActiva === "esim"
      ? productos.filter((p) => p.subcategoria === "esim")
      : catActiva === "sim"
      ? productos.filter((p) => p.subcategoria === "sim")
      : productos.filter((p) => p.categoria === catActiva)
  ).filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.marca.toLowerCase().includes(busqueda.toLowerCase())
  )

  const config = CAT_CONFIG[catActiva] ?? CAT_CONFIG["todos"]

  return (
    <div>
      <div style={{
        background: config.gradient,
        padding: "3rem 2rem 2.5rem",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}>
        <div style={{ position: "absolute", top: "-20%", right: "5%", width: "350px", height: "350px", background: "rgba(255,255,255,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-30%", left: "3%", width: "250px", height: "250px", background: "rgba(255,255,255,0.04)", borderRadius: "50%", filter: "blur(40px)" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1rem" }}>
            <div style={{ width: "56px", height: "56px", background: "rgba(255,255,255,0.15)", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
              {config.icon}
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>
                SEM Factory · Catálogo
              </p>
              <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                {CAT_LABEL[catActiva] ?? "Catálogo"}
              </h1>
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", maxWidth: "500px", lineHeight: 1.6, marginBottom: "1.75rem" }}>
            {config.desc}
          </p>

          <div style={{ position: "relative", maxWidth: "460px" }}>
            <Search size={17} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.5)", pointerEvents: "none" }} />
            <input
              style={{
                width: "100%",
                padding: "0.875rem 2.75rem",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.12)",
                fontSize: "0.9rem",
                color: "white",
                outline: "none",
              }}
              placeholder="Buscar producto o plan..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onFocus={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)" }}
              onBlur={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)" }}
            />
            {busqueda && (
              <button onClick={() => setBusqueda("")} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center" }}>
                <X size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #E8EDF5", boxShadow: "0 4px 16px rgba(21,101,192,0.07)", position: "sticky", top: "64px", zIndex: 10 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0.875rem 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setCatActiva(cat.id); setBusqueda("") }}
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "0.45rem 1.1rem", borderRadius: "999px",
                border: `1.5px solid ${catActiva === cat.id ? "#1565C0" : "#E8EDF5"}`,
                background: catActiva === cat.id ? "#1565C0" : "white",
                color: catActiva === cat.id ? "white" : "#44475A",
                fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: catActiva === cat.id ? "0 4px 12px rgba(21,101,192,0.25)" : "none",
              }}
              onMouseEnter={(e) => { if (catActiva !== cat.id) { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.color = "#1565C0" } }}
              onMouseLeave={(e) => { if (catActiva !== cat.id) { e.currentTarget.style.borderColor = "#E8EDF5"; e.currentTarget.style.color = "#44475A" } }}
            >
              {cat.label}
            </button>
          ))}
          <span style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#888", fontWeight: 500, whiteSpace: "nowrap" }}>
            {filtrados.length} resultado{filtrados.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 2rem 5rem" }}>
        {filtrados.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
            <div style={{ width: "72px", height: "72px", background: "#F0F7FF", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
              <Search size={32} style={{ color: "#1565C0", opacity: 0.4 }} />
            </div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1A2E", marginBottom: "6px" }}>Sin resultados</p>
            <p style={{ fontSize: "0.875rem", color: "#888" }}>Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(265px, 1fr))", gap: "1.25rem" }}>
            {filtrados.map((p) => (
              <div key={p.id}>
                <ProductCard producto={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <Suspense>
      <CatalogoContent />
    </Suspense>
  )
}