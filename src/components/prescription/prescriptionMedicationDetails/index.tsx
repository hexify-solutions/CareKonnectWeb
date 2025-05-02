import { LargeCapsule, Info } from "@hexify/atoms"
import styles from "./prescriptionMedicationDetails.module.css"
import Link from "next/link"
import routes from "@/lib/constants/routes"

const PrescriptionMedicationDetails = ({ isLinkDisabled = false }: any) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.sectionOneHeader}>
          <aside className={styles.icon}>
            <LargeCapsule />
          </aside>
          <div>
            <div className={styles.heading}>Amoxicillin 500 mg capsules</div>
            <div>For oral administration, Gedeon Richter, Hungary</div>

            <button className={styles.drugInstruction}>
              <Info />
              <span>Special Instructions</span>
            </button>
          </div>
        </div>
        <ul className={styles.drugAdministrationDetails}>
          <li className={styles.administrationListItem}>
            Dosage Instructions (Sig): Take 1 capsule by mouth every 8 hours for
            7 days.
          </li>
          <li className={styles.administrationListItem}>
            Quantity to Dispense: 21 capsules
          </li>
          <li className={styles.administrationListItem}>
            Route of Administration: Oral
          </li>
          <li className={styles.administrationListItem}>Refills: 2</li>
        </ul>
      </div>
      <div>
        <div className={styles.sectionTwoHeader}>
          <div className={styles.price}>NGN 2,599.00 - NGN 4500.00</div>
          {!isLinkDisabled && (
            <Link
              href={routes?.findAPharmacy("drugid")}
              className={styles.findAPharmacyLink}
            >
              Find a pharmacy
            </Link>
          )}
          {isLinkDisabled && (
            <span
              data-disabled={isLinkDisabled}
              className={styles.findAPharmacyLink}
            >
              Find a pharmacy
            </span>
          )}
        </div>
        <div className={styles.sectionTwoDetails}>
          <div> For Pharmacy Use Only: </div>
          <div> Rx#: 987654321</div>
          <div>Date Filled: _________ </div>
          <div>Pharmacist’s Initials: ____</div>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionMedicationDetails
