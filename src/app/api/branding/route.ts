import { NextRequest, NextResponse } from "next/server"
import api from "@/http/api"
import { brandId } from "@hexify/atoms/src/theme/getBranding"

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

    // Return fresh/cached data with ETag
    return new Response(
      JSON.stringify({
        status: "update_started",
        data: cachedData,
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=360, stale-while-revalidate",
          ETag: cachedETag,
          "Content-Type": "application/json",
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
