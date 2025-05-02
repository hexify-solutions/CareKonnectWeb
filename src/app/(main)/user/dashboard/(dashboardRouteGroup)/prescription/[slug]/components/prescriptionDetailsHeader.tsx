"use client"
import { ArrowLeft, Button, Download } from "@hexify/atoms"
import styles from "./styles.module.css"
import Link from "next/link"
import routes from "@/lib/constants/routes"

const PrescriptionDetailsHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headingWrapper} >
        
        <Link
          href={routes.userDashboardPrescription}
          className={styles.backBtn}
        >
          <ArrowLeft />
        </Link>
        <span className={styles.heading}> Prescription details</span>
      </div>
      <Button size="large" color="primary" variant="contained" rounded>
        <Download />
        Download Prescription
      </Button>
    </div>
  )
}

export default PrescriptionDetailsHeader
