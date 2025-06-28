"use client"
import { CategoryCard } from "@hexify/components"
import categoriesData from "../../../../data/categories.json"
import { ArrowCurvedRight } from "@hexify/atoms"
import Link from "next/link"
import styles from "./categories.module.css"
import routes from "@/lib/constants/routes"
import { isFeatureEnabled } from "@hexify/atoms/src/theme/feature"

const Categories = () => {
  const feature = ({ permissions }) => isFeatureEnabled(permissions)
  return (
    <div>
      <div className="inner-wrapper">
        <div className={styles.heading}>
          <ArrowCurvedRight />{" "}
          <span
            tabIndex={0}
            aria-label="Categories section"
            role="heading"
            aria-level={2}
          >
            Categories
          </span>
        </div>
        <ul className={styles.categoryList}>
          {categoriesData?.filter(feature)?.map(({ path, ...category }) => {
            return (
              <li key={category.label} className={styles.categoryListItem}>
                <Link href={routes?.search(`category=${path}`)}>
                  <CategoryCard {...category} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Categories
