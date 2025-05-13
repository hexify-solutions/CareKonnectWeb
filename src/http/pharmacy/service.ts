import api from "../api"
import endPoints from "../endpoints"


export const fetchDrugs = <T extends { id: string }>(params: T) => {
  return api.get(endPoints.getPharmacyDrugs(), {
    id: params?.id,
    
  })
}

export const fetchDrug = <T extends { pharmacyId: string; drugId: string }>(params: T) => {
  return api.get(endPoints.getPharmacyDrug(params), {})
}