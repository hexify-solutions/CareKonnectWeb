import styles from "./doctorDetails.module.css"

const About = ({ doctor }) => {
  return (
    <div className={styles.tabContentWrapper}>
      <div className={styles.about}>{doctor?.doctorDetails?.bio}</div>
      <div className={styles.section}>
        <div className={styles.sectionHeading}>Working Time</div>
        <span>{doctor?.doctorDetails?.workingHours}</span>
      </div>
    </div>
  )
}

export default About
