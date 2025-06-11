// @ts-nocheck
"use client"

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react"
import CartSync from "./cartSync"

export const CartContext = createContext<{
  cartItems: { [key: string]: any }
  totalItems: number
  totalAmount: number
  addToCart: (id: string, product: any) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
  setCart: (cartItems: { [key: string]: any }) => void
} | undefined>(undefined)

// Initial state
const initialState = {
  cartItems: {},
  totalItems: 0,
  totalAmount: 0,
  recentlyUpdated: null,
  recentlyAdded: null
}

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, product } = action.payload
      const existing = state.cartItems[id]

      let updatedCart
      if (existing) {
        updatedCart = {
          ...(state?.cartItems || {}),
          [id]: { ...(state.cartItems?.[id] || {}), ...product, },
        }
      } else {
        updatedCart = { ...(state.cartItems || {}), [id]: {...product, quantity: product?.quantity || 1} }
      }

      return updateTotals({ ...state, cartItems: updatedCart, ...(!!existing ? {
        recentlyUpdated: product,
        recentlyAdded: null,
      } : { 
        recentlyUpdated: null,
        recentlyAdded: product,
      }) })
    }

    case "REMOVE_ITEM": {
      const { [action.payload]: removed, ...updatedCart } = state.cartItems
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "INCREASE_QUANTITY": {
      const item = state.cartItems[action.payload]
      if (!item) return state

      const updatedCart = {
        ...state.cartItems,
        [action.payload]: {
          ...item,
          quantity: item.quantity + 1,
        },
      }
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "DECREASE_QUANTITY": {
      const item = state.cartItems[action.payload]
      if (!item) return state

      if (item.quantity <= 1) {
        const { [action.payload]: removed, ...updatedCart } = state.cartItems
        return updateTotals({ ...state, cartItems: updatedCart })
      }

      const updatedCart = {
        ...state.cartItems,
        [action.payload]: {
          ...item,
          quantity: item.quantity - 1,
        },
      }
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "CLEAR_CART":
      return { ...initialState }

    case "SET_CART": {
      const cartItems = action.payload || {}
      return updateTotals({
        ...state,
        cartItems,
      })
    }

    default:
      return state
  }
}

// Utility to update totals
const updateTotals = (state) => {
  const { totalItems, totalAmount } = Object.values(state.cartItems).reduce(
    (acc, item) => {
      acc.totalItems += item.quantity
      acc.totalAmount += item.quantity * item.price
      return acc
    },
    { totalItems: 0, totalAmount: 0 }
  )

  return {
    ...state,
    totalItems,
    totalAmount,
  }
}

// Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id: string, product: any) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, product } })
  }

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const increaseQuantity = (id: string) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id })
  }

  const decreaseQuantity = (id: string) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const setCart = (cartItems: { [key: string]: any }) => {
    dispatch({ type: "SET_CART", payload: cartItems })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        recentlyAdded: state.recentlyAdded,
        recentlyUpdated: state.recentlyUpdated,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        setCart,
      }}
    >
      <CartSync />
      {children}
    </CartContext.Provider>
  )
}

// Hooks
export const useCart = () => useContext(CartContext)

export function useCartContext() {
  const context = useContext(CartContext)
  if (context === undefined)
    throw new Error("useCartContext must be used within a CartProvider")
  return context
}

export default CartProvider