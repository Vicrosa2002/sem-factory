"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Zap, ChevronLeft, Check, Package, Shield, RefreshCw, Clock, Smartphone, FileText, ChevronDown } from "lucide-react"
import { getProducto, productos } from "@/lib/productos"
import { useCart } from "@/lib/store"

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

const ICONOS_REDES: Record<string, string> = {
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  snapchat: "M12.166 3c-1.837 0-4.336.95-5.48 3.277C6.168 7.37 6.099 8.7 6.22 9.71c-.284.143-.618.23-.98.23-.498 0-.84-.184-1.064-.184-.21 0-.362.07-.362.273 0 .34.627.61 1.233.79.069.02.136.04.2.062-.1.44-.268.862-.553 1.198-.63.742-1.686 1.175-3.193 1.293-.13.01-.24.127-.198.265.162.542 1.265.888 2.297 1.046.07.01.12.076.097.143-.098.285-.37.98-.37 1.175 0 .186.145.264.318.264.244 0 .668-.1 1.21-.1.544 0 1.124.133 1.8.566C7.96 17.382 8.98 18 11.1 18c1.97 0 3.07-.618 3.85-1.27.678-.433 1.257-.566 1.8-.566.543 0 .967.1 1.21.1.174 0 .318-.078.318-.264 0-.196-.272-.89-.37-1.175-.023-.067.027-.132.097-.143 1.032-.158 2.135-.504 2.297-1.046.042-.138-.068-.255-.198-.265-1.507-.118-2.563-.551-3.193-1.293-.285-.336-.453-.758-.553-1.198.064-.022.131-.04.2-.062.606-.18 1.233-.45 1.233-.79 0-.203-.152-.273-.362-.273-.224 0-.566.184-1.064.184-.362 0-.696-.087-.98-.23.121-1.01.052-2.34-.466-3.433C16.502 3.95 14.003 3 12.166 3z",
  uber: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z",
}

const COLORES_REDES: Record<string, string> = {
  whatsapp: "#25D366",
  facebook: "#1877F2",
  instagram: "#E4405F",
  x: "#000000",
  snapchat: "#FFFC00",
  uber: "#000000",
}

const NOMBRES_REDES: Record<string, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X (Twitter)",
  snapchat: "Snapchat",
  uber: "Uber",
}

