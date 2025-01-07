import { Chip as Button, Telephone, MedicinalBowl, Delivery, Pharmacy, Upload } from "@hexify/atoms";
import styles from "./style.module.css";

const PharmacyActions = () => {
  return (
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
      <div className={styles.actionItem}>
        <Button
          designVariant="tertiary"
          designGenre="flat"
          fullWidth
          label={
            <span className={styles.label}>
              <span>
                <Pharmacy />{" "}
              </span>
              <span>My Prescriptions</span>
            </span>
          }
        />
      </div>
      <div className={styles.actionItem}>
        <Button
          designVariant="primary_dark"
          designGenre="flat"
          fullWidth
          label={
            <span className={styles.label}>
              <span>
                <Upload />{" "}
              </span>
              <span>Upload Prescription</span>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default PharmacyActions;
