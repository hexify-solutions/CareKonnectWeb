import styles from "./page.module.css";
import clsx from "clsx";
import DoctorInfoCardWithHospital from "@/components/doctor/doctorInfoCardWithHospital";
import AppointmentDetailCard from "@/components/doctor/appointmentDetailCard";
import PaymentForm from "@/components/payment/paymentForm";

const DoctorAppointmentPayment = () => {
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <div className={styles.details}>
          <DoctorInfoCardWithHospital />
          <AppointmentDetailCard />
        </div>
        <div className={styles.payment}>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentPayment;
