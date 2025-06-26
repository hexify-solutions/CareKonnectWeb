import Api from "./api"

const isProduction = process.env.NODE_ENV === "production"
const URL = process.env.NEXT_PUBLIC_URL
console.table({ URL, isProduction })
const api = new Api(URL || "/api")
export default api
