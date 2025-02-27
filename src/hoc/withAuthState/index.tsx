"use client";

import { useAuthContext } from "@/context/auth/index";
import { useRouter } from "next/navigation";
import routes from "@/lib/constants/routes";

export const withAuthState = (WrappedComponent, authState = true, redirect) => {

  const Hoc = (props: any) => {
    const { isAuth } = useAuthContext();
    const router = useRouter();

    if (isAuth !== authState) {
      if (redirect) {
        router.push(redirect);
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Hoc;
};
