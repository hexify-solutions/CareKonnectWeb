"use client"
import { CancelIcon, Logo, Modal, Button } from "@hexify/atoms"
import styles from "./paymentReceiptModal.module.css"
import {
  ReceiptsIcon,
  FacebookIcon,
  Instagram,
  Twitter,
  Linkedin,
} from "@hexify/atoms"
import formatAppointmentDate from "@/lib/utils/formatAppointmentDate"
import getBranding from "@hexify/engine/brand/getBranding"
import { useRef, useState } from "react"

import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import { toast } from "react-toastify"

const PaymentReceiptModal = ({ open, cancelHandler, receipt }) => {
  const brand = getBranding()?.content
  const date = formatAppointmentDate(receipt?.transaction?.verifiedAt || "")
  const contentRef = useRef<HTMLDivElement>(null)
  // const [closeModal, setCloseModal] = useState<boolean>(open)
  const [showDownload, setShowDownload] = useState<boolean>(true)
  const handleDownloadPdf = async () => {
    if (contentRef.current) {
      toast.info("Generating receipt, please wait.")
      setShowDownload(false)
      const canvas = await html2canvas(contentRef.current)
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      })

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
      pdf.save(
        `Payment for ${receipt?.appointment?.consultationType || "Consultation"} ${receipt?.appointment?.appointmentRef || ""}.pdf`
      )

      toast.success("Receipt downloaded successfully.")
      setShowDownload(true)
    } else {
      toast.error("Unable to download receipt.")
    }
  }
  const handleClose = () => {
    // setCloseModal(false)
    if (cancelHandler) {
      cancelHandler()
      return
    }
  }
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.container} ref={contentRef}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <aside className={styles.logoWrapper}>
              <Logo variant="dark" />
            </aside>
            <button className={styles.cancelBtn} onClick={cancelHandler}>
              <CancelIcon />
            </button>
          </header>
          <div className={styles.detailsWrapper}>
            <aside>
              <ReceiptsIcon />
            </aside>
            <div className={styles.heading}>Payment Receipt!</div>
            <div className={styles.info}>
              <span>
                Hey{" "}
                {receipt?.appointment?.user?.firstName ||
                  receipt?.appointment?.user?.lastName}
                ,
              </span>
              <span>
                We have successfully processed your payment for a booking
              </span>
            </div>
            <div className={styles.paymentSummary}>
              <span className={styles.paymentLabel}>Total Payment</span>
              <span>NGN {receipt?.appointment?.fee?.toLocaleString()}</span>
            </div>
            <div className={styles.summaryWrapper}>
              <div className={styles.summarySection}>
                <div className={styles.summaryInfo}>
                  <span>Payment Method</span>
                  <span className={styles.summaryValue}>
                    {receipt?.transaction?.provider}
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Received by</span>
                  <span className={styles.summaryValue}>
                    {receipt?.transaction?.receiver ||
                      brand?.companyName ||
                      "Medical Team"}
                  </span>
                </div>
                {receipt?.transaction?.reference && (
                  <div className={styles.summaryInfo}>
                    <span>Ref Number</span>
                    <span className={styles.summaryValue}>
                      {receipt?.transaction?.reference}
                    </span>
                  </div>
                )}
                {/* <div className={styles.summaryInfo}>
                  <span>Account Name</span>
                  <span className={styles.summaryValue}>
                    Martha Blackwood G.
                  </span>
                </div> */}
                {/* <div className={styles.summaryInfo}>
                  <span>Card Number</span>
                  <span className={styles.summaryValue}>
                    Ending with ....1234
                  </span>
                </div> */}
                {receipt?.appointment?.consultationType && (
                  <div className={styles.summaryInfo}>
                    <span>Consultation Type</span>
                    <span className={styles.summaryValue}>
                      {receipt?.appointment?.consultationType}
                    </span>
                  </div>
                )}
              </div>
              <div className={styles.summarySection}>
                <div className={styles.summaryInfo}>
                  <span>Payment Time</span>
                  <span className={styles.summaryValue}>
                    {date?.fullLongDate} {date.formattedTime}
                  </span>
                </div>
                {receipt?.transaction?.narration && (
                  <div className={styles.summaryInfo}>
                    <span>Description</span>
                    <span className={styles.summaryValue}>
                      {receipt?.transaction?.narration}
                    </span>
                  </div>
                )}
                {/* <div className={styles.summaryInfo}>
                  <span>Billing Address</span>
                  <span className={styles.summaryValue}>
                    13, Jacob Street, Fadeyi, Lagos
                  </span>
                </div> */}
                <div className={styles.summaryInfo}>
                  <span>Consultation with</span>
                  <span className={styles.summaryValue}>
                    {receipt?.appointment?.doctor?.users?.fullName}
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Amount</span>
                  <span className={styles.summaryValue}>
                    NGN {receipt?.appointment?.fee?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.downloadWrapper}>
              <div className={styles.downloadInfo}>
                <span>Best regards,</span>
                <span>{brand?.companyName || "Business"} Team</span>
              </div>
              {showDownload && (
                <Button
                  onClick={handleDownloadPdf}
                  variant="contained"
                  rounded
                  size="large"
                >
                  <span>Download</span>
                </Button>
              )}
            </div>
            <footer className={styles.footer}>
              <div>
                Need help?{" "}
                <span className={styles.emp}>Contact our support team</span>or
                no longer interested in the booking? Talk to the{" "}
                <span className={styles.emp}>Help Center.</span> Want to give us
                feedback? Let us know what you think on our{" "}
                <span className={styles.emp}> feedback page</span>.
              </div>
              <ul className={styles.iconWrapper}>
                <li>
                  <a href="https://www.facebook.com">
                    <FacebookIcon variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com">
                    <Linkedin variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com">
                    <Twitter variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <Instagram variant="boarded" />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PaymentReceiptModal
