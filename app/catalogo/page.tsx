"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { productos, categorias } from "@/lib/productos"

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
      : catActiva === "esim"
      ? productos.filter((p) => p.subcategoria === "esim")
      : catActiva === "sim"
      ? productos.filter((p) => p.subcategoria === "sim")
      : productos.filter((p) => p.categoria === catActiva)
  ).filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.marca.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

      <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--md-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
          SEM Factory
        </p>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--md-on-surface)", letterSpacing: "-0.03em", marginBottom: "0.35rem" }}>
          Catálogo
        </h1>
        <p style={{ color: "var(--md-on-surface-variant)", fontSize: "0.95rem" }}>
          {filtrados.length} producto{filtrados.length !== 1 ? "s" : ""} disponible{filtrados.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ position: "relative", maxWidth: "480px" }}>
          <Search size={18} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--md-on-surface-variant)", pointerEvents: "none" }} />
          <input
            style={{
              width: "100%", padding: "0.85rem 2.8rem",
              borderRadius: "999px",
              border: "1.5px solid var(--md-outline)",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(12px)",
              fontSize: "0.95rem", color: "var(--md-on-surface)",
              outline: "none", transition: "all 0.2s",
              boxShadow: "0 2px 12px rgba(21,101,192,0.06)",
            }}
            placeholder="Buscar marca o producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--md-primary)"
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(21,101,192,0.12)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--md-outline)"
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(21,101,192,0.06)"
            }}
          />
          {busqueda && (
            <button
              onClick={() => setBusqueda("")}
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--md-on-surface-variant)", display: "flex", alignItems: "center" }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCatActiva(cat.id)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "0.5rem 1.1rem", borderRadius: "999px",
                border: `1.5px solid ${catActiva === cat.id ? "var(--md-primary)" : "var(--md-outline)"}`,
                background: catActiva === cat.id ? "var(--md-primary)" : "rgba(255,255,255,0.75)",
                backdropFilter: "blur(8px)",
                color: catActiva === cat.id ? "white" : "var(--md-on-surface-variant)",
                fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                boxShadow: catActiva === cat.id ? "0 4px 14px rgba(21,101,192,0.3)" : "none",
                transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                transform: catActiva === cat.id ? "scale(1.04)" : "scale(1)",
              }}
              onMouseEnter={(e) => { if (catActiva !== cat.id) e.currentTarget.style.borderColor = "var(--md-primary)" }}
              onMouseLeave={(e) => { if (catActiva !== cat.id) e.currentTarget.style.borderColor = "var(--md-outline)" }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <div style={{ textAlign: "center", padding: "5rem 1rem", color: "var(--md-on-surface-variant)" }}>
          <SlidersHorizontal size={52} style={{ opacity: 0.25, margin: "0 auto 1rem", display: "block" }} />
          <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>Sin resultados</p>
          <p style={{ fontSize: "0.9rem", marginTop: "4px" }}>Intenta con otra búsqueda o categoría</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(265px, 1fr))", gap: "1.25rem" }}>
          {filtrados.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.045}s` }}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      )}
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