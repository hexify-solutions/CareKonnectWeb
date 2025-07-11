import Api from "@/http/api/api"

export const fetchData = async ({
  url,
  options = {},
  errorMessage,
}: {
  url: string
  options?: {}
  errorMessage?: string
}) => {
  try {
    const headers = await Api.generateHeader()
    const response = await fetch(url, {
      method: "GET",
      ...(options || {}),
      headers: {
        "Content-Type": "application/json",
        ...headers,
        ...(options?.headers || {}),
      },
    })

    if (!response.ok) {
      throw new Error(errorMessage || "Error")
    }

    return await response.json()
  } catch (error) {
    console.error(errorMessage, error)
    return null
  }
}
