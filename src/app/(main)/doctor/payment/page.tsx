import styles from "./page.module.css"
import clsx from "clsx"
import DoctorInfoCardWithHospital from "@/components/doctor/doctorInfoCardWithHospital"
import AppointmentDetailCard from "./appiontmentWrapper"
import PaymentForm from "@/components/payment/paymentForm"
import { fetchData } from "@/http"

const DoctorAppointmentPayment = async ({ params, searchParams }) => {
  let doctor = null
  const pageSearchParams = await searchParams

  doctor = await fetchData({
    url: `${process.env.PUBLIC_URL}/doctors/${pageSearchParams?.doctor}`,
    errorMessage: "Error fetching doctor details:",
  })

  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <div className={styles.details}>
          <DoctorInfoCardWithHospital doctor={doctor?.data || {}} />
          <AppointmentDetailCard id={pageSearchParams?.appointmentId} />
        </div>
        <div className={styles.payment}>
          <PaymentForm appointmentId={pageSearchParams?.appointmentId} />
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointmentPayment
