"use client"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Zap } from "lucide-react"
import { useCart } from "@/lib/store"
import type { Producto } from "@/lib/productos"

const ICONOS_REDES: Record<string, string> = {
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  snapchat: "M12.166 3c-1.837 0-4.336.95-5.48 3.277C6.168 7.37 6.099 8.7 6.22 9.71c-.284.143-.618.23-.98.23-.498 0-.84-.184-1.064-.184-.21 0-.362.07-.362.273 0 .34.627.61 1.233.79.069.02.136.04.2.062-.1.44-.268.862-.553 1.198-.63.742-1.686 1.175-3.193 1.293-.13.01-.24.127-.198.265.162.542 1.265.888 2.297 1.046.07.01.12.076.097.143-.098.285-.37.98-.37 1.175 0 .186.145.264.318.264.244 0 .668-.1 1.21-.1.544 0 1.124.133 1.8.566C7.96 17.382 8.98 18 11.1 18c1.97 0 3.07-.618 3.85-1.27.678-.433 1.257-.566 1.8-.566.543 0 .967.1 1.21.1.174 0 .318-.078.318-.264 0-.196-.272-.89-.37-1.175-.023-.067.027-.132.097-.143 1.032-.158 2.135-.504 2.297-1.046.042-.138-.068-.255-.198-.265-1.507-.118-2.563-.551-3.193-1.293-.285-.336-.453-.758-.553-1.198.064-.022.131-.04.2-.062.606-.18 1.233-.45 1.233-.79 0-.203-.152-.273-.362-.273-.224 0-.566.184-1.064.184-.362 0-.696-.087-.98-.23.121-1.01.052-2.34-.466-3.433C16.502 3.95 14.003 3 12.166 3z",
  uber: "M0 0h24v24H0z",
}

const COLORES_REDES: Record<string, string> = {
  whatsapp: "#25D366",
  facebook: "#1877F2",
  instagram: "#E4405F",
  x: "#000000",
  snapchat: "#FFFC00",
  uber: "#000000",
}

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
      <div className="glass-card" style={{ overflow: "hidden", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", height: "200px", overflow: "hidden", background: "linear-gradient(135deg, #E3F0FF, #F0F8FF)" }}>
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
              <span style={{ background: "linear-gradient(135deg, #FF6B35, #FF4500)", color: "white", padding: "3px 10px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, boxShadow: "0 2px 8px rgba(255,107,53,0.4)" }}>
                -{descuento}%
              </span>
            )}
            {producto.esDigital && (
              <span style={{ background: "rgba(13,59,142,0.85)", backdropFilter: "blur(8px)", color: "white", padding: "3px 10px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                <Zap size={10} /> Digital
              </span>
            )}
          </div>
          {producto.badge && (
            <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(13,59,142,0.85)", backdropFilter: "blur(8px)", color: "white", padding: "3px 10px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700 }}>
              {producto.badge}
            </div>
          )}
        </div>

        <div style={{ padding: "1rem 1.1rem 1.2rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.6rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--md-primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {producto.marca}
          </div>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--md-on-surface)", lineHeight: 1.3 }}>
            {producto.nombre}
          </h3>

          {producto.redes && producto.redes.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--md-on-surface-variant)", fontWeight: 600 }}>Incluye:</span>
              {producto.redes.map((red) => (
                <div key={red} title={red.charAt(0).toUpperCase() + red.slice(1)} style={{ width: "22px", height: "22px", borderRadius: "6px", background: red === "snapchat" ? "#FFFC00" : COLORES_REDES[red], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={red === "snapchat" ? "#000" : "white"}>
                    <path d={ICONOS_REDES[red]} />
                  </svg>
                </div>
              ))}
              <span style={{ fontSize: "0.7rem", color: "var(--md-on-surface-variant)" }}>sin límite</span>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
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