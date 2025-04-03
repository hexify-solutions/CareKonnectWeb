import { useMutation } from "@tanstack/react-query"
import { createAppointment } from "./service"

export function useCreateAppointment() {
  return useMutation({ mutationFn: createAppointment })
}
