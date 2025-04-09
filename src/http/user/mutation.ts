import { useMutation } from "@tanstack/react-query";
import { createEmergencyContact, createUserVital} from './service'


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