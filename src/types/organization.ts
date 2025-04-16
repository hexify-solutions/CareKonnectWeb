export const organizationType = [
  'active',
  'blocked',
  'suspended',
  'approved',
  'more_info',
  'pending',
  'archived',
] as const

export interface OrganizationType {
  name: string
  status?: (typeof organizationType)[number]
  patientNumber?: number
  images: string[]
  thumbnailUrl: string
  [key:string]: any
}