import { useEffect } from "react"
import { fetchData } from "@/http"
import { useCart } from "."

const CartLoader = () => {
  const { setCart } = useCart()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/get-cart")
        const data = await res.json()
        setCart(data.cartItems || {})
      } catch (err) {
        console.error("Failed to load cart:", err)
      }
    }

    fetchCart()
  }, [setCart])

  return null
}

export default CartLoader