import PrescriptionDetailCard from "@/components/prescription/prescriptionDetailCard"
import PrescriptionDetailsHeader from "./components/prescriptionDetailsHeader"
import PrescriptionMedicationDetails from "@/components/prescription/prescriptionMedicationDetails";
import styles from "./page.module.css";

const prescriptionData = {
  prescriptionId: "PR764-2535E",
  doctor: {
    name: "Emily",
    specialty: "Cardiologist",
    hospital: "Carefield Hospital",
    date: "27th, Dec., 2024",
    time: "04:00 PM",
  },
  symptoms: {
    hospital: "Carefield Hospital",
    date: "27th, Dec., 2024",
    time: "04:00 PM",
  },
  diagnosis: ["Diabetes Mellitus", "Cushing's Syndrome"],
  medications: [
    {
      name: "Amoxicillin",
      dosage: "500 mg",
    },
    {
      name: "Lisinopril",
      dosage: "10 mg",
    },
  ],
  refills: {
    remaining: 2,
    nextRefill: "Sept 20",
  },
}
const PrescriptionDetails = () => {
  return (
    <div>
      <PrescriptionDetailsHeader />
      <div className={styles.detailCard}>
        <PrescriptionDetailCard {...prescriptionData} />
      </div>
      <div className={styles.medicationDetails}>
        <div className={styles.heading}>Medication Details</div>
        <ul>
          {Array.from({ length: 5 })?.map((_, index) => {
            return (
              <li key={index} className={styles.listItem}>
                <PrescriptionMedicationDetails />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PrescriptionDetails
