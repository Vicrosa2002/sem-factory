"use client"
import { useState } from "react"
import {
  MessageCircle, Phone, Mail,
  ChevronDown, Zap, Package,
  CreditCard, RefreshCw, HelpCircle,
} from "lucide-react"

type Faq = { q: string; a: string }
type Seccion = { cat: string; icon: React.ReactNode; preguntas: Faq[] }
type Canal = { icon: React.ReactNode; titulo: string; desc: string; accion: string; color: string; bg: string; href: string }

const faqs: Seccion[] = [
  {
    cat: "eSIM",
    icon: <Zap size={18} />,
    preguntas: [
      { q: "¿Cómo activo mi eSIM?", a: "Una vez completada tu compra recibirás un correo con un código QR. Ve a Ajustes → Datos móviles → Añadir plan de datos, escanea el QR y sigue los pasos. En menos de 5 minutos tendrás tu eSIM activa." },
      { q: "¿Mi teléfono es compatible con eSIM?", a: "Son compatibles iPhone XS o posterior, Samsung Galaxy S20 o posterior, Google Pixel 3 o posterior, y la mayoría de flagships Android desde 2019." },
      { q: "¿Puedo tener eSIM y SIM física al mismo tiempo?", a: "Sí, la mayoría de los teléfonos admiten dual SIM (una física + una eSIM), lo que te permite tener dos líneas activas simultáneamente." },
    ],
  },
  {
    cat: "Pedidos y Envíos",
    icon: <Package size={18} />,
    preguntas: [
      { q: "¿Cuánto tarda mi pedido en llegar?", a: "Los pedidos de productos físicos se entregan en 1 a 3 días hábiles a todo México. Las eSIM se envían inmediatamente al correo registrado." },
      { q: "¿Cómo puedo rastrear mi pedido?", a: "Al confirmar tu compra recibirás un correo con el número de guía y el enlace directo para rastrear tu paquete en tiempo real." },
      { q: "¿Hacen envíos a toda la República Mexicana?", a: "Sí, enviamos a todos los estados. Para zonas extendidas el tiempo de entrega puede ser de 3 a 5 días hábiles." },
    ],
  },
  {
    cat: "Pagos",
    icon: <CreditCard size={18} />,
    preguntas: [
      { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjeta de crédito y débito, pago en efectivo en OXXO y transferencia bancaria (SPEI). Todos los pagos son procesados de forma segura por Stripe." },
      { q: "¿Es seguro pagar en línea?", a: "Sí, utilizamos Stripe con estándar PCI-DSS nivel 1. Tus datos de tarjeta nunca son almacenados en nuestros servidores." },
      { q: "¿Puedo pagar en parcialidades?", a: "Sí, con tarjetas de crédito participantes puedes diferir tu compra a 3, 6 o 12 meses sin intereses." },
    ],
  },
  {
    cat: "Devoluciones",
    icon: <RefreshCw size={18} />,
    preguntas: [
      { q: "¿Cuál es la política de devoluciones?", a: "Tienes 30 días naturales para solicitar una devolución. El producto debe estar en su empaque original y sin uso. Las eSIM activadas no son reembolsables." },
      { q: "¿Cómo solicito una devolución?", a: "Escríbenos a soporte@semfactory.mx con tu número de pedido y el motivo. Te responderemos en menos de 24 horas." },
    ],
  },
]

const canales: Canal[] = [
  { icon: <MessageCircle size={22} />, titulo: "WhatsApp", desc: "Respuesta inmediata", accion: "Abrir chat", color: "#2E7D32", bg: "rgba(46,125,50,0.08)", href: "https://wa.me/5212461576175?text=Hola%2C%20necesito%20soporte" },
  { icon: <Phone size={22} />, titulo: "Llamar", desc: "Lun–Vie 9:00–18:00", accion: "+52 246 157 6175", color: "var(--md-primary)", bg: "rgba(21,101,192,0.08)", href: "tel:+522461576175" },
  { icon: <Mail size={22} />, titulo: "Correo", desc: "Respondemos en menos de 24h", accion: "soporte@semfactory.mx", color: "#E65100", bg: "rgba(230,81,0,0.08)", href: "mailto:soporte@semfactory.mx" },
]

export default function SoportePage() {
  const [abiertos, setAbiertos] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setAbiertos((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

      <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ width: "64px", height: "64px", background: "linear-gradient(135deg, rgba(21,101,192,0.12), rgba(2,136,209,0.16))", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", border: "1px solid rgba(21,101,192,0.12)" }}>
          <HelpCircle size={28} style={{ color: "var(--md-primary)" }} />
        </div>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--md-on-surface)", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Centro de Soporte
        </h1>
        <p style={{ color: "var(--md-on-surface-variant)", fontSize: "1rem", lineHeight: 1.6 }}>
          Encuentra respuestas rápidas o contáctanos directamente.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
        {canales.map((canal, i) => (
          <a key={i} href={canal.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div
              className="animate-fade-up"
              style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.92)", borderRadius: "20px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 4px 16px rgba(21,101,192,0.07)", animationDelay: `${i * 0.07}s`, transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(21,101,192,0.13)" }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(21,101,192,0.07)" }}
            >
              <div style={{ width: "46px", height: "46px", background: canal.bg, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: canal.color }}>
                {canal.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "2px" }}>{canal.titulo}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--md-on-surface-variant)" }}>{canal.desc}</p>
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: canal.color }}>{canal.accion}</span>
            </div>
          </a>
        ))}
      </div>

      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
        Preguntas frecuentes
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {faqs.map((seccion, si) => (
          <div key={si}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.75rem" }}>
              <div style={{ width: "30px", height: "30px", background: "rgba(21,101,192,0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--md-primary)" }}>
                {seccion.icon}
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--md-on-surface)" }}>{seccion.cat}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {seccion.preguntas.map((item, qi) => {
                const key = `${si}-${qi}`
                const abierto = abiertos[key]
                return (
                  <div key={qi} style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", border: `1px solid ${abierto ? "rgba(21,101,192,0.2)" : "rgba(255,255,255,0.92)"}`, borderRadius: "16px", overflow: "hidden", boxShadow: abierto ? "0 4px 20px rgba(21,101,192,0.1)" : "0 2px 8px rgba(21,101,192,0.05)", transition: "all 0.3s ease" }}>
                    <button onClick={() => toggle(key)} style={{ width: "100%", padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--md-on-surface)", flex: 1 }}>{item.q}</span>
                      <span style={{ color: "var(--md-primary)", flexShrink: 0, transition: "transform 0.3s", transform: abierto ? "rotate(180deg)" : "rotate(0deg)", display: "flex" }}>
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    {abierto && (
                      <div className="animate-fade-in" style={{ padding: "1rem 1.25rem 1.1rem", fontSize: "0.9rem", color: "var(--md-on-surface-variant)", lineHeight: 1.65, borderTop: "1px solid rgba(21,101,192,0.08)" }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #0D3B8E, #1565C0)", borderRadius: "24px", padding: "2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "250px", height: "250px", background: "rgba(66,165,245,0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: "0.4rem" }}>¿No encontraste lo que buscabas?</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.92rem" }}>Nuestro equipo está disponible para ayudarte.</p>
        </div>
        <a
          href="https://wa.me/5212461576175?text=Hola%2C%20necesito%20ayuda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: "#0D3B8E", padding: "0.85rem 1.75rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", boxShadow: "0 6px 20px rgba(0,0,0,0.2)", transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)", position: "relative", zIndex: 1, flexShrink: 0 }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.28)" }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)" }}
        >
          <MessageCircle size={17} /> Contactar por WhatsApp
        </a>
      </div>
    </div>
  )
}