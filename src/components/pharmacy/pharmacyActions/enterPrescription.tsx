"use client"
import styles from "./style.module.css"
import { useState } from "react"
import { Chip as Button, Upload } from "@hexify/atoms"
import UploadPrescriptionModal from "@/components/prescription/uploadPrescriptionModal"

const EnterPrescriptionAction = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className={styles.actionItem}>
        <Button
        onClick={() => setShowModal(true)}
          designVariant="primary_dark"
          designGenre="flat"
          fullWidth
          label={
            <span className={styles.label}>
              <span>
                <Upload />{" "}
              </span>
              <span>Upload Prescription</span>
            </span>
          }
        />
      </div>
      <UploadPrescriptionModal
        open={showModal}
        cancelHandler={() => setShowModal(false)}
      />
    </>
  )
}

export default EnterPrescriptionAction

