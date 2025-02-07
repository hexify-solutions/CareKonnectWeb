import { Avatar } from "@hexify/atoms";
import styles from "./page.module.css";
import ProfileForm from "@/components/profile/profileForm";
import { Suspense } from "react";

const Profile = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className={styles.profile}>
      <div className={styles.header}>
        <Avatar src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800" />
        <span>
          <h6 className={styles.userName}>Temidayo Thomas</h6>
          <span className={styles.userEmail}>streamaeo@gmail.com</span>
        </span>
      </div>
      <div className={styles.formWrapper}>

      <ProfileForm />
      </div>
    </div>
    </Suspense>
  );
};
export default Profile;