export default function ProductoPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const producto = getProducto(id)
  const agregar = useCart((s) => s.agregar)
  const [variante, setVariante] = useState(() => producto?.variantes[0]?.valor || "")
  const [imgActiva, setImgActiva] = useState(0)
  const [agregado, setAgregado] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [requisitoAbierto, setRequisitoAbierto] = useState<number | null>(0)

  if (!producto) return (
    <div style={{ textAlign: "center", padding: "8rem 1.5rem" }}>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--md-on-surface-variant)" }}>Producto no encontrado</p>
      <Link href="/catalogo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--md-primary)", color: "white", padding: "0.85rem 1.75rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700 }}>Ir al catálogo</Link>
    </div>
  )

  const descuento = producto.precioLista > producto.precio ? Math.round(((producto.precioLista - producto.precio) / producto.precioLista) * 100) : 0
  const precioPorDia = producto.categoria === "recargas" ? (producto.precio / 30).toFixed(2) : null
  const relacionados = productos.filter((p) => p.categoria === producto.categoria && p.id !== producto.id).slice(0, 3)
  const esEsim = producto.subcategoria === "esim"
  const tieneRequisitos = producto.requisitos && producto.requisitos.length > 0
  const tieneRedes = producto.redes && producto.redes.length > 0

  const handleAgregar = () => {
    agregar({ id: producto.id, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen, cantidad, variante })
    setAgregado(true)
    setTimeout(() => setAgregado(false), 2200)
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>

      <button onClick={() => router.back()} style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "white", border: "1px solid #E8EDF5", borderRadius: "999px", padding: "0.55rem 1.1rem", cursor: "pointer", color: "var(--md-on-surface)", fontWeight: 600, fontSize: "0.88rem", marginBottom: "1.75rem", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
        <ChevronLeft size={17} /> Regresar
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>

        <div>
          <div style={{ aspectRatio: "1", borderRadius: "24px", overflow: "hidden", background: "linear-gradient(135deg,#E3F0FF,#F0F8FF)", border: "1px solid #E8EDF5", boxShadow: "0 4px 20px rgba(21,101,192,0.08)", marginBottom: "0.75rem", position: "relative" }}>
            <Image src={producto.imagenes[imgActiva]} alt={producto.nombre} fill style={{ objectFit: "cover" }} sizes="500px" priority />
            {descuento > 0 && (
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "linear-gradient(135deg,#FF6B35,#FF4500)", color: "white", padding: "5px 14px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 800 }}>
                -{descuento}% OFF
              </div>
            )}
            {producto.esDigital && (
              <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(13,59,142,0.9)", color: "white", padding: "5px 12px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                <Zap size={11} fill="white" /> Digital
              </div>
            )}
          </div>
          {producto.imagenes.length > 1 && (
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {producto.imagenes.map((img, i) => (
                <button key={i} onClick={() => setImgActiva(i)} style={{ width: "68px", height: "68px", borderRadius: "14px", overflow: "hidden", border: `2px solid ${imgActiva === i ? "var(--md-primary)" : "transparent"}`, padding: 0, background: "none", cursor: "pointer" }}>
                  <Image src={img} alt="" width={68} height={68} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--md-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>{producto.marca}</span>
            {producto.esDigital && (
              <span style={{ background: "rgba(13,59,142,0.08)", color: "var(--md-primary)", padding: "2px 10px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                <Zap size={10} /> Entrega digital
              </span>
            )}
            {producto.badge && (
              <span style={{ background: "linear-gradient(135deg,#FF6B35,#FF4500)", color: "white", padding: "2px 10px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 800 }}>
                {producto.badge}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--md-on-surface)", lineHeight: 1.15, letterSpacing: "-0.025em" }}>{producto.nombre}</h1>

          <p style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65, fontSize: "0.95rem" }}>{producto.descripcion}</p>

          {producto.beneficios && producto.beneficios.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {producto.beneficios.map((b, i) => (
                <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.12)", borderRadius: "999px", padding: "4px 12px", fontSize: "0.8rem", fontWeight: 600, color: "var(--md-primary)" }}>
                  <Check size={11} style={{ color: "#2E7D32" }} />
                  {b}
                </div>
              ))}
            </div>
          )}

          {tieneRedes && (
            <div style={{ background: "#F0F7FF", border: "1px solid #D0E4FF", borderRadius: "16px", padding: "1rem 1.25rem" }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--md-primary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Redes sociales sin límite incluidas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {producto.redes!.map((red) => (
                  <div key={red} style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "white", border: "1px solid #E8EDF5", borderRadius: "999px", padding: "5px 12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: red === "snapchat" ? "#FFFC00" : COLORES_REDES[red], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill={red === "snapchat" ? "#000" : "white"}>
                        <path d={ICONOS_REDES[red]} />
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#333" }}>{NOMBRES_REDES[red]}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.72rem", color: "var(--md-on-surface-variant)", marginTop: "0.625rem" }}>
                * Aplica en México. EUA y Canadá consumen datos del plan.
              </p>
            </div>
          )}

          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--md-primary-dark)", letterSpacing: "-0.02em" }}>${(producto.precio * cantidad).toLocaleString("es-MX")}</span>
              {producto.precioLista > producto.precio && (
                <span style={{ fontSize: "1rem", color: "var(--md-on-surface-variant)", textDecoration: "line-through" }}>${(producto.precioLista * cantidad).toLocaleString("es-MX")}</span>
              )}
            </div>
            {descuento > 0 && (
              <span style={{ fontSize: "0.85rem", color: "#2E7D32", fontWeight: 700, background: "#E8F5E9", padding: "3px 12px", borderRadius: "999px", display: "inline-block", marginTop: "4px" }}>
                Ahorras ${((producto.precioLista - producto.precio) * cantidad).toLocaleString("es-MX")}
              </span>
            )}
            {precioPorDia && (
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "6px", fontSize: "0.82rem", color: "var(--md-on-surface-variant)" }}>
                <Clock size={13} />
                Solo <strong style={{ color: "var(--md-primary)" }}>${precioPorDia}/día</strong> por 30 días
              </div>
            )}
          </div>

          {producto.variantes.length > 0 && (
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "8px" }}>{esEsim ? "Plan:" : "Color / Variante:"}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {producto.variantes.map((v) => (
                  <button key={v.valor} onClick={() => setVariante(v.valor)} style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "0.5rem 1rem", borderRadius: "999px", border: `1.5px solid ${variante === v.valor ? "var(--md-primary)" : "var(--md-outline)"}`, background: variante === v.valor ? "var(--md-primary)" : "white", color: variante === v.valor ? "white" : "var(--md-on-surface-variant)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                    {variante === v.valor && <Check size={12} />}
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!esEsim && (
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "8px" }}>Cantidad:</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => setCantidad(n)} style={{ width: "38px", height: "38px", borderRadius: "999px", border: `1.5px solid ${cantidad === n ? "var(--md-primary)" : "var(--md-outline)"}`, background: cantidad === n ? "var(--md-primary)" : "white", color: cantidad === n ? "white" : "var(--md-on-surface-variant)", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s" }}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {esEsim && (
            <Link href="/verificar-imei" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F0F7FF", border: "1px solid #D0E4FF", borderRadius: "14px", padding: "0.75rem 1.1rem", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, color: "var(--md-primary)" }}>
              <Smartphone size={16} />
              ¿Tu teléfono es compatible con eSIM? Verificar aquí
            </Link>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button onClick={handleAgregar} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: agregado ? "linear-gradient(135deg,#2E7D32,#388E3C)" : "linear-gradient(135deg,#42A5F5,#1565C0)", color: "white", padding: "1rem 2rem", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "1rem", boxShadow: agregado ? "0 4px 16px rgba(46,125,50,0.35)" : "0 4px 16px rgba(21,101,192,0.35)", transition: "all 0.25s" }}>
              {agregado ? <><Check size={19} /> ¡Agregado!</> : <><ShoppingCart size={19} /> Agregar al carrito</>}
            </button>
            <a href={`https://wa.me/5212461576175?text=Hola%2C%20me%20interesa%20${encodeURIComponent(producto.nombre)}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "white", padding: "0.9rem 2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d={WA_PATH} /></svg>
              Consultar por WhatsApp
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", background: "white", border: "1px solid #E8EDF5", borderRadius: "16px", padding: "1rem 1.25rem", boxShadow: "0 2px 8px rgba(21,101,192,0.06)" }}>
            {[
              { icon: <Package size={15} />, text: producto.esDigital ? "Entrega digital en horario hábil L-V 9:00–19:00 hrs" : "Envío en 1–3 días hábiles a todo México" },
              { icon: <Shield size={15} />, text: "Garantía oficial Telcel incluida" },
              { icon: <RefreshCw size={15} />, text: "30 días para devoluciones. Números reciclados: cambio o reembolso en 24 hrs hábiles" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--md-on-surface-variant)" }}>
                <span style={{ color: "var(--md-primary)", flexShrink: 0 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {tieneRequisitos && (
        <div style={{ marginTop: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
            <div style={{ width: "36px", height: "36px", background: "#F0F7FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--md-primary)", flexShrink: 0 }}>
              <FileText size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em" }}>Requisitos para contratar</h2>
              <p style={{ fontSize: "0.85rem", color: "var(--md-on-surface-variant)", marginTop: "2px" }}>Ten a la mano estos documentos antes de proceder con tu solicitud.</p>
            </div>
          </div>

          {(producto.categoria === "planes_renta" || producto.categoria === "recargas") && (
            <div style={{ background: "#FFF8F0", border: "1px solid #FFD9B0", borderRadius: "14px", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>⚠️</span>
              <p style={{ fontSize: "0.88rem", color: "#E65100", lineHeight: 1.55, fontWeight: 500 }}>
                Para completar la activación se requiere firma del contrato Telcel. La portabilidad tarda <strong>24 horas hábiles</strong> sujeta a validación del IFT (L-V 9:00–17:30 hrs).
              </p>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {producto.requisitos!.map((req, i) => (
              <div key={i} style={{ background: "white", border: `1.5px solid ${requisitoAbierto === i ? "#D0E4FF" : "#E8EDF5"}`, borderRadius: "18px", overflow: "hidden", boxShadow: "0 2px 8px rgba(21,101,192,0.05)", transition: "border-color 0.2s" }}>
                <button onClick={() => setRequisitoAbierto(requisitoAbierto === i ? null : i)} style={{ width: "100%", padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "999px", background: "var(--md-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 800, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--md-on-surface)" }}>{req.tipo}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--md-on-surface-variant)", background: "#F0F7FF", padding: "2px 10px", borderRadius: "999px" }}>
                      {req.campos.length} documentos
                    </span>
                  </div>
                  <span style={{ color: "var(--md-primary)", flexShrink: 0, transition: "transform 0.25s", transform: requisitoAbierto === i ? "rotate(180deg)" : "rotate(0deg)", display: "flex" }}>
                    <ChevronDown size={18} />
                  </span>
                </button>
                {requisitoAbierto === i && (
                  <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #F0F4FF" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "1rem" }}>
                      {req.campos.map((campo, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--md-on-surface)", lineHeight: 1.5 }}>
                          <Check size={15} style={{ color: "#2E7D32", flexShrink: 0, marginTop: "2px" }} />
                          {campo}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {esEsim && (
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>¿Cómo funciona?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { num: "1", titulo: "Compra en línea", desc: "Selecciona tu plan y completa el pago de forma segura." },
              { num: "2", titulo: "Recibe tu QR", desc: "En horario hábil recibirás el código QR en tu correo. Fuera de horario se envía el siguiente día hábil." },
              { num: "3", titulo: "Escanea y listo", desc: "Ve a Ajustes → Datos móviles → Añadir plan y escanea el QR." },
            ].map((paso) => (
              <div key={paso.num} style={{ background: "white", border: "1px solid #E8EDF5", borderRadius: "20px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 2px 8px rgba(21,101,192,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "var(--md-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>
                    {paso.num}
                  </div>
                  <h3 style={{ fontWeight: 700, color: "var(--md-on-surface)", fontSize: "0.95rem" }}>{paso.titulo}</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--md-on-surface-variant)", lineHeight: 1.55 }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Especificaciones</h2>
        <div style={{ background: "white", border: "1px solid #E8EDF5", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 8px rgba(21,101,192,0.05)" }}>
          {producto.specs.map((s, i) => (
            <div key={i} style={{ display: "flex", padding: "0.9rem 1.25rem", borderBottom: i < producto.specs.length - 1 ? "1px solid #F0F4FF" : "none", background: i % 2 === 0 ? "transparent" : "#FAFBFF" }}>
              <span style={{ flex: "0 0 180px", fontSize: "0.88rem", fontWeight: 600, color: "var(--md-on-surface-variant)" }}>{s.label}</span>
              <span style={{ fontSize: "0.9rem", color: "var(--md-on-surface)", fontWeight: 500 }}>{s.valor}</span>
            </div>
          ))}
        </div>
      </div>

      {relacionados.length > 0 && (
        <div style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>También te puede interesar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {relacionados.map((p) => (
              <Link key={p.id} href={`/producto/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", border: "1px solid #E8EDF5", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 8px rgba(21,101,192,0.05)", cursor: "pointer" }}>
                  <div style={{ height: "140px", overflow: "hidden", background: "linear-gradient(135deg,#E3F0FF,#F0F8FF)" }}>
                    <Image src={p.imagen} alt={p.nombre} width={300} height={140} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontSize: "0.72rem", color: "var(--md-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>{p.marca}</p>
                    <p style={{ fontWeight: 700, color: "var(--md-on-surface)", fontSize: "0.9rem", marginBottom: "6px" }}>{p.nombre}</p>
                    <p style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--md-primary-dark)" }}>${p.precio.toLocaleString("es-MX")}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}