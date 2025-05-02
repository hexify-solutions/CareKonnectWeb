import styles from "./prescriptionHistory.module.css"
import PrescriptionCard from "@/components/prescription/prescriptionCard"
import PrescriptionHistoryHeader from "./header"
import Link from "next/link"
import routes from "@/lib/constants/routes"

const PrescriptionHistory = () => {
  return (
    <div className={styles.wrapper}>
      <PrescriptionHistoryHeader />
      <ul className={styles.prescriptionList}>
        {Array.from({ length: 10 })?.map(() => {
          return (
            <li className={styles.listItem}>
              <Link href={routes.userDashboardPrescriptionDetails("123")}>
                <PrescriptionCard />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PrescriptionHistory
