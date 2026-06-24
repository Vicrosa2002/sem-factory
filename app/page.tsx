"use client"
import Link from "next/link"
import Image from "next/image"
import { Zap, Shield, Truck, Headphones, ChevronRight, Wifi, Car, Phone, ArrowRight, Check, Clock } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { productos } from "@/lib/productos"

export default function Home() {
  const esims = productos.filter((p) => p.subcategoria === "esim" && p.destacado)
  const sims = productos.filter((p) => p.subcategoria === "sim" && p.destacado)
  const planesRenta = productos.filter((p) => p.categoria === "planes_renta" && p.destacado).slice(0, 3)

  return (
    <div>
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(145deg, #0A2D6E 0%, #1255B5 50%, #0288D1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: "500px", height: "500px", background: "rgba(66,165,245,0.1)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "350px", height: "350px", background: "rgba(2,136,209,0.08)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "900px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "999px",
              padding: "0.45rem 1.1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4AFF6B" }} />
            <span style={{ color: "white", fontSize: "0.82rem", fontWeight: 600 }}>Distribuidor Autorizado Telcel</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            SIM y eSIM Telcel
            <br />
            <span style={{ background: "linear-gradient(135deg, #90CAF9, #E0F7FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              actívate hoy mismo
            </span>
          </h1>

          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 1.5rem" }}>
            La mejor cobertura 4G LTE y 5G de México. Sin plazos forzosos, con portabilidad incluida y activación instantánea.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            {["Portabilidad gratis", "Activación por QR", "Sin plazos forzosos", "Red 5G"].map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.82)", fontSize: "0.85rem" }}>
                <Check size={13} style={{ color: "#4AFF6B" }} />
                {b}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link
              href="/catalogo?cat=recargas"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "white",
                color: "#0D3B8E",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.95rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Cámbiate a Telcel <ChevronRight size={17} />
            </Link>
            <Link
              href="/catalogo?cat=esim"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                color: "white",
                padding: "0.9rem 2rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              <Zap size={17} /> Activar eSIM
            </Link>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255,152,0,0.15)",
              border: "1px solid rgba(255,152,0,0.3)",
              borderRadius: "999px",
              padding: "0.4rem 1rem",
            }}
          >
            <Clock size={13} style={{ color: "#FFB74D" }} />
            <span style={{ fontSize: "0.78rem", color: "#FFB74D", fontWeight: 600 }}>
              Activaciones L-V 9:00–19:00 hrs · Fuera de horario se procesan el siguiente día hábil
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "2.5rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.875rem" }}>
          {[
            { icon: <Zap size={20} />, label: "Recargas", sub: "Planes Libre", href: "/catalogo?cat=recargas", color: "#1565C0" },
            { icon: <Zap size={20} />, label: "eSIM", sub: "Sin SIM física", href: "/catalogo?cat=esim", color: "#0277BD" },
            { icon: <Phone size={20} />, label: "Planes de Renta", sub: "Planes Ultra 5G", href: "/catalogo?cat=planes_renta", color: "#0288D1" },
            { icon: <Wifi size={20} />, label: "Internet", sub: "WiFi en casa", href: "/catalogo?cat=internet", color: "#0891B2" },
            { icon: <Car size={20} />, label: "GPS Vehicular", sub: "Flotillas y autos", href: "/catalogo?cat=vehicular", color: "#0D3B8E" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "white",
                  border: "1px solid #E8EDF5",
                  borderRadius: "18px",
                  padding: "1.1rem 0.875rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(21,101,192,0.06)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)"
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(21,101,192,0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(21,101,192,0.06)"
                }}
              >
                <div style={{ width: "44px", height: "44px", background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#1A1A2E", fontSize: "0.85rem", marginBottom: "1px" }}>{item.label}</p>
                  <p style={{ fontSize: "0.72rem", color: "#666" }}>{item.sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "1.5rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #4A00E0 0%, #1565C0 55%, #0288D1 100%)",
            borderRadius: "24px",
            padding: "2.25rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-25%", right: "-3%", width: "320px", height: "320px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", filter: "blur(50px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.3rem 0.9rem", color: "white", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.875rem" }}>
              <Zap size={11} fill="white" /> Sin SIM física
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "white", marginBottom: "0.625rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              eSIM Telcel
              <br />
              fácil y rápido
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.25rem" }}>
              {["Mayor seguridad, sin tarjeta física", "Entrega inmediata por código QR", "Línea nueva, portabilidad o migración"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)", fontSize: "0.875rem" }}>
                  <Check size={13} style={{ color: "#4AFF6B", flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              <Link href="/catalogo?cat=esim" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "white", color: "#4A00E0", padding: "0.75rem 1.5rem", borderRadius: "999px", textDecoration: "none", fontWeight: 800, fontSize: "0.9rem", boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }}>
                Ver eSIMs <ChevronRight size={15} />
              </Link>
              <a href="https://wa.me/5212461576175?text=Hola%2C%20quiero%20activar%20una%20eSIM" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "white", padding: "0.75rem 1.5rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
                Escríbenos
              </a>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {esims.slice(0, 3).map((p) => (
              <Link key={p.id} href={`/producto/${p.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "14px", padding: "0.875rem 1.1rem", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "background 0.2s", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                  <div>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "2px" }}>{p.nombre}</p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>{p.beneficios?.[0]}</p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ color: "white", fontWeight: 900, fontSize: "1.1rem" }}>${p.precio.toLocaleString("es-MX")}</p>
                    {p.badge && (
                      <span style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "1px 8px", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700 }}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "1.5rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1565C0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Recargas · Sin plazos forzosos</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.02em" }}>Planes Libre — SIM Física</h2>
          </div>
          <Link href="/catalogo?cat=recargas" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(21,101,192,0.08)", color: "#1565C0", padding: "0.5rem 1.1rem", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}>
            Ver todos <ChevronRight size={15} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.1rem" }}>
          {sims.map((p) => (
            <div key={p.id}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "1.5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0D3B8E 0%, #1565C0 60%, #0288D1 100%)",
            borderRadius: "24px",
            padding: "2.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.75rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-30%", right: "-3%", width: "280px", height: "280px", background: "rgba(66,165,245,0.1)", borderRadius: "50%", filter: "blur(50px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "999px", padding: "0.28rem 0.85rem", color: "white", fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.875rem" }}>
              <Shield size={11} fill="currentColor" /> La red más grande de México
            </div>
            <h3 style={{ fontSize: "1.7rem", fontWeight: 800, color: "white", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>Cámbiate a Telcel hoy</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.55, maxWidth: "380px" }}>
              Portabilidad sin costo, conserva tu número y estrena plan el mismo día.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", position: "relative", zIndex: 1, flexShrink: 0 }}>
            <Link href="/catalogo?cat=recargas" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "white", color: "#0D3B8E", padding: "0.875rem 1.75rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}>
              Ver recargas <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/5212461576175?text=Hola%2C%20quiero%20cambiarme%20a%20Telcel" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", background: "#25D366", color: "white", padding: "0.8rem 1.75rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
              Asesoría por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1565C0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Renta mensual · 5G Ultra</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.02em" }}>Planes de Renta Telcel Ultra</h2>
          </div>
          <Link href="/catalogo?cat=planes_renta" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(21,101,192,0.08)", color: "#1565C0", padding: "0.5rem 1.1rem", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}>
            Ver todos <ChevronRight size={15} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.1rem" }}>
          {planesRenta.map((p) => (
            <div key={p.id}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "1.5rem 1.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
          <div style={{ background: "linear-gradient(135deg, #0277BD, #0288D1)", borderRadius: "20px", padding: "1.75rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "160px", height: "160px", background: "rgba(255,255,255,0.07)", borderRadius: "50%", filter: "blur(25px)" }} />
            <Wifi size={28} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.875rem", position: "relative", zIndex: 1 }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "0.35rem", position: "relative", zIndex: 1 }}>WiFi Telcel</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginBottom: "0.4rem", lineHeight: 1.5, position: "relative", zIndex: 1 }}>GB ilimitados desde $399/mes. Sin instalación ni cables.</p>
            <p style={{ color: "#90CAF9", fontSize: "1.3rem", fontWeight: 900, marginBottom: "1.1rem", position: "relative", zIndex: 1 }}>Desde $399</p>
            <Link href="/catalogo?cat=internet" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.15)", color: "white", padding: "0.6rem 1.2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.25)", position: "relative", zIndex: 1 }}>
              Ver planes <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0D3B8E, #1565C0)", borderRadius: "20px", padding: "1.75rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "160px", height: "160px", background: "rgba(255,255,255,0.07)", borderRadius: "50%", filter: "blur(25px)" }} />
            <Car size={28} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.875rem", position: "relative", zIndex: 1 }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "0.35rem", position: "relative", zIndex: 1 }}>GPS Vehicular</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginBottom: "0.4rem", lineHeight: 1.5, position: "relative", zIndex: 1 }}>Localiza tu auto o flotilla en tiempo real con red Telcel.</p>
            <p style={{ color: "#90CAF9", fontSize: "1.3rem", fontWeight: 900, marginBottom: "1.1rem", position: "relative", zIndex: 1 }}>Desde $899</p>
            <Link href="/catalogo?cat=vehicular" style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.15)", color: "white", padding: "0.6rem 1.2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem", border: "1px solid rgba(255,255,255,0.25)", position: "relative", zIndex: 1 }}>
              Ver solución <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 1.5rem 2.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.1rem" }}>
          {[
            { icon: <Zap size={20} />, titulo: "eSIM Instantánea", desc: "Actívate en minutos escaneando un QR. Sin esperas ni trámites físicos." },
            { icon: <Shield size={20} />, titulo: "Distribuidor Oficial", desc: "Productos 100% originales con garantía y respaldo directo de Telcel." },
            { icon: <Truck size={20} />, titulo: "Envío a todo México", desc: "Fedex, DHL y Estafeta con rastreo en tiempo real." },
            { icon: <Headphones size={20} />, titulo: "Soporte personalizado", desc: "Equipo disponible por WhatsApp de lunes a viernes 9:00–19:00 hrs." },
          ].map((f, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #E8EDF5", borderRadius: "18px", padding: "1.375rem", display: "flex", flexDirection: "column", gap: "0.75rem", boxShadow: "0 2px 8px rgba(21,101,192,0.05)" }}>
              <div style={{ width: "46px", height: "46px", background: "linear-gradient(135deg, rgba(21,101,192,0.09), rgba(2,136,209,0.13))", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1565C0" }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E", marginBottom: "3px" }}>{f.titulo}</h3>
                <p style={{ fontSize: "0.84rem", color: "#555", lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "0 1.5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0A2D6E, #1255B5)",
            borderRadius: "20px",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "7px", overflow: "hidden", background: "rgba(255,255,255,0.12)", padding: "2px" }}>
              <Image src="/logo.png" alt="SEM Factory" width={26} height={26} style={{ objectFit: "contain", width: "100%", height: "100%" }} priority />
            </div>
            <span style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>SEM Factory</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>· Distribuidor Autorizado Telcel</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>© 2026 SEM Factory. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  )
}