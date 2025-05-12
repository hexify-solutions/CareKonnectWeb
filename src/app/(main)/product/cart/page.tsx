"use client"

import ShoppingCart from "@/components/cart/cart"
import { useState } from "react"
import { Breadcrumb, Button } from "@hexify/atoms"
import styles from "./cart.module.css"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import CartSummaryCard from "../../../../components/cart/cartSummaryCard"
import routes from "@/lib/constants/routes"

const CartPage = () => {
  const router = useRouter()

  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Red SealVitamin C-100ML+12 Capsules",
      pharmacy: "Salem Specialist Pharmacy",
      price: 7500,
      currency: "NGN",
      rating: 4.5,
      distance: "1.5KM",
      quantity: 1,
      image: "/vitamin-c-bottle.png",
    },
    {
      id: "2",
      name: "Red SealVitamin C-100ML+12 Capsules",
      pharmacy: "Salem Specialist Pharmacy",
      price: 7500,
      currency: "NGN",
      rating: 4.5,
      distance: "1.5KM",
      quantity: 1,
      image: "/vitamin-c-bottle.png",
    },
    {
      id: "3",
      name: "Red SealVitamin C-100ML+12 Capsules",
      pharmacy: "Salem Specialist Pharmacy",
      price: 7500,
      currency: "NGN",
      rating: 4.5,
      distance: "1.5KM",
      quantity: 1,
      image: "/vitamin-c-bottle.png",
    },
    {
      id: "4",
      name: "Red SealVitamin C-100ML+12 Capsules",
      pharmacy: "Salem Specialist Pharmacy",
      price: 7500,
      currency: "NGN",
      rating: 4.5,
      distance: "1.5KM",
      quantity: 1,
      image: "/vitamin-c-bottle.png",
    },
  ])

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return

    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const handleDeleteItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className={clsx("inner-wrapper", styles.wrapper)}>
      <Breadcrumb />
      <div className={styles.header}>
        <div className={styles.heading}>Cart Items 5</div>
        <div className={styles.buttonWrapper}>
          <button className={styles.continueShoppingButton}>
            Continue shopping
          </button>
        </div>
      </div>
      <div className={styles.shoppingCartWrapper}>
        <ShoppingCart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onDeleteItem={handleDeleteItem}
        />
        <CartSummaryCard  onCheckout={() => router.push(routes.checkout)}/>
      </div>
    </div>
  )
}

export default CartPage
