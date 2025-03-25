import Link from "next/link"
import { ArrowLeft } from "@hexify/atoms"
import SpecialistList from "@/components/specialistList"
import styles from "./page.module.css"
import DoctorInfoCard from "@/components/doctor/doctorInfoCard"
import DoctorDetails from "@/components/doctor/doctorDetails"
import DoctorAppointmentForm from "@/components/doctor/doctorAppointmentForm"
import SignupBanner from "../../_components/signupBanner"
import { fetchData } from "@/http"
import clsx from "clsx"

const Doctor = async ({ params }) => {
  let doctor = null
  let doctorsAvailability = null

  doctor = await fetchData(
    `${process.env.PUBLIC_URL}/doctors/${params?.slug}`,
    "Error fetching doctor details:"
  )
  doctorsAvailability = await fetchData(
    `${process.env.PUBLIC_URL}/availabilities/${doctor?.doctorDetails?.userId}`,
    "Error fetching doctor availabilities:"
  )

  console.log(doctorsAvailability, doctor, ">>>>>>>>>>>>")

  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        {doctor?.data ? (
          <DoctorInfoCard doctor={doctor.data} />
        ) : (
          <p className={styles.errorMessage}>Failed to load doctor details.</p>
        )}
        <div className={styles.doctorInfo}>
          <Link href="/" className={styles.breadCrumb}>
            <span>
              <ArrowLeft />
            </span>
            <span> Doctor's Details</span>
          </Link>
          <div className={styles.details}>
            <div className={styles.tabSection}>
              {doctor?.data ? <DoctorDetails doctor={doctor.data} /> : null}
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
              aria-label="Top Specialist"
            >
              Suggested for you
            </h3>
            <button className={styles.specialistButton}>View all</button>
          </div>
          <SpecialistList />
        </div>
      </div>
      <SignupBanner />
    </div>
  )
}

export default Doctor
