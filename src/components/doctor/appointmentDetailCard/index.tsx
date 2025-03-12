import Calendar from "@hexify/atoms/src/vectors/calendar";
import styles from "./appointmentDetailCard.module.css";
import { StopWatch } from "@hexify/atoms";

const AppointmentDetailCard = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}>Booking Details</span>
      <div className={styles.timing}>
        <span className={styles.timingItem}>
          <span className={styles.timingItemIcon}>
            <Calendar type="two" />{" "}
          </span>{" "}
          <span>Tue, Mar 12, 2025 </span>
        </span>
        <span className={styles.timingItem}>
          <span className={styles.timingItemIcon}>
            {" "}
            <StopWatch />{" "}
          </span>
          <span>Time: Booking Time: 3:00 PM </span>
        </span>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.heading}>Description: </div>
        <div>
          {" "}
          I am having chronic headache for days now, and I’ve tried different
          prescriptions. I am having chronic headache for days now, and I’ve
          tried different prescriptions.
        </div>
      </div>
      <div className={styles.amountWrapper}>
        <span className={styles.heading}>Amount</span>
        <div className={styles.chargeListWrapper}>
          <ul className={styles.chargeList}>
            <li>Card Registration</li>
            <li className={styles.chargeValue}>NGN 26.56</li>
            <li>1 hour with Cardiologist</li>
            <li className={styles.chargeValue}>NGN 26.56</li>
            <li>Paracetamol x 9days</li>
            <li className={styles.chargeValue}>NGN 26.56</li>
          </ul>
        </div>
        <div className={styles.amountTotal}>
          <span className={styles.amountTotalLabel}>Sub Total</span>
          <div>NGN 26,878.56 </div>
        </div>
      </div>
    </div>
  );
};
export default AppointmentDetailCard;
