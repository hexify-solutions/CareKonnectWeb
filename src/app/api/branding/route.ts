import { NextRequest } from "next/server"
import { UPDATE_BRAND_ROUTE } from "@hexify/engine/brand/route"

export async function GET(req: NextRequest) {
  return UPDATE_BRAND_ROUTE(req)
}
