// import AppointmentListHeader from "./components/appointmentListHeader";
import AppointmentList from "@/components/userDashboard/appointmentList/index"
import UpcomingAppointments from "./components/upcomingAppointments"
import { Suspense } from "react"
const Appointment = () => {
  return (
    <div>
      <div>
        <UpcomingAppointments />
      </div>
      {/* <AppointmentListHeader /> */}
      <Suspense fallback={<div>Loading</div>}>
        <AppointmentList />
      </Suspense>
    </div>
  )
}
export default Appointment
