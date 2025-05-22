//@ts-nocheck
"use client"

import {
  createContext,
  useContext,
  ReactElement,
  JSXElementConstructor,
  useReducer,
} from "react"

export const CartContext = createContext<{
    addToCart: (id: string, product: any) => void;
    totalItems: number;
} | undefined>(undefined)

// Initial state
const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
}

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, product } = action.payload
      const existing = state.cartItems.find((item) => item.id === id)

      let updatedCart
      if (existing) {
        updatedCart = state.cartItems.map((item) =>
          item.id === id ? { ...product } : item
        )
      } else {
        updatedCart = [...state.cartItems, { ...product }]
      }

      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "REMOVE_ITEM": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity < 1
      return updateTotals({ ...state, cartItems: updatedCart })
    }

    case "CLEAR_CART":
      return { ...initialState }

    default:
      return state
  }
}

// Utility to update totals
const updateTotals = (state) => {
  const { totalItems, totalAmount } = state.cartItems.reduce(
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

// Context provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Functions to expose
  const addToCart = (id, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, product } })
  }

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id })
  }

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook
export const useCart = () => useContext(CartContext)

export function useCartContext() {
  const cartContext = useContext(CartContext)
  if (cartContext === undefined)
    throw new Error("useCartContext used outside CartProvider")

  return cartContext
}

export default CartProvider
