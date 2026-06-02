import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import FloatingButtons from "@/components/FloatingButtons"

export const metadata: Metadata = {
  title: "SEM Factory — Distribuidor Autorizado Telcel",
  description: "SIM, eSIM, planes pospago e internet en casa. Distribuidor autorizado Telcel.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: "72px", minHeight: "100vh" }}>
          {children}
        </main>
        <FloatingButtons />
      </body>
    </html>
  )
}