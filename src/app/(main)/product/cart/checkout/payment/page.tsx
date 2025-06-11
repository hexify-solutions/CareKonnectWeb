import styles from "./checkoutPayment.module.css"
import { Breadcrumb } from "@hexify/atoms"
import Link from "next/link"
import routes from "@/lib/constants/routes"
import clsx from "clsx"

const CheckoutPayment = () => {
  return (
    <div className={clsx("inner-wrapper", styles.wrapper)}>
      <Breadcrumb />
      <div className={styles.header}>
        <div className={styles.heading}>Order Summary</div>
        <div className={styles.buttonWrapper}>
          <Link href={routes.cart} className={clsx(styles.headerBtn)}>
            Edit
          </Link>
          <Link
            href={routes.cart}
            className={clsx(styles.headerBtn, styles.continueShoppingBtn)}
          >
            Continue shopping
          </Link>
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.sectionOne}>
          <ul className={styles.list}>
            {Array.from({ length: 5 })?.map(() => {
              return <Card />
            })}
          </ul>
          <div>
            <div>
                <span>Total</span>
                <span>NGN 567,000</span>
            </div>
            <div>
                <span>Delivery fee</span>
                <span>NGN 4500</span>
            </div>
          </div>
          <div>
            <span>
                Grand Total
            </span>
            <span>
            NGN 567,000
            </span>
          </div>
        </div>
        <div>section two</div>
      </div>
    </div>
  )
}

const Card = () => {
  return <li className={styles.cardItem}>
    <div>
        <h4 className={styles.heading}>Red SealVitamin C-100ML+12 Capsules</h4>
        <span className={styles.description}>Salem Specialist Pharmacy</span>
    </div>
    <div className={styles.price}>NGN 7500</div>
  </li>
}

export default CheckoutPayment
