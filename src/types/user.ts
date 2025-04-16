import { DoctorDetailsType } from "@/types/doctor"
import {FileType} from "@/types/file";
import {OrganizationType} from "@/types/organization";

export type UserType =
  | "pharmacy"
  | "patient"
  | "admin"
  | "doctor"
  | "laboratory"
  | "hospital"

export type Gender =
  | "male"
  | "female"
  | "other"
  | "unknown"
  | "prefer-not-to-say"

export type UserStatus = "active" | "inactive" | "blocked" | "waiting-approval"

export interface UserTypeDef {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  dob: string
  gender: Gender
  userType: UserType
  status: UserStatus

  phoneNumber?: string
  emailVerified?: boolean
  phoneVerified?: boolean
  userRef?: string
  acceptedTerms?: boolean
  address?: string
  meta?: string
  location?: {
    long: number
    lat: number
    [key: string]: any
  }

  // Virtual
  fullName?: string
}

export interface UserProfileType extends UserTypeDef {
  doctorDetails: DoctorDetailsType
  documents: FileType[]
  organization: OrganizationType
}
