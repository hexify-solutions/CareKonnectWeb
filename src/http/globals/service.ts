import api from "../api"
import endPoints from "../endpoints"

export const searchHandler = (params) => {
  return api.get(endPoints?.search, {
    params: {
      ...(!!params && params),
    },
  })
}
