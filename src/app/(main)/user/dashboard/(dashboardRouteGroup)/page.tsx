import DashboardSummaryCard from "@/components/userDashboard/dashboardSummaryCard"
import { cookies } from "next/headers"
import Link from "next/link"
import styles from "./styles/page.module.css"
import VitalCard from "@/components/userDashboard/vitalCard"
import PrescriptionCard from "@/components/prescription/prescriptionCard"
import { DoctorCard, HospitalCard } from "@hexify/components"
import { BookIcon, EmailIcon } from "@hexify/atoms"
import DoctorInfoCard from "@/components/doctor/doctorInfoCard"
import mockSpecialistData from "@/data/mockSpecialist.json"
import routes from "@/lib/constants/routes"
import {
  HospitalWithCrossIcon,
  DashboardCalendarIcon,
  MedicinalBowl,
} from "@hexify/atoms"
import RecentAppointment from "./components/recentAppointments"
import { Suspense } from "react"
import { getUserStats } from "@/http/user/serverAction"
import { getUserAgeInfo } from "@/lib/utils/getUserAgeInfo"

const generateSummaryData = (data: Record<string, string>) => {
  return Object.entries(data || {}).reduce((acc, [key, value]) => {
    if (key === "total") return acc // Skip the "total" key
    acc.push({
      label: key,
      value,
    })
    return acc
  }, [])
}

const Dashboard = async () => {
  const stats = await getUserStats()

  const appointmentData = generateSummaryData(stats?.appointment)
  const serviceData = generateSummaryData(stats?.service)
  const prescriptionData = generateSummaryData(stats?.prescriptions)
  const userAgeInfo = getUserAgeInfo(stats?.user?.dob)

  return (
    <div>
      <ul className={styles.summaryList}>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard
            total={stats?.appointment?.total || 0}
            data={
              appointmentData?.length
                ? appointmentData
                : defaultData?.appointments
            }
            title="Appointments"
            icon={<HospitalWithCrossIcon />}
          />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard
            title="Services"
            theme="primary"
            total={stats?.service?.total || 0}
            data={serviceData?.length ? serviceData : defaultData?.services}
            icon={
              <span>
                <DashboardCalendarIcon type="large" />{" "}
              </span>
            }
          />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard
            title="Prescriptions"
            theme="secondary"
            total={stats?.prescriptions?.total || 0}
            data={
              prescriptionData?.length
                ? prescriptionData
                : defaultData?.prescriptions
            }
            icon={<MedicinalBowl type="large" />}
          />
        </li>
        <li className={styles.summaryListItem}>
          <DashboardSummaryCard
            title="Spendings"
            total={`NGN ${stats?.totalSpending?.toLocaleString() || 0}`}
            theme="error"
            icon={<BookIcon />}
          />
        </li>
      </ul>
      <ul className={styles.vitalInfoWrapper}>
        {stats?.vitals && (
          <li className={styles.vitalInfoItem}>
            <VitalCard
              vitals={{ ...(stats?.vitals || {}), age: userAgeInfo?.age }}
            />
          </li>
        )}
        <li className={styles.vitalInfoItem}>
          <PrescriptionCard />
        </li>
      </ul>
      <Suspense fallback={<div>loading</div>}>
        <RecentAppointment />
      </Suspense>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>Recent Services</div>
          <button className={styles.sectionBtn}>View All</button>
        </div>
        <ul className={styles.sectionList}>
          {mockSpecialistData?.map(({ image, id, type, ...specialist }) => {
            // if (type === "hospital") {
            //   return (
            //     <li key={id} className={styles.sectionListItem}>
            //       <Link href={routes.hospital(specialist.label)}>
            //         <HospitalCard {...(specialist || {})} image={image} />
            //       </Link>
            //     </li>
            //   )
            // }
            return (
              <li key={id} className={styles.sectionListItem}>
                <Link href={routes.doctor(specialist.label)}>
                  <DoctorCard info={specialist} image={image} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const defaultData = {
  appointments: [
    { label: "Ongoing", value: 0 },
    { label: "Upcoming", value: 0 },
    { label: "Completed", value: 0 },
  ],

  services: [
    { label: "Hospitals", value: 0 },
    { label: "Pharmacies", value: 0 },
    { label: "Laboratories", value: 0 },
  ],
  prescriptions: [
    { label: "Pending", value: 0 },
    { label: "Completed", value: 0 },
  ],
  spending: [
    { label: "", value: 0 },
    { label: "Completed", value: 0 },
  ],
}
export default Dashboard
