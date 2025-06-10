"use client"

import {
  ChevronDown,
  FilterIcon,
  InputField,
  Pharmacy,
  StethoscopeIcon,
  MedicinalBowl,
  SearchIcon,
} from "@hexify/atoms"
import { useRouter } from "next/navigation"
import useDropdown from "@/hooks/useDropdown"
import { useState } from "react"
import { Checkbox } from "@hexify/atoms"
import useQueryParams from "@/hooks/useQueryParams"
import styles from "./categorySearch.module.css"
import routes from "@/lib/constants/routes"
import React from "react"
import { withSuspense } from "@/hoc"
import { useMediaQuery } from "usehooks-ts"
import clsx from "clsx"

const CategoryDropdown = ({ onChangeHandler, selectedCategory }) => {
  const { isOpen, toggle, dropdownRef } = useDropdown()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type="button"
        onClick={toggle}
        className={clsx(styles.dropdownToggle)}
      >
        <FilterIcon />
        {isMobile ? null : (
          <>
            <span>Categories</span>
            <span className={styles.icon}>
              <ChevronDown />
            </span>
          </>
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownWrapper}>
          <div className={styles.heading}>Select Category</div>
          <ul>
            <li className={styles.categoryItem}>
              <div className={styles.label}>
                <StethoscopeIcon />
                <span>Doctors</span>
              </div>
              <Checkbox
                checked={selectedCategory?.includes("doctors")}
                value="doctors"
                name="category"
                onChange={onChangeHandler}
              />
            </li>
            <li className={styles.categoryItem}>
              <div className={styles.label}>
                <MedicinalBowl />
                <span>Hospitals</span>
              </div>
              <Checkbox
                checked={selectedCategory?.includes("hospitals")}
                value="hospitals"
                name="category"
                onChange={onChangeHandler}
              />
            </li>
            <li className={styles.categoryItem}>
              <div className={styles.label}>
                <aside>
                  <Pharmacy />
                </aside>
                <span>Pharmacies</span>
              </div>
              <Checkbox
                checked={selectedCategory?.includes("pharmacies")}
                value="pharmacies"
                name="category"
                onChange={onChangeHandler}
              />
            </li>
            <li className={styles.categoryItem}>
              <div className={styles.label}>
                <aside>icon</aside>
                <span>Laboratories</span>
              </div>
              <Checkbox
                checked={selectedCategory?.includes("laboratory")}
                value="laboratories"
                name="category"
                onChange={onChangeHandler}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

const CategorySearch = () => {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const onChangeHandler = (e: any) => {
    const { value, checked } = e?.target
    if (checked) {
      setSelectedCategory((prev) => [...prev, value])
    } else {
      setSelectedCategory((prev) => {
        return prev?.filter((p) => p !== value)
      })
    }
  }

  const { buildQueryString } = useQueryParams()
  const queryString = buildQueryString({
    category: selectedCategory?.join(","),
    search: searchQuery,
  })

  const searchHandler = (e) => {
    e?.preventDefault()
    e?.stopPropagation()
    if (!selectedCategory?.length && !searchQuery) return
    router?.push(routes?.search(queryString))
  }
  const suffix = () => (
    <button className={styles.submitBtn} type="submit">
      <SearchIcon />
    </button>
  )

  return (
    <form method="post" className={styles.form} onSubmit={searchHandler}>
      <InputField
        type="text"
        suffix={suffix}
        fullWidth
        prefix={isMobile ? undefined : CategoryDropdown}
        prefixProps={
          isMobile ? undefined : { onChangeHandler, selectedCategory }
        }
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search medical expert and resources"
        style={{ borderRadius: "24px" }}
        data-variant="design_primary"
      />
    </form>
  )
}

export default withSuspense(CategorySearch)
