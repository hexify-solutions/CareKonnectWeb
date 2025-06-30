import {
  Button,
  ChevronLeft,
  ChevronRight,
  ProviderIcon,
  Time,
} from "@hexify/atoms"
import styles from "./appointmentGeneralInfoCard.module.css"
import { AppointmentGeneralInfoCardTabComponent } from "./tabComponents"
import { DownloadReceipt } from "@/components/appointment/appointmentGeneralInfoCard/DownloadReceipt"

const AppointmentGeneralInfoCard = ({ appointment }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.tabWrapper}>
        <AppointmentGeneralInfoCardTabComponent appointment={appointment} />
      </div>
      <div className={styles.paymentSection}>
        <DownloadReceipt appointment={appointment} />
        <div>
          <div className={styles.otherAppointmentHeader}>
            <div className={styles.heading}>Other Appointments</div>
            {/* <button className={styles.filterBtn}>
              In 7 days <ChevronLeft />
            </button> */}
          </div>
          <OtherAppointmentCard />
          <div className={styles.filterBtnWrapper}>
            <button className={styles.filterBtn}>
              <ChevronLeft /> <span>Previous </span>
            </button>
            <button className={styles.filterBtn}>
              <span>Next</span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const OtherAppointmentCard = () => {
  return (
    <div className={styles.otherAppointmentCardWrapper}>
      <div className={styles.appointmentCardDetailsSection}>
        <span className={styles.cardDetailsInfo}>
          <ProviderIcon /> <span>Provider</span>
        </span>
        <span className={styles.cardDetailsInfo}>
          Dr. Sarah Thompson, General Practitioner
        </span>
      </div>
      <div className={styles.appointmentCardDetailsSection}>
        <span className={styles.cardDetailsInfo}>
          <Time type="outline" /> <span>Time</span>
        </span>
        <span className={styles.cardDetailsInfo}>
          Wednesday, Sep 2, 2024 . 4:00 PM (PST) In 2 hours 15 minutes
        </span>
      </div>

      <div className={styles.scheduleWrapper}>
        <Button disabled data-action="join_session" variant="contained" rounded>
          Join session{" "}
        </Button>
        <Button data-action="reschedule" variant="contained" rounded>
          Reschedule{" "}
        </Button>
        <Button data-action="cancel" variant="contained" rounded>
          Cancel{" "}
        </Button>
      </div>
    </div>
  )
}

export default AppointmentGeneralInfoCard
