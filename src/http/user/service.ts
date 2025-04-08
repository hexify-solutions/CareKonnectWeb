
import api from "../api";
import endPoints from "../endpoints";


export const createEmergencyContact = (params) => {
    return api.post(endPoints.createEmergencyContact, params);
  };
  