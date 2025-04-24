import Calendar from "@hexify/atoms/src/vectors/calendar"
import styles from "./appointmentDetailCard.module.css"
import { StopWatch } from "@hexify/atoms"
import formatAppointmentDate from "@/lib/utils/formatAppointmentDate"

const AppointmentDetailCard = ({ appointment }) => {
  const { formattedTime, longDate } = formatAppointmentDate(
    appointment?.appointmentStartAt
  )
  return (
    <div className={styles.wrapper}>
      <span className={styles.heading}>Booking Details</span>
      <div className={styles.timing}>
        <span className={styles.timingItem}>
          <span className={styles.timingItemIcon}>
            <Calendar type="two" />{" "}
          </span>{" "}
          <span>{longDate} </span>
        </span>
        <span className={styles.timingItem}>
          <span className={styles.timingItemIcon}>
            {" "}
            <StopWatch />{" "}
          </span>
          <span>Time: Booking Time: {formattedTime}</span>
        </span>
      </div>
      {!!appointment?.notes && (
        <div className={styles.descriptionWrapper}>
          <div className={styles.heading}>Description: </div>
          <div> {appointment?.notes}</div>
        </div>
      )}
      {!!appointment?.fee && (
        <div className={styles.amountWrapper}>
          <span className={styles.heading}>Amount</span>
          <div className={styles.chargeListWrapper}>
            <ul className={styles.chargeList}>
              <li>Appointment</li>
              <li className={styles.chargeValue}>
                NGN {appointment?.fee?.toLocaleString()}
              </li>
            </ul>
          </div>
          <div className={styles.amountTotal}>
            <span className={styles.amountTotalLabel}>Sub Total</span>
            <div>NGN {appointment?.fee?.toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
  )
}
export default AppointmentDetailCard
