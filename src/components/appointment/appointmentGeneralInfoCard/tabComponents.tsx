"use client"
import { Button, ChevronRight, Tabs } from "@hexify/atoms"
import styles from "./tabComponent.module.css"
import clsx from "clsx"
import Link from "next/link"
import routes from "@/lib/constants/routes"
import { toast } from "react-toastify"
import { CopyConsultation } from "@/components/appointment/appointmentGeneralInfoCard/DownloadReceipt"

const GeneralOverview = ({ appointment }) => {
  return (
    <div className={styles.sectionWrapper}>
      {appointment?.appointmentRef && (
        <div className={styles.generalOverviewInfoItem}>
          <span>Appointment ID</span>
          <span className={styles.generalOverviewInfoItemValue}>
            {appointment?.appointmentRef}
          </span>
        </div>
      )}
      <div className={styles.generalOverviewInfoItem}>
        <span>Consultation Type</span>
        <span className={styles.generalOverviewInfoItemValue}>
          {appointment?.consultationType || "Virtual Consultation"}
        </span>
      </div>
      <div className={styles.generalOverviewInfoItem}>
        <span>Status</span>
        <span className={styles.generalOverviewInfoItemValue}>
          {appointment?.status}
        </span>
      </div>
      <div className={styles.generalOverviewInfoItem}>
        <span>Description</span>
        <span className={styles.generalOverviewInfoItemValue}>
          {appointment?.notes}
        </span>
      </div>
      <div className={styles.generalOverviewInfoItem}>
        <span>Amount</span>
        <span className={styles.generalOverviewInfoItemValue}>
          &#8358;{appointment?.fee?.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

const DoctorComment = () => {
  return (
    <div className={clsx(styles.sectionWrapper, styles.doctorCommentInfo)}>
      Patient presented with symptoms of mild fever and persistent cough. Based
      on the examination, it appears to be a viral infection. Advised rest,
      increased fluid intake, and prescribed Paracetamol for fever management.
      If symptoms persist beyond 5 days or worsen, consider follow-up for
      further evaluation. No immediate concerns but recommend monitoring
      temperature daily
    </div>
  )
}

const Prescriptions = () => {
  return (
    <div className={styles.prescription}>
      <ul>
        {Array.from({ length: 2 })?.map(() => {
          return (
            <li className={styles.prescriptionItem}>
              <span>View drug prescriptions</span>
              <ChevronRight />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const AppointmentGeneralInfoCardTabComponent = ({ appointment }) => {
  const tabs = [
    {
      label: "General Overview",
      Component: () => <GeneralOverview appointment={appointment} />,
    },
    {
      label: "Doctor's Comments",
      Component: DoctorComment,
    },
    {
      label: "Prescriptions",
      Component: Prescriptions,
    },
  ]

  const meetingLink = routes.appointmentMeeting({
    appointmentId: appointment?.meetings?.appointmentId,
    meetingId: appointment?.appointmentRef,
    appointmentRef: appointment?.appointmentRef,
  })
  return (
    <div className={styles.tabWrapper}>
      <Tabs tabs={tabs} />
      <div className={styles.btnWrapper}>
        <Link href={meetingLink}>
          <Button rounded variant="contained" size="large" fullWidth>
            Join session
          </Button>
        </Link>
        <CopyConsultation meetingLink={meetingLink} />
      </div>
    </div>
  )
}
