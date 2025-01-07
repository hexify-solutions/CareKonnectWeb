"use client";

import { useSecureStorage } from "@/context/storage";
import { useLayoutEffect, useState } from "react";
import { ProfileType } from "@/types";
import lsKeys from "@/lib/constants/lsKeys";
import api from "@/http/api";

type AuthSetup = {
  profile: ProfileType;
  token?: string;
  isAuth: boolean;
};

const useInitialAuthSetup = (): AuthSetup => {
  const { getItem, removeItem } = useSecureStorage();
  const [initialAuthSetup, setInitialAuthSetup] = useState<AuthSetup>({
    isAuth: false,
    profile: { email: "", id: "" },
  });

  const hasTimeElapsedHandler = (timestamp: string): boolean => {
    const currentTime = new Date();
    const targetTime = new Date(timestamp);

    if (isNaN(targetTime.getTime())) {
      throw new Error("Invalid timestamp format");
    }

    return currentTime > targetTime;
  };

  useLayoutEffect(() => {
    const profile = getItem(lsKeys.profile);
    const token = getItem(lsKeys.token);
    const tokenExpiration = getItem(lsKeys.tokenExpiration);

    if (tokenExpiration) {
      const hasTokenExpired = hasTimeElapsedHandler(tokenExpiration);

      if (!token || hasTokenExpired) {
        removeItem(lsKeys.profile);
        removeItem(lsKeys.token);
        removeItem(lsKeys.tokenExpiration);
        return;
      }

      api.setAuth(token)
      setInitialAuthSetup({
        profile,
        token,
        isAuth: true,
      });
    }
  }, [getItem, removeItem]);

  return initialAuthSetup;
};

export default useInitialAuthSetup;
