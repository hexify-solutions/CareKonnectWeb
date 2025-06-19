import { useQuery } from "@tanstack/react-query"
import { fetchAppointment, fetchAppUseSpecializations } from "./service"

export function useAppointmentQuery<T extends { id: string }>(params: T) {
  return useQuery({
    queryKey: ["appointment", params],
    queryFn: () => {
      return fetchAppointment<T>(params)
    },
    enabled: !!params.id,
  })
}

export function useSpecializationListQuery<T>(params?: T) {
  return useQuery({
    queryKey: ["fetchAppUseSpecializations"],
    queryFn: () => {
      return fetchAppUseSpecializations<T>(params)
    },
    // enabled: false,
  })
}
