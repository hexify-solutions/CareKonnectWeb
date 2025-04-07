import styles from "./vitalCard.module.css"
import { EmailIcon, Button } from "@hexify/atoms"

const VitalCard = ({ vitals }) => {
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
          <div className={styles.detailValue}>{vitals?.age} Years old</div>
          <div className={styles.detailHeading}>Age</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.weight || 0} {vitals?.weightUnit || "Kg"}
          </div>
          <div className={styles.detailHeading}>Weight</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.heartRate || 0} {vitals?.heartRateUnit || "bpm"}
          </div>
          <div className={styles.detailHeading}>Heart rate</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.oxygenSaturation || 0}
            {vitals?.oxygenSaturationUnit || "%"}
          </div>
          <div className={styles.detailHeading}>Oxygen saturation</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.temperature || 0} {vitals?.temperatureUnit || "F"}
          </div>
          <div className={styles.detailHeading}>Body temperature</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.bloodPressure || 0}{" "}
            {vitals?.bloodPressureUnit || "mm hg"}{" "}
          </div>
          <div className={styles.detailHeading}>Blood pressure</div>
        </div>
        <div>
          <div className={styles.detailValue}>
            {vitals?.height || 0} {vitals?.heightUnit || "in"}{" "}
          </div>
          <div className={styles.detailHeading}>Height</div>
        </div>
      </div>
    </div>
  )
}

export default VitalCard
