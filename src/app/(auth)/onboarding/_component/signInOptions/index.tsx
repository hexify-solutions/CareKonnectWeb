import { IconButton, Facebook, Instagram, Google, Linkedin } from "@hexify/atoms";
import styles from "./signInOptions.module.css";
import { handleSocialLogin } from "@/app/utils/auth";

const SignInOptions = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.lead}>Other sign in options</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <IconButton  data-variant="not-filled" onClick={() => handleSocialLogin("facebook")}>
            <Facebook />
          </IconButton>
        </li>
        <li className={styles.listItem}>
          <IconButton data-variant="not-filled" onClick={() => handleSocialLogin("google")}>
            <Google />
          </IconButton>
        </li>
        <li className={styles.listItem}>
          <IconButton  data-variant="not-filled" onClick={() => handleSocialLogin("linkedin")}>
            <Linkedin variant="boarded" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default SignInOptions;
