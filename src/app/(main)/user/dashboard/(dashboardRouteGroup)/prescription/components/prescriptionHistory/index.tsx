import styles from "./prescriptionHistory.module.css"
import PrescriptionCard from "@/components/prescription/prescriptionCard"
import PrescriptionHistoryHeader from "./header"

const PrescriptionHistory = () => {
  return (
    <div className={styles.wrapper}>
      <PrescriptionHistoryHeader />
      <ul className={styles.prescriptionList}>
        {Array.from({ length: 10 })?.map(() => {
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

export default PrescriptionHistory
