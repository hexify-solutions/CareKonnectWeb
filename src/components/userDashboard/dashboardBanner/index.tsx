"use client"

import { Avatar, Button } from "@hexify/atoms"
import styles from "./dashboardBanner.module.css"
import { LineIcon } from "@hexify/atoms"
import { ImageBackgroundBanner } from "@hexify/components"
import { useAuthContext } from "@/context/auth"
import { useRouter } from "next/navigation"
import routes from "@/lib/constants/routes"
import { isFeatureEnabled } from "../../../../../../packages/engine/brand/feature"

const DashboardBanner = () => {
  const { profile } = useAuthContext()

  const router = useRouter()

  const displayedData = {
    name: profile?.fullName,
    empId: "RHM/20022/B",
    plan: "Red Beryl Lite Individual",
    image: profile?.profile?.avatarUrl,
  }

  return (
    <div className={styles.wrapper}>
      <ImageBackgroundBanner>
        <div className={styles.banner}>
          <div className={styles.userDetails}>
            <Avatar
              src={displayedData?.image}
              size="medium"
              displayText={displayedData?.name}
            />
            <div className={styles.userDetailsText}>
              <span>Welcome back! </span>
              {!!displayedData?.name && (
                <div className={styles.userName}>
                  <span>{displayedData.name}</span> <LineIcon />
                </div>
              )}
            </div>
          </div>
          {isFeatureEnabled(["hmo"]) && (
            <div className={styles.otherDetails}>
              <div>
                <div>Reliance HMO</div>
                <div className={styles.emp}>{displayedData?.empId}</div>
                <div className={styles.emp2}>{displayedData?.plan}</div>
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
          )}
        </div>
      </ImageBackgroundBanner>
    </div>
  )
}

export default DashboardBanner
