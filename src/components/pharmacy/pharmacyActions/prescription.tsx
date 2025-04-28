"use client"
import { Chip as Button, Pharmacy } from "@hexify/atoms"
import styles from "./style.module.css"
import routes from "@/lib/constants/routes"
import { useRouter } from "next/navigation"

const Prescription = () => {
  const router = useRouter()

  return (
    <div className={styles.actionItem}>
      <Button
        designVariant="tertiary"
        designGenre="flat"
        onClick={() => router.push(routes.userDashboardPrescription)}
        fullWidth
        label={
          <span className={styles.label}>
            <span>
              <Pharmacy />{" "}
            </span>
            <span>My Prescriptions</span>
          </span>
        }
      />
    </div>
  )
}

export default Prescription
