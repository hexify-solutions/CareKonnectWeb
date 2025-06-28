"use client"

import {
  ChevronDown,
  FilterIcon,
  InputField,
  Pharmacy,
  StethoscopeIcon,
  MedicinalBowl,
  SearchIcon,
  Lab,
} from "@hexify/atoms"
import { useRouter } from "next/navigation"
import useDropdown from "@/hooks/useDropdown"
import { useEffect, useState } from "react"
import { Checkbox } from "@hexify/atoms"
import useQueryParams from "@/hooks/useQueryParams"
import styles from "./categorySearch.module.css"
import routes from "@/lib/constants/routes"
import React from "react"
import { withSuspense } from "@/hoc"
import { useMediaQuery } from "usehooks-ts"
import clsx from "clsx"
import SpecializationCarousel from "@/app/(main)/_components/specializationCarousel"
import { isFeatureEnabled } from "@hexify/atoms/src/theme/feature"

/**
 * Dropdown for selecting provider categories.
 * The list is generated from an array so it’s easy to add/remove categories.
 */
export const CategoryDropdown = ({
  onChangeHandler,
  selectedCategory = [],
}) => {
  const { isOpen, toggle, dropdownRef } = useDropdown()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const feature = ({ permissions }) => isFeatureEnabled(permissions)

  // 📝 centralised list – add/remove categories here only
  const categories = [
    {
      label: "Doctors",
      value: "doctors",
      icon: <StethoscopeIcon />,
      permissions: ["doctor"],
    },
    {
      label: "Hospitals",
      value: "hospitals",
      icon: <MedicinalBowl />,
      permissions: ["hospital"],
    },
    {
      label: "Pharmacies",
      value: "pharmacies",
      icon: <Pharmacy />,
      permissions: ["pharmacy"],
    },
    {
      label: "Laboratories",
      value: "laboratories",
      icon: <Lab />,
      permissions: ["lab"],
    },
  ].filter(feature)

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
            {categories.map(({ label, value, icon }) => (
              <li key={value} className={styles.categoryItem}>
                <div className={styles.label}>
                  {icon}
                  <span>{label}</span>
                </div>

                <Checkbox
                  checked={selectedCategory.includes(value)}
                  value={value}
                  name="category"
                  onChange={onChangeHandler}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const CategorySearch = (props: { className?: string }) => {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [specialization, setSpecialization] = useState("")
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
    specialization,
  })
  useEffect(() => {
    router.prefetch(routes?.search(queryString))
  }, [queryString])
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
    <>
      <div className={props.className}>
        <form method="post" className={styles.form} onSubmit={searchHandler}>
          <InputField
            type="text"
            suffix={suffix}
            fullWidth
            prefix={CategoryDropdown}
            prefixProps={{ onChangeHandler, selectedCategory }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for medical expert and resources"
            style={{ borderRadius: "24px" }}
            data-variant="design_primary"
          />
        </form>
      </div>
      <SpecializationCarousel
        onSelect={(txt) => {
          setSpecialization(txt)
          router?.push(routes?.search(`specialization=${txt}`))
        }}
      />
    </>
  )
}

export default withSuspense(CategorySearch)
