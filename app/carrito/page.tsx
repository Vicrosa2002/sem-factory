"use client"
import { useCart } from "@/lib/store"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Zap, CreditCard } from "lucide-react"

export default function CarritoPage() {
  const { items, quitar, actualizar, total, limpiar } = useCart()
  const subtotal = total()
  const envio = items.some((i) => !i.variante?.includes("esim")) ? 99 : 0
  const totalFinal = subtotal + envio

  if (items.length === 0) return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div className="glass-card" style={{ padding: "4rem 2rem" }}>
        <ShoppingBag size={64} style={{ color: "var(--md-primary-light)", opacity: 0.4, margin: "0 auto 1.5rem", display: "block" }} />
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--md-on-surface)", marginBottom: "0.75rem" }}>Tu carrito está vacío</h2>
        <p style={{ color: "var(--md-on-surface-variant)", marginBottom: "2rem" }}>Agrega productos desde el catálogo</p>
        <Link href="/catalogo" className="btn-filled" style={{ display: "inline-flex" }}>
          <ShoppingBag size={18} /> Ver catálogo
        </Link>
      </div>
    </div>
  )

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <Link href="/catalogo" className="btn-tonal" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <ArrowLeft size={16} /> Seguir comprando
        </Link>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--md-on-surface)" }}>
          Carrito ({items.length} {items.length === 1 ? "producto" : "productos"})
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "1.5rem", alignItems: "start" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((item) => (
            <div key={item.id + (item.variante || "")} className="glass-card animate-fade-up" style={{ padding: "1.25rem", display: "flex", gap: "1.25rem", alignItems: "center" }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "14px", overflow: "hidden", background: "linear-gradient(135deg,#E3F0FF,#F0F8FF)", flexShrink: 0 }}>
                <Image src={item.imagen} alt={item.nombre} width={90} height={90} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "4px", fontSize: "0.95rem" }}>{item.nombre}</p>
                {item.variante && (
                  <p style={{ fontSize: "0.8rem", color: "var(--md-on-surface-variant)", marginBottom: "8px" }}>{item.variante}</p>
                )}
                <p style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--md-primary-dark)" }}>
                  ${item.precio.toLocaleString("es-MX")}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  onClick={() => actualizar(item.id, item.cantidad - 1, item.variante)}
                  style={{ width: "34px", height: "34px", borderRadius: "999px", border: "1.5px solid var(--md-outline)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--md-on-surface)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--md-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--md-outline)"}
                >
                  <Minus size={14} />
                </button>
                <span style={{ width: "28px", textAlign: "center", fontWeight: 700, fontSize: "1rem" }}>{item.cantidad}</span>
                <button
                  onClick={() => actualizar(item.id, item.cantidad + 1, item.variante)}
                  style={{ width: "34px", height: "34px", borderRadius: "999px", border: "1.5px solid var(--md-outline)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--md-on-surface)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--md-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--md-outline)"}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={() => quitar(item.id, item.variante)}
                style={{ padding: "0.5rem", borderRadius: "999px", border: "none", background: "transparent", cursor: "pointer", color: "var(--md-error)", transition: "all 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#FFEBEE")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: "1.5rem", position: "sticky", top: "90px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--md-on-surface)", marginBottom: "1.25rem" }}>
            Resumen del pedido
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {[
              { label: "Subtotal", valor: `$${subtotal.toLocaleString("es-MX")}` },
              { label: "Envío", valor: envio === 0 ? "Gratis" : `$${envio}` },
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--md-on-surface-variant)" }}>
                <span>{row.label}</span>
                <span style={{ fontWeight: 600, color: row.valor === "Gratis" ? "var(--md-success)" : "var(--md-on-surface)" }}>{row.valor}</span>
              </div>
            ))}
            <div style={{ height: "1px", background: "var(--md-outline)", margin: "0.25rem 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 800, color: "var(--md-on-surface)" }}>
              <span>Total</span>
              <span style={{ color: "var(--md-primary-dark)" }}>${totalFinal.toLocaleString("es-MX")}</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button className="btn-filled ripple" style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}>
              <CreditCard size={18} /> Proceder al pago
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", fontSize: "0.8rem", color: "var(--md-on-surface-variant)" }}>
              <Zap size={13} style={{ color: "var(--md-primary)" }} />
              Pago seguro con MercadoPago
            </div>
          </div>

          <div style={{ marginTop: "1.25rem", padding: "0.85rem", background: "rgba(21,101,192,0.06)", borderRadius: "12px", fontSize: "0.8rem", color: "var(--md-on-surface-variant)", lineHeight: 1.5 }}>
            ¿Necesitas factura? Podrás solicitarla después de completar tu compra.
          </div>
        </div>
      </div>
    </div>
  )
}