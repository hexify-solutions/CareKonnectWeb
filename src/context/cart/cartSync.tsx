import { useEffect } from "react"
import { debounce } from "lodash"
import api from "@/http/api"
import { useCart } from "."

const CartSync = () => {
  const { recentlyUpdated, recentlyAdded, cartItems } = useCart()

  console.log(recentlyAdded, recentlyUpdated, ">>>>>>>>>>>>>>>>>>>>>>>")

  useEffect(() => {
    if(!recentlyAdded || recentlyUpdated) return;
    const addCart = debounce(async (data, url = "cart/add") => {
      try {
        await api.post(url, data)
      } catch (error) {
        console.log(error, "this is the error from saving to cart")
      }
    }, 1000)

    const updateCart = debounce(async (data) => {
      try {
        await api.put(`cart/items/${recentlyUpdated?.inventoryId}`, data)
      } catch (error) {
        console.log(error, "this is the error from saving to cart")
      }
    }, 1000)

    if (recentlyAdded) {
      addCart(recentlyAdded)
    } else {
      updateCart(recentlyUpdated)
    }

    return () => updateCart.cancel()
  }, [recentlyUpdated, recentlyAdded, cartItems])

  return null
}

export default CartSync
