import path from "node:path"
import { defineConfig } from "prisma/config"

const url = process.env.DIRECT_URL ?? ""

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url,
  },
})