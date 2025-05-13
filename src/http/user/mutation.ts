import { useMutation } from "@tanstack/react-query";
import { createEmergencyContact, createUserVital, updateProfile } from './service'


export const useCreateEmergencyContact = () => {
    return useMutation({
        mutationFn: (params) => createEmergencyContact(params),
    });
}

export const useCreateUserVital = () => {
    return useMutation({
        mutationFn: (params) => createUserVital(params),
    });
}

export const useUpdateProfile = () => {
    return useMutation({
        mutationFn: (params: any) => updateProfile(params),
    });
}