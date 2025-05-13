import { useQuery } from "@tanstack/react-query"
import { fetchDrugs, fetchDrug } from "./service"

export function useGetPharmacyDrugs<T extends { id: string}>(params: T) {
  return useQuery({
    queryKey: ["pharmacy_drugs", params],
    queryFn: () => {
      return fetchDrugs<T>(params)
    },
    enabled: !!params.id,
  })
}



export function useGetPharmacyDrugById<T extends { pharmacyId: string; drugId: string }>(params: T) {
  return useQuery({
    queryKey: ["pharmacy_drug", params],
    queryFn: () => {
      return fetchDrug<T>(params)
    },
    enabled: !!params.pharmacyId && !!params.drugId,
  })
}