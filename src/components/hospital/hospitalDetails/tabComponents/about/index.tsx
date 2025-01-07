import styles from "./about.module.css";
import clsx from "clsx";
import { iconLoaderMap, IconLoader } from "@hexify/atoms";

const services = [
  "Doctors",
  "Lab Test",
  "Dentistry",
  "Optician",
  "Pharmacy",
  "Appointment",
];

const HospitalAbout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.section, styles.description)}>
        Dr. Johnson Awe is a skilled Neurologist with over 3 years of experience
        in diagnosing and treating a range of neurological disorders. She is
        dedicated to patient care, with expertise in managing conditions such as
        epilepsy, migraines, and other complex neurological issues. Dr. Awe is
        committed to advancing neurological health through evidence-based
        practices and compassionate patient support. In addition to her clinical
        practice, Dr. Johnson Awe is actively involved in research aimed at
        improving treatment protocols for neurological conditions. She
        collaborates with multidisciplinary teams to explore innovative
        therapies and enhance patient outcomes. Her passion for education
        extends beyond her patients, as she frequently participates in community
        outreach programs to raise awareness about neurological health and
        promote preventive care. Dr. Awe’s holistic approach to treatment
        underscores her belief in the importance of understanding each patient’s
        unique circumstances to provide tailored care that fosters both physical
        and emotional well-being.
      </div>
      <div className={styles.section}>
        <h5 className={styles.sectionHeading}>Services</h5>
        <div className={styles.servicesList}>
          {services?.map((service) => {
            const iconPath = iconLoaderMap?.[service.toLowerCase()];

            return (
              <div className={styles.servicesItem}>
                <aside className={styles.servicesIcon}>
                  {!!iconPath && <IconLoader path={iconPath} />}
                </aside>
                <span>{service}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.section}>
        <h5 className={styles.sectionHeading}>Working Time</h5>
        <span className={styles.workTime}>
          Monday - Saturday (9:00 AM - 9:00 PM)
        </span>
      </div>
      <div className={styles.section}>
        <h5 className={styles.sectionHeading}>Other Information</h5>
        <div className={styles.moreInfoSection}>
          <div className={styles.contactInfo}>
            <span className={styles.infoHeading}>Contact Information</span>
            <span>+2348123456789</span>
            <span>salemhospital@gmail.com</span>
          </div>
          <div className={styles.operationHours}>
            <span className={styles.infoHeading}>Operation Hours</span>
            <span>24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalAbout;
