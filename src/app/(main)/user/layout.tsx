
"use client"

import styles from "./layout.module.css";
import { Suspense } from "react";
import { withAuthState } from "@/hoc";
import routes from "@/lib/constants/routes";


function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<>Loading</>}>
      <main className={styles.main}>
        <>{children}</>
      </main>
    </Suspense>
  );
}


export default withAuthState(RootLayout, true, routes.home)
