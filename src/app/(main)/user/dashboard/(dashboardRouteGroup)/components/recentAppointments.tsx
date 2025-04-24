import styles from "../styles/page.module.css"
import AppointmentCard from "@/components/userDashboard/appointmentCard"
import { cookies } from "next/headers"
import Link from "next/link"
import cookieKeys from "@/lib/constants/cookieKeys"
import { fetchData } from "@/http"
import routes from '@/lib/constants/routes';

const RecentAppointment = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieKeys.token)?.value

  const stats = await fetchData({
    url: `${process.env.PUBLIC_URL}/dashboard/stats`,
    errorMessage: "Error fetching doctor details:",
    options: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  })


  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>New Appointments</div>
        <Link href={routes.userDashboardAppointments}>
        <div className={styles.sectionBtn}>View All</div>
        </Link>
      </div>
      <ul className={styles.sectionList}>
        {stats?.data?.recentAppointments?.map((appointment, index) => {
          return (
            <li className={styles.sectionListItem} key={appointment?.id + index}>
              <AppointmentCard appointment={appointment} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentAppointment
