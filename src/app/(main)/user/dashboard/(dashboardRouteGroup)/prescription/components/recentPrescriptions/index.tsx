import PrescriptionCard from "@/components/prescription/prescriptionCard"
import styles from "./recentPrescriptions.module.css"

const RecentPrescriptions = async () => {
  return (
    <div>
      <h3 className={styles.heading}>Recent Prescriptions</h3>
      <ul className={styles.prescriptionList}>
        {Array.from({ length: 2 })?.map(() => {
          return (
            <li className={styles.listItem}>
              <PrescriptionCard />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentPrescriptions
