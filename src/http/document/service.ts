import api from "../api";
import endPoints from "../endpoints";

export const upload = (params: any) => {
    return api.post(endPoints.uploadDocument, params, true);

}