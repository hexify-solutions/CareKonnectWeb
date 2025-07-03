"use client"

import { Navigation } from "@hexify/components"
import { useAuthContext } from "@/context/auth"
import navigationMap from "@/data/navigationMap.json"
import routes from "@/lib/constants/routes"
import UserProfileDropdown from "../profile/userProfileDropdown"
import { useCartContext } from "@/context/cart"

const NavigationComponent = () => {
  const { isAuth, ...popopo } = useAuthContext()

  const { totalItems } = useCartContext()

  console.log({ isAuth, popopo })
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
