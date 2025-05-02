"use client"

import type React from "react"
import Image from "next/image"
import { Info, Minus, Plus } from "lucide-react"
import styles from "./cart.module.css"
import { Exclamation, Star, LocationPin as MapPin, Trash } from "@hexify/atoms"

interface CartItem {
  id: string
  name: string
  pharmacy: string
  price: number
  currency: string
  rating: number
  distance: string
  quantity: number
  image: string
}

interface ShoppingCartProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onDeleteItem: (id: string) => void
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onUpdateQuantity, onDeleteItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBar}>
        <Exclamation className={styles.infoIcon} />
        <span className={styles.infoText}>The final cost of the product depends on the selected products</span>
      </div>

      <div className={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.productInfoWrapper}>


            <div className={styles.productImage}>
              <Image src={"https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={item.name} width={57} height={79} />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{item.name}</h3>
              <p className={styles.pharmacyName}>{item.pharmacy}</p>
              <div className={styles.productMeta}>
                <div className={styles.rating}>
                  <Star className={styles.starIcon} fill="currentColor" type="two" />
                  <span>{item.rating}</span>
                </div>
                <div className={styles.distance}>
                  <MapPin type="two" className={styles.locationIcon}  />
                  <span>{item.distance}</span>
                </div>
                <button className={styles.deleteButton} onClick={() => onDeleteItem(item.id)}>
                  <Trash className={styles.trashIcon}  />
                  <span>Delete</span>
                </button>
              </div>
            </div>
            </div>
            <div className={styles.priceQuantity}>
              <div className={styles.price}>
                {item.currency} {item.price}
              </div>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityButton}
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button className={styles.quantityButton} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingCart
