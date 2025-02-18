"use client"

import SignInForm from "./_components/signInForm";
import routes from "@/lib/constants/routes";
import { withAuthState } from "@/hoc";

const SignIn = () => {
  return <SignInForm />
}

export default withAuthState(SignIn, false, routes.userDashboard);
