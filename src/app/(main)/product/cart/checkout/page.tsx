"use client"

import styles from "./style.module.css"
import {
  Breadcrumb,
  ChevronLeft,
  InputField,
  iconLoaderMap,
} from "@hexify/atoms"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import clsx from "clsx"
import Link from "next/link"
import routes from "@/lib/constants/routes"
import CartSummaryCard from "../../../../../components/cart/cartSummaryCard"
import { Form, Formik } from "formik"
import { SelectField } from "@hexify/atoms"
import PickupInfoModal from "@/components/cart/modals/pickupModal"

enum DeliveryMethod {
  HOME = "home",
  PICKUP = "pickup",
}

const Checkout = () => {
  const [activeDeliveryMethod, setActiveDeliveryMethod] = useState(
    DeliveryMethod.HOME
  )

  const router = useRouter()

  const closePickUpInfoModal = () =>
    setActiveDeliveryMethod(DeliveryMethod.HOME)

  return (
    <>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb />
        <div className={styles.header}>
          <div className={styles.heading}>Checkout</div>
          <div className={styles.buttonWrapper}>
            <Link href={routes.cart} className={styles.continueShoppingButton}>
              Back to cart
            </Link>
          </div>
        </div>
        <div className={styles.checkoutLabel}>
          <ChevronLeft /> <span>Checkout Details</span>
        </div>
        <div className={styles.content}>
          <div className={styles.formWrapper}>
            <div className={styles.toggle}>
              <button
                onClick={() => setActiveDeliveryMethod(DeliveryMethod.HOME)}
                className={clsx(styles.toggleButton, {
                  [styles.active]: activeDeliveryMethod === DeliveryMethod.HOME,
                })}
              >
                Home Delivery
              </button>
              <span className={styles.separator}></span>
              <button
                onClick={() => setActiveDeliveryMethod(DeliveryMethod.PICKUP)}
                className={clsx(styles.toggleButton, {
                  [styles.active]:
                    activeDeliveryMethod === DeliveryMethod.PICKUP,
                })}
              >
                Pick up
              </button>
            </div>
            <Formik initialValues={{}} onSubmit={() => {}}>
              {() => {
                return (
                  <Form className={styles.form}>
                    <div className={styles.inputWrapper}>
                      <InputField
                        fullWidth
                        placeholder="Temidayo Thomas"
                        label="Emergency Type"
                        variant="filled"
                        data-hasprefix="true"
                        prefix={iconLoaderMap.profile}
                        data-variant="design_primary"
                        type="text"
                        name="emergencyType"
                      />
                    </div>
                    <div className={styles.inputWrapper}>
                      <InputField
                        fullWidth
                        placeholder="0809 1234 567"
                        label="Phone Number"
                        variant="filled"
                        data-hasprefix="true"
                        prefix={iconLoaderMap.phone}
                        data-variant="design_primary"
                        type="text"
                        name="phone"
                      />
                    </div>
                    <div className={styles.inputWrapper}>
                      <SelectField
                        options={[]}
                        onChange={() => {}}
                        fullWidth
                        placeholder="Address"
                        label="Address"
                        variant="filled"
                        data-hasprefix="true"
                        prefix={iconLoaderMap.locationPin}
                        data-variant="design_primary"
                        type="text"
                        name="address"
                      />
                    </div>
                    <div className={styles.inputWrapper}>
                      <SelectField
                        options={[]}
                        onChange={() => {}}
                        fullWidth
                        placeholder="GIG"
                        label="Select Logistic Company"
                        variant="filled"
                        data-hasprefix="true"
                        prefix={iconLoaderMap.locationPin}
                        data-variant="design_primary"
                        type="text"
                        name="logistic"
                      />
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
          <div className={styles.summaryWrapper}>
            <CartSummaryCard onCheckout={() => router.push(routes.checkoutPayment)} />
          </div>
        </div>
      </div>
      {activeDeliveryMethod === DeliveryMethod.PICKUP && (
        <PickupInfoModal
          cancelHandler={closePickUpInfoModal}
          open={activeDeliveryMethod === DeliveryMethod.PICKUP}
        />
      )}
    </>
  )
}

export default Checkout
