import { useMutation } from "@tanstack/react-query";
import { createEmergencyContact } from './service'


export const useCreateEmergencyContact = () => {
    return useMutation({
        mutationFn: (params) => createEmergencyContact(params),
    });
}