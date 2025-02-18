"use client"

import SignupForm from "./_components/signupForm";
import routes from "@/lib/constants/routes";
import { withAuthState } from "@/hoc";

const Signup = () => {
  return <SignupForm />;
};


export default withAuthState(Signup, false, routes.userDashboard);
