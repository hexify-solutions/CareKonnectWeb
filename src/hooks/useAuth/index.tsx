import { useState, useEffect, useLayoutEffect } from "react";
import {
  useRegisterMutation,
  useLoginMutation,
  useVerifyMutation,
  useTriggerPasswordReset,
} from "@/http/auth/mutation";
import {
  RegistrationType,
  LoginType,
  RegistrationResponseType,
  VerifyType,
  ProfileType,
  TriggerPasswordResetType,
} from "@/types";
import { toast } from "react-toastify";
import routes from "@/lib/constants/routes";
import lsKeys from "@/lib/constants/lsKeys";
import { useSecureStorage } from "@/context/storage";
import { useRouter } from "next/navigation";
import api from "@/http/api";

const useAuth = (defaultState: { isAuth: boolean; profile: ProfileType, }) => {

  const [authState, setAuthState] = useState<{
    isAuth: boolean;
    profile: ProfileType;
  }>(defaultState ||{
    isAuth: false,
    profile: {} as ProfileType,
  });

  useLayoutEffect(() => {
    setAuthState(defaultState)
  }, [defaultState])

  const router = useRouter();
  const registerMutation = useRegisterMutation<RegistrationType>();
  const triggerPasswordResetMutation = useTriggerPasswordReset<TriggerPasswordResetType>();
  const loginMutation = useLoginMutation<LoginType>();
  const verifyMutation = useVerifyMutation<VerifyType>();
  const { setItem } = useSecureStorage();

  const onTriggerPasswordChange = (params: TriggerPasswordResetType) => {
    triggerPasswordResetMutation.mutate(params, {
      onSettled: (response, err?: Error | null) => {
        if (err) {
          return toast.error(err?.message || "Password Reset Failed!");
        }
        return toast.error(response?.message || "Please check email for password reset instructions", {
          onOpen: () => {
            router.push(routes.passwordReset)
          }
        });
      }
    })
  }

  const onVerify = (params: VerifyType) => {
    verifyMutation?.mutate(params, {
      onSettled: (response, err?: Error | null) => {
        if (err) {
          return toast.error(err?.message || "Verification Failed!");
        }
        toast.success(response?.message || "Verification Successful", {
          onOpen: () => {
            router.push(routes.login);
          },
        });
      },
    });
  };

  const onRegister = (params: RegistrationType) => {
    registerMutation.mutate(params, {
      onSettled: (response?: RegistrationResponseType, err?: Error | null) => {
        if (err) {
          return toast.error(err?.message || "Registration Failed!");
        }
        if (response) {
          setAuthState((prev) => ({
            ...prev,
            profile: {
              email: response.data.email,
              id: response.data.id,
            },
          }));
        }
        toast.success(response?.message, {
          onOpen: () => {
            router.push(routes.verifyEmail);
          },
        });
      },
    });
  };

  const onLogin = (params: LoginType) => {
    loginMutation.mutate(params, {
      onSettled: (response, err) => {
        if (err) {
          return toast.error(err?.message || "Login Failed!");
        }
        if (response) {
          const { token, ...rest } = response.data;
          api.setAuth(token?.token);
          setItem(lsKeys.profile, rest)
          setItem(lsKeys.token, token?.token)
          setItem(lsKeys.tokenExpiration, token?.expiresAt)
          setAuthState((prev) => {
            return {
              ...prev,
              isAuth: true,
              profile: rest,
              token: token,
            };
          });

          toast.success(response?.message, {
            onOpen: () => {
              router.push(routes.home);
            },
          });
        }
      },
    });
  };

  onRegister.isLoading = registerMutation.isPending;
  onRegister.error = registerMutation.error;
  onLogin.isLoading = loginMutation.isPending;
  onLogin.error = loginMutation.error;
  onVerify.isLoading = verifyMutation.isPending;
  onVerify.error = verifyMutation.error;
  onTriggerPasswordChange.isLoading = triggerPasswordResetMutation.isPending;
  onTriggerPasswordChange.error = triggerPasswordResetMutation.error

  return {
    onRegister,
    onLogin,
    onVerify,
    onTriggerPasswordChange,
    ...authState,
  };
};

export default useAuth;
