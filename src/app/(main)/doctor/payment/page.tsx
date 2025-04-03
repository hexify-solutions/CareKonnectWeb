import styles from "./page.module.css";
import clsx from "clsx";
import DoctorInfoCardWithHospital from "@/components/doctor/doctorInfoCardWithHospital";
import AppointmentDetailCard from "@/components/doctor/appointmentDetailCard";
import PaymentForm from "@/components/payment/paymentForm";
import { fetchData } from "@/http";

const DoctorAppointmentPayment = async ({params, searchParams }) => {

  let doctor = null;
  let appointment = null;

  const pageSearchParams = await searchParams;




    doctor = await fetchData(
      `${process.env.PUBLIC_URL}/doctors/${pageSearchParams?.doctor}`,
      "Error fetching doctor details:"
    )

    appointment = await fetchData(
      `${process.env.PUBLIC_URL}/appointments/${pageSearchParams?.appointmentId}`,
      'Error fetching appointment'
    )
  

    console.log(appointment, doctor, "this is the page params")


  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <div className={styles.details}>
          <DoctorInfoCardWithHospital doctor={doctor?.data || {}} />
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
