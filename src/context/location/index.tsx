"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { aes } from "@hexify/shared"
import { environment } from "@/lib/environment"
import cookieKeys from "@/lib/constants/cookieKeys"

interface UserLocationContextType {
  position: GeolocationPosition | null
  country: string | null
}

const UserLocationContext = createContext<UserLocationContextType | undefined>(
  undefined
)

export const UserLocationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null)
  const [country, setCountry] = useState<string | null>(null)

  useEffect(() => {
    const fetchIPLocation = async () => {
      try {
        const res = await fetch(environment.NEXT_PUBLIC_IP_DATA_URL)
        const data = await res.json()

        if (data?.latitude && data?.longitude) {
          const fallbackPosition = {
            coords: {
              latitude: data.latitude,
              longitude: data.longitude,
              accuracy: null,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          } as GeolocationPosition

          store(fallbackPosition)
          setLocation(fallbackPosition)
        }

        if (data?.country_name) {
          setCountry(data.country_name)
          document.cookie = `user.country=${data.country_name}; path=/; max-age=86400`
        }
      } catch (e) {
        console.warn("Failed to fetch IP-based location:", e)
      }
    }
    const fallbackLocation = () => {
      const fallbackPosition = getLocationFromStore()
      if (fallbackPosition) {
        store(fallbackPosition)
        setLocation(fallbackPosition)
        return
      }
      fetchIPLocation()
    }

    const geoSuccess = (position: GeolocationPosition) => {
      setLocation(position)
      store(position)
    }

    const geoError = (err: GeolocationPositionError) => {
      console.warn("Geolocation error:", err.message)

      fallbackLocation()
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    } else {
      fallbackLocation()
    }
  }, [])

  const store = ({ coords }: GeolocationPosition) => {
    document.cookie = `${cookieKeys.location}=${aes.encrypt(
      JSON.stringify(coords)
    )}; path=/; max-age=86400`
  }
  const getLocationFromStore = () => {
    function get(name: string): string | null {
      const cookies = document.cookie.split("; ")
      const cookie = cookies.find((row) => row.startsWith(`${name}=`))
      return cookie
        ? aes.decrypt(decodeURIComponent(cookie.split("=")[1]))
        : null
    }

    const coords = JSON.parse(get(cookieKeys.location) || "{}")

    return !coords?.longitude
      ? null
      : ({
          coords: {
            latitude: coords?.latitude,
            longitude: coords?.longitude,
          },
        } as unknown as GeolocationPosition)
  }

  return (
    <UserLocationContext.Provider value={{ position: location, country }}>
      {children}
    </UserLocationContext.Provider>
  )
}

export const useUserLocation = () => {
  const context = useContext(UserLocationContext)
  if (!context) {
    throw new Error(
      "useUserLocation must be used within a UserLocationProvider."
    )
  }
  return context
}

export default UserLocationProvider
