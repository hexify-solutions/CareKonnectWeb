
import type { Metadata } from "next";
import styles from "./layout.module.css";
import LogoutModal from "@/components/profile/logoutModal";
import ProfileDeleteModal from "@/components/profile/deleteModal";

import clsx from "clsx";
import SideBar from "@/components/profile/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <h4 className={styles.label}>Account Settings</h4>
        <div className={styles.contentWrapper}>
<SideBar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <LogoutModal />
      <ProfileDeleteModal />
    </div>
  );
}
