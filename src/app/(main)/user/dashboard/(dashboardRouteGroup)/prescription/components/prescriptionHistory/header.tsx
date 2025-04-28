"use client"

import styles from "./prescriptionHistory.module.css"
import {  InputField, SearchIcon } from "@hexify/atoms"
import FilterButton from "@/components/filterButton"

const PrescriptionHistoryHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.heading}>Prescription History</div>
      <div className={styles.filterSection}>
        <InputField
          type="text"
          name="search"
          onChange={() => {}}
          placeholder="Search benefits"
          suffix={SearchIcon}
          className={styles.searchInput}
          rounded
          data-variant="design_primary"
          hasSuffix
        />
        <FilterButton label="All prescriptions" />
      </div>
    </div>
  )
}

export default PrescriptionHistoryHeader
