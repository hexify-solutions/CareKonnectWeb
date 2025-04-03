import AppointmentListHeader from "./components/appointmentListHeader";
import AppointmentList from "@/components/userDashboard/appointmentList/index";
import UpcomingAppointments from "./components/upcomingAppointments";
const Appointment = () => {
  return (
    <div>
      <div>
        <UpcomingAppointments />
      </div>
      <AppointmentListHeader />
      <AppointmentList />
    </div>
  );
};
export default Appointment;
