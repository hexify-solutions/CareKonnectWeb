export const buildQueryString = (
  params: Record<string, string | null>,
  baseQuery?: string,

): string => {
  const queryParams = new URLSearchParams(baseQuery || "")

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      queryParams.set(key, value)
    } else {
      queryParams.delete(key)
    }
  })

  return queryParams.toString()
}
