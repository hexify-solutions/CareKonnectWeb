import { AxiosRequestConfig } from "axios"
import customRequest, { Transformer } from "./customRequest"
import {
  getCurrentUserDomain,
  getStoredUserLocation,
} from "@/lib/utils/getStoredUserLocation"
import { secureStorage as secureLocalStorage } from "../../../../../packages/shared"
import lsKeys from "@/lib/constants/lsKeys"

class Api {
  url: string
  errCb?: (err: Error) => void

  private readonly defaultHeaders: {
    Authorization: string
    "Content-Type": string
  }

  constructor(url: string, errCb?: (err: any) => void) {
    this.url = url
    this.errCb = errCb
    this.defaultHeaders = {
      Authorization: "",
      "Content-Type": "application/json",
    }

    this.setAuth = this.setAuth.bind(this)
  }

  setAuth(accessToken: string) {
    this.defaultHeaders.Authorization = `Bearer ${accessToken}`
  }

  static async generateHeader() {
    try {
      const location = await getStoredUserLocation()
      const accessToken = secureLocalStorage.getItem(lsKeys.token)
      return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        "X-User-Latitude": location.latitude + "",
        "X-User-Longitude": location.longitude + "",
        "X-User-Altitude": location.altitude + "",
        "X-Tenant-Domain": await getCurrentUserDomain(),
      }
    } catch (e) {
      return {}
    }
  }

  get<T, R = T>(
    path: string,
    options?: Record<never, never>,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      { method: "GET", ...options },
      transform,
      this.errCb
    )
  }

  post<T, R = T>(
    path: string,
    body: Record<string, unknown> | FormData,
    isFileUpload: boolean = false,
    options?: Pick<
      AxiosRequestConfig,
      "headers" | "onUploadProgress" | "cancelToken"
    >,
    transform?: Transformer<T, R>
  ) {
    const headers = {
      ...this.defaultHeaders,
      "Content-Type": isFileUpload ? "multipart/form-data" : "application/json",
      ...(options?.headers || {}),
    }
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "POST",
        data: body,
        headers,
        ...options,
      },
      transform,
      this.errCb
    )
  }

  patch<T, R = T>(
    path: string,
    body?: T,
    options?: Record<never, never>,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "PATCH",
        data: body,
        ...options,
      },
      transform,
      this.errCb
    )
  }

  put<T, R = T>(
    path: string,
    body: T,
    options?: Record<never, never>,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "PUT",
        data: body,
        ...options,
      },
      transform,
      this.errCb
    )
  }

  delete<T, R = T>(
    path: string,
    body?: Record<string, unknown>,
    options?: Record<never, never>,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "DELETE",
        data: body,
        ...options,
      },
      transform,
      this.errCb
    )
  }

  private request: typeof customRequest = (path, options, transform, errCb) =>
    customRequest(
      path,
      {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...(options?.headers || {}),
        },
      },
      transform,
      errCb
    )
}

export default Api
