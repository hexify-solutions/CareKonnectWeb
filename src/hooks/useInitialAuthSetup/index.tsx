"use client"

import { useSecureStorage } from "@/context/storage"
import { useLayoutEffect, useState } from "react"
import { ProfileType } from "@/types"
import lsKeys from "@/lib/constants/lsKeys"
import api from "@/http/api"
import { fetchData } from "@/http"

type AuthSetup = {
  profile: ProfileType
  token?: string
  isAuth: boolean
}

const useInitialAuthSetup = (): AuthSetup => {
  const { getItem, removeItem, setItem } = useSecureStorage()
  const [initialAuthSetup, setInitialAuthSetup] = useState<AuthSetup>({
    isAuth: false,
    profile: { email: "", id: "" },
  })

  const hasTimeElapsedHandler = (timestamp: string): boolean => {
    const currentTime = new Date()
    const targetTime = new Date(timestamp)

    if (isNaN(targetTime.getTime())) {
      throw new Error("Invalid timestamp format")
    }

    return currentTime > targetTime
  }

  const checkAuth = async () => {
    const profile = getItem(lsKeys.profile)

    const token = getItem(lsKeys.token)

    setInitialAuthSetup({
      profile: profile,
      token: token,
      isAuth: !!token,
    })

    const authResponse = await fetchData({ url: "/onboarding/signin/api" })

    if (
      authResponse?.authenticated &&
      authResponse?.token &&
      authResponse?.profile?.email
    ) {
      api.setAuth(authResponse?.token)
      setInitialAuthSetup({
        profile: authResponse?.profile || profile,
        token: authResponse?.token,
        isAuth: true,
      })
      setItem(lsKeys.profile, authResponse?.profile)
      setItem(lsKeys.token, authResponse?.token)
    } else {
      setInitialAuthSetup({
        isAuth: false,
        profile: { email: "", id: "" },
      })
    }
  }

  useLayoutEffect(() => {
    checkAuth()
  }, [getItem, removeItem])

  return initialAuthSetup
}

export default useInitialAuthSetup
