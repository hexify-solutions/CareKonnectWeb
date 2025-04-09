import styles from "./appointmentList.module.css"
import AppointmentCard from "../appointmentCard"
import AppointmentListHeader from "@/components/appointment/appointmentListHeader"
import routes from "@/lib/constants/routes"
import Link from "next/link"
import { getUsersAppointments } from "@/http/appointment/serverActions"

const AppointmentList = async () => {

  const appointments = await getUsersAppointments({})
  
  return (
    <>
      <AppointmentListHeader />
      <ul className={styles.list}>
        {appointments?.data?.data?.map((appointment, idx) => {
          return (
            <li key={appointment?.id + idx}>
              <Link href={`${routes.appointmentDetails(appointment?.id)}`}>
                <AppointmentCard appointment={appointment} showPaymentStatus={false} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AppointmentList
