import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const imei = req.nextUrl.searchParams.get("imei")

  if (!imei || imei.length !== 15) {
    return NextResponse.json({ compatible: null, mensaje: "IMEI inválido" }, { status: 400 })
  }

  const apiKey = process.env.IMEI_INFO_API_KEY

  if (!apiKey) {
    return NextResponse.json(analizarTAC(imei))
  }

  try {
    const res = await fetch(
      `https://dash.dev.imei.info/api/check/1/?imei=${imei}&API_KEY=${apiKey}`,
      { headers: { "Content-Type": "application/json" } }
    )

    if (!res.ok) {
      return NextResponse.json(analizarTAC(imei))
    }

    const data = await res.json()

    const marca = data.brand || data.manufacturer || ""
    const modelo = data.model || data.name || ""
    const tecnologia = data.technology || data.network || ""
    const esSolo2G = tecnologia.toLowerCase().includes("gsm") && !tecnologia.toLowerCase().includes("lte") && !tecnologia.toLowerCase().includes("5g") && !tecnologia.toLowerCase().includes("hspa") && !tecnologia.toLowerCase().includes("3g")
    const compatible = !esSolo2G

    return NextResponse.json({
      compatible,
      marca,
      modelo,
      tecnologia: tecnologia || "4G LTE",
      mensaje: compatible ? "¡Tu teléfono es compatible con Telcel!" : "Tu equipo solo soporta 2G y no es compatible.",
      detalles: compatible
        ? `${marca} ${modelo} es compatible. Puedes activar SIM física o eSIM.`
        : "Los planes Telcel requieren al menos 3G. Consúltanos por WhatsApp.",
    })
  } catch {
    return NextResponse.json(analizarTAC(imei))
  }
}

function analizarTAC(imei: string) {
  const tac = imei.substring(0, 8)
  const marcas: Record<string, { marca: string; tecnologia: string }> = {
    "35": { marca: "Apple iPhone", tecnologia: "5G / 4G LTE" },
    "86": { marca: "Samsung", tecnologia: "5G / 4G LTE" },
    "35674": { marca: "Motorola", tecnologia: "4G LTE" },
    "35407": { marca: "Motorola", tecnologia: "4G LTE" },
    "86778": { marca: "Xiaomi", tecnologia: "5G / 4G LTE" },
    "86732": { marca: "Xiaomi", tecnologia: "4G LTE" },
    "35920": { marca: "LG", tecnologia: "4G LTE" },
    "35984": { marca: "Huawei", tecnologia: "4G LTE" },
  }
  for (const [prefix, info] of Object.entries(marcas)) {
    if (tac.startsWith(prefix)) {
      return {
        compatible: true,
        marca: info.marca,
        modelo: "Ver en tu equipo",
        tecnologia: info.tecnologia,
        mensaje: "¡Tu teléfono es compatible con Telcel!",
        detalles: `Compatible con red ${info.tecnologia}. Puedes activar SIM física o eSIM.`,
      }
    }
  }
  return {
    compatible: null,
    mensaje: "No pudimos determinar la compatibilidad automáticamente.",
    detalles: "Contáctanos por WhatsApp con tu IMEI y modelo de equipo para verificación personalizada.",
  }
}