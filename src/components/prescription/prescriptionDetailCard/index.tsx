import type React from "react"
import styles from "./prescriptionDetailCard.module.css"
import {Prescription } from "@hexify/atoms"

interface PrescriptionDetailCardProps {
  prescriptionId: string
  doctor: {
    name: string
    specialty: string
    hospital: string
    date: string
    time: string
  }
  symptoms: {
    hospital: string
    date: string
    time: string
  }
  diagnosis: string[]
  medications: Array<{
    name: string
    dosage: string
  }>
  refills: {
    remaining: number
    nextRefill: string
  }
}

const PrescriptionDetailCard: React.FC<PrescriptionDetailCardProps> = ({
  prescriptionId,
  doctor,
  symptoms,
  diagnosis,
  medications,
  refills,
}) => {
  return (
    <div className={styles.card}>
      <aside className={styles.iconContainer}>
        <Prescription />
      </aside>
      <div>
        <h2 className={styles.prescriptionId}>
          Prescription - {prescriptionId}
        </h2>

        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.doctorInfo}>
              <h3 className={styles.sectionTitle}>
                Dr. {doctor.name}, {doctor.specialty}
              </h3>
              <p className={styles.hospitalInfo}>{doctor.hospital}</p>
              <p className={styles.dateTime}>
                {doctor.date} | {doctor.time}
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Symptoms</h3>
            <p className={styles.hospitalInfo}>{symptoms.hospital}</p>
            <p className={styles.dateTime}>
              {symptoms.date} | {symptoms.time}
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Diagnosis</h3>
            {diagnosis.map((item, index) => (
              <p key={index} className={styles.diagnosisItem}>
                {item}
              </p>
            ))}
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Medication</h3>
            {medications.map((medication, index) => (
              <p key={index} className={styles.medicationItem}>
                {medication.name} {medication.dosage}
              </p>
            ))}
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Refills</h3>
            <p className={styles.refillInfo}>
              Refills Remaining: {refills.remaining}
            </p>
            <p className={styles.refillInfo}>
              Next Refill: {refills.nextRefill}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionDetailCard
