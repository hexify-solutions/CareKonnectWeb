import { Avatar } from "@hexify/atoms";
import { AvatarWithName } from "@hexify/components";
import styles from "./page.module.css";
import ProfileForm from "@/components/profile/profileForm";
import clsx from "clsx";

const Profile = () => {
  return (
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
  );
};
export default Profile;
