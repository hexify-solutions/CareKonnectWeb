"use client"

import PaymentReceiptModal from "@/components/payment/paymentReceiptModal"
import React, { useState } from "react"
import styles from "@/components/appointment/appointmentGeneralInfoCard/appointmentGeneralInfoCard.module.css"
import { Button } from "@hexify/atoms"
import { toast } from "react-toastify"
import copyToClipboard from "@hexify/shared/src/copyToClipboard"

export const DownloadReceipt = (props) => {
  const [showPaymentReceiptModal, setShowPaymentReceiptModal] = useState(false)
  const receipt = {
    appointment: props?.appointment,
    transaction: props?.appointment?.transactionHistory?.transaction,
  }
  if (!receipt.transaction) return null
  return (
    <>
      <div className={styles.heading}>Payment Receipt</div>
      <div className={styles.receipt}>
        <span>
          Download Receipt for {receipt?.appointment?.consultationType || ""}{" "}
          Consultation
        </span>
        <Button
          onClick={() => setShowPaymentReceiptModal(true)}
          variant="contained"
          rounded
        >
          Download
        </Button>
      </div>

      <PaymentReceiptModal
        open={showPaymentReceiptModal}
        receipt={receipt}
        cancelHandler={() => setShowPaymentReceiptModal(false)}
      />
    </>
  )
}

export const CopyConsultation = ({ meetingLink }: { meetingLink: string }) => {
  const copyConsultation = async () => {
    await copyToClipboard(meetingLink)
    toast.success("Consultation link copied")
  }
  return (
    <Button
      onClick={copyConsultation}
      size="large"
      data-variant="text"
      fullWidth
    >
      Copy Consultation Link
    </Button>
  )
}
