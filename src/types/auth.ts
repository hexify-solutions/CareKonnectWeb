export type RegistrationType = {
  email: string
  firstName: string
  lastName: string
  gender?: string;
  dob: string;
  userType: "patient" | "doctor"
  password: string
}

export type ProfileType = {
  email: string
  id: string
  firstName?: string
  lastName?: string
}

export type LoginResponseType = {
  message: string
  data: ProfileType & {
    token: {
      token: string
      expiresAt: string
    }
  }
}

export type LoginType = {
  email: string
  password: string
}

export type TriggerPasswordResetType = {
  email: string
}

export type PasswordChangeType = {
  email: string;
  otp: string;
  newPassword: string;
}

export type VerifyType = {
  emailOrPhone: string
  type: "email"
  code: string
}

export type RegistrationResponseType = {
  data: Omit<RegistrationType, "password"> & { id: string }
  message: string
}

// A generic type for operations like register, login, and verify
export type OperationType<ParamsType> = {
  (params: ParamsType, cb?: (p: ParamsType) => void): void
  isLoading: boolean
  error: unknown
}

export type OnRegisterType = OperationType<RegistrationType>
export type OnLoginType = OperationType<LoginType>
export type OnPasswordChangeType = OperationType<PasswordChangeType>
export type OnVerifyType = OperationType<VerifyType>
export type onTriggerPasswordChangeType = OperationType<{ email: string }>
export type resendVerifyEmailType = OperationType<{ email: string }>
