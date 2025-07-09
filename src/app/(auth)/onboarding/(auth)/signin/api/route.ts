import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import Api from "@/http/api/api"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const cookieStore = await cookies()
    const host = req.headers.get("host")
    const domain = (host || process.env.NEXT_PUBLIC_FE_URL || req.nextUrl.host)
      ?.replace("https://", "")
      ?.replace("http://", "")

    const apiUrl = process.env.NEXT_PUBLIC_URL ?? "http://localhost:9000"
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "X-Tenant-Domain": domain,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return new Response(errorData?.message, {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      })
    }

    const data = await response.json()
    cookieStore.set({
      name: "auth_token",
      value: data?.data?.token?.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    })

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Unexpected Error:", error)
    return new Response(
      JSON.stringify({ error: "Something went wrong", details: String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value
  const apiUrl = process.env.NEXT_PUBLIC_URL ?? "http://localhost:9000"

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  try {
    const response = await fetch(`${apiUrl}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    if (data?.data?.status === 401) {
      cookieStore.delete("auth_token")
      return NextResponse.json({ authenticated: false })
    }
    return NextResponse.json({
      authenticated: true,
      token,
      profile: data?.data,
    })
  } catch (err) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
