import Link from "next/link"
import { ArrowLeft } from "@hexify/atoms"
import SpecialistList from "@/components/specialistList"
import styles from "./page.module.css"
import DoctorInfoCard from "@/components/doctor/doctorInfoCard"
import DoctorDetails from "@/components/doctor/doctorDetails"
import DoctorAppointmentForm from "@/components/doctor/doctorAppointmentForm"
import SignupBanner from "../../_components/signupBanner"
import { fetchData } from "@/http"
import { Suspense } from "react"
import clsx from "clsx"
import { getDoctor } from "@/http/doctor/serverAction"

const Doctor = async ({ params, searchParams }) => {
  let doctor = null
  let doctorsAvailability = null
  const pageParams = await params
  const pageSearchParams = await searchParams

  doctor = await getDoctor(pageParams?.slug)

  doctorsAvailability = await fetchData({
    url: `${process.env.NEXT_PUBLIC_URL}/availabilities/${pageSearchParams?.availability || pageParams?.slug || doctor?.data?.doctorDetails?.id}`,
    errorMessage: "Error fetching doctor availabilities:",
  })

  return (
    <div>
      {!!doctor?.data && (
        <div className={clsx("inner-wrapper", styles.wrapper)}>
          {doctor?.data ? (
            <DoctorInfoCard doctor={doctor.data} />
          ) : (
            <p className={styles.errorMessage}>
              Failed to load doctor details.
            </p>
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
                <DoctorAppointmentForm
                  appointmentSlots={
                    doctorsAvailability?.data?.data?.appointmentSlot
                  }
                />
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
            <Suspense fallback={<div>loading</div>}>
              <SpecialistList />
            </Suspense>
          </div>
        </div>
      )}
      <SignupBanner />
    </div>
  )
}

export default Doctor
