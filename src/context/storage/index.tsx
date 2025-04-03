"use client"

import React, { createContext, useContext } from "react"
import { secureStorage as secureLocalStorage } from "@hexify/shared"

interface SecureStorageContextType {
  getItem: (key: string) => any
  setItem: (key: string, value: any) => void
  removeItem: (key: string) => void
  // setEngine: (
  //   engine: Pick<Storage, "setItem" | "getItem" | "removeItem">
  // ) => void
}

const SecureStorageContext = createContext<
  SecureStorageContextType | undefined
>(undefined)

export const SecureStorageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getItem = (key: string) => secureLocalStorage.getItem(key)
  const setItem = (key: string, value: any) =>
    secureLocalStorage.setItem(key, value)
  const removeItem = (key: string) => secureLocalStorage.removeItem(key)
  // const setEngine = (
  //   engine: Pick<Storage, "setItem" | "getItem" | "removeItem">
  // ) => secureLocalStorage.setStorageEngine(engine)

  return (
    <SecureStorageContext.Provider
      value={{ getItem, setItem, removeItem }}
    >
      {children}
    </SecureStorageContext.Provider>
  )
}

export const useSecureStorage = () => {
  const context = useContext(SecureStorageContext)
  if (!context) {
    throw new Error(
      "useSecureStorage must be used within a SecureStorageProvider."
    )
  }
  return context
}

export default SecureStorageProvider
