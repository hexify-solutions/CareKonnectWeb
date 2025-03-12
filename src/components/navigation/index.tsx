"use client";

import { Navigation } from "@hexify/components";
import { useAuthContext } from "@/context/auth";
import navigationMap from "@/data/navigationMap.json";
import routes from "@/lib/constants/routes";
import UserProfileDropdown from "../profile/userProfileDropdown";

const NavigationComponent = () => {
  const { isAuth } = useAuthContext();

  return (
    <Navigation
      UserProfileDropdown={UserProfileDropdown}
      routes={routes}
      isAuthenticated={isAuth}
      links={navigationMap.links}
    />
  );
};

export default NavigationComponent;
