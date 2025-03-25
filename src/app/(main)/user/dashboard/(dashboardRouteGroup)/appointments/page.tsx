import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard";
import AppointmentListHeader from "./components/appointmentListHeader";
import AppointmentList from "@/components/userDashboard/appointmentList/index";
import UpcomingAppointments from "./components/upcomingAppointments";
const Appointment = () => {
  return (
    <div>
      <div>
        <AppointmentDetailCard />
      </div>
      <div>
        <UpcomingAppointments />
      </div>
      <AppointmentListHeader />
      <AppointmentList />
    </div>
  );
};
export default Appointment;
