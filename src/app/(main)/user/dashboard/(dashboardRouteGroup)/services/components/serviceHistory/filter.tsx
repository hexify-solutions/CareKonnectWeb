"use client"

import { useState, useEffect } from "react"
import styles from "./style.module.css"
import {
  Button,
  InputField,
  SearchIcon,
  CalendarIcon,
  ChevronDown,
  FilterIcon,
  Pharmacy,
  StethoscopeIcon,
  MedicinalBowl,
  Checkbox,
} from "@hexify/atoms"
import useQueryParams from "@/hooks/useQueryParams"
import FilterButton from "@/components/filterButton"
import { Circle, CheckCircle } from 'lucide-react';


const ServiceHistoryFilter = () => {
  const { updateQueryParams, getAllQueryParams, searchParams, removeQueryParams } = useQueryParams()

  const queryParams = getAllQueryParams()


  const handleSearch = (e: any) => {
    e?.preventDefault?.()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    updateQueryParams({ search: values?.search as string })
  }

  const onCheckHandler = (e) => {
    const value = e?.target?.value;
    const checked = e?.target?.checked;
    const name = e?.target?.name;
    const existingValues = searchParams.getAll(name)?.[0]?.split(",") || []

    console.log(existingValues, "this is the category value")
    if(checked) {
      updateQueryParams({
        [name]: [ ...( existingValues || []), value] as string[]
      })
    } else {
      const updatedValue =  existingValues?.filter((v) => v?.toLowerCase() !== value)
      if(!updatedValue?.length) { removeQueryParams([name]);
         return;
        }
      updateQueryParams({
        [name]: updatedValue
      })
    }
  }

  return (
    <div className={styles.filterWrapper}>
      <form onSubmit={handleSearch}>
        <InputField
          type="text"
          name="search"
          //   value={searchInput}
          //   onChange={(e) => {
          //     setSearchInput(e?.target?.value)
          //   }}
          placeholder="Search doctors, hospitals, labs etc"
          suffix={() => (
            <button type="submit" className={styles.submitBtn}>
              <SearchIcon />
            </button>
          )}
          className={styles.searchInput}
          rounded
          data-variant="design_primary"
          hasSuffix
        />
      </form>
      <div className={styles.leftSection}>
        <div>
          <FilterButton dropdownHeading="Select Category" label="Filters" className={styles.filterBtn} dir="left">
            <div className={styles.dropdownWrapper}>
              {/* <div className={styles.heading}>Select Category</div> */}
              <ul>
                <li className={styles.categoryItem}>
                  <div className={styles.label}>
                    <StethoscopeIcon />
                    <span>Doctors</span>
                  </div>
                  <Checkbox
                    // checked={selectedCategory?.includes("doctors")}
                    value="doctor"
                    name="category"
                    onChange={onCheckHandler}
                  />
                </li>
                <li className={styles.categoryItem}>
                  <div className={styles.label}>
                    <MedicinalBowl />
                    <span>Hospitals</span>
                  </div>
                  <Checkbox
                    // checked={selectedCategory?.includes("hospitals")}
                    value="hospital"
                    name="category"
                    onChange={onCheckHandler}
                  />
                </li>
                {/* <li className={styles.categoryItem}>
                  <div className={styles.label}>
                    <aside>
                      <Pharmacy />
                    </aside>
                    <span>Pharmacies</span>
                  </div>
                  <Checkbox
                    // checked={selectedCategory?.includes("pharmacies")}
                    value="pharmacies"
                    name="category"
                    // onChange={onChangeHandler}
                  />
                </li> */}
                <li className={styles.categoryItem}>
                  <div className={styles.label}>
                    <aside>icon</aside>
                    <span>Laboratories</span>
                  </div>
                  <Checkbox
                    // checked={selectedCategory?.includes("laboratory")}
                    value="laboratory"
                    name="category"
                    onChange={onCheckHandler}
                  />
                </li>
              </ul>
            </div>
          </FilterButton>
        </div>
        <Button
          variant="contained"
          color="primary"
          rounded
          type="button"
          size="large"
        >
          <CalendarIcon type="two" />
          <span>Book new service </span>
        </Button>
      </div>
    </div>
  )
}

export default ServiceHistoryFilter
