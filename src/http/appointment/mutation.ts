import { useMutation } from "@tanstack/react-query"
import { createAppointment, makePaymentForAppointment, verifyPaymentForAppointment} from "./service"

export function useCreateAppointment() {
  return useMutation({ mutationFn: createAppointment })
}

export function useMakePaymentForAppointment<T extends { provider: string; appointmentId: string}>() {
  return useMutation({ mutationFn: (params: T) =>  makePaymentForAppointment(params) })
}

export function useVerifyPaymentForAppointment<T extends { provider: string; reference: string}>() {
  return useMutation({ mutationFn: (params: T) =>  verifyPaymentForAppointment(params) })
}