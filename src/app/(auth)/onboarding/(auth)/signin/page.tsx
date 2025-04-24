"use client"

import routes from "@/lib/constants/routes";
import SignInForm from "@/components/auth/signInForm";
import { withAuthState } from "@/hoc";

const SignIn = () => {
  return <SignInForm />
}

export default withAuthState(SignIn, false, routes.userDashboard);
