// @ts-nocheck
"use client"

import SearchFormAndFilter from "@/components/search/searchFormAndFilter"
import styles from "./page.module.css"
import SignupBanner from "../_components/signupBanner"
import clsx from "clsx"
import SearchResultSection from "@/components/search/searchResultsSection"
import useQueryParams from "@/hooks/useQueryParams"
import { withSuspense } from "@/hoc"
import { useSearch } from "@/http/globals/queries"
import { Spinner } from "@hexify/atoms"

const Search = () => {
  const { getAllQueryParams, updateQueryParams, removeQueryParams } =
    useQueryParams()
  const { category, search } = getAllQueryParams()
  const searchCategory = category?.split(",")

  const { data, isLoading } = useSearch({ search })

  const onFilterClickedHandler = (value) => {
    if (searchCategory?.includes(value)) {
      const updatedCategory = searchCategory?.filter((v) => {
        return v !== value
      })
      updateQueryParams({ category: updatedCategory?.join(",") })
    } else {
      const updatedCategory = [...(searchCategory || []), value]
      updateQueryParams({ category: updatedCategory?.join(",") })
    }
  }

  const onSubmitSearchHandler = ({ search }) => {
    updateQueryParams({ search })
  }
  return (
    <>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <SearchFormAndFilter
          onSubmitSearchHandler={onSubmitSearchHandler}
          onSelectFilterHandler={onFilterClickedHandler}
          search={search}
          searchCategory={searchCategory}
        />
        <div>
          <div className={styles.loader}>{isLoading && <Spinner />}</div>
          {Object.keys(data?.data || {})?.map((key) => {
            const list = data?.data?.[key]
            return <SearchResultSection list={list} key={key} label={key} />
          })}
        </div>
      </div>
      <SignupBanner />
    </>
  )
}

export default withSuspense(Search)
