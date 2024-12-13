import { IconButton, Facebook, Instagram, Google } from "@hexify/atoms";
import styles from "./signInOptions.module.css";

const SignInOptions = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.lead}>Other sign in options</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <IconButton  data-variant="not-filled">
            <Facebook />
          </IconButton>
        </li>
        <li className={styles.listItem}>
          <IconButton data-variant="not-filled">
            <Google />
          </IconButton>
        </li>
        <li className={styles.listItem}>
          <IconButton  data-variant="not-filled">
            <Instagram />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default SignInOptions;
