import PrescriptionCard from "@/components/prescription/prescriptionCard"
import styles from "./recentPrescriptions.module.css"
import Link from "next/link"
import routes from "@/lib/constants/routes"
const RecentPrescriptions = async () => {
  return (
    <div>
      <h3 className={styles.heading}>Recent Prescriptions</h3>
      <ul className={styles.prescriptionList}>
        {Array.from({ length: 2 })?.map((_, index) => {
          return (
            <li className={styles.listItem}>
              <Link href={routes.userDashboardPrescriptionDetails(`${index}`)}>
              <PrescriptionCard />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentPrescriptions
