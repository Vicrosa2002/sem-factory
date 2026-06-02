"use client"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Zap } from "lucide-react"
import { useCart } from "@/lib/store"
import type { Producto } from "@/lib/productos"

export default function ProductCard({ producto }: { producto: Producto }) {
  const agregar = useCart((s) => s.agregar)
  const descuento = Math.round(((producto.precioLista - producto.precio) / producto.precioLista) * 100)

  const handleAgregar = (e: React.MouseEvent) => {
    e.preventDefault()
    agregar({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1,
    })
  }

  return (
    <Link href={`/producto/${producto.id}`} style={{ textDecoration: "none", display: "block" }}>
      <div className="glass-card" style={{ overflow: "hidden", cursor: "pointer" }}>
        <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "linear-gradient(135deg, #E3F0FF, #F0F8FF)" }}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {descuento > 0 && (
              <span style={{
                background: "linear-gradient(135deg, #FF6B35, #FF4500)",
                color: "white",
                padding: "3px 10px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(255,107,53,0.4)",
              }}>
                -{descuento}%
              </span>
            )}
            {producto.esDigital && (
              <span style={{
                background: "rgba(13,59,142,0.85)",
                backdropFilter: "blur(8px)",
                color: "white",
                padding: "3px 10px",
                borderRadius: "999px",
                fontSize: "0.72rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
                <Zap size={10} /> Digital
              </span>
            )}
          </div>
        </div>

        <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--md-primary)", fontWeight: 600, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {producto.marca}
          </div>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--md-on-surface)", lineHeight: 1.3, marginBottom: "10px" }}>
            {producto.nombre}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--md-primary-dark)" }}>
              ${producto.precio.toLocaleString("es-MX")}
            </span>
            {producto.precioLista > producto.precio && (
              <span style={{ fontSize: "0.82rem", color: "var(--md-on-surface-variant)", textDecoration: "line-through" }}>
                ${producto.precioLista.toLocaleString("es-MX")}
              </span>
            )}
          </div>

          <button
            className="btn-filled ripple"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={handleAgregar}
          >
            <ShoppingCart size={16} />
            Agregar al carrito
          </button>
        </div>
      </div>
    </Link>
  )
}