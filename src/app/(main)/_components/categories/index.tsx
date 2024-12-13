import { CategoryCard } from "@hexify/components";
import categoriesData from "../../../../data/categories.json";
import { ArrowCurvedRight, } from "@hexify/atoms";
import Link from "next/link";
import styles from "./categories.module.css";

const Categories = () => {
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
          {categoriesData?.map(({path, ...category}) => {
            return (
              <li key={category.label}  className={styles.categoryListItem}>
                <Link href={path}>
                <CategoryCard {...category} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
