import styles from "./page.module.css"
import { ArrowLeft, ChevronLeft, ChevronRight } from "@hexify/atoms"
import clsx from "clsx"
import PrescriptionMedicationDetails from "@/components/prescription/prescriptionMedicationDetails"
import routes from "@/lib/constants/routes"
import Link from "next/link"
import MedicationCard from "@/components/prescription/pharmacyMedicationCard"

const DrugSearchPage = () => {
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <div className={styles.details}>
          <PrescriptionMedicationDetails isLinkDisabled />
        </div>
        <div>
          <div className={styles.headingWrapper}>
            <Link
              href={routes.userDashboardPrescription}
              className={styles.backBtn}
            >
              <ChevronLeft />
            </Link>
            <span className={styles.heading}> Prescription details</span>
          </div>
          <ul className={styles.gridContainer}>
            {Array.from({ length: 10 })?.map((_, index) => {
              return <li className={styles.gridItem} key={index}>
                <MedicationCard />
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DrugSearchPage
