import { Chip as Button, Telephone, MedicinalBowl, Delivery, Pharmacy, Upload } from "@hexify/atoms";
import styles from "./style.module.css";
import EnterPrescriptionAction from "./enterPrescription";
import Prescription from "./prescription";
const PharmacyActions = () => {

  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={styles.actionItem}>
        <Button
          designVariant="secondary"
          designGenre="flat"
          fullWidth
          label={
            <span className={styles.label}>
              <span>
                <MedicinalBowl />{" "}
              </span>
              <span>View product categories</span>
            </span>
          }
        />
      </div>
      <div className={styles.actionItem}>
        <Button
          designVariant="grey"
          designGenre="flat"
          fullWidth
          label={
            <span className={styles.label}>
              <span>
                <Delivery />{" "}
              </span>
              <span>Order History</span>
            </span>
          }
        />
      </div>
      <Prescription />
      <EnterPrescriptionAction />

    </div>
    </>
  );
};

export default PharmacyActions;
