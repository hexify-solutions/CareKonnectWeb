import type { Metadata } from "next";
import clsx from "clsx";
import DashboardBanner from "@/components/userDashboard/dashboardBanner";
import LinkComponent from "@/components/userDashboard/dashboardLinkComponent ";
import styles from "./styles/layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="outer-container">
    <div className={clsx("inner-wrapper", styles.wrapper)}>
      <div className={styles.bannerWrapper}>
        <DashboardBanner />
      </div>
      <div className={styles.linkComponentWrapper}>
        <LinkComponent />
      </div>
      <main>{children}</main>
    </div>
    </div>
  );
}
