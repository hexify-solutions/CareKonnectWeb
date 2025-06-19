import { useState, useLayoutEffect, useEffect } from "react"
import {
  useRegisterMutation,
  useLoginMutation,
  useVerifyMutation,
  useTriggerPasswordReset,
  useResendVerifyMutation,
  usePasswordChangeMutation,
  useLogoutMutation,
} from "@/http/auth/mutation"
import {
  RegistrationType,
  LoginType,
  RegistrationResponseType,
  VerifyType,
  ProfileType,
  TriggerPasswordResetType,
  PasswordChangeType,
} from "@/types"
import { toast } from "react-toastify"
import routes from "@/lib/constants/routes"
import lsKeys from "@/lib/constants/lsKeys"
import { useSecureStorage } from "@/context/storage"
import { useRouter } from "next/navigation"
import api from "@/http/api"

const useAuth = (defaultState: { isAuth: boolean; profile: ProfileType }) => {
  const [authState, setAuthState] = useState<{
    isAuth: boolean
    profile: ProfileType
  }>(
    defaultState || {
      isAuth: false,
      profile: {} as ProfileType,
    }
  )

  useEffect(() => {
    setAuthState(defaultState)
  }, [defaultState])
  useLayoutEffect(() => {
    const hasProfile = !!authState.profile?.email
    setAuthState({ ...authState, isAuth: hasProfile })
  }, [authState.profile])

  const router = useRouter()
  const registerMutation = useRegisterMutation<RegistrationType>()
  const triggerPasswordResetMutation =
    useTriggerPasswordReset<TriggerPasswordResetType>()
  const loginMutation = useLoginMutation<LoginType>()
  const logoutMutation = useLogoutMutation<{}>()
  const verifyMutation = useVerifyMutation<VerifyType>()
  const resendVerifyEmailMutation = useResendVerifyMutation<{
    email: string
  }>()

  const passwordChangeMutation = usePasswordChangeMutation()

  const { setItem, removeItem } = useSecureStorage()

  const onTriggerPasswordChange = (params: TriggerPasswordResetType) => {
    triggerPasswordResetMutation.mutate(params, {
      onSettled: (
        response,
        err: Error | null,
        variables: { email: string }
      ) => {
        if (err) {
          return toast.error(err?.message || "Password Reset Failed!")
        }
        setItem(lsKeys.resetPasswordEmail, variables?.email)
        return toast.success(
          response?.message ||
            "Please check email for password reset instructions",
          {
            onOpen: () => {
              router.push(routes.passwordReset)
            },
          }
        )
      },
    })
  }

  const onPasswordChange = (params: PasswordChangeType) => {
    passwordChangeMutation.mutate(params, {
      onSettled: (response, err, variables) => {
        if (err) {
          return toast.error(err?.message || "Password Reset Failed!")
        }
        removeItem(lsKeys.resetPasswordEmail)
        return toast.success(
          response?.message || "Password Change Successfully Please Login",
          {
            onOpen: () => {
              router.push(routes.login)
            },
          }
        )
      },
    })
  }

  const onVerify = (params: VerifyType, cb?: (params: VerifyType) => void) => {
    verifyMutation?.mutate(params, {
      onSettled: (response, err: Error | null, variables: VerifyType) => {
        if (err) {
          return toast.error(err?.message || "Verification Failed!")
        }

        toast.success(response?.message || "Verification Successful", {
          onOpen: () => {
            if (cb) {
              cb?.(variables)
            } else {
              router.push(routes.login)
            }
          },
        })
      },
    })
  }

  const resendVerifyEmailHandler = (params: { email: string }) => {
    resendVerifyEmailMutation?.mutate(params, {
      onSettled: (response, err?: Error | null) => {
        if (err) {
          return toast.error(
            err?.message || "Could not resend Verification code!"
          )
        }
        toast.success(response?.message || "Verification code sent")
      },
    })
  }

  const onRegister = (params: RegistrationType) => {
    registerMutation.mutate(params, {
      onSettled: (response?: RegistrationResponseType, err?: Error | null) => {
        if (err) {
          return toast.error(err?.message || "Registration Failed!")
        }
        if (response) {
          setItem(lsKeys.verifyUserEmail, response?.data?.email)
          setAuthState((prev) => ({
            ...prev,
            profile: {
              email: response.data.email,
              id: response.data.id,
            },
          }))
        }
        toast.success(response?.message, {
          onOpen: () => {
            router.push(routes.verifyEmail)
          },
        })
      },
    })
  }

  const onLogOut = () => {
    logoutMutation?.mutate(
      {},
      {
        onSettled: () => {
          router.push(routes.home)
        },
      }
    )
    removeItem(lsKeys.profile)
    removeItem(lsKeys.token)
    removeItem(lsKeys.tokenExpiration)
    setAuthState((prev) => ({
      ...prev,
      isAuth: false,
      profile: {
        email: "",
        id: "",
        action: "logout",
      },
    }))
  }
  const onLogin = async (params: LoginType) => {
    loginMutation.mutate(params, {
      onSettled: async (response, err) => {
        if (err) {
          //TODO: this check should be optimized as it is prone to bug
          if (err?.message === "Please verify your email") {
            setAuthState((prev) => ({
              ...prev,
              profile: {
                ...(prev?.profile || {}),
                id: prev?.profile?.id,
                email: params?.email,
              },
            }))
            router.push(routes.verifyEmail)
          }
          return toast.error(err?.message || "Login Failed!")
        }
        if (response) {
          const { token, ...rest } = response?.data?.data
          api.setAuth(token?.token)
          setItem(lsKeys.profile, rest)
          setItem(lsKeys.token, token?.token)
          setItem(lsKeys.tokenExpiration, token?.expiresAt)

          setAuthState((prev) => {
            return {
              ...prev,
              isAuth: true,
              profile: rest,
              token: token,
            }
          })

          toast.success(response?.message, {
            onOpen: () => {
              // TODO: conditionally redirect user to the last page they visited before auth, if not home
              // otherwise redirect to user dashboard
              router.push(routes.userDashboard)
            },
          })
        }
      },
    })
  }

  onPasswordChange.isLoading = passwordChangeMutation.isPending
  onPasswordChange.error = passwordChangeMutation.error

  onRegister.isLoading = registerMutation.isPending
  onRegister.error = registerMutation.error

  onLogin.isLoading = loginMutation.isPending
  onLogin.error = loginMutation.error

  onVerify.isLoading = verifyMutation.isPending
  onVerify.error = verifyMutation.error

  onTriggerPasswordChange.isLoading = triggerPasswordResetMutation.isPending
  onTriggerPasswordChange.error = triggerPasswordResetMutation.error

  resendVerifyEmailHandler.isLoading = resendVerifyEmailMutation.isPending
  resendVerifyEmailHandler.error = resendVerifyEmailMutation.error

  return {
    setAuthState,
    onRegister,
    onLogin,
    onVerify,
    onTriggerPasswordChange,
    resendVerifyEmailHandler,
    onLogOut,
    onPasswordChange,
    ...authState,
  }
}

export default useAuth
