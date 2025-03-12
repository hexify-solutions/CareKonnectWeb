import styles from "./vitalCard.module.css";
import { EmailIcon, Button } from "@hexify/atoms";

const VitalCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headingDetails}>
          <EmailIcon />
          <span>Vitals</span>
        </div>
        <Button data-variant="text" color="primary" className={styles.btn}>
          Update
        </Button>
      </div>
      <div className={styles.infoGrid}>
        <div>
          <div className={styles.detailValue}>45 Years old</div>
          <div className={styles.detailHeading}>Age</div>
        </div>
        <div>
          <div className={styles.detailValue}>55 Kg</div>
          <div className={styles.detailHeading}>Weight</div>
        </div>
        <div>
          <div className={styles.detailValue}>70 bpm</div>
          <div className={styles.detailHeading}>Heart rate</div>
        </div>
        <div>
          <div className={styles.detailValue}>71%</div>
          <div className={styles.detailHeading}>Oxygen saturation</div>
        </div>
        <div>
          <div className={styles.detailValue}>98.1 F</div>
          <div className={styles.detailHeading}>Body temperature</div>
        </div>
        <div>
          <div className={styles.detailValue}>120/80 mm hg </div>
          <div className={styles.detailHeading}>Blood pressure</div>
        </div>
      </div>
    </div>
  );
};

export default VitalCard;
