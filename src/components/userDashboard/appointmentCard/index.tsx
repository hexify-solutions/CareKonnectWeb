import styles from "./appointmentCard.module.css"
import { CheckMark, Chip, Time } from "@hexify/atoms"
import formatAppointmentDate from "@/lib/utils/formatAppointmentDate"
const AppointmentCard = ({ showPaymentStatus = true, appointment }) => {
  const { status, date: formattedDate } =
    formatAppointmentDate(appointment?.appointmentStartAt) || {}
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <span className={styles.headerSectionSub}>
            {appointment?.clinicName}
          </span>
          <span
            className={styles.headerSectionLead}
          >{`Dr ${appointment?.firstName} ${appointment?.lastName}`}</span>
        </div>
        {showPaymentStatus && (
          <div className={styles.headerSection}>
            <span className={styles.headerSectionSub}>Payment status</span>
            <span>
              <Chip
                size="small"
                className={styles.headerChip}
                label={
                  <div className={styles.chipLabel}>
                    <CheckMark /> {appointment?.status}
                  </div>
                }
              />
            </span>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          Virtual Appointment | {formattedDate}
        </div>
        <Chip
          label={
            <div className={styles.chipLabel}>
              <Time type="outline" /> {status}
            </div>
          }
          size="small"
          className={styles.footerChip}
        ></Chip>
      </div>
    </div>
  )
}

export default AppointmentCard
