"use client";

import useDropdown from "@/hooks/useDropdown";
import styles from "./filterButton.module.css";
import { FilterIcon } from "@hexify/atoms";

const FilterButton = ({ label = "Filter" }) => {
  const { isOpen, toggle, dropdownRef } = useDropdown();

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <button onClick={toggle} className={styles.toggle}>
        <FilterIcon />
        <span>{label}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <span className={styles.dropdownHeading}>Select {label}</span>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
