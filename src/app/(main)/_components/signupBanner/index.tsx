import clsx from "clsx"
import styles from "./signupBanner.module.css"
import { AppleStore, Button, GooglePlay } from "@hexify/atoms"
import { isFeatureEnabled } from "@hexify/engine/brand/feature"

const SignupBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx("inner-wrapper", styles.innerWrapper)}>
        <div className={styles.lead}>
          Sign up today and connect with expert providers whenever you need
          them.
        </div>
        <div className={styles.btnWrapper}>
          <Button
            className={styles.signupButton}
            size="large"
            rounded
            variant="contained"
            color="primary"
          >
            Register here
          </Button>
          {isFeatureEnabled("app") && (
            <>
              {/*<div className={styles.appButtonsWrapper}>*/}

              <button className={styles["store-button"]}>
                <GooglePlay />
                <span className={styles["store-text"]}>
                  <span className={styles["store-subtitle"]}>GET IT ON</span>
                  <span className={styles["store-title"]}>Google Play</span>
                </span>
              </button>

              <button className={styles["store-button"]}>
                <AppleStore />
                <span className={styles["store-text"]}>
                  <span className={styles["store-subtitle"]}>
                    Download on the
                  </span>
                  <span className={styles["store-title"]}>App Store</span>
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignupBanner
