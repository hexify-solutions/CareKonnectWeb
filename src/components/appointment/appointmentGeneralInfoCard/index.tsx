"use client"
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
import React from "react"
import { DateTime } from "luxon"

const AppointmentGeneralInfoCard = ({ appointment }) => {
  // const [appointments, setSelectedAppointments] = React.useState<[]>(appointment?.appointments || [])
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(((appointment?.appointments || []).length - 1) / 2)
  )
  const next = () => {
    if (currentIndex < appointment?.appointments.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(appointment?.appointments.length - 1)
    }
  }
  const selectedAppointment = (appointment?.appointments || [])?.at(
    currentIndex
  )
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
          {selectedAppointment && (
            <>
              <OtherAppointmentCard {...(selectedAppointment || {})} />
              <div className={styles.filterBtnWrapper}>
                <button className={styles.filterBtn} onClick={prev}>
                  <ChevronLeft /> <span>Previous </span>
                </button>
                <button className={styles.filterBtn} onClick={next}>
                  <span>Next</span>
                  <ChevronRight />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const OtherAppointmentCard = (props) => {
  console.log(props)
  return (
    <div className={styles.otherAppointmentCardWrapper}>
      <div className={styles.appointmentCardDetailsSection}>
        <span className={styles.cardDetailsInfo}>
          <ProviderIcon /> <span>{props.title || props.consultationType}</span>
        </span>
        <span className={styles.cardDetailsInfo}>{props.note}</span>
      </div>
      <div className={styles.appointmentCardDetailsSection}>
        <span className={styles.cardDetailsInfo}>
          <Time type="outline" /> <span>Time</span>
        </span>
        <span className={styles.cardDetailsInfo}>
          {DateTime.fromISO(props.appointmentStartAt).toLocaleString(
            DateTime.DATETIME_MED
          )}
        </span>
      </div>

      <div className={styles.scheduleWrapper}>
        {/*<Button disabled data-action="join_session" variant="contained" rounded>*/}
        {/*  Join session{" "}*/}
        {/*</Button>*/}
        <Button
          href={`./${props.id}`}
          data-action="reschedule"
          variant="contained"
          rounded
        >
          View Appointment
          {/*Reschedule{" "}*/}
        </Button>
        {/*<Button data-action="cancel" variant="contained" rounded>*/}
        {/*  Cancel{" "}*/}
        {/*</Button>*/}
      </div>
    </div>
  )
}

export default AppointmentGeneralInfoCard
