import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard"
import styles from './upcomingAppointments.module.css'
const UpcomingAppointmentList = async ({ appointments }) => {
  const displayedAppointments = (appointments || []).slice(0, 2)

  return (
    <ul>
      {displayedAppointments?.map((appointment, idx) => {
        return (
          <li className={styles.appointmentListItem}>

            <AppointmentDetailCard
              key={appointment?.id + idx}
              appointment={appointment}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default UpcomingAppointmentList
