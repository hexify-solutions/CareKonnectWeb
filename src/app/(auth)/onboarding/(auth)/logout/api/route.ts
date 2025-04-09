import { cookies } from "next/headers"

export async function POST() {
  try {
    const cookieStore = await cookies()

    cookieStore.delete("auth_token")

    return new Response(JSON.stringify({ message: "logout complete" }), {
      status: 200,
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
