import Link from "next/link";
import { ArrowLeft } from "@hexify/atoms";
import styles from "./page.module.css";
import DoctorInfoCard from "../_components/doctorInfoCard";
import DoctorDetails from "../_components/doctorDetails";
import DoctorAppointmentForm from "../_components/doctorAppointmentForm";

const Doctor = () => {
  return (
    <div>
      <div className={"inner-wrapper"}>
        <DoctorInfoCard />
        <div className={styles.doctorInfo}>
          <Link href="/" className={styles.breadCrumb}>
            <span>
              <ArrowLeft />
            </span>
            <span> Doctor's Details</span>
          </Link>
          <div className={styles.details}>
            <div className={styles.tabSection}>
              <DoctorDetails />
            </div>
            <div className={styles.formSection}>
              <DoctorAppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
