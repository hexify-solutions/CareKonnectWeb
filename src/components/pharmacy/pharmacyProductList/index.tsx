// @ts-nocheck

"use client"

import { Chip, Spinner } from "@hexify/atoms";
import Link from "next/link";
import styles from "./pharmacyProductList.module.css";
import DrugCartCard from "../cards/drugCartCard";
import FilterButton from "@/components/filterButton";
import { useGetPharmacyDrugs } from "@/http/pharmacy/query";
import { useState } from "react";

const PharmacyProductList = ({ pharmacy }: any) => {
  const [activeCategory, setActiveCategory] = useState("All")

  const { data, isLoading } = useGetPharmacyDrugs({
    id: pharmacy?.id,
  })

  console.log(data, isLoading, "this isthe loading state", pharmacy)

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
        {isLoading && <Spinner />}
        {!isLoading && !!data?.data?.data?.length && (
          <ul className={styles.drugList}>
            {data?.data?.data?.map((drug, index) => {
              return (
                <li key={index} className={styles.drugListItem}>
                  <Link href={`drugdetails/p-${pharmacy?.id}/d-${drug?.id}`}>
                    <DrugCartCard drug={drug} />
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

const filterPlaceHolder = ["All", "Medication", "Health"]
export default PharmacyProductList
