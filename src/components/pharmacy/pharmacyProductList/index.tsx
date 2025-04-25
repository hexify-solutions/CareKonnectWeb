"use client"

import { Chip } from "@hexify/atoms";
import Link from "next/link";
import styles from "./pharmacyProductList.module.css";
import DrugCartCard from "../cards/drugCartCard";
import FilterButton from "@/components/filterButton";
import { useState } from "react";

const PharmacyProductList = ({ pharmacy}: any) => {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div>
      <div className={styles.productList}>
        <div className={styles.heading}>
          <ul className={styles.filterList}>
            {filterPlaceHolder?.map((filter) => {
              return (
                <Chip
                  onClick={() => setActiveCategory(filter)}
                  designVariant={
                    activeCategory?.toLowerCase() === filter?.toLowerCase()
                      ? "neutral"
                      : "primary_dark"
                  }
                  rounded
                  designSize="large"
                  key={filter}
                  label={filter}
                />
              )
            })}
          </ul>
          <div>
            <FilterButton dir="right" label="Filter more" />
          </div>
        </div>
        <ul className={styles.drugList}>
          {Array.from({ length: 5 })?.map((_, index) => {
            return (
              <li key={index} className={styles.drugListItem}>
                <Link href={`drugdetails/p-${pharmacy?.id}/d-${index}`}>
                  <DrugCartCard />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const filterPlaceHolder = ["All", "Medication", "Health"]
export default PharmacyProductList
