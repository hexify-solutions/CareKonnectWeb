"use client";

import { Avatar, Button } from "@hexify/atoms";
import styles from "./dashboardBanner.module.css";
import { LineIcon } from "@hexify/atoms";
import { ImageBackgroundBanner } from "@hexify/components";
import { useAuthContext } from "@/context/auth";
import { useRouter } from "next/navigation";
import routes from "@/lib/constants/routes";

const DashboardBanner = () => {
  const { profile } = useAuthContext();
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <ImageBackgroundBanner>
        <div className={styles.banner}>
          <div className={styles.userDetails}>
            <Avatar size="medium" displayText="test" />
            <div className={styles.userDetailsText}>
              <span>Welcome back! </span>
              <div className={styles.userName}>
                <span>{profile?.firstName} {profile?.lastName}</span> <LineIcon />
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
              color="primary"
              size="medium"
              onClick={() => router.push(routes.userDashboardHealthBenefits)}
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
