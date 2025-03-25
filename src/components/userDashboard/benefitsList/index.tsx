"use client"

import { InputField, Tabs, Chip, SearchIcon  } from "@hexify/atoms"

import { useMemo, useState } from "react"
import styles from "./benefitList.module.css"

const BenefitsList = () => {
  const [activeFilter, setActiveFilter] = useState(0)

  const onChangeTabFilter = (newValue: number) => {
    setActiveFilter(newValue)
  }

  const tabs = useMemo(
    () => [
      {
        label: "All benefits",
      },
      {
        label: "Covered",
      },
      {
        label: "Not covered",
      },
    ],
    []
  )

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.tabWrapper}>
          <Tabs
            onChange={onChangeTabFilter}
            designVariant="secondary"
            tabs={tabs}
          />
        </div>
        <div>
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
        </div>
      </header>
      <div>
        <List />
      </div>
    </div>
  )
}

const List = () => {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 10 })?.map(() => {
        return (
          <li className={styles.listItem}>
            <span>Eye Care (Exams, Prescriptions, Basic Treatments)</span>
            <Chip rounded className={styles.chip} label="Approved"></Chip>
          </li>
        )
      })}
    </ul>
  )
}
export default BenefitsList
