import {
  Avatar,
  Chip,
  CalendarIcon,
  ClockIcon,
  LocationPin,
  DirectIcon,
  Telephone,
  Button,
  CancelIcon,
} from "@hexify/atoms"
import styles from "./appointmentDetailCard.module.css"
import formatAppointmentDate from "@/lib/utils/formatAppointmentDate"

const AppointmentDetailCard = ({ appointment }) => {

  const { doctor, appointmentStartAt } = appointment || {}
  const {
    status: dateStatus,
    fullLongDate,
    formattedTime,
    timeZoneAbbreviation,
  } = formatAppointmentDate(appointmentStartAt) || {}


  const doctorFirstName = doctor?.users?.firstName || appointment?.firstName || "";
const doctorLastName = doctor?.users?.lastName || appointment?.lastName || "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.doctorInfo}>
          <Avatar
            src={doctor?.avatarUrl || appointment?.avatarUrl}
            displayText="Innocent edsa"
          />
          <div>
            <div className={styles.doctorDetails}>
              <div>
                <h6 className={styles.doctorsName}>
                  {doctorFirstName || doctorLastName
                    ? `Dr ${doctorFirstName} ${doctorLastName}`
                    : ""}
                </h6>
                <span className={styles.doctorSpecialty}>
                  Specialty: Cardiologist
                </span>
              </div>
              <Chip
                variant="outlined"
                designVariant="ghost"
                label={
                  <span style={{ textTransform: "capitalize" }}>
                    {dateStatus || "pending"}{" "}
                  </span>
                }
              />
            </div>
            <div className={styles.date}>
              <div className={styles.dateItem}>
                <CalendarIcon type="two" />
                <span> Date: {fullLongDate}</span>
              </div>
              <div className={styles.dateItem}>
                <ClockIcon />
                <span>
                  Time: {formattedTime} ({timeZoneAbbreviation})
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.hospitalInfoWrapper}>
          <h6 className={styles.hospitalName}>{doctor?.clinicName}</h6>
          <div className={styles.hospitalDetails}>
           {doctor?.locations && <div>
              <LocationPin /> <span>{doctor?.locations}</span>
            </div>}
            {doctor?.users?.email && (
              <div>
                <DirectIcon /> <span>{doctor?.users?.email}</span>
              </div>
            )}
            {doctor?.users?.phoneNumber && (
              <div>
                <Telephone /> <span>{doctor?.users?.phoneNumber}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Button variant="contained" size="large" rounded>
          <CalendarIcon type="two" /> <span>Reschedule</span>
        </Button>
        <Button
          className={styles.cancelBtn}
          variant="contained"
          size="large"
          rounded
        >
          <CancelIcon type="two" /> <span>Cancel</span>
        </Button>
      </div>
    </div>
  )
}

export default AppointmentDetailCard
