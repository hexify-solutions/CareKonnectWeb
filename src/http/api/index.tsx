import Api from "./api"

const isProduction = process.env.NODE_ENV === "production"
const URL = isProduction
  ? process.env.NEXT_PUBLIC_URL_PROD
  : process.env.NEXT_PUBLIC_URL
console.log(URL, isProduction)
const api = new Api(URL || "/api")
export default api
