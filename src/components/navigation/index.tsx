"use client"

import { Navigation } from "@hexify/components";
import { useAuthContext } from "@/context/auth";
import navigationMap from "@/data/navigationMap.json";

const NavigationComponent = () => {
    const { isAuth } = useAuthContext();

  return <Navigation isAuthenticated={isAuth} links={navigationMap.links} />;
};

export default NavigationComponent;
