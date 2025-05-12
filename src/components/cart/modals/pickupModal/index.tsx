"use client"

import { useState } from "react"
import styles from "./pickUp.module.css"
import ModalTemplate from "../modalTemplate"
import { Button, Info, LargeCapsule, ChevronLeft, Star, LocationPin } from "@hexify/atoms"
import Image from "next/image"

enum ActiveView {
  INFO = "info",
  SELECTION_SUMMARY = "selection_summary",
  PRESCRIPTION_SUMMARY_INFO = "prescription_summary_info",
}

const PickupInfoModal = ({ open, cancelHandler }) => {
  const [activeView, setActiveView] = useState(ActiveView.INFO)

  return (
    <ModalTemplate showHeader={activeView !== ActiveView.PRESCRIPTION_SUMMARY_INFO} showFooter={activeView === ActiveView.INFO} open={open} cancelHandler={cancelHandler}>
      {activeView === ActiveView.INFO && (
        <div>
          <aside className={styles.header}>
            <LargeCapsule />
            <h3>Pick Up</h3>
          </aside>
          <div className={styles.content}>
            <div className="">Hey Martha,</div>
            <div>You have chosen the pick-up option!</div>
            <div className={styles.listItems}>
              <div className={styles.listItem}>
                Your order may require visiting multiple locations.{" "}
              </div>
              <div className={styles.listItem}>
                You might need to use a pick-up code at each location.{" "}
              </div>
              <div className={styles.listItem}>
                We’ll provide you with all necessary details as your order is
                prepared.
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.footerText}>
                <span>Best regards</span>
                <span> CareKonnect Team</span>
              </div>
              <Button
                color="primary"
                variant="contained"
                size="large"
                rounded
                className={styles.nextBtn}
                onClick={() => setActiveView(ActiveView.SELECTION_SUMMARY)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeView === ActiveView.SELECTION_SUMMARY && <ConfirmSelection setActiveView={setActiveView} />}
      {activeView === ActiveView.PRESCRIPTION_SUMMARY_INFO && <SubmitSelection />}
    </ModalTemplate>
  )
}

const ConfirmSelection = ( { setActiveView }) => {
  return (
    <div className={styles.summaryWrapper}>
      <h5 className={styles.confirmSelectionHeading}>Confirm Selection</h5>
      <div className={styles.confirmSelectionInfo}>
        <span>

        <Info />
        </span>
        <span>
          Prescription is normally ready for pick up within 3-5 business hours
          you can pick up at any time during the opening hours after receiving
          the code
        </span>
      </div>
      <div>
        <div className={styles.checkoutLabel}>
          <button><ChevronLeft />  </button><span>Selected Pharmacy and Product</span>
        </div>
        <ul className={styles.list}>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className={styles.drugListItem}>
              <aside className={styles.avatar}>
                <Image
                  alt="pharmacy drug"
                  src="https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  fill
                />
              </aside>
              <div className={styles.productInfo}>
                <div className={styles.productName}>
                  {" "}
                  Amoxicillin 500mg capsules
                </div>
                <div className={styles.pharmacy}>MedTrust Pharmacy Ltd.</div>
                <div className={styles.extraInfo}>
                  <span  className={styles.extraInfoItem}>
                    <Star /> 4.5
                  </span>{" "}
                  <span className={styles.extraInfoItem}>
                    <LocationPin /> 1.5km from you
                  </span>
                  <span className={styles.cardPrice}>N5000</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.buttonWrapper}>
          <Button href="/" variant="outlined" size="large" rounded className={styles.btn}>
            Go back
          </Button>
          <Button onClick={() => setActiveView(ActiveView.PRESCRIPTION_SUMMARY_INFO)} color="primary" variant="contained" size="large" rounded className={styles.btn}>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  )
}

const SubmitSelection = () => {
  return <div className={styles.submitSelectionWrapper}>
    <div className={styles.submitSelectionHeading}>
    Prescription Pick up Submitted 
    </div>
    <div className={styles.submitSelectionDescription}>
    Once you check out, you will receive a prescription code in the app within the next 3-5 business hours confirming that our medication is ready for pickup.
    </div>
    <div className={styles.submitSelectionInfo}>
    Please wait for this code before heading to the pharmacy.
    </div>
    <div className={styles.submitSelectionEmp}>Show the code at the pharmacy to get your medications</div>
    <Button size="large" color="primary" variant="contained" rounded fullWidth>Check out</Button>
  </div>
}

export default PickupInfoModal
