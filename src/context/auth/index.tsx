"use client"

import {
  createContext,
  useContext,
  ReactElement,
  JSXElementConstructor,
} from "react"
import useAuth from "@/hooks/useAuth"
import useInitialAuthSetup from "@/hooks/useInitialAuthSetup"
import {
  OnRegisterType,
  OnLoginType,
  OnVerifyType,
  ProfileType,
  onTriggerPasswordChangeType,
  resendVerifyEmailType,
} from "@/types"

export const AuthContext = createContext<
  | {
      onRegister: OnRegisterType
      onLogin: OnLoginType
      onVerify: OnVerifyType
      onTriggerPasswordChange: onTriggerPasswordChangeType
      profile: ProfileType
      isAuth: boolean
      resendVerifyEmailHandler: resendVerifyEmailType
      onLogOut: () => void
    }
  | undefined
>(undefined)

const AuthProvider = ({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}) => {
  const initialAuthState = useInitialAuthSetup()
  const {
    onRegister,
    onLogOut,
    onLogin,
    onVerify,
    profile,
    isAuth,
    onTriggerPasswordChange,
    resendVerifyEmailHandler,
  } = useAuth(initialAuthState)

  const value = {
    onRegister,
    onLogin,
    onVerify,
    profile,
    isAuth,
    onTriggerPasswordChange,
    resendVerifyEmailHandler,
    onLogOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const authContext = useContext(AuthContext)
  if (authContext === undefined)
    throw new Error("useAuth used outside AuthProvider")

  return authContext
}

export default AuthProvider
