import api from "../api";
import endPoints from "../endpoints";
import { RegistrationResponseType, LoginResponseType } from "@/types";

export const login = async <T extends Record<string, any>>(params: T) => {
  try {
    const response = await fetch('/onboarding/signin/api', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Extract error message
      throw new Error(`Login failed: ${errorMessage || response.statusText}`);
    }

    return await response.json(); // Ensure it's valid JSON

  } catch (error) {
    console.error("Login request error:", error);
    throw error; // Let React Query handle it
  }
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

export const changePasswordByUser = <T extends {}>(params: T) => {
  return api.post<{message: string}>(endPoints.userChangePassword, params)
}


export const logOut = async () => {
  try {
    const response = await fetch('/onboarding/logout/api', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); 
      throw new Error(`Logout failed: ${errorMessage || response.statusText}`);
    }

    return response
  } catch (error) {
    console.error("Logout request error:", error);
    throw error;
  }
};
