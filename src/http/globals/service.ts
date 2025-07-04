import api from "../api"
import endPoints from "../endpoints"

export const searchHandler = (params) => {
  console.log(endPoints?.search, "endPoints?.search")
  return api.get(endPoints?.search, {
    params: {
      ...(!!params && params),
    },
  })
}
