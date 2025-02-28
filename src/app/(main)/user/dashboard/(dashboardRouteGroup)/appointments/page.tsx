import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard";
import AppointmentListHeader from "./components/appointmentListHeader";
import AppointmentList from "@/components/userDashboard/appointmentList/index";

const Appointment = () => {
  return (
    <div>
      <div>
        <AppointmentDetailCard />
      </div>
      <AppointmentListHeader />
      <AppointmentList />
    </div>
  );
};
export default Appointment;
