"use client"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search } from "lucide-react"
import { useCart } from "@/lib/store"
import { useState, useEffect } from "react"

export default function Navbar() {
  const cantidad = useCart((s) => s.cantidad)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? "0.5rem 2rem" : "0.85rem 2rem",
      background: scrolled ? "rgba(13,59,142,0.82)" : "rgba(21,101,192,0.5)",
      backdropFilter: "blur(28px)",
      WebkitBackdropFilter: "blur(28px)",
      borderBottom: "1px solid rgba(255,255,255,0.14)",
      boxShadow: scrolled ? "0 8px 40px rgba(13,59,142,0.28)" : "none",
      transition: "all 0.4s cubic-bezier(0.2,0,0,1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
    }}>

      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
        <div style={{ width: "44px", height: "44px", borderRadius: "12px", overflow: "hidden", background: "white", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Image src="/logo.png" alt="SEM Factory" width={40} height={40} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
        </div>
        <span style={{ color: "white", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.01em", textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>
          SEM Factory
        </span>
      </Link>

      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {[
          { label: "Inicio",    href: "/" },
          { label: "Catálogo",  href: "/catalogo" },
          { label: "eSIM",      href: "/catalogo?cat=esim" },
          { label: "Cobertura", href: "/cobertura" },
          { label: "Soporte",   href: "/soporte" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none", padding: "0.45rem 1rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 500, transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "white" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.88)" }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <button
          style={{ width: "38px", height: "38px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.12)", cursor: "pointer", color: "white", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
        >
          <Search size={17} />
        </button>

        <Link
          href="/carrito"
          style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1rem", color: "white", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
        >
          <ShoppingCart size={17} />
          {mounted && cantidad() > 0 && (
            <span style={{ background: "#FF6B35", color: "white", borderRadius: "999px", padding: "1px 7px", fontSize: "0.72rem", fontWeight: 800, minWidth: "20px", textAlign: "center", boxShadow: "0 2px 8px rgba(255,107,53,0.5)" }}>
              {cantidad()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}