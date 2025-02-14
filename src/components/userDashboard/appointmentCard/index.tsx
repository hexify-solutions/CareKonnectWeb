import styles from "./appointmentCard.module.css";
import { Badge, Button, CheckMark, Chip, Time } from "@hexify/atoms";
const AppointmentCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div  className={styles.headerSection}>
          <span className={styles.headerSectionSub}>Zoey Hospital</span>
          <span className={styles.headerSectionLead}>Dr Femi johnson</span>
        </div>
        <div className={styles.headerSection}>
          <span className={styles.headerSectionSub}>Payment status</span>
          <span>
            <Chip
            size="small"
            className={styles.headerChip}
              label={
                <div className={styles.chipLabel}>
                  <CheckMark /> Paid
                </div>
              }
            />
          </span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          Virtual Appointment | 11AM WAT | Nov. 3, 2024
        </div>
        <Chip
          label={
            <div className={styles.chipLabel}>
              <Time type="outline" /> Upcoming
            </div>
          }
          size="small"
          className={styles.footerChip}
        ></Chip>
      </div>
    </div>
  );
};

export default AppointmentCard;
