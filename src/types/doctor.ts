import { DateTime } from "luxon"
import {UserTypeDef} from "@/types/user";

export type DoctorAccountStatus = "Active" | "Suspended" | "Pending"

export interface DoctorDetailsType {
  id: string
  userId: string
  bio?: string
  avatarUrl?: string
  medicalLicenseNumber?: string
  licenseIssuingAuthority?: string
  licenseStartDate?: DateTime
  licenseEndDate?: DateTime
  yearsOfExperience?: number
  certifications?: string
  education?: string
  spokenLanguages?: string
  patientRating?: number
  preferredPatientTypes?: string
  emergencyCallsAvailable?: boolean
  accountStatus: DoctorAccountStatus
  verified?: boolean
  profileCompletionPercentage?: number
  researchPublications?: string
  awardsAchievements?: string
  memberships?: string
  admin_notes?: string
  rating?: number
  affiliatedHospitals?: string
  clinicName?: string
  consultationFee?: number
  locations?: string
  telemedicineEnabled?: boolean
  workingHours?: string
  visitCount?: number
  createdByAdmin?: boolean
  createdByAdminId?: string
  appointmentSlotDuration?: string
  organizationId?: string | null
  phoneNumber2?: string | null
  bankName?: string | null
  bankCode?: string | null
  bankAccountNumber?: string | null
  bankAccountName?: string | null
  backgroundImageUrl?: string | null

  // Relationships
  specializations?: Array<Record<string, any>> //Array<Specialization>
  services?: Array<Record<string, any>> //Array<Service>
  users?: Partial<UserTypeDef>
  timeAvailabilities?: Array<Record<string, any>> //Array<TimeAvailability>
  appointments?: Array<Record<string, any>> //Array<Appointment>
  drugOrders?: Array<Record<string, any>> //Array<DrugOrder>
  appointmentComments?: Array<Record<string, any>> //Array<AppointmentComment>
  organization?: Record<string, any>
}
