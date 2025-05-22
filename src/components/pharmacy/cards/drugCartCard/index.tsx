"use client"

import Image from "next/image"
import styles from "./drugCartCard.module.css"
import { Button, Info, CartIconTwo, Star } from "@hexify/atoms"
import { useCartContext } from "@/context/cart"

const DrugCartCard = ({ drug }: any) => {



  const inStock = drug?.status?.toLowerCase() === "in stock"

  const displayedData = {
    thumbnail: drug?.thumbnail,
    name: drug?.name,
    description: drug?.description,
    price: drug?.doses?.[0]?.price?.toLocaleString(),
  }

  
  return (
    <div className={styles.card}>
      <div className={styles.rightSection}>
        <aside className={styles.image}>
          <Image alt="drug" fill src={displayedData?.thumbnail} />
        </aside>
        <div className={styles.drugDetails}>
          <h6 className={styles.drugName}>{displayedData?.name}</h6>
          <span className={styles.drugDescription}>{displayedData?.description}</span>
          <button className={styles.drugInstruction}>
            <Info />
            <span>Instructions</span>
          </button>
        </div>
      </div>
      <div className={styles.actions}>
{     displayedData?.price &&   <span className={styles.price}>NGN {displayedData?.price}</span>
}        
<div className={styles.btnActions}>
          <Button
            className={styles.saveBtn}
            size="medium"
            variant="outlined"
            color="secondary"
            rounded
          >
            <Star fill="" stroke="currentColor" />
            <span>Save for later </span>
          </Button>
          {
            <Button
              disabled={!inStock}
              size="medium"
              variant="contained"
              rounded
            >
              <CartIconTwo />{" "}
              <span>{inStock ? "Add to cart" : "Not in Stock"}</span>
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default DrugCartCard
