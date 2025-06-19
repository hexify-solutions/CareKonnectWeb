import api from "../api"
import endPoints from "../endpoints"
export const createAppointment = (params) => {
  return api.post(endPoints.createAppointment, params)
}

export const fetchAppointment = <T extends { id: string }>(params: T) => {
  return api.get(endPoints.getAppointment(params?.id), {})
}
export const makePaymentForAppointment = <
  T extends { provider: string; appointmentId: string },
>(
  params: T
) => {
  return api.post(endPoints.payment, params)
}

export const verifyPaymentForAppointment = <
  T extends { provider: string; reference: string },
>(
  params: T
) => {
  return api.post(endPoints.transaction, params)
}

export const fetchAppUseSpecializations = <T>(params?: T) => {
  return api.get(endPoints.appUseSpecializations, { params })
}
