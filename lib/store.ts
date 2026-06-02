import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  id: string
  nombre: string
  precio: number
  imagen: string
  cantidad: number
  variante?: string
}

type CartStore = {
  items: CartItem[]
  agregar: (item: CartItem) => void
  quitar: (id: string, variante?: string) => void
  actualizar: (id: string, cantidad: number, variante?: string) => void
  limpiar: () => void
  total: () => number
  cantidad: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      agregar: (item) => {
        const items = get().items
        const key = item.id + (item.variante || "")
        const existe = items.find((i) => i.id + (i.variante || "") === key)
        if (existe) {
          set({
            items: items.map((i) =>
              i.id + (i.variante || "") === key
                ? { ...i, cantidad: i.cantidad + item.cantidad }
                : i
            ),
          })
        } else {
          set({ items: [...items, item] })
        }
      },
      quitar: (id, variante) => {
        const key = id + (variante || "")
        set({ items: get().items.filter((i) => i.id + (i.variante || "") !== key) })
      },
      actualizar: (id, cantidad, variante) => {
        const key = id + (variante || "")
        if (cantidad <= 0) {
          set({ items: get().items.filter((i) => i.id + (i.variante || "") !== key) })
        } else {
          set({
            items: get().items.map((i) =>
              i.id + (i.variante || "") === key ? { ...i, cantidad } : i
            ),
          })
        }
      },
      limpiar: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.precio * i.cantidad, 0),
      cantidad: () => get().items.reduce((s, i) => s + i.cantidad, 0),
    }),
    { name: "sem-factory-cart" }
  )
)