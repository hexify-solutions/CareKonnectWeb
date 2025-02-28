import {
  Avatar,
  Chip,
  CalendarIcon,
  ClockIcon,
  LocationPin,
  DirectIcon,
  Telephone,
  Button,
  CancelIcon
} from "@hexify/atoms";
import styles from "./appointmentDetailCard.module.css";

const AppointmentDetailCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.doctorInfo}>
          <Avatar displayText="Innocent edsa" />
          <div>
            <div className={styles.doctorDetails}>
              <div>
                <h6 className={styles.doctorsName}>Dr. Femi Johnson</h6>
                <span className={styles.doctorSpecialty}>
                  Specialty: Cardiologist
                </span>
              </div>
              <Chip variant="outlined" designVariant="ghost" label="Upcoming" />
            </div>
            <div className={styles.date}>
              <div className={styles.dateItem}>
                <CalendarIcon type="two" />
                <span> Date: Sunday, October 08, 2024</span>
              </div>
              <div className={styles.dateItem}>
                <ClockIcon />
                <span>Time: 3:00 PM (PST)</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.hospitalInfoWrapper}>
          <h6 className={styles.hospitalName}>Zoey Specialist Care Hospital</h6>
          <div className={styles.hospitalDetails}>
            <div>
              <LocationPin />{" "}
              <span>Plot 12, Adeola Odeku Street, Victoria Island, Lagos.</span>
            </div>
            <div>
              <DirectIcon /> <span>mamckinder@gmail.com</span>
            </div>
            <div>
              <Telephone /> <span>+880 172524123123</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Button variant="contained" size="large" rounded>
            <CalendarIcon type="two" /> <span>Reschedule</span>
        </Button>
        <Button className={styles.cancelBtn}  variant="contained" size="large" rounded>
            <CancelIcon type="two" /> <span>Cancel</span>
        </Button>
      </div>
    </div>
  );
};

export default AppointmentDetailCard;
