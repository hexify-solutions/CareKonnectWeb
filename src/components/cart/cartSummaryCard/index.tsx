"use client"

import { Button } from "@hexify/atoms"
import styles from "./cartSummaryCard.module.css"

const CartSummaryCard = ({ onCheckout }: any) => {
  return (
    <div className={styles.cartTotalWrapper}>
      <div className={styles.lead}>Product: 5pcs</div>
      <div className={styles.subLead}>Found in 3 pharmacies, 2 Labs</div>
      <div className={styles.infoWrapper}>
        <div className={styles.total}>Total</div>
        <div className={styles.price}>NGN 67,000</div>
        <Button
          onClick={onCheckout}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          rounded
        >
          Checkout
        </Button>
        <div className={styles.enquiryWrapper}>
          <span>Product Inquiry?</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  )
}

export default CartSummaryCard
