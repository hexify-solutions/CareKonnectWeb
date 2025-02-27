"use client"

import componentData from "@/data/verifyEmail.json";
import { useAuthContext } from "@/context/auth";
import VerifyEmailForm from "./_components/verifyEmailForm";
const VerifyEmail = () => {
  const { onVerify, profile, resendVerifyEmailHandler } = useAuthContext();

  return (
    <VerifyEmailForm
      componentData={componentData}
      onVerify={onVerify}
      profile={profile}
      resendVerifyEmailHandler={resendVerifyEmailHandler}
    />
  );
};

export default VerifyEmail;
