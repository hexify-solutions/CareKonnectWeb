import clsx from "clsx";
import styles from "./signupBanner.module.css";
import GOOGLE_PLAY from "./assets/google_play.png";
import APP_STORE from "./assets/app_store.png";
import Image from "next/image";
import { Button } from "@hexify/atoms";

const SignupBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx("inner-wrapper", styles.innerWrapper)}>
        <div className={styles.lead}>
          Sign up today and connect with expert providers whenever you need
          them.
        </div>
        <div className={styles.btnWrapper}>
          <Button className={styles.signupButton} size="large" rounded variant="contained" color="primary">
            Register here
          </Button>
          <button className={styles.appButtons}>
            <Image
              src={GOOGLE_PLAY}
              width={185}
              height={61}
              alt="google play button"
            />
          </button>
          <button className={styles.appButtons}>
            <Image
              src={APP_STORE}
              width={185}
              height={61}
              alt="apple store button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
