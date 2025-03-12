
"use client"

import styles from "./layout.module.css";
import { withAuthState } from "@/hoc";
import routes from "@/lib/constants/routes";


function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className={styles.main}>
        <>{children}</>
      </main>
  );
}


export default withAuthState(RootLayout, true, routes.home)
