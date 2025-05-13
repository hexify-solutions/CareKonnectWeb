import {
  Pill,
  PhoneIcon as Phone24,
  AmbulanceIcon as FirstAid,
  Activity,
  Syringe,
  Calendar,
} from "lucide-react"
import styles from "./pharmacyAboutUsCard.module.css"
import clsx from "clsx"

const PharmacyAboutUsCard = ({ pharmacy }: any) => {
  const displayedData = {
    bio: pharmacy?.bio,
    phoneNumber: "+2348123456789",
    email: "salemhospital@gmail.com",
    workingHours: "24/7",
    workingTime: "Monday - Saturday (9:00 AM - 9:00 PM)",
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <section className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.text}>{displayedData?.bio}</p>
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
            <p className={styles.contactInfo}>{displayedData?.phoneNumber}</p>
            <p className={styles.contactInfo}>{displayedData?.email}</p>
          </section>

          <section>
            <h3 className={styles.subheading}>Operation Hours</h3>
            <p className={styles.contactInfo}>{displayedData?.workingHours}</p>
          </section>

          <section className={styles.section}>
            <h2 className={clsx(styles.subHeading, styles.midHeading)}>
              Working Time
            </h2>
            <p className={styles.contactInfo}>{displayedData?.workingTime}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PharmacyAboutUsCard
