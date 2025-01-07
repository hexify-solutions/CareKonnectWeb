export type RegistrationType = {
  email: string;
  fullName: string;
  userType: "patient";
  password: string;
};

export type ProfileType = {
  email: string;
  id: string;
};

export type LoginResponseType = {
  message: string;
  data: ProfileType & {
    token: {
      token: string;
      expiresAt: string;
    };
  };
};

export type LoginType = {
  email: string;
  password: string;
};

export type TriggerPasswordResetType = {
  email: string;
}

export type VerifyType = {
  emailOrPhone: string;
  type: "email";
  code: string;
};

export type RegistrationResponseType = {
  data: Omit<RegistrationType, "password"> & { id: string };
  message: string;
};

// A generic type for operations like register, login, and verify
export type OperationType<ParamsType> = {
  (params: ParamsType): void;
  isLoading: boolean;
  error: unknown; 
};

export type OnRegisterType = OperationType<RegistrationType>;
export type OnLoginType = OperationType<LoginType>;
export type OnVerifyType = OperationType<VerifyType>;
export type onTriggerPasswordChangeType = OperationType<{email: string}>;
