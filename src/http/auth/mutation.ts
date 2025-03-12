import { useMutation } from "@tanstack/react-query";
import { login, register, verify, triggerPasswordReset, resendVerifyEmail  } from "./service";

export function useLoginMutation<T extends {}>() {
  return useMutation({ mutationFn: (params: T) => login(params) });
}

export function useRegisterMutation<T extends { userType: string }>() {
  return useMutation({ mutationFn: (params: T) => register(params) });
}

export function useVerifyMutation<T extends {}>() {
  return useMutation({ mutationFn: (params: T) => verify(params) });
}

export function useResendVerifyMutation<T extends {}>() {
  return useMutation({ mutationFn: (params: T) => resendVerifyEmail(params) })
}

export function useTriggerPasswordReset<T extends {}>() {
    return useMutation({ mutationFn: (params: T) => triggerPasswordReset(params) });
  }
