"use client"

import useDropdown from "@/hooks/useDropdown"
import styles from "./filterButton.module.css"
import { FilterIcon } from "@hexify/atoms"
import clsx from "clsx"

const FilterButton = ({
  label = "Filter",
  className,
  dir = "right",
  children,
  dropdownHeading,
}: {
  label?: string
  className?: string
  dir?: string
} & any) => {
  const { isOpen, toggle, dropdownRef } = useDropdown()

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <button onClick={toggle} className={clsx(styles.toggle, className)}>
        <FilterIcon />
        <span>{label}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown} data-dir={dir}>
          {!!dropdownHeading && (
            <span className={styles.dropdownHeading}>{dropdownHeading}</span>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export default FilterButton
