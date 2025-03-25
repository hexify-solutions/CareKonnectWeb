import api from "../api";
import endPoints from "../endpoints";
import { RegistrationResponseType, LoginResponseType } from "@/types";

export const login = <T extends {}>(params: T) => {
  return api.post<LoginResponseType>(
    endPoints.login,
    params
  );
};

export const register = <T extends {}>(params: T) => {
  return api.post<RegistrationResponseType>(endPoints.register, params);
};

export const verify = <T extends {}>(params: T) => {
  return api.post<RegistrationResponseType>(endPoints.verify, params);
};

export const triggerPasswordReset = <T extends {}>(params: T) => {
  return api.post<{
    message: string
  }>(endPoints.triggerPasswordReset, params);
};

export const resendVerifyEmail = <T extends {}>(params: T) => {
  return api.post<{message: string}>(endPoints.resendVerifyEmail, params)
}

export const changePassword = <T extends {}>(params: T) => {
  return api.post<{message: string}>(endPoints.changePassword, params)
}

// export const logout = (params: Record<string, any>) => {
//   return api.post(LOGOUT, params);
// };
