import api from "../api";
import endPoints from "../endpoints"
export const createAppointment = (params ) => {
    return api.post(endPoints.createAppointment, params)
}