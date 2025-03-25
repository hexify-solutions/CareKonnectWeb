import styles from "./upcomingAppointments.module.css"
import { SelectField } from "@hexify/atoms"

const UpcomingAppointments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <h3 className={styles.heading}>Upcoming Appointments</h3>
        <div className={styles.selectFieldWrapper}>
          <div className={styles.field}>
            <SelectField placeholder="Month" value="October" name="month" options={[]} />
          </div>
          <div className={styles.field}>
            <SelectField value="2024"  placeholder="Year" name="year" options={[]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingAppointments
