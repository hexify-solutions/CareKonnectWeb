import { Chip } from "@hexify/atoms";
import styles from "./pharmacyProductList.module.css";
import DrugCartCard from "../cards/drugCartCard";
const PharmacyProductList = () => {
  return (
    <div>
      <div className={styles.productList}>
        <div className={styles.heading}>
          <ul className={styles.filterList}>
            {filterPlaceHolder?.map((filter) => {
              return <Chip designSize="large" key={filter} label={filter} />;
            })}
          </ul>
          <div>filter button</div>
        </div>
        <ul className={styles.drugList}>
          {Array.from({ length: 10 })?.map((_, index) => {
            return <li key={index} className={styles.drugListItem}>
                <DrugCartCard />
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const filterPlaceHolder = ["All", "Medication", "Health"];
export default PharmacyProductList;
