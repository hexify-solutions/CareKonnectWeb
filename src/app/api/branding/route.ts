import { NextRequest, NextResponse } from "next/server"
import api from "@/http/api"
import { brandId } from "@hexify/atoms/src/theme/getBranding"
import { cookies } from "next/headers"

let cachedData: any = null
let cachedETag: string | null = null
let lastFetchTime = 0
const CACHE_DURATION = 1000 * 60 * 5 // 5 minutes

export async function GET(req: NextRequest) {
  const now = Date.now()
  const clientETag = req.headers.get("if-none-match")

  try {
    // Refresh cache if expired or empty
    if (
      !cachedData ||
      now - lastFetchTime > CACHE_DURATION ||
      typeof CACHE_DURATION !== "undefined"
    ) {
      const { data } = await api.get("lex/branding/" + brandId)

      // Remove unneeded fields
      Reflect.deleteProperty(data, "meta")

      cachedData = data
      lastFetchTime = now
      cachedETag = `"${lastFetchTime}"` // ✅ Fast ETag
    }
    const cookieStore = await cookies()
    cookieStore.set("branding", JSON.stringify(cachedData), { maxAge: 10000 })
    // Return fresh/cached data with ETag
    const reqHeaders = req.headers.get("access-control-request-headers") ?? ""

    return new Response(
      JSON.stringify({
        status: "update_started",
        data: cachedData,
        success: true,
        cachedETag,
      }),
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=360, stale-while-revalidate",
          ETag: cachedETag,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": reqHeaders,
        },
      }
    )
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { status: "update_not_started", success: false },
      { status: 500 }
    )
  }
}

// export async function OPTIONS(req: NextRequest) {
//   const origin = req.headers.get("origin") ?? "*"
//   const reqHeaders = req.headers.get("access-control-request-headers") ?? ""
//
//   return new NextResponse(null, {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": origin,
//       "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
//       "Access-Control-Allow-Headers": reqHeaders,
//       "Access-Control-Allow-Credentials": "true", // add only if you need cookies
//     },
//   })
// }

/* GET / POST handlers … add the same three headers to every response */
