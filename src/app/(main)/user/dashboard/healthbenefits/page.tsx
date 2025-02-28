import { Breadcrumb } from "@hexify/atoms";
import clsx from "clsx";
import { CreditCardIcon } from "@hexify/atoms";
import styles from "./page.module.css";
import BenefitsList from "@/components/userDashboard/benefitsList";
const HealthBenefits = () => {
  return (
    <div className={clsx("inner-wrapper", styles.wrapper)}>
      <Breadcrumb
        renamePaths={{
          healthbenefits: "Health Benefits",
          dashboard: "Home Dashboard",
        }}
        excludePaths={["user"]}
      />
      <div className={styles.banner}>
        <span>Health Benefits</span>
        <div>
            <span className={styles.creditLabel}>Service Credit</span>
            <div className={styles.creditAmount}>
                <span>&#8358;750,000.00</span>
                <CreditCardIcon />
            </div>
        </div>
      </div>
      <BenefitsList />
    </div>
  );
};
export default HealthBenefits;
