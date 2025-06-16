import { NextResponse } from "next/server"
import api from "@/http/api"
import { brandId } from "@hexify/atoms/src/theme/getBranding"
import { NextApiResponse } from "next"

export async function GET() {
  // Run update in background without waiting
  // updateBrandingFromSource()
  //   .then((success) =>
  //     console.log(`Branding update ${success ? "succeeded" : "failed"}`)
  //   )
  //   .catch((err) => console.error("Update error:", err))
  try {
    const { data } = await api.get("lex/branding/" + brandId)

    // Reflect.deleteProperty(data, "deletedAt")
    // Reflect.deleteProperty(data, "createdAt")
    // Reflect.deleteProperty(data, "updatedAt")
    // Reflect.deleteProperty(data, "id")
    // Reflect.deleteProperty(data, "brandId")
    Reflect.deleteProperty(data, "meta")

    return new Response(
      JSON.stringify({ status: "update_started", data, success: true }),
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=360, stale-while-revalidate",
          "Content-Type": "application/json",
        },
      }
    )
  } catch (e) {
    console.log(e, "pokiijuhgt")
  }
  return NextResponse.json({ status: "update_not_started", success: false })
}
