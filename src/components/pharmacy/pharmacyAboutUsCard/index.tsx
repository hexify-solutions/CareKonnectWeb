import { Pill, PhoneIcon as Phone24, AmbulanceIcon as FirstAid, Activity, Syringe, Calendar } from "lucide-react"
import styles from "./pharmacyAboutUsCard.module.css"
import clsx from "clsx"

const PharmacyAboutUsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <section className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.text}>
            Southwood Pharmacy is a modern, community-focused pharmacy that prioritizes personalized patient care and
            accessible health services. Located in a vibrant urban neighborhood, Southwood aims to go beyond traditional
            pharmacy services by creating a welcoming and educational environment for customers of all ages.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Pill className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>Retail</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Phone24 className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>Consultations</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <FirstAid className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>First Aid Supplies</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Activity className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>Devices</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Syringe className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>Immunizations</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <Calendar className={styles.icon} />
              </div>
              <span className={styles.serviceLabel}>Health Screenings</span>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.column}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Other Information</h2>
        </section>
        <div className={styles.bottomColumn}>


        <section className={styles.section}>
          <h3 className={styles.subheading}>Contact Information</h3>
          <p className={styles.contactInfo}>+2348123456789</p>
          <p className={styles.contactInfo}>salemhospital@gmail.com</p>
        </section>

        <section>
          <h3 className={styles.subheading}>Operation Hours</h3>
          <p className={styles.contactInfo}>24/7</p>
        </section>

        <section className={styles.section}>
          <h2 className={clsx(styles.subHeading, styles.midHeading)}>Working Time</h2>
          <p className={styles.contactInfo}>Monday - Saturday (9:00 AM - 9:00 PM)</p>
        </section>

        </div>

      </div>
    </div>
  )
}

export default PharmacyAboutUsCard
