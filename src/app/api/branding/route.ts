import getBranding from "@hexify/atoms/src/theme/getBranding"

export async function GET(req: Request) {
  const data = await getBranding()
  return new Response(JSON.stringify(data))
}
