"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Zap, ChevronLeft, Check, Package, Shield, RefreshCw, Clock, Smartphone } from "lucide-react"
import { getProducto, productos } from "@/lib/productos"
import { useCart } from "@/lib/store"

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

export default function ProductoPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const producto = getProducto(id)
  const agregar = useCart((s) => s.agregar)
  const [variante, setVariante] = useState(() => producto?.variantes[0]?.valor || "")
  const [imgActiva, setImgActiva] = useState(0)
  const [agregado, setAgregado] = useState(false)
  const [cantidad, setCantidad] = useState(1)

  if (!producto) return (
    <div style={{ textAlign: "center", padding: "8rem 1.5rem" }}>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--md-on-surface-variant)" }}>Producto no encontrado</p>
      <Link href="/catalogo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--md-primary)", color: "white", padding: "0.85rem 1.75rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700 }}>Ir al catálogo</Link>
    </div>
  )

  const descuento = producto.precioLista > producto.precio ? Math.round(((producto.precioLista - producto.precio) / producto.precioLista) * 100) : 0
  const precioPorDia = producto.categoria === "prepago" ? (producto.precio / 30).toFixed(2) : null
  const relacionados = productos.filter((p) => p.categoria === producto.categoria && p.id !== producto.id).slice(0, 3)
  const esEsim = producto.subcategoria === "esim"

  const handleAgregar = () => {
    agregar({ id: producto.id, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen, cantidad, variante })
    setAgregado(true)
    setTimeout(() => setAgregado(false), 2200)
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>

      <button onClick={() => router.back()} style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.72)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "999px", padding: "0.55rem 1.1rem", cursor: "pointer", color: "var(--md-on-surface)", fontWeight: 600, fontSize: "0.88rem", marginBottom: "1.75rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <ChevronLeft size={17} /> Regresar
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }} className="animate-scale-in">

        <div>
          <div style={{ aspectRatio: "1", borderRadius: "24px", overflow: "hidden", background: "linear-gradient(135deg,#E3F0FF,#F0F8FF)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 8px 32px rgba(21,101,192,0.1)", marginBottom: "0.75rem", position: "relative" }}>
            <Image src={producto.imagenes[imgActiva]} alt={producto.nombre} fill style={{ objectFit: "cover" }} sizes="500px" />
            {descuento > 0 && (
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "linear-gradient(135deg,#FF6B35,#FF4500)", color: "white", padding: "5px 14px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(255,69,0,0.4)" }}>
                -{descuento}% OFF
              </div>
            )}
            {producto.esDigital && (
              <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(13,59,142,0.85)", backdropFilter: "blur(8px)", color: "white", padding: "5px 12px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
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
              <span style={{ background: "rgba(13,59,142,0.1)", color: "var(--md-primary)", padding: "2px 10px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
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
                <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "999px", padding: "4px 12px", fontSize: "0.8rem", fontWeight: 600, color: "var(--md-primary)" }}>
                  <Check size={11} style={{ color: "#2E7D32" }} />
                  {b}
                </div>
              ))}
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
                  <button key={v.valor} onClick={() => setVariante(v.valor)} style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "0.5rem 1rem", borderRadius: "999px", border: `1.5px solid ${variante === v.valor ? "var(--md-primary)" : "var(--md-outline)"}`, background: variante === v.valor ? "var(--md-primary)" : "rgba(255,255,255,0.8)", color: variante === v.valor ? "white" : "var(--md-on-surface-variant)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: variante === v.valor ? "0 4px 12px rgba(21,101,192,0.28)" : "none", transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}>
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
                  <button key={n} onClick={() => setCantidad(n)} style={{ width: "38px", height: "38px", borderRadius: "999px", border: `1.5px solid ${cantidad === n ? "var(--md-primary)" : "var(--md-outline)"}`, background: cantidad === n ? "var(--md-primary)" : "rgba(255,255,255,0.8)", color: cantidad === n ? "white" : "var(--md-on-surface-variant)", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s", boxShadow: cantidad === n ? "0 4px 12px rgba(21,101,192,0.25)" : "none" }}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {esEsim && (
            <Link href="/verificar-imei" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "14px", padding: "0.75rem 1.1rem", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, color: "var(--md-primary)" }}>
              <Smartphone size={16} />
              ¿Tu teléfono es compatible con eSIM? Verificar aquí
            </Link>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button onClick={handleAgregar} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", background: agregado ? "linear-gradient(135deg,#2E7D32,#388E3C)" : "linear-gradient(135deg,#42A5F5,#1565C0)", color: "white", padding: "1rem 2rem", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "1rem", boxShadow: agregado ? "0 6px 20px rgba(46,125,50,0.4)" : "0 6px 20px rgba(21,101,192,0.38)", transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}>
              {agregado ? <><Check size={19} /> ¡Agregado!</> : <><ShoppingCart size={19} /> Agregar al carrito</>}
            </button>
            <a href={`https://wa.me/5212461576175?text=Hola%2C%20me%20interesa%20${encodeURIComponent(producto.nombre)}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "white", padding: "0.9rem 2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d={WA_PATH} /></svg>
              Consultar por WhatsApp
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", background: "rgba(255,255,255,0.65)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "16px", padding: "1rem 1.25rem", boxShadow: "0 2px 12px rgba(21,101,192,0.07)" }}>
            {[
              { icon: <Package size={15} />, text: producto.esDigital ? "Entrega digital instantánea por QR" : "Envío en 1–3 días hábiles a todo México" },
              { icon: <Shield size={15} />, text: "Garantía oficial Telcel incluida" },
              { icon: <RefreshCw size={15} />, text: "30 días para devoluciones sin preguntas" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--md-on-surface-variant)" }}>
                <span style={{ color: "var(--md-primary)", flexShrink: 0 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {esEsim && (
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>¿Cómo funciona?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { num: "1", titulo: "Compra en línea", desc: "Selecciona tu plan y completa el pago de forma segura." },
              { num: "2", titulo: "Recibe tu QR", desc: "En minutos recibirás un código QR en tu correo electrónico." },
              { num: "3", titulo: "Escanea y listo", desc: "Ve a Ajustes → Datos móviles → Añadir plan y escanea el QR." },
            ].map((paso) => (
              <div key={paso.num} style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.92)", borderRadius: "20px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 4px 16px rgba(21,101,192,0.07)" }}>
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
        <div style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(21,101,192,0.08)" }}>
          {producto.specs.map((s, i) => (
            <div key={i} style={{ display: "flex", padding: "0.9rem 1.25rem", borderBottom: i < producto.specs.length - 1 ? "1px solid rgba(21,101,192,0.08)" : "none", background: i % 2 === 0 ? "transparent" : "rgba(21,101,192,0.02)" }}>
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
                <div style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.92)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 16px rgba(21,101,192,0.07)", cursor: "pointer" }}>
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