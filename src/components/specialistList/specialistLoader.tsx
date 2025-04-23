import DoctorCardLoader from "../skeletonLoaders/doctorCardLoader"
import styles from "./specialistList.module.css"
const SpecialistListLoader = () => {
  return (
    <ul className={styles.list}>
      <DoctorCardLoader />
      <DoctorCardLoader />
      <DoctorCardLoader />
      <DoctorCardLoader />
      <DoctorCardLoader />
      <DoctorCardLoader />
    </ul>
  )
}


export default SpecialistListLoader;
