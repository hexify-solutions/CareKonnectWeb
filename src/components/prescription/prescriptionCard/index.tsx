import styles from "./prescriptionCard.module.css";
import routes from "@/lib/constants/routes";
import { EmailIcon, Button } from "@hexify/atoms";

const PrescriptionCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headingDetails}>
          <EmailIcon />
          <span>New prescription - PR764-2535E</span>
        </div>
        <Button href={routes?.userDashboardPrescriptionDetails('0')} data-variant="text" color="primary" className={styles.btn}>
          View details
        </Button>
      </div>
      <div className={styles.infoSection}>
        <aside className={styles.icon}>
          <EmailIcon />
        </aside>
        <div className={styles.info}>
          <h6 className={styles.title}>Dr.Emily, Cardiologist</h6>
          <span>Carefield Hospital</span>
          <span>27th, Dec, 2024 | 04:00PM</span>
          <span className={styles.prescription}>
            <span className={styles.emp}>Lisinopril</span> 10mg, Once Daily/7days
          </span>
        </div>
        <div className={styles.info}>
          <h6 className={styles.title}>Dr.Emily, Cardiologist</h6>
          <span>Carefield Hospital</span>
          <span>27th, Dec, 2024 | 04:00PM</span>
          <span className={styles.prescription}>
            <span className={styles.emp}>Lisinopril</span> 10mg, Once Daily/7days
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCard;
