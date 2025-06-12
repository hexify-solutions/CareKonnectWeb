import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const brandId = process.env.NEXT_PUBLIC_CLIENT_BRAND_ID

  const url =
    process.env.NEXT_PUBLIC_URL + "/lex/branding/" + brandId + "?noCache=true"
  const response = await (await fetch(url)).json()
  res.setHeader("Cache-Control", "s-maxage=360, stale-while-revalidate")
  return res.status(200).json(response?.data)
}
