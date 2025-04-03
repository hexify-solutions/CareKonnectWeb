import api from "../api"
import endPoints from "../endpoints"
export const createAppointment = (params) => {
  return api.post(endPoints.createAppointment, params)
}

export const fetchAppointment = <T extends { id: string }>(params: T) => {
  return api.get(endPoints.getAppointment(params?.id), {})
}
