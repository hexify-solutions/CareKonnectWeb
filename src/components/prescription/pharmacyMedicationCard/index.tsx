"use client"

import type React from "react"
import Image from "next/image"
import styles from "./medicationCard.module.css"
import { Star, LocationPin, Button} from "@hexify/atoms"
import Link from "next/link"
import routes from "@/lib/constants/routes"

interface MedicationProductCardProps {
  product?: {
    name: string
    pharmacy: string
    rating: number
    distance: string
    price: string
    currency: string
    image: string
  }
}

const productData = {
    name: "Amoxicillin 500 mg capsules",
    pharmacy: "MedTrust Pharmacy Ltd.",
    rating: 4.5,
    distance: "1.5 km from you",
    price: "5,000",
    currency: "₦",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }

const MedicationProductCard: React.FC<MedicationProductCardProps> = ({ product = productData }) => {
  return (
    <div className={styles.card}>
    <div className={styles.cardDetails}>
      <aside className={styles.imageContainer}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={80}
          height={80}
          className={styles.image}
        />
      </aside>

      <div className={styles.content}>
        <h2 className={styles.title}>{product.name}</h2>
        <div className={styles.pharmacy}>{product.pharmacy}</div>

        <div className={styles.infoRow}>
          <div className={styles.rating}>
            <Star className={styles.starIcon} />
            <span>{product.rating}</span>
          </div>

          <div className={styles.location}>
            <LocationPin className={styles.locationIcon}  />
            <span>{product.distance}</span>
          </div>

          <div className={styles.price}>
            {product.currency}
            {product.price}
          </div>
        </div>

   
      </div>
    </div>
      <div className={styles.actions}>
          <Link  href={routes.pharmacy("store")}   className={styles.viewButton}>
            View store
          </Link>
          <Button color="primary" variant="contained" rounded className={styles.cartButton} >
            Add to cart
          </Button>
        </div>


    </div>
  )
}

export default MedicationProductCard
