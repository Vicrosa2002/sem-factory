"use client"
import Link from "next/link"
import Image from "next/image"
import { Zap, Shield, Truck, Headphones, ChevronRight, Wifi, Car, Phone, ArrowRight, Check } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { productos } from "@/lib/productos"

export default function Home() {
  const esims = productos.filter((p) => p.subcategoria === "esim" && p.destacado)
  const sims = productos.filter((p) => p.subcategoria === "sim" && p.destacado)
  const pospago = productos.filter((p) => p.categoria === "pospago" && p.destacado).slice(0, 3)

  return (
    <div>

      {/* HERO */}
      <section style={{
        minHeight: "94vh",
        background: "linear-gradient(145deg, #0A2D6E 0%, #1255B5 45%, #0277BD 75%, #0288D1 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "5rem 1.5rem 4rem",
        position: "relative", overflow: "hidden",
      }}>
        {[
          { w: 600, h: 600, top: "-20%", right: "-12%", bg: "rgba(66,165,245,0.13)" },
          { w: 400, h: 400, bottom: "-15%", left: "-8%", bg: "rgba(2,136,209,0.1)" },
          { w: 300, h: 300, top: "30%", left: "5%", bg: "rgba(255,255,255,0.04)" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute", width: o.w, height: o.h,
            top: o.top, bottom: o.bottom, left: o.left, right: o.right,
            background: o.bg, borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none",
          }} />
        ))}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

        <div style={{ maxWidth: "960px", textAlign: "center", position: "relative", zIndex: 1 }} className="animate-fade-up">

          {/* BADGE TELCEL */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px",
            padding: "0.5rem 1.25rem", marginBottom: "1.75rem",
          }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#4AFF6B",
              boxShadow: "0 0 8px #4AFF6B",
            }} />
            <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
              Distribuidor Autorizado Telcel
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 900, color: "white",
            lineHeight: 1.06, letterSpacing: "-0.035em", marginBottom: "1.25rem",
          }}>
            SIM y eSIM Telcel<br />
            <span style={{
              background: "linear-gradient(135deg, #90CAF9 0%, #B3E5FC 50%, #E0F7FA 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              actívate hoy mismo
            </span>
          </h1>

          <p style={{
            fontSize: "1.15rem", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.65, maxWidth: "560px", margin: "0 auto 1.5rem",
          }}>
            La mejor cobertura 4G LTE y 5G de México. Sin plazos forzosos, con portabilidad incluida y activación instantánea.
          </p>

          {/* BENEFICIOS RÁPIDOS */}
          <div style={{
            display: "flex", justifyContent: "center", gap: "1.5rem",
            flexWrap: "wrap", marginBottom: "2.5rem",
          }}>
            {["Portabilidad gratis", "Activación por QR", "Sin plazos forzosos", "Red 5G"].map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.85)", fontSize: "0.88rem" }}>
                <Check size={14} style={{ color: "#4AFF6B" }} />
                {b}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/catalogo?cat=prepago" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "white", color: "#0D3B8E",
              padding: "1rem 2.2rem", borderRadius: "999px", textDecoration: "none",
              fontWeight: 800, fontSize: "1rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)" }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)" }}>
              Cámbiate a Telcel <ChevronRight size={18} />
            </Link>
            <Link href="/catalogo?cat=esim" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.13)", backdropFilter: "blur(12px)",
              color: "white", padding: "1rem 2.2rem", borderRadius: "999px",
              textDecoration: "none", fontWeight: 700, fontSize: "1rem",
              border: "1.5px solid rgba(255,255,255,0.35)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "scale(1.04)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "scale(1)" }}>
              <Zap size={18} /> Activar eSIM
            </Link>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "24px", height: "40px", border: "2px solid rgba(255,255,255,0.25)", borderRadius: "999px", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "5px" }}>
            <div style={{ width: "4px", height: "8px", background: "rgba(255,255,255,0.5)", borderRadius: "999px", animation: "fadeUp 1.5s ease infinite" }} />
          </div>
        </div>
      </section>

      {/* NAVEGACIÓN DE SERVICIOS */}
      <section style={{ padding: "3rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
          {[
            { icon: <Zap size={22} />,       label: "SIM Prepago",      sub: "Planes Libre",       href: "/catalogo?cat=prepago", color: "#1565C0" },
            { icon: <Zap size={22} />,       label: "eSIM",             sub: "Sin SIM física",      href: "/catalogo?cat=esim",    color: "#0277BD" },
            { icon: <Phone size={22} />,     label: "Pospago",          sub: "Planes Ultra",       href: "/catalogo?cat=pospago", color: "#0288D1" },
            { icon: <Wifi size={22} />,      label: "Internet",         sub: "WiFi en casa",       href: "/catalogo?cat=internet",color: "#0891B2" },
            { icon: <Car size={22} />,       label: "GPS Vehicular",    sub: "Flotillas y autos",  href: "/catalogo?cat=vehicular",color: "#0D3B8E" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
              <div className="glass-card animate-fade-up" style={{
                padding: "1.25rem 1rem",
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "0.6rem", textAlign: "center",
                animationDelay: `${i * 0.07}s`, cursor: "pointer",
              }}>
                <div style={{
                  width: "48px", height: "48px",
                  background: `linear-gradient(135deg, ${item.color}18, ${item.color}28)`,
                  borderRadius: "14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: item.color, border: `1px solid ${item.color}20`,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--md-on-surface)", fontSize: "0.88rem", marginBottom: "2px" }}>{item.label}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--md-on-surface-variant)" }}>{item.sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BANNER eSIM DESTACADO */}
      <section style={{ padding: "2rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #6B21A8 0%, #1565C0 50%, #0288D1 100%)",
          borderRadius: "28px", padding: "2.5rem",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "2rem", alignItems: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "400px", height: "400px", background: "rgba(255,255,255,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "0.35rem 1rem", color: "white", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Zap size={12} fill="white" /> Sin SIM física
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
              E-SIM Telcel<br />fácil y rápido
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["Mayor seguridad y menos complicaciones", "Entrega inmediata y segura", "Código QR listo para activar"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.88)", fontSize: "0.9rem" }}>
                  <Check size={14} style={{ color: "#4AFF6B", flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/catalogo?cat=esim" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "white", color: "#6B21A8",
                padding: "0.85rem 1.75rem", borderRadius: "999px",
                textDecoration: "none", fontWeight: 800, fontSize: "0.95rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                Ver eSIMs <ChevronRight size={16} />
              </Link>
              <a href="https://wa.me/5212461576175?text=Hola%2C%20quiero%20activar%20una%20eSIM" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#25D366", color: "white",
                padding: "0.85rem 1.75rem", borderRadius: "999px",
                textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                Escríbenos
              </a>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {esims.slice(0, 2).map((p) => (
              <Link key={p.id} href={`/producto/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)", borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}>
                  <div>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", marginBottom: "2px" }}>{p.nombre}</p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem" }}>{p.beneficios?.[0]}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "white", fontWeight: 900, fontSize: "1.2rem" }}>${p.precio.toLocaleString("es-MX")}</p>
                    {p.badge && <span style={{ background: "rgba(255,255,255,0.2)", color: "white", padding: "2px 8px", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700 }}>{p.badge}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SIM FÍSICA */}
      <section style={{ padding: "2rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--md-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Prepago · Sin plazos forzosos</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.025em" }}>Planes Libre — SIM Física</h2>
          </div>
          <Link href="/catalogo?cat=prepago" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(21,101,192,0.1)", color: "var(--md-primary)", padding: "0.6rem 1.2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
            Ver todos <ChevronRight size={16} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {sims.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </section>

      {/* BANNER CÁMBIATE */}
      <section style={{ padding: "2rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #0D3B8E 0%, #1565C0 50%, #0288D1 100%)",
          borderRadius: "28px", padding: "2.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "2rem", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-40%", right: "-5%", width: "350px", height: "350px", background: "rgba(66,165,245,0.12)", borderRadius: "50%", filter: "blur(60px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.3rem 0.9rem", color: "white", fontSize: "0.8rem", fontWeight: 600, marginBottom: "1rem" }}>
              <Shield size={12} fill="currentColor" /> La red más grande de México
            </div>
            <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "white", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
              Cámbiate a Telcel hoy
            </h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "420px" }}>
              Portabilidad sin costo, conserva tu número y estrena plan el mismo día. Sin tramites complicados.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative", zIndex: 1, flexShrink: 0 }}>
            <Link href="/catalogo?cat=prepago" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "white", color: "#0D3B8E",
              padding: "1rem 2rem", borderRadius: "999px", textDecoration: "none",
              fontWeight: 700, fontSize: "1rem", boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              Ver planes <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/5212461576175?text=Hola%2C%20quiero%20cambiarme%20a%20Telcel" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: "#25D366", color: "white",
              padding: "0.85rem 2rem", borderRadius: "999px", textDecoration: "none",
              fontWeight: 700, fontSize: "0.9rem",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              Asesoría por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* POSPAGO */}
      <section style={{ padding: "1.5rem 1.5rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--md-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Renta mensual · 5G Ultra</p>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--md-on-surface)", letterSpacing: "-0.025em" }}>Planes Telcel Ultra</h2>
          </div>
          <Link href="/catalogo?cat=pospago" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(21,101,192,0.1)", color: "var(--md-primary)", padding: "0.6rem 1.2rem", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
            Ver todos <ChevronRight size={16} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {pospago.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      </section>

      {/* INTERNET + VEHICULAR */}
      <section style={{ padding: "1.5rem 1.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          <div style={{ background: "linear-gradient(135deg, #0277BD, #0288D1)", borderRadius: "24px", padding: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "200px", height: "200px", background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(30px)" }} />
            <Wifi size={32} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "1rem", position: "relative", zIndex: 1 }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: "0.4rem", position: "relative", zIndex: 1 }}>WiFi Telcel</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", marginBottom: "0.5rem", lineHeight: 1.5, position: "relative", zIndex: 1 }}>GB ilimitados desde $399/mes. Sin instalación ni cables.</p>
            <p style={{ color: "#90CAF9", fontSize: "1.4rem", fontWeight: 900, marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>Desde $399</p>
            <Link href="/catalogo?cat=internet" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", color: "white", padding: "0.7rem 1.4rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.3)", position: "relative", zIndex: 1 }}>
              Ver planes <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0D3B8E, #1565C0)", borderRadius: "24px", padding: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "200px", height: "200px", background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(30px)" }} />
            <Car size={32} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "1rem", position: "relative", zIndex: 1 }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: "0.4rem", position: "relative", zIndex: 1 }}>GPS Vehicular</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", marginBottom: "0.5rem", lineHeight: 1.5, position: "relative", zIndex: 1 }}>Localiza tu auto o flotilla en tiempo real con red Telcel.</p>
            <p style={{ color: "#90CAF9", fontSize: "1.4rem", fontWeight: 900, marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>Desde $899</p>
            <Link href="/catalogo?cat=vehicular" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", color: "white", padding: "0.7rem 1.4rem", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.3)", position: "relative", zIndex: 1 }}>
              Ver solución <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "1rem 1.5rem 3rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem" }}>
          {[
            { icon: <Zap size={22} />, titulo: "eSIM Instantánea", desc: "Actívate en minutos escaneando un QR. Sin esperas ni trámites físicos." },
            { icon: <Shield size={22} />, titulo: "Distribuidor Oficial", desc: "Productos 100% originales con garantía y respaldo directo de Telcel." },
            { icon: <Truck size={22} />, titulo: "Envío a todo México", desc: "Fedex, DHL y Estafeta con rastreo en tiempo real." },
            { icon: <Headphones size={22} />, titulo: "Soporte 24/7", desc: "Asistente IA y equipo humano siempre disponibles por WhatsApp." },
          ].map((f, i) => (
            <div key={i} className="glass-card animate-fade-up" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem", animationDelay: `${i * 0.07}s` }}>
              <div style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, rgba(21,101,192,0.1), rgba(2,136,209,0.14))", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--md-primary)", border: "1px solid rgba(21,101,192,0.1)" }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--md-on-surface)", marginBottom: "4px" }}>{f.titulo}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--md-on-surface-variant)", lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "0 1.5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="glass-dark" style={{ borderRadius: "24px", padding: "1.75rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", overflow: "hidden", background: "rgba(255,255,255,0.15)", padding: "2px" }}>
              <Image src="/logo.png" alt="SEM Factory" width={28} height={28} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
            <span style={{ color: "white", fontWeight: 700 }}>SEM Factory</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>· Distribuidor Autorizado Telcel</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>© 2026 SEM Factory. Todos los derechos reservados.</span>
        </div>
      </footer>

    </div>
  )
}