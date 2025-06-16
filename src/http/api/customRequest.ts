import axios, { AxiosRequestConfig } from "axios"
import Api from "@/http/api/api"

axios.interceptors.request.use(async (config) => {
  const headers = await Api.generateHeader()
  Object.entries(headers).forEach(([key, value]) => {
    config.headers.set(key, value)
  })
  return config
})

export class ResponseError extends Error {
  type: string | number

  constructor(message: string, type: string | number) {
    super(message)
    this.type = type
  }
}

class ConnectionError extends Error {
  constructor() {
    super()
    this.message = "Network failed."
  }
}

export interface Transformer<In, Out> {
  (data: In): Out
}

export default async function customRequest<T, R = T>(
  path: string,
  options?: AxiosRequestConfig,
  transform?: Transformer<T, R>,
  errCb?: (err: Error) => void
): Promise<R> {
  try {
    const res = await axios(path, options)

    if (transform) {
      return transform(await res.data)
    }

    return res.data
  } catch (err) {
    if (!axios.isAxiosError(err)) throw err

    errCb?.(err)
    if (err.response) {
      throw new ResponseError(
        err.response.data.errors?.[0]?.message ||
          err.response.data.message ||
          err.response.data,
        err.response.status
      )
    }

    throw new ConnectionError()
  }
}
