import Link from "next/link";
import { ArrowLeft } from "@hexify/atoms";
import SpecialistList from "@/components/specialistList";
import styles from "./page.module.css";
import DoctorInfoCard from "@/components/doctor/doctorInfoCard";
import DoctorDetails from "@/components/doctor/doctorDetails";
import DoctorAppointmentForm from "@/components/doctor/doctorAppointmentForm";
import SignupBanner from "../../_components/signupBanner";
import clsx from 'clsx';

const Doctor = () => {
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
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
        <div className={styles.specialistSection}>
          <div className={styles.specialistHeadingWrapper}>
            <h3
              className={styles.specialistHeading}
              arial-label="Top Specialist"
            >
              Other Specialists
            </h3>
            <button className={styles.specialistButton}>View all</button>
          </div>
          <SpecialistList />
        </div>
      </div>
        <SignupBanner />
    </div>
  );
};

export default Doctor;
