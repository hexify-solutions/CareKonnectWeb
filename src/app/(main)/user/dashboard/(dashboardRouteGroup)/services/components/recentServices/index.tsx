import styles from "./styles.module.css"

import { getUserRecentServices } from "@/http/user/serverAction"
import ServiceList from "../renderList"

const RecentServices = async () => {
  const services = await getUserRecentServices()

  return (
    <div>
      <h3 className={styles.heading}>Recent Services</h3>
      <ServiceList services={services} styles={styles} />
    </div>
  )
}

export default RecentServices
