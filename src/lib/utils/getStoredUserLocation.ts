import cookieKeys from "@/lib/constants/cookieKeys"
import { aes } from "@hexify/shared"

export const getStoredUserLocation = async () => {
  try {
    if (typeof window === "undefined") {
      const cookies = await import("next/headers")
      const cookie = (await cookies.cookies()).get(cookieKeys.location)
      const data = aes.decrypt(cookie?.value || "")
      return JSON.parse(
        data.toString()
      ) as unknown as GeolocationPosition["coords"]
    }
    const cookie = await import("cookies-next")
    const data = aes.decrypt(
      (await cookie.getCookie(cookieKeys.location)) || ""
    )
    return JSON.parse(
      data.toString()
    ) as unknown as GeolocationPosition["coords"]
  } catch (e) {
    return null
  }
}
