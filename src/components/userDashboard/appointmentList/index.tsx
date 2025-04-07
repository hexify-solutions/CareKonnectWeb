import styles from "./appointmentList.module.css"
import AppointmentCard from "../appointmentCard"
import AppointmentListHeader from "@/components/appointment/appointmentListHeader"
import routes from "@/lib/constants/routes"
import Link from "next/link"
import { fetchData } from "@/http"

const AppointmentList = () => {
  return (
    <>
      <AppointmentListHeader />
      <ul className={styles.list}>
        {Array.from({ length: 12 })?.map(() => {
          return (
            <li>
              <Link href={`${routes.appointmentDetails("slug")}`}>
                <AppointmentCard showPaymentStatus={false} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AppointmentList
