import api from "../api";
import endPoints from "../endpoints";


export const searchHandler = (params) => {
    console.log(params, "this is pram")
    return api.get(endPoints?.search, {
      params: {
        ...(!!params && params),
      },
    });
  };
  