"use client";

import { Avatar, Button } from "@hexify/atoms";
import styles from "./dashboardBanner.module.css";
import { LineIcon } from "@hexify/atoms";
import { AvatarWithName, ImageBackgroundBanner } from "@hexify/components";
import { useAuthContext } from "@/context/auth";

const DashboardBanner = () => {
  const { profile } = useAuthContext();
  return (
    <div className={styles.wrapper}>
      <ImageBackgroundBanner>
        <div className={styles.banner}>
          <div className={styles.userDetails}>
            <Avatar size="medium" displayText="test" />
            <div className={styles.userDetailsText}>
              <span>Welcome back! </span>
              <div className={styles.userName}>
                <span>{profile?.fullName}</span> <LineIcon />
              </div>
            </div>
          </div>
          <div className={styles.otherDetails}>
            <div>
              <div>Reliance HMO</div>
              <div className={styles.emp}>RHM/20022/B</div>
              <div className={styles.emp2}>Red Beryl Lite Individual</div>
            </div>
            <Button
              className={styles.btn}
              variant="contained"
              rounded
              color="secondary"
              size="medium"
            >
              View benefit list
            </Button>
          </div>
        </div>
      </ImageBackgroundBanner>
    </div>
  );
};

export default DashboardBanner;
