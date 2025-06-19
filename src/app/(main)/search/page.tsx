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
import EmptyState from "@hexify/providers/src/components/emptyState"
import React from "react"

const Search = () => {
  const { getAllQueryParams, updateQueryParams, removeQueryParams } =
    useQueryParams()
  const { category, search, specialization } = getAllQueryParams()
  const searchCategory = category?.split(",")

  const { data, isLoading, isPending, refetch } = useSearch({
    search,
    specialization,
  })

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
    updateQueryParams({ search, specialization })
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
          <>
            {(isLoading || isPending) && (
              <div className={styles.loader}>
                <Spinner />
              </div>
            )}{" "}
          </>
          {data?.meta?.total === 0 && !isLoading && (
            <EmptyState
              title={
                search || specialization
                  ? `No search match '${search || specialization}' found.`
                  : "Search by name or specialization"
              }
              description={``}
              ctaText="Refresh"
              onCtaClick={refetch}
              className={styles.notFound}
            />
          )}
          {!isLoading && (
            <>
              {Object.keys(data?.data || {})?.map((key) => {
                const list = data?.data?.[key]
                return list?.length > 0 ? (
                  <SearchResultSection list={list} key={key} label={key} />
                ) : null
              })}
            </>
          )}
        </div>
      </div>
      <SignupBanner />
    </>
  )
}

export default withSuspense(Search)
