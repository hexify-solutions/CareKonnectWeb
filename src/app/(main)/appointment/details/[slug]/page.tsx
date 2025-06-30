import { Breadcrumb } from "@hexify/atoms"
import styles from "./page.module.css"
import clsx from "clsx"
import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard"
import AppointmentGeneralInfoCard from "@/components/appointment/appointmentGeneralInfoCard/index"
import { getAppointmentById } from "@/http/appointment/serverActions"

const AppointmentDetails = async ({ params }) => {
  const pageParams = await params
  const appointment = await getAppointmentById(
    pageParams?.slug + "?withTransaction=true"
  )

  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb
          excludePaths={["details"]}
          renamePaths={{
            appointment: "Appointments",
            [pageParams.slug]: "Appointment Details",
          }}
        />
        <div className={styles.appointCardWrapper}>
          <AppointmentDetailCard appointment={appointment} />
        </div>
        <div className={styles.generalInfoWrapper}>
          <AppointmentGeneralInfoCard appointment={appointment} />
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetails
