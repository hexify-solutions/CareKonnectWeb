import styles from "./style.module.css"
import ServiceList from "../renderList"
import ServiceHistoryFilter from "./filter"

const ServiceHistory = async () => {
  return (
    <div className={styles.wrapper}>
      <h4>Service History</h4>
      <ServiceHistoryFilter />
      <ServiceList services={Array.from({ length: 10 })} styles={styles} />
    </div>
  )
}

export default ServiceHistory
