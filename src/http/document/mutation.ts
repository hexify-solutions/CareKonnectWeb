import { useMutation } from "@tanstack/react-query"
import {
    upload
} from "./service"



export function useUploadDocument() {
    return useMutation({ mutationFn: (params: any) => upload(params)})
}