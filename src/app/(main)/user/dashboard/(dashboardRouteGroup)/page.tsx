import DashboardSummaryCard from "@/components/userDashboard/dashboardSummaryCard";
import Link from "next/link";
import styles from "./styles/page.module.css";
import VitalCard from "@/components/userDashboard/vitalCard";
import PrescriptionCard from "@/components/userDashboard/prescriptionCard";
import AppointmentCard from "@/components/userDashboard/appointmentCard";
import { DoctorCard, HospitalCard } from "@hexify/components";
import { EmailIcon } from "@hexify/atoms";
import DoctorInfoCard from "@/components/doctor/doctorInfoCard";
import mockSpecialistData from "@/data/mockSpecialist.json";
import routes from "@/lib/constants/routes";

const Dashboard = () => {
  return (
    <div>
      <ul className={styles.summaryList}>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard icon={<EmailIcon />} />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard title="Services" theme="primary" icon={<EmailIcon />} />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard title="Prescriptions" theme="secondary" icon={<EmailIcon />} />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard title="Spendings" digit={`NGN 567,899`} theme="error" icon={<EmailIcon />} />
        </li>
      </ul>
      <ul className={styles.vitalInfoWrapper}>
        <li className={styles.vitalInfoItem}>
          <VitalCard />
        </li>
        <li className={styles.vitalInfoItem}>
          <PrescriptionCard />
        </li>
      </ul>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>New Appointments</div>
          <button className={styles.sectionBtn}>View All</button>
        </div>
        <ul className={styles.sectionList}>
          {Array.from({ length: 3 })?.map((_, index) => {
            return (
              <li className={styles.sectionListItem} key={index}>
                <AppointmentCard />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>Recent Services</div>
          <button className={styles.sectionBtn}>View All</button>
        </div>
        <ul className={styles.sectionList}>
          {mockSpecialistData?.map(({ image, id, type, ...specialist }) => {
            if (type === "hospital") {
              return (
                <li key={id} className={styles.sectionListItem}>
                  <Link href={routes.hospital(specialist.label)}>
                    <HospitalCard info={specialist} image={image} />
                  </Link>
                </li>
              );
            }
            return (
              <li key={id} className={styles.sectionListItem}>
                <Link href={routes.doctor(specialist.label)}>
                  <DoctorCard info={specialist} image={image} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
