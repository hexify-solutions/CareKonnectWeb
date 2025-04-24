import styles from "./upcomingAppointments.module.css"
import { Suspense } from "react"
import UpcomingAppointmentFilter from "./Filter"
import UpcomingAppointmentList from "./List"
import { getUsersAppointments } from "@/http/appointment/serverActions"

const UpcomingAppointments = async () => {
  const today = new Date()
  const startDate = today.toISOString().split("T")[0]

  const appointments = await getUsersAppointments({
    startDate,
    orderBy: "appointmentStartAt",
    sort: "asc",
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <h3 className={styles.heading}>Upcoming Appointments</h3>
        <UpcomingAppointmentFilter />
      </div>
      <Suspense fallback={<>loading</>}>
        <UpcomingAppointmentList
          appointments={appointments?.data?.data || []}
        />
      </Suspense>
    </div>
  )
}

export default UpcomingAppointments
