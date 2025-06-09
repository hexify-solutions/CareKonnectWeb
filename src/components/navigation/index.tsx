"use client"

import { Navigation } from "@hexify/components"
import { useAuthContext } from "@/context/auth"
import navigationMap from "@/data/navigationMap.json"
import routes from "@/lib/constants/routes"
import UserProfileDropdown from "../profile/userProfileDropdown"
import { useCartContext } from "@/context/cart"

const NavigationComponent = () => {
  const { isAuth } = useAuthContext()

  const { totalItems } = useCartContext()

  return (
    <Navigation
      UserProfileDropdown={UserProfileDropdown}
      routes={routes}
      isAuthenticated={isAuth}
      links={navigationMap.links}
      totalCartItems={totalItems}
    />
  )
}

export default NavigationComponent
