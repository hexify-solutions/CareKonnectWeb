import { useQuery } from "@tanstack/react-query"
import { fetchAppointment } from "./service"

export function useAppointmentQuery<T extends { id: string}>(params: T) {
  return useQuery({
    queryKey: ["appointment", params],
    queryFn: () => {
      return fetchAppointment<T>(params)
    },
    enabled: !!params.id,
  })
}
