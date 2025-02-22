import { Breadcrumb } from "@hexify/atoms";
import styles from "./page.module.css";
import clsx from "clsx";
import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard";
import AppointmentGeneralInfoCard from "@/components/appointment/appointmentGeneralInfoCard/index";

const AppointmentDetails = () => {
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb
          excludePaths={["details"]}
          renamePaths={{
            appointments: "Appointments",
            slug: "Appointment Details",
          }}
        />
        <div className={styles.appointCardWrapper}>
          <AppointmentDetailCard />
        </div>
        <div className={styles.generalInfoWrapper}>
          <AppointmentGeneralInfoCard />
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
